import { Text } from '@chakra-ui/react';

const TextComponent = ({ text }) => {
  return (
    <Text fontSize={['sm', 'md', 'lg', 'xl']} color="white">
      {text}
    </Text>
  );
};

export default TextComponent;
