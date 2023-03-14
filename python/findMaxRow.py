def findMaxRow(mat, N):
    count = 0
    max = 0
    mrow = 0
    for i in range(N):
        row = mat[i]
        count = 0
        for j in row:
            if (j == 1):
                count = count+1

        if (count == N):
            return [i, count]
        if (max < count):
            mrow = i
            max = count
    return [mrow, max]
