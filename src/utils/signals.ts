import { createSignal } from 'solid-js'
import { Artist } from '../models/artist'
import { Song } from '../models/song'

export const [artists, setArtists] = createSignal<Artist[]>([])
export const [selectedSong, setSelectedSong] = createSignal<Song | undefined>()
export const [score, setScore] = createSignal<number>(0)
export const [isPlaying, setIsPlaying] = createSignal<boolean>(false)
export const [message, setMessage] = createSignal<string>('')
export const [headerColor, setHeaderColor] = createSignal<string>('#324266')
