import React, { useState } from "react";
import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const DesktopNav = ({ linkColor, linkHoverColor, hoverColors, onNavClick }) => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: hoverColors[index % hoverColors.length],
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                }}
                onClick={(e) => onNavClick(e, navItem.href)}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  const hoverBgColor = useColorModeValue("teal.50", "gray.900");
  const hoverTextColor = useColorModeValue("teal.400", "white");

  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: hoverBgColor }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: hoverTextColor }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={hoverTextColor} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = ({ isOpen, linkColor, linkHoverColor, hoverColors, onNavClick }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem, index) => (
        <MobileNavItem key={navItem.label} {...navItem} index={index} linkColor={linkColor} linkHoverColor={linkHoverColor} hoverColors={hoverColors} onNavClick={onNavClick} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, index, linkColor, linkHoverColor, hoverColors, onNavClick }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
        onClick={(e) => onNavClick(e, href)}
      >
        <Text
          fontWeight={600}
          color={linkColor}
          _hover={{
            color: hoverColors[index % hoverColors.length],
            textDecoration: "none",
            transform: "translateX(5px)",
            transition: "all 0.3s ease",
          }}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: "0!important" }}
      >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "white");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("teal.500", "teal.300");
  const hoverColors = [
    useColorModeValue("teal.500", "teal.400"),
    useColorModeValue("purple.500", "purple.400"),
    useColorModeValue("blue.500", "blue.400"),
    useColorModeValue("green.500", "green.400"),
    useColorModeValue("orange.500", "orange.400"),
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
    }
    if (isMobile) {
      onToggle();
    }
  };

  return (
    <Box>
      <Flex
        as="header"
        position="sticky"
        top={0}
        zIndex={50}
        bg={bgColor}
        color={textColor}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={borderColor}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav linkColor={linkColor} linkHoverColor={linkHoverColor} hoverColors={hoverColors} onNavClick={handleNavClick} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <IconButton onClick={toggleColorMode} icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} aria-label="Toggle theme" />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav isOpen={isOpen} linkColor={linkColor} linkHoverColor={linkHoverColor} hoverColors={hoverColors} onNavClick={handleNavClick} />
      </Collapse>
    </Box>
  );
}
