  .global main

  .data
usage_str: .string "requires 1 argument"
fmt: .string "%c"
  .text

main:
  push %r12
  enter $8, $0
  cmp $2, %rdi
  jne usage

  mov 8(%rsi), %r12

print_loop:
  movb (%r12), %al
  cmpb $0, %al
  je done

  mov $fmt, %rdi
  mov %al, %sil
  mov $0, %al
  call printf

  inc %r12
  jmp print_loop

usage:
  mov $usage_str, %rdi
  call puts

done:
  mov $0, %rax
  leave
  pop %r12
  ret
