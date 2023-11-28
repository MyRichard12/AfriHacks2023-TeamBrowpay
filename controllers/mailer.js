import nodemailer from "nodemailer";
import Mailgen from "mailgen";

let nodeConfig = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_AUTH_USER, // generated ethereal user
    pass: process.env.MAIL_AUTH_PASS, // generated ethereal password
  },
};

let transporter = nodemailer.createTransport(nodeConfig);

let MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Zamba",
    link: "https://zamba.com",
  },
});

/**
 * The mail sending endpoint
 * @param {
 *  {
 * "email": "example@mail.com",
 * "text": "texter",
 * "subject": "sampleSubject"
 * }
 * } req
 */

export const registerMail = async (req, res, next) => {
  const { email, user, text, subject, prompt } = req.body;

  let mailAction = "";
  //   create a kinda config from prompts and instructions
  switch (prompt?.type) {
    case "reg_verification":
      mailAction = {
        instruction: "Account Verification",
        button: {
          color: "#22BC66",
          text: prompt.text || "Click",
          link: prompt.link || "#",
        },
      };
    case "others":
      "";
    default:
      "";
  }

  var mail = {
    body: {
      greeting: user ? "Hi " + user?.split(" ")[0] : "Hello",
      action: mailAction,
      intro:
        text || "You are receiving this mail because you signed up on Zamba",
    },
    outro: "Need help, we will be happy to help",
  };

  var emailBody = MailGenerator.generate(mail);

  let message = {
    from: process.env.FROM_EMAIL,
    to: email,
    subject: subject || "Welcome to Zamba",
    html: emailBody,
  };

  // send mail
  transporter
    .sendMail(message)
    .then((result) => {
      res.status(200).json({ msg: "Email send successfully" });
    })
    .catch((error) => res.status(500).send({ error }));
};

// registration verification email
export const regVerificationEmail = async (req, res) => {
  const { email, user, text, subject, prompt } = req.body;

  let mailAction = "";
  //   create a kinda config from prompts and instructions
  switch (prompt?.type) {
    case "reg_verification":
      mailAction = {
        instruction: "Account Verification",
        button: {
          color: "#22BC66",
          text: prompt.text || "Click",
          link: prompt.link || "#",
        },
      };
      case "password_reset":
      mailAction = {
        instruction: "Reset Password",
        button: {
          color: "#22BC66",
          text: prompt.text || "Click",
          link: prompt.link || "#",
        },
      };
    case "others":
      "";
    default:
      "";
  }

  var mail = {
    body: {
      greeting: user ? "Hi " + user?.split(" ")[0] : "Hello",
      action: mailAction,
      intro:
        text || "You are receiving this mail because you signed up on Zamba",
    },
    outro: "Need help, we will be happy to help.",
  };

  var emailBody = MailGenerator.generate(mail);

  let message = {
    from: process.env.FROM_EMAIL,
    to: email,
    subject: subject || "Welcome to Zamba",
    html: emailBody,
  };

  // send mail
  transporter
    .sendMail(message)
    .then((result) => {
      res.status(200).json({ msg: "Email send successfully" });
    })
    .catch((error) => res.status(500).send({ error }));
};
