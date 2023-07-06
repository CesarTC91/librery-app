import jwt from 'jsonwebtoken'

export default function loginHandler(req, res){
    const {email, password} = req.body

    //Validamos que el usuario y la contraseña sean validos
    if(email === 'admin@library.com' && password === 'adminLibrary123'){
      const token = jwt.sign({
        exp: Math.floor(Date.now() /1000) + 60 * 60 * 24 * 30,
        email: 'admin@library.com', 
        username: 'library'
      }, 'secret')
    }


    res.setHeader('Set-Cookie', '')
    return res.json('login route')
}

