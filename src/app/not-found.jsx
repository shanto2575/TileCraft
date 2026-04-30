import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NotFound from '../asset/App-Error.png'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from '@heroui/react'

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex flex-col items-center justify-center gap-4'>
            <Image src={NotFound} width={600} height={600} alt='Swimming' className='' />
            <h2 className='text-3xl font-bold text-purple-600'>This Page is Not found</h2>
            <Link href={'/'}><Button variant='danger' className='rounded'>Back To Home <FaArrowRight /></Button></Link>
        </div>
    )
}

export default NotFoundPage
