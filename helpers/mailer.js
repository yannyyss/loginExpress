const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({ //transporte
    service: 'Gmail',
    auth: {
        user: 'process.env.gmail',
        pass: 'process.env.gmailPass'
    }
});
 
exports.sendWelcomeMail = (user)=>{ //recibo ese usuario nuevo y le envío el correo. A quien, con la data
    const data = {
        from: '"My Awesome Project 👻" <yannyyss@gmail.com>',
        to: 'receiver@myawesomereceiver.com',
        subject: 'Awesome Subject', 
        text: `Hola ${user.username} Bienvenido a nuestra IronApp`,
        html: '<b>Awesome Message</b>'
    }
    transporter.sendMail(data)
        .then(info => console.log(info))
        .catch(error => console.log(error))
}