
import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function App() {
  const [executando, setExecutando] = useState(false);
  const [status, setStatus] = useState('Aguardando entrada...');

  const candles = {
    options: {
      chart: {
        type: 'candlestick',
        height: 350,
        toolbar: { show: false }
      },
      title: {
        text: 'SniperBin - EUR/USD',
        align: 'left',
        style: { color: '#fff' }
      },
      xaxis: { type: 'datetime' },
      yaxis: { tooltip: { enabled: true } },
      theme: { mode: 'dark' }
    },
    series: [{
      data: [
        { x: new Date().getTime() - 300000, y: [1.1234, 1.1240, 1.1225, 1.1237] },
        { x: new Date().getTime() - 240000, y: [1.1237, 1.1250, 1.1235, 1.1245] },
        { x: new Date().getTime() - 180000, y: [1.1245, 1.1260, 1.1240, 1.1250] },
        { x: new Date().getTime() - 120000, y: [1.1250, 1.1255, 1.1230, 1.1235] },
        { x: new Date().getTime() - 60000,  y: [1.1235, 1.1240, 1.1220, 1.1225] },
      ]
    }]
  };

  const executarBot = () => {
    setExecutando(true);
    setStatus('Analisando...');
    setTimeout(() => {
      setStatus('Entrada executada: CALL em EUR/USD');
      setExecutando(false);
    }, 3000);
  };

  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: '#fff', padding: 20 }}>
      <h1 style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 }}>SniperBin</h1>
      <Chart options={candles.options} series={candles.series} type="candlestick" height={350} />
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <button onClick={executarBot} disabled={executando} style={{
          backgroundColor: '#10b981',
          padding: '15px 30px',
          fontSize: 18,
          fontWeight: 'bold',
          borderRadius: 10,
          border: 'none',
          color: '#fff',
          cursor: 'pointer'
        }}>
          {executando ? 'Executando...' : 'Apertar o Play'}
        </button>
        <p style={{ marginTop: 20, fontSize: 20, color: '#6ee7b7' }}>{status}</p>
      </div>
    </div>
  );
}
