import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export default function States() {
  return (
    <Box p='20px' >
        <Heading></Heading>
        <Flex w={{base:'60%',sm:'60%',md:'80%'}} m='auto' columnGap={'5px'} flexDirection={{base:'column',sm:'column',md:'row'}}>
            <Box>
            <Image src='https://github-readme-stats.vercel.app/api?username=OnkarK0273&theme=swift&hide_border=false&include_all_commits=true&count_private=true'/>
            </Box>
            <Box>
            <Image src='https://github-readme-streak-stats.herokuapp.com/?user=OnkarK0273&theme=swift&hide_border=false'/>
            </Box>
            <Box>
            <Image src='https://github-readme-stats.vercel.app/api/top-langs/?username=OnkarK0273'/>
            </Box>
        </Flex>
    </Box>
  )
}
