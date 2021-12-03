import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Home from './components/Home';
import { Container } from "./styles/appStyles"
import ContextProvider from "./GlobalContext"

export default function App() {
  return (
    <ContextProvider>
      <Container>
        <Home/>
        <StatusBar style="light" />
      </Container>
    </ContextProvider>
  );
}
