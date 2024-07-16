import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    return (
        <section className='App'>
            <TwitterFollowCard userName="duckduckgo/gummibeer.dev" initialIsFollowing>
                Gummi Beer Dev
            </TwitterFollowCard>
            <TwitterFollowCard userName="pikachu" initialIsFollowing={false}>
                Pi Ka Chu
            </TwitterFollowCard>
            <TwitterFollowCard userName="duckduckgo" initialIsFollowing>
                Duck Duck Go
            </TwitterFollowCard>
            <TwitterFollowCard initialIsFollowing>
                Brave
            </TwitterFollowCard>
        </section>
    )
}