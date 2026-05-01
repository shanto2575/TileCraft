'use client'
import { Button, Spinner } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import Image from 'next/image'
import avater from '@/asset/avater.png'
import { authClient } from '@/lib/auth-client'

const Navbar = () => {
    const { data: session, isPending, } = authClient.useSession()
    // console.log(session, 'session')
    const user = session?.user;
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-center space-y-5 lg:justify-between items-center shadow lg:px-14 py-4'>
                <Link href={'/'}><h2 className='text-xl lg:text-2xl bg-linear-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent font-bold'>TileCraft</h2></Link>
                <div className='flex gap-8 font-semibold text-xl'>
                    <NavLink href={'/'}>Home</NavLink>
                    <NavLink href={'/all-tiles'}>All Tiles</NavLink>
                    <NavLink href={'/my-profile'}>My Profile</NavLink>
                </div>
                <div>
                    {isPending ? <div className="flex items-center gap-4">
                        <Spinner />
                    </div>
                        :
                        user ? (
                            <div className='flex gap-2 items-center justify-center'>
                                <h2 className='whitespace-nowrap font-bold bg-linear-to-r from-blue-500 to-orange-600 bg-clip-text text-transparent'>Hi, {user.name}</h2>
                                <Image
                                    src={user.image || avater}
                                    width={400}
                                    height={400}
                                    alt='user-logo'
                                    className='w-10 h-10 rounded-full'
                                />
                                <Button className={'rounded'} onClick={async () => await authClient.signOut()}>LogOut</Button>
                            </div>
                        )
                            :
                            <div>
                                <Link href={'/login'}><Button className={'rounded'}>Log In</Button></Link>
                            </div>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
