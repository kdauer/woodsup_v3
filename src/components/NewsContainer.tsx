import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";

const NewsContainer: FunctionComponent<{ children?: never }> = () => {
  const { t } = useTranslation("news");
  return (
    <Container
      maxW={"3xl"}
      bg={useColorModeValue("white", "brand.900")}
      color={useColorModeValue("black", "white")}
      opacity="80%"
      borderRadius="xl"
      m="2em"
    >
      <Stack
        as={Box}
        spacing={{ base: 8, md: 14 }}
        p={2}
        bg={useColorModeValue("white", "brand.900")}
        color={useColorModeValue("black", "white")}
      >
        <Heading textAlign="center" as="h2">
          {t("h2")}
        </Heading>
        <Text textAlign={"justify"} fontSize={["xs", "sm", "md", "lg"]}>
          {t("topic_3")}
        </Text>
        <Image
          src="./IMG_3071.JPG"
          borderRadius="0.375rem "
          pb={4}
          objectFit="cover"
          alt="Seeds"
        />
      </Stack>
    </Container>
  );
};

export default NewsContainer;
