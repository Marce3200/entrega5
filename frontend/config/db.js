const mongoose = require("mongoose")


const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("conectado a la base de datos")

    } catch (error) {
        console.log(`error al conectar con la base de datos: ${error}`);
        process.exit(1) // DETIENE LA APP POR COMPLETO

    }

}

module.exports = connectDB