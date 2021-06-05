const config = {
    development: {
        PORT: 5000,
        JWT_SECRET: 'navuhodonosor'
    }, 
    production: {
        PORT: 8000,
        JWT_SECRET: 'navuhodonosor'
    }
}

module.exports = config[process.env.NODE_ENV.trim()]