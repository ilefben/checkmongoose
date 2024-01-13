const mongoose = require("mongoose");
let personData = new mongoose.schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: [string],
  },
});
const Person = mongoose.model("Person", personData);
module.exports = Person;
