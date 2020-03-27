const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '3214', {
  host: 'localhost',
  dialect: 'postgres'
})

var conexao = sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida...')
  }).catch((error) => {
    console.log('Error')
  })

