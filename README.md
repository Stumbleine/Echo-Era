# Echo Era

Echo Era es una aplicación que te permite explorar tus artistas, canciones y playlists favoritas utilizando la API de Spotify.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)
- Una cuenta de [Spotify for Developers](https://developer.spotify.com/)

## Configuración del Proyecto

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/echo-era.git
cd echo-era
```

### 2. Instalar Dependencias

```bash
npm install
# o
yarn install
```

### 3. Configurar el Archivo .env

```bash
VITE_SPOTIFY_CLIENT_ID=tu_client_id_aqui
VITE_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
```

#### Nota:

VITE_SPOTIFY_CLIENT_ID: Obtén estas credenciales desde el Dashboard de Spotify for Developers.

VITE_SPOTIFY_REDIRECT_URI: Asegúrate de que esta URL esté registrada en la configuración de tu aplicación en el Dashboard de Spotify.

# Ejecutar el Proyecto

### 1. Modo de Desarrollo

```bash
npm run dev
# o
yarn dev
```

Esto iniciará un servidor de desarrollo en http://localhost:3000.

### 2. Modo de Producción

```bash
npm run build
# o
yarn build
```

Luego, sirve los archivos generados usando un servidor estático como serve:

```bash
npm install -g serve
serve -s dist
```

# Aspectos Importantes

### 1. Cuentas de Prueba

Solo las cuentas de Spotify agregadas como usuarios de prueba en el Dashboard de Spotify for Developers pueden autenticarse en la aplicación. Asegúrate de agregar las cuentas de prueba en la sección Users and Access de tu aplicación en el Dashboard.

Cómo agregar usuarios de prueba:
Ve al Dashboard de Spotify for Developers.

Selecciona tu aplicación.

En la sección Users and Access, agrega los correos electrónicos de las cuentas de prueba.

### 2. Expiración del Token

Actualmente, la expiración del token de acceso no se controla automáticamente. Cuando el token expire, deberás cerrar sesión y volver a iniciar sesión para obtener un nuevo token.

```
Nota:
Estamos trabajando en una solución para manejar la renovación automática del token. ¡Mantente atento a las actualizaciones!
```

# Contribuir

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.

2. Crea una rama para tu feature o corrección: git checkout -b nombre-de-tu-rama.

3. Realiza tus cambios y haz commit: git commit -m "Descripción de los cambios".

4. Envía tus cambios: git push origin nombre-de-tu-rama.

5. Abre un Pull Request en GitHub.

### Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

### Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- Email: cmercadocss@gmail.com

- GitHub: stumbleine

### ¡Gracias por usar Echo Era! 🎵
