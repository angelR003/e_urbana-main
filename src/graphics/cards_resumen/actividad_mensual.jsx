import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';

const Actividadmensual = () => (
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
      <Image maxW={{ sm: '60px' }} src="https://i.ibb.co/fd7c1wL/actividad.png" />
      <Box ml={4}>
        <Text fontSize="xl" fontWeight="bold">
          Tiempo Mensual
        </Text>
        <Text fontSize="sm" fontWeight="400" color="gray.500">
          Noviembre
        </Text>
        <Text fontSize="3xl" fontWeight="semibold">
          144 horas
        </Text>
        <Text fontSize="sm" fontWeight="400" color="gray.500">
          de alumbrado
        </Text>
      </Box>
    </Flex>


    <Flex align="center" justify="flex-start" mt={2}>
      <Image maxW="24px" src="https://i.ibb.co/2ZTsTv9/igual.gif" />
      <Text ml={2} fontSize="sm" color="orange.500" fontWeight="bold">
        +0% mas que octubre
      </Text>
    </Flex>
  </Box>
);

export default Actividadmensual;
