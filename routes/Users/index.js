const Routes = require('express').Router()
const checkLogin = require('../../helpers/checkLogin')
const checkrole = require('../../helpers/checkRole')
const { User, TransactionB2B, Currency, Request} = require('../../models')
const user = require(`../../helpers/checkLogin`)

Routes.get('/', checkLogin, (req, res) => {
    // res.send(req.session)
    User.findOne({
        where: {
            id: req.session.user.id
        },
        include: [{
            model:TransactionB2B
        }]
    })
        .then((user) => {
            res.render("./user/profile.ejs", { user:user })

        })
        .catch((err) => {
            console.log(err);
            
            res.redirect(`/login/?error= ${err}`)
        })
})

Routes.get("/buy",checkLogin, (req, res) => {
    Currency.findAll().then((result) => {
        // res.send(result)
        res.render(`./user/buy.ejs`, {
            data: result,
            
        })
    }).catch((err) => {
        res.send(err)
    });
})

Routes.get("/buy/:currencyId",checkLogin, (req, res) => {
    Currency.findOne({
        where: {
        id: req.params.currencyId
        }
    })
    .then((currency) => {
        res.render("./user/buyform.ejs", {currency})
    })
    .catch((err) => {
        res.redirect(`/buy?error=${err}`)
    })
})

Routes.post("/buy/:currencyId", (req, res) => {
    let insert = {
        CurrencyId: req.params.currencyId,
        UserId: req.session.user.id,
        amount: req.body.amount,
        qtyPrice:req.body.buyPrice
    }
    Request.create(insert)
        .then((data) => {
            res.redirect('/user/buy?info= success buy')
        })
        .catch((err) => {
            res.redirect(`/user/buy/${req.params.currencyId}?error= ${err}`)
        })
    // res.send(insert)
})

Routes.get('/request',checkLogin,checkrole, (req, res) => {

   Request.findAll({
       include:[{
           model:Currency
       },{model:User}]
   })
   .then(requests => {
    //    res.send(requests)
       res.render("request.ejs", {requests})
   })
   .catch(err => {
       res.redirect(`/?error=${err}`)

   })
})

Routes.get('/request/:requestId', (req, res) => {
    Request.findOne({where:{id:req.params.requestId}})
        .then((request) => {
            res.send(request)
        })
        .catch((err) => {
            res.redirect(`/?error= ${err}`)
        })
})



Routes.get('/logout',(req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.redirect(`/user?=error ${err}`)
        } else {
            res.redirect('/login?info= success logout')
        }
    })
})

Routes.get("/delete", (req, res) => {
    User.destroy({ where: { id: req.session.user.id } })
        .then((data) => {
            res.redirect('/login')
        })
        .catch((err) => {
            res.redirect(`/profile?error=${err}`)
        })
})

Routes.post("/email/:userId", (req, res) => {
    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gamecowo12345@gmail.com',
    pass: 'gamecowo54321'
  }
});

var mailOptions = {
  from: 'gamecowo12345@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Ivoice',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
})



module.exports = Routes