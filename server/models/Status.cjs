// @ts-check

const BaseModel = require('./BaseModel.cjs');

module.exports = class Status extends BaseModel {
  static get tableName() {
    return 'statuses';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1 },
      },
    };
  }
}
