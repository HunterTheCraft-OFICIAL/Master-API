import {
    MongoClient
} from 'mongodb';

export default async function conectarAoBanco(stringConexao) {
    let mongoCliente;

    try {
        mongoCliente = new MongoCliente(stringConexao);
        console.log('Conectando ao claster do Banco de Dados…');
        await mongoCliente.connect();
        console.log('Conectado ao MongoDB Atlas com Sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o Banco', erro);
        process.exit();
    }
}