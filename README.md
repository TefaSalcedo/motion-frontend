# 🚗 Monitoring Innovation - Frontend

Este repositorio contiene el **frontend** desarrollado para la prueba técnica de un sistema CRUD, parte de una simulación de sitio web para un concesionario. La aplicación permite mostrar, crear, editar y eliminar registros de una tabla con la información de vehículos aspirados, su marca y lugar de llegada.

> 🎯 **Objetivo de la prueba:**  
Crear una página web basada en el diseño de Figma, que se conecte a un backend propio mediante una API REST para implementar un sistema CRUD completo.

## 🖼️ Pantalla inicial
![alt text](screenshotHome.png)
## 🌐 Links importantes

- 🧾 Motion: [https://monitoringinnovation.com/](https://monitoringinnovation.com/)
- 📍 GPS Control: [https://gpscontrol.co/](https://gpscontrol.co/)

## 🎨 Estilo y diseño

- **Colores del sistema:**
  - Azul primario: `#00249C`
  - Azul claro: `#40CEE4`
  - Gris: `#C5C5C5`
  - Rojo claro: `#E280BE`
  - Rojo oscuro: `#C6007E`
- **Fuente:**  
  [Montserrat - Google Fonts](https://fonts.google.com/specimen/Montserrat)

## 📋 Descripción técnica

Este frontend fue desarrollado usando:

- **Vite**
- **React**
- **JavaScript**
- **CSS**
- **Axios**

Se conecta al backend mediante llamadas HTTP, y este a su vez se comunica con una base de datos **MongoDB**. Desde el frontend, los usuarios pueden interactuar con la tabla CRUD, siguiendo el diseño y animaciones propuestas en Figma.

## ✅ Requisitos previos

Antes de continuar, asegúrate de tener:

- Node.js y npm instalados en tu sistema.

> ❗ No se incluyen instrucciones sobre la instalación de Node.js o npm.

## ⚙️ Instalación del proyecto

Clona el repositorio y entra a la carpeta del proyecto:

```bash
git clone https://github.com/TefaSalcedo/motion-frontend.git
cd motion-frontend
```
Instala las dependencias necesarias:

```bash
npm install
```

## 🚀 Ejecución en local
Para iniciar el servidor de desarrollo en tu máquina local:

```bash
npm run dev
```
>Esto abrirá automáticamente la aplicación en tu navegador, normalmente en [localhost.](http://localhost:5173)


## 📦 Compilación para producción
Para generar la versión optimizada de producción:

```bash
npm run build
```
>Esto generará una carpeta /dist con los archivos estáticos listos para ser desplegados

## 🔗 Accede al backend
Puedes ver el backend haciendo clic en el siguiente enlace:

👉 Ver repositorio [Backend](https://github.com/TefaSalcedo/motion-backend)