// @ts-check

const BaseModel = require('./BaseModel.cjs');

module.exports = class UserInfo extends BaseModel {
  static get tableName() {
    return 'usersinfo';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        first: { type: 'string' },
        last: { type: 'string' },
        user: { type: 'integer' },
      },
    };
  }
}
