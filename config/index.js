module.exports = {
  frontUrl: process.env.FRONT_URL || 'http://localhost:3000',

  secret: process.env.API_SECRET || 'change-me',
  api: {
    port: process.env.API_PORT || 3001,
  },
  database: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    socketPath: process.env.DB_SOCKET_PATH,
  },
  logger: {
    console: {
      level: "debug"
    }
  },
  cloudinary: {
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: process.env.CLOUDINARY_FOLDER,
    imagesUrlPrefix: process.env.CLOUDINARY_URL_PREFIX,
  },
  imageProxy: {
    enable: process.env.IMGP_ENABLE || false,
    url: process.env.IMGP_URL,
  },
  mailgun: {
    url: process.env.MAILGUN_URL,
    host: process.env.MAILGUN_HOST,
    password: process.env.MAILGUN_PASSWORD,
    key: process.env.MAILGUN_KEY
  },
  recaptcha: {
    secret: process.env.RECAPTCHA_SECRET
  }
}
