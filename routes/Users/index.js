const Routes = require('express').Router()
const checkLogin = require('../../helpers/checkLogin')
const { User, TransactionB2B, Currency, CurrencyHistory } = require('../../models')



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



Routes.get("/buy", (req, res) => {
    CurrencyHistory.findAll({
        where: {
            name: `HKD`
        }
    }).then((result) => {
        // res.send(result)
        res.render(`./user/buy.ejs`, {
            data: result
        })
    }).catch((err) => {
        res.send(err)
    });

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