import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  VStack,
  Box,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";

const timelineEvents = [
  {
    year: "2023",
    title: "Nacimiento de Ecoluz Urbana",
    description:
      "Ecoluz Urbana nació en 2023 como una idea innovadora para participar en Electrohack 2023 (octubre-diciembre), un evento que reúne mentes brillantes en busca de soluciones tecnológicas. Aunque fuimos seleccionados, no logramos ganar. Lejos de desanimarnos, esta experiencia nos motivó a crecer, mejorar y transformar nuestra idea inicial en un proyecto sólido y sostenible.",
    image: "https://i.ibb.co/kD39pBK/ecoluzone.jpg",
  },
  {
    year: "2024",
    title: "Reconocimiento en Electrohack 2024",
    description:
      "Tras meses de trabajo, investigación y perfeccionamiento, volvimos a participar en Electrohack 2024, presentando una versión refinada de nuestro proyecto. Nuestro esfuerzo fue reconocido con el 5.º lugar entre 32 proyectos, marcando un hito importante en nuestra trayectoria.",
    image: "https://i.ibb.co/9hVD4W9/ecoluz-2024.jpg",
  },
  {
    year: "2025",
    title: "Preparación para nuevos retos",
    description:
      "Hoy, con la mirada puesta en el futuro, nos estamos preparando para enfrentar los retos del 2025, buscando expandir nuestro impacto y seguir innovando en el ámbito de la iluminación sostenible.",
    image: "https://i.ibb.co/9yCb5SC/futuro.jpg",
  },
];

const Timeline = () => {
  return (
    <Alert status="warning" variant="subtle" flexDirection="column"  borderRadius="lg" p={6}>
      <Image maxW={{sm: '60px' }}src='https://i.ibb.co/H7dQzxF/historia.gif' borderRadius='full'/>
      <AlertTitle mb={4}>Línea del Tiempo</AlertTitle>
      <AlertDescription>
        <VStack spacing={6} align="stretch">
          {timelineEvents.map((event, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              bg="yellow.50"
              boxShadow="sm"
            >
              <HStack spacing={4} align="start">
                {event.image && (
                  <Image
                    src={event.image}
                    alt={event.title}
                    borderRadius="md"
                    boxSize="150px"
                    objectFit="cover"
                  />
                )}
                <Box>
                  <Text fontSize="xl" fontWeight="bold" color="yellow.600">
                    {event.year}
                  </Text>
                  <Text fontSize="lg" fontWeight="semibold" mt={2}>
                    {event.title}
                  </Text>
                  <Text mt={2}>{event.description}</Text>
                </Box>
              </HStack>
            </Box>
          ))}
        </VStack>
      </AlertDescription>
    </Alert>
  );
};

export default Timeline;
