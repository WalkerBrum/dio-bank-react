import { Input, Box, Text, Stack, InputGroup, InputRightElement, } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

import { login } from '../services/login';
import { ButtonAllAplication } from './Button';
import { activeButton } from '../services/activeButton';

export const Card = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (): void => setShow(!show);

  return (
    <Box 
      backgroundColor='#ffffff' 
      borderRadius='25px' 
      padding='25px' 
      width={{ base: '100vw', md:'30rem' }}
    >
      <Text fontSize='2xl' fontWeight='bold'>Faça o login</Text>
      <Stack spacing={3} padding='10px 0'>
        <Input 
          placeholder='E-mail' 
          size='lg'
          onChange={(event) => setEmail(event.target.value)}
        />

        <InputGroup>
          <Input 
            placeholder='Senha' 
            size='lg'
            type={show ? 'text' : 'password'}
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement 
            width='3.5rem' 
            height='3rem' 
            fontSize='1.2rem'
            onClick={handleClick}
          >
            {show ? 
              <ViewIcon cursor='pointer' /> : <ViewOffIcon cursor='pointer' />
            }
          </InputRightElement>
        </InputGroup>

      </Stack>

      <ButtonAllAplication 
        text='Entrar'
        color='teal' 
        size='lg'
        disabled={activeButton(email, password)}
        click={login} 
      />
    </Box>      
  )
}