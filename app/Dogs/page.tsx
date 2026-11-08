import React from 'react'
import { getDog } from '@/lib/api'
import { ImageViewer } from '@/components/ui/ImageViewer';

export default async function Dogs() {
    const image = await getDog();
    return (
        <div className="w-full h-screen bg-white flex flex-col items-center text-center justify-center gap-4">
            <p>Dog Images</p>
            <ImageViewer initialImage={image} endpoint={'/api/Dogs'} label={'dogs'}></ImageViewer>
        </div >
    )

}