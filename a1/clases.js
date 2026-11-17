// Clases de inglés A1 para la familia (la clase 1 está en clase1_saludos.html).
// vocab:    [emoji, inglés, pronunciación, español]
// phrases:  [ícono, inglés, pronunciación, español, etiqueta opcional]
// quiz:     { q, opts, a }   (a = índice de la respuesta correcta)

const CLASES_A1 = [
  {
    n: 2, emoji: "🔢", title: "Numbers 1–20", sub: "One, two, three… pronunciación y escritura",
    intro: "Hoy dominamos los números del 0 al 20: decirlos, escribirlos y usarlos para la edad, el teléfono y para contar cosas de la casa.",
    agenda: [["Repaso rápido de saludos", "10 min"], ["Números 0–20 con audio", "25 min"], ["How many? How old?", "20 min"], ["🎮 Juegos de números", "25 min"], ["Mini test", "10 min"], ["Tarea de la semana", "10 min"]],
    vocab: [
      ["0️⃣", "Zero", "ZI-rou", "cero"], ["1️⃣", "One", "UAN", "uno"], ["2️⃣", "Two", "TU", "dos"], ["3️⃣", "Three", "THRI", "tres"],
      ["4️⃣", "Four", "FOR", "cuatro"], ["5️⃣", "Five", "FAIV", "cinco"], ["6️⃣", "Six", "SIKS", "seis"], ["7️⃣", "Seven", "SÉ-ven", "siete"],
      ["8️⃣", "Eight", "EIT", "ocho"], ["9️⃣", "Nine", "NAIN", "nueve"], ["🔟", "Ten", "TEN", "diez"], ["1️⃣1️⃣", "Eleven", "i-LÉ-ven", "once"],
      ["1️⃣2️⃣", "Twelve", "TUELV", "doce"], ["1️⃣3️⃣", "Thirteen", "zer-TIIN", "trece"], ["1️⃣4️⃣", "Fourteen", "for-TIIN", "catorce"], ["1️⃣5️⃣", "Fifteen", "fif-TIIN", "quince"],
      ["1️⃣6️⃣", "Sixteen", "siks-TIIN", "dieciséis"], ["1️⃣7️⃣", "Seventeen", "se-ven-TIIN", "diecisiete"], ["1️⃣8️⃣", "Eighteen", "ei-TIIN", "dieciocho"], ["1️⃣9️⃣", "Nineteen", "nain-TIIN", "diecinueve"],
      ["2️⃣0️⃣", "Twenty", "TUÉN-ti", "veinte"]
    ],
    phrases: [
      ["❓", "How many?", "jau MÉ-ni", "¿Cuántos?"],
      ["🍎", "I have three apples.", "ai jav THRI Á-pels", "Tengo tres manzanas."],
      ["🎂", "How old are you?", "jau OULD ar iu", "¿Cuántos años tienes?"],
      ["🧒", "I am nine years old.", "ai am NAIN iirs ould", "Tengo nueve años.", "Hermano pequeño"],
      ["👦", "I am seventeen years old.", "ai am se-ven-TIIN iirs ould", "Tengo diecisiete años.", "Hermano mayor"],
      ["📱", "My phone number is…", "mai FOUN NÁM-ber iz", "Mi número de teléfono es…"],
      ["🔁", "Can you repeat, please?", "can iu ri-PIIT, pliis", "¿Puedes repetir, por favor?"]
    ],
    tip: "<strong>Ojo con los “-teen” y los “-ty”:</strong> en <em>thirteen</em> (13) la fuerza va al final: zer-TIIN. En <em>thirty</em> (30) va al principio: ZÉR-ti. Exageren la diferencia al practicar.",
    games: [
      { title: "🖐️ ¿Cuántos dedos?", color: "var(--orange)", desc: "Uno muestra dedos (con las dos manos, hasta 10) o los cuenta con los pies si quieren llegar a 20 😄. Los demás gritan el número en inglés.",
        steps: ["El “maestro” muestra dedos rápido.", "El primero que diga el número correcto en inglés gana un punto.", "Cambien de maestro cada 5 rondas.", "Nivel difícil: sumar. “Three plus four is… seven!”"] },
      { title: "🏠 Cuenta la casa", color: "var(--green)", desc: "Recorran la casa contando cosas en inglés: sillas, ventanas, puertas, cojines…",
        steps: ["Cada uno elige un objeto: “How many chairs?”", "Cuentan juntos en voz alta: “One, two, three…”", "Responden en frase completa: “We have six chairs.”", "El hermano de 17 escribe los números en un papel con letras."] }
    ],
    roleplay: { title: "🎭 Llamada telefónica", lines: [["A", "Hello! What is your phone number?"], ["B", "My phone number is six, two, three, four…"], ["A", "Can you repeat, please?"], ["B", "Sure! Six, two, three, four, five, eight, one, nine."], ["A", "Thank you! How old are you?"], ["B", "I am ___ years old."]] },
    homework: [["📞", "Mi teléfono en inglés", "Cada uno aprende a decir su número de teléfono (o el de la casa) en inglés."], ["🚗", "Contar en la calle", "Cuando vayan en el bus o carro, lean en inglés los números de las placas."], ["📝", "Escribirlos", "El de 9 años escribe del 1 al 10 con letras; el de 17, del 1 al 20."], ["🎂", "Edades de la familia", "Cada uno dice la edad de todos: “Dad is ___ years old.”"]],
    quiz: [
      { q: "¿Cómo se dice 13?", opts: ["Thirty", "Thirteen", "Three"], a: 1 },
      { q: "“How old are you?” significa…", opts: ["¿Cómo estás?", "¿Cuántos años tienes?", "¿Cuántos hay?"], a: 1 },
      { q: "¿Cómo se escribe 8?", opts: ["Eigth", "Eight", "Eit"], a: 1 },
      { q: "“I have five apples” =", opts: ["Tengo cinco manzanas", "Quiero cinco manzanas", "Hay cinco manzanas"], a: 0 },
      { q: "¿Cuál es 12?", opts: ["Twelve", "Twenty", "Eleven"], a: 0 }
    ],
    summary: "Aprendieron: los números del 0 al 20, preguntar edades, cantidades y decir el número de teléfono."
  },

  {
    n: 3, emoji: "🎨", title: "Colors", sub: "Red, blue, green… describe tu mundo",
    intro: "Los colores sirven para todo: describir la ropa, la casa, el carro o la comida. Hoy aprendemos los principales y cómo usarlos en frases.",
    agenda: [["Repaso de números", "10 min"], ["Los colores con audio", "20 min"], ["What color is it?", "20 min"], ["🎮 Juegos de colores", "30 min"], ["Mini test", "10 min"], ["Tarea", "10 min"]],
    vocab: [
      ["🔴", "Red", "RED", "rojo"], ["🔵", "Blue", "BLU", "azul"], ["🟢", "Green", "GRIIN", "verde"], ["🟡", "Yellow", "YÉ-lou", "amarillo"],
      ["🟠", "Orange", "Ó-rinch", "anaranjado"], ["🟣", "Purple", "PÉR-pel", "morado"], ["🩷", "Pink", "PINK", "rosado"], ["⚫", "Black", "BLAK", "negro"],
      ["⚪", "White", "UAIT", "blanco"], ["🟤", "Brown", "BRAUN", "marrón / café"], ["🩶", "Gray", "GREI", "gris"], ["🌈", "Colorful", "CÁ-ler-ful", "colorido"],
      ["💡", "Light blue", "LAIT blu", "celeste / azul claro"], ["🌑", "Dark green", "DARK griin", "verde oscuro"]
    ],
    phrases: [
      ["❓", "What color is it?", "uat CÁ-ler iz it", "¿De qué color es?"],
      ["🍎", "The apple is red.", "di Á-pel iz RED", "La manzana es roja."],
      ["❤️", "My favorite color is blue.", "mai FÉI-vo-rit CÁ-ler iz BLU", "Mi color favorito es el azul."],
      ["🚗", "I have a white car.", "ai jav a UAIT car", "Tengo un carro blanco.", "Orden: color + cosa"],
      ["👕", "I like your green shirt.", "ai laik ior GRIIN shert", "Me gusta tu camisa verde."],
      ["🤔", "What is your favorite color?", "uat iz ior FÉI-vo-rit CÁ-ler", "¿Cuál es tu color favorito?"]
    ],
    tip: "<strong>Orden al revés:</strong> en inglés el color va <em>antes</em> de la cosa: “a <u>red</u> car” (un carro rojo). Y los colores no cambian: <em>red cars</em>, nunca “reds cars”.",
    games: [
      { title: "👀 I spy (Veo, veo)", color: "var(--blue)", desc: "El clásico “veo, veo” pero en inglés y con colores.",
        steps: ["Uno dice: “I spy something… blue!”", "Los demás señalan cosas y preguntan: “Is it the door?”", "Respuesta: “Yes!” o “No!”", "Quien adivine elige el siguiente objeto."] },
      { title: "🏃 Toca el color", color: "var(--pink)", desc: "Juego de movimiento, ideal para el más pequeño.",
        steps: ["El maestro grita un color: “Touch something RED!”", "Todos corren a tocar algo de ese color.", "El último en tocar pierde un punto.", "Después el que gane es el nuevo maestro."] }
    ],
    roleplay: { title: "🎭 En la tienda de ropa", lines: [["A", "Hello! Can I help you?"], ["B", "Yes, I want a T-shirt, please."], ["A", "What color?"], ["B", "Blue, please. My favorite color is blue."], ["A", "Here you are!"], ["B", "Thank you! I like it."]] },
    homework: [["🏷️", "Post-its de colores", "Pongan 5 post-its en objetos de la casa: “blue door”, “white table”…"], ["👕", "La ropa de hoy", "Cada mañana, cada uno dice el color de su ropa: “My shirt is black.”"], ["🎨", "Dibujo", "El de 9 años dibuja un arcoíris y escribe los colores en inglés."], ["🗣️", "Pregunta diaria", "En la cena: “What is your favorite color?”"]],
    quiz: [
      { q: "¿Cómo se dice “amarillo”?", opts: ["Yellow", "Orange", "Green"], a: 0 },
      { q: "“Un carro rojo” =", opts: ["A car red", "A red car", "A reds car"], a: 1 },
      { q: "“Purple” es…", opts: ["rosado", "morado", "marrón"], a: 1 },
      { q: "“What color is it?” significa…", opts: ["¿Qué es?", "¿De qué color es?", "¿Te gusta?"], a: 1 },
      { q: "¿Cómo se dice “negro”?", opts: ["White", "Brown", "Black"], a: 2 }
    ],
    summary: "Aprendieron: 14 colores, preguntar de qué color es algo y el orden “color + cosa”."
  },

  {
    n: 4, emoji: "👨‍👩‍👦‍👦", title: "My family", sub: "Mother, father, brother, sister…",
    intro: "Hoy cada uno presenta a la familia en inglés: quién es quién, cómo se llaman y cuántos años tienen.",
    agenda: [["Repaso de colores", "10 min"], ["La familia: vocabulario", "20 min"], ["This is my…", "25 min"], ["🎮 Juegos de familia", "25 min"], ["Mini test", "10 min"], ["Tarea", "10 min"]],
    vocab: [
      ["👨‍👩‍👧‍👦", "Family", "FÁ-mi-li", "familia"], ["👩", "Mother / Mom", "MÁ-der / MAM", "madre / mamá"], ["👨", "Father / Dad", "FÁ-der / DAD", "padre / papá"], ["👪", "Parents", "PÉ-rents", "padres"],
      ["👦", "Brother", "BRÁ-der", "hermano"], ["👧", "Sister", "SÍS-ter", "hermana"], ["🧒", "Son", "SAN", "hijo"], ["👧", "Daughter", "DÓ-ter", "hija"],
      ["👵", "Grandmother", "GRAN-ma-der", "abuela"], ["👴", "Grandfather", "GRAN-fa-der", "abuelo"], ["👩‍🦱", "Aunt", "ANT", "tía"], ["👨‍🦱", "Uncle", "ÁN-kel", "tío"],
      ["🧑", "Cousin", "CÁ-sen", "primo / prima"], ["👶", "Baby", "BÉI-bi", "bebé"]
    ],
    phrases: [
      ["👉", "This is my mother.", "dis iz mai MÁ-der", "Esta es mi madre."],
      ["🏷️", "Her name is ___.", "jer NEIM iz", "Ella se llama ___.", "Ella → her"],
      ["🏷️", "His name is ___.", "jiz NEIM iz", "Él se llama ___.", "Él → his"],
      ["👨‍👦", "I have two brothers.", "ai jav TU BRÁ-ders", "Tengo dos hermanos."],
      ["🎂", "He is forty years old.", "ji iz FÓR-ti iirs ould", "Él tiene cuarenta años."],
      ["💼", "My dad is a security guard.", "mai DAD iz a se-KIÚ-ri-ti gard", "Mi papá es guardia de seguridad.", "Papá"],
      ["🏠", "My mom takes care of our home.", "mai MAM teiks KER ov aur JOUM", "Mi mamá se encarga de nuestro hogar.", "Mamá"],
      ["❤️", "I love my family.", "ai LAV mai FÁ-mi-li", "Amo a mi familia."]
    ],
    tip: "<strong>His / Her:</strong> en español decimos “su” para todo; en inglés depende de quién: <em>his</em> = de él, <em>her</em> = de ella. “His name is Carlos.” “Her name is Ana.”",
    games: [
      { title: "📸 Álbum de fotos", color: "var(--purple)", desc: "Saquen fotos familiares (en el celular o en papel) y preséntenlas en inglés.",
        steps: ["Cada uno elige una foto.", "Señala y dice: “This is my grandmother.”", "Agrega: “Her name is ___. She is ___ years old.”", "Los demás preguntan: “Who is this?”"] },
      { title: "🌳 Árbol familiar", color: "var(--green)", desc: "Entre todos dibujen el árbol de la familia en un papel grande.",
        steps: ["Dibujen a abuelos, papás, hijos, tíos y primos.", "Escriban debajo la palabra en inglés: “grandfather”, “aunt”…", "El de 9 años coloca los nombres; el de 17 escribe las palabras.", "Peguen el árbol en la pared toda la semana."] }
    ],
    roleplay: { title: "🎭 Presentando a la familia", lines: [["A", "Who is this?"], ["B", "This is my brother. His name is ___."], ["A", "How old is he?"], ["B", "He is ___ years old."], ["A", "And who is she?"], ["B", "She is my mom. I love my family!"]] },
    homework: [["🌳", "Árbol en la pared", "Dejen el árbol familiar pegado y repasen cada día un nombre."], ["📞", "Llamada a los abuelos", "Si hablan con abuelos o tíos, salúdenlos en inglés: “Hello, grandma!”"], ["✍️", "Mi familia en 3 frases", "Cada uno escribe 3 frases: “I have one sister…”"], ["🗣️", "His o her", "En la cena, cada uno dice el nombre de otro: “His name is…”"]],
    quiz: [
      { q: "“Brother” es…", opts: ["hermana", "hermano", "primo"], a: 1 },
      { q: "“Su nombre” (de ella) =", opts: ["His name", "Her name", "She name"], a: 1 },
      { q: "¿Cómo se dice “abuela”?", opts: ["Grandmother", "Aunt", "Daughter"], a: 0 },
      { q: "“Parents” significa…", opts: ["parientes", "padres (papá y mamá)", "primos"], a: 1 },
      { q: "“This is my uncle” =", opts: ["Este es mi tío", "Esta es mi tía", "Este es mi abuelo"], a: 0 }
    ],
    summary: "Aprendieron: 14 palabras de familia, presentar a alguien (This is my…) y la diferencia entre his y her."
  },

  {
    n: 5, emoji: "🏠", title: "At home", sub: "Room, kitchen, bathroom… vocabulario en casa",
    intro: "Hoy convertimos la casa en un salón de clases: cada cuarto y cada objeto tiene su nombre en inglés.",
    agenda: [["Repaso de familia", "10 min"], ["Partes de la casa", "20 min"], ["Objetos y dónde están", "20 min"], ["🎮 Búsqueda del tesoro", "30 min"], ["Mini test", "10 min"], ["Tarea", "10 min"]],
    vocab: [
      ["🏠", "House", "JAUS", "casa"], ["🛋️", "Living room", "LÍ-ving rum", "sala"], ["🍳", "Kitchen", "KÍ-chen", "cocina"], ["🛏️", "Bedroom", "BED-rum", "dormitorio"],
      ["🚿", "Bathroom", "BAZ-rum", "baño"], ["🚪", "Door", "DOR", "puerta"], ["🪟", "Window", "UÍN-dou", "ventana"], ["🪑", "Chair", "CHER", "silla"],
      ["🍽️", "Table", "TÉI-bel", "mesa"], ["🛏️", "Bed", "BED", "cama"], ["📺", "TV", "ti-VI", "televisor"], ["🧊", "Fridge", "FRICH", "refrigeradora"],
      ["🛋️", "Sofa", "SÓU-fa", "sofá"], ["🌳", "Garden / Yard", "GAR-den / IARD", "jardín / patio"]
    ],
    phrases: [
      ["📍", "Where is the remote?", "uer iz di ri-MÓUT", "¿Dónde está el control?"],
      ["🍳", "It is in the kitchen.", "it iz in di KÍ-chen", "Está en la cocina."],
      ["⬆️", "The book is on the table.", "di BUK iz on di TÉI-bel", "El libro está sobre la mesa.", "on = sobre"],
      ["⬇️", "The cat is under the bed.", "di KAT iz ÁN-der di BED", "El gato está debajo de la cama.", "under = debajo"],
      ["🏠", "My house has three bedrooms.", "mai JAUS jas THRI BED-rums", "Mi casa tiene tres dormitorios."],
      ["🧹", "Clean your room, please!", "KLIIN ior RUM, pliis", "¡Limpia tu cuarto, por favor!", "Mamá 😄"],
      ["🏡", "Welcome to my home!", "UÉL-kam tu mai JOUM", "¡Bienvenido a mi casa!"]
    ],
    tip: "<strong>In, on, under:</strong> <em>in</em> = dentro de, <em>on</em> = encima de, <em>under</em> = debajo de. Con estas tres palabras ya pueden decir dónde está casi todo.",
    games: [
      { title: "🗺️ Búsqueda del tesoro", color: "var(--orange)", desc: "Uno esconde un objeto pequeño y da pistas en inglés.",
        steps: ["Esconde el objeto (una moneda, un juguete).", "Da pistas: “It is in the kitchen… It is under something…”", "Los demás buscan diciendo dónde miran: “Is it on the table?”", "Quien lo encuentre lo esconde la próxima vez."] },
      { title: "🏷️ Etiqueta la casa", color: "var(--blue)", desc: "Carrera para poner post-its en inglés.",
        steps: ["Cada uno recibe 5 post-its con palabras: door, window, chair…", "Al decir “Go!” corren a pegarlos en el objeto correcto.", "Revisen juntos y digan cada palabra en voz alta.", "Dejen los post-its toda la semana."] }
    ],
    roleplay: { title: "🎭 Visita a la casa", lines: [["A", "Welcome to my home!"], ["B", "Thank you! It is beautiful."], ["A", "This is the living room, and that is the kitchen."], ["B", "Where is the bathroom, please?"], ["A", "It is next to my bedroom."], ["B", "Thank you!"]] },
    homework: [["🏷️", "Post-its", "Mantengan los post-its y lean en voz alta cada vez que pasen."], ["🔍", "¿Dónde está?", "Pregúntense cosas durante la semana: “Where is my phone?” — “It is on the sofa.”"], ["✏️", "Plano de la casa", "El de 17 dibuja el plano de la casa con los nombres en inglés."], ["🧹", "Órdenes en inglés", "Mamá y papá dan una orden al día en inglés: “Clean your room!”"]],
    quiz: [
      { q: "“Kitchen” es…", opts: ["cocina", "baño", "sala"], a: 0 },
      { q: "“The cat is under the bed” =", opts: ["El gato está sobre la cama", "El gato está debajo de la cama", "El gato está en la cama"], a: 1 },
      { q: "¿Cómo se dice “ventana”?", opts: ["Door", "Window", "Wall"], a: 1 },
      { q: "“Sobre la mesa” =", opts: ["in the table", "under the table", "on the table"], a: 2 },
      { q: "“Bedroom” es…", opts: ["dormitorio", "baño", "cama"], a: 0 }
    ],
    summary: "Aprendieron: las partes de la casa, 14 objetos y las preposiciones in, on y under."
  },

  {
    n: 6, emoji: "💯", title: "Numbers 20–100", sub: "Twenty, thirty… decenas y compuestos",
    intro: "Ya saben hasta el 20. Ahora llegamos al 100: con las decenas pueden decir precios, edades de los papás y cualquier número del día a día.",
    agenda: [["Repaso 1–20", "10 min"], ["Las decenas", "20 min"], ["Números compuestos y precios", "25 min"], ["🎮 Bingo y supermercado", "25 min"], ["Mini test", "10 min"], ["Tarea", "10 min"]],
    vocab: [
      ["2️⃣0️⃣", "Twenty", "TUÉN-ti", "veinte"], ["3️⃣0️⃣", "Thirty", "ZÉR-ti", "treinta"], ["4️⃣0️⃣", "Forty", "FÓR-ti", "cuarenta"], ["5️⃣0️⃣", "Fifty", "FÍF-ti", "cincuenta"],
      ["6️⃣0️⃣", "Sixty", "SÍKS-ti", "sesenta"], ["7️⃣0️⃣", "Seventy", "SÉ-ven-ti", "setenta"], ["8️⃣0️⃣", "Eighty", "ÉI-ti", "ochenta"], ["9️⃣0️⃣", "Ninety", "NÁIN-ti", "noventa"],
      ["💯", "One hundred", "uan JÁN-dred", "cien"], ["2️⃣1️⃣", "Twenty-one", "tuen-ti-UAN", "veintiuno"], ["3️⃣5️⃣", "Thirty-five", "zer-ti-FAIV", "treinta y cinco"], ["4️⃣8️⃣", "Forty-eight", "for-ti-EIT", "cuarenta y ocho"],
      ["7️⃣2️⃣", "Seventy-two", "se-ven-ti-TU", "setenta y dos"], ["9️⃣9️⃣", "Ninety-nine", "nain-ti-NAIN", "noventa y nueve"]
    ],
    phrases: [
      ["💵", "How much is it?", "jau MACH iz it", "¿Cuánto cuesta?"],
      ["🏷️", "It is twenty-five dollars.", "it iz tuen-ti-FAIV DÁ-lars", "Cuesta veinticinco dólares."],
      ["🎂", "My dad is forty-five years old.", "mai DAD iz for-ti-FAIV iirs ould", "Mi papá tiene cuarenta y cinco años."],
      ["➕", "Ten plus twenty is thirty.", "ten plas TUÉN-ti iz ZÉR-ti", "Diez más veinte es treinta."],
      ["➖", "Fifty minus ten is forty.", "FÍF-ti MÁI-nus ten iz FÓR-ti", "Cincuenta menos diez es cuarenta."],
      ["💯", "I got one hundred!", "ai got uan JÁN-dred", "¡Saqué cien!", "En un examen"]
    ],
    tip: "<strong>Fácil:</strong> los compuestos se forman igual que en español, decena + unidad con guion: <em>thirty-two</em> (32). Ojo: <em>forty</em> se escribe sin “u” (no “fourty”).",
    games: [
      { title: "🎱 Bingo grande", color: "var(--green)", desc: "Como el bingo de la clase 1, pero con números del 20 al 100.",
        steps: ["Cada uno dibuja un cartón con 9 números entre 20 y 100.", "El maestro dice números en inglés: “Sixty-three!”", "Tachan si lo tienen.", "Gana quien complete una línea y diga sus números en inglés."] },
      { title: "🛒 Supermercado", color: "var(--orange)", desc: "Pongan precios a objetos de la casa y jueguen a comprar.",
        steps: ["Pongan etiquetas con precios: “$35”, “$72”…", "Uno es el cajero, los demás clientes.", "Cliente: “How much is it?” — Cajero: “It is thirty-five dollars.”", "El cliente paga con billetes de papel y cuenta en inglés."] }
    ],
    roleplay: { title: "🎭 En el mercado", lines: [["A", "Good morning! How much are the bananas?"], ["B", "They are forty cents each."], ["A", "And the watermelon?"], ["B", "It is three dollars and fifty cents."], ["A", "OK, I want one watermelon, please."], ["B", "Here you are. Thank you!"]] },
    homework: [["🧾", "Precios del súper", "Al ir de compras, lean los precios en inglés."], ["🎂", "Edades", "Digan la edad de papá, mamá, abuelos y tíos en inglés."], ["📺", "Canales", "Cambien el canal de la TV diciendo el número en inglés."], ["✍️", "Escribir decenas", "El de 9 años: decenas 10–100. El de 17: 20 números compuestos con letra."]],
    quiz: [
      { q: "¿Cómo se dice 40?", opts: ["Fourty", "Forty", "Fourteen"], a: 1 },
      { q: "“Thirty-seven” es…", opts: ["37", "73", "30"], a: 0 },
      { q: "“How much is it?” significa…", opts: ["¿Cuántos son?", "¿Cuánto cuesta?", "¿Qué hora es?"], a: 1 },
      { q: "¿Cómo se dice 100?", opts: ["One hundred", "One thousand", "Ten ten"], a: 0 },
      { q: "“Eighty” es…", opts: ["18", "80", "8"], a: 1 }
    ],
    summary: "Aprendieron: las decenas hasta el 100, números compuestos, precios y operaciones simples."
  },

  {
    n: 7, emoji: "📅", title: "Days and months", sub: "Monday, January… el calendario en inglés",
    intro: "Hoy aprendemos los días de la semana, los meses y cómo decir fechas, como los cumpleaños de la familia.",
    agenda: [["Repaso 20–100", "10 min"], ["Días de la semana", "15 min"], ["Los meses", "20 min"], ["Fechas y cumpleaños", "20 min"], ["🎮 Juegos", "20 min"], ["Mini test y tarea", "15 min"]],
    vocab: [
      ["1️⃣", "Monday", "MÁN-dei", "lunes"], ["2️⃣", "Tuesday", "TIÚS-dei", "martes"], ["3️⃣", "Wednesday", "UÉNS-dei", "miércoles"], ["4️⃣", "Thursday", "ZÉRS-dei", "jueves"],
      ["5️⃣", "Friday", "FRÁI-dei", "viernes"], ["6️⃣", "Saturday", "SÁ-ter-dei", "sábado"], ["7️⃣", "Sunday", "SÁN-dei", "domingo"], ["❄️", "January", "YÁ-niu-e-ri", "enero"],
      ["💘", "February", "FÉ-bru-e-ri", "febrero"], ["🌱", "March", "MARCH", "marzo"], ["🌷", "April", "ÉI-pril", "abril"], ["🌸", "May", "MEI", "mayo"],
      ["☀️", "June", "YUN", "junio"], ["🏖️", "July", "yu-LÁI", "julio"], ["🌻", "August", "Ó-gust", "agosto"], ["🍂", "September", "sep-TÉM-ber", "septiembre"],
      ["🎃", "October", "oc-TÓU-ber", "octubre"], ["🍁", "November", "no-VÉM-ber", "noviembre"], ["🎄", "December", "di-SÉM-ber", "diciembre"], ["📆", "Weekend", "UÍK-end", "fin de semana"]
    ],
    phrases: [
      ["📅", "What day is today?", "uat DEI iz tu-DÉI", "¿Qué día es hoy?"],
      ["🗓️", "Today is Monday.", "tu-DÉI iz MÁN-dei", "Hoy es lunes."],
      ["🎂", "When is your birthday?", "uen iz ior BÉRZ-dei", "¿Cuándo es tu cumpleaños?"],
      ["🎉", "My birthday is in May.", "mai BÉRZ-dei iz in MEI", "Mi cumpleaños es en mayo.", "in + mes"],
      ["🎈", "My birthday is on May 5th.", "… on MEI FIFZ", "Mi cumpleaños es el 5 de mayo.", "on + fecha"],
      ["😎", "I love the weekend!", "ai LAV di UÍK-end", "¡Me encanta el fin de semana!"],
      ["👋", "See you on Friday!", "SII iu on FRÁI-dei", "¡Nos vemos el viernes!"]
    ],
    tip: "<strong>Mayúsculas:</strong> en inglés los días y meses siempre se escriben con mayúscula: <em>Monday, January</em>. En español no. Y la “d” de <em>Wednesday</em> no se pronuncia: UÉNS-dei.",
    games: [
      { title: "🎂 Calendario familiar", color: "var(--pink)", desc: "Hagan un calendario con los cumpleaños de toda la familia.",
        steps: ["Cada uno dice: “My birthday is on ___.”", "Escriban los cumpleaños en un calendario o papel.", "Pregunten por los abuelos, tíos y primos.", "¿Quién cumple primero? “Grandma's birthday is in March!”"] },
      { title: "🔄 La cadena de días", color: "var(--blue)", desc: "Sentados en círculo, digan los días o meses en orden sin equivocarse.",
        steps: ["El primero dice “Monday”, el siguiente “Tuesday”…", "Si alguien se equivoca, empieza de nuevo.", "Nivel 2: los meses.", "Nivel 3: ¡al revés! Sunday, Saturday, Friday…"] }
    ],
    roleplay: { title: "🎭 Planeando la semana", lines: [["A", "What day is today?"], ["B", "Today is Wednesday."], ["A", "When is grandma's birthday?"], ["B", "It is on Saturday! In August."], ["A", "Great! Let's have a party on Saturday!"], ["B", "Yes! I love the weekend!"]] },
    homework: [["📅", "Día de hoy", "Cada mañana, alguien dice: “Today is ___.”"], ["🎂", "Cumpleaños", "Peguen el calendario familiar en la nevera."], ["🎵", "Canción", "Busquen “Days of the week song” en YouTube y cántenla."], ["✍️", "Agenda en inglés", "El de 17 escribe su agenda de la semana en inglés."]],
    quiz: [
      { q: "“Thursday” es…", opts: ["martes", "jueves", "sábado"], a: 1 },
      { q: "¿Cómo se dice “domingo”?", opts: ["Sunday", "Monday", "Saturday"], a: 0 },
      { q: "“My birthday is ___ June” →", opts: ["on", "in", "at"], a: 1 },
      { q: "¿Qué mes es “August”?", opts: ["abril", "agosto", "octubre"], a: 1 },
      { q: "“Weekend” significa…", opts: ["semana", "fin de semana", "día libre"], a: 1 }
    ],
    summary: "Aprendieron: los 7 días, los 12 meses, preguntar por cumpleaños y decir fechas con in y on."
  },

  {
    n: 8, emoji: "🏆", title: "A1 Review", sub: "Practica todo lo aprendido en el nivel",
    intro: "¡Última clase del nivel A1! Hoy repasamos todo con juegos y una gran conversación final. Al terminar, ¡están listos para el A2!",
    agenda: [["Repaso: saludos y presentaciones", "15 min"], ["Repaso: números, colores, familia", "20 min"], ["Repaso: casa, días y meses", "20 min"], ["🎮 Gran concurso familiar", "30 min"], ["Test final", "15 min"]],
    vocab: [
      ["👋", "Hello / Goodbye", "je-LÓU / gud-BÁI", "hola / adiós"], ["🙋", "My name is…", "mai NEIM iz", "me llamo…"], ["🎂", "I am ___ years old", "ai am … iirs ould", "tengo ___ años"], ["🔢", "Fifteen / Fifty", "fif-TIIN / FÍF-ti", "quince / cincuenta"],
      ["🎨", "Blue / Red / Green", "BLU / RED / GRIIN", "azul / rojo / verde"], ["👩", "Mother / Father", "MÁ-der / FÁ-der", "madre / padre"], ["👦", "Brother / Sister", "BRÁ-der / SÍS-ter", "hermano / hermana"], ["🍳", "Kitchen / Bedroom", "KÍ-chen / BED-rum", "cocina / dormitorio"],
      ["📅", "Monday / Friday", "MÁN-dei / FRÁI-dei", "lunes / viernes"], ["❄️", "January / December", "YÁ-niu-e-ri / di-SÉM-ber", "enero / diciembre"], ["🙏", "Please / Thank you", "PLIIS / ZENK iu", "por favor / gracias"], ["😊", "Nice to meet you", "NAIS tu MIIT iu", "mucho gusto"]
    ],
    phrases: [
      ["🗣️", "Hello! My name is ___ and I am from Panama.", "je-LÓU! mai NEIM iz … and ai am from PÁ-na-ma", "¡Hola! Me llamo ___ y soy de Panamá."],
      ["👪", "I have a big family.", "ai jav a BIG FÁ-mi-li", "Tengo una familia grande."],
      ["🏠", "My house is white and it has a garden.", "mai JAUS iz UAIT and it jas a GAR-den", "Mi casa es blanca y tiene jardín."],
      ["❤️", "My favorite day is Saturday.", "mai FÉI-vo-rit DEI iz SÁ-ter-dei", "Mi día favorito es el sábado."],
      ["🎉", "My birthday is in December.", "mai BÉRZ-dei iz in di-SÉM-ber", "Mi cumpleaños es en diciembre."],
      ["🏆", "We finished level A1!", "ui FÍ-nisht LÉ-vel ei-UAN", "¡Terminamos el nivel A1!"]
    ],
    tip: "<strong>Para el A2:</strong> lo más importante es no dejar de practicar. Mantengan los post-its, el saludo de cada mañana en inglés y 10 minutos diarios en familia.",
    games: [
      { title: "🎤 Concurso familiar", color: "var(--purple)", desc: "Dos equipos (por ejemplo papá + hermano menor contra mamá + hermano mayor). El que pregunta se turna.",
        steps: ["Ronda 1, traducción: “¿Cómo se dice cocina?” — “Kitchen!”", "Ronda 2, números: digan en inglés números al azar del 1 al 100.", "Ronda 3, presentación: cada uno se presenta en 30 segundos sin parar.", "Ronda 4, rapidez: nombrar 5 colores, 5 familiares o 5 días en 20 segundos."] },
      { title: "🃏 Tarjetas mezcladas", color: "var(--orange)", desc: "Escriban en papelitos palabras de todas las clases y métanlas en una bolsa.",
        steps: ["Cada uno saca un papel.", "Si está en español, lo dice en inglés; si está en inglés, lo traduce.", "Bonus: decir una frase con la palabra.", "El que tenga más papeles al final gana."] }
    ],
    roleplay: { title: "🎭 Conversación final (todo junto)", lines: [["A", "Good morning! What is your name?"], ["B", "My name is ___. Nice to meet you!"], ["A", "Nice to meet you too! How old are you?"], ["B", "I am ___ years old. I have ___ brothers."], ["A", "What is your favorite color?"], ["B", "My favorite color is ___. My birthday is in ___!"], ["A", "Cool! See you on Monday!"]] },
    homework: [["🏅", "Diploma", "Hagan un diploma casero de “English Level A1” para cada uno."], ["🎬", "Película", "Vean una película infantil en inglés con subtítulos en español."], ["🗣️", "Seguir practicando", "Sigan con el saludo de cada mañana y los post-its."], ["📱", "Repaso libre", "Repitan los juegos favoritos de las clases anteriores."]],
    quiz: [
      { q: "“Nice to meet you” =", opts: ["Mucho gusto", "Buenos días", "Hasta luego"], a: 0 },
      { q: "¿Cómo se dice 50?", opts: ["Fifteen", "Fifty", "Five"], a: 1 },
      { q: "“Her name is Ana” — ¿de quién hablamos?", opts: ["De él", "De ella", "De mí"], a: 1 },
      { q: "“The keys are on the table” =", opts: ["Las llaves están sobre la mesa", "Las llaves están debajo de la mesa", "Las llaves están en la cocina"], a: 0 },
      { q: "¿Qué día va después de Tuesday?", opts: ["Monday", "Thursday", "Wednesday"], a: 2 },
      { q: "“A blue car” significa…", opts: ["un carro azul", "un azul carro", "dos carros azules"], a: 0 },
      { q: "“How much is it?” se usa para…", opts: ["preguntar la hora", "preguntar el precio", "preguntar la edad"], a: 1 },
      { q: "¿Cómo se dice “hermana”?", opts: ["Brother", "Sister", "Daughter"], a: 1 }
    ],
    summary: "¡Completaron el nivel A1! Saben saludar, presentarse, contar hasta 100, hablar de colores, familia, la casa y el calendario."
  }
];
