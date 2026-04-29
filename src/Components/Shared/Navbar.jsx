import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center shadow px-14 py-4'>
                <h2 className='text-2xl bg-linear-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent font-bold'>TileCraft</h2>
                <div className='flex gap-8 font-semibold text-xl'>
                    <NavLink href={'/'}>Home</NavLink>
                    <NavLink href={'/all-tiles'}>All Tiles</NavLink>
                    <NavLink href={'/my-profile'}>My Profile</NavLink>
                </div>
                <Link href={'/'}><Button className={'rounded'}>Log In</Button></Link>
            </div>
        </div>
    )
}

export default Navbar
