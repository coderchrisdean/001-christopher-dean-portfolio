import React from "react";
import { Box, Text, VStack, Icon, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

const skillsData = [
  { category: "Frontend", icon: FaCode, items: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML/CSS", "Chakra UI"] },
  { category: "Backend", icon: FaServer, items: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"] },
  { category: "Database", icon: FaDatabase, items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma", "DynamoDB"] },
  { category: "Tools", icon: FaTools, items: ["Git", "Docker", "Webpack", "Vite", "Jest", "Cypress"] },
];

const Skills = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("teal.600", "teal.300");
  const categoryColor = useColorModeValue("gray.800", "white");
  const itemColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box id="skills" py={16} bg={bgColor} borderRadius="lg" borderWidth={1} borderColor={borderColor} boxShadow="md" px={{ base: 4, md: 8 }}>
      <Text fontSize="3xl" fontWeight="bold" mb={8} textAlign="center" color={headingColor}>
        Skills & Expertise
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {skillsData.map((skill, index) => (
          <VStack key={index} align="start" spacing={3} p={4} bg={useColorModeValue("gray.50", "gray.700")} borderRadius="md" borderWidth={1} borderColor={borderColor}>
            <Icon as={skill.icon} boxSize={6} color={headingColor} />
            <Text fontSize="xl" fontWeight="semibold" color={categoryColor}>{skill.category}</Text>
            <VStack align="start" spacing={1}>
              {skill.items.map((item, idx) => (
                <Text key={idx} fontSize="md" color={itemColor}>{item}</Text>
              ))}
            </VStack>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
