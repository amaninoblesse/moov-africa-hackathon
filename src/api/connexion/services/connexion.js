'use strict';

/**
 * connexion service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::connexion.connexion');
