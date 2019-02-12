#Checks for end
#1 for X won
#-1 for O won
#0 for not over yet
def check_terminate(A):
    x="X"
    #check win across main diagonal 
    if A[0] == A[4] == A[8] != " ":
        if A[0] == x:
            return 1
        else:
            return -1
    #check win across left diagonal
    if A[2] == A[4] == A[6] != " ":
        if A[2] == x:
            return 1
        else:
            return -1
    #check win across top row
    if A[0] == A[1] == A[2] != " ":
        if A[1] == x:
            return 1
        else:
            return -1
    #check win accross middle row
    if A[3] == A[4] == A[5] != " ":
        if A[3] == x:
            return 1
        else:
            return -1
    #check win accross last row
    if A[6] == A[7] == A[8] != " ":
        if A[7] == x:
            return 1
        else:
            return -1
    #check win accross first column
    if A[0] == A[3] == A[6] != " ":
        if A[0] == x:
            return 1
        else:
            return -1
    #check win accross second column
    if A[1] == A[4] == A[7] != " ":
        if A[1] == x:
            return 1
        else:
            return -1
    #check win accross last column
    if A[2] == A[5] == A[8] != " ":
        if A[2] == x:
            return 1
        else:
            return -1
    #No wins
    return 0