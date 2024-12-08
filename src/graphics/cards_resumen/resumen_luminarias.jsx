import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';

const Resumenluminarias = () => (
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
      <Image maxW={{ sm: '60px' }} src="https://i.ibb.co/GPy7smz/luminaria.png" />
      <Box ml={4}>
        <Text fontSize="xl" fontWeight="bold">
          Actividad Mensual
        </Text>
        <Text fontSize="sm" fontWeight="400" color="gray.500">
          Noviembre
        </Text>
        <Text fontSize="3xl" fontWeight="semibold">
          54 Luminarias
        </Text>
        <Text fontSize="sm" fontWeight="400" color="gray.500">
          de 54 Luminarias
        </Text>
      </Box>
    </Flex>


    <Flex align="center" justify="flex-start" mt={2}>
      <Image maxW="24px" src="https://i.ibb.co/SmC4Sqc/subir.gif" />
      <Text ml={2} fontSize="sm" color="blue.500" fontWeight="bold">
        +80%
      </Text>
    </Flex>
  </Box>
);

export default Resumenluminarias;
