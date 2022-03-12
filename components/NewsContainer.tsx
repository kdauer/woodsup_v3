import {
  Box,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export default function NewsContainer() {
  const { t } = useTranslation('news');
  return (
    <Container
      maxW={'3xl'}
      bg={useColorModeValue('white', 'brand.900')}
      color={useColorModeValue('black', 'white')}
      opacity="70%"
      borderRadius="xl"
      m="2em"
    >
      <Stack
        as={Box}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
        bg={useColorModeValue('white', 'brand.900')}
        color={useColorModeValue('black', 'white')}
      >
        <Heading textAlign="center" as="h2">
          {t('h2')}
        </Heading>
        <Text textAlign={'justify'} fontSize={['xs', 'sm', 'md', 'lg']}>
          {t('topic_1')}
        </Text>
      </Stack>
    </Container>
  );
}
