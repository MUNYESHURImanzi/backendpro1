const createNames=(req,res)=>{
    const name=req.params.myName
res.send(name)
}
const deleteNames=(req,res)=>{
    const end=req.query.end;
    res.send(req.query)
    }
    const updateNames=(req,res)=>{
        const a=req.body
        const nbr=req.params.myNbr
        res.send([nbr,a])
        }

export{createNames,deleteNames,updateNames}