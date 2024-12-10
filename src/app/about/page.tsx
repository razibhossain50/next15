'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const About = () => {
    const router = useRouter()
  return (
    <div>
        About page
      <button onClick={()=>router.push("/")}>Go Home</button>
    </div>
  )
}

export default About