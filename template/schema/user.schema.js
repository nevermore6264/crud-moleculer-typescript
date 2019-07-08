import Sequelize from 'sequelize'

export default {
  name: 'user',
  define: {
    id: {
      type: Sequelize.UUID, // Uses uuidv4 by default (default value is recommended)
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },

    username: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    },

    password: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    email: {
      type: Sequelize.STRING(200),
      allowNull: false,
      unique: true
    }
  },
  // Options from http://docs.sequelizejs.com/manual/tutorial/models-definition.html
  options: {}
}
