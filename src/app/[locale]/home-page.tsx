'use client'

import { Flex } from '@radix-ui/themes'

export default function Page() {
    console.info('Woods Up e.v. - from Potsdam with ❤')

    return (
        <main>
            <Flex
                style={{
                    width: '100%',
                    minHeight: 'calc(100vh - 64px)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: 'url(/DSC073482.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* <NewsContainer /> */}
            </Flex>
        </main>
    )
}
