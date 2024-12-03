import { Heading, Container } from "@chakra-ui/react";
export const AboutCard = () => {
  return (
    <Container centerContent>
      <Heading size={"2xl"} textAlign={"center"}     backdropFilter="auto"
            backdropBlur="100px" p={5} borderRadius={100}>
        Hey there! I'm Kevin.
      </Heading>
    </Container>
  );
};
