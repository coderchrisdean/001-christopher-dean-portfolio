import React, { useEffect } from "react";
import { Box, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaCommentDots } from "react-icons/fa";

const Chatbot = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const buttonBgColor = useColorModeValue("teal.500", "teal.400");
  const buttonHoverBgColor = useColorModeValue("teal.600", "teal.500");

  useEffect(() => {
    // Placeholder for Botpress webchat integration
    // This script should be replaced with actual Botpress webchat script from your Botpress server or cloud instance
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        host: "https://your-botpress-server-url", // Replace with your Botpress server URL or cloud bot ID
        botId: "your-bot-id", // Replace with your Botpress bot ID
        clientId: "your-client-id", // Replace with your Botpress client ID
      });
    };

    return () => {
      document.body.removeChild(script);
      // Clean up Botpress webchat if necessary
    };
  }, []);

  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
      <IconButton
        aria-label="Open chatbot"
        icon={<FaCommentDots />}
        size="lg"
        borderRadius="full"
        bg={buttonBgColor}
        color="white"
        _hover={{ bg: buttonHoverBgColor }}
        onClick={() => {
          // Toggle Botpress webchat visibility if supported by the script, or open a custom UI if needed
          if (window.botpressWebChat) {
            window.botpressWebChat.open();
          }
        }}
        boxShadow="lg"
      />
    </Box>
  );
};

export default Chatbot;
