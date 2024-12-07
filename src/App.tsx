import { ChakraProvider, Flex, Box, theme } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import CirclePointer from "./components/CirclePointer";
import { HomePage } from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { ProjectsPage } from "./pages/projects";
import { AboutPage } from "./pages/about";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionFlex = motion(Flex);
const MotionText = motion(Box);
const MotionDiv = motion.div; // Add motion.div for custom div animation

export const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 3000); // Initial animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <CirclePointer />
      <Flex as={"header"} position={"fixed"} width={"100%"} zIndex={2}>
        <NavBar />
      </Flex>

      <div className="App">
        {showAnimation ? (
          <MotionFlex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minHeight="95vh"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3, 
              ease: [0.25, 0.1, 0.25, 1], // Ease-in-out curve for smoother effect
            }}
          >
            <MotionText
              fontSize="xl"
              letterSpacing="0.5vw"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.5, 
                ease: "easeOut",
              }}
            >
              kevinlhn.com
            </MotionText>
            <MotionText
              fontSize="sm"
              mt={2}
              color="gray.400"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5, // staggered effect
                ease: "easeOut",
              }}
            >
              WELCOME
            </MotionText>
          </MotionFlex>
        ) : (
          //show the homepage with fade-in
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about_me" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </MotionDiv>
        )}
      </div>

      <Flex
        position={"fixed"}
        bottom={8}
        width={"100%"}
        justifyContent={"center"}
        zIndex={2}
      >
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};