import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Text } from '@chakra-ui/react';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const data = {
  labels: ['S1', 'S2', 'S3', 'S4'], 
  datasets: [
    {
      label: 'Consumo Energético (kWh)',
      data: [120, 150, 110, 130], 
      backgroundColor: 'rgba(54, 162, 235, 0.6)', 
      borderColor: 'rgba(54, 162, 235, 1)', 
      borderWidth: 1,
      borderRadius: 10, 
    },
    {
      label: 'Consumo Eléctrico (kWh)',
      data: [100, 120, 95, 115], 
      backgroundColor: 'rgba(255, 159, 64, 0.6)', 
      borderColor: 'rgba(255, 159, 64, 1)', 
      borderWidth: 1,
      borderRadius: 10, 
    },
  ],
};


const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Consumo Energético y Eléctrico Mensual',
    },
    tooltip: {
      enabled: true,
      mode: 'index',
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const ConsumoMensual = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      p={6} // p={x} Padding interno 
    >
      <Text fontSize="xl" fontWeight="600" textAlign="center" mb={4}>
        Consumo Mensual
      </Text>
      <Text fontSize="x" fontWeight="400" textAlign="center" mb={4}>
        Noviembre
      </Text>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default ConsumoMensual;
