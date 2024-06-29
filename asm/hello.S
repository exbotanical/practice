  .global main

  .data
long_fmt: .string "here dawgus: %ld\n"

  .text

add2:
  enter $0, $0

  add $2, %rdi

  mov %rdi, %rax

  leave
  ret

main:
  enter $0, $0


  mov $5, %rdi

  call add2

  mov $long_fmt, %rdi
  mov %rax, %rsi

  mov $0, %al
  call printf

  mov $0, %rax
  leave
  ret
