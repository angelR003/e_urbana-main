import React from "react";
import {
  CardHeader,
  Tabs,
  CardBody,
  TabPanels,
  TabPanel,
  Tab,
  Stack,
  TabList,
  Card,
  Alert,
} from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Luis from "../nosotros/individual/luis";
import Pam from "../nosotros/individual/pam";
import Amauri from "../nosotros/individual/amauri";
import Mota from "../nosotros/individual/mota";
import Descripcion from "../nosotros/descripcion_equipo";
import Descripcion_ecoluz from "../nosotros/descripcion_ecoluz";
import Timeline from "../nosotros/historia/timeline";
import Misionyvision from "../nosotros/misionyvision";

const Nosotros = () => (
  <body>
    <Navbar />
    <Stack>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList justifyContent="center">
          <Tab>Sobre el proyecto</Tab>
          <Tab>Sobre nosotros</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Card marginTop="20px">
              <CardHeader>
                <Descripcion_ecoluz />
                <Misionyvision />
              </CardHeader>
              <CardBody>
                <Timeline />
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card marginTop="20px">
              <CardHeader>
                <Descripcion />
              </CardHeader>
              <CardBody>
               
                
                  <Stack spacing={4}>  
                    <Luis />
                    <Pam />
                    <Amauri />
                    <Mota />
                  </Stack>
                
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
    <Footer />
  </body>
);

export default Nosotros;
