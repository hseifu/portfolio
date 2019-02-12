import os
from BoardClass import Board as Board
from checkTerminate import check_terminate
from firebase import database

#minimax
#will never get a full board as input
mv=0
def Minimax2(A):
    global mv
    moves=[]
    for i in range(9):
        if A.values[i] == " ":
            A.values[i] = A.turn

            #Base case
            temp=check_terminate(A)
            if temp==-1:
                mv=i
                A.values[i]=" "
                return -1
            elif temp==1:
                mv=i
                A.values[i]=" "
                return 1
            elif A.isFull():
                mv=i
                A.values[i]=" "
                return 0
            
            #Change Turn
            A.change_turn()

            moves.append([i,Minimax2(A)])

            #Reset
            A.change_turn()
            A.values[i]=" "

    if A.turn=="X":
        #Find Max
        mv=moves[0][0]
        mx_sc=moves[0][1]
        for x in moves:
            if x[1] > mx_sc:
                mv=x[0]
                mx_sc=x[1]
        return mx_sc
    else:
        #Find Min
        mv=moves[0][0]
        mi_sc=moves[0][1]
        for x in moves:
            if x[1] < mi_sc:
                mv=x[0]
                mi_sc=x[1]
        return mi_sc

message = ""
userState = ""

def valuesListener(message_toread):
    global message
    message = message_toread
    print(message)


def getValuesFromScratch( ):
    turn = ""
    moves = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    global userState
    while 1:
        vals = database.child('/game/values').get()
        if vals.val():
            userState = database.child('/game/userState').get().val()
            if (database.child('/game/turn') == "user"):
                turn = "O"
            else:
                turn = "X"
            for index in vals.val():
                if index:
                    print(index, vals.val())
                    if userState == "O":
                        moves[int(index)-1] = vals.val()[index]
                    else:
                        if vals.val()[index] == "X":
                            moves[int(index)-1] = "O"
                        else:
                            moves[int(index)-1] = "X"
            break
    return turn, moves, userState

def getUpdate( ):
    userInput = False
    global message
    if message['event'] == 'patch' and database.child('/game','turn').get().val() == "computer":
        print(message)
        if not type(message['data']) == type("test"):
            userInput = list(message['data'].keys())[0]
    return userInput

def sendMv(move,  ):
    print(database.child('/game/values').get().val())
    if userState == "X":
        ret = database.child('/game/values/'+str(move+1)).set("O")
        if ret:
            print(ret)
            return
    else:
        ret = database.child('/game/values/'+str(move+1)).set("X")
        if ret:
            print(ret)
            return
    


def Play( ):
    
    global userState
    
    while 1:
        (turn, moves, us) = getValuesFromScratch( )
        print(moves, turn, us)
        if turn and moves and us:
            break
    Game_Board = Board(turn, moves)
    
    #Choose Player turn
    pl_tn="O"

    #Game Loop
    while True:
        
        #Display board
        print("Board: ")
        Game_Board.printBoard()

        #Display turn
        print("Turn: ", Game_Board.turn)

        #Player turn
        if Game_Board.turn==pl_tn:
            while (1):
                pl = getUpdate( )
                if pl:
                    break
            Game_Board.values[int(pl)-1] = Game_Board.turn
        else:
            #Computer turn (X)
            Minimax2(Game_Board)
            Game_Board.values[mv] = Game_Board.turn
            

        #Check For Winner
        temp=check_terminate(Game_Board)
        if temp == 1:
            Game_Board.printBoard()
            while 1:
                if database.child('/game/gameState/state').set("lost") and database.child('/game/gameState/lastmove').set(mv+1):
                    print("Game over, winner is X")
                    break
            break 
        elif temp == -1:
            Game_Board.printBoard()
            while 1:
                if database.child('/game/gameState/state').set('won') and database.child('/game/gameState/lastmove').set(mv+1):
                    print("Game over, winner is O")
                    break
            break
        elif Game_Board.isFull():
            Game_Board.printBoard()
            while 1:
                if database.child('/game/gameState/state').set('draw') and database.child('/game/gameState/lastmove').set(mv+1):
                    print("draw")
                    break
            break
        sendMv(mv,  )

        #Switch turn
        Game_Board.change_turn()
    

my_stream = database.child().stream(valuesListener)
while True:
    if message and not message['data']:
        Play()


my_stream.close()