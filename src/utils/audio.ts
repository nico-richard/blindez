import { Song } from '../models/song'
import { selectedSong } from './signals'

export const audio: HTMLAudioElement = new Audio()

export const playSong = (): void => {
    if (selectedSong()) {
        audio.src = selectedSong()!.link
    } else {
        throw Error('No song specified')
    }
    audio.play()
}

export const stopSong = (): void => {
    audio.pause()
}
