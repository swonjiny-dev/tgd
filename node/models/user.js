const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userId: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        comment: '사용자아이디'
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true,
        unique: true,
        comment: '이메일'
      },
      nickName: {
        type: Sequelize.STRING(15),
        allowNull: false,
        comment: '사용자애칭'
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: '비밀번호'
      },
      grade: {
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: 'M',
        comment: '등급 A-admin M-member G-manager'
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'tb_user',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};