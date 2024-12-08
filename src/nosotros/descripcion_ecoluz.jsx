import {
    Alert,
    AlertIcon,
    AlertTitle,
    Image,Text
  } from '@chakra-ui/react'
  import { QuestionIcon } from '@chakra-ui/icons'

const descripcion_ecoluz =() =>(

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
<Image maxW={{sm: '60px' }}src='https://i.ibb.co/Ptr0CVt/lampara.gif' borderRadius='full'/>
  <AlertTitle mt={4} mb={1} fontSize='lg'>
  Iluminamos el futuro con innovación y sostenibilidad
  </AlertTitle>
  <Text > Somos Ecoluz Urbana, un equipo unido por una visión compartida: 
    innovar para un futuro más sostenible. Nuestra pasión por la tecnología y el medio ambiente nos impulsa a diseñar
     e implementar sistemas de iluminación pública y exterior más eficientes, ecológicos y accesibles, 
     ayudando a transformar espacios urbanos y empresariales en entornos más inteligentes y sostenibles.
     </Text>
</Alert>   
)

export default descripcion_ecoluz