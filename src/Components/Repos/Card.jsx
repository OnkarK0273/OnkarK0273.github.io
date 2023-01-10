import { Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import Carditem from './Carditem'
import { repos } from '../../Data/repos'
export default function Card() {
  return (
    <div>
        <Heading color={'#C7AE92'}>PROJECTS</Heading>
        { <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}}p='20px'  gap={'20px'} columnGap='10%'>
            {
                repos.map((el)=>(<Carditem key={el.id} {...el}/>))
            }
        </Grid> }

    </div>
  )
}
