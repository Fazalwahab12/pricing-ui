import { Box, Flex, HStack,Icon,Text } from '@chakra-ui/react'
import React from 'react'
import icon1 from './icons/icon1'
import icon2 from './icons/icon2'
import icons3 from './icons/icons3'

export default function Feature() {
  return (
    <Box mx="300px"mt="40px" maxH={'1000'}>
      <Flex direction={{ base: "column", lg: "row" }} >
      <HStack mb={'10px'}>
        <Icon as={icon1}/>
        <Text>30 days money back Guarantee</Text>
      </HStack>
      <HStack mb={'10px'}>
        <Icon as={icon2}/>
        <Text>No setup fees
100% hassle-free</Text>
      </HStack>
      <HStack mb={'10px'}>
        <Icon as={icons3}/>
        <Text>No monthly subscription
Pay once and for all</Text>
      </HStack>
      </Flex>
    </Box>
  )
}
