package com.github.exbotanical.leetcode

data class ListNode(
    var v: Int,
    var next: ListNode? = null,
)

fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
    var l1Mut = l1
    var l2Mut = l2

    var stack = 0

    var ret: ListNode? = null
    var retPtr = ret

    while (l1Mut != null || l2Mut != null) {
        var sum = (l1Mut?.v ?: 0) + (l2Mut?.v ?: 0) + stack
        if (sum >= 10) {
            stack = sum / 10
            sum %= 10
        } else {
            stack = 0
        }

        if (ret == null) {
            ret = ListNode(sum)
            retPtr = ret
        } else {
            ret.next = ListNode(sum)
            ret = ret.next
        }
        l1Mut = l1Mut?.next
        l2Mut = l2Mut?.next
    }

    while (stack != 0) {
        var sum = stack
        if (sum >= 10) {
            stack = sum / 10
            sum %= 10
        } else {
            stack = 0
        }

        ret!!.next = ListNode(sum)
        ret = ret.next
    }

    return retPtr
}