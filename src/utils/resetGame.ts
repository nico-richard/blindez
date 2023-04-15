import { setMessage, setScore } from "./signals"

export const onReset = () => {
    setScore(0)
    setMessage('')
}