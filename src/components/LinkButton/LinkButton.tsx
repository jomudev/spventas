import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import { Button } from "../Button/Button";
import { ChakraProps } from "@chakra-ui/react";

export type LinkButtonProps = ChakraProps & {
  children: ReactNode;
  href: string;
  icon?: ReactElement;
};

export const LinkButton = ({ children, icon, href, ...props } : LinkButtonProps) => {
  return (
    <Button {...props} icon={icon} variant="outline" as={Link} href={href} >
        { children }
    </Button>
  );
};