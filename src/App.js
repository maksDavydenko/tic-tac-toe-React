import React, {Fragment} from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            count: 0
        };
        this.winnerLine = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

        ]

    }

    isWinner = () => {
        let someoneWin = false;
        let s = (this.state.count % 2 === 0) ? 'X' : 'O';

        for (let i = 0; i < 8; i++) {
            let line = this.winnerLine[i];

            if (this.state.squares[line[0]] === s
                && this.state.squares[line[1]] === s
                && this.state.squares[line[2]] === s  && this.state.count <= 8) {
                someoneWin = true;
                this.endGame(s);
                someoneWin = false;
            }
        }
        if(this.state.count === 8 && !someoneWin) {
            this.endGame(null);
            someoneWin = false;
        }

    };
    endGame(player){

        setTimeout(() => {

            this.setState({squares: Array(9).fill(null)});
            this.setState({count: 0});

                if(player){
                    alert(`${player} player win, restart game?`);
                }
                else {
                    alert('to end in a draw');
                }

            }, 1000);
    }


    clickHandler = event => {
        let data = event.target.getAttribute('data');
        let currentSquares = this.state.squares;
        if (currentSquares[data] === null) {
            currentSquares[data] = (this.state.count % 2 === 0) ?
                'X' : 'O';
            this.setState({count: this.state.count + 1});
            this.setState({squares: currentSquares});
        } else {
            alert('Field is not empty')
        }
        this.isWinner();

    };


    render() {
        const cellArr = [0,1,2,3,4,5,6,7,8];
        return (
            <div className='tic-tac-toe'>
                {cellArr.map(cell => {
                    return (<div className='ttt-grid' onClick={this.clickHandler}
                                 data={cell}>{this.state.squares[cell]}</div>)
                })
                }

            </div>
        );
    }
}

export default App;
