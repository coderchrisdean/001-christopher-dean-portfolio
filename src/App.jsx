import React from "react";
import { Box, Container, VStack, useColorModeValue, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
});

function App() {
  const bgGradient = useColorModeValue("linear(to-b, white, gray.100)", "linear(to-b, gray.900, gray.800)");

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bgGradient={bgGradient} overflowX="hidden" display="flex" flexDirection="column" width="100vw">
        <Navbar />
        <Container maxW={{ base: 'container.sm', md: 'container.lg' }} py={10} px={{ base: 4, md: 0 }}>
          <VStack spacing={20} align="stretch">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </VStack>
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
