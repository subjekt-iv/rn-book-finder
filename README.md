# Aplicación de Libros

## Descripción

Esta aplicación permite a los usuarios buscar libros, ver detalles específicos de cada libro y gestionar una lista de libros recientes. Utiliza `Zustand` para la gestión del estado, `MMKV` para el almacenamiento persistente de los libros vistos recientemente, y un servicio API personalizado para las operaciones de búsqueda y detalle de libros. Si bien hay libros que en su detalle carecen de datos, hice validaciones para o buscarlos si es que vienen dentro de objetos o simplemente avisar que no estan disponibles. Sugiero hacer varias búsquedas para probar.

### Búsqueda sugeridas

- Garcia Marquez El amor en tiempos de colera
- Karl Popper The open society

## Estructura del Proyecto

El proyecto está organizado en varias carpetas principales:

- `store/`: Contiene el almacenamiento global utilizando `Zustand`.
- `services/`: Incluye las llamadas a la API y las funciones de almacenamiento.
- `components/`: Componentes React para la UI. (Estructura Atomic design)
- `screens/`: Páginas que representan diferentes vistas en la aplicación.

