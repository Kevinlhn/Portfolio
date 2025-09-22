// src/pages/ProjectsPage.jsx
import React, { useState } from "react";
import { Flex, Center, Container, Heading, Text, Button } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsCard } from "../components/projectsCard";
import leftoversLogo from "../resources/app logos/leftovers.png";
import spotterLogo from "../resources/app logos/spotter.png";
import balanceLogo from "../resources/app logos/balance.png";

// 1. Projects Data
const projects = [
  {
    title: "leftovers.",
    description: `Leftovers is an iOS app that uses AI to analyze ingredients from text or images and generate curated recipe suggestions. With a simple swipe-based interface, you can quickly pick meals you like or skip the ones you don’t.`,
    logo: leftoversLogo,
    tech: "Xcode/Swift",
  },
  {
    title: "balance.",
    description: `Balance is an iOS app that helps you track calories, and health-related expenses all in one place. By combining what you eat with your spending, it gives you a clear picture of your overall wellness. Stay mindful, stay on track, and keep everything in balance.`,
    logo: balanceLogo,
    tech: "Xcode/Swift",
  },
  {
    title: "spotter.",
    description: `Spotter is an iOS app that tracks your workouts, logs exercises, and identifies which muscles you've worked. It suggests new exercises for the week, reminds you of underworked muscles, and estimates calories burned, acting like your personal workout companion.`,
    logo: spotterLogo,
    tech: "Xcode/Swift",
  }
];

export const ProjectsPage = () => {
  const [index, setIndex] = useState(0);

  const prevProject = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <Flex
      as={"main"}
      direction={"column"}
      justifyContent="center"
      minHeight="95vh"
      position="relative"
    >
      {/* Header */}
      <Center width={"100%"}>
        <Container centerContent>
           <Text fontSize={"11px"} fontStyle={"italic"} opacity={0.5}>
            "It's not a bug...
          </Text>
          <Heading p={1} size="2xl">MY PROJECTS</Heading>
           <Text fontSize={"11px"} fontStyle={"italic"} opacity={0.5}>...it's an undocumented feature."
          </Text>
        </Container>
      </Center>

      {/* 2. Carousel */}
      <Flex
  justify="center"
  align="center"
  position="relative"
  overflow="hidden"
  h="400px"
  w="100%"
>
  <AnimatePresence initial={false}>
    {projects.map((project, i) => {
      // relative position to current index
      let position = i - index;

      // wrap into range -N/2 ... +N/2
      if (position < -Math.floor(projects.length / 2)) {
        position += projects.length;
      }
      if (position > Math.floor(projects.length / 2)) {
        position -= projects.length;
      }

      // Only render prev (-1), current (0), next (+1)
      if (position < -1 || position > 1) return null;

      // horizontal offset
      const xOffset = position * 375; // adjust spacing between cards

      return (
        <motion.div
          key={i}
          style={{ position: "absolute" }}
          initial={{ opacity: 0, scale: 0.75, x: xOffset }}
          animate={{
            opacity: position === 0 ? 1 : 0.2,
            scale: position === 0 ? 1 : 0.75,
            x: xOffset,
            zIndex: position === 0 ? 2 : 1,
          }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.75 }}
        >
          <ProjectsCard
            title={project.title}
            description={project.description}
            logo={project.logo}
            tech={project.tech}
          />
        </motion.div>
      );
    })}
  </AnimatePresence>
</Flex>

      {/* 3. Controls */}
      <Flex justify="center" gap={2}>
        <Button onClick={prevProject} variant="outline">
          Back
        </Button>
        <Button onClick={nextProject}>
          Next
        </Button>
      </Flex>
    </Flex>
  );
};