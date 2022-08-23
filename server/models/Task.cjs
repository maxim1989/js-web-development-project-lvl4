// @ts-check

const BaseModel = require('./BaseModel.cjs');
const { Model } = require('objection');
const User = require('./User.cjs');
const Status = require('./Status.cjs');

module.exports = class Task extends BaseModel {
  static get tableName() {
    return 'task';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'statusid', 'creatorid'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1 },
        description: { type: 'string' },
        statusid: { type: 'integer' },
        creatorid: { type: 'integer' },
        executorid: { type: 'integer' },
      },
    };
  }

  static relationMappings = {
    status: {
      relation: Model.HasManyRelation,
      modelClass: Status,
      join: {
        from: 'task.statusid',
        to: 'statuses.id',
      }
    },
    creator: {
      relation: Model.HasManyRelation,
      modelClass: User,
      join: {
        from: 'task.creatorid',
        to: 'users.id',
      }
    },
    executor: {
      relation: Model.HasManyRelation,
      modelClass: User,
      join: {
        from: 'task.executorid',
        to: 'users.id',
      }
    }
  }
}
