import {products} from '../products.js'
import {Router} from 'express'
import { productExist } from '../middleware/middleware.js'

export const router = Router()

router.get('/products', (req, res) => {
    res.json(products)
})

router.get('/products/:id', productExist,(req, res) => {
        res.json(req.product)
})

router.post('/products', (req, res) => {
    try{
        const newProduct = {
            id: products.length + 1,
            name: req.body.name,
            price: req.body.price
            }
            products.push(newProduct)
            res.status(201).json(newProduct)
    }catch(e){
        res.status(500).json({message: 'Internal server error'})
    }
})

router.put('/products/:id',productExist,(req, res) => {
    try{
            req.product.name = req.body.name || req.product.name
            req.product.price = req.body.price || req.product.price
            res.json(req.product)
    }catch(e) {
        res.status(500).json({message: 'Internal server error'})
    }
})

router.delete('/products/:id',productExist, (req, res) => {
    try {
        const productsIndex = products.indexOf(req.product)
        products.splice(productsIndex, 1)
        res.json({message: 'Product deleted'})
    }catch(e) {
        res.status(500).json({message: 'Internal server error'})
    }
            })