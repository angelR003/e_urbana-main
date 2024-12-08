import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';

const ResumenEnergetico = () => (
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
      <Image maxW={{ sm: '60px' }} src="https://i.ibb.co/zXf7kGn/electricidad.png" />
      <Box ml={4}>
        <Text fontSize="xl" fontWeight="bold">
          Consumo Eléctrico Mensual
        </Text>
        <Text fontSize="sm" fontWeight="400" color="gray.500">
          Noviembre
        </Text>
        <Text fontSize="3xl" fontWeight="semibold">
          252 kWh
        </Text>
      </Box>
    </Flex>


    <Flex align="center" justify="flex-start" mt={2}>
      <Image maxW="24px" src="https://i.ibb.co/PxsjwXB/abajo.gif" />
      <Text ml={2} fontSize="sm" color="green.500" fontWeight="bold">
        -30%
      </Text>
    </Flex>
  </Box>
);

export default ResumenEnergetico;
