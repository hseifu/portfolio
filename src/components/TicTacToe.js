import React from 'react';
import Square from './Square';
import GameHeader from './GameHeader';
import addState from '../../actions/addState';
import setState from '../../actions/setState';
import checkTerminate from '../../actions/checkTerminate';
import SubHeader from './SubHeader';

const initialState = {
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
    userState: '',
    turn: 'user',
    gameState: 'play',
    userId: parseInt(Math.random() * 1000)
}

class TicTacToe extends React.Component {    
    state = initialState;
    componentDidUpdate() {
        
        console.log('now:', this.state);
        const json = JSON.stringify(this.state);
        localStorage.setItem('state',json);
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('state');
            const state = JSON.parse(json);
            console.log("retrieved", state);
            if(state){
                this.setState(() => ({...state}));
                const chosenChar = state.userState;
                setState(state, chosenChar, this.state.userId);
            }
            else {
                setState('','', this.state.userId);
            }
        }
        catch (e) {
            console.log("component did mount failed")
        }
    }
    resetGame = () => {
        setState('','');
        localStorage.removeItem('state');
        this.setState(initialState);
    }
    chooseCharacter = (selectedChar) => {
        this.setState(() => ({userState: selectedChar}));
    }
    handlePick = (position) => {
        const setObj = {};
        setObj[position] = this.state.userState;
        this.setState(() => (setObj));
        this.setState(() => ({turn: 'computer'}));
        
        addState(position, this.state.userState).then((value) => {
            if (value) {
                console.log("got", value);
            
            
                const newObj = {};
                
                newObj[value] = this.state.userState == 'X' ? 'O' : 'X';
                
                this.setState(() => (newObj));
                this.setState(() => ({turn: 'user'}));
            }
            else {
                
                checkTerminate().then(({gameState, lastMove}) => {
                    console.log('game terminated', gameState, lastMove);
                    const lastMoveMade = {};
                    lastMoveMade[lastMove] = this.state.userState == 'X' ? 'O' : 'X';
                    this.setState(() => ({gameState, ...lastMoveMade }))
                })
            }
            
        });
        
    }
    render() {
        return (
            <div>
                <SubHeader subTitle="Tic-Tac-Toe"/>
                <div className="game">
                    {this.state.userState ? 
                    <div>
                        <div className="row-1">
                            <div className="cell-1">
                                <Square userState={this.state.userState} curValue={this.state[1]} handlePick={this.handlePick} disable={!!this.state[1] || this.state.turn !== "user" || this.state.gameState !== "play"} value={1}/>
                            </div>
                            <div className="cell-2">
                                <Square userState={this.state.userState} curValue={this.state[2]} handlePick={this.handlePick} disable={!!this.state[2] || this.state.turn !== "user" || this.state.gameState !== "play"} value={2}/>
                            </div>
                            <div className="cell-3">
                                <Square userState={this.state.userState} curValue={this.state[3]} handlePick={this.handlePick} disable={!!this.state[3] || this.state.turn !== "user" || this.state.gameState !== "play"} value={3}/>
                            </div>
                        </div>
                        <div className="row-2">
                            <div className="cell-1">
                                <Square userState={this.state.userState} curValue={this.state[4]} handlePick={this.handlePick} disable={!!this.state[4] || this.state.turn !== "user" || this.state.gameState !== "play"} value={4}/>
                            </div>
                            <div className="cell-2">
                                <Square userState={this.state.userState} curValue={this.state[5]} handlePick={this.handlePick} disable={!!this.state[5] || this.state.turn !== "user" || this.state.gameState !== "play"} value={5}/>
                            </div>
                            <div className="cell-3">
                                <Square userState={this.state.userState} curValue={this.state[6]} handlePick={this.handlePick} disable={!!this.state[6] || this.state.turn !== "user" || this.state.gameState !== "play"} value={6}/>
                            </div>
                        </div>
                        <div className="row-3">
                            <div className="cell-1">
                                <Square userState={this.state.userState} curValue={this.state[7]} handlePick={this.handlePick} disable={!!this.state[7] || this.state.turn !== "user" || this.state.gameState !== "play"} value={7}/>
                            </div>
                            <div className="cell-2">
                                <Square userState={this.state.userState} curValue={this.state[8]} handlePick={this.handlePick} disable={!!this.state[8] || this.state.turn !== "user" || this.state.gameState !== "play"} value={8}/>
                            </div>
                            <div className="cell-3">
                                <Square userState={this.state.userState} curValue={this.state[9]} handlePick={this.handlePick} disable={!!this.state[9] || this.state.turn !== "user" || this.state.gameState !== "play"} value={9}/>
                            </div>
                        </div>
                    </div> :
                    <GameHeader chooseCharacter={this.chooseCharacter}/>
                    }
                    {this.state.gameState !== "play" ? this.state.gameState === "lost" ? <div> You lost <button onClick={this.resetGame}> Play Again </button></div> : <div> Game is Draw <button onClick={this.resetGame}> Play Again </button></div> : undefined}

                </div>
            </div>
        )
    }
}

export default TicTacToe;