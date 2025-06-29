'use client'

import { Flex } from '@chakra-ui/react'

export default function Page() {
    console.info('Woods Up e.v. - from Potsdam with ❤')

    return (
        <main>
            <Flex
                w="full"
                minH="100vh"
                align="center"
                justify="center"
                bgImage="url(/DSC073482.jpg)"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
            >
                {/* <NewsContainer /> */}
            </Flex>
        </main>
    )
}
