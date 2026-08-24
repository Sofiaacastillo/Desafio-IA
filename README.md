# Desafio-IA
Construir un sitio web sencillo utilizando HTML, CSS, Bootstrap y JavaScript, utilizando una herramienta de Inteligencia Artificial como apoyo durante el proceso.

● ¿Qué voy a recomendar?
Películas y series del género de terror.

● ¿A quién va dirigida la página?
A personas aficionadas al género de terror que buscan nuevas películas o series para ver.

● ¿Qué información tendrá cada recomendación?
- Imagen
- Título
- Año
- Nivel de miedo
- Donde verla
- Sinopsis
- ¿Por qué verla?
  
● ¿Qué quiero que suceda cuando el usuario interactúe con mi página?
Que el usuario pueda explorar distintas recomendaciones de películas y series de terror y encontrar alguna que le interese ver.

Registro de prompts

## Prompt #1 

### ¿Qué necesitába? 
Saber si mi planteamiento sobre mi estructura inicial era adecuada respecto a los cumplimientos de bootstrap especificamente row y col, ademas si era adecuada para la experiencia del usuario ux. 
### Prompt: 
Actúa como tutor de desarrollo web con experiencia en UX/UI y enseñanza para principiantes. Estoy creando un recomendador de películas y series de terror con HTML, CSS, Bootstrap y variables básicas de JavaScript. Aún no he aprendido funciones, ciclos ni manipulación del DOM.

Ya estructuré mi página con navbar, hero section, secciones de películas y series, y tarjetas con imagen, título, ficha técnica, sinopsis y motivo de recomendación. Debo cumplir también con requisitos de Bootstrap como navbar, container, row, col, cards y botones.

Mi duda es si sería adecuado utilizar row y col en una sección adicional que clasifique películas según cinco niveles de miedo. Evalúa mi planeación de manera clara, breve y entendible para una principiante.

*Dentro del prompt le añadí la estructura de mi html*
### ¿Qué respondió? 
La planeación es adecuada y tiene una estructura lógica. Recomiendo no utilizar row y col solo para cumplir un requisito, sino aplicarlos donde realmente ayuden a organizar el contenido. Las tarjetas horizontales pueden usar el sistema Grid de Bootstrap para dividir imagen e información, mientras que la sección de niveles de miedo también es útil desde UX/UI porque ayuda al usuario a elegir qué ver según la intensidad de terror. La estructura general propuesta fue: navbar y hero, recomendaciones de películas, recomendaciones de series, sección de niveles de miedo y footer.
### ¿Qué utilice? 
Utilice la planeacion row y col acorde al sistema grid sugerido de la IA para poder acomodar los niveles de miedo de la última seccion y entender de esto que toda mi estructura si estaba cumpliendo los requerimientos de bootstrap sin estar usando explicitamente un template completo, solamente con ciertas propiedades como container, row, col, etc.

### ¿Qué aprendí?
Aprendí a llevar de mejor manera el sistema grid y definir si es necesario usar un template completo de bootstrap o sus clases con propiedades y valores predefinidos. 

## Prompt #2 

### ¿Qué necesitába? 
Conocer una forma de agregar un efecto de viñeta oscuro sobre la imagen de mi background sin afectar el texto
### Prompt: 
Actúa como tutor de desarrollo web para principiantes con experiencia en HTML, CSS y UX/UI. Estoy creando un Hero Section para una página de recomendaciones de películas y series de terror. Ya tengo una imagen de fondo, un h1 y un párrafo alineados como quiero. Necesito aplicar con CSS un efecto de viñeta oscuro sobre la imagen sin afectar el texto. Intenté usar opacity, pero quiero saber qué propiedades son más adecuadas y por qué.
### ¿Qué respondió? 
Explicó que opacity no era la mejor opción porque afecta a todo el elemento, incluyendo el h1 y el párrafo. En su lugar, se recomendó usar radial-gradient() junto con background-image para colocar una capa oscura sobre la imagen y generar un efecto de viñeta. También se explicó el uso de background-size: cover y background-position: center.  
### ¿Qué utilice? 
Utilice el codigo completo de personalizacion de viñeta sobre mi background que con anterioridad ya tenia y habia intentado personalizarlo con las propiedades que conocía

### ¿Qué aprendí?
comprendí que CSS permite colocar varias capas en background-image, por ejemplo un degradado encima de una imagen.

## Prompt #3

### ¿Qué necesitába? 
Saber de qué manera podía implementar JavaScript dentro de mi página web de recomendaciones de películas y series de terror utilizando solamente los conocimientos que había visto hasta el momento en el bootcamp.
### Prompt: 
Actúa como tutor de desarrollo web especializado en enseñar a principiantes. Estoy realizando una página web de recomendaciones de películas y series de terror utilizando HTML, CSS, Bootstrap y JavaScript.

Hasta este momento, en JavaScript solamente he aprendido let, const, console.log, alert, operadores aritméticos, relacionales y lógicos, asignación y concatenación. Todavía no he aprendido funciones, ciclos, eventos ni manipulación del DOM.

Necesito implementar JavaScript en mi proyecto para cumplir con los requisitos de la tarea, pero quiero utilizar únicamente conceptos que ya conozco. Ayúdame a identificar de qué manera puedo incorporar JavaScript de forma sencilla dentro de mi página sin adelantarme a temas que todavía no he estudiado.
### ¿Qué respondió? 
La recomendación fue utilizar JavaScript únicamente con los conocimientos que ya había aprendido, sin agregar funciones, eventos o manipulación del DOM.

Se propuso utilizar variables para almacenar información relacionada con la página, mostrar algunos valores mediante console.log() y utilizar un alert() como mensaje de bienvenida para indicar al usuario que se encontraba en un sitio de recomendaciones para fanáticos del terror.

También se explicó que, debido a los conocimientos que tenía hasta ese momento, la interacción de la página sería limitada, pero era suficiente para demostrar el uso básico de JavaScript sin incorporar temas todavía no vistos en clase.
### ¿Qué utilice? 
Utilicé variables declaradas con let y const, console.log() y un alert() de bienvenida dentro de mi archivo JavaScript.

De esta manera pude integrar JavaScript en mi proyecto utilizando solamente los conocimientos vistos hasta ese momento en el bootcamp y sin agregar funciones, ciclos, eventos o manipulación del DOM.

### ¿Qué aprendí?
Aprendí que JavaScript puede incorporarse progresivamente a una página web y que no es necesario utilizar desde el inicio funciones o interacciones complejas.

También comprendí que las variables permiten almacenar información que posteriormente puede utilizarse dentro del programa y que herramientas como console.log() sirven para visualizar información durante el desarrollo, mientras que alert() permite mostrar un mensaje directamente al usuario.

## Prompt #4

### ¿Qué necesitába? 
Necesitaba adaptar las tarjetas de recomendaciones de películas y series utilizando las card de Bootstrap y comprender cómo utilizar correctamente row y col para distribuir la imagen y la información de cada película.

También quería organizar las tarjetas principales para que aparecieran una al lado de la otra en pantallas de mayor tamaño y se acomodaran una debajo de la otra en pantallas más pequeñas, utilizando el sistema Grid de Bootstrap en lugar de construir toda la distribución únicamente con CSS.
### Prompt: 
Actúa como tutor de desarrollo web especializado en HTML, CSS y Bootstrap para principiantes.

Estoy creando una página web de recomendaciones de películas y series de terror. Actualmente tengo tarjetas que contienen una imagen, título, año, plataforma, nivel de miedo, sinopsis y un apartado de "¿Por qué verla?".

Quiero adaptar estas tarjetas utilizando las card de Bootstrap y su sistema Grid. Necesito comprender cómo utilizar correctamente container, row y col, tanto para colocar varias tarjetas en una misma fila como para dividir internamente cada tarjeta entre la imagen y la información.
### ¿Qué respondió? 
Se explicó que podía utilizar dos niveles diferentes del sistema Grid de Bootstrap.

El primer nivel serviría para organizar las tarjetas dentro de la sección mediante una estructura como row y columnas col-12 col-md-6. De esta manera, cada tarjeta ocuparía las 12 columnas disponibles en pantallas pequeñas y, a partir del breakpoint md, ocuparía 6 de las 12 columnas, permitiendo colocar dos tarjetas por fila.

El segundo nivel podía utilizarse dentro de cada card, creando otra row para dividir la imagen y el contenido. Por ejemplo, una columna podía reservarse para la imagen y otra para la información de la película.

También se explicó que clases como g-4, g-0, img-fluid y mb-3 pertenecen a Bootstrap y ayudan respectivamente con el espacio entre elementos, eliminación del espacio entre columnas internas, adaptación de imágenes y márgenes.
### ¿Qué utilice? 
Utilicé las card de Bootstrap junto con su sistema Grid mediante row y col.

Para distribuir las tarjetas principales utilicé columnas responsive como col-12 col-md-6, permitiendo que en pantallas pequeñas las tarjetas se coloquen una debajo de otra y que en pantallas medianas puedan mostrarse dos por fila.

Dentro de cada tarjeta también utilicé otra row y columnas para separar la imagen de la información, además de clases de Bootstrap como img-fluid, g-0, g-4 y mb-3.

### ¿Qué aprendí?
Aprendí que el sistema Grid de Bootstrap puede utilizarse en diferentes niveles de una misma estructura y que cada row organiza sus propias columnas.

También comprendí mejor que Bootstrap trabaja con un sistema de 12 columnas, por lo que col-12 representa todo el ancho disponible y col-md-6 representa la mitad del ancho a partir del breakpoint md.

Finalmente, comprendí que row y col no deben agregarse únicamente para cumplir un requisito, sino cuando realmente ayudan a organizar y hacer responsive el contenido de la página.

