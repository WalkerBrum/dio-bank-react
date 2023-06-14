import { SimpleGrid } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { useState, useEffect } from 'react';

import { api } from '../api';

interface IUserDataProps {
  email: string;
  password: string;
  name: string;
}

export const Conta = () => {
  const [userData, setUserData] = useState<null | IUserDataProps>();

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserDataProps = await api;

      setUserData(data);
    }

    getData()
  }, []);

  return (
    <SimpleGrid columns={2} spacing={8} >
      <CardInfo text='Informações de acesso'/>
      <CardInfo text='Informações da conta'/>
    </SimpleGrid>
  )
}