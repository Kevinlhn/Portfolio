
import { Flex, Center } from "@chakra-ui/react";
import { AboutCard } from "../components/aboutCard";


export const AboutPage = () => {
  return (
    <Flex
      as={"main"}
      direction={"column"}
      alignItems="center"
      justifyContent="center"
    >
      <Center width={"100%"} height={"95vh"} zIndex={1}>
        <AboutCard />
      </Center>
    </Flex>
  );
};
