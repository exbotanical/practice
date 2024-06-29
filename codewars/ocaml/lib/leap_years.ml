let ( % ) x y = x mod y

let is_leap_year (year : int) : bool =
  (year % 4 = 0 && not (year % 100 = 0)) || year % 400 = 0
