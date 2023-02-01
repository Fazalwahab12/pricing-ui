import { Box, Button, Flex, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import iconstek from './icons/iconstek'

export default function Pricing() {
  return (
    <Box maxH={"1000px"}
    mx={{ base: "20px", lg: "auto" }}mt="-90"bg={"white"}
     borderRadius="20px"
     overflow={"hidden"}
     boxShadow={
      " 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
    }>
      <Flex direction={{ base: "column", md: "column", lg: "row" }}  >
        <Box  bg="#d4d6e7d9"p={"15px"} textAlign="center">
          <Text fontSize={"22px"} fontWeight={"bold"} color="black">Premium PRO</Text>
          <Heading color="black">$329</Heading>
          <Text color="black">billed just once</Text>
          <Button bg=" #805AD5" mt="15px" w="250px">Get started</Button>
        </Box>
        <Box pt="10px" pl="15px"pr={"10px"}>
          <Text mb="5px">
            Access these features when you get this pricing package for your business.
          </Text>
          <HStack mb="5px">
            <Icon as={iconstek} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb="5px">
            <Icon as={iconstek} />
            <Text>Additional phone numbers</Text>
          </HStack >
          <HStack mb="5px">
            <Icon as={iconstek} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb="5px">
              <Icon as={iconstek}/>
              <Text>24/7 support and consulting</Text>
            </HStack>



        </Box>
      </Flex>
    </Box>
  )
}
