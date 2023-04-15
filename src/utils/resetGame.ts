import { setIsInGame, setIsPlaying, setMessage, setScore, setStartButtonText } from './signals'

export const onReset = () => {
    setScore(0)
    setMessage('')
    setIsInGame(false)
    setIsPlaying(false)
    setStartButtonText('Start a new game')
}
