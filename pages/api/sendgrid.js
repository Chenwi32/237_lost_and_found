

import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {

  try {

    const email = req.body.id.email

    await sendgrid.send({
      to: email, // Your email where you'll receive emails
      from: "chenwieugene.j@gmail.com", // your website email address here
      subject: `The ID card with the name ${req.body.id.name} has been claimed`,
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
              <p>You can reach the person who claimed it through this line: ${req.body.phoneNumber}. Please try as much to reach the person and remeber to cautious</p>
              <br>
              </div>
              <a href="https://237-lost-and-found.vercel.app/"><img src="https://z-p3-scontent.fnsi2-1.fna.fbcdn.net/v/t39.30808-6/293400038_102526035868350_6781918881315674677_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEGQMOkMRLdGsTjJSC49BOM4Kfn0C8rnV7gp-fQLyudXkgYIhGsTK7ECoYzYzEtW5ekacG6wUqd-mW4GVMfQSUk&_nc_ohc=tru05rHKQkEAX-jbOB_&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi2-1.fna&oh=00_AfCodh_jfs4CFCsnjfspsQ8OjyFgKHDQNHMn3si7pQ6dEQ&oe=63DFF21E" class="logo-image" style="height: 80px;width: 100px;border-radius: 5px;overflow: hidden; background-color: #fff"></a>
              
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Best regards<br>Chenwi Eugene<br>Software Developer</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://237-lost-and-found.vercel.app/" style="text-decoration: none;margin: 8px;color: #1B2D45;">237 Lost and Found</a>
                <a href="https://my-portfolio-chenwi32.vercel.app/" style="text-decoration: none;margin: 8px;color: #1B2D45;">chenwiportfolio</a>
   
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" })

  
}

export default sendEmail;
