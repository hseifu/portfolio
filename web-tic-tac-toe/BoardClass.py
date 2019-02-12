#board contains a list of characters representing
#the different values in the different entries of
#a board, where " " = empty slot and has the property
#turn represents which character goes next
class Board:
    def __init__(self, turn = "X", values = [" ", " ", " ", " ", " ", " ", " ", " ", " "], orig = None):
        self.values = values
        self.turn = turn

    def copy_constructor(self, orig):
        self.values = orig.values
        self.turn = orig.turn

    #Is Board Full
    def isFull(self):
        return not (" " in self.values)

    #overloaded [] operator
    def __getitem__(self, index):
        return self.values[index]

    #overloading the in operator
    def __contains__(self, val):
        return val in self.values

    #change turn
    def change_turn(self):
        if self.turn == "X":
            self.turn = "O"
        else:
            self.turn = "X"

    #Print Board
    def printBoard(self):
        print(self[0] + '|' + self[1] + '|' + self[2])
        print('-+-+-')
        print(self[3] + '|' + self[4] + '|' + self[5])
        print('-+-+-')
        print(self[6] + '|' + self[7] + '|' + self[8])