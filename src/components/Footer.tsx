import { Link, Text, Center } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Center backgroundColor='#1e1e1e' color='white' width='100%' >
      <Text padding='15px' textDecoration='none'>
        Aplicação Desenvolvida por <Link href='https://github.com/WalkerBrum/dio-bank-react' color='teal.500'  fontWeight='bold' isExternal>Walker Lobato</Link>
      </Text>
    </Center>
  )
}