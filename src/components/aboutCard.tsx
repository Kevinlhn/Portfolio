import { Heading, Container, Card, Text, Box} from "@chakra-ui/react";

// Motion wrapper for Chakra UI components

export const AboutCard = () => {
  return (
    <Container centerContent position="relative" height="100vh">
      {/* Animated Card for the Heading */}
      <Card
        shadow={""}
        p={5}
        borderRadius={70}
        mt={"20vh"}
        >
          <Heading
          px={5}
            size={"xl"}
            fontWeight="extrabold"
            letterSpacing="wide"
            lineHeight="1.2">
            Hi there, I'm Kevin.
          </Heading>
          </Card>
          <Box
        p={5}
        mt={10}
        textAlign={"center"}
         >
<Text letterSpacing={"wide"} fontSize={"1.5vh"}>
  I’m currently based in
  <Text as="span"  color="blue.300"> Washington, United States. </Text>
  I'm a computer engineer.
  Lately, I’ve been especially drawn to
  <Text as="span"  color="blue.300"> software development</Text>
  , with a strong interest in
  <Text as="span"  color="blue.300"> front-end design and UI/UX</Text>
  , though I’m always open to new challenges and eager to keep learning. 
  When I’m not coding, I’m usually with my wife, 
  <Text as="span" fontWeight="extrabold" color="blue.300"> Molly</Text>,
  and our two huskies,
  <Text as="span" fontWeight="extrabold" color="blue.300"> Mia and Kody</Text>
  , who basically run the house 
  (my wife first, of course 🙂).  
  I enjoy <Text as="span"  color="blue.300">photography</Text>, going to the <Text as="span"  color="blue.300">gym</Text>, and then completely canceling it out 
  by never turning down a good tacos/pizza night.
</Text>   
</Box>
    </Container>
  );
};