import mongoose  from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const conexaoMongo = async () => {

    try {

        console.log("conectando com o banco de dados...");
        
        mongoose.set('strictQuery', true)

        await mongoose.connect(process.env.MONGO_URL as string);
        
        console.log("conectado com o banco de dados com sucesso!");

    } catch (error){
        console.log("erro ao conectar com o banco de dados: ", error)
    }
}