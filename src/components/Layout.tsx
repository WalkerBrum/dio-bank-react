import { ReactNode } from "react";
import { Flex } from '@chakra-ui/react';
import { Global, css } from "@emotion/react";

import { Footer } from "./Footer";
import { Header } from "./Header";

const inputStyles = css`
  input[type="password"]::-ms-reveal {
    display: none !important;
  }
`;

interface ILayoutProps {
  children: ReactNode
};

export const Layout: React.FC<ILayoutProps> = ({ children })  => {
  return (
    <>
      <Global styles={inputStyles} />
      <Flex
        minWidth='100vw' 
        minHeight='100vh' 
        backgroundColor='#9413dc' 
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
      >
        <Header />
          {children}
        <Footer />
      </Flex>
    </>
  )
}