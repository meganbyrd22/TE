import React, { ReactNode } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

interface ChakraBaseProviderProps {
  children: ReactNode;
}

const theme = extendTheme({});

const ChakraBaseProvider: React.FC<ChakraBaseProviderProps> = ({ children }) => (
  <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>
);

export { ChakraBaseProvider };
