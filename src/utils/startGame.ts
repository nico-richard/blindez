import { songs } from '../data/songs'
import { Artist } from '../models/artist'
import { Song } from '../models/song'
import { playSong } from './audio'
import { setArtists, setIsPlaying, setMessage, setSelectedSong } from './signals'

export const startGame = () => {
    const song = selectRandomSong()
    playSong(song)
    setArtists(setRandomArtists(song))
    setSelectedSong(song)
    setIsPlaying(true)
    setMessage('')
}

const selectRandomSong = (): Song => {
    return songs[Math.floor(Math.random() * songs.length)]
}

const setRandomArtists = (selectedSong: Song): Artist[] => {
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
    return shuffledArtists
}
