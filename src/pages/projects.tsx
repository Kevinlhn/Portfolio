import React from "react";
import { Center, Flex } from "@chakra-ui/react";
import { ProjectsCard } from "../components/projectsCard";

export const ProjectsPage = () => {
  return (
    <Flex
      as={"main"}
      direction={"column"}
      justifyContent="center"
      minHeight="95vh"
    >
      <Center width={"100%"}>
        <ProjectsCard />
      </Center>
    </Flex>
  );
};
