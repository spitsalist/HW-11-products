import {products} from '../products.js'   
   const findProductById = (id) => {
    return products.find(product => product.id === parseInt(id))
}

export const productExist = (req, res, next) => {
    const {id} = req.params
    const product = findProductById(id)

    if(!product) {
        return res.status(404).json({message: 'Product not found'})
    }
    req.product = product
    next()
}