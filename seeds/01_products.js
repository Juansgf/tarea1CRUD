
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'rowValue1', description: '34rvev', price: 222},
        {id: 2, name: 'rowValue2', description: 'cecre', price: 222},
        {id: 3, name: 'rowValue3', description: 'cerc', price: 222},
      ]);
    });
};
