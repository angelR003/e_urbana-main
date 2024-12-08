// Home.js
import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Card, CardHeader, CardBody, Text, Stack, Image, SimpleGrid } from '@chakra-ui/react'


const Home = () => (
  <div className="App">
  <Navbar/> 
  
          <Card className='indexcard'
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='filled'
        >
          <Image rounded="md" maxW={{sm: '500px' }} src="https://img.interempresas.net/fotos/3021851.jpeg" alt="Dan Abramov" />
          
          <Stack>
            <CardBody>
              <Text  className='maintitle'>Iluminación Inteligente para Ciudades Inteligentes</Text>
              <Text py='2'>
              Ecoluz Urbana es una solución innovadora dedicada a transformar la gestión energética de luminarias públicas y exteriores. 
              Nuestro enfoque combina eficiencia energética, sostenibilidad ambiental y reducción de costos, abordando los principales 
              desafíos relacionados con el alumbrado en espacios urbanos y corporativos.
              Ofrecemos un sistema integral que optimiza el consumo de energía, mejorando la iluminación en calles, empresas, 
              universidades y otros espacios públicos y privados. A través de tecnología de punta, promovemos la transición
               hacia un futuro más sostenible, donde la eficiencia energética es la base para el desarrollo de comunidades y 
               organizaciones responsables con el medio ambiente.
              </Text>
            </CardBody>
          </Stack>
        </Card>
  <body>   
 

  <Card  className='indexcard'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='filled'
          >
          <CardBody>
              <Text className='asubtitles'>Objetivos que Iluminan el futuro</Text>
              <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>




              <Card className='interescard' marginTop='20px'>
                  <CardHeader>
                    <Image
                     maxW={{sm: '80px' }}
                    src='https://i.ibb.co/x2jBFNw/energia-renovable.gif'
                     />
                </CardHeader>
                <CardBody>
                <Text  className='subtitles'>Redefiniendo el Consumo Energético</Text>
                  <Text> Diseñamos sistemas de iluminación inteligente que adaptan el consumo energético a 
                    las condiciones ambientales y la demanda, optimizando recursos y reduciendo el gasto en 
                    luminarias públicas y exteriores.</Text>
                 </CardBody>
              </Card>


             

              <Card className='interescard' marginTop='20px'>
                  <CardHeader>
                    <Image
                     maxW={{sm: '80px' }}
                    src='https://i.ibb.co/d77V1Kn/eficiencia.gif'
                     />
                </CardHeader>
                <CardBody>
                <Text  className='subtitles'> Eficiencia en Acción </Text>
                  <Text>Desarrollamos y aplicamos tecnología avanzada para gestionar y monitorear 
                    las luminarias de forma remota, facilitando el mantenimiento predictivo y optimizando 
                    la gestión de recursos.</Text>
                 </CardBody>
              </Card>



              <Card className='interescard' marginTop='20px'>
                  <CardHeader>
                    <Image
                     maxW={{sm: '80px' }}
                    src='https://i.ibb.co/9TF3Xm3/tierra-ecologica.gif'
                     />
                </CardHeader>
                <CardBody>
                <Text  className='subtitles'>Sostenibilidad en Cada Paso</Text>
                  <Text>Con un enfoque en la sostenibilidad, buscamos reducir el impacto ambiental 
                    gestionando eficientemente el consumo eléctrico, reduciendo las emisiones de CO2 
                    y mejorando la calidad de vida urbana.</Text>
                 </CardBody>


                
                 
              </Card>
             

</SimpleGrid>
          </CardBody>


        </Card>   


        <Card  className='indexcard'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='filled'
          >
          <CardBody>
              <Text className='asubtitles'>Nuestra Contribución a los ODS</Text>
              <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>




              <Card className='interescard' marginTop='20px'>
                  <CardHeader>
                    <Image
                     maxW={{sm: '80px' }}
                    src='https://www.cooperacionespanola.es/wp-content/uploads/2023/09/recurso-7.png'
                     />
                </CardHeader>
                <CardBody>
                <Text  className='subtitles'> ODS 7</Text>
                <Text  className='subtitles'>Energía Asequible y No Contaminante</Text>
                  <Text>Ecoluz Urbana apuesta por la eficiencia energética mediante soluciones de iluminación inteligente, 
                    asegurando el acceso a energías asequibles y renovables en áreas urbanas.</Text>
                 </CardBody>
              </Card>


             

              <Card className='interescard' marginTop='20px'>
                  <CardHeader>
                    <Image
                     maxW={{sm: '80px' }}
                    src='https://www.cooperacionespanola.es/wp-content/uploads/2023/09/recurso-11-1536x1536.png'
                     />
                </CardHeader>
                <CardBody>
                <Text  className='subtitles'> ODS 11</Text>
                <Text  className='subtitles'>Ciudades y Comunidades Sostenibles </Text>
                  <Text>A través de la optimización energética, 
                    la reducción de costos operativos y la mejora de la iluminación pública, Ecoluz Urbana 
                    hace que las ciudades sean más sostenibles, seguras y habitables.</Text>
                 </CardBody>
              </Card>



              <Card className='interescard' marginTop='20px'>
                  <CardHeader>
                    <Image
                     maxW={{sm: '80px' }}
                    src='https://www.cooperacionespanola.es/wp-content/uploads/2023/09/recurso-13-1536x1536.png'
                     />
                </CardHeader>
                <CardBody>
                <Text  className='subtitles'> ODS 13</Text>
                <Text  className='subtitles'>Acción por el Clima</Text>
                  <Text>Con la optimización energética, la reducción de costos y la mejora en la iluminación,
                     Ecoluz Urbana revoluciona las ciudades, haciéndolas más sostenibles, 
                    seguras y cómodas para todos.</Text>
                 </CardBody>


                
                 
              </Card>
             

</SimpleGrid>
          </CardBody>
        </Card>   
  </body>
  <Footer/>
</div>
)

export default Home