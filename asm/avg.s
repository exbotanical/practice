  .global main

  .data
fmt: .string "avg=%ld\n"
  .text

avg:
  enter $0, $0

  add %rdi, %rsi
  mov %rsi, %rax

  mov $2, %r10
  cqo
  idiv %r10

  leave
  ret

main:
  enter $0, $0

  mov $7, %rdi
  mov $3, %rsi
  call avg

  mov $fmt, %rdi
  mov %rax, %rsi
  mov $0, %al
  call printf

  mov $0, %rax
  leave
  ret
