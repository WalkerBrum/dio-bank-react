import { ChakraProvider } from '@chakra-ui/react'
import { Global, css } from "@emotion/react";

import { Card } from './components/Card';
import { Layout } from './components/Layout';

const inputStyles = css`
  input[type="password"]::-ms-reveal {
    display: none !important;
  }
`;

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Global styles={inputStyles} />
        <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
