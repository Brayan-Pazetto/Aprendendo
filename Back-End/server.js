import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json)

app.get('/usuarios', (req, res) =>{
    
    res.sendStatus(200).json(users)
})

app.post('/usuarios', async (req, res) =>{

    await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json({message:"Usuario cadastrado!"})
})

app.listen(3000)