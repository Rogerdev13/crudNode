
const controller = {};


controller.list = (req , res) =>{
    req.getConnection((err , connection) =>{
        connection.query('SELECT * FROM users' , (err , users) =>{
            if(err){
                res.json(err);
            }
            res.render('users' , {
                data:users
            })
        });
    })

};

controller.save = (req ,res) =>{
    const data = req.body;
    const {name , adress , number } = data

    req.getConnection((err , conn) =>{
        conn.query(`INSERT INTO users values(null , '${name}' , '${adress}' , '${number}')` , (err , row)=>{
            res.redirect('/')
        })
    })
}

controller.delete = ((req , res)=>{
    const {id} = req.params
    req.getConnection((err  , conn)=>{
        if(!err){
            conn.query('DELETE FROM users WHERE id = ?' , id , (err, user)=>{
                res.redirect('/')
            })
        }
    })
})



module.exports = controller