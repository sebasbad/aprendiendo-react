import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const users = [
    {
      userName: 'duckduckgo/gummibeer.dev',
      name: 'Gummi Beer Dev',
      isFollowing: true
    },
    {
      userName: 'pikachu',
      name: 'Pi Ka Chu',
      isFollowing: false
    },
    {
      userName: 'duckduckgo',
      name: 'Duck Duck Go',
      isFollowing: true
    },
    {
      name: 'Brave',
      isFollowing: true
    }
  ]

  return (
    <section className='App'>
      {
                users.map(({ userName, name, isFollowing }) =>
                  (
                    <TwitterFollowCard
                      key={userName}
                      userName={userName}
                      initialIsFollowing={isFollowing}
                    >
                      {name}
                    </TwitterFollowCard>
                  )
                )
            }
    </section>
  )
}
