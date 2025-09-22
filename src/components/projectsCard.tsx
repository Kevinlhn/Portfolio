// src/components/ProjectsCard.tsx
import { Heading, Text, Container, Flex, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProjectsCardProps {
  title: string;
  description: string;
  logo: string;
  tech?: string;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({
  title,
  description,
  logo,
  tech,
}) => {
  return (
    <Container p={5}
      as={motion.div}
      maxW="sm"
      borderRadius="2xl"
        boxShadow="0 0 15px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      position="relative"
      maxH="600px"
    >
       <Heading
        size="lg"
        noOfLines={1}
        textAlign="center"
      >
        {title}
        
      </Heading>
        {tech && (
          <Text fontSize="sm" textAlign={"center"} color="red.300">
            {tech}
          </Text>
        )}

      <Flex flex={1} pt={5} direction="column">
        <Text fontSize="sm" px={2}>
          {description}
        </Text>
      </Flex>

      <Box display="flex" justifyContent="center" pt={5} alignItems={"center"}>
        <Image
          src={logo}
          alt={`${title} Logo`}
          boxSize="25%"
          objectFit="contain"
          borderRadius="10%"
        />
      </Box>
    </Container>
  );
};