"use strict";
const Class = use("App/Models/Class");

class ClassController {
  async index({ request, response, view }) {
    const classes = await Class.query().with("students").fetch();
    return classes;
  }
  async store({ request, response }) {
    const { name, course } = request.only(["name", "course"]);
    const class = await Class.create({ name, course });
  }

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}
  async destroy({ params, request, response }) {}
}

module.exports = ClassController;
