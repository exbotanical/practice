/*
	int main(int argc, char**argv) {
	 	long a = atol(argv[1]);
	 	long b = atol(argv[2]);

	 	if (a > b) {
			printf("$a > $b");
		} else {
			printf("$a <= $b");
		}
*/

	// rdi, rsi, rdx, rcx, r8, r9

	.global main

	.data
		usage: .string "./argv NN NN"
		bigmsg: .string ">"
		smlmsg: .string "<="
		msg: .string "%d %s %d\n"
	.text

main:
	// We need to use safe registers for these
	push %r12
	push %r14
	push %r15

	// Add 8 to align
	enter $8, $0

	// Check that we have 3 args (rdi is our first arg)
	cmp $3, %rdi
	je main_cmp

	mov $usage, %rdi
	call puts
	mov $1, %rax
	jmp done

main_cmp:
	// save argv
	mov %rsi, %r12

	// grab argv[1] - 8 byte offset
	mov 8(%r12), %rdi
	// call atol with argv[1] in rdi
	call atol
	// move result to r14 to save it
	mov %rax, %r14

	// do it again with argv[2]
	mov 16(%r12), %rdi
	call atol
	mov %rax, %r15

	// cmp is flipped (att syntax)
	cmp %r15, %r14
	jg big // if r14 > r15
	jmp sml // else

big:
	mov $bigmsg, %rax
	jmp print

sml:
	mov $smlmsg, %rax
	jmp print

print:
	mov $msg, %rdi
	mov %r14, %rsi
	mov %rax, %rdx
	mov %r15, %rcx

	mov $0, %al
	call printf

	// successful retval
	mov $0, %rax

done:
	leave
	pop %r15
	pop %r14
	pop %r12
	ret
