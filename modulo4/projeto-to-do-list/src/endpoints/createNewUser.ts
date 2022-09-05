export default async (req: Request, res: Response) => {
  try {
    await connection("to_do_list_users").update({
      salary: req.body.salary
    }).where({
      id: req.params.id
    })

    res.send("salário atualizado!")
  } catch (error) {
    res
      .status(500)
      .send("Um erro inesperado aconteceu");
  }
})