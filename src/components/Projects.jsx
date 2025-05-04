import React from "react";
import { Box, Heading, SimpleGrid, Text, Stack, Card, CardBody, CardFooter, Button, useColorModeValue, keyframes, Image, Flex } from "@chakra-ui/react";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProjectCard = ({ title, description, image, tags }) => {
  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const titleColor = useColorModeValue("gray.800", "white");
  const badgeColors = [
    useColorModeValue("teal.100", "teal.900"),
    useColorModeValue("purple.100", "purple.900"),
    useColorModeValue("blue.100", "blue.900")
  ];
  const badgeTextColors = [
    useColorModeValue("teal.800", "teal.300"),
    useColorModeValue("purple.800", "purple.300"),
    useColorModeValue("blue.800", "blue.300")
  ];

  return (
    <Card bg={bgColor} borderRadius="xl" boxShadow="xl" overflow="hidden" transition="transform 0.3s ease, box-shadow 0.3s ease" _hover={{ transform: "translateY(-10px)", boxShadow: "2xl" }}>
      <Image src={image} alt={title} h="200px" objectFit="cover" transition="transform 0.5s ease" _hover={{ transform: "scale(1.05)" }} />
      <CardBody p={5}>
        <Stack spacing={3}>
          <Heading size="md" color={titleColor} fontFamily="'Poppins', sans-serif">{title}</Heading>
          <Text color={textColor} fontSize="sm" noOfLines={2} fontFamily="'Poppins', sans-serif">{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter p={5} flexDirection="column" alignItems="center">
        <Stack direction="row" spacing={2} flexWrap="wrap" mb={3} justifyContent="center">
          {tags.map((tag, index) => (
            <Box key={tag} bg={badgeColors[index % badgeColors.length]} color={badgeTextColors[index % badgeTextColors.length]} px={2} py={1} borderRadius="md" fontSize="xs" fontWeight="medium" fontFamily="'Poppins', sans-serif">{tag}</Box>
          ))}
        </Stack>
        <Flex justifyContent="center">
          <Button variant="outline" colorScheme="teal" size="sm" borderRadius="full" fontFamily="'Poppins', sans-serif" transition="background-color 0.3s ease, color 0.3s ease" _hover={{ bg: useColorModeValue("teal.500", "teal.400"), color: useColorModeValue("white", "gray.800") }}>View Details</Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const headingColor = useColorModeValue("gray.800", "gray.100");
  const bgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Box id="projects" py={20} px={4} bg={bgColor} borderRadius="lg" boxShadow="xl" animation={`${fadeInUp} 0.8s ease-out`}>
      <Heading as="h2" size="xl" textAlign="center" mb={10} color={headingColor} fontFamily="'Poppins', sans-serif">My Projects</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} maxW="container.lg" mx="auto">
        <ProjectCard title="E-Commerce Platform" description="A full-featured online shopping platform with cart functionality, user authentication, and payment integration." image="https://images.unsplash.com/photo-1550009158-9ebf69173e03" tags={["React", "Node.js", "Stripe"]} />
        <ProjectCard title="Task Management App" description="A collaborative task manager with real-time updates, project tracking, and team assignment features." image="https://images.unsplash.com/photo-1499750310107-5fef28a66643" tags={["Vue", "Firebase", "Express"]} />
        <ProjectCard title="Fitness Tracker" description="A web app to track workouts, set fitness goals, and visualize progress with interactive charts." image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438" tags={["React", "Chart.js", "MongoDB"]} />
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
