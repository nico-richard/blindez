import { Component, splitProps } from 'solid-js'
import './score-board.sass'

interface ScoreBoardProps {
    score: number
    onReset: () => void
}

export const ScoreBoard: Component<ScoreBoardProps> = (props) => {
    const [local, others] = splitProps(props, ['score', 'onReset'])
    return (
        <div class="score-board">
            <button onclick={local.onReset}>Reset</button>
            <h2>Score : {local.score}</h2>
        </div>
    )
}
