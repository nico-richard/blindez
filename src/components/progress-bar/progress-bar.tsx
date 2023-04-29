import { Component } from 'solid-js'
import { currentTime, duration } from '../../utils/signals'
import './progress-bar.sass'
import { audio } from '../../utils/audio'

export const ProgressBar: Component = () => {
    const forward = () => {
        audio.currentTime += 10
        audio.volume = 0
        console.log(audio.volume)
        while (audio.volume < 1) {
            audio.volume += 0.1
            console.log(audio.volume)
        }
    }
    const backward = () => {
        audio.currentTime -= 10
    }

    return (
        <>
            <progress id="songDuration" max={duration()} value={currentTime()}></progress>
            <div class="controls">
                <button type="button" onclick={forward}>
                    + 10 sec
                </button>
                <button type="button" onclick={backward}>
                    - 10 sec
                </button>
            </div>
        </>
    )
}
