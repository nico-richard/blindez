import { Component, splitProps } from 'solid-js'
import { ScoreBoard } from '../score-board/score-board'
import { headerColor } from '../../utils/signals'
import './header.sass'

interface HeaderProps {
    isPlaying: boolean
    onToggleMain: () => void
    score: number
    onReset: () => void
    message: string
}

export const Header: Component<HeaderProps> = (props) => {
    const [local, others] = splitProps(props, ['isPlaying', 'onToggleMain', 'message'])
    return (
        <div class="header" style={{ 'background-color': headerColor() }}>
            <h1>Blindez</h1>
            <button type="button" onclick={local.onToggleMain}>
                {local.isPlaying ? '🔊 Current song playing 🔊' : 'Start'}
            </button>
            <ScoreBoard {...others} />
            <p>{local.message}</p>
        </div>
    )
}
