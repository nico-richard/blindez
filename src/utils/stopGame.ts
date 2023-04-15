import { Artist } from '../models/artist'
import { stopSong } from './audio'
import { setArtists, setHeaderColor, setIsPlaying, setSelectedSong } from './signals'

export const stopGame = () => {
    stopSong()
    setArtists(resetedArtists())
    setIsPlaying(false)
    setSelectedSong(undefined)
    setTimeout(() => setHeaderColor('#324266'), 1000)
}

export const resetedArtists = (): Artist[] => {
    return [{ name: '...' }, { name: '...' }, { name: '...' }, { name: '...' }, { name: '...' }, { name: '...' }]
}
