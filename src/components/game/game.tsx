import { Component, For, Ref, createSignal, onMount } from 'solid-js'
import './game.sass'
import { Card } from '../card/card'
import { Artist } from '../../models/artist'
import { Song } from '../../models/song'
import song0 from '../public/songs/Michel Berger - Les Princes Des Villes (1983).mp3'
import song1 from '../public/songs/X2Download.app - Alors regarde (128 kbps).mp3'
import song2 from '../public/songs/X2Download.app - Amsterdam (320 kbps).mp3'
import song3 from '../public/songs/X2Download.app - Daniel Balavoine - Tous les cris les S.O.S. (Audio Officiel) (128 kbps).mp3'
import song4 from '../public/songs/X2Download.app - France Gall - Poupée de cire, poupée de son (1965) Stéréo HQ (320 kbps).mp3'
import song5 from "../public/songs/X2Download.app - Michel Delpech - Quand j'étais chanteur (Audio Officiel) (128 kbps).mp3"
import song6 from '../public/songs/X2Download.app - Michel Sardou - Afrique Adieu (Audio Officiel) (128 kbps).mp3'
import song7 from '../public/songs/X2Download.app - Sheila. _Comme les Rois mages_ (128 kbps).mp3'

export const Game: Component = () => {
    let startButton!: HTMLButtonElement
    let isPlaying = false
    const audio: HTMLAudioElement = new Audio()
    const [artists, setArtists] = createSignal<Artist[]>([])
    const [selectedSong, setSelectedSong] = createSignal<Song | undefined>()
    const [score, setScore] = createSignal<number>(0)
    const songs: Song[] = [
        {
            id: 0,
            link: song0,
            artist: { name: 'Michel Berger' },
            title: 'Les princes des villes',
        },
        {
            id: 1,
            link: song1,
            artist: { name: 'Patrick Bruel' },
            title: 'Alors regarde',
        },
        {
            id: 2,
            link: song2,
            artist: { name: 'Jacques Brel' },
            title: 'Amsterdam',
        },
        {
            id: 3,
            link: song3,
            artist: { name: 'Daniel Balavoine' },
            title: 'Tous les cris les SOS',
        },
        {
            id: 4,
            link: song4,
            artist: { name: 'France Gall' },
            title: 'Poupée de cire, poupée de son',
        },
        {
            id: 5,
            link: song5,
            artist: { name: 'Michel Delpech' },
            title: "Quand j'étais chanteur",
        },
        {
            id: 6,
            link: song6,
            artist: { name: 'Michel Sardou' },
            title: 'Afrique adieu',
        },
        {
            id: 7,
            link: song7,
            artist: { name: 'Sheila' },
            title: 'Les rois mages',
        },
    ]
    onMount(() => {
        resetArtists()
    })
    const resetArtists = () => {
        setArtists([
            { name: '...' },
            { name: '...' },
            { name: '...' },
            { name: '...' },
            { name: '...' },
            { name: '...' },
        ])
    }
    const onToggleMain = (): void => {
        if (!isPlaying) {
            startGame()
            return
        }
        if (isPlaying) {
            stopGame()
            return
        }
    }
    const stopGame = (): void => {
        stopSong()
        resetArtists()
        setSelectedSong(undefined)
    }
    const stopSong = (): void => {
        startButton.innerText = 'Start'
        audio.pause()
        isPlaying = false
    }
    const startGame = (): void => {
        startButton.innerText = '🔊 Current song playing 🔊'
        setSelectedSong(selectRandomSong())
        setRandomArtists(selectedSong()!)
        playSong(selectedSong()!)
    }
    const playSong = (selectedSong: Song): void => {
        audio.src = selectedSong.link
        audio.play()
        isPlaying = true
    }
    const selectRandomSong = (): Song => {
        return songs[Math.floor(Math.random() * songs.length)]
    }
    const setRandomArtists = (selectedSong: Song): void => {
        const rawArtists = []
        songs
            // Make a copy of the original array
            .slice()
            // Ignore the correct artist
            .filter((song) => song.artist !== selectedSong.artist)
            // Shuffle
            .sort((a, b) => 0.5 - Math.random())
            // Take 5 items
            .slice(0, 5)
            // Build the artist list
            .forEach((song) => {
                rawArtists.push(song.artist)
            })
        // Add the correct artist
        rawArtists.push(selectedSong.artist)
        // Shuffle
        const shuffledArtists = rawArtists.sort((a, b) => 0.5 - Math.random())
        setArtists(shuffledArtists)
    }
    const cardClick = (e: Event) => {
        if (selectedSong()) {
            const target = e.target as Element
            if (checkSongValidity(target.innerHTML, selectedSong()!.artist.name)) {
                console.log('Win !')
                setScore(score() + 1)
            } else {
                console.log('Try again !')
            }
            stopGame()
        }
    }
    const checkSongValidity = (choice: string, solution: string) => {
        return choice === solution
    }
    const onReset = () => {
        setScore(0)
    }

    return (
        <div class="game">
            <h1>Blindez</h1>
            <button type="button" onClick={onToggleMain} ref={startButton}>
                Start
            </button>
            <button onclick={onReset}>Reset</button>
            <h2>Score : {score()}</h2>
            <hr />
            <div class="cards-container">
                <For each={artists()}>{(artist, index) => <Card artist={artist} onClick={cardClick} />}</For>
            </div>
        </div>
    )
}
