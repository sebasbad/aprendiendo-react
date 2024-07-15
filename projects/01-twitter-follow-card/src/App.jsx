import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <React.Fragment>
            <TwitterFollowCard userName="duckduckgo/gummibeer.dev" name="Gummi Beer Dev" />
            <TwitterFollowCard userName="duckduckgo/gummibeer.dev" name="Gummi Beer Dev" />
            <TwitterFollowCard userName="duckduckgo/gummibeer.dev" name="Gummi Beer Dev" />
        </React.Fragment>
    )
}