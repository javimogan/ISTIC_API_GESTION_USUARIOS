'use strict';


/**
 * Da de baja un dispositivo la aplicación.
 * Da de baja un dispositivo la aplicación.
 *
 * id Integer elimina los datos del dispositivo
 * returns Boolean
 **/
exports.deleteDevice = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Da de baja del usuario en la aplicación.
 * Da de baja del usuario en la aplicación.
 *
 * id Integer elimina los datos del usuario
 * returns Boolean
 **/
exports.deleteUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtiene los datos de un dispositivo específico.
 * Obtiene los datos de un dispositivo específico.
 *
 * id Integer id del dispositivo
 * returns Device
 **/
exports.getDevice = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 10120,
  "device_type" : "Helmet",
  "userId" : "contacto@ihelmet.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtiene los datos de un usuario específico.
 * Obtiene los datos de un usuario específico.
 *
 * id Integer id del usuario
 * returns User
 **/
exports.getUser = function(id) {
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


/**
 * Creación de un nuevo dispositivo.
 * Creación de un nuevo dispositivo en la aplicación.
 *
 * returns Device
 **/
exports.insertDevice = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 10120,
  "device_type" : "Helmet",
  "userId" : "contacto@ihelmet.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualiza los datos de un disposotivo.
 * Actualiza los datos de un dispositivo.
 *
 * id Integer actualiza los datos del usuario
 * returns Device
 **/
exports.putDevice = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 10120,
  "device_type" : "Helmet",
  "userId" : "contacto@ihelmet.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualiza los datos de un usuario.
 * Actualiza los datos de un usuario.
 *
 * id Integer actualiza los datos del usuario
 * returns User
 **/
exports.putUser = function(id) {
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

