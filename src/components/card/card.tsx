import { Component } from 'solid-js'
import './card.sass'
import { Artist } from '../../models/artist'

interface CardProps {
    artist: Artist
    onClick: (e: Event) => void
}

export const Card: Component<CardProps> = ({ artist, onClick }) => {
    return (
        <div class="card" onclick={onClick}>
            <h3>{artist.name}</h3>
        </div>
    )
}
