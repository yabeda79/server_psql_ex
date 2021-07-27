import { Router, Request, Response } from "express";
import User from '../../models/user';
import bcrypt from 'bcryptjs';
import { check, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

const profRouter = Router();

// api/profile
profRouter.post(
    '/info',
    async (req: Request, res: Response)=>{
        try {
            
            const { username } = req.body;

            const user: any= await User.findOne( { where: { username: username } } );

            if(!user) {
                return res.status(400).json( { message: 'User not found' } );
            }

            res.json( 
            { 
                userId: user.username, 
                email: user.email, 
                profileImg: user.profileImg, 
                description: user.description,
            });

        } catch (e) {
            console.log(e);
            res.status(500).json( { message: 'Something went wrong, try again later' } );
        }
    },
);
// api/profile/save
profRouter.post(
    '/save',
    async (req: Request, res: Response)=>{
        try {
            
            const { email, username, description } = req.body;

            const user: any= await User.findOne( { where: { email: email } } );

            if(!user) {
                return res.status(400).json( { message: 'User not found' } );
            }

            await User.update({username: username, description: description},{ where : {email: email}})

            // console.log('1',updUser.description)

            const updUser: any = await User.findOne({where: {email: email}})

            if(!updUser) {
                return res.status(400).json( { message: 'updUser not found' } );
            }

            console.log('1',updUser.description)

            res.json(
                {
                    userId: updUser.username, 
                    email: updUser.email, 
                    profileImg: updUser.profileImg, 
                    description: updUser.description,
                }
            )

        } catch (e) {
            console.log(e);
            res.status(500).json( { message: 'Something went wrong, try again later' } );
        }
    },
);

profRouter.post(
    '/changepassword',
    [
        check('newpassword', 'Enter newpassword').exists(),
        check('password', 'Enter password').exists(),
    ],
    async (req: Request, res: Response)=>{
        try {

            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Icorrect data',
                });
            }

            const { email, password, newpassword } = req.body;

            const user: any= await User.findOne( { where: { email: email } } );

            if(!user) {
                return res.status(400).json( { message: 'User not found' } );
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
               return res.status(400).json( { message: 'Wrong password' } );
            }

            const hashedPassword = await bcrypt.hash(newpassword, 12);

            await User.update({password: hashedPassword},{ where : {email: email}})

            res.status(201).json( { message: 'Password changed' } );

        } catch (e) {
            console.log(e);
            res.status(500).json( { message: 'Something went wrong, try again later' } );
        }
    },
);

export default profRouter
