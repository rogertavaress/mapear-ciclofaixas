import Avenida from "../models/Avenida";
import { Sequelize } from "sequelize";

class AvenidaController {
  async store(req, res) {
    let { nome, extensao_avenida, extensao_ciclofaixa } = req.body;

    let ciclofaixa = false;
    let extensao_ciclofaixa_porcentagem = 0;

    if (extensao_ciclofaixa) {
      ciclofaixa = true;
      extensao_ciclofaixa_porcentagem = extensao_ciclofaixa / extensao_avenida;
    }

    if (!nome || !extensao_avenida) {
      return res.status(401).json({ message: "Falta de informação!" });
    }

    const av = await Avenida.create({
      nome,
      extensao_avenida,
      ciclofaixa,
      extensao_ciclofaixa,
      extensao_ciclofaixa_porcentagem
    });

    return res.json({
      message: "Avenida criada com sucesso!"
    });
  }

  async index(req, res) {
    const Op = Sequelize.Op;
    const { nome } = req.query;
    let avenidas = await Avenida.findAll();

    if (nome) {
      avenidas = await Avenida.findAll({
        where: {
          nome: { [Op.like]: `%${nome}%` }
        }
      });
    }

    return res.json(avenidas);
  }

  async update(req, res) {
    //Alterar uma unica avenida
    let { id, nome, extensao_avenida, extensao_ciclofaixa } = req.body;
    let ciclofaixa = false;
    let extensao_ciclofaixa_porcentagem = 0;

    let avenida = await Avenida.findByPk(id);

    if (extensao_ciclofaixa) {
      ciclofaixa = true;
      extensao_ciclofaixa_porcentagem = extensao_ciclofaixa / extensao_avenida;
    }

    if (!id || !avenida) {
      return res.status(400).json({ message: "Avenida não encontrada!" });
    } else {
      Avenida.update(
        {
          nome,
          extensao_avenida,
          extensao_ciclofaixa,
          ciclofaixa,
          extensao_ciclofaixa_porcentagem
        },
        {
          where: {
            id
          }
        }
      );
    }

    return res.json({ message: "Alterado com sucesso!" });
  }

  async delete(req, res) {
    // Remover a avenida.
    const { id } = req.body;
    const avenida = await Avenida.findByPk(id);

    if (id && avenida) {
      Avenida.destroy({
        where: {
          id
        }
      });
      return res.json({
        message: "A Avenida foi excluida com sucesso!"
      });
    } else {
      return res.json({
        message: "Nenhuma avenida foi Excluida!"
      });
    }
  }
}

export default new AvenidaController();
