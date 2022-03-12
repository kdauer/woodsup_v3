import { Box, Center, useColorModeValue, Image } from '@chakra-ui/react';

export default function CardComponent(project: any) {
  return (
    <Center>
      <Box
        maxW="445px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow={'2xl'}
        rounded={'md'}
        mb={3}
        mx={1}
        bgColor={useColorModeValue('white', 'brand.900')}
        color={useColorModeValue('black', 'white')}
      >
        <Image
          src={project.data.image}
          objectFit={'cover'}
          alt={project.data.image}
        />
        <Box
          mt="1"
          pb={2}
          textAlign={'center'}
          bgColor={useColorModeValue('white', 'brand.900')}
          color={useColorModeValue('black', 'white')}
        >
          {project.data.title}
        </Box>
      </Box>
    </Center>
  );
}
