const baseUrl = 'http://127.0.0.1';

module.exports = {
  frontUrl: `${baseUrl}:3000`,
  apiUrl: `${baseUrl}:3001`,
  
  secret: "feDZdkqzdqziodDJjdzqidqDN",
  api: {
    port: 3001
  },
  database: {
    database: "guessthegame",
    user: "guessthegame",
    password: "password",
    host: "127.0.0.1",
    port: 33060,
    dialectOptions: {}
  },
  logger: {
    console: {
      level: "debug"
    }
  },
  cloudinary: {
    apiKey: "499798991128642",
    apiSecret: "3LAASVE2lE-xtTDeHSBnPrr6auM",
    folder: "guess-the-game/dev",
    imagesUrlPrefix: "https://res.cloudinary.com/dviwcrzx9/image/upload"
  },
  mailgun: {
    url: "https://api.eu.mailgun.net",
    host: "mg.guess-the-game.com",
    password: "D4q65jmpElxcnazLFDq1465QDz",
    key: "a801ccfacb71c931f1698576d89bcab9-7efe8d73-2c3f891f"
  },
  recaptcha: {
    secret: "6LcQbmQUAAAAAPZ57qYJIVmYCBCBcy2fBY0m-PXi"
  }
}
