import {
    Alert,
    AlertIcon,
    AlertTitle,
    Image,
    Text,
    VStack,
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react';
  import { CheckCircleIcon } from '@chakra-ui/icons';
  
  const MisionYVision = () => (
    <VStack spacing={6} mt={4} align="stretch">
      {/* Misión */}
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="auto"
        borderRadius="lg"
        p={6}
      >
        <Image
          maxW={{ sm: '60px' }}
          src="https://i.ibb.co/0YJfRGZ/mision.gif"
          borderRadius="full"
          mb={4}
        />
        <AlertTitle fontSize="xl" mb={2}>
          Misión
        </AlertTitle>
        <Text>
          Diseñar, desarrollar e implementar soluciones tecnológicas que
          transformen los sistemas de iluminación pública y exterior, haciéndolos
          más eficientes, ecológicos y accesibles, contribuyendo así al bienestar
          de las comunidades y al cuidado del medio ambiente.
        </Text>
      </Alert>
  
      {/* Visión */}
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="auto"
        borderRadius="lg"
        p={6}
      >
        <Image
          maxW={{ sm: '60px' }}
          src="https://i.ibb.co/GCBCHZb/vision.gif"
          borderRadius="full"
          mb={4}
        />
        <AlertTitle fontSize="xl" mb={2}>
          Visión
        </AlertTitle>
        <Text>
          Ser líderes en innovación y sostenibilidad, ofreciendo tecnologías
          inteligentes que redefinan los estándares de la iluminación urbana y
          exterior, logrando un impacto positivo a nivel local e internacional.
        </Text>
      </Alert>
  
      {/* Valores */}
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="auto"
        borderRadius="lg"
        p={6}
      >
        <Image
          maxW={{ sm: '60px' }}
          src="https://i.ibb.co/w0d5g4M/valor.gif"
          borderRadius="full"
          mb={4}
        />
        <AlertTitle fontSize="xl" mb={2}>
          Valores
        </AlertTitle>
        <List spacing={3} mt={2} textAlign="left">
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Innovación: Exploramos nuevas ideas para crear soluciones disruptivas
            y efectivas.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Sostenibilidad: Nos comprometemos con el cuidado del medio ambiente en
            cada proyecto.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Colaboración: Creemos en el trabajo en equipo y en la unión de talentos
            multidisciplinarios.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Compromiso: Nos enfocamos en entregar calidad y cumplir con nuestros
            objetivos.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Resiliencia: Convertimos los desafíos en oportunidades para mejorar y
            crecer.
          </ListItem>
        </List>
      </Alert>
  
      {/* Objetivos */}
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="auto"
        borderRadius="lg"
        p={6}
      >
        <Image
          maxW={{ sm: '60px' }}
          src="https://i.ibb.co/ZMz590c/objetivo.gif"
          borderRadius="full"
          mb={4}
        />
        <AlertTitle fontSize="xl" mb={2}>
          Objetivos
        </AlertTitle>
        <List spacing={3} mt={2} textAlign="left">
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Implementar sistemas de iluminación más eficientes que reduzcan el
            consumo energético.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Promover el uso de tecnologías sostenibles en el ámbito público y
            privado.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Expandir el alcance de Ecoluz Urbana, llevando nuestras soluciones a
            nuevas comunidades.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Seguir aprendiendo y evolucionando para afrontar con éxito los
            desafíos del 2025 y más allá.
          </ListItem>
        </List>
      </Alert>
    </VStack>
  );
  
  export default MisionYVision;
  