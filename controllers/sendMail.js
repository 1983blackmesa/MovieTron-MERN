const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

const { SENDER_EMAIL_ADDRESS } = process.env

// send mail
const sendEmail = (to, url, txt) => {
  //TODO change from email to sender email address
  //TODO change html to sengrid template
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: to, // Change to your recipient
    from: 'Masis23@gmail.com', // Change to your verified sender
    subject: 'WebOpsIT',
    text: `You're almost set to start using WebOpsIT. Just click the url below to validate your email address. ${url}`,
    html: `
    <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
    <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to WebOpsIT.</h2>
    <p>Congratulations! You're almost set to start using WebOpsIT.
        Just click the button below to validate your email address.
    </p>
    
    <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>

    <p>If the button doesn't work for any reason, you can also click on the link below:</p>

    <div>${url}</div>
    </div>
`
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      return true
    })
    .catch(error => {
      console.error(error)
    })
}
module.exports = sendEmail



// const nodemailer = require('nodemailer')
// const {google} = require('googleapis')
// const {OAuth2} = google.auth;
// const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'

// const {
//     MAILING_SERVICE_CLIENT_ID,
//     MAILING_SERVICE_CLIENT_SECRET,
//     MAILING_SERVICE_REFRESH_TOKEN,
//     SENDER_EMAIL_ADDRESS
// } = process.env

// const oauth2Client = new OAuth2(
//     MAILING_SERVICE_CLIENT_ID,
//     MAILING_SERVICE_CLIENT_SECRET,
//     MAILING_SERVICE_REFRESH_TOKEN,
//     OAUTH_PLAYGROUND
// )

// // send mail
// const sendEmail = (to, url, txt) => {
//     oauth2Client.setCredentials({
//         refresh_token: MAILING_SERVICE_REFRESH_TOKEN
//     })

//     const accessToken = oauth2Client.getAccessToken()
//     const smtpTransport = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             type: 'OAuth2',
//             user: SENDER_EMAIL_ADDRESS,
//             clientId: MAILING_SERVICE_CLIENT_ID,
//             clientSecret: MAILING_SERVICE_CLIENT_SECRET,
//             refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
//             accessToken
//         }
//     })

//     const mailOptions = {
//         from: SENDER_EMAIL_ADDRESS,
//         to: to,
//         subject: "WebOpsIT",
//         html: `
//             <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
//             <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to WebOpsIT.</h2>
//             <p>Congratulations! You're almost set to start using WebOpsIT.
//                 Just click the button below to validate your email address.
//             </p>
            
//             <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
        
//             <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
//             <div>${url}</div>
//             </div>
//         `
//     }

//     smtpTransport.sendMail(mailOptions, (err, infor) => {
//         if(err) return err;
//         return infor
//     })

// }
// module.exports = sendEmail