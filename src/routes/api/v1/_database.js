import mongoose from 'mongoose';
require('dotenv').config();

const { Schema } = mongoose;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const LinhaSchema = new Schema({
    codigo: String,
    nome: String,
    pontos: [{
        nome: String,
        sentido: String,
        horarios: [{
            tipo_dia: Number,
            hora_saida: String,
            observacao: String
        }]
    }]
})

const Linha = mongoose.model('linhas', LinhaSchema)

export const listaLinhas = async () => {
    return await Linha.find({},{"_id":0});
}