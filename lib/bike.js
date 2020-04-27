/**
 *
 * @namespace faker.vehicle
 */
var Bike = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * vehicle
   *
   * @method faker.vehicle.vehicle
   */
  self.bike = function () {
    return fake('{{bike.manufacturer}} {{bike.model}}');
  };

  self.bike.schema = {
    "description": "Generates a random vehicle.",
    "sampleResults": ["TVS Explorer", "Honda Camry", "Suzuki Ranchero"]
  };

  /**
   * manufacturer
   *
   * @method faker.vehicle.manufacturer
   */
  self.manufacturer = function () {
    return faker.random.arrayElement(faker.definitions.bike.manufacturer);
  };

  self.manufacturer.schema = {
    "description": "Generates a manufacturer name.",
    "sampleResults": ["Honda", "Suzuki", "TVS"]
  };


  /**
   * model
   *
   * @method faker.vehicle.model
   */
  self.model = function () {
    return faker.random.arrayElement(faker.definitions.bike.model);
  };

  self.model.schema = {
    "description": "Generates a vehicle model.",
    "sampleResults": ["Explorer", "Camry", "Ranchero"]
  };

  

 

  /**
   * color
   *
   * @method faker.vehicle.color
   */
  self.color = function () {
    return fake('{{commerce.color}}');
  };

  self.color.schema = {
    "description": "Generates a color",
    "sampleResults": ["red", "white", "black"]
  };
};

module["exports"] = Bike;
