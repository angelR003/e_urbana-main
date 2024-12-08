import React from "react";
import {Text } from "@chakra-ui/react";
import Sendemail from '../../functions/sendemail';
import { Card, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Avatar, WrapItem} from '@chakra-ui/react'

const luis = () =>(
    <Card  className='indexcard'
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='filled'
  >
    

<Accordion defaultIndex={[1]} allowMultiple>
<AccordionItem >
 <h2>
    <AccordionButton >
        <WrapItem>
             <Avatar size='xl' name='Luis Marquez' src='https://avatars.githubusercontent.com/u/141973599?v=4' />
         </WrapItem>
        <Box as='span' flex='1' textAlign='left' >
        <Text className="contactnames" marginLeft={5}> TSU. Luis Ivan Marquez</Text>
        </Box>
        <AccordionIcon />
    </AccordionButton>
    </h2>
    
    <AccordionPanel  pb={4}>
    <Text>Cofundador Investigador</Text>
    <Text className="textcontact" > Técnico Superior Universitario en Desarrollo de Software Multiplataformade de la
        Universidad Tecnológica de Xicotepec de Juárez, 
        estudiante de Ingenieria en Desarrollo y Gestión de Software de la Universidad Tecnológica de Xicotepec de Juárez.
        Especializado en la creación de soluciones tecnológicas eficientes, escalables y centradas en el usuario,
        destacándose en el desarrollo Frontend, la integración de sensores y la implementación de APIs REST.
        Su enfoque está orientado a la innovación y la integración de hardware y software para resolver desafíos 
        tecnológicos complejos, contribuyendo al desarrollo de proyectos interdisciplinarios que generan un impacto 
        positivo en la sociedad.</Text>
        
        <Sendemail correoElectronico="luisivmaraz03@gmail.com">
        luisivmaraz03@gmail.com
        </Sendemail>
         
    </AccordionPanel>
</AccordionItem>
</Accordion>
  </Card>
)

export default luis;