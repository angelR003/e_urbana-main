import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Card, CardBody, SimpleGrid } from '@chakra-ui/react';
import Resumenenergetico from '../graphics/cards_resumen/resumenenergetico';
import ResumenEconomico from '../graphics/cards_resumen/resumen_economico';
import Resumenluminarias from '../graphics/cards_resumen/resumen_luminarias';
import Actividadmensual from '../graphics/cards_resumen/actividad_mensual';
import Consumomensual from '../graphics/consumomensual';
import ConsumoDiario from '../graphics/cards_resumen/actividad_diaria';
import ConsumoSemanal from '../graphics/cards_resumen/actividad_semanal';

const estadisticas = () => (
  <div>
    <Navbar />
    <Card overflow="hidden" variant="filled" m={4}>
      <CardBody>
        {/* Tarjetas de resumen */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <Resumenenergetico />
          <ResumenEconomico />
          <Resumenluminarias />
          <Actividadmensual />
        </SimpleGrid>
      </CardBody>
    </Card>

    {/* Gráficas de consumo */}
    <Card className="cardsgrhapics" overflow="hidden" variant="filled" m={4}>
      <CardBody>
        {/* Aquí se juntan las gráficas en un solo SimpleGrid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Consumomensual /> {/* Gráfica de barras */}
          <ConsumoDiario /> {/* Gráfica de pastel */}
          <ConsumoSemanal /> {/* Gráfica de líneas */}
        </SimpleGrid>
      </CardBody>
    </Card>

    <Footer />
  </div>
);

export default estadisticas;
