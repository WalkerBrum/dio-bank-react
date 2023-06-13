import { Heading, Box, Image } from '@chakra-ui/react'

import  logo from '../assets/logo-full.png'

export const Header = () => {
  return (
    <Box>
      <Image 
        src={logo} 
        alt='Logo da Dio' 
        position='absolute' 
        width={{ base: '5rem', sm: '7rem' }} 
        top={{ base: '2.3rem', md: '2.7rem'}} 
        right='1.5rem'
      />
      <Heading 
        color='white' 
        as='h1'
        paddingTop='25px' 
        size={{ base: '3xl', sm: '4xl' }} 
        position={{ base:'absolute', md:'static' }} 
        left='1.5rem'
      >
        Dio Bank
      </Heading>
    </Box>
  )
}