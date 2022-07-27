// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')

export default function handler(req, res) {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.USERMAIL, 
      pass: process.env.PASSMAIL, 
    },
  })

  transporter.sendMail({
    from: `"Formulário site soter" <${process.env.USERMAIL}>`, 
    to: process.env.USERMAIL,
    replyTo: req.body.email, 
    subject: "Contato através do site", 
    text: req.body.message, 
    html: `<b>${req.body.name}</b><br/>${req.body.email}<br/>${req.body.message}`,
  }).then((response) => {res.send(response)})
  .catch(error => {res.send(error)})
}
