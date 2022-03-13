import { Box, Center, useColorModeValue, Image } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';

const CardComponent: FunctionComponent<{
  project: any;
  children?: React.ReactNode;
}> = ({ project, children }) => {
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
        <Image src={project.image} objectFit={'cover'} alt={project.image} />
        <Box
          mt="1"
          pb={2}
          textAlign={'center'}
          bgColor={useColorModeValue('white', 'brand.900')}
          color={useColorModeValue('black', 'white')}
        >
          {project.title}
        </Box>
      </Box>
    </Center>
  );
};

export default CardComponent;
