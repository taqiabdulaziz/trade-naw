const Routes = require('express').Router()
const {User} = require('../../models')
const bcrypt = require('bcryptjs')

Routes.get('/', (req, res) => {
    let info = req.query.info
    let err = req.query.error
    
    res.render("login.ejs", {info, err})
})

Routes.post('/', (req,res) => {
    // res.send(req.body)
    User.findOne({where:{
        email: req.body.email
    }})
    .then((data) =>{
        if (!data) {
            throw new Error("email not found")
        } else if (data.status === "unactive") {
            throw new Error('please contact our Admin to reactive your account')
        } else {
           let check =  bcrypt.compareSync(req.body.password, data.password);
            if (check) {
                req.session.user = {
                    id: data.id,
                    email: data.email,
                    role: data.role,
                    name: data.firstName
                } 
                // console.log(req.session)
            res.redirect('/')
            } else {
                throw new Error('wrong password')
            }
        }
    })
    .catch((err) =>{
        res.redirect(`/login?error=${err}`)
    })
})




module.exports = Routes