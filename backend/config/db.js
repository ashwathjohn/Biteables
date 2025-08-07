import mongoose from "mongoose";


export  const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ashwathjohn:AAK131415@cluster0.tobjbez.mongodb.net/biteables').then(()=>console.log("DB Connected"));
}