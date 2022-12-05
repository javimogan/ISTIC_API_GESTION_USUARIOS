'use strict';
const max = 9999
const min = 0
const names = ["Raul", "Jaime","Diego", "Daniel","Maria", "Juana", "Pepito", "Paco"]


/**
 * Creación de un nuevo usuario.
 * Creación de un nuevo usuario en el sistema.
 *
 * user user The user to create. (optional)
 * returns User
 **/
exports.createUser = function(user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : Math.floor(Math.random() * (max - min + 1) + min),
  "name" : names[Math.floor(Math.random() * (names.length - 0))],
  "userId" : names[Math.floor(Math.random() * (names.length - 0))].toLowerCase()+"@ihelmet.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

