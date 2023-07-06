import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'


export default function loginHandler(req, res){
    const {email, password} = req.body

    //Validamos que el usuario y la contraseña sean validos
    if(email === 'admin@library.com' && password === 'adminLibrary123'){
      const token = jwt.sign({
        exp: Math.floor(Date.now() /1000) + 60 * 60 * 24 * 30,
        email: 'admin@library.com', 
        username: 'library'
      }, 'secret')

      const serialized = serialize('myTokenName', token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
        maxAge: 1000 * 60 * 60 * 24 * 30, 
        path: '/'
      })
  
      res.setHeader('Set-Cookie', serialized)
      return res.json('Login Successfully')
  }

  return res.status(401).json({error}, 'invalid email or password')

}


   

