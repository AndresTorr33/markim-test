# Propuestas para el hero del Inicio

El hero es lo primero que ve quien entra a la web. Casi todas las visitas llegan desde Instagram o TikTok en el celular, así que las tres propuestas se pensaron primero para pantalla de celular.

Las tres usan los colores que ya tiene la marca:

- crema `#f4f1ea`
- casi negro `#1d1c1a`
- amarillo dorado `#eab308`
- dorado oscuro `#7a5a00` (para texto dorado sobre fondo crema)

Esos tres colores juntos se ven en muchísimas webs. Por eso lo que hace distinta a cada propuesta es la tipografía y la composición.

Cada propuesta tiene un boceto que se puede abrir con `npm run dev`. Las capturas en tamaño celular están en `docs/capturas/`.

| Propuesta | Página temporal | Captura |
|---|---|---|
| A. La historia | `/propuesta-a` | `capturas/propuesta-a.png` |
| B. El visor | `/propuesta-b` | `capturas/propuesta-b.png` |
| C. Cartel de Lima | `/propuesta-c` | `capturas/propuesta-c.png` |

---

## A. La historia: el hero es una story

**Cómo se ve.** En el celular, el hero ocupa toda la pantalla como una story de Instagram:

- arriba, barras de progreso y el avatar de Markim;
- de fondo, un video vertical de un trabajo real;
- abajo, una barra tipo "Enviar mensaje" que en realidad abre WhatsApp.

En computadora, la story queda como un marco 9:16 a la derecha y el titular a la izquierda.

**Qué transmite.** "Vivimos en el feed de tus clientes". Quien llega desde TikTok o Instagram lo reconoce al instante.

**Tipografía.**

- Titulares: Bricolage Grotesque, angosta y muy gruesa.
- Texto: Inter.

Es la combinación que ya está instalada en el proyecto.

**Movimiento.** Al cargar, se llena la primera barra de progreso y nada más. Si el celular tiene activada la opción de reducir movimiento, la barra aparece llena desde el inicio.

**Riesgo.** Depende de tener un video vertical real y bueno. Sin eso, el hero queda vacío.

**Falta.** `[[PENDIENTE: video vertical de un trabajo real, comprimido, 5–10 s]]`

---

## B. El visor: producción en vivo

**Cómo se ve.** El hero imita la pantalla de grabación de una cámara:

- esquinas de encuadre;
- un punto rojo REC con un contador de tiempo;
- debajo de un titular grande y ancho, una foto de Kimberly grabando o de un trabajo.

**Qué transmite.** "Producimos de verdad; no solo publicamos posts". Habla del oficio y del equipo de grabación.

**Tipografía.** Una sola familia: Archivo.

- Titulares: Archivo expandida y muy gruesa.
- Texto: Archivo normal.
- Contador: los mismos números de Archivo, con ancho fijo para que no salten.

**Movimiento.** Al cargar, el contador avanza, y es el único movimiento de la página. Si está activada la opción de reducir movimiento, el contador queda quieto.

**Riesgo.** Si los elementos del visor se exageran, se ve como un truco. Por eso la propuesta usa solo las esquinas de encuadre y el contador, sin agregar más adornos.

**Falta.** `[[PENDIENTE: foto de Kimberly grabando]]`

---

## C. Cartel de Lima: tipografía de cartel chicha

**Cómo se ve.**

- Un titular enorme, en letras gruesas y apretadas, con bloques negros y dorados como en los carteles chicha pintados a mano. Ocupa casi toda la pantalla.
- No hay foto en el hero; los trabajos aparecen recién en la sección siguiente.

**Qué transmite.** "Somos de acá: cercanos y peruanos". Es la propuesta más distinta y difícil de confundir con otra agencia.

**Tipografía.**

- Titulares: Bowlby One (con el tiempo, una letra hecha a medida inspirada en el rótulo chicha).
- Texto: Figtree.

**Movimiento.** Ninguno; el hero se sostiene solo con la tipografía.

**Riesgo.** Es la más arriesgada. Si la marca de Kimberly va por un lado más sobrio o elegante, va a chocar. Los carteles chicha reales usan colores fluorescentes, y aquí se adaptan a los tres colores de Markim.

---

## Lo que comparten las tres

El resto del Inicio sigue la dirección elegida de forma más tranquila. Estas son las secciones y lo que falta en cada una:

| Sección | Qué falta |
|---|---|
| Servicios destacados | Texto final de cada servicio: `[[PENDIENTE]]` |
| Trabajos destacados | Imágenes o videos reales: `[[PENDIENTE]]` |
| Clientes | Logos, con permiso de cada cliente: `[[PENDIENTE]]` |
| Testimonio | Uno real: `[[PENDIENTE]]` |
| CTA final | Nada; lleva directo a WhatsApp |

Cuando se elija una propuesta, se borran las páginas `/propuesta-*` y las fuentes que no se usen.
