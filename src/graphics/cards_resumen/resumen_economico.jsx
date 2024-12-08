import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';

const ResumenEconomico = () => (
  <Box
    p={4}
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    shadow="lg"
    bg="white"
    textAlign="left"
  >

    <Flex align="center" mb={4}>
      <Image maxW={{ sm: '60px' }} src="https://i.ibb.co/gZnvgYG/dinero.png" />
      <Box ml={4}>
        <Text fontSize="xl" fontWeight="bold">
          Gasto Mensual
        </Text>
        <Text fontSize="sm" fontWeight="400" color="gray.500">
          Noviembre
        </Text>
        <Text fontSize="3xl" fontWeight="semibold">
          $ 7,200.33 MXN
        </Text>
        <Text fontSize="sm" fontWeight="400" color="gray.500">
          de consumo y mantenimiento
        </Text>
      </Box>
    </Flex>


    <Flex align="center" justify="flex-start" mt={2}>
      <Image maxW="24px" src="https://i.ibb.co/PxsjwXB/abajo.gif" />
      <Text ml={2} fontSize="sm" color="green.500" fontWeight="bold">
        -27%
      </Text>
      
    </Flex>
  </Box>
);

export default ResumenEconomico;
