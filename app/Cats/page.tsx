import React from 'react'
import { getCat } from '@/lib/api'
import { ImageViewer } from '@/components/ui/ImageViewer';

export default async function Cats() {
    const image = await getCat();
    return (
        <div className="w-full h-screen bg-white flex flex-col items-center text-center justify-center gap-4">
            <p>Cat Images</p>
            <ImageViewer initialImage={image} endpoint={'/api/Cats'} label={'cats'}></ImageViewer>
        </div >
    )

}