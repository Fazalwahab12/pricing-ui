'use client';
import { ChakraProvider, } from '@chakra-ui/react';
import Header from './Header';
import Pricing from './pricing';
import Feature from './Feature';
//import React from 'react'

export default function page() {
  return (
   <ChakraProvider>
    <Header/>
   <Pricing/>
   <Feature/>
   </ChakraProvider>
  )
}

