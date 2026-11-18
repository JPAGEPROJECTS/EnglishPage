// Clases de inglés A2 para la familia. Mismo formato que a1/clases.js.
// El contenido extra (gramática, palabras extra, errores, consejos) se agrega a EXTRA al final.

const CLASES_A2 = [
  {
    n: 1, emoji: "⏰", title: "My daily routine", sub: "I wake up, I go to school… el presente simple",
    intro: "Cada uno cuenta su día en inglés: a qué hora se levanta, qué hace en la escuela o el trabajo y qué hace en la noche.",
    agenda: [["Repaso del A1: to be", "10 min"], ["Verbos de la rutina", "20 min"], ["Presente simple: I / he / she", "25 min"], ["🎮 Juegos de rutina", "25 min"], ["Mini test", "10 min"], ["Tarea", "10 min"]],
    vocab: [
      ["⏰", "Wake up", "UÉIK ap", "despertarse"], ["🛏️", "Get up", "GUET ap", "levantarse"], ["🚿", "Take a shower", "teik a SHÁ-uer", "bañarse"], ["🪥", "Brush my teeth", "brash mai TIIZ", "cepillarme los dientes"],
      ["👕", "Get dressed", "guet DREST", "vestirse"], ["🥣", "Have breakfast", "jav BREK-fast", "desayunar"], ["🚌", "Go to school", "gou tu SKUUL", "ir a la escuela"], ["💼", "Go to work", "gou tu UERK", "ir al trabajo"],
      ["🍽️", "Have lunch", "jav LANCH", "almorzar"], ["📚", "Do homework", "du JÓUM-uerk", "hacer la tarea"], ["📺", "Watch TV", "uach ti-VI", "ver televisión"], ["🍲", "Have dinner", "jav DÍ-ner", "cenar"],
      ["😴", "Go to bed", "gou tu BED", "acostarse"], ["🔁", "Every day", "É-vri dei", "todos los días"]
    ],
    phrases: [
      ["⏰", "I wake up at six o'clock.", "ai UÉIK ap at SIKS o-CLOK", "Me despierto a las seis."],
      ["🚌", "My brother goes to school at seven.", "mai BRÁ-der GOUS tu skuul at SÉ-ven", "Mi hermano va a la escuela a las siete.", "he/she → -s"],
      ["💼", "My dad works at night.", "mai DAD UERKS at NAIT", "Mi papá trabaja de noche.", "Papá"],
      ["🍳", "My mom cooks every day.", "mai MAM CUKS É-vri dei", "Mi mamá cocina todos los días.", "Mamá"],
      ["❓", "What time do you get up?", "uat TAIM du iu guet AP", "¿A qué hora te levantas?"],
      ["🚫", "I don't watch TV in the morning.", "ai DOUNT uach ti-VI in di MÓR-ning", "No veo televisión en la mañana."],
      ["❓", "Does she have breakfast?", "das shi jav BREK-fast", "¿Ella desayuna?"]
    ],
    tip: "<strong>La regla de oro:</strong> en presente, con <em>he, she, it</em> el verbo lleva <strong>-s</strong>: <em>I work → he work<b>s</b></em>. Para negar y preguntar se usa <em>do / does</em>.",
    games: [
      { title: "🎭 Mímica de la rutina", color: "var(--orange)", desc: "Uno hace la mímica de una acción y los demás adivinan en inglés.",
        steps: ["Uno actúa sin hablar (bañarse, cepillarse…).", "Los demás adivinan: “You take a shower!”", "Quien acierte dice la frase con he/she: “He takes a shower!”", "Ronda difícil: actuar dos acciones seguidas."] },
      { title: "🕐 El reloj de la familia", color: "var(--blue)", desc: "Dibujen un reloj grande y pongan qué hace cada uno a cada hora.",
        steps: ["Elijan 5 horas del día: 6:00, 7:00, 12:00, 6:00 pm, 9:00 pm.", "Cada uno dice: “At six, I wake up.”", "Luego hablan de otro: “At six, mom makes breakfast.”", "Comparen: ¿quién se levanta más temprano?"] }
    ],
    roleplay: { title: "🎭 Entrevista de rutina", lines: [["A", "What time do you wake up?"], ["B", "I wake up at six thirty."], ["A", "What do you have for breakfast?"], ["B", "I have eggs and coffee."], ["A", "When do you go to bed?"], ["B", "I go to bed at ten. And you?"]] },
    homework: [["📝", "Mi rutina", "Cada uno escribe 5 frases de su rutina con horas."], ["🗣️", "Narrar en voz alta", "Por la mañana, describan lo que hacen: “I'm brushing my teeth!”"], ["👨‍👩‍👦", "Rutina de otro", "Escriban 3 frases sobre la rutina de otro familiar (¡con -s!)."], ["⏰", "La hora", "Digan la hora en inglés cada vez que alguien pregunte."]],
    quiz: [
      { q: "My sister ___ to school at 7.", opts: ["go", "goes", "going"], a: 1 },
      { q: "“¿A qué hora te levantas?” =", opts: ["What time you get up?", "What time do you get up?", "What time does you get up?"], a: 1 },
      { q: "He ___ watch TV in the morning.", opts: ["don't", "doesn't", "isn't"], a: 1 },
      { q: "“Have breakfast” significa…", opts: ["almorzar", "desayunar", "cenar"], a: 1 },
      { q: "My dad ___ at night.", opts: ["work", "works", "working"], a: 1 }
    ],
    summary: "Aprendieron: 14 acciones de la rutina, el presente simple con -s en he/she y preguntas con do/does."
  },

  {
    n: 2, emoji: "🍔", title: "Food and drinks", sub: "I like, I don't like… en la cocina y el restaurante",
    intro: "Hablamos de comida: lo que nos gusta, lo que no, qué hay en la nevera y cómo pedir en un restaurante.",
    agenda: [["Repaso de la rutina", "10 min"], ["Comida y bebidas", "20 min"], ["Like / don't like · some / any", "20 min"], ["🎮 Restaurante en casa", "30 min"], ["Mini test", "10 min"], ["Tarea", "10 min"]],
    vocab: [
      ["🍞", "Bread", "BRED", "pan"], ["🥚", "Eggs", "EGS", "huevos"], ["🍗", "Chicken", "CHÍ-ken", "pollo"], ["🐟", "Fish", "FISH", "pescado"],
      ["🍚", "Rice", "RAIS", "arroz"], ["🫘", "Beans", "BIINS", "frijoles"], ["🥗", "Salad", "SÁ-lad", "ensalada"], ["🍌", "Banana", "ba-NÁ-na", "banano / guineo"],
      ["🥛", "Milk", "MILK", "leche"], ["🧃", "Juice", "YUUS", "jugo"], ["💧", "Water", "UÓ-ter", "agua"], ["☕", "Coffee", "CÓ-fi", "café"],
      ["🍰", "Dessert", "di-SÉRT", "postre"], ["🍕", "Pizza", "PÍT-sa", "pizza"]
    ],
    phrases: [
      ["😋", "I like chicken and rice.", "ai LAIK CHÍ-ken and RAIS", "Me gusta el arroz con pollo."],
      ["🤢", "I don't like fish.", "ai DOUNT laik FISH", "No me gusta el pescado."],
      ["❓", "Do you like pizza?", "du iu LAIK PÍT-sa", "¿Te gusta la pizza?"],
      ["🧊", "There is some milk in the fridge.", "der iz SAM MILK in di FRICH", "Hay leche en la nevera."],
      ["🍽️", "Can I have the menu, please?", "can ai jav di MÉ-niu, pliis", "¿Me da el menú, por favor?"],
      ["🙋", "I would like a chicken sandwich.", "ai UUD laik a CHÍ-ken SÁND-uich", "Quisiera un sándwich de pollo.", "Educado"],
      ["🧾", "The check, please.", "di CHEK, pliis", "La cuenta, por favor."]
    ],
    tip: "<strong>I would like</strong> (I'd like) es la forma educada de pedir, igual que “quisiera”. “I want” suena un poco brusco en un restaurante.",
    games: [
      { title: "🍽️ Restaurante en casa", color: "var(--orange)", desc: "Uno es el mesero, los demás clientes. Hagan un menú en inglés con precios.",
        steps: ["Escriban un menú: “Chicken and rice — $5”.", "Mesero: “Hello! What would you like?”", "Cliente: “I'd like… and a juice, please.”", "Al final: “The check, please!” y paguen en inglés."] },
      { title: "👅 ¿Te gusta o no?", color: "var(--green)", desc: "Ronda rápida de gustos.",
        steps: ["Uno nombra una comida en inglés: “Broccoli!”", "Todos responden con el pulgar y la frase: “I like broccoli!” / “I don't like broccoli!”", "Luego hablan de otro: “Mom likes fish.”", "Gana quien no se equivoque con el -s de likes."] }
    ],
    roleplay: { title: "🎭 En el restaurante", lines: [["A", "Good evening! Here is the menu."], ["B", "Thank you. I'd like the chicken with rice, please."], ["A", "Anything to drink?"], ["B", "An orange juice, please."], ["A", "Would you like a dessert?"], ["B", "No, thank you. Can I have the check, please?"]] },
    homework: [["🛒", "Lista del súper", "Escriban la lista de compras de la semana en inglés."], ["🍳", "Cocinar en inglés", "Mientras cocinan, nombren cada ingrediente en inglés."], ["❤️", "Gustos de la familia", "Cada uno escribe 3 cosas que le gustan y 3 que no."], ["📋", "Menú", "El de 17 hace un menú de restaurante en inglés con precios."]],
    quiz: [
      { q: "“No me gusta el pescado” =", opts: ["I no like fish", "I don't like fish", "I doesn't like fish"], a: 1 },
      { q: "Forma educada de pedir:", opts: ["I want pizza", "Give me pizza", "I'd like a pizza, please"], a: 2 },
      { q: "“Beans” son…", opts: ["frijoles", "arvejas", "papas"], a: 0 },
      { q: "My brother ___ pizza.", opts: ["like", "likes", "liking"], a: 1 },
      { q: "“The check, please” se dice para…", opts: ["pedir el menú", "pedir la cuenta", "pedir agua"], a: 1 }
    ],
    summary: "Aprendieron: 14 comidas y bebidas, expresar gustos y pedir en un restaurante con I'd like."
  },

  {
    n: 3, emoji: "👕", title: "Clothes and shopping", sub: "This, that, these, those… comprar ropa",
    intro: "Vamos de compras en inglés: nombres de la ropa, tallas, precios y cómo decir “este” o “ese”.",
    agenda: [["Repaso de comida", "10 min"], ["La ropa", "20 min"], ["This / that / these / those", "20 min"], ["🎮 La tienda de ropa", "30 min"], ["Mini test", "10 min"], ["Tarea", "10 min"]],
    vocab: [
      ["👕", "T-shirt", "TI-shert", "camiseta"], ["👔", "Shirt", "SHERT", "camisa"], ["👖", "Pants / Jeans", "PANTS / YIINS", "pantalón / jeans"], ["🩳", "Shorts", "SHORTS", "pantalón corto"],
      ["👗", "Dress", "DRES", "vestido"], ["👟", "Sneakers", "SNÍ-kers", "zapatillas"], ["👞", "Shoes", "SHUUS", "zapatos"], ["🧦", "Socks", "SOKS", "medias"],
      ["🧥", "Jacket", "YÁ-ket", "chaqueta"], ["🧢", "Cap", "CAP", "gorra"], ["👜", "Bag", "BAG", "bolso"], ["📏", "Size", "SAIS", "talla"],
      ["🏷️", "Sale", "SEIL", "rebaja / oferta"], ["🪞", "Fitting room", "FÍ-ting rum", "probador"]
    ],
    phrases: [
      ["👉", "I like this T-shirt.", "ai laik DIS TI-shert", "Me gusta esta camiseta.", "cerca, uno"],
      ["👈", "How much is that jacket?", "jau MACH iz DAT YÁ-ket", "¿Cuánto cuesta esa chaqueta?", "lejos, uno"],
      ["👟", "These sneakers are cool.", "DIIS SNÍ-kers ar CUUL", "Estas zapatillas son geniales.", "cerca, varios"],
      ["🧦", "Those socks are cheap.", "DOUS SOKS ar CHIIP", "Esas medias son baratas.", "lejos, varios"],
      ["📏", "What size are you?", "uat SAIS ar iu", "¿Qué talla usas?"],
      ["🪞", "Can I try it on?", "can ai TRAI it ON", "¿Me lo puedo probar?"],
      ["👍", "It fits me. I'll take it!", "it FITS mi. ail TEIK it", "Me queda bien. ¡Me lo llevo!"]
    ],
    tip: "<strong>Los pantalones son plural:</strong> en inglés <em>pants, jeans, shorts</em> siempre van en plural: “These jeans <u>are</u> nice”, aunque sea uno solo.",
    games: [
      { title: "🛍️ La tienda de ropa", color: "var(--pink)", desc: "Usen la ropa de la casa para montar una tienda.",
        steps: ["Pongan ropa sobre la cama con precios en papelitos.", "Cliente: “How much is this shirt?”", "Vendedor: “It's fifteen dollars. What size are you?”", "Cliente: “Can I try it on?” … “I'll take it!”"] },
      { title: "👀 ¿Qué llevo puesto?", color: "var(--purple)", desc: "Juego de memoria y descripción.",
        steps: ["Uno se para frente a los demás 10 segundos y luego sale del cuarto.", "Los demás describen de memoria: “He's wearing blue jeans and a black cap.”", "Vuelve y comprueban.", "Gana quien recuerde más prendas con su color."] }
    ],
    roleplay: { title: "🎭 En la tienda", lines: [["A", "Hi! Can I help you?"], ["B", "Yes. How much are these sneakers?"], ["A", "They're forty dollars. They're on sale!"], ["B", "Great! Can I try them on? I'm a size nine."], ["A", "Sure. The fitting room is over there."], ["B", "They fit me. I'll take them!"]] },
    homework: [["👕", "Mi ropa", "Cada mañana digan qué llevan puesto: “I'm wearing…”"], ["🏷️", "Etiquetas", "Busquen la talla en las etiquetas de su ropa (S, M, L) y léanla en inglés."], ["🛒", "Compras en línea", "El de 17 busca en una tienda en línea en inglés 3 prendas y anota precios."], ["🎨", "Diseño", "El de 9 dibuja su outfit favorito y escribe el nombre de cada prenda."]],
    quiz: [
      { q: "___ shoes over there are nice. (lejos, varios)", opts: ["This", "These", "Those"], a: 2 },
      { q: "“¿Me lo puedo probar?” =", opts: ["Can I try it on?", "Can I take it?", "Can I wear?"], a: 0 },
      { q: "“Socks” son…", opts: ["zapatos", "medias", "camisas"], a: 1 },
      { q: "My jeans ___ new.", opts: ["is", "are", "am"], a: 1 },
      { q: "“Size” significa…", opts: ["precio", "talla", "oferta"], a: 1 }
    ],
    summary: "Aprendieron: 14 prendas, this/that/these/those y frases para comprar ropa."
  },

  {
    n: 4, emoji: "💼", title: "Jobs and work", sub: "What do you do? He's a security guard…",
    intro: "Hablamos de trabajos: qué hace cada uno de la familia, qué quieren ser de grandes y cómo describir un trabajo.",
    agenda: [["Repaso de ropa", "10 min"], ["Profesiones", "20 min"], ["What do you do? · a / an", "20 min"], ["🎮 ¿Quién soy?", "25 min"], ["Mini test", "10 min"], ["Tarea", "15 min"]],
    vocab: [
      ["👮", "Security guard", "se-KIÚ-ri-ti gard", "guardia de seguridad"], ["🏠", "Homemaker", "JÓUM-mei-ker", "ama/amo de casa"], ["🎒", "Student", "STÚ-dent", "estudiante"], ["👩‍🏫", "Teacher", "TÍ-cher", "maestro/a"],
      ["👨‍⚕️", "Doctor", "DÓC-tor", "doctor"], ["👩‍⚕️", "Nurse", "NERS", "enfermera"], ["👨‍🍳", "Cook / Chef", "CUK / SHEF", "cocinero / chef"], ["🚕", "Driver", "DRÁI-ver", "conductor"],
      ["💻", "Engineer", "en-yi-NÍIR", "ingeniero"], ["👮‍♂️", "Police officer", "po-LIIS Ó-fi-ser", "policía"], ["🧑‍🔧", "Mechanic", "me-CÁ-nik", "mecánico"], ["🧑‍💼", "Boss", "BOS", "jefe"],
      ["🏢", "Office", "Ó-fis", "oficina"], ["💰", "Salary", "SÁ-la-ri", "salario"]
    ],
    phrases: [
      ["❓", "What do you do?", "uat du iu DU", "¿A qué te dedicas?", "¡Muy común!"],
      ["👮", "I'm a security guard.", "aim a se-KIÚ-ri-ti gard", "Soy guardia de seguridad.", "Papá"],
      ["🏠", "I'm a homemaker. I take care of the family.", "aim a JÓUM-mei-ker. ai teik KER ov di FÁ-mi-li", "Soy ama de casa. Cuido a la familia.", "Mamá"],
      ["🎒", "I'm a student. I'm in fourth grade.", "aim a STÚ-dent. aim in FORZ greid", "Soy estudiante. Estoy en cuarto grado.", "Hermano menor"],
      ["🚀", "I want to be an engineer.", "ai uant tu bi an en-yi-NÍIR", "Quiero ser ingeniero.", "Hermano mayor"],
      ["🕐", "He works from 7 pm to 7 am.", "ji UERKS from SÉ-ven pi-em tu SÉ-ven ei-em", "Él trabaja de 7 p. m. a 7 a. m."],
      ["❤️", "I like my job.", "ai laik mai YOB", "Me gusta mi trabajo."]
    ],
    tip: "<strong>A / an con profesiones:</strong> en inglés se pone artículo antes de la profesión: “I'm <u>a</u> teacher”, “She's <u>an</u> engineer” (an antes de sonido de vocal). En español no: “Soy maestro”.",
    games: [
      { title: "🕵️ ¿Quién soy?", color: "var(--blue)", desc: "Adivinar profesiones con preguntas de sí o no.",
        steps: ["Uno piensa en una profesión.", "Los demás preguntan: “Do you work in an office?” “Do you wear a uniform?”", "Responde solo “Yes, I do” / “No, I don't”.", "Quien adivine: “You are a doctor!”"] },
      { title: "🌟 Mi trabajo soñado", color: "var(--purple)", desc: "Cada uno cuenta qué quiere ser o qué le gusta de su trabajo.",
        steps: ["Dibujen su trabajo soñado.", "Preséntenlo: “I want to be a… because I like…”", "Los papás cuentan qué hacen en su trabajo.", "Hagan preguntas: “Where do you work?”"] }
    ],
    roleplay: { title: "🎭 Conociendo a alguien", lines: [["A", "Nice to meet you! What do you do?"], ["B", "I'm a security guard. I work at a bank."], ["A", "Do you work at night?"], ["B", "Yes, I do. And you?"], ["A", "I'm a nurse. I work at the hospital."], ["B", "That's a great job!"]] },
    homework: [["👪", "Trabajos de la familia", "Escriban qué hace cada familiar: “My uncle is a driver.”"], ["🌟", "Mi sueño", "Cada uno escribe 3 frases sobre lo que quiere ser y por qué."], ["📺", "En la tele", "Cuando vean una serie, nombren en inglés las profesiones que aparecen."], ["🎤", "Entrevista", "El de 17 entrevista a papá o mamá sobre su trabajo en inglés."]],
    quiz: [
      { q: "“¿A qué te dedicas?” =", opts: ["What are you doing?", "What do you do?", "What is your job do?"], a: 1 },
      { q: "She is ___ engineer.", opts: ["a", "an", "—"], a: 1 },
      { q: "“Nurse” es…", opts: ["enfermera", "doctora", "maestra"], a: 0 },
      { q: "“I want to be a doctor” =", opts: ["Soy doctor", "Quiero ser doctor", "Quiero un doctor"], a: 1 },
      { q: "My dad ___ at night.", opts: ["work", "works", "is work"], a: 1 }
    ],
    summary: "Aprendieron: 14 profesiones, preguntar a qué se dedica alguien y hablar de trabajos y sueños."
  },

  {
    n: 5, emoji: "🏙️", title: "My town", sub: "Places, directions and can / can't",
    intro: "Salimos de la casa: lugares de la ciudad, cómo dar direcciones y cómo decir lo que se puede o no se puede hacer.",
    agenda: [["Repaso de trabajos", "10 min"], ["Lugares de la ciudad", "20 min"], ["Direcciones", "20 min"], ["Can / can't", "15 min"], ["🎮 Mapa del barrio", "20 min"], ["Mini test y tarea", "15 min"]],
    vocab: [
      ["🏫", "School", "SKUUL", "escuela"], ["🏥", "Hospital", "JÓS-pi-tal", "hospital"], ["🛒", "Supermarket", "SU-per-mar-ket", "supermercado"], ["🏦", "Bank", "BANK", "banco"],
      ["💊", "Pharmacy", "FÁR-ma-si", "farmacia"], ["🌳", "Park", "PARK", "parque"], ["⛪", "Church", "CHERCH", "iglesia"], ["🚏", "Bus stop", "BAS stop", "parada de bus"],
      ["🏬", "Mall", "MOL", "centro comercial"], ["🍽️", "Restaurant", "RÉS-to-rant", "restaurante"], ["⬅️", "Turn left", "tern LEFT", "gira a la izquierda"], ["➡️", "Turn right", "tern RAIT", "gira a la derecha"],
      ["⬆️", "Go straight", "gou STREIT", "sigue derecho"], ["🔁", "Corner", "CÓR-ner", "esquina"]
    ],
    phrases: [
      ["❓", "Excuse me, where is the bank?", "ex-KIÚS mi, uer iz di BANK", "Disculpe, ¿dónde está el banco?"],
      ["⬆️", "Go straight and turn left.", "gou STREIT and tern LEFT", "Siga derecho y gire a la izquierda."],
      ["📍", "It's next to the pharmacy.", "its NEXT tu di FÁR-ma-si", "Está al lado de la farmacia."],
      ["📍", "It's across from the park.", "its a-CRÓS from di PARK", "Está frente al parque."],
      ["🚶", "Is it far?", "iz it FAR", "¿Está lejos?"],
      ["✅", "I can swim, but I can't skate.", "ai can SUIM, bat ai CANT skeit", "Sé nadar, pero no sé patinar."],
      ["🚫", "You can't park here.", "iu CANT park JIIR", "No puede estacionar aquí."]
    ],
    tip: "<strong>Can</strong> no cambia nunca y va seguido del verbo sin “to”: <em>He can swim</em> (no “he cans”, no “can to swim”). Sirve para habilidad (“sé”), permiso (“puedo”) y posibilidad.",
    games: [
      { title: "🗺️ Mapa del barrio", color: "var(--green)", desc: "Dibujen el barrio con sus lugares y practiquen direcciones.",
        steps: ["Dibujen calles y lugares: school, park, supermarket…", "Pongan un muñequito en la casa.", "Uno da direcciones: “Go straight, turn right…”", "El otro mueve el muñeco y dice dónde llegó."] },
      { title: "🤸 ¿Puedes o no?", color: "var(--orange)", desc: "Retos de habilidades.",
        steps: ["Uno pregunta: “Can you touch your toes?”", "El otro intenta y responde: “Yes, I can!” o “No, I can't!”", "Hagan una lista: “Dad can… Mom can't…”", "Ronda final: cosas imposibles: “Can you fly?” 😄"] }
    ],
    roleplay: { title: "🎭 Pidiendo direcciones", lines: [["A", "Excuse me, where is the supermarket?"], ["B", "Go straight two blocks and turn right."], ["A", "Is it far?"], ["B", "No, it's five minutes on foot. It's next to the bank."], ["A", "Thank you very much!"], ["B", "You're welcome!"]] },
    homework: [["🚶", "Paseo en inglés", "En una caminata, nombren en inglés los lugares que ven."], ["🗺️", "Mapa", "Peguen el mapa del barrio en la pared."], ["📝", "Puedo / no puedo", "Cada uno escribe 3 cosas que puede y 3 que no puede hacer."], ["📱", "Google Maps", "El de 17 pone Google Maps en inglés y sigue una ruta."]],
    quiz: [
      { q: "“Gire a la derecha” =", opts: ["Turn left", "Turn right", "Go straight"], a: 1 },
      { q: "She ___ swim very well.", opts: ["can", "cans", "can to"], a: 0 },
      { q: "“Next to” significa…", opts: ["frente a", "al lado de", "detrás de"], a: 1 },
      { q: "“Pharmacy” es…", opts: ["farmacia", "fábrica", "parque"], a: 0 },
      { q: "“No sé patinar” =", opts: ["I can't skate", "I don't can skate", "I no skate"], a: 0 }
    ],
    summary: "Aprendieron: 14 lugares y direcciones, preposiciones de lugar y el verbo can / can't."
  },

  {
    n: 6, emoji: "⚽", title: "Free time and hobbies", sub: "I'm playing… · always, usually, never",
    intro: "Hablamos de lo que nos gusta hacer en el tiempo libre, qué estamos haciendo ahora y con qué frecuencia hacemos las cosas.",
    agenda: [["Repaso de la ciudad", "10 min"], ["Hobbies y deportes", "20 min"], ["Presente continuo (-ing)", "20 min"], ["Always / never", "15 min"], ["🎮 Juegos", "20 min"], ["Mini test y tarea", "15 min"]],
    vocab: [
      ["⚽", "Play soccer", "plei SÓ-ker", "jugar fútbol"], ["🎮", "Play video games", "plei VÍ-di-o geims", "jugar videojuegos"], ["🎸", "Play the guitar", "plei di gui-TAR", "tocar la guitarra"], ["📖", "Read", "RIID", "leer"],
      ["🎨", "Draw", "DRO", "dibujar"], ["🏊", "Swim", "SUIM", "nadar"], ["🚴", "Ride a bike", "raid a BAIK", "montar bicicleta"], ["💃", "Dance", "DANS", "bailar"],
      ["🎵", "Listen to music", "LÍ-sen tu MIÚ-sik", "escuchar música"], ["🍳", "Cook", "CUK", "cocinar"], ["🎬", "Watch movies", "uach MÚ-vis", "ver películas"], ["🔁", "Always", "ÓL-ueis", "siempre"],
      ["🔂", "Usually / Sometimes", "IÚ-shua-li / SAM-taims", "normalmente / a veces"], ["🚫", "Never", "NÉ-ver", "nunca"]
    ],
    phrases: [
      ["❓", "What do you do in your free time?", "uat du iu DU in ior FRII taim", "¿Qué haces en tu tiempo libre?"],
      ["⚽", "I usually play soccer on Saturdays.", "ai IÚ-shua-li plei SÓ-ker on SÁ-ter-deis", "Normalmente juego fútbol los sábados."],
      ["🎮", "My brother is playing video games now.", "mai BRÁ-der iz PLÉI-ing VÍ-di-o geims NAU", "Mi hermano está jugando videojuegos ahora.", "Ahora → -ing"],
      ["🍳", "Mom is cooking dinner.", "MAM iz CÚ-king DÍ-ner", "Mamá está cocinando la cena."],
      ["🚫", "I never get up late.", "ai NÉ-ver guet ap LEIT", "Nunca me levanto tarde."],
      ["❤️", "I love dancing.", "ai LAV DÁN-sing", "Me encanta bailar.", "love/like + -ing"],
      ["🤝", "Do you want to play with me?", "du iu UANT tu plei uiz MI", "¿Quieres jugar conmigo?"]
    ],
    tip: "<strong>Dos presentes:</strong> <em>I play soccer</em> = juego fútbol (en general, costumbre). <em>I'm playing soccer</em> = estoy jugando (ahora mismo). Las palabras <em>always, usually, never</em> van antes del verbo: “I <u>always</u> read.”",
    games: [
      { title: "📸 ¿Qué está haciendo?", color: "var(--blue)", desc: "Fotos y mímica para practicar el -ing.",
        steps: ["Uno actúa una acción en silencio.", "Los demás preguntan: “Are you swimming?”", "Responde: “Yes, I am!” / “No, I'm not!”", "Gana quien adivine con la frase completa: “He's riding a bike!”"] },
      { title: "📊 Encuesta familiar", color: "var(--green)", desc: "Una encuesta de hobbies con always, sometimes, never.",
        steps: ["Hagan una tabla con 6 actividades.", "Pregunten a cada uno: “How often do you read?”", "Respuestas: “I always… / I sometimes… / I never…”", "Presenten los resultados: “Dad never plays video games!”"] }
    ],
    roleplay: { title: "🎭 Llamada a un amigo", lines: [["A", "Hi! What are you doing?"], ["B", "I'm watching a movie. And you?"], ["A", "I'm listening to music. Do you want to play soccer later?"], ["B", "Sure! I always play on Saturdays."], ["A", "Great! See you at the park at four."], ["B", "OK, see you!"]] },
    homework: [["📸", "Fotos con -ing", "Tomen fotos de la familia haciendo cosas y escriban: “Mom is reading.”"], ["📊", "Mi semana", "Cada uno escribe con qué frecuencia hace 5 cosas (always, sometimes, never)."], ["🎵", "Canción", "Escuchen una canción en inglés que les guste y busquen la letra."], ["🗣️", "Narrador", "Durante el día, uno narra lo que hacen los demás: “Dad is sleeping!”"]],
    quiz: [
      { q: "Look! The baby ___ .", opts: ["sleeps", "is sleeping", "sleep"], a: 1 },
      { q: "“Nunca” =", opts: ["Always", "Sometimes", "Never"], a: 2 },
      { q: "I ___ play soccer on Sundays. (costumbre)", opts: ["usually", "am usually", "usually am"], a: 0 },
      { q: "“Ride a bike” es…", opts: ["montar bicicleta", "manejar carro", "caminar"], a: 0 },
      { q: "“I love ___” (bailar)", opts: ["dance", "dancing", "to dancing"], a: 1 }
    ],
    summary: "Aprendieron: 14 hobbies, el presente continuo (-ing) y adverbios de frecuencia."
  },

  {
    n: 7, emoji: "📸", title: "Last weekend", sub: "I went, I played, I saw… el pasado simple",
    intro: "Contamos qué hicimos: el fin de semana, las vacaciones o ayer. Aprendemos el pasado con -ed y los verbos irregulares más usados.",
    agenda: [["Repaso de hobbies", "10 min"], ["Pasado regular: -ed", "20 min"], ["Pasado irregular", "25 min"], ["🎮 Historias en cadena", "25 min"], ["Mini test", "10 min"], ["Tarea", "10 min"]],
    vocab: [
      ["⚽", "Played", "PLEID", "jugué / jugó"], ["📺", "Watched", "UACHT", "vi / vio (TV)"], ["🍳", "Cooked", "CUKT", "cociné / cocinó"], ["📞", "Called", "COLD", "llamé / llamó"],
      ["🚶", "Went", "UENT", "fui / fue"], ["🍽️", "Ate", "EIT", "comí / comió"], ["🥤", "Drank", "DRANK", "bebí / bebió"], ["👀", "Saw", "SO", "vi / vio"],
      ["🏠", "Had", "JAD", "tuve / tuvo"], ["🛍️", "Bought", "BOT", "compré / compró"], ["😴", "Slept", "SLEPT", "dormí / durmió"], ["📅", "Yesterday", "YÉS-ter-dei", "ayer"],
      ["⏪", "Last week", "last UIIK", "la semana pasada"], ["🕐", "Ago", "a-GÓU", "hace (tiempo)"]
    ],
    phrases: [
      ["🏖️", "Last weekend we went to the beach.", "last UIK-end ui UENT tu di BIICH", "El fin de semana pasado fuimos a la playa."],
      ["⚽", "I played soccer with my friends.", "ai PLEID SÓ-ker uiz mai FRENDS", "Jugué fútbol con mis amigos."],
      ["🍗", "We ate chicken and rice.", "ui EIT CHÍ-ken and RAIS", "Comimos arroz con pollo."],
      ["❓", "What did you do yesterday?", "uat did iu DU YÉS-ter-dei", "¿Qué hiciste ayer?"],
      ["🚫", "I didn't go to school.", "ai DÍ-dent gou tu SKUUL", "No fui a la escuela.", "didn't + verbo normal"],
      ["❓", "Did you have fun?", "did iu jav FAN", "¿Te divertiste?"],
      ["😊", "Yes, I had a great time!", "ies, ai JAD a GREIT taim", "¡Sí, la pasé genial!"]
    ],
    tip: "<strong>El pasado es igual para todos:</strong> I played, he played, they played (¡sin -s!). Para negar y preguntar se usa <em>did</em> + verbo normal: “I <u>didn't go</u>”, “<u>Did</u> you <u>see</u>?” (no “did you saw”).",
    games: [
      { title: "📖 Historia en cadena", color: "var(--purple)", desc: "Inventen una historia del fin de semana entre todos.",
        steps: ["El primero dice una frase en pasado: “On Saturday, I went to the park.”", "El siguiente continúa: “Then I saw a dog.”", "Cada uno agrega una frase.", "Cuando alguien se equivoca con el pasado, empieza otra historia."] },
      { title: "🃏 Memoria de verbos", color: "var(--orange)", desc: "Tarjetas con verbo presente y pasado.",
        steps: ["Escriban 10 tarjetas con presente (go, eat, see…) y 10 con pasado (went, ate, saw…).", "Pónganlas boca abajo.", "Volteen dos: si son pareja (go–went), se las quedan.", "Deben decir una frase con el pasado para ganar la pareja."] }
    ],
    roleplay: { title: "🎭 El lunes en la escuela", lines: [["A", "Hi! How was your weekend?"], ["B", "It was great! I went to my grandma's house."], ["A", "What did you do there?"], ["B", "We cooked, ate a lot and played games."], ["A", "Did you watch the soccer game?"], ["B", "No, I didn't. I slept early!"]] },
    homework: [["📔", "Diario del fin de semana", "Cada uno escribe 5 frases sobre su fin de semana en pasado."], ["🃏", "Verbos irregulares", "Aprendan 10 verbos irregulares: go-went, eat-ate, see-saw, have-had, buy-bought…"], ["🗣️", "En la cena", "Pregunten cada noche: “What did you do today?”"], ["📷", "Fotos", "Elijan una foto de vacaciones y cuenten qué pasó ese día."]],
    quiz: [
      { q: "Pasado de “go”:", opts: ["goed", "went", "gone"], a: 1 },
      { q: "“¿Qué hiciste ayer?” =", opts: ["What did you do yesterday?", "What you did yesterday?", "What did you did yesterday?"], a: 0 },
      { q: "She ___ to the party. (no fue)", opts: ["didn't went", "didn't go", "don't go"], a: 1 },
      { q: "Pasado de “eat”:", opts: ["eated", "ate", "eaten"], a: 1 },
      { q: "“Last weekend” significa…", opts: ["el próximo fin de semana", "el fin de semana pasado", "este fin de semana"], a: 1 }
    ],
    summary: "Aprendieron: el pasado simple con -ed, 7 verbos irregulares muy usados y preguntas con did."
  },

  {
    n: 8, emoji: "🚀", title: "Plans and dreams", sub: "I'm going to… · Repaso del A2",
    intro: "Última clase del A2: hablamos de planes y sueños para el futuro y repasamos todo el nivel con un gran concurso.",
    agenda: [["Going to: planes", "20 min"], ["Will: predicciones y promesas", "15 min"], ["Repaso del A2", "20 min"], ["🎮 Gran concurso", "30 min"], ["Test final", "15 min"]],
    vocab: [
      ["📅", "Tomorrow", "tu-MÓ-rrou", "mañana"], ["🗓️", "Next week", "next UIIK", "la próxima semana"], ["🎆", "Next year", "next IIR", "el próximo año"], ["✈️", "Travel", "TRÁ-vel", "viajar"],
      ["🎓", "Graduate", "GRÁ-yu-eit", "graduarse"], ["📖", "Learn", "LERN", "aprender"], ["💰", "Save money", "seiv MÁ-ni", "ahorrar dinero"], ["🏡", "Move", "MUUV", "mudarse"],
      ["🌟", "Dream", "DRIIM", "sueño / soñar"], ["🎯", "Goal", "GOUL", "meta"], ["🤞", "Hope", "JOUP", "esperar (tener esperanza)"], ["🔮", "Future", "FIÚ-cher", "futuro"],
      ["📝", "Plan", "PLAN", "plan"], ["🏆", "Win", "UIN", "ganar"]
    ],
    phrases: [
      ["🏖️", "We're going to travel in December.", "uir GÓU-ing tu TRÁ-vel in di-SÉM-ber", "Vamos a viajar en diciembre.", "Plan decidido"],
      ["🎓", "I'm going to graduate next year.", "aim GÓU-ing tu GRÁ-yu-eit next IIR", "Me voy a graduar el próximo año.", "Hermano mayor"],
      ["⚽", "I'm going to be a soccer player!", "aim GÓU-ing tu bi a SÓ-ker PLÉI-er", "¡Voy a ser futbolista!", "Hermano menor"],
      ["🤝", "I will help you.", "ai uil JELP iu", "Te ayudaré.", "Promesa"],
      ["🌧️", "I think it will rain tomorrow.", "ai ZINK it uil REIN tu-MÓ-rrou", "Creo que lloverá mañana.", "Predicción"],
      ["❓", "What are you going to do this weekend?", "uat ar iu GÓU-ing tu du dis UIK-end", "¿Qué vas a hacer este fin de semana?"],
      ["🌟", "My dream is to visit New York.", "mai DRIIM iz tu VÍ-sit niu IORK", "Mi sueño es visitar Nueva York."]
    ],
    tip: "<strong>Going to vs. will:</strong> <em>going to</em> = un plan que ya decidiste (“I'm going to study tonight”). <em>will</em> = decisiones del momento, promesas y predicciones (“I'll call you later”, “It will be fun”).",
    games: [
      { title: "🔮 La bola de cristal", color: "var(--purple)", desc: "Predicciones divertidas para cada miembro de la familia.",
        steps: ["Uno sostiene una “bola de cristal” (una pelota).", "Hace una predicción para alguien: “In 10 years, you will be a famous chef!”", "La persona responde: “Yes! / No way!”", "Pasen la bola al siguiente."] },
      { title: "🏆 Concurso del A2", color: "var(--orange)", desc: "Dos equipos y preguntas de todo el nivel.",
        steps: ["Ronda 1: rutina con -s (“What does dad do in the morning?”).", "Ronda 2: pasado (“go → ?”, “eat → ?”).", "Ronda 3: ¿qué estás haciendo? con mímica.", "Ronda 4: cada uno cuenta su plan para el próximo año en 3 frases."] }
    ],
    roleplay: { title: "🎭 Planes de vacaciones", lines: [["A", "What are you going to do on vacation?"], ["B", "We're going to visit my aunt in Chiriquí."], ["A", "That's cool! How are you going to get there?"], ["B", "We're going to take the bus."], ["A", "I think you will have a great time!"], ["B", "Thanks! I'll send you photos!"]] },
    homework: [["🎯", "Metas", "Cada uno escribe 3 metas para el próximo año con going to."], ["🏅", "Diploma A2", "Hagan un diploma de “English Level A2” para cada uno."], ["🎬", "Película sin pausa", "Vean una película en inglés con subtítulos en inglés."], ["🔁", "Repaso libre", "Repitan sus 3 juegos favoritos del nivel."]],
    quiz: [
      { q: "“Vamos a viajar” (plan) =", opts: ["We will travel", "We're going to travel", "We travel going"], a: 1 },
      { q: "Promesa: “I ___ call you later.”", opts: ["will", "am going", "going to"], a: 0 },
      { q: "Pasado de “buy”:", opts: ["buyed", "bought", "brought"], a: 1 },
      { q: "My sister ___ to music every day.", opts: ["listen", "listens", "is listen"], a: 1 },
      { q: "Look! It ___ .", opts: ["rains", "is raining", "rain"], a: 1 },
      { q: "“Save money” significa…", opts: ["gastar dinero", "ahorrar dinero", "ganar dinero"], a: 1 },
      { q: "Did you ___ the movie?", opts: ["saw", "see", "seen"], a: 1 },
      { q: "She can ___ very well.", opts: ["swims", "swim", "swimming"], a: 1 }
    ],
    summary: "¡Completaron el nivel A2! Saben hablar de la rutina, comida, ropa, trabajos, la ciudad, hobbies, el pasado y el futuro."
  }
];

Object.assign(EXTRA, {
  "A2-1": {
    grammar: { title: "Presente simple: la -s y do / does", html: `
      <table><tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
      <tr><td>Afirmativo</td><td>I <b>work</b></td><td>He <b>works</b></td></tr>
      <tr><td>Negativo</td><td>I <b>don't</b> work</td><td>He <b>doesn't</b> work</td></tr>
      <tr><td>Pregunta</td><td><b>Do</b> you work?</td><td><b>Does</b> he work?</td></tr></table>
      <p>Ojo: con <em>doesn't</em> y <em>does</em> el verbo pierde la -s: “He doesn't work<s>s</s>”.</p>
      <p>Verbos que terminan en o, s, sh, ch, x → <b>-es</b>: go → goes, watch → watches. Consonante + y → <b>-ies</b>: study → studies. Y <b>have → has</b>.</p>` },
    more: [["⏱️", "Early / Late", "ÉR-li / LEIT", "temprano / tarde"], ["🌅", "In the morning", "in di MÓR-ning", "en la mañana"], ["🧹", "Do the chores", "du di CHORS", "hacer los quehaceres"], ["🐕", "Walk the dog", "uok di DOG", "pasear al perro"], ["🛌", "Take a nap", "teik a NAP", "tomar una siesta"], ["⏰", "Alarm clock", "a-LARM clok", "despertador"]],
    errores: [["He work at night", "He works at night", "He/she/it → -s."], ["Does he works?", "Does he work?", "Con does, el verbo sin -s."], ["I no watch TV", "I don't watch TV", "Negativo con don't."]],
    kids: "Hagan un cartel con la rutina del pequeño con dibujos y horas en inglés.",
    teens: "Graba un “Day in my life” de 1 minuto narrando en inglés tu rutina.",
    adults: "Digan en voz alta lo que hacen al llegar del trabajo: “I take off my shoes, I have dinner…”",
    fact: "En inglés americano se dice “I take a shower”; en británico es común “I have a shower”. ¡Las dos están bien!"
  },
  "A2-2": {
    grammar: { title: "Some / any · contables e incontables", html: `
      <table><tr><th>Uso</th><th>Palabra</th><th>Ejemplo</th></tr>
      <tr><td>Afirmativo</td><td><b>some</b></td><td>There is <b>some</b> milk. I have <b>some</b> eggs.</td></tr>
      <tr><td>Negativo</td><td><b>any</b></td><td>There isn't <b>any</b> bread.</td></tr>
      <tr><td>Pregunta</td><td><b>any</b></td><td>Are there <b>any</b> bananas?</td></tr>
      <tr><td>Ofrecer / pedir</td><td><b>some</b></td><td>Would you like <b>some</b> coffee?</td></tr></table>
      <p><b>Contables</b> (se cuentan: apples, eggs) → many. <b>Incontables</b> (no se cuentan: water, rice, bread) → much, y nunca llevan -s.</p>` },
    more: [["🧂", "Salt / Pepper", "SOLT / PÉ-per", "sal / pimienta"], ["🧈", "Butter", "BÁ-ter", "mantequilla"], ["🍽️", "Plate", "PLEIT", "plato"], ["🥄", "Spoon / Fork / Knife", "SPUUN / FORK / NAIF", "cuchara / tenedor / cuchillo"], ["🥤", "Glass", "GLAS", "vaso"], ["😋", "Delicious", "di-LÍ-shus", "delicioso"], ["🌶️", "Spicy", "SPÁI-si", "picante"]],
    errores: [["Two breads", "Two pieces of bread", "Bread es incontable."], ["I want an water", "I want some water / a glass of water", "Water no lleva a/an."], ["How many water?", "How much water?", "Incontable → much."]],
    kids: "Que el pequeño ayude a poner la mesa nombrando: plate, fork, spoon, glass.",
    teens: "Busca una receta fácil en YouTube en inglés y cocínala con la familia.",
    adults: "Escriban la lista del súper en inglés y léanla en la tienda.",
    fact: "En EE. UU. “chips” son las papitas de bolsa y “fries” las papas fritas; en Reino Unido “chips” son las papas fritas y las de bolsa son “crisps”."
  },
  "A2-3": {
    grammar: { title: "This, that, these, those + wear", html: `
      <table><tr><th></th><th>Cerca</th><th>Lejos</th></tr>
      <tr><td>Uno</td><td><b>this</b> (este/esta)</td><td><b>that</b> (ese/aquel)</td></tr>
      <tr><td>Varios</td><td><b>these</b> (estos)</td><td><b>those</b> (esos)</td></tr></table>
      <p>Para la ropa que llevas puesta: <b>wear</b>. “I'm wearing a blue shirt” = Llevo puesta una camisa azul. “I always wear sneakers” = Siempre uso zapatillas.</p>
      <p>Para preguntar precio: <em>How much <b>is</b> this?</em> (uno) / <em>How much <b>are</b> these?</em> (varios).</p>` },
    more: [["🧣", "Scarf", "SCARF", "bufanda"], ["🩲", "Underwear", "ÁN-der-uer", "ropa interior"], ["🩱", "Swimsuit", "SUIM-sut", "traje de baño"], ["👔", "Tie", "TAI", "corbata"], ["🧤", "Gloves", "GLAVS", "guantes"], ["🎽", "Uniform", "IÚ-ni-form", "uniforme"], ["💸", "Discount", "DÍS-caunt", "descuento"]],
    errores: [["This shoes", "These shoes", "Plural → these."], ["I'm using a jacket", "I'm wearing a jacket", "Ropa puesta → wear."], ["How much cost?", "How much is it? / How much does it cost?", "Pregunta incompleta."]],
    kids: "Juego de vestir a un peluche: “Teddy is wearing a red hat!”",
    teens: "Comenta outfits en redes en inglés: “I love those sneakers!”",
    adults: "Al doblar la ropa, nombren cada prenda en inglés.",
    fact: "Las tallas de zapatos en EE. UU. son distintas: una talla 9 de hombre en EE. UU. equivale aproximadamente a una 42 europea."
  },
  "A2-4": {
    grammar: { title: "A / an y preguntas con where / when / what", html: `
      <p><b>a</b> antes de sonido de consonante: <em>a teacher, a doctor, a uniform</em> (suena “iu”).<br><b>an</b> antes de sonido de vocal: <em>an engineer, an office, an hour</em> (la h no suena).</p>
      <table><tr><th>Pregunta</th><th>Significado</th><th>Ejemplo</th></tr>
      <tr><td>What do you do?</td><td>¿A qué te dedicas?</td><td>I'm a nurse.</td></tr>
      <tr><td>Where do you work?</td><td>¿Dónde trabajas?</td><td>I work at a bank.</td></tr>
      <tr><td>When do you work?</td><td>¿Cuándo trabajas?</td><td>I work at night.</td></tr>
      <tr><td>Do you like your job?</td><td>¿Te gusta tu trabajo?</td><td>Yes, I do!</td></tr></table>` },
    more: [["🦺", "Uniform", "IÚ-ni-form", "uniforme"], ["🕐", "Shift", "SHIFT", "turno"], ["🌙", "Night shift", "NAIT shift", "turno de noche"], ["🧾", "Job interview", "YOB ÍN-ter-viu", "entrevista de trabajo"], ["🤝", "Coworker", "co-UÉR-ker", "compañero de trabajo"], ["🏖️", "Day off", "dei OF", "día libre"], ["⏳", "Part-time / Full-time", "part-TAIM / ful-TAIM", "medio tiempo / tiempo completo"]],
    errores: [["I'm engineer", "I'm an engineer", "Siempre artículo con la profesión."], ["She is a engineer", "She is an engineer", "Antes de vocal → an."], ["What is your work?", "What do you do? / What's your job?", "Forma natural."]],
    kids: "Jueguen con disfraces: doctor, chef, policía… y cada uno se presenta: “I'm a chef!”",
    teens: "Escribe un mini CV en inglés con tus estudios y habilidades.",
    adults: "Cuenten en inglés 3 cosas que hacen en su trabajo: “I check the doors, I watch the cameras…”",
    fact: "En inglés “homemaker” o “stay-at-home parent” es la forma respetuosa de decir ama/amo de casa; “housewife” se usa menos hoy."
  },
  "A2-5": {
    grammar: { title: "Can / can't y preposiciones de lugar", html: `
      <table><tr><th>Afirmativo</th><th>Negativo</th><th>Pregunta</th></tr>
      <tr><td>I <b>can</b> swim</td><td>I <b>can't</b> swim</td><td><b>Can</b> you swim?</td></tr>
      <tr><td>She <b>can</b> drive</td><td>She <b>can't</b> drive</td><td><b>Can</b> she drive?</td></tr></table>
      <p>Lugar: <b>next to</b> (al lado), <b>across from</b> (frente a), <b>between</b> (entre), <b>behind</b> (detrás), <b>on the corner</b> (en la esquina), <b>near</b> (cerca).</p>
      <p>Pedir permiso educado: <em><b>Can</b> I open the window?</em> o, más formal, <em><b>Could</b> I…?</em></p>` },
    more: [["🚦", "Traffic light", "TRÁ-fik lait", "semáforo"], ["🌉", "Bridge", "BRICH", "puente"], ["⛽", "Gas station", "GAS STÉI-shon", "gasolinera"], ["🏟️", "Stadium", "STÉI-di-um", "estadio"], ["📮", "Post office", "POUST ó-fis", "correo"], ["🗺️", "Map", "MAP", "mapa"], ["🚶", "On foot", "on FUT", "a pie"], ["🧱", "Block", "BLOK", "cuadra"]],
    errores: [["I can to swim", "I can swim", "Después de can, sin to."], ["He cans drive", "He can drive", "Can nunca lleva -s."], ["In front the bank", "In front of the bank", "In front of."]],
    kids: "Den direcciones con un carrito de juguete sobre un mapa dibujado en el piso.",
    teens: "Explica cómo llegar de tu casa a tu colegio en inglés, paso a paso.",
    adults: "En el carro o el bus, digan las direcciones en inglés: “Turn left at the traffic light.”",
    fact: "En EE. UU. las direcciones se dan mucho en cuadras (“blocks”): “Go two blocks and turn right”."
  },
  "A2-6": {
    grammar: { title: "Presente continuo y adverbios de frecuencia", html: `
      <p><b>am / is / are + verbo-ing</b> = lo que pasa ahora.</p>
      <table><tr><th>Afirmativo</th><th>Negativo</th><th>Pregunta</th></tr>
      <tr><td>I'<b>m playing</b></td><td>I'm not playing</td><td>Am I playing?</td></tr>
      <tr><td>She'<b>s reading</b></td><td>She isn't reading</td><td>Is she reading?</td></tr>
      <tr><td>They'<b>re dancing</b></td><td>They aren't dancing</td><td>Are they dancing?</td></tr></table>
      <p>Ortografía: dance → danc<b>ing</b> (se va la e), swim → swi<b>mm</b>ing, run → ru<b>nn</b>ing.</p>
      <p>Frecuencia (de más a menos): <b>always</b> 100% · <b>usually</b> 80% · <b>often</b> 60% · <b>sometimes</b> 40% · <b>rarely</b> 10% · <b>never</b> 0%. Van antes del verbo, pero después de <em>be</em>: “I'm <u>always</u> happy”.</p>` },
    more: [["♟️", "Chess", "CHES", "ajedrez"], ["🏀", "Basketball", "BÁS-ket-bol", "baloncesto"], ["🎣", "Fishing", "FÍ-shing", "pescar"], ["📷", "Take photos", "teik FÓU-tous", "tomar fotos"], ["🏃", "Run / Jog", "RAN / YOG", "correr / trotar"], ["🎤", "Sing", "SING", "cantar"], ["🧩", "Puzzle", "PÁ-sel", "rompecabezas"], ["🏕️", "Camping", "CÁM-ping", "acampar"]],
    errores: [["I playing now", "I'm playing now", "Falta am/is/are."], ["I always am happy", "I am always happy", "Con be, el adverbio va después."], ["Swiming", "Swimming", "Se dobla la m."]],
    kids: "Narren un partido o un juego como comentaristas: “He's running! He's kicking!”",
    teens: "Pon tu música favorita en inglés y escribe 5 frases de lo que estás haciendo ahora.",
    adults: "Cuando estén juntos, pregunten “What are you doing?” y respondan en inglés.",
    fact: "En EE. UU. se dice “soccer” y en casi todo el resto del mundo angloparlante “football”. ¡En EE. UU. “football” es el fútbol americano!"
  },
  "A2-7": {
    grammar: { title: "Pasado simple: regulares e irregulares", html: `
      <p><b>Regulares:</b> verbo + <b>-ed</b>: play → played, watch → watched, study → stud<b>ied</b>, stop → sto<b>pp</b>ed.</p>
      <p>La -ed suena de 3 formas: /t/ en watched, /d/ en played, /id/ en wanted.</p>
      <table><tr><th>Presente</th><th>Pasado</th><th>Presente</th><th>Pasado</th></tr>
      <tr><td>go</td><td><b>went</b></td><td>see</td><td><b>saw</b></td></tr>
      <tr><td>have</td><td><b>had</b></td><td>eat</td><td><b>ate</b></td></tr>
      <tr><td>do</td><td><b>did</b></td><td>buy</td><td><b>bought</b></td></tr>
      <tr><td>make</td><td><b>made</b></td><td>get</td><td><b>got</b></td></tr>
      <tr><td>come</td><td><b>came</b></td><td>sleep</td><td><b>slept</b></td></tr>
      <tr><td>be</td><td><b>was / were</b></td><td>say</td><td><b>said</b></td></tr></table>
      <p>Negativo y pregunta: <b>didn't</b> / <b>Did</b> + verbo en presente: “I didn't see it”, “Did you go?”.</p>` },
    more: [["🗣️", "Said", "SED", "dije / dijo"], ["🏃", "Ran", "RAN", "corrí / corrió"], ["✍️", "Wrote", "ROUT", "escribí / escribió"], ["🎁", "Gave", "GUEIV", "di / dio"], ["🧠", "Thought", "ZOT", "pensé / pensó"], ["🔍", "Found", "FAUND", "encontré / encontró"], ["🙌", "Was / Were", "UOS / UER", "fui, estuve / fuimos, estuvimos"]],
    errores: [["I goed", "I went", "Go es irregular."], ["Did you went?", "Did you go?", "Con did, el verbo en presente."], ["Yesterday I go", "Yesterday I went", "Ayer → pasado."]],
    kids: "Cada noche el pequeño cuenta una cosa que hizo: “Today I played with my friends.”",
    teens: "Escribe un post de Instagram en inglés sobre tu último fin de semana.",
    adults: "Durante la cena, cada uno cuenta su día en pasado: “I worked, I cooked…”",
    fact: "Los 10 verbos irregulares más comunes (be, have, do, say, go, get, make, know, think, take) aparecen en casi cualquier conversación en inglés."
  },
  "A2-8": {
    grammar: { title: "Futuro: going to y will", html: `
      <table><tr><th>Forma</th><th>Uso</th><th>Ejemplo</th></tr>
      <tr><td><b>am/is/are going to</b> + verbo</td><td>planes decididos, intenciones</td><td>I'm going to study medicine.</td></tr>
      <tr><td><b>will</b> + verbo</td><td>decisión del momento</td><td>The phone is ringing. I'll answer it!</td></tr>
      <tr><td><b>will</b> + verbo</td><td>promesas</td><td>I will help you, I promise.</td></tr>
      <tr><td><b>will</b> + verbo</td><td>predicciones</td><td>You'll love Panama!</td></tr></table>
      <p>Negativo: <b>won't</b> (= will not): “I won't forget”. Para planes con hora y lugar fijos también se usa el presente continuo: “We're traveling on Friday.”</p>` },
    more: [["🏥", "Become", "bi-CAM", "llegar a ser / convertirse"], ["🎯", "Achieve", "a-CHIIV", "lograr"], ["🙏", "Promise", "PRÓ-mis", "promesa / prometer"], ["🤔", "Maybe", "MÉI-bi", "quizás"], ["✅", "Sure", "SHUR", "seguro"], ["🗓️", "Soon", "SUUN", "pronto"], ["⌛", "Someday", "SAM-dei", "algún día"]],
    errores: [["I going to travel", "I'm going to travel", "Falta am/is/are."], ["I will to help you", "I will help you", "Will sin to."], ["Tomorrow I go to study (plan)", "Tomorrow I'm going to study", "Plan → going to."]],
    kids: "Que el pequeño diga qué va a hacer mañana: “Tomorrow I'm going to play!”",
    teens: "Escribe una carta a tu “yo” del futuro en inglés: “In five years, I will…”",
    adults: "Hagan un “vision board” familiar con metas en inglés y péguenlo en la pared.",
    fact: "En inglés hablado, “going to” se pronuncia muy seguido “gonna”: “I'm gonna study”. Se entiende, pero en exámenes escríbanlo completo."
  }
});
