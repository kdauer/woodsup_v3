import { Text } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';

const TextComponent: FunctionComponent<{
  text: any;
  children?: React.ReactNode;
}> = ({ text, children }) => {
  return (
    <Text
      fontSize={['sm', 'md', 'lg', 'xl']}
      color="white"
      textAlign={'justify'}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
