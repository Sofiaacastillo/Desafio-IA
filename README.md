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



