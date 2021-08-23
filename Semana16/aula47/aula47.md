~~~ typescript
// 1)
// a) o raw retorna um array
// b)

app.get("/actors/:name", async(req: Request, res: Response) => {
   try{
      const result = await connection.raw(`SELECT * FROM Actor WHERE name LIKE "${req.params.name}"`)

      const actor = result[0]

      console.log(actor)

      res.end()

   }catch(error){
      console.log(error.message)
      res.status(500).send("Unexpected Error")
   }
})

// c)
app.get("/actors/gender/:gender", async(req: Request, res: Response) => {
   try{
      const result = await connection.raw(`SELECT COUNT(*) FROM Actor WHERE gender="${req.params.gender}"`)

      const countGender = result[0]

      console.log(countGender)
   }catch(error){
      res.status(500).send(error.message)
   }
})

// 02)
// a)
app.post("/actors/update/:id?/:salary?", async(req:Request, res: Response) => {
   try{
      await connection("Actor")
      .update({
         salary: Number(req.params.salary)
      })
      .where("id", req.params.id)

      res.status(200).send("Updated Successfully")
   }catch(error){
      console.log(error.message)
      res.status(500).send("Unexpected Error")
   }
})

//b)
app.delete("/actors/deleteActor/:id", async(req: Request, res: Response) => {
   try{
      await connection("Actor")
      .delete()
      .where("id", req.params.id)

      res.end()
   }catch(error){
      console.log(error.message)
      res.status(400).send("Unexpected Error")
   }
})

// c)
app.get("/actors/avg/:gender", async(req: Request, res: Response) => {
   try{
      const result = await connection("Actor")
      .avg("salary as average")
      .where("gender", req.params.gender)

      console.log(result[0].average)
      
   }catch(error){
      console.log(error.message)
      res.status(500).send("Unexpected Error")
   }
})

// 03)
// a)
app.get("/actor/:id", async(req: Request, res: Response) => {
   try{
      const id = req.params.id
      const result = await connection("Actor").where("id", id)
      const actor = result[0]

      res.status(200).send(actor)

   }catch(error){
      res.status(400).send({
         message: error.message
      })
   }
})

// b)
app.get("/actor", async(req: Request, res: Response) => {
   try{
      const gender = req.query.gender as string
      const result = await connection("Actor")
      .count()
      .where("gender", gender)

      res.status(200).send({
         quantity: result[0]
      })
   }catch(error){
      res.status(400).send({
         message: error.message
      })
   }
})

// 04)
app.post("/actor", async(req: Request, res: Response) => {
   try{
      await connection.raw(`INSERT INTO Actor (id, name, salary, birth_date, gender, cidade_natal, favorite_ice_cream_flavor, type )
      VALUES(
         ${Date.now().toString()},
         "${req.body.name}",
         "${req.body.salary}",
         "${req.body.birth_date}",
         "${req.body.gender}",
         "${req.body.cidade_natal}",
         "${req.body.favorite_ice_cream_flavor}",
         "${req.body.type}"
      );`)

      res.status(200).send("Successfully created")
   }catch(error){
      console.log(error.message)
      res.status(500).send("Unexpected Error")
   }
})

// a)
app.put("/actor", async(req: Request, res: Response) => {
   try{
      await connection.raw(`UPDATE Actor 
      SET salary= "${req.body.salary}"
      WHERE id = "${req.body.id}";`
      )

      res.status(200).send("Update Succesfully")
   }catch(error){
      console.log(error.message)
      res.status(500).send("Unexpected Error")
   }
})

~~~