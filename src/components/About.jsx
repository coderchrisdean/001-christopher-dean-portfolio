import React from "react";
import { Box, Heading, Text, Button, VStack, useColorModeValue, Icon, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("teal.600", "teal.300");
  const btnBgColor = useColorModeValue("teal.500", "teal.400");
  const btnHoverBgColor = useColorModeValue("teal.600", "teal.500");

  return (
    <Box id="about" py={16} px={{ base: 4, md: 8 }} bg={bgColor} borderRadius="lg" boxShadow="md">
      <VStack spacing={6} align="center" maxW="container.md" mx="auto">
        <Heading as="h1" size="2xl" textAlign="center" color={headingColor}>
          Hi, I'm Christopher Dean
        </Heading>
        <Heading as="h2" size="lg" textAlign="center" color={headingColor}>
          Full Stack Developer
        </Heading>
        <Text fontSize="lg" textAlign="center" color={textColor} maxW="600px">
          I'm passionate about crafting beautiful and functional web applications. With expertise in both front-end and back-end technologies, I bring ideas to life with clean code and thoughtful design.
        </Text>
        <HStack spacing={4} justify="center">
          <Button as="a" href="https://github.com/coderchrisdean" target="_blank" rel="noopener noreferrer" leftIcon={<Icon as={FaGithub} />} bg={btnBgColor} color="white" _hover={{ bg: btnHoverBgColor }} borderRadius="full" px={6}>
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com/in/coderchrisdean" target="_blank" rel="noopener noreferrer" leftIcon={<Icon as={FaLinkedin} />} bg={btnBgColor} color="white" _hover={{ bg: btnHoverBgColor }} borderRadius="full" px={6}>
            LinkedIn
          </Button>
          <Button as="a" href="mailto:coderchrisdean@gmail.com" leftIcon={<Icon as={FaEnvelope} />} bg={btnBgColor} color="white" _hover={{ bg: btnHoverBgColor }} borderRadius="full" px={6}>
            Email
          </Button>
        </HStack>
        <Button as="a" href="#contact" colorScheme="teal" size="lg" borderRadius="full" px={8} py={6} fontSize="lg" fontWeight="bold" _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}>
          Get In Touch
        </Button>
      </VStack>
    </Box>
  );
};

export default About;
