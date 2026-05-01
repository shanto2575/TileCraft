'use client'
import { UpdateForm } from '@/Components/pages/ProfileChangeForm';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import avater from '@/asset/avater.png'


const MyProfilePage = () => {
    const { data: session, isPending, } = authClient.useSession()
    console.log(session, 'session')
    const user = session?.user;
    if (!user) {
        return <div className='flex justify-center items-center h-[600px] font-bold text-2xl'>No data</div>
    }
    return (
        <div className='flex items-center justify-center mt-8'>
            <div className='border p-5 rounded-2xl space-y-5 text-center'>
                <Image
                    src={user.image || avater}
                    width={400}
                    height={400}
                    alt='user-logo'
                    className='w-full h-[400px] rounded-full'
                />
                <h2 className='text-2xl font-bold'>Name : <span className='bg-linear-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent'>{user.name}</span></h2>
                <p className='text-xl font-semibold'>Email : <span>{user.email}</span></p>
                <div>
                    <UpdateForm></UpdateForm>
                </div>
            </div>

        </div>
    )
}

export default MyProfilePage
