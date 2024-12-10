'use client'
import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const Navigation = () => {
    const pathname = usePathname()
  return (
    <ul className='flex justify-center gap-4'>
        <li><Link href="/" className={pathname==='/'?'text-bold text-blue-400':''}>Home</Link></li>
        <li><Link href="/about"  className={pathname==='/about'?'text-bold text-blue-400':''}>About</Link></li>
        <li><Link href="/products"  className={pathname==='/products/1'?'text-bold text-blue-400':''}>Products</Link></li>
    </ul>
  )
}

export default Navigation