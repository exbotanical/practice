  .global main

  .data
printfmt:
  .string "fact(%ld) = %ld\n"
scanfmt:
  .string "%ld"
  .text

main:
  enter $16, $0

  mov $scanfmt, %rdi

  lea 0(%rsp), %rsi

  mov $0, %al
  call scanf

  mov $1, %rax
  mov 0(%rsp), %rcx

loop_cond:
  cmp $0, %rcx
  jle loop_done

  imul %rcx

  dec %rcx
  jmp loop_cond
loop_done:
  mov $printfmt, %rdi

  mov 0(%rsp), %rsi
  mov %rax, %rdx
  mov $0, %al
  call printf

  mov $0, %rax
  leave
  ret
