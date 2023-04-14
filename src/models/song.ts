import { Artist } from './artist'

export interface Song {
  id: number
  link: string
  artist: Artist
  title: string
}
