const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { faker } = require('@faker-js/faker');
const User = require('./models/User');
const Place = require('./models/Place');

mongoose.connect('mongodb://localhost:27017/atypikhousebd', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('DB connected successfully');

  // Vérification et création d'utilisateurs si n'existent pas
  const users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: await bcrypt.hash('password123', 10), // Hachage du mot de passe
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: await bcrypt.hash('password123', 10), // Hachage du mot de passe
    }
  ];

  const createdUsers = [];
  for (const user of users) {
    let existingUser = await User.findOne({ email: user.email });
    if (!existingUser) {
      existingUser = await User.create(user);
    }
    createdUsers.push(existingUser);
  }

  // Tableau d'URLs d'images spécifiques aux maisons atypiques
  const atypicalHouseImages = [
    "https://i.pinimg.com/564x/2f/9d/29/2f9d290798bd716b136058ef8d369a75.jpg",
    "https://i.pinimg.com/564x/1d/1d/2d/1d1d2d8394cb58645713df2472e8af3f.jpg",
    "https://i.pinimg.com/564x/d2/e1/c4/d2e1c4a636c8b186b0712a7c5df961bf.jpg",
    // Ajoutez d'autres URLs d'images ici
  ];

  const placeTypes = ['Treehouse', 'Yurt', 'Boat', 'Cave', 'Igloo', 'Other'];

  // Génération de logements atypiques
  const places = [];
  for (let i = 0; i < 50; i++) {
    const owner = createdUsers[Math.floor(Math.random() * createdUsers.length)]._id;
    const title = faker.company.name();
    const address = faker.location.streetAddress();
    const photos = [
      atypicalHouseImages[Math.floor(Math.random() * atypicalHouseImages.length)],
      atypicalHouseImages[Math.floor(Math.random() * atypicalHouseImages.length)],
      atypicalHouseImages[Math.floor(Math.random() * atypicalHouseImages.length)],
    ];
    const description = faker.lorem.paragraph();
    const perks = ['WiFi', 'Heating', 'Kitchen'];
    const extraInfo = faker.lorem.sentence();
    const maxGuests = faker.number.int({ min: 1, max: 10 });
    const price = faker.number.int({ min: 50, max: 500 });
    const type = placeTypes[Math.floor(Math.random() * placeTypes.length)];
    const amenities = ['WiFi', 'Heating', 'Kitchen'];

    places.push({
      owner,
      title,
      address,
      photos,
      description,
      perks,
      extraInfo,
      maxGuests,
      price,
      type,
      amenities,
    });
  }

  await Place.insertMany(places);

  console.log('Data seeded successfully');
  mongoose.connection.close();
}).catch((err) => {
  console.error('DB connection failed:', err);
});
