import type { Component } from 'solid-js'

import './App.sass'
import { Game } from './components/game/game'

const App: Component = () => {
    return (
        <div class="app">
            <Game />
        </div>
    )
}

export default App
