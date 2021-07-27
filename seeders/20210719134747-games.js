'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Games', [{
      title: 'Overwatch',
      genre: 'Shooter',
      age: 14,
      PC: true,
      PS: true,
      Xbox: true,
      rating: 4,
      description: 'Some description',
      image: 'http://localhost:3000/images/overwatch.png',
      manufacturer: 'Blizzard ent.',
      price: '1729',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Games', null, {})
  }
};
