import { Component, For, onMount } from 'solid-js'
import './game.sass'
import { Card } from '../card/card'
import { Header } from '../header/header'
import { resetedArtists, stopGame } from '../../utils/stopGame'
import { startGame } from '../../utils/startGame'
import {
    artists,
    isPlaying,
    message,
    score,
    selectedSong,
    setArtists,
    setHeaderColor,
    setMessage,
    setScore,
} from '../../utils/signals'
import { onReset } from '../../utils/resetGame'

export const Game: Component = () => {
    onMount(() => {
        setArtists(resetedArtists())
    })

    const cardClick = (e: Event) => {
        if (selectedSong()) {
            const target = e.target as Element
            if (checkSongValidity(target.innerHTML, selectedSong()!.artist.name)) {
                setMessage('')
                setHeaderColor('#20BF55')
                setScore(score() + 1)
            } else {
                setMessage('')
                setHeaderColor('#BA1200')
            }
            stopGame()
        }
    }
    const checkSongValidity = (choice: string, solution: string) => {
        return choice === solution
    }

    const onToggleMain = (): void => {
        if (!isPlaying()) {
            startGame()
            return
        }
        if (isPlaying()) {
            stopGame()
            return
        }
    }

    return (
        <div class="game">
            <Header
                onReset={onReset}
                onToggleMain={onToggleMain}
                score={score()}
                isPlaying={isPlaying()}
                message={message()}
            />
            <hr />
            <div class="cards-container">
                <For each={artists()}>{(artist, index) => <Card artist={artist} onClick={cardClick} />}</For>
            </div>
        </div>
    )
}
