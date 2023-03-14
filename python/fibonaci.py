# 1 1 2 3 5 8 13 21 34

def fibo(n):
    f = 1
    s = 1
    print(s)
    for i in range(n-1):
        print(s)
        sum = f+s
        f = s
        s = sum


fibo(10)
