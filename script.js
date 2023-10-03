const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados',
});

// Estabelece a conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao MySQL');
  
  // Agora você pode executar consultas SQL e interagir com o banco de dados aqui
});

// Não se esqueça de fechar a conexão quando terminar
connection.end();
