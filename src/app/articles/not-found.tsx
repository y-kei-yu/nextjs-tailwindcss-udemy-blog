import Link from 'next/link'

export default function NotFound() {
    return (
        <div className=' flex items-center justify-center mt-20'>
            <div className='p-8 rounded shadow-md text-center bg-white'>
                <h1 className='text-2xl font-bold mb-4 text-gray-800'>Not Found</h1>
                <p className='text-gray-600'>ページが見つかりませんでした。</p>
                <Link href="/" className='text-blue-500 hover:underline'>Return Home</Link>
            </div>
        </div>
    )
}