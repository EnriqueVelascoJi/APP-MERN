//Connect with DB
import mongoose from "mongoose";



const connectDB = async () => {

  try {
    await mongoose.set('strictQuery', false);
    const connection = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@learningcluster.xlfnt.mongodb.net/uptask?retryWrites=true&w=majority`,{
      useNewUrlParser: true,
      useUnifiedTopology: true
      }
    )

    const url = `${connection.connection.host} : ${connection.connection.port}`;
    console.log('Mongoose conectado en: ', url)
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDB;