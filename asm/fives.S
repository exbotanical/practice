/*
  - take a string as argv[1]
  - determine if all chars are 5s
  - print "all fives" if true
  - else, print "not all fives"
*/

  .global main

  .data
    all_fives_fmt: .string "all fives"
    not_all_fives_fmt: .string "not all fives"
  .text

/*
  while (*text) {
    if (*text != c) return 0;
    text++;
  }
  return 1;
*/
all_match:
  enter $0, $0
  mov $1, %rax

all_match_loop_cond:
  // x = *text
  mov (%rdi), %r10b
  // while (x)
  cmp $0, %r10b
  // x == '\0'
  je all_match_loop_done

  // if (x == c)
  cmp %r10b, %sil
  // continue
  je all_match_loop_next
  // return 0
  mov $0, %rax
  jmp all_match_loop_done

all_match_loop_next:
  // text++
  inc %rdi
  jmp all_match_loop_cond

all_match_loop_done:

  leave
  ret

main:
  enter $0, $0

  // str = argv[1]
  mov 8(%rsi), %rdi
  // char is 8 bits so we want to refer to the lower 8 bits of %rsi
  // versus an int (64 bits here)
  mov $'5, %sil
  call all_match

  cmp $0, %rax
  je not_all_fives
  jmp all_fives

all_fives:
  mov $all_fives_fmt, %rdi
  jmp main_done

not_all_fives:
  mov $not_all_fives_fmt, %rdi

main_done:
  call puts

  mov $0, %rax
  leave
  ret

/*
  %rsi: the full 64-bit register.
  %esi: the lower 32 bits of the %rsi register.
  %si: the lower 16 bits of the %rsi register.
  %sil: the lower 8 bits of the %si (which are the least significant 8 bits of the %rsi).
*/
