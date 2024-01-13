const mongoose = require("mongoose");
const PersonModel = require("./person");
const connectDB = require("./server");
const Person = require("./person");
connectDB();
const newPerson = new Person({
  name: "ali",
  age: 40,
  favoritefoods: ["icecream", "salade"],
});

const savePerson = async () => {
  try {
    const savedPerson = await newPerson.save();
    console.log("person is saved", savedPerson);
  } catch (error) {
    console.log("error", error);
  }
};
savePerson();

const createManyPeople = async () => {
  let arrayOfPeople = [
    {
      name: "ilef",
      age: 21,
      favoriteFoods: ["pizza", "pasta"],
    },
    {
      name: "alex",
      age: 8,
      favoriteFoods: ["sushi", "seafood"],
    },
    {
      name: "wiwi",
      age: 25,
      favoriteFoods: ["lasagna", "lablebi"],
    },
  ];
  try {
    const savedPeople = await Person.create(arrayOfPeople);
    console.log("people saved seccessfully :", savedPeople);
  } catch (error) {
    console.log("error saving", error);
  }
};
createManyPeople();
Person.find({
  name: "ali",
})
  .then((people) => {
    console.log("people with name ali is :", people);
  })
  .catch((err) => {
    console.log("error", err);
  });
const food = "pizza";
Person.findOne({
  favoriteFoods: food,
})
  .then((person) => {
    console.log("Person found with the favorite food", food + ":", person);
  })
  .catch((error) => {
    console.log("error", error);
  });

const id2 = "";
Person.findById(id2)
  .then((foundPerson) => {
    if (foundPerson) {
      console.log("person found", foundPerson);
    } else {
      console.log(" no person was found");
    }
  })
  .catch((error) => {
    console.log("error", error);
  });

Person.findById({ id })
  .then((foundPerson) => {
    if (foundPerson) {
      foundPerson.favoriteFoods.push("hamburger");
      foundPerson.markModified(favoriteFoods);
      foundPerson
        .save()
        .then((updatedPerson) => {
          console.log("person updated succesfully", updatedPerson);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      console.log("no person found");
    }
  })
  .catch((error) => {
    console.log("error", error);
  });

const personName = "ilef";
Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true })
  .then((updatePerson) => {
    if (updatePerson) {
      console.log("person updated", updatePerson);
    } else {
      console.log("error");
    }
  })
  .catch((error) => {
    console.log("error found", error);
  });
const idDlt = "";
Person.findByIdAndRemove(idDlt)
  .then((removedPerson) => {
    if (removedPerson) {
      console.log("person removed :");
    } else {
      console.log("error");
    }
  })
  .catch((error) => {
    console.log("error", error);
  });
const nom = "wiwi";
Person.remove(nom)
  .then((deleteMany) => {
    if (deleteMany) {
      console.log("delete person", deleteMany);
    } else {
      console.log("error");
    }
  })
  .catch((error) => {
    console.log("error", error);
  });
const fav = "burritos";
Person.find({ favoriteFoods: fav })
  .sort({ name })
  .limit(2)
  .select("-age")
  .exec((error, data) => {
    if (error) {
      done(error);
    }
    done(data);
  })
  .then();
