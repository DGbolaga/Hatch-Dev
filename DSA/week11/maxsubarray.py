#find the max sub array in of size = k

nums = [2, 23, 4, 2, 1, 5]
def maxSub(arr, k):
    start = 0
    maxV = arr[0]
    for i, end in enumerate(nums):
        if abs(start - i) > k-1:
            start += 1
        maxV = max(maxV, sum(arr[start:i+1]))
    

    return maxV

print(maxSub([0, 3, 1, 5, 6], 3))
print(maxSub(nums, 3))