import { Request, Response } from 'express';
// Importando os types Request e o Response do express
// Deve-se importar tb os models, e os helpers (se tiver) 
import User from '../models/User';
// ÁREA PARA CRIAR OS CONTROLLERS, como o exemplo abaixo

export const home = async (req: Request, res: Response) => {


    let usuarios = await User.find({});

    res.render('pages/home', {usuarios});
};

export const createUser = async (req: Request, res: Response) => {

    let {email, age, interests, firstName, lastName} = req.body as any;

    interests.split(',');

    if(email && age && firstName){
        let newUser = new User();
        newUser.email = email;
        newUser.age = parseInt(age);
        newUser.interests = interests;
        newUser.name = { firstName: firstName, lastName: lastName };
        let savedUser = await newUser.save();
        console.log("newUser: ", savedUser);
        
    } else {
        console.log("erro ao cadastrar usuário");
    }

    res.redirect('/');
};

//