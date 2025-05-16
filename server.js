require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'payment')));

// RUTA SEGURA PARA OBTENER EL CLIENT ID DE PAYPAL
app.get('/api/paypal-client-id', (req, res) => {
    res.json({ clientId: process.env.PAYPAL_CLIENT_ID });
});

// Servir `index.html` directamente desde la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
