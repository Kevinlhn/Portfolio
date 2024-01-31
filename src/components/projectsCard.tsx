import { Heading, Text, Container, Flex } from "@chakra-ui/react";

export const ProjectsCard = () => {
  return (
    <Container centerContent>
      <Heading
        p={1}
        size="xl"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        MY PROJECTS
      </Heading>
      <Flex>
        <Text fontSize={"11px"} fontStyle={"italic"}>
          "It's not a bug; it's an undocumented feature."
        </Text>
      </Flex>
    </Container>
  );
};
