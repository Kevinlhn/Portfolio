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
        mt={"5vh"}
         >
<Text letterSpacing={"wide"} fontSize={"1.5vh"}>
  I’m a computer engineer and developer based in{" "}
  <Text as="span" fontWeight="extrabold" color="blue.500">Washington, United States</Text>.
  I’m passionate about{" "}
  <Text as="span" fontWeight="extrabold" color="red.500">software development</Text>
  , with a strong interest in{" "}
  <Text as="span" fontWeight="extrabold" color="yellow.500">front-end design and UI/UX</Text>
  ,  but I'm always eager to contribute on any tech projects that bring value and make a difference.
  Though I was born in the US, my family is from{" "}
  <Text as="span" fontWeight="extrabold" color="green.500">Mexico</Text>,
  and I take pride in celebrating my Hispanic heritage, especially through its amazing food.
 Outside, you’ll often find me behind a camera, indulging my passion for{" "}
  <Text as="span" fontWeight="extrabold" color="purple.400">photography</Text>.
  I love capturing meaningful moments and experimenting with editing to bring my vision to life.      
  And after a productive day, nothing beats enjoying a slice of pizza with{" "}
  <Text as="span" fontWeight="extrabold" color="cyan.500">my husky, Mia</Text>,
  who’s always nearby, making life brighter (and sneaking a slice whenever she can).  
</Text>   
</Box>
    </Container>
  );
};