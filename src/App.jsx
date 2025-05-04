import React from "react";
import { Box, Container, VStack, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const bgGradient = useColorModeValue("linear(to-b, white, gray.100)", "linear(to-b, gray.900, gray.800)");

  return (
    <Box minH="100vh" bgGradient={bgGradient} overflowX="hidden" fontFamily="'Poppins', sans-serif">
      <Navbar />
      <Container maxW="container.lg" py={10} px={{ base: 4, md: 0 }}>
        <VStack spacing={20} align="stretch">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
