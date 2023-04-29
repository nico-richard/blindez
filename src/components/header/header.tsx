import { Component, createEffect, splitProps } from 'solid-js'
import { ScoreBoard } from '../score-board/score-board'
import {
    currentTime,
    duration,
    headerColor,
    isInGame,
    isPlaying,
    selectedSong,
    setCurrentTime,
    setDuration,
    startButtonText,
} from '../../utils/signals'
import './header.sass'
import { audio } from '../../utils/audio'
import { ProgressBar } from '../progress-bar/progress-bar'

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
            <ProgressBar />
            <ScoreBoard {...others} />
            <p>{local.message}</p>
            <ul>
                <li>
                    <p>
                        isInGame <span style={{ color: isInGame() ? 'green' : 'red' }}>●</span>
                    </p>
                </li>
                <li>
                    <p>
                        isPlaying <span style={{ color: isPlaying() ? 'green' : 'red' }}>●</span>
                    </p>
                </li>
            </ul>
        </div>
    )
}
