// api/mensagem.js
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Para permitir chamadas do frontend
  res.status(200).json({ mensagem: "Olá do backend na Vercel!" });
}