import { generateMockUsers, generateMockPets } from '../utils/mockGenerator.js';
import User from '../models/User.js';
import Pet from '../models/Pet.js';

export const getMockingPets = (req, res) => {
  try {
    const pets = generateMockPets(100);
    res.status(200).json({ status: 'success', payload: pets });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error al generar mascotas' });
  }
};

export const getMockingUsers = async (req, res) => {
  try {
    const users = await generateMockUsers(50);
    res.status(200).json({ status: 'success', payload: users });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error al generar usuarios' });
  }
};

export const generateData = async (req, res) => {
  try {
    const { users, pets } = req.body;

    if (!users || !pets) {
      return res.status(400).json({ 
        status: 'error', 
        message: 'Debe proporcionar los parámetros users y pets' 
      });
    }

    const generatedUsers = await generateMockUsers(Number(users));
    const generatedPets = generateMockPets(Number(pets));

    const insertedUsers = await User.insertMany(generatedUsers);
    const insertedPets = await Pet.insertMany(generatedPets);

    res.status(201).json({ 
      status: 'success', 
      message: 'Datos generados e insertados correctamente',
      payload: {
        usersInserted: insertedUsers.length,
        petsInserted: insertedPets.length
      }
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'Error al generar e insertar datos',
      error: error.message 
    });
  }
};
