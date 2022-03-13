import { Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const TextComponent: FunctionComponent<{ children?: never }> = (text: any) => {
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
