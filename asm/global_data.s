	.global main

	.data
longfmt:
	.string "%ld\n"
foo:
	.space 24, 0
bar:
	.int 10
baz:
	.int 20
	.int 30
	.int 40

	.text

main:
	enter $0, $0

	mov $baz, %r9
	mov $bar, %r10

	sub %r10, %r9

	mov $longfmt, %rdi
	mov %r9, %rsi
	mov $0, %al
	call printf

	leave
	ret
