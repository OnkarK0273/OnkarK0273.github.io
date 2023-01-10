import { Box, Tag, Text, HStack ,IconButton,Icon} from '@chakra-ui/react'
import React from 'react'
import Carousel from './Cursor'
import { AiOutlineLink,AiFillGithub} from "react-icons/ai";
export default function Carditem({name,html_url,homepage,topics,images}) {
    
  return (
    <div>
        <Box height={"350px"} boxShadow='md' p='1px' rounded='md' borderColor='#C7AE92'>
            
            <Carousel images={images}/>
            <Text fontWeight={'bold'}>{name}</Text>
            
            <HStack justifyContent={'center'} mt='10px'>
            {
                topics.map((el,i)=>(<Tag key={i} size='sm' 
                variant='outline'
                color='black' p='5px' >{el}</Tag>))

            }
            </HStack>
            <HStack justifyContent={'center'} columnGap='8px' mt='10px'>
            <IconButton onClick={()=>{ document.location.href=html_url}} bg='#C7AE92' size={'sm'} icon={<Icon as={AiFillGithub}  />} />
            <IconButton onClick={()=>{ document.location.href=homepage}} bg='#C7AE92' size={'sm'} icon={<Icon as={AiOutlineLink}  />} />
            </HStack>
        </Box>

    </div>
  )
}

