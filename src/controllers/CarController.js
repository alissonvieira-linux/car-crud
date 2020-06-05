const database = require('../database/connection');

module.exports = {
  async index(request, response){
    const cars = await database('cars').select('*');

    return response.json(cars);
  },

  async create(request, response){
    const { marca, modelo, ano, valor } = request.body;

    await database('cars').insert({
      marca,
      modelo,
      ano,
      valor
    });

    return response.json({ modelo });
  },

  async delete(request, response){
    const { id } = request.params;

    await database('cars').where('id', id).delete();
    return response.status(204).send();
  },

  async update(request, response){
    const { id } = request.params;
    const { marca, modelo, ano, valor } = request.body;
    
    await database('cars').where('id', id).update({
      marca,
      modelo,
      ano,
      valor
    });

    const updated = await database('cars').where('id', id).select('*');

    return response.json(updated);
  }
};