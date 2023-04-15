import { songs } from '../data/songs'
import { Artist } from '../models/artist'
import { Song } from '../models/song'
import { playSong, stopSong } from './audio'
import {
    artists,
    isInGame,
    isPlaying,
    setArtists,
    setHeaderColor,
    setIsInGame,
    setIsPlaying,
    setMessage,
    setSelectedSong,
    setStartButtonText,
} from './signals'

export const onToggleMain = () => {
    // New game
    if (!isInGame()) {
        // Set artist list
        setArtists(setRandomArtists())
        setMessage('Song list created')
        setIsInGame(true)
        setStartButtonText('Play song')
        return
    } else {
        // Start first song
        if (!isPlaying()) {
            // Set random song from previous list
            setSelectedSong(selectRandomSong(artists()))
            setIsPlaying(true)
            setMessage('Song is playing')
            setStartButtonText('🔊 Current song playing 🔊')
            playSong()
            return
        } else {
            stopCurrentSong()
            setIsPlaying(false)
            setMessage('Song stopped, waiting for next one')
            return
        }
    }
}

const selectRandomSong = (list: Artist[]): Song => {
    const randomArtist = list[Math.floor(Math.random() * songs.length)]
    return songs.filter((song) => song.artist === randomArtist)[0]
}

const setRandomArtists = (): Artist[] => {
    const rawArtists: Artist[] = []
    songs
        // Make a copy of the original array
        .slice()
        // Ignore the correct artist
        // .filter((song) => song.artist !== selectedSong.artist)
        // Shuffle
        .sort((a, b) => 0.5 - Math.random())
        // Take 5 items
        .slice(0, 6)
        // Build the artist list
        .forEach((song) => {
            rawArtists.push(song.artist)
        })
    // Add the correct artist
    // rawArtists.push(selectedSong.artist)
    // Shuffle
    const shuffledArtists = rawArtists.sort((a, b) => 0.5 - Math.random())
    return shuffledArtists
}

export const stopCurrentSong = () => {
    stopSong()
    // setArtists(resetedArtists())
    setIsPlaying(false)
    setStartButtonText('Play song')
    setSelectedSong(undefined)
    setTimeout(() => setHeaderColor('#324266'), 1000)
}

export const resetedArtists = (): Artist[] => {
    return [{ name: '...' }, { name: '...' }, { name: '...' }, { name: '...' }, { name: '...' }, { name: '...' }]
}
