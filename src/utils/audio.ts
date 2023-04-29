import { selectedSong, setCurrentTime, setDuration } from './signals'

export const audio: HTMLAudioElement = new Audio()

let currentTimeRefresh: number | null = null

export const playSong = (): void => {
    if (selectedSong()) {
        audio.src = selectedSong()!.link
    } else {
        console.warn('No song specified')
    }
    audio.play()
    currentTimeRefresh = setInterval(() => {
        setCurrentTime(audio.currentTime)
        setDuration(audio.duration)
    }, 500)
}

export const stopSong = (): void => {
    audio.pause()
    audio.src = ''
    clearInterval(currentTimeRefresh!)
}
