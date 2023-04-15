import { Song } from '../models/song'

export const audio: HTMLAudioElement = new Audio()

export const playSong = (selectedSong: Song): void => {
    audio.src = selectedSong.link
    audio.play()
}

export const stopSong = (): void => {
    audio.pause()
}
