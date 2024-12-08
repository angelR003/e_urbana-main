import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { Box, Text } from '@chakra-ui/react';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const data = {
  labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
  datasets: [
    {
      label: 'Consumo (kWh)',
      data: [1400, 1350, 1450, 1500], 
      borderColor: '#2ec4b6',
      backgroundColor: 'rgba(46, 196, 182, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Consumo Semanal (kWh)',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ConsumoSemanal = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      p={6} 
      width="100%" 
      height="400px" 
    >
      <Text fontSize="xl" fontWeight="600" textAlign="center" mb={4}>
        Consumo Semanal
      </Text>
      <Line data={data} options={options} />
    </Box>
  );
};

export default ConsumoSemanal;