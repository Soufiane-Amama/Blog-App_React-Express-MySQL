import mysql from "mysql"

export const db = mysql.createConnection({
  host:"bkr5fsyiuwydjjw3lfvu-mysql.services.clever-cloud.com",
  user:"u306ulcayt9kezvl",
  password:"LkX1HgkS54clQeNg8q99",
  database:"bkr5fsyiuwydjjw3lfvu"
})

db.connect((err, resul)=>{
  if(err){
    throw err;
  }
    console.log(`Connected successfully to the database! ${resul}`);
});