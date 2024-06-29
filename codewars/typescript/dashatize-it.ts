// Given an integer, return a string with dash '-' marks before and after each odd digit,
// but do not begin or end the string with a dash mark.

export function dashatize(num: number): string {
  return 'TODO:'
}

if (import.meta.vitest) {
  const { expect } = import.meta.vitest

  expect(dashatize(274)).toEqual('2-7-4')
  expect(dashatize(5311)).toEqual('5-3-1-1')
  expect(dashatize(86320)).toEqual('86-3-20')
  expect(dashatize(974302)).toEqual('9-7-4-3-02')
  expect(dashatize(0)).toEqual('0')
  expect(dashatize(-1)).toEqual('1')
  expect(dashatize(-28369)).toEqual('28-3-6-9')
}
