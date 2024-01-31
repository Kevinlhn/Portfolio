import { Flex, Center } from "@chakra-ui/react";
import TitleCard from "../components/titleCard";

export const HomePage = () => {
  return (
    <>
      <Flex
        as={"main"}
        direction={"column"}
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Center>
          <TitleCard />
        </Center>
      </Flex>
    </>
  );
};
