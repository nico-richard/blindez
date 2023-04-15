import { Component, splitProps } from 'solid-js'
import { ScoreBoard } from '../score-board/score-board'
import { headerColor, startButtonText } from '../../utils/signals'
import './header.sass'

interface HeaderProps {
    isPlaying: boolean
    isInGame: boolean
    onToggleMain: () => void
    score: number
    onReset: () => void
    message: string
}

export const Header: Component<HeaderProps> = (props) => {
    const [local, others] = splitProps(props, ['isPlaying', 'isInGame', 'onToggleMain', 'message'])

    return (
        <div class="header" style={{ 'background-color': headerColor() }}>
            <h1>Blindez</h1>
            <button type="button" onclick={local.onToggleMain}>
                {startButtonText()}
            </button>
            <ScoreBoard {...others} />
            <p>{local.message}</p>
        </div>
    )
}
