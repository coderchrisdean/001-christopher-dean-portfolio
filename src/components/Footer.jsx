import React from "react";
import { Box, Text, Link, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const linkColor = useColorModeValue("teal.500", "teal.200");

  return (
    <Box as="footer" bg={bgColor} color={textColor} py={4} textAlign="center" mt="auto">
      <Text fontSize="sm">
        &copy; 2025 Christopher Dean - <Link href="https://www.c-dean.com" color={linkColor} isExternal>www.c-dean.com</Link>
      </Text>
    </Box>
  );
};

export default Footer;
