open OUnit2
open Kata.Leap_years

let suite =
  "Example tests"
  >::: [
         ( "Year 2020 is a leap year" >:: fun _ ->
           assert_equal true (is_leap_year 2020) ~printer:string_of_bool
             ~msg:"Incorrect answer for year = 2020" );
         ( "Year 2000 is a leap year" >:: fun _ ->
           assert_equal true (is_leap_year 2000) ~printer:string_of_bool
             ~msg:"Incorrect answer for year = 2000" );
         ( "Year 2015 is not a leap year" >:: fun _ ->
           assert_equal false (is_leap_year 2015) ~printer:string_of_bool
             ~msg:"Incorrect answer for year = 2015" );
         ( "Year 2100 is not a leap year" >:: fun _ ->
           assert_equal false (is_leap_year 2100) ~printer:string_of_bool
             ~msg:"Incorrect answer for year = 2100" );
       ]

let _ = run_test_tt_main suite
