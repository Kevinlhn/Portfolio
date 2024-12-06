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
            size="2xl"
            fontWeight="extrabold"
            letterSpacing="wide"
            lineHeight="1.2">
            Hi there, I'm Kevin.
          </Heading>
          </Card>
        <Box
        p={20}
        mt={"1vh"}
        width={"150%"}
         >
          <Text letterSpacing={"wide"} lineHeight={"10"}>
  I am a computer engineer and developer based in{" "}
  <Text as="span" fontWeight="extrabold" color="blue.500">Washington, United States</Text>.
  My passion lies in{" "}
  <Text as="span" fontWeight="extrabold" color="red.500">software development</Text>
  , with a preference to{" "}
  <Text as="span" fontWeight="extrabold" color="yellow.500">front-end and UI Design</Text>
  , but I’m always eager to contribute to tech projects that aim to make a meaningful impact.    
  While I was born in the US, my family is originally from{" "}
  <Text as="span" fontWeight="extrabold" color="green.500">Mexico</Text>
  , and I truly enjoy celebrating Hispanic culture, especially its rich traditions and incredible cuisine.  
  Outside of work, I love{" "}
  <Text as="span" fontWeight="extrabold" color="purple.400">
    photography
  </Text>
  ; capturing and editing moments through my lens is one of my favorite things to do.  
  I also enjoy listening to music throughout the day; it keeps me inspired and energized.  
  Pizza is my ultimate comfort food after a productive day, and{" "}
  <Text as="span" fontWeight="extrabold" color="cyan.500">
    my husky, Mia
  </Text>
  , is always nearby, making life brighter (and sneaking a slice whenever she can).  
</Text>    </Box>
    </Container>
  );
};