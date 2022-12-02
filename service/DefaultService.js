'use strict';


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
  "id" : 102012,
  "name" : "Alberto",
  "email" : "albertito@gmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

