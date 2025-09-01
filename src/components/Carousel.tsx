'use client'
import { Box, IconButton } from '@radix-ui/themes'
import Image from 'next/image'
import { useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export const Carousel = ({ props }: { props: any }) => {
    const [slider, setSlider] = useState<Slider | null>(null)

    // const top = useBreakpointValue({ base: '90%', md: '50%' })
    // const side = useBreakpointValue({ base: '30%', md: '10px' })

    return (
        <Box
            style={{
                position: 'relative',
                maxHeight: '600px',
                width: '100%',
                overflow: 'hidden',
            }}
        >
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                radius="full"
                style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translate(0%, -50%)',
                    zIndex: 2,
                }}
                onClick={() => slider?.slickPrev()}
            >
                <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                radius="full"
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translate(0%, -50%)',
                    zIndex: 2,
                }}
                onClick={() => slider?.slickNext()}
            >
                <BiRightArrowAlt />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {props.map((image: any) => (
                    <Box key={image}>
                        <Image
                            src={image}
                            height={648}
                            width={1920}
                            style={{
                                width: '100%',
                                objectFit: 'cover',
                            }}
                            alt={image}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}
