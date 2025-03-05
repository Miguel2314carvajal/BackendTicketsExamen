# Examen Final - Sistema de Gestión de Tickets

Este proyecto es un backend desarrollado en Node.js con Express.js para la gestión de tickets, técnicos y clientes. También se han realizado pruebas de carga utilizando JMeter.

## 📂 Estructura del Proyecto

El código fuente se encuentra en la carpeta `src`, la cual está organizada en los siguientes módulos:

### 📁 controllers
Contiene los controladores que manejan la lógica de negocio de las distintas entidades:
- `cliente_controller.js`: Controlador para gestionar clientes.
- `tecnico_controller.js`: Controlador para gestionar técnicos.
- `ticket_controller.js`: Controlador para gestionar tickets.
- `usuario_controller.js`: Controlador para gestionar autenticación de usuarios.

### 📁 helpers
- `crearJWT.js`: Contiene funciones para la generación de JSON Web Tokens (JWT).

### 📁 middlewares
- `autenticacion.js`: Middleware de autenticación para proteger rutas mediante JWT.

### 📁 models
Define los modelos de datos para la aplicación:
- `Cliente.js`: Modelo de clientes.
- `Tecnico.js`: Modelo de técnicos.
- `Ticket.js`: Modelo de tickets.
- `Usuario.js`: Modelo de usuarios.

### 📁 routers
Contiene las rutas de la API organizadas por entidad:
- `cliente_routes.js`
- `tecnico_routes.js`
- `ticket_routes.js`
- `usuario_routes.js`

### 📄 Otros archivos
- `database.js`: Configuración de la base de datos.
- `index.js`: Archivo principal que inicializa el servidor.
- `server.js`: Configuración del servidor.

### 📊 Pruebas de Carga

Las pruebas se realizon en Jmeter
