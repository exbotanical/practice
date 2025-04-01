  .global main

  .data

  .text

main:
  // Prologue:
  // push callee-save (safe) registers
  enter $, $0

  /*
    Alignment Invariant:
    `8 * (#num of safe registers) + (bytes registered in enter) / 16 == 0

    Temporary Registers (assume function calls will overwrite these i.e. caller save)
    In order: %rdi, %rsi, %rdx, %rcx, %r8, %r9

    Safe
    Won't get clobbered by function calls - we must save and restore the old value i.e. callee-save.
    %rbx, %r12..%r15

    Special
    Stack registers. Technically safe but we don't want to use them like that (they're reserved).
    %rsp, %rbp


    Stack
    enter $32, $0

    This gives us 4 slots to store stuff: 0(%rsp), 8(%rsp), 16(%rsp), 24(%rsp)

    24(%rsp) = -8(%rbp) where %rbp is the base pointer
    Elsewhere
    Usually a global label
  */


  leave
  // Epilogue:
  // pop callee-save (safe) registers in reverse order
  ret

// File extensions (just a convention, nothing more)
// .s -> normal assembly
// .S -> pass thru c preprocessor first
