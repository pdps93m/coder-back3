import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

export const generateMockUsers = async (count) => {
  const users = [];
  const roles = ['user', 'admin'];
  const hashedPassword = await bcrypt.hash('coder123', 10);

  for (let i = 0; i < count; i++) {
    const user = {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: roles[Math.floor(Math.random() * roles.length)],
      pets: []
    };
    users.push(user);
  }

  return users;
};

export const generateMockPets = (count) => {
  const pets = [];
  const species = ['perro', 'gato', 'conejo', 'hamster', 'pájaro'];
  const dogBreeds = ['Labrador', 'Golden Retriever', 'Bulldog', 'Beagle', 'Poodle'];
  const catBreeds = ['Siamés', 'Persa', 'Bengalí', 'Maine Coon', 'Angora'];
  const birdBreeds = ['Canario', 'Periquito', 'Loro', 'Cacatúa', 'Agapornis'];

  for (let i = 0; i < count; i++) {
    const selectedSpecies = species[Math.floor(Math.random() * species.length)];
    let breed;

    if (selectedSpecies === 'perro') {
      breed = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
    } else if (selectedSpecies === 'gato') {
      breed = catBreeds[Math.floor(Math.random() * catBreeds.length)];
    } else if (selectedSpecies === 'pájaro') {
      breed = birdBreeds[Math.floor(Math.random() * birdBreeds.length)];
    } else {
      breed = faker.animal.type();
    }

    const pet = {
      name: faker.person.firstName(),
      species: selectedSpecies,
      breed: breed,
      age: faker.number.int({ min: 1, max: 15 })
    };
    pets.push(pet);
  }

  return pets;
};
