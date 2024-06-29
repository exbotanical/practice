  .global main

  .data
scanfmt:
  .string "%ld"

printfmt:
  .string "fact(%ld) = %ld\n"

promptfmt:
	.string "enter a number: "
  .text


/*
long x
scanf("%ld", &x)
long y = 1
for (int i = x; i > 0; i++) {
  y = y * i
}

printf("fact(%ld) = %ld\n", x, y)

*/

main:
  // Alloc 16 bytes (we only need 8, but x86 requires alignment at 16)
  enter $16, $0

	mov $promptfmt, %rdi
	mov $0, %al
	call printf

  // Setup fmt str
  // %rdi always first arg to fn in x86-64
  mov $scanfmt, %rdi

  // "load effective address"
  // Address of bottom of stack into rsi
  // this is where we want to store the input
  lea 0(%rsp), %rsi

	// calling convention; we must indicate num of floating pt args in XMM
	// registers
  mov $0, %al
  call scanf

  mov $1, %rax // y = 1
  mov 0(%rsp), %rcx // Move value at rsp + 0 into rcx (loop counter register)
loop_cond:
  cmp $0, %rcx
  // jump if less or eq
  // reads a flag set by the cmp instruction
  jle loop_done

  // %rax is implicit first arg of imul
  imul %rcx // y = y * i

	// decrement it
  dec %rcx
  jmp loop_cond
loop_done:
  mov $printfmt, %rdi // printf reg are (in order) rdi, rsi, rdx, rcx ...

  // bottom of stack into first printf arg
  mov 0(%rsp), %rsi
  mov %rax, %rdx
  mov $0, %al
  call printf

  mov $0, %rax
  leave
  ret
