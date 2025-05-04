import React from "react";
import { Box, Heading, Text, Stack, Button, Flex, useColorModeValue, keyframes } from "@chakra-ui/react";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const About = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("teal.600", "teal.300");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const hiColor = useColorModeValue("teal.500", "teal.400");
  const imColor = useColorModeValue("purple.500", "purple.400");
  const chrisColor = useColorModeValue("blue.500", "blue.400");
  const deanColor = useColorModeValue("green.500", "green.400");
  const buttonHeadingColor = useColorModeValue("black", "black");

  return (
    <Box id="about" py={20} px={4} bg={bgColor} borderRadius="lg" boxShadow="xl" animation={`${fadeInUp} 0.8s ease-out`}>
      <Flex direction={{ base: "column", md: "row" }} align="center" maxW="container.lg" mx="auto">
        <Stack spacing={6} flex={1} textAlign={{ base: "center", md: "left" }}>
          <Heading as="h1" size="2xl" color={headingColor} fontFamily="'Poppins', sans-serif" animation={`${fadeInUp} 0.6s ease-out`}>
            <span style={{ color: hiColor }}>Hi,</span> <span style={{ color: imColor }}>I'm</span> <span style={{ color: chrisColor }}>Christopher</span> <span style={{ color: deanColor }}>Dean</span>
          </Heading>
          <Heading as="h2" size="xl" color={useColorModeValue("gray.800", "white")} fontFamily="'Poppins', sans-serif" animation={`${fadeInUp} 0.7s ease-out`}>Full Stack Developer</Heading>
          <Text fontSize="lg" color={textColor} maxW="600px" animation={`${fadeInUp} 0.8s ease-out`} fontFamily="'Poppins', sans-serif">I'm passionate about crafting beautiful and functional web applications. With expertise in both front-end and back-end technologies, I bring ideas to life with clean code and thoughtful design.</Text>
          <Flex justify="center" animation={`${fadeInUp} 0.9s ease-out`}>
            <Button colorScheme="teal" size="lg" borderRadius="full" px={8} fontFamily="'Poppins', sans-serif" bg={useColorModeValue("teal.500", "teal.400")} _hover={{ bg: useColorModeValue("teal.600", "teal.500") }} color={buttonHeadingColor}>Get In Touch</Button>
          </Flex>
        </Stack>
        <Box flex={1} mt={{ base: 10, md: 0 }} animation={`${fadeInUp} 1s ease-out`}>
          <Box maxW="400px" mx="auto" borderRadius="2xl" overflow="hidden" boxShadow="2xl" border="4px solid" borderColor={useColorModeValue("teal.400", "teal.600")} bg="gray.200">
            <Box h="400px" bg="gray.300" position="relative" overflow="hidden">
              <Box position="absolute" bottom={0} left={0} right={0} h="50%" bgGradient={useColorModeValue("linear(to-t, teal.500, purple.500, blue.500)", "linear(to-t, teal.700, purple.700, blue.700)")} />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
