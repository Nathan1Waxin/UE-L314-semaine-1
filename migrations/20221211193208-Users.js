'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
	    firstname: {
		    allowNull: false,
		    type: Sequelize.STRING
	    },
	    lastname: {
		    allowNull: false,
		    type: Sequelize.STRING
	    }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
