'use client';

import { useState } from 'react';
import Image from 'next/image';
import Loading from '@/src/components/core/Loading';

const FALLBACK_IMG = '/fallback-image.svg';

export default function ImageWithFallback({ src, alt, fallBackImg = FALLBACK_IMG, ...props }: { src: string; alt: string; fallBackImg?: string; }) {
    const [imgSrc, setImgSrc] = useState<string>(src);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <>
            { isLoading && <Loading /> }
            <Image
                src={imgSrc}
                alt={alt}
                fill
                loading="lazy"
                onError={() => { setImgSrc(fallBackImg); setIsLoading(false) }}
                onLoad={() => setIsLoading(false)}
                className="rounded-lg"
                {...props}
            />
        </>
    );
}