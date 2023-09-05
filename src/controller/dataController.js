const getDataService = require('../service/getDataService');
const updateDataService = require('../service/updateDataService');


const validate = (id, tableName, status, error) => {
  if (!id) {
    return {
      message: 'Id não informado'
    };
  }

  if (!tableName) {
    return {
      message: 'Tabela não informada'
    };
  }
  if (status) {
    if (status.toUpperCase() != 'COMPLETED' && status.toUpperCase() != 'ERROR') {
      return {
        message: 'Status inválido'
      };
    }

    if (status.toUpperCase() == 'ERROR' && !error) {
      return {
        message: 'Erro não informado'
      };
    }

    if (status.toUpperCase() == 'COMPLETED' && error) {
      return {
        message: 'Erro não pode ser informado'
      };
    }
  }

  return null;
}

class dataController {
  async getById(req, res) {
    try {
      const { tableName, id } = req.body;

      const validation = validate(id, tableName);
      if (validation) {
        return res.status(400).json(validation);
      }

      const data = await getDataService.execute(tableName, id);
      if (!data || data == '') {
        return res.status(404).json({ message: 'Registro não encontrado' });
      }
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  async update(req, res) {
    try {
      const { tableName, status, error } = req.body;
      const { id } = req.params;

      const validation = validate(id, tableName, status, error);
      if (validation) {
        return res.status(400).json(validation);
      }

      let data = await getDataService.execute(tableName, id);
      if (!data || data == '') {
        return res.status(404).json({
          id: id,
          message: 'Registro não encontrado'
        });
      }

      const rows = await updateDataService.execute(tableName, id, status, error);

      if (rows.affectedRows == 0) {
        return res.status(404).json({
          id: id,
          message: 'Falha na atualização'
        });
      } else {
        data = await getDataService.execute(tableName, id);
      }

      res.status(200).json({
        message: 'Registro atualizado com sucesso',
        data: data
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}


module.exports = new dataController();