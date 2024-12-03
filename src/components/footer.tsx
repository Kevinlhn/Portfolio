import { HStack, Button, Link, VStack} from "@chakra-ui/react";
import { FaLinkedinIn, FaRegFile } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
  <VStack>
    <HStack spacing={3} backdropFilter="auto"
    backdropBlur="100px" p={1} borderRadius={100}>
      <Link href="https://github.com/Kevinlhn" isExternal>
        <Button variant={"ghost"} size={"sm"} leftIcon={<FiGithub />}>
          GitHub
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/kevinlhn/" isExternal>
        <Button variant={"ghost"} size={"sm"} leftIcon={<FaLinkedinIn />}>
          LinkedIn
        </Button>
      </Link>
      ;
      <Link
        href="https://drive.google.com/file/d/1Qge2cA39ncfxlJizEVN7hyRhuLIn8SJZ/view?usp=share_link"
        isExternal
      >
        <Button variant={"ghost"} size={"sm"} leftIcon={<FaRegFile />}>
          Resume
        </Button>
      </Link>
    </HStack>
  </VStack>
  );
};

export default Footer;
