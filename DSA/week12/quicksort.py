from random import randint
def quicksort(arr, low, high):
    if low >= high:
        return
    
    s = low
    e = high
    mid = s + (e-s)//2  
    pivot = arr[mid]
    while s <= e:
        while arr[s] < pivot:
            s+=1
        while arr[e] > pivot:
            e-=1
        
        if (s<=e):
            arr[s], arr[e] = arr[e], arr[s]
            s+=1
            e-=1
    quicksort(arr, low, e)
    quicksort(arr, s, high)


n = [randint(0, 100) for i in range(20)]
arr = [0, 2, 1, 9, 5]
print(arr)
quicksort(arr, 0, len(arr)-1)
print(arr)
