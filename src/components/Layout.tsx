import { ReactNode } from "react"
import { Flex } from '@chakra-ui/react'

import { Footer } from "./Footer"
import { Header } from "./Header"

interface ILayoutProps {
  children: ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({ children })  => {
  return (
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
  )
}