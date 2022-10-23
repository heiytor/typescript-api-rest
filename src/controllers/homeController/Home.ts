import { Request, Response } from "express";
import { prismaModel } from "../../prisma/prismaModel";
import { IHomeController } from "./IHome";

class HomeController implements IHomeController {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await prismaModel.user.findMany();

    return res.status(200).json({
      mensagem: ['Index retornado.'],
      dados: users
    });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email } = req.body;

    if (!firstName || !email) {
      return res.status(406).json({
        errors: ['Email ou primeiro nome não enviados.'] 
      })
    };

    const newUser = await prismaModel.user.create({
      data: { firstName, lastName, email } 
    })

    return res.status(201).json({
      mensagem: [`Usuário ${newUser.id} criado.`],
      dados: newUser
    });
  }
  

  async update(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email } = req.body;
    const { id } = req.params;

    const updatedUser = await prismaModel.user.findUnique({ where: { id: +id } })
    if(!updatedUser) {
      return res.status(404).json({
        errors: ['Usuário não encontrado no banco de dados.']
      })
    }

    if (firstName) {
      await prismaModel.user.update({
        where: { id: +id },
        data: {firstName}
      })
    }

    if (lastName) {
      await prismaModel.user.update({
        where: { id: +id },
        data: {lastName}
      })
    }

    if (email) {
      await prismaModel.user.update({
        where: { id: +id },
        data: {email}
      })
    }

    return res.status(200).json({
      mensagem: [`Usuário ${id} editado.`],
      dados: updatedUser
    });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const user = await prismaModel.user.findUnique({ where: { id: +id } })
    if(!user) {
      return res.status(404).json({
        errors: ['Usuário não encontrado no banco de dados.']
      })
    }

    const deletedUser = await prismaModel.user.delete({ where: { id: +id } })
    return res.status(202).json({
      msg: [`Usuário ${id} deletado.`],
      dados: deletedUser
    });
  }
}

export { HomeController };