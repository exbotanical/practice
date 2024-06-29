	.global main

	.data
scanfmt:	.string "%ld"
printfmt: .string "fact(%ld) = %ld\n"

	.text

fact:
	// every time we enter the function, grow the stack down by 8 bytes (well, 16
	// because of the alignment invariant)
	enter $16, $0

	mov $1, %rax // set retval to 1; we'll just return this if we dont need to recurse

	// if x <= 1 return 1
	cmp $1, %rdi // remember, rdi holds our arg

	jle fact_done // if <= 1 we're done
	// before we do this we need to save x (%rdi) because we're about to decrement
	// it

	mov %rdi, 8(%rsp)
	// x - 1
	dec %rdi
	// call fact(%rdi) -> fact(x - 1)
	call fact

	// move the original x back to rdi
	mov 8(%rsp), %rdi

	// %rax has our new result, and is also the implicit first arg to imul
	// this is x * fact(x - 1)
	imul %rdi

fact_done:
	leave
	ret

main:
	// Allocate 16 bytes of memory
	// We only need 8, but alloc 16 to satisfy the x86 alignment invariant
	enter $16, $0

	// Move the scan fmt string into the rdi register
	// where the first fn argument always resides
	mov $scanfmt, %rdi

	// Move the address at the bottom of the stack into rsi, where our second
	// argument to scanf will live (x)
	lea 0(%rsp), %rsi

	// Calling convention: specify how many floating point arguments are being
	// passed to a variadic function
	mov $0, %al

	// Call scanf, updating our stack variable
	call scanf

	// move x into the first arg register
	mov 0(%rsp), %rdi

	// call fact with x
	call fact

	mov $printfmt, %rdi
	// move original input into second arg register
	mov 0(%rsp), %rsi
	// move fact result into third arg register
	mov %rax, %rdx
	mov $0, %al
	call printf

	// return 0 to indicate success
	mov $0, %rax
	leave
	ret
