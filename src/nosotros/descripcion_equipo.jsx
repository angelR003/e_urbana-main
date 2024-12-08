import {
    Alert,
    AlertIcon,
    AlertTitle,
    Image,Text
  } from '@chakra-ui/react'
  import { QuestionIcon } from '@chakra-ui/icons'

const descripcion_equipo =() =>(

 <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
  borderRadius="lg"
>
<Image maxW={{sm: '60px' }}src='https://i.ibb.co/jJN3cFz/interrogacion.gif' borderRadius='full'/>
  <AlertTitle mt={4} mb={1} fontSize='lg'>
  ¿Quienes somos?
  </AlertTitle>
  <Text > Somos un equipo de  estudiantes del Area de las Tecnologias de la informacion.
            Todos compartimos una gran pasión por la innovación y la sostenibilidad, lo que nos impulsa 
            a desarrollar soluciones tecnológicas que mejoren la calidad de vida. 
            Con nuestro enfoque multidisciplinario, buscamos implementar un sistema de 
            iluminación pública y exterior más eficiente, ecológico y accesible para todos, 
            trabajando juntos para contribuir al bienestar del medio ambiente y la comunidad.</Text>
</Alert>   
)

export default descripcion_equipo

