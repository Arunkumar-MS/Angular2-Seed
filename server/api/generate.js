module.exports = function() {
  var faker = require('faker');
  var times = require('lodash/times');

  return {
    research: times(100, function(i) {
      return {
        id: i,
        name: faker.name.findName(),
        description: faker.lorem.sentences()
      }
    })
  };
};
