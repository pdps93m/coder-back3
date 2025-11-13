# Backend III - Entrega 1

Proyecto de Node.js con Express y MongoDB para generacion de datos mock.

## Instalacion

```bash
npm install
```

## Configuracion

Crear archivo .env con:
```
MONGODB_URI=mongodb://localhost:27017/coder_backend_iii
PORT=3000
```

## Ejecucion

```bash
npm start
```

## Endpoints

### Mocking
- GET /api/mocks/mockingpets
- GET /api/mocks/mockingusers
- POST /api/mocks/generateData

### Consulta
- GET /api/users
- GET /api/pets

## Tecnologias

Node.js, Express, MongoDB, Mongoose, Bcrypt, Faker
