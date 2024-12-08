import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Text } from '@chakra-ui/react';

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

const data = {
  labels: ['Centro', 'La placa', 'Linda vista', 'El mirador'], 
  datasets: [
    {
      label: 'Consumo Energético (kWh)',
      data: [120, 150, 110, 130], 
      backgroundColor: [
        'rgba(54, 162, 25, 0.6)', 
        'rgba(255, 159, 64, 0.6)', 
        'rgba(75, 192, 192, 0.6)', 
        'rgba(153, 102, 255, 0.6)'
      ], 
      borderColor: [
        'rgba(54, 162, 25, 1)', 
        'rgba(255, 159, 64, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(153, 102, 255, 1)'
      ], 
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, 
  plugins: {
    title: {
      display: true,
      text: 'Consumo Energético y Eléctrico diario',
    },
    tooltip: {
      enabled: true,
      mode: 'index',
    },
  },
};

const ConsumoDiario = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      p={6} 
      maxW="sm" 
      height="450px" 
    >
      <Text fontSize="xl" fontWeight="600" textAlign="center" mb={4}>
        Consumo diario
      </Text>
      <Text fontSize="x" fontWeight="400" textAlign="center" mb={4}>
        Noviembre
      </Text>
      <Box height="300px" width="100%"> 
        <Pie data={data} options={options} />
      </Box>
    </Box>
  );
};

export default ConsumoDiario;