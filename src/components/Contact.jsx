import { Box, Heading, Text, Link, List, ListItem, Stack, Card, CardBody, Icon, HStack, useColorModeValue, keyframes } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Contact = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("black", "black");
  const iconColors = [
    useColorModeValue("teal.500", "teal.400"),
    useColorModeValue("blue.500", "blue.400"),
    useColorModeValue("purple.500", "purple.400"),
    useColorModeValue("green.500", "green.400")
  ];

  return (
    <Box as="section" id="contact" py={20} px={4} bg={bgColor} borderRadius="lg" boxShadow="xl" animation={`${fadeInUp} 0.8s ease-out`}>
      <Heading as="h2" size="xl" mb={8} color={headingColor} textAlign="center" fontFamily="'Poppins', sans-serif">Get In Touch</Heading>
      <Text fontSize={{ base: "md", md: "lg" }} mb={8} textAlign="center" color={textColor} maxW="600px" mx="auto" fontFamily="'Poppins', sans-serif">
        Interested in working together or have a question? Reach out, and I’ll get back to you as soon as possible!
      </Text>
      <Card maxW="600px" borderRadius="xl" boxShadow="2xl" bg={cardBg} overflow="hidden" mx="auto">
        <CardBody p={8}>
          <Stack as={List} spacing={6} fontSize={{ base: "sm", md: "md" }} align="center">
            <ListItem display="flex" alignItems="center" maxW="400px" w="100%">
              <Icon as={EmailIcon} color={iconColors[0]} mr={4} boxSize={6} />
              <Box textAlign="left" flex={1}>
                <Text fontWeight="bold" color={textColor} fontFamily="'Poppins', sans-serif">Email</Text>
                <Link href="mailto:coderchrisdean@gmail.com" color={useColorModeValue("teal.600", "teal.300")} _hover={{ textDecoration: "underline", color: useColorModeValue("teal.400", "teal.200") }} fontFamily="'Poppins', sans-serif">coderchrisdean@gmail.com</Link>
              </Box>
            </ListItem>
            <ListItem display="flex" alignItems="center" maxW="400px" w="100%">
              <Icon as={PhoneIcon} color={iconColors[1]} mr={4} boxSize={6} />
              <Box textAlign="left" flex={1}>
                <Text fontWeight="bold" color={textColor} fontFamily="'Poppins', sans-serif">Phone</Text>
                <Text color={textColor} fontFamily="'Poppins', sans-serif">(123) 456-7890</Text>
              </Box>
            </ListItem>
            <ListItem display="flex" alignItems="center" maxW="400px" w="100%">
              <Icon as={FaLinkedin} color={iconColors[2]} mr={4} boxSize={6} />
              <Box textAlign="left" flex={1}>
                <Text fontWeight="bold" color={textColor} fontFamily="'Poppins', sans-serif">LinkedIn</Text>
                <Link href="https://linkedin.com/in/christopher-dean" color={useColorModeValue("teal.600", "teal.300")} isExternal _hover={{ textDecoration: "underline", color: useColorModeValue("teal.400", "teal.200") }} fontFamily="'Poppins', sans-serif">linkedin.com/in/christopher-dean</Link>
              </Box>
            </ListItem>
            <ListItem display="flex" alignItems="center" maxW="400px" w="100%">
              <Icon as={FaGithub} color={iconColors[3]} mr={4} boxSize={6} />
              <Box textAlign="left" flex={1}>
                <Text fontWeight="bold" color={textColor} fontFamily="'Poppins', sans-serif">GitHub</Text>
                <Link href="https://github.com/coderchrisdean" color={useColorModeValue("teal.600", "teal.300")} isExternal _hover={{ textDecoration: "underline", color: useColorModeValue("teal.400", "teal.200") }} fontFamily="'Poppins', sans-serif">github.com/coderchrisdean</Link>
              </Box>
            </ListItem>
          </Stack>
          <HStack spacing={6} mt={8} justify="center">
            <Link href="https://linkedin.com/in/christopher-dean" isExternal>
              <Icon as={FaLinkedin} boxSize={8} color={iconColors[2]} _hover={{ color: useColorModeValue("teal.400", "teal.200"), transform: "scale(1.2)" }} transition="all 0.3s" />
            </Link>
            <Link href="https://github.com/coderchrisdean" isExternal>
              <Icon as={FaGithub} boxSize={8} color={iconColors[3]} _hover={{ color: useColorModeValue("teal.400", "teal.200"), transform: "scale(1.2)" }} transition="all 0.3s" />
            </Link>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Contact;
