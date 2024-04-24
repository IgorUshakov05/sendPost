const nodemailer = require("nodemailer");
// Import NodeMailer (after npm install)
let html = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <style>
    @font-face {
      font-family: 'Rockstar';
      src: url('.assets/RS-extralight.otf') format('truetype');
  }

        body {
            margin: 0;
            padding: 0;
            font-family: "Raleway", sans-serif;
        }
        .body {
            border-radius: 20px;
            width: 90%;
            border: 1px solid black;
            margin: auto;
            padding: 36px 54px;
            margin-top: 50px;
            box-sizing: border-box;
            box-shadow: 0 2px 17px -8px #5412e0;
        }
        h1 {
            font-weight: 600;
            font-size: 25px;
            margin-top: 40px;
            color: #000;
        }
        p {
            font-weight: 400;
            font-size: 16px;
            margin-top: 15px;
            line-height: 121%;
            color: #000;
        }
       
        .code {
            color: white;
            background: #4900e3;
            border-radius: 8px;
            padding: 15px 20px;
            font-family: 'Rockstar', sans-serif;
            letter-spacing: 3px;
            font-weight: 700;
            font-size: 27px;
        }
        .center {
            text-align: center;
            margin-left: 30px;
        }
        .ml {
            margin-left: 20px;
            margin-top: 20px;
        }
        .m23 {
            margin-top: 23px;
        }
        .twoBlocks {
            margin-top: 20px;
            display: flex;
            width: fit-content;
            align-items: center;
            justify-content: space-between;
        }
        .twoBlocks .block {
            display: flex;
            align-items: center;
        }
        .twoBlocks .block img {
            margin-left: 10px;
        }
        .twoBlocks .blocka {
            display: flex;
            flex-direction: column;
        }
        .blockBlock {
          display: block;
        
        }
        .blockBlock > * {
          display: block;

        }
        .p0 {
          padding: 0;
          margin-bottom: 0;
        }
        @media (max-width: 700px) {
          .code {
            width: 100%;
          }
          .ml {
            display: none;
          }
         }
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
<div class="body">
    <header>
        <img src="cid:logo" width="200" alt="Изображение">
    </header>
    <h1>Подтверждение регистрации</h1>
    <p>Здравствуйте, Ярослав</p>
    <p class="m23">Спасибо за регистрацию на нашем сайте. Для завершения процесса необходимо подтвердить вашу почту. Пожалуйста, введите следующий код на сайте:</p>
    <div class="twoBlocks">
        <div class="block code">217322</div>
        <div class="block ml">
            <img src="cid:row" height="40">    
        </div>
    </div>
    <div class="twoBlocks">
        <div>
            <p class="p0">С уважением,</p>
            <p class="p0">Команда поддержки WebHunt</p>
        </div>
        <div class="blocka center m23" >
            <a href="https://telegram.org/"><img width="35" src="cid:telegram"></a>
            <a style="margin-left: 30px;" href="https://vk.com"><img width="35" src="cid:vk"></a>
        </div>
    </div>
</div>
</body>
</html>
`
async function main() {
// Async function enables allows handling of promises with await

  // First, define send settings by creating a new transporter: 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: "igorushakov111@gmail.com", // Your email address
      pass: "*** *** ***", // Password (for gmail, your app password)
      // ⚠️ For better security, use environment variables set on the server for these values when deploying
    },
  });
  
  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: '"WebHunt" <igorushakov111@gmail.com>',
    to: "yaroslavushakov15@gmail.com",
    subject: "Подтвердите регистрацию аккаунта",
    html,
    attachments: [
      {
          filename: 'image.png',
          path: './assets/logo.png',
          cid: 'logo' // уникальный идентификатор для изображения
      },
      {
        filename: 'image2.png',
        path: './assets/row.png',
        cid: 'row' // уникальный идентификатор для изображения
    },
    {
      filename: 'image3.png',
      path: './assets/vk.png',
      cid: 'vk' // уникальный идентификатор для изображения
  },
  {
    filename: 'image4.png',
    path: './assets/telegram.png',
    cid: 'telegram' // уникальный идентификатор для изображения
}
  ]
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

main()
.catch(err => console.log(err));