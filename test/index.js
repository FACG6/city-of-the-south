/* eslint-disable global-require */
const { dbBuild, dbFakeData } = require('../server/database/config/db_build');

dbBuild()
  .then(dbFakeData)
  .then(() => require('./postSkill'))
  .then(() => require('./getMemberSkills'))
  .then(() => require('./getOffersRoute'))
  .then(() => require('./getMyApplication'))
  .then(() => require('./getMyApplications'))
  .then(() => require('./saved-offer-test'))
  .then(() => require('./getSavedOfferTest'))
  .then(() => require('./getOfferApplications'))
  .then(() => require('./getSkills'))
  .then(() => require('./getMyOffersTest'))
  .then(() => require('./addHiredMember'))
  .then(() => require('./getOfferTypeTest'))
  .then(() => require('./patchHiredMember'))
  .then(() => require('./getOfferId'))
  .then(() => require('./addApplication'))
  .then(() => require('./deleteSavedOffer'))
  .then(() => require('./deleteOffer'))
  .catch(err => console.log(err));
