const nodemailer = require('nodemailer');
const hbs = require("hbs");
const fs = require("fs");

const transporter = nodemailer.createTransport({ //transporte
    service: 'Gmail',
    auth: {
        user: 'process.env.gmail',
        pass: 'process.env.gmailPass'
    }
});

const welcomeCompile = hbs.compile(
  fs.readFileSync((__dirname, "./views/welcome.hbs"), "utf8")
); //tiene la capacidad de compilar variables. 

exports.sendTemplate = (user) => { //recibo ese usuario nuevo y le envío el correo. A quien, con la data
    const data = {
        from: '"My Awesome Project 👻" <imdrbrief@gmail.com>',
        to: user.email,
        subject: 'Awesome Subject',
        //text: `Hola ${user.username} Bienvenido a nuestra IronApp`,
        html: welcomeCompile(user)
    }
    transporter.sendMail(data)
        .then(info => console.log(info))
        .catch(error => console.log(error))
};
