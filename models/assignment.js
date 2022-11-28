'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Assignment.belongsTo(models.Student,{
        foreignKey: 'student_Id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Assignment.init({
    file: DataTypes.STRING,
    subject: DataTypes.STRING,
    score: DataTypes.FLOAT,
    itPasses: DataTypes.BOOLEAN,
    student_Id:{
      type: DataTypes.INTEGER,
        allowNull: false,
        field: 'studentId',
        onDelete: 'CASCADE',
        references:{
            model: 'students',
            key: 'id'
        }
    }
  }, {
    sequelize,
    modelName: 'Assignment',
    tableName: 'assignments',
  });
  return Assignment;
};