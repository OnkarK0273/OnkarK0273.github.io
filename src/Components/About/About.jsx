import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
    <div id="about" class="about section">
      <Heading color={'#C7AE92'} pt='40px' pb='40px' >About</Heading>
      <Text id="user-detail-name" fontSize={'20px'} fontWeight={'700'} w="80%" m='auto' pb='10px'>My name is <lebal  style={{color:'#C7AE92',fontStyle:'italic'}}>Onkar Kalsannawar</lebal>. I am a Full-Stack Web Developer.</Text>
   
      <Text id="user-detail-intro"  color={'gray.500'} textAlign={'left'} w="80%" m='auto'>Aspiring Full Stack Developer who is analytical and detail-oriented.
        Capable of producing production-ready code for single-page applications
        using ReactJS, ExpressJS, MongoDB, and Nodejs. 1100+ hours of
        coding,250+ DSA problem solved, and hands-on experience in making 3 fully
        functional websites. looking forward to working as a full-stack web
        developer in the tech company.
      </Text>
    </div>
  )
}
