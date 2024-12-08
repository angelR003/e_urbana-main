import React from "react";
import {Text } from "@chakra-ui/react";
import Sendemail from '../../functions/sendemail';
import { Card, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Avatar, WrapItem} from '@chakra-ui/react'

const mota = () =>(
    <Card  className='indexcard'
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='filled'
  >
    

<Accordion defaultIndex={[1]} allowMultiple>
<AccordionItem >
 <h2>
    <AccordionButton>
        <WrapItem>
             <Avatar size='xl' name='TSU. Diego Hernandez' src='https://i.ibb.co/4t4nWhT/Whats-App-Image-2024-12-06-at-16-29-26-bb6226e5.jpg' />
         </WrapItem>
        <Box as='span' flex='1' textAlign='left' >
        <Text className="contactnames" marginLeft={5} > TSU. Diego Hernandez  </Text>
        </Box>
        <AccordionIcon />
    </AccordionButton>
    </h2>
    
    <AccordionPanel pb={4}>
    <Text>Investigador</Text>
    <Text className="textcontact" >Lorem. </Text>
        
        <Sendemail correoElectronico="motacs0507@gmail.com">
        motacs0507@gmail.com
        </Sendemail>
         
    </AccordionPanel>
</AccordionItem>
</Accordion>
  </Card> 
)

export default mota