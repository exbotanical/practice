package com.github.exbotanical.leetcode

import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class Add2NumbersTest {
    @Test
    fun `test 1`() {
        val l1 = ListNode(2, ListNode(4, ListNode(3)))
        val l2 = ListNode(5, ListNode(6, ListNode(4)))
        val expected = ListNode(7, ListNode(0, ListNode(8)))

        assertEquals(expected, addTwoNumbers(l1, l2))
    }

    @Test
    fun `test 2`() {
        val l1 = ListNode(0)
        val l2 = ListNode(0)
        val expected = ListNode(0)

        assertEquals(expected, addTwoNumbers(l1, l2))
    }

    @Test
    fun `test 3`() {
        
        val l1 =
            ListNode(
                9,
                ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9))))))
            )
        val l2 = ListNode(9, ListNode(9, ListNode(9, ListNode(9))))
        val expected =
            ListNode(
                8, ListNode(
                    9, ListNode(
                        9, ListNode(
                            9, ListNode(0, ListNode(0, ListNode(0, ListNode(1))))
                        )
                    )
                )
            )

        assertEquals(expected, addTwoNumbers(l1, l2))
    }
}

