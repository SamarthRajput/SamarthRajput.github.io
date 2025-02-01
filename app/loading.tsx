"use client"
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loading(){

    return <div className='flex items-center justify-center text-6xl'>
        <DotLottieReact
        src="https://lottie.host/9d53b8a1-40c7-4d85-81c8-eecead70a456/uFKKyCxPmx.lottie"
        loop
        autoplay
        className='bg-white'
        />
    </div>
}