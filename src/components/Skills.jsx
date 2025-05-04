import React from "react";
import { Box, Heading, SimpleGrid, Icon, Text, Stack, Card, CardBody, useColorModeValue, keyframes } from "@chakra-ui/react";
import { FaCode, FaDatabase, FaCloud, FaTools } from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SkillCard = ({ title, description, icon, iconColor }) => {
  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const titleColor = useColorModeValue("gray.800", "white");

  return (
    <Card bg={bgColor} borderRadius="xl" boxShadow="xl" transition="transform 0.3s ease, box-shadow 0.3s ease" _hover={{ transform: "translateY(-10px)", boxShadow: "2xl" }} h="100%">
      <CardBody p={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 2, md: 4 }} align="center" textAlign="center" h="100%" justifyContent="center">
          <Icon as={icon} boxSize={{ base: 8, md: 12 }} color={iconColor} />
          <Heading size="md" color={titleColor} fontFamily="'Poppins', sans-serif">{title}</Heading>
          <Text color={textColor} fontSize={{ base: "xs", md: "sm" }} fontFamily="'Poppins', sans-serif">{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

const Skills = () => {
  const headingColor = useColorModeValue("black", "black");
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const iconColors = [
    useColorModeValue("teal.500", "teal.400"),
    useColorModeValue("purple.500", "purple.400"),
    useColorModeValue("blue.500", "blue.400"),
    useColorModeValue("green.500", "green.400")
  ];

  return (
    <Box id="skills" py={{ base: 10, md: 20 }} px={{ base: 2, md: 4 }} bg={bgColor} borderRadius="lg" boxShadow="xl" animation={`${fadeInUp} 0.8s ease-out`}>
      <Heading as="h2" size={{ base: "lg", md: "xl" }} textAlign="center" mb={{ base: 6, md: 10 }} color={headingColor} fontFamily="'Poppins', sans-serif">My Skills</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing={{ base: 3, md: 6 }} maxW="container.lg" mx="auto">
        <SkillCard title="Frontend Development" description="Expertise in React, Vue, HTML5, CSS3, and modern JavaScript frameworks with a focus on responsive design." icon={FaCode} iconColor={iconColors[0]} />
        <SkillCard title="Backend Development" description="Strong skills in Node.js, Express, Python, and RESTful API design for robust server-side applications." icon={FaDatabase} iconColor={iconColors[1]} />
        <SkillCard title="Cloud Technologies" description="Experience with AWS, Azure, and Google Cloud for deployment, scaling, and managing applications." icon={FaCloud} iconColor={iconColors[2]} />
        <SkillCard title="DevOps & Tools" description="Proficiency in Docker, Kubernetes, Git, and CI/CD pipelines to streamline development workflows." icon={FaTools} iconColor={iconColors[3]} />
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
