import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heading,
  Text,
  Container,
  Flex,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
import Portrait from "../resources/portrait.png";

const MotionButton = motion(Button);

const TitleCard = () => {
  const navigate = useNavigate();

  const redirectToAboutMe = () => {
    navigate("/about_me");
  };

  const redirectToProjects = () => {
    navigate("/projects");
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.1 },
    },
  };

  return (
    <Container centerContent>
      <Text fontSize={"sm"} letterSpacing={"0.6vw"}>COMPUTER ENGINEER</Text>
      <Heading
        p={1}
        size="xl"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        letterSpacing={"0.3vw"}
      >
        KEVIN HERNANDEZ-NINO
      </Heading>
      <Flex>
        <Text fontSize={"11px"} p={1}>
          "BUILDING A FUTURE, ONE LINE OF CODE AT A TIME."
        </Text>
      </Flex>
      <HStack spacing={1} mt={3}>
        <MotionButton
          borderRadius={50}
          borderWidth={2}
          width={"11rem"}
          size={"lg"}
          onClick={redirectToAboutMe}
          whileHover="hover"
          variants={buttonVariants}
          variant={"outline"}
        >
          About Me
        </MotionButton>
        <Image src={Portrait} width={"8rem"} p={3} borderRadius={75}></Image>
        <MotionButton
          borderRadius={50}
          borderWidth={2}
          width={"11rem"}
          size={"lg"}
          onClick={redirectToProjects}
          whileHover="hover"
          variants={buttonVariants}
          variant={"outline"}
        >
          Projects
        </MotionButton>
      </HStack>
    </Container>
  );
};

export default TitleCard;
