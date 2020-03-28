const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    // paginacao simples
    const { page = 1 } = request.query;

    const [count] = await connection('Incidents').count(); // pegar sempre a primeira posicao do array = []

    const Incidents = await connection('Incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5) // sempre pulando 5 registros
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.whatsapp',
        'ongs.email',
        'ongs.city',
        'ongs.uf'
      ])
      .orderBy('id', 'desc');

    // retornar total pelo header
    response.header('X-Total-Count', count['count(*)']);

    return response.json(Incidents);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    // desestruturacao para retornar direto o id do insert
    const [id] = await connection('Incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization; // auth via header

    const incedent = await connection('Incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incedent.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operação não permitida!' });
    }

    await connection('Incidents')
      .where('id', id)
      .delete();
    return response.status(204).send(); // resposta sem conteudo 204 e send para vazia
  }
};
