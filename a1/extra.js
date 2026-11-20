// Contenido extra de cada clase de inglés (sección "Gramática y más").
// grammar: explicación sencilla · more: palabras extra [emoji, inglés, pronunciación, español]
// errores: [lo que se suele decir mal, lo correcto, por qué] · kids / teens / adults: consejos por edad
// fact: dato curioso. La clave es "nivel-número de clase".

const EXTRA = {
  "A1-1": {
    grammar: { title: "Presentarse: I am, you are, my, your", html: `
      <table><tr><th>Español</th><th>Inglés</th><th>Ejemplo</th></tr>
      <tr><td>yo soy / estoy</td><td><b>I am</b> (I'm)</td><td>I'm Jonathan. I'm from Panama.</td></tr>
      <tr><td>tú eres / estás</td><td><b>you are</b> (you're)</td><td>You are my brother.</td></tr>
      <tr><td>mi / tu</td><td><b>my / your</b></td><td>My name is Ana. What's your name?</td></tr></table>
      <p><strong>Formal e informal:</strong> en inglés <em>you</em> sirve para “tú” y para “usted”. La cortesía se nota en el saludo: <em>Hello, Good morning</em> (formal) / <em>Hi, Hey</em> (informal).</p>
      <p><strong>Contracciones:</strong> al hablar casi siempre se juntan: <em>I am → I'm</em>, <em>What is → What's</em>, <em>Name is → Name's</em>.</p>` },
    more: [["😃", "Hey!", "JEI", "¡Hola! (muy informal)"], ["🌞", "Have a good day!", "jav a gud DEI", "¡Que tengas buen día!"], ["🤗", "You're welcome", "iur UÉL-kam", "de nada"], ["🙋", "Excuse me", "ex-KIÚS mi", "disculpe"], ["🔁", "Again, please", "a-GUÉN, pliis", "otra vez, por favor"], ["🐢", "Slowly, please", "SLÓU-li, pliis", "más despacio, por favor"]],
    errores: [["Good night! (al llegar a una fiesta)", "Good evening!", "Good night es solo para despedirse."], ["My name are…", "My name is…", "My name (uno) → is."], ["i am from Panama", "I am from Panama", "“I” siempre con mayúscula."]],
    kids: "Que salude a cada persona que llegue a casa en inglés y diga su nombre: “Hello! My name is…”",
    teens: "Graba un video de 30 segundos presentándote en inglés como si fuera para un intercambio escolar.",
    adults: "Practiquen saludos formales para el trabajo: “Good morning, sir. How can I help you?”",
    fact: "“Hello” se volvió común gracias al teléfono: Thomas Edison lo propuso como la forma de contestar las llamadas."
  },
  "A1-2": {
    grammar: { title: "Singular y plural: one apple, two apples", html: `
      <p>Para hablar de más de una cosa, casi siempre se agrega <strong>-s</strong> al final:</p>
      <table><tr><th>Uno</th><th>Varios</th></tr>
      <tr><td>one apple</td><td>two apple<b>s</b></td></tr>
      <tr><td>one chair</td><td>six chair<b>s</b></td></tr>
      <tr><td>one box</td><td>three box<b>es</b> (después de x, s, ch, sh → -es)</td></tr>
      <tr><td>one child</td><td>two <b>children</b> (irregular)</td></tr>
      <tr><td>one person</td><td>five <b>people</b> (irregular)</td></tr></table>
      <p>Para preguntar cuántos: <strong>How many</strong> + plural + ? → <em>How many chairs are there?</em> (¿Cuántas sillas hay?)</p>` },
    more: [["👶", "Child / Children", "CHAILD / CHÍL-dren", "niño / niños"], ["🧍", "Person / People", "PÉR-son / PÍ-pel", "persona / personas"], ["➕", "Plus", "PLAS", "más (suma)"], ["➖", "Minus", "MÁI-nus", "menos (resta)"], ["🟰", "Equals", "Í-cuols", "es igual a"], ["📞", "Phone number", "FOUN NÁM-ber", "número de teléfono"]],
    errores: [["I have 24 years.", "I am 24 years old.", "La edad va con “be” (ser/estar), no con “have”."], ["Two apple", "Two apples", "Plural con -s."], ["Tree (para decir 3)", "Three", "“Tree” es árbol. En three la lengua va entre los dientes."]],
    kids: "Cuenten escalones, juguetes o carros en la calle. Que el pequeño “enseñe” a contar a los papás.",
    teens: "Practica diciendo números de teléfono rápido, como en una llamada real. Reto: del 20 al 0 en menos de 10 segundos.",
    adults: "Lean en inglés los precios del súper y los números de las placas mientras manejan o van en el bus.",
    fact: "En inglés el número de teléfono se dice dígito por dígito y el 0 a veces se dice “oh”: 507-6230 = “five oh seven, six two three oh”."
  },
  "A1-3": {
    grammar: { title: "Adjetivos: siempre antes y nunca cambian", html: `
      <p>En inglés el adjetivo (color, tamaño…) va <strong>antes</strong> del sustantivo y <strong>nunca</strong> cambia por plural o género:</p>
      <table><tr><th>Español</th><th>Inglés</th></tr>
      <tr><td>un carro rojo</td><td>a <b>red</b> car</td></tr>
      <tr><td>dos carros rojos</td><td>two <b>red</b> cars</td></tr>
      <tr><td>una casa blanca</td><td>a <b>white</b> house</td></tr>
      <tr><td>la camisa es verde</td><td>the shirt <b>is green</b></td></tr></table>
      <p>Para matizar: <strong>light</strong> (claro) y <strong>dark</strong> (oscuro): <em>light blue, dark green</em>.</p>` },
    more: [["🥇", "Gold", "GOULD", "dorado"], ["🥈", "Silver", "SÍL-ver", "plateado"], ["🌊", "Turquoise", "TÉR-cuois", "turquesa"], ["🍷", "Maroon", "ma-RUUN", "vinotinto"], ["🌈", "Rainbow", "RÉIN-bou", "arcoíris"], ["🖍️", "Crayon", "CRÉI-on", "crayola"], ["🎨", "Paint", "PEINT", "pintura / pintar"], ["✨", "Bright", "BRAIT", "brillante / vivo"]],
    errores: [["A car red", "A red car", "El color va antes."], ["Reds shoes", "Red shoes", "Los adjetivos no tienen plural."], ["The sky is celeste", "The sky is light blue", "Celeste = light blue."]],
    kids: "Jueguen a clasificar juguetes o ropa por colores diciendo: “This is red! This is blue!”",
    teens: "Describe tu outfit del día como si fueras influencer: “Today I'm wearing black jeans and a white T-shirt.”",
    adults: "Al cocinar, nombren el color de los ingredientes: “red tomato, green pepper, yellow banana”.",
    fact: "En inglés “orange” es la fruta y el color. Antes de que llegara la naranja a Inglaterra, el color se llamaba “yellow-red”."
  },
  "A1-4": {
    grammar: { title: "Posesivos: my, your, his, her, our, their", html: `
      <table><tr><th>Persona</th><th>Posesivo</th><th>Ejemplo</th></tr>
      <tr><td>I (yo)</td><td><b>my</b> (mi)</td><td>my mom</td></tr>
      <tr><td>you (tú)</td><td><b>your</b> (tu)</td><td>your dad</td></tr>
      <tr><td>he (él)</td><td><b>his</b> (su, de él)</td><td>his sister</td></tr>
      <tr><td>she (ella)</td><td><b>her</b> (su, de ella)</td><td>her brother</td></tr>
      <tr><td>we (nosotros)</td><td><b>our</b> (nuestro)</td><td>our family</td></tr>
      <tr><td>they (ellos)</td><td><b>their</b> (su, de ellos)</td><td>their house</td></tr></table>
      <p>También existe el <strong>'s</strong> para decir “de alguien”: <em>Ana<b>'s</b> son</em> = el hijo de Ana. <em>My mom<b>'s</b> name is…</em> = El nombre de mi mamá es…</p>` },
    more: [["💑", "Husband / Wife", "JÁS-band / UAIF", "esposo / esposa"], ["🧑‍🤝‍🧑", "Twins", "TUINS", "gemelos"], ["🐶", "Pet", "PET", "mascota"], ["👨‍👦", "Stepfather", "STEP-fa-der", "padrastro"], ["👴👵", "Grandparents", "GRAND-pe-rents", "abuelos"], ["🏡", "Relatives", "RÉ-la-tivs", "parientes"], ["👫", "Siblings", "SÍ-blings", "hermanos (en general)"]],
    errores: [["My parents are my father and my relatives", "Parents = papá y mamá; relatives = parientes", "¡Falso amigo! Parents no es “parientes”."], ["She is my mother. His name is Ana.", "Her name is Ana.", "Ella → her."], ["The car of my dad", "My dad's car", "Para posesión de personas se usa 's."]],
    kids: "Hagan un “álbum” con dibujos de cada familiar y su nombre en inglés (mom, dad, brother…).",
    teens: "Presenta a tu familia como en un video de YouTube de 30 segundos. Grábalo y míralo con todos.",
    adults: "Cuando hablen de parientes en casa, digan la palabra en inglés: “Tu tía —your aunt— llamó.”",
    fact: "“Siblings” es una palabra muy útil que no existe en español: significa hermanos y hermanas juntos, sin importar el género."
  },
  "A1-5": {
    grammar: { title: "There is / There are (hay)", html: `
      <table><tr><th>Uso</th><th>Inglés</th><th>Ejemplo</th></tr>
      <tr><td>Hay (uno)</td><td><b>There is</b> (There's)</td><td>There is a sofa in the living room.</td></tr>
      <tr><td>Hay (varios)</td><td><b>There are</b></td><td>There are two bedrooms.</td></tr>
      <tr><td>No hay</td><td><b>There isn't / There aren't</b></td><td>There isn't a garden.</td></tr>
      <tr><td>¿Hay…?</td><td><b>Is there / Are there…?</b></td><td>Is there a bathroom upstairs?</td></tr></table>
      <p>Y para decir dónde: <strong>in</strong> (dentro), <strong>on</strong> (encima), <strong>under</strong> (debajo), <strong>next to</strong> (al lado), <strong>behind</strong> (detrás), <strong>in front of</strong> (delante).</p>` },
    more: [["🪜", "Stairs", "STERS", "escaleras"], ["🧺", "Laundry", "LÓN-dri", "lavandería / ropa sucia"], ["🔑", "Key", "KII", "llave"], ["🛁", "Shower", "SHÁ-uer", "ducha"], ["🪞", "Mirror", "MÍ-rror", "espejo"], ["💡", "Lamp", "LAMP", "lámpara"], ["🧹", "Broom", "BRUUM", "escoba"], ["🗑️", "Trash can", "TRASH can", "bote de basura"]],
    errores: [["Have a sofa in the room", "There is a sofa in the room", "“Hay” = there is/are, no “have”."], ["There is two beds", "There are two beds", "Plural → there are."], ["The phone is in the table", "The phone is on the table", "Encima → on."]],
    kids: "Juega a esconder un peluche y da pistas: “It's under the bed! It's behind the sofa!”",
    teens: "Describe tu cuarto ideal en 5 frases con there is / there are.",
    adults: "Den las órdenes de la casa en inglés: “Close the door”, “Turn off the light”, “Take out the trash”.",
    fact: "En inglés americano se dice “apartment” y en británico “flat”. “Home” es tu hogar (sentimental); “house” es el edificio."
  },
  "A1-6": {
    grammar: { title: "Hacer preguntas con How much / How many", html: `
      <table><tr><th>Pregunta</th><th>Se usa con…</th><th>Ejemplo</th></tr>
      <tr><td><b>How many…?</b></td><td>cosas que se cuentan</td><td>How many brothers do you have?</td></tr>
      <tr><td><b>How much…?</b></td><td>cosas que no se cuentan</td><td>How much water do you drink?</td></tr>
      <tr><td><b>How much is it?</b></td><td>precio</td><td>How much is this shirt?</td></tr>
      <tr><td><b>How old…?</b></td><td>edad</td><td>How old is your grandma?</td></tr></table>
      <p>Los precios se dicen así: $12.50 = <em>twelve dollars and fifty cents</em> o, más rápido, <em>twelve fifty</em>.</p>` },
    more: [["💵", "Dollar", "DÁ-lar", "dólar"], ["🪙", "Cent", "SENT", "centavo"], ["💳", "Cash / Card", "CASH / CARD", "efectivo / tarjeta"], ["🛒", "Cheap", "CHIIP", "barato"], ["💎", "Expensive", "ex-PÉN-siv", "caro"], ["🔢", "Thousand", "ZÁU-sand", "mil"], ["🧾", "Change", "CHEINCH", "cambio / vuelto"]],
    errores: [["Fourty", "Forty", "Se escribe sin u."], ["Fifteen (queriendo decir 50)", "Fifty", "15 = fif-TIIN (fuerza al final), 50 = FÍF-ti (fuerza al principio)."], ["How much brothers?", "How many brothers?", "Cosas contables → many."]],
    kids: "Monten una tiendita con juguetes y billetes de papel. Él cobra en inglés.",
    teens: "Busca en internet el precio de 5 cosas que quieras y dilos en voz alta en inglés.",
    adults: "Digan en inglés cuánto gastaron en el súper: “We spent sixty-two dollars.”",
    fact: "Panamá usa el dólar estadounidense (junto al balboa), así que ¡los precios en inglés son los mismos que ven todos los días!"
  },
  "A1-7": {
    grammar: { title: "Preposiciones de tiempo: in, on, at", html: `
      <table><tr><th>Preposición</th><th>Se usa con…</th><th>Ejemplos</th></tr>
      <tr><td><b>in</b></td><td>meses, años, estaciones, partes del día</td><td>in May, in 2026, in the morning</td></tr>
      <tr><td><b>on</b></td><td>días y fechas</td><td>on Monday, on May 5th, on the weekend</td></tr>
      <tr><td><b>at</b></td><td>horas y momentos exactos</td><td>at 7 o'clock, at night, at noon</td></tr></table>
      <p>Las fechas se dicen con números ordinales: <em>first (1st), second (2nd), third (3rd), fourth (4th), fifth (5th)…</em> → <em>My birthday is on March <b>third</b>.</em></p>` },
    more: [["🌅", "Morning", "MÓR-ning", "mañana"], ["🌇", "Afternoon", "af-ter-NUUN", "tarde"], ["🌙", "Night", "NAIT", "noche"], ["📆", "Today / Tomorrow", "tu-DÉI / tu-MÓ-rrou", "hoy / mañana"], ["⏪", "Yesterday", "YÉS-ter-dei", "ayer"], ["🥇", "First", "FERST", "primero"], ["🥈", "Second", "SÉ-cond", "segundo"], ["🥉", "Third", "ZERD", "tercero"]],
    errores: [["In Monday", "On Monday", "Días → on."], ["On May", "In May", "Meses → in."], ["monday, january", "Monday, January", "Siempre con mayúscula."]],
    kids: "Canten la canción de los días de la semana cada mañana mientras desayunan.",
    teens: "Escribe tu horario de clases de la semana en inglés con on y at: “On Monday at 8, I have math.”",
    adults: "Pongan el calendario de la nevera en inglés y anoten citas: “Dentist on Thursday at 3.”",
    fact: "Los días vienen de dioses y astros: Sunday = día del Sol, Monday = día de la Luna (Moon), Saturday = día de Saturno."
  },
  "A1-8": {
    grammar: { title: "El verbo to be (ser / estar) — resumen del A1", html: `
      <table><tr><th>Afirmativo</th><th>Negativo</th><th>Pregunta</th></tr>
      <tr><td>I <b>am</b> (I'm)</td><td>I'm not</td><td>Am I…?</td></tr>
      <tr><td>You <b>are</b> (you're)</td><td>you aren't</td><td>Are you…?</td></tr>
      <tr><td>He / She / It <b>is</b> (he's)</td><td>he isn't</td><td>Is he…?</td></tr>
      <tr><td>We <b>are</b> (we're)</td><td>we aren't</td><td>Are we…?</td></tr>
      <tr><td>They <b>are</b> (they're)</td><td>they aren't</td><td>Are they…?</td></tr></table>
      <p>Con <strong>to be</strong> ya pueden decir nombre, edad, origen, profesión, estado de ánimo y dónde están las cosas. ¡Es el verbo más importante del inglés!</p>` },
    more: [["😊", "Happy", "JÁ-pi", "feliz"], ["😢", "Sad", "SAD", "triste"], ["😴", "Tired", "TÁI-erd", "cansado"], ["😋", "Hungry", "JÁN-gri", "con hambre"], ["🥵", "Hot / Cold", "JOT / COULD", "con calor / con frío"], ["😠", "Angry", "ÁN-gri", "enojado"], ["🤒", "Sick", "SIK", "enfermo"], ["😰", "Nervous", "NÉR-vus", "nervioso"]],
    errores: [["I have hungry", "I am hungry", "Hambre, frío, calor y edad van con “be”."], ["He are my brother", "He is my brother", "He/She/It → is."], ["Are you from Panama? — Yes, I'm.", "Yes, I am.", "En respuestas cortas no se contrae."]],
    kids: "Jueguen a hacer caras: uno pone cara de emoción y los demás adivinan en inglés: “You are sad!”",
    teens: "Haz un mini diario de una línea cada noche: “Today I am tired but happy.”",
    adults: "Pregúntense cada día al llegar a casa: “How are you today?” y respondan con una emoción nueva.",
    fact: "El inglés es el idioma más estudiado del mundo: hay más personas que lo hablan como segunda lengua que nativos."
  }
};
