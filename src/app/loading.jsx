import { Spinner } from '@heroui/react'
import React from 'react'

const LoadingPage = () => {
    return (
        <div className='h-[85vh] flex items-center justify-center'>
            <Spinner color="danger" />
        </div>
    )
}

export default LoadingPage