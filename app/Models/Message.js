"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Message extends Model {
  student() {
    return this.belongsToMany("App/Models/Student").pivotModel(
      "App/Models/MessageStudent"
    );
  }
}

module.exports = Message;
