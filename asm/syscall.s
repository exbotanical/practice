  .global main

  .data
introfmt: .string "welcome to my program buh\n"
printfmt: .string "lines in msg.txt: %ld\n"
filename: .string "msg.txt"
  .text

main:
  push %r14
  push %r15
  // Read buffer -> 0(%rsp), 192b
  // Print buffer -> 192(%rsp), 64b
  enter $256, $0

  mov $introfmt, %rdi
  call strlen

  // stdout
  mov $1, %rdi
  // buffer
  mov $introfmt, %rsi
  // length
  mov %rax, %rdx
  // syscall num 1 for write
  mov $1, %rax
  syscall

  // open
  mov $2, %rax
  // filename
  mov $filename, %rdi
  // flags
  mov $0, %rsi
  syscall

  // Save the fd in a safe register
  mov %rax, %r14
  // read
  mov $0, %rax
  // fd
  mov %r14, %rdi
  // read buffer
  lea 0(%rsp), %rsi
  // num bytes
  mov $192, %rdx
  syscall

  // num bytes read
  mov %rax, %r15

  // i = 0
  mov $0, %rcx
  // num newlines
  mov $0, %rdx

loop_cond:
  // i < size
  cmp %r15, %rcx
  jge loop_done

  mov $0, %rax
  // 1 byte from buffer[i]
  mov (%rsp, %rcx, 1), %al
  // if (buffer[i] == '\n') ...
  cmp $'\n', %al
  // false -> continue
  jne loop_next
  // true -> newlineCount++
  inc %rdx

loop_next:
  inc %rcx
  jmp loop_cond

loop_done:
  // sprintf(&printbuf)
  lea 192(%rsp), %rdi
  mov $printfmt, %rsi
  mov $0, %al
  call sprintf

  // stdout
  mov $1, %rdi
  // write buf
  lea 192(%rsp), %rsi
  // sprintf retval
  mov %rax, %rdx
  mov $1, %rax
  syscall

  mov $0, %rax
  leave
  pop %r15
  pop %r14
  ret
