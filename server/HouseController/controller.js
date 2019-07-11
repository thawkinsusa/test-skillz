

module.exports ={

    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_houses()
          .then( houses => res.status(200).send( houses ) )
          .catch( err => {
            res.status(500).send({errorMessage: "houses had an error on retrieval"});
            console.log(err)
          } );
      },

    getOne: (req, res, next)=>{
        const dbInstance = req.app.get('dv');
        
        dbInstance.read_house()
        .then(house => res.status(200).send(house))
        .catch(err =>{
            res.status(500).send({error:'house had an error on retrieval'})
        });
    }
}