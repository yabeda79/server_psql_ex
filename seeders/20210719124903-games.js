'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Games', [{
      title: 'WoW TBCC',
      category: 'PC',
      description: 'MMORPG',
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
