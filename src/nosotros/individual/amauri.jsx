import React from "react";
import {Text } from "@chakra-ui/react";
import Sendemail from '../../functions/sendemail';
import { Card, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Avatar, WrapItem} from '@chakra-ui/react'

const amauri = () =>(
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
             <Avatar size='xl' name='Alex Marquez' src='h.unJPG' />
         </WrapItem>
        <Box as='span' flex='1' textAlign='left' >
        <Text className="contactnames" marginLeft={5}>TSU. Alex Canales </Text>
        </Box>
        <AccordionIcon />
    </AccordionButton>
    </h2>
    
    <AccordionPanel pb={4}>
    <Text>Investigador</Text>
    <Text className="textcontact" >Lorem  </Text>
        
        <Sendemail correoElectronico=" alex.mauri.mc@gmail.com">
        alex.mauri.mc@gmail.com
        </Sendemail>
         
    </AccordionPanel>
</AccordionItem>
</Accordion>
  </Card> 
)

export default amauri