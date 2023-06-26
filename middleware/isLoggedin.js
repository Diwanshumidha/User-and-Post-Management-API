const jwt = require('jsonwebtoken');
const prisma = require("../prisma/index");

const isLoggedin = async(req,res,next) =>{
    try {
        const token = req.cookies.token; 
        if(!token) {
            res.send('Please Login')
            throw new Error('You are not logged in')
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = await prisma.user.findUnique({
            where:{
                id:decoded.userId
            }
        })
        next()
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = isLoggedin