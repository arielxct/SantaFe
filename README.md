# Tienda de Colchones - Proyecto Web 
# Talento Tech - Ciudad de Buenos Aires
## Pre-Entrega Mayo 2025 - Comision 25013
** Instructor Gabriel Muñoz - Tutora Bel Jader 

## Descripción

Este proyecto es un sitio web de comercio electrónico para una tienda de colchones. El sitio permite a los usuarios explorar productos, ver detalles, agregar productos al carrito y realizar el pago.

## Estructura del Sitio

El sitio web está compuesto por las siguientes páginas principales:

* **index.html:** Página de inicio del sitio, con un banner, un producto destacado y enlaces a otras secciones.
* **files/colchones.html:** Página que muestra una lista de colchones disponibles.
* **files/sommiers.html:** Página que muestra una lista de sommiers disponibles.
* **files/almohadas.html:** Página que muestra una lista de almohadas disponibles.
* **files/accesorios.html:** Página que muestra una lista de acolchados y cama disponibles.
* **files/card-producto-colchones.html:** Página de detalle de un producto (colchón), donde se puede seleccionar la medida y agregar al carrito.
* **files/card-producto-sommiers.html:** Página de detalle de un producto (sommiers), donde se puede seleccionar la medida y agregar al carrito.
* **files/card-producto-almohadas.html:** Página de detalle de un producto (almohada), donde se puede seleccionar la medida y agregar al carrito.
* **files/card-producto-accesorios.html:** Página de detalle de un producto (acolchado), donde se puede seleccionar la medida y agregar al carrito.
* **files/carrito.html:** Página que muestra los productos agregados al carrito, el total y la opción de finalizar la compra.
* **files/pagos.html:** Página para realizar el pago de la compra.
* **files/contacto.html:** En esta página existe un formulario en la cual a traves de un email el cliente puede realizar consultas.Se envía a traves de Formspree.
* **files/usuarios.html:** Página con un formulario incluido en la cual el cliente puede registrarse. Los datos se guardan en Local Storage.
* **files/abm_usuarios.html:** A traves de esta pagina el Administrador podrá editar o dar de bajas a usuarios registrados. El Admin ingresa con email de administrador y contraseña.
* **files/pagos.html:** En esta página el usuario podra saber online el valor de la moneda a la que quiere convertir. las opciones son desde y a las siguientes monedas, dolar, peso argentino, peso brasileño y peso colombiano. aunque el codigo se puede ampliar a muchas mas opciones. La consulta consume datos de la API exchangerate-api en la cual estoy registrado.


## Funcionalidades

* **Navegación:** Menú de navegación principal en todas las páginas, con enlaces a las diferentes secciones del sitio. Contiene un logo que permite volver a la página principal. Y un logo de carrito para llevar a el directamente. El Menu al ser responsivo se transforma en un menu hamburguesa.
* **Visualización de Productos:** Lista de productos en la página de colchones, con imágenes, título, descripción y enlace a la página de detalle. Las imagenes se obtiene de la carpeta "image".
* **Detalle de Producto:** Página de detalle de un producto, con imagen, título, descripción, selección de medida, precio y opción de agregar al carrito.
* **Carrito de Compras:**
    * Visualización de los productos agregados al carrito, con nombre, precio y total. Los datos son guardados en LocalStorage.
    * Opción de vaciar el carrito.
    * Opcion de sumar o restar unidades a algunas de los articulos seleccionados. Tambien podra ser  eliminados del carrito. 
    * Opción de finalizar la compra, que redirige a la página de pagos.
* **Proceso de Pago:**
    * Página para ingresar los datos de la tarjeta de crédito/débito.
    * Simulación de procesamiento de pago que consume de una API de pagos.
    * Limpieza del carrito después de un pago aprobado. Y con informacion al comprador.
    * Redirección a la página de inicio después de un pago aprobado.
* **Diseño Responsivo:** El sitio está diseñado para adaptarse a diferentes tamaños de pantalla. Hay cortes para los 794, 640 y 480 px. Para las diferentes paginas. Y para pantallas pequeñas se usa el menu hamburguesa.

## Tecnologías Utilizadas

* HTML
* CSS
* JavaScript
* LocalStorage (para almacenar los productos del carrito)

## Cómo Utilizar el Sitio

1.  **Página de Inicio:** Explora el banner, el producto destacado y utiliza el menú de navegación para ir a las diferentes secciones.
2.  **Colchones/Sommiers/Almohadas/Accesorios:** Navega por la lista de colchones / sommiers / almohadas / accesorios y haz clic en "Ver Más" para ver los detalles de un producto.
3.  **Detalle del Producto:** Selecciona la medida del producto deseado, elige el modo de pago, la forma de pago y agrégalo al carrito. Tambien si desas comprar, hacer click en el boton "Comprar", y te llevara posteriormente a la página de pago.
4.  **Carrito:** Revisa los productos en tu carrito y haz clic en "Pagar" para ir a la página de pagos, o "Vaciar Carrito" para eliminar todos los productos. Podras sumar, restar o eliminar un articulo.
5.  **Pagos:** Ingresa los datos de tu tarjeta y realiza el pago.  Si el pago es aprobado, el carrito se vaciará y serás redirigido a la página de inicio.
6.  **Contactos :** Ingresar en el formulario los daos requeridos y la consulta a realizar. Tambien tiene un plano de ubicacion de la empresa.
7.  **Conversor de Moneda:** Un servicio al cliente que le permitira consultar sobre la cotización de sus valores.
8.  **Registarse:** Formulario de ingreso para aquellos clientes que quieren ser registrados, para recibir mas información o descuentos sobre los productos.
9.  **Administrar Usuarios:** Solo disponible para el Administrador del Sistema que debera ingresar con su email, contraseña.





## Notas Adicionales

* El sitio utiliza JavaScript para gestionar el carrito de compras, el proceso de pago y la visualización dinámica de información.
* El estilo del sitio se define en el archivo `style.css` principalmente, aunque hay paginas que tienen su estilo. Esto lo hice principalmente como una cuestión de ordenamiento y faciliad de seguimiento.
* El menú de navegación es responsive y se adapta a dispositivos móviles.
* Se utiliza `localStorage` para almacenar los productos en el carrito y de usuarios de forma local en el navegador del usuario.
* La página de pagos incluye validaciones para los campos del formulario.
* La funcionalidad de pago es simulada, no se realiza una transacción real.
* El formulario de contacto permite enviar un email a traves de Formspree.
* La pagina de Conversion de Moneda se agrega como un servicio al al cliente del sitio, y para mostrar el consumo a una API.
