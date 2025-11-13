# Backend III - Sistema de Mocking de Datos

Proyecto de Node.js + Express + MongoDB para generación y gestión de datos mock.

## 🚀 Instalación

```bash
npm install
```

## ⚙️ Configuración

1. Copia el archivo `.env` y configura tu URL de MongoDB:
```
MONGODB_URI=mongodb://localhost:27017/coder_backend_iii
PORT=3000
```

2. Asegúrate de tener MongoDB ejecutándose localmente o usa MongoDB Atlas.

## 🏃 Ejecución

### Modo desarrollo
```bash
npm run dev
```

### Modo producción
```bash
npm start
```

## 📡 Endpoints Disponibles

### Mocking

- **GET** `/api/mocks/mockingpets` - Genera mascotas mock
- **GET** `/api/mocks/mockingusers` - Genera 50 usuarios mock
- **POST** `/api/mocks/generateData` - Inserta datos en la BD
  ```json
  {
    "users": 10,
    "pets": 20
  }
  ```

### Consulta

- **GET** `/api/users` - Lista todos los usuarios
- **GET** `/api/pets` - Lista todas las mascotas

## 📁 Estructura del Proyecto

```
src/
├── app.js              # Punto de entrada
├── config/             # Configuración (DB, etc)
├── models/             # Modelos de Mongoose
├── routes/             # Rutas de la API
├── controllers/        # Lógica de controladores
├── services/           # Lógica de negocio
└── utils/              # Utilidades y helpers
```

## 🛠️ Tecnologías

- Node.js
- Express
- MongoDB + Mongoose
- Bcrypt (encriptación)
- Faker.js (generación de datos)
