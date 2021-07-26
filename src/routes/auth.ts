import { Router, Request, Response } from "express";
import User from '../../models/user';
import bcrypt from 'bcryptjs';
import { check, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

const authRouter = Router();

// /api/auth/register
authRouter.post(
    '/register',
    [ 
        check('email', 'Wrong email').isEmail(), 
        check('password', 'Password reqires at least 6 symbols').isLength( { min: 6 } ),
    ], 
    async (req: Request, res: Response)=>{
    try {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Icorrect registration data',
            });
        }
        
        const { username, email, password } = req.body;

        const candidate = await User.findOne( { where: { email: email } } );
        if(candidate){
            return res.status(400).json( { message: 'User with this email is already registred' } );
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        
        await User.create({
            username: username,
            email: email,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        res.status(201).json( { message: 'User created' } );

    } catch (e) {
        console.log(e);
        res.status(500).json( { message: 'Something went wrong, try again later' } );
    }
});

// /api/auth/login
authRouter.post(
    '/login',
    [
        check('email', 'Enter email').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists(),
    ], 
    async (req: Request, res: Response)=>{
        console.log(req.body);

        try {

            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Icorrect sign in  data',
                });
            }
            
           const { email, password } = req.body;

           const user: any= await User.findOne( { where: { email: email } } );

           if(!user) {
               return res.status(400).json( { message: 'User not found' } );
           }

           const isMatch = await bcrypt.compare(password, user.password);

           if(!isMatch){
               return res.status(400).json( { message: 'Wrong email or password' } );
           }

           const token = jwt.sign(
                { userId : user.username },
                'secret key',
                { expiresIn: '1h' },
           );

           res.json( { token, userId: user.username } );
    
        } catch (e) {
            console.log(e);
            res.status(500).json( { message: 'Something went wrong, try again later' } );
        }        
});

export default authRouter;
