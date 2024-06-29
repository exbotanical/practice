  .global main

  .data
usage: .string "./sum_arr N"
scanfmt: .string "%ld"
outfmt: .string "sum = %ld\n"
failfmt: .string "failed; count != 1"
  .text

// xs -> %rdi
// n -> %rsi
// y -> %rax
// i -> %rcx
sum_arr:
  enter $0, $0

  // long y = 0;
  // for (long i = 0; i < n; i++) {
  //     y += xs[i];
  // }

  // return y;

  // int y = 0
  mov $0, %rax
  // int i = 0
  mov $0, %rcx
loop_cond:
  // if i >= n done
  cmp %rsi, %rcx
  jge loop_done

  // y += xs[i]
  // %rdi[%rcx] where size of an el is 8
  add (%rdi, %rcx, 8), %rax

  // i++
  inc %rcx
  jmp loop_cond

loop_done:
  leave
  ret

// n -> %r12
// xs -> %r13
// i -> %r14
// count -> %rax
main:
  push %r12
  push %r13
  push %r14
  enter $8, $0

  // if (argc != 2) ...
  cmp $2, %rdi
  jne main_usage

  // %rdi = argv[1]
  mov 8(%rsi), %rdi
  // atol(argv[1])
  call atol
  mov %rax, %r12

  // 8 -> sizeof(long)
  mov $8, %r10
  // 8 * %rax (where %rax holds atol(%r12) or n)
  imul %r10
  mov %rax, %rdi
  // malloc(n * sizeof(long))
  call malloc
  mov %rax, %r13
  // long *xs = malloc(n * sizeof(long));

  // i = 0
  mov $0, %r14

main_loop_cond:
  // if (i >= n) break
  cmp %r12, %r14
  jge main_loop_done

  // int count = scanf("%ld", &(xs[i]));
  mov $scanfmt, %rdi
  // &(xs[i]) -> %rsi
  lea (%r13, %r14, 8), %rsi
  mov $0, %al
  call scanf

  // if (count != 1) abort()
  cmp $1, %rax
  jne main_fail

  // i++
  inc %r14
  jmp main_loop_cond

main_loop_done:
  // sum_arr(xs, n)
  mov %r13, %rdi
  mov %r12, %rsi
  call sum_arr

  / /printf("sum = %ld\n", sum_arr(xs, n));
  mov $outfmt, %rdi
  mov %rax, %rsi
  mov $0, %al
  call printf

  mov %r13, %rdi
  call free

  jmp main_done

main_fail:
  mov $failfmt, %rdi
  call puts
  call abort

main_usage:
  mov $usage, %rdi
  call puts
  mov $1, %rax
  jmp main_done

main_done:
  leave
  pop %r14
  pop %r13
  pop %r12
  ret

/*
long sum_arr(long *xs, long n) {
  long y = 0;
  for (long i = 0; i < n; i++) {
      y += xs[i];
  }

  return y;
  // xs++
  inc %rdi
}

int main(int argc, char **argv) {
  if (argc != 2) {
    puts("nope");
    return 1;
  }

  long n = atol(argv[1]);
  long *xs = malloc(n * sizeof(long));

  for (long i = 0; i < n; i++) {
    int count = scanf("%ld", &(xs[i]));
    if (count != 1) abort()
  }

  printf("sum = %ld\n", sum_arr(xs, n));

  free(xs);

  return 0;
}
*/
