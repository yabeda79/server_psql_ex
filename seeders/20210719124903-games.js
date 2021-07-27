'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Games', [{
      title: 'WoW TBCC',
      genre: 'MMORPG',
      age: 16,
      PC: true,
      rating: 5,
      description: 'Some description',
      image: 'http://localhost:3000/images/wow-tbc.jpg',
      manufacturer: 'Blizzard ent.',
      price: '649',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Games', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
