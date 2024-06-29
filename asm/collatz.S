/*
long iterate(long x) {
  if (x % 2 == 0) {
    return x / 2;
  }
  return x * 3 + 1;
}
// argc -> %rdi
// argv[0][0] -> %rsi
// x -> %r
int main(int argc, char **argv) {
  long x = atol(argv[1]);
  long i = 0;

  while (x > 1) {
    printf("%ld\n", x);
    x = iterate(x);
    i++;
  }

  printf("i = %ld\n", i);
  return 0;
}
*/

  .global main

  .data
xfmt: .string "x=%ld\n"
ifmt: .string "i=%ld\n"
  .text

iterate:
  enter $0, $0

  mov %rdi, %rax

  mov $2, %r10
  cqo // sign extend
  idiv %r10

  cmp $0, %rdx // Remainder goes here
  je iterate_then
  jmp iterate_else

iterate_then:
  // nothing to do x/2 is already in rax
  jmp iterate_done

iterate_else:
  // move rdi into rax again because we want the original x
  // (not the quotient of x/2)
  mov %rdi, %rax

  mov $3, %r10
  imul %r10

  inc %rax

iterate_done:
  leave
  ret

main:
  push %r12
  push %r13
  enter $0, $0

  mov 8(%rsi), %rdi
  call atol
  mov %rax, %r12
  mov $0, %r13

while:
  cmp $1, %r12
  jle main_done

  mov $xfmt, %rdi
  mov %r12, %rsi
  mov $0, %al
  call printf

  mov %r12, %rdi
  call iterate
  mov %rax, %r12
  inc %r13

  jmp while

main_done:
  mov $ifmt, %rdi
  mov %r13, %rsi
  mov $0, %al
  call printf

  leave
  pop %r13
  pop %r12
  ret
