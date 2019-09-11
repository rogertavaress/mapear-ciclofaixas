import Sequelize, { Model } from "sequelize";

class Avenida extends Model {
  static init(sequelize) {
    super.init(
      {
        //Nome, extensão, possui ciclofaixa(booleano),extensão da ciclofaixa, porcentagem de ciclofaixa
        nome: Sequelize.STRING,
        extensao_avenida: Sequelize.FLOAT,
        ciclofaixa: Sequelize.BOOLEAN,
        extensao_ciclofaixa: Sequelize.FLOAT,
        extensao_ciclofaixa_porcentagem: Sequelize.FLOAT
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Avenida;
