import {
  Box,
  Container,
  Heading,
  Image,
  Link,
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
        spacing={{ base: 2, md: 4 }}
        p={2}
        bg={useColorModeValue("white", "brand.900")}
        color={useColorModeValue("black", "white")}
      >
        <Heading textAlign="center" as="h2">
          {t("h2")}
        </Heading>
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_1")}
        </Text>
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_2")}
        </Text>{" "}
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_3")}
        </Text>{" "}
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_4")}
        </Text>{" "}
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_5")}
        </Text>{" "}
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_6")}
        </Text>{" "}
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_7")}
        </Text>{" "}
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_8")}
        </Text>{" "}
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_9")}
        </Text>{" "}
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_10")}
        </Text>{" "}
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_11")}
        </Text>
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_12")}
        </Text>{" "}
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          {t("p_13")}
        </Text>
        <Text textAlign="center" fontSize={["xs", "sm", "md", "lg"]}>
          Spende bei &nbsp;
          <Link
            as={Link}
            fontSize={["sm", "md", "lg", "xl"]}
            color="brand.500"
            href="https://www.betterplace.org/de/projects/120679?utm_campaign=ShortURLs&utm_medium=project_120679&utm_source=PlainShortURL"
            isExternal
          >
            betterplace.org
          </Link>
        </Text>
      </Stack>
    </Container>
  );
};

export default NewsContainer;
