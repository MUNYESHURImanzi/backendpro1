const createUsers=(req,res)=>{
res.send("controller to create user")
}
const readUsers=(req,res)=>{
    res.send("controler to read users")
}
export {createUsers,readUsers}