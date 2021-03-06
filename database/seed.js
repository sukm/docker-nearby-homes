const faker = require('faker');
const homes = require('./models/Home');

const fakeHomes = [];
const rockvilleZipCodes = [20847, 20848, 20849, 20850, 20851, 20852, 20853, 20854, 20857, 20877];

const selectRandomElement = (array) => {
  const randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
};

const createRandomNum = () => Math.floor(Math.random() * 20) + 1;

const selectRandomPhoto = () => `https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_${createRandomNum()}.jpg`;

const createFakeHomes = function createFakeHomes() {
  for (let i = 0; i < 100; i += 1) {
    const home = {
      dateOfPosting: faker.date.between('2018-05-01', '2018-10-25'),
      status: faker.random.arrayElement([
        'FOR SALE',
        'FORECLOSURE',
        'AUCTION',
        'OFF MARKET',
        'FOR RENT',
        'SOLD',
      ]),
      numberOfLikes: faker.random.number(200),
      numberOfBathroom: faker.random.number({
        min: 0,
        max: 4,
      }),
      numberOfBedroom: faker.random.number({
        min: 0,
        max: 10,
      }),
      homeValue: faker.random.number({
        min: 100000,
        max: 4000000,
      }),
      sqft: faker.random.number({
        min: 300,
        max: 4000,
      }),
      streetName: faker.address.streetAddress(),
      cityName: 'Rockville',
      stateName: 'MD',
      zipCode: selectRandomElement(rockvilleZipCodes),
      homeImage: selectRandomPhoto(),
    };
    fakeHomes.push(home);
  }
};

const seed = () => homes.sync({ force: true }).then(() => {
  createFakeHomes();
  homes.bulkCreate(fakeHomes);
});

seed();
