import User from '../models/User.js';
import Pet from '../models/Pet.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('pets');
    res.status(200).json({ 
      status: 'success', 
      results: users.length,
      payload: users 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'Error al obtener usuarios',
      error: error.message 
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate('pets');
    
    if (!user) {
      return res.status(404).json({ 
        status: 'error', 
        message: 'Usuario no encontrado' 
      });
    }
    
    res.status(200).json({ 
      status: 'success', 
      payload: user 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'Error al obtener usuario',
      error: error.message 
    });
  }
};

export const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('owner');
    res.status(200).json({ 
      status: 'success', 
      results: pets.length,
      payload: pets 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'Error al obtener mascotas',
      error: error.message 
    });
  }
};

export const getPetById = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id).populate('owner');
    
    if (!pet) {
      return res.status(404).json({ 
        status: 'error', 
        message: 'Mascota no encontrada' 
      });
    }
    
    res.status(200).json({ 
      status: 'success', 
      payload: pet 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'Error al obtener mascota',
      error: error.message 
    });
  }
};
