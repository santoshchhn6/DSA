# def maxCoins(N, a):
#     sum = 0
#     i = 0
#     while (i < N):
#         if (len(a) > 3):
#             j = 1
#             minIndex = j
#             min = a[j]
#             while (j < len(a)-1):
#                 if (min > a[j]):
#                     min = a[j]
#                     minIndex = j
#                 j += 1
#             sum += a[minIndex-1]*a[minIndex]*a[minIndex+1]
#             del a[minIndex]
#         else:
#             if (len(a) == 3):
#                 sum += a[0]*a[1]*a[2]
#                 del a[1]
#             elif (len(a) == 2):
#                 sum += a[0]*a[1]
#                 minIndex = 0 if a[0] < a[1] else 1
#                 del a[minIndex]
#             else:
#                 sum += a[0]
#                 del a[0]
#         i += 1
#     return sum


a = [3, 1, 5, 8]  # 167
b = [3, 6, 6, 2, 6, 1, 8, 7, 9, 2]  # 1929
# print(maxCoins(len(b), b))
