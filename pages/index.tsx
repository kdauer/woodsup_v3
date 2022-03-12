import { Heading, Text, Center } from '@chakra-ui/react';

const Home = () => {
  return (
    <div>
      <Heading color="brand.500" as="h1" size="4xl" isTruncated>
        Woods Up e.V.
      </Heading>
      <Center h="100vh">This is the Center</Center>
    </div>
  );
};

export default Home;
