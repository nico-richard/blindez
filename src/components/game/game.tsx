import { Component, For, onMount } from 'solid-js'
import './game.sass'
import { Card } from '../card/card'
import { Header } from '../header/header'
import { onToggleMain, resetedArtists } from '../../utils/gameManagement'
import {
    artists,
    isInGame,
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
import { audio } from '../../utils/audio'

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
            // stopCurrentSong()
        }
    }
    const checkSongValidity = (choice: string, solution: string) => {
        return choice === solution
    }

    return (
        <div class="game">
            <Header
                onReset={onReset}
                onToggleMain={onToggleMain}
                score={score()}
                isPlaying={isPlaying()}
                isInGame={isInGame()}
                message={message()}
            />
            <hr />
            <div class="cards-container">
                <For each={artists()}>{(artist, index) => <Card artist={artist} onClick={cardClick} />}</For>
            </div>
        </div>
    )
}
