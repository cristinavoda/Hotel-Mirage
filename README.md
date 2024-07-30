# Hotel Mirage - Proyecto Fullstack

Este es un proyecto fullstack que pretende unir los datos de las reservas: tipo de habitación, fecha de llegada y salida, así como los datos del usuario. El proyecto utiliza tecnologías como Vue, HTML, Express, MySQL, Validator, y CSS.

## Descripción del Proyecto

El proyecto está compuesto de dos partes: el frontend, llamado `client`, y el backend, representado por el `server`.

### Frontend

El cliente tiene el archivo principal (padre) `App.vue`, y en el directorio `src` se encuentran los componentes, las vistas y el enrutador. El archivo `main.js` se utiliza para iniciar la aplicación, y `style.css` contiene los estilos globales.

- **Componentes**: Los componentes están ubicados en `src/components`.
- **Vistas**: Las vistas están ubicadas en `src/views`.
- **Enrutador**: La configuración de las rutas está en `src/router`.

A través de los componentes `User.vue` y `Rooms.vue`, se colectan los datos del usuario y de las habitaciones. Estos datos se envían al servidor mediante solicitudes HTTP `POST` utilizando Fetch en formato JSON. También se manejan solicitudes `DELETE` para eliminar datos.

### Backend

El servidor está construido con Express y maneja la lógica de la aplicación:

- **Modelos**: Los modelos definen la estructura de los datos en MySQL.
- **Controladores**: Los controladores manejan la lógica de negocio y validan los datos usando Validator antes de procesar las solicitudes.
- **Rutas**: Las rutas definen los endpoints de la API que son consumidos por el frontend.

## Tecnologías Utilizadas

- **Frontend**:
  - Vue.js
  - HTML
  - CSS

- **Backend**:
  - Express
  - MySQL
  - Validator
