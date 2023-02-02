import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {

  try {

    const email = req.body.id.email

    await sendgrid.send({
      to: email, // Your email where you'll receive emails
      from: "chenwieugene.j@gmail.com", // your website email address here
      subject: `${req.body.id.name} claims an Id card`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from 237 Lost and Found, their email is: ✉️${req.body.id.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>An Id card you registered on 237 Lost and Found with name: ${req.body.id.name} has been claimed.
              </p>
              <br>
              <p>You can reach the person who claimed it through this line: ${req.body.phoneNumber}. Please try as much to reach the person and remeber to caucious</p>
              <br>
              </div>
              <img src="https://lost-and-found-8ef8a.web.app/images/logo.png" class="logo-image" style="height: 80px;width: 85px;border-radius: 5px;overflow: hidden; background-color: #fff">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Best regards<br>Chenwi Eugene<br>Software Developer</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://lost-and-found-8ef8a.web.app/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://my-portfolio-chenwi32.vercel.app/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">chenwiportfolio</a>
   
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
