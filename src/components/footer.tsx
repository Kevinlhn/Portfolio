import { HStack, Button, Link } from "@chakra-ui/react";
import { FaLinkedinIn, FaRegFile } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <HStack spacing={3}>
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
        href="https://drive.google.com/file/d/1trAXcoPsCIbop7zgwyjzdaeHrCr_CLa3/view?usp=sharing"
        isExternal
      >
        <Button variant={"ghost"} size={"sm"} leftIcon={<FaRegFile />}>
          Résumé
        </Button>
      </Link>
    </HStack>
  );
};

export default Footer;
