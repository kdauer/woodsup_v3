'use client'

import type { SanityImageSource } from '@sanity/image-url'
import { urlFor } from 'lib/sanity/image'
import Image from 'next/image'

interface SanityImageProps {
    image: SanityImageSource
    alt?: string
    width?: number
    height?: number
    fill?: boolean
    className?: string
    priority?: boolean
    style?: React.CSSProperties
    onLoad?: () => void
    placeholder?: 'blur' | 'empty'
}

export function SanityImage({
    image,
    alt,
    width,
    height,
    fill,
    className,
    priority,
    style,
    onLoad,
    placeholder = 'blur',
}: SanityImageProps) {
    if (!image) return null

    const imageUrl = urlFor(image)
        .width(width || 800)
        .height(height || 600)
        .auto('format')
        .url()

    // Generate blur placeholder
    const blurUrl = urlFor(image).width(20).blur(10).url()

    return (
        <Image
            src={imageUrl}
            alt={alt || ''}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            className={className}
            placeholder={placeholder}
            blurDataURL={placeholder === 'blur' ? blurUrl : undefined}
            priority={priority}
            style={style}
            onLoad={onLoad}
        />
    )
}
