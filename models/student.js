'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.School, { foreignKey: 'school_Id' })
      Student.hasMany(models.Assignment, { foreignKey: 'student_Id' })
    }
  }
  Student.init({
    studentName: DataTypes.STRING,
    grade: DataTypes.INTEGER,
    school_Id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students'
  });
  return Student;
};