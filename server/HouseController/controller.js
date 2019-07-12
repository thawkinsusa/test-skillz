

module.exports ={

  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.create_house()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_houses()
          .then( houses => res.status(200).send( houses ) )
          .catch( err => {
            res.status(500).send({errorMessage: "houses had an error on retrieval"});
            console.log(err, 'broken getAll')
          } );
      },

    getOne: (req, res, next)=>{
        const dbInstance = req.app.get('dv');
        
        dbInstance.read_house()
        .then(house => res.status(200).send(house))
        .catch(err =>{
            res.status(500).send({errorMessage:'house had an error on retrieval'})
            console.log(err,'broken getone')
        });
    }
}