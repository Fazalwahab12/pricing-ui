
import { Box, Heading, Text, useFormControlStyles,  } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
   <Box textAlign={{ base: "left", md: "left", lg: "center" }} bg=" #6B46C1"pt="20px"pb="120px" color="white" 
   pl="15px">
   
<Heading  >
Simple pricing for your business
</Heading>
<Text pt="1"

 >
Plans that are carefully crafted to suit your business.
</Text>
   </Box>
  )
}



