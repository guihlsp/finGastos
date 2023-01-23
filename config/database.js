import mongoose from "mongoose";

mongoose.connect("mongodb+srv://guihlsp:g123456@fingastos.xx7loia.mongodb.net/test");

mongoose.set('strictQuery', true)
let db = mongoose.connection;

export default db;