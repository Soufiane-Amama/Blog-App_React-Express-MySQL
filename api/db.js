import mysql from "mysql"
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({ 
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

db.connect((err, resul)=>{
  if(err){
    throw err;
  }
    console.log(`Connected successfully to the database! ${resul}`);
});