import { stopSong } from './audio'
import {
    setCurrentTime,
    setDuration,
    setIsInGame,
    setIsPlaying,
    setMessage,
    setScore,
    setStartButtonText,
} from './signals'

export const onReset = () => {
    setScore(0)
    console.debug('--- RESET --- Score set to 0')
    setMessage('')
    setIsInGame(false)
    setIsPlaying(false)
    setStartButtonText('Start a new game')
    stopSong()
    setCurrentTime(0)
    setDuration(0)
    console.debug('--- RESET --- Song stopped')
}
