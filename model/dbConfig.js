import { Sequelize } from "sequelize";

const sequelize = new Sequelize("myuserapi","root","29022004@mummy",{
    host: 'localhost',
    dialect: "mysql"
})

sequelize.authenticate()
.then(()=>{
    console.log("Connected With Daabase Successfully.........");
})
.catch(err=>{
    console.log(err);
})

export default sequelize;