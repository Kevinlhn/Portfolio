import React from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaLaptopCode } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const NavBar = () => {
  const scrollTo = (elementId: string) => {
    scroller.scrollTo(elementId, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Box width="100%">
      <Box
        display="flex"
        p={1}
        justifyContent="space-between"
        alignItems="center"
        marginY={3}
        marginX="auto"
        width="90%"
        borderRadius={"20px"}
      >
        <ColorModeSwitcher
          backdropFilter="auto"
          backdropBlur="50px"
          borderRadius="30"
          size={"lg"}
          pl={3.5}
        />

        <Menu>
          <MenuButton
            backdropFilter="auto"
            backdropBlur="50px"
            size={"md"}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            borderRadius="30"
            variant="ghost"
          />
          <MenuList>
            <Link to="/">
              <MenuItem icon={<FaHome />} onClick={() => scrollTo("home")}>
                Home
              </MenuItem>
            </Link>
            <Link to="/about_me">
              <MenuItem
                icon={<FaInfoCircle />}
                onClick={() => scrollTo("about")}
              >
                About Me
              </MenuItem>
            </Link>
            <Link to="/projects">
              <MenuItem
                icon={<FaLaptopCode />}
                onClick={() => scrollTo("about")}
              >
                Projects
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default NavBar;
