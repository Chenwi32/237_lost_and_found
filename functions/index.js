const functions = require("firebase-functions");

const admin = require("firebase-admin");

const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

admin.initializeApp();

// Transpoter to use Gmail to send emails

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chenwieugene.j@gmail.com",
    pass: "chenwi5132",
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // we'll get the destination email from query string

    const destination = req.query.dest;

    const mailOptions = {
      from: "chenwieugene.j@gmail.com",
      to: destination,
      subject: "Found Id card claimed", // email subject
      html: `<h1 style="font-size: 16px;">Someone is claiming a lost Id card you registered on <a href='https://lost-and-found-8ef8a.web.app/'> 237 lost and found </a></h1>
                
            `,
    };

    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Sent");
    });
  });
});

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
