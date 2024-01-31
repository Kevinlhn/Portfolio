import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

import { HomePage } from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { ProjectsPage } from "./pages/projects";
import { AboutPage } from "./pages/about";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex as={"header"} position={"fixed"} width={"100%"} zIndex={2}>
      <NavBar />
    </Flex>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about_me" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
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
