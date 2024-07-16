import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const [name, setName] = useState('pikachu')

    console.log('[App] render with name: ', name)

    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="duckduckgo/gummibeer.dev">
                Gummi Beer Dev
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName={name}>
                Pi Ka Chu
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="duckduckgo">
                Duck Duck Go
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing>
                Brave
            </TwitterFollowCard>
            <button onClick={() => setName('rust')}>Cambiar nombre</button>
        </section>
    )
}