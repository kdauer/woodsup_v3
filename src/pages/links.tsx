import {
    Flex,
    Link,
    Stack,
    useBreakpointValue,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import nextI18nextConfig from '../../next-i18next.config'
import links from '../data/links.json'

const linklist = links.links

export default function Motivation() {
    const { t } = useTranslation('common')

    return (
        <Flex w="full" h="100vh">
            <VStack
                w="full"
                justify="center"
                px={useBreakpointValue({ base: 4, md: 8 })}
            >
                <Stack
                    maxW="2xl"
                    mt={2}
                    align="center"
                    spacing={6}
                    backgroundColor={useColorModeValue('brand.50', 'brand.900')}
                    borderRadius="base"
                >
                    {linklist.map((link) => (
                        <Link
                            p={1}
                            textAlign="center"
                            key={link.id}
                            href={link.href}
                            lineHeight={1.2}
                            fontSize={['sm', 'md', 'lg', 'xl']}
                            color={useColorModeValue('black', 'white')}
                            isExternal
                        >
                            {link.title}
                        </Link>
                    ))}
                </Stack>
            </VStack>
        </Flex>
    )
}
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(
            locale,
            ['common'],
            nextI18nextConfig
        )),
    },
})
