// Pestaña "Método" de cada clase: técnica de estudio, errores típicos de hispanohablantes,
// un dato extra y un reto práctico. La clave es el "id" de la clase en lezioni.js.
// errores: [lo que se suele decir (mal), lo correcto, explicación]

const METODO = {
  "alfabeto": {
    tecnica: "Shadowing (hacer de sombra)",
    como: `<p>Pones un audio corto y repites <strong>al mismo tiempo</strong> que la voz, como una sombra, imitando el ritmo y la entonación, no solo las palabras.</p>
      <ol><li>Escucha la frase una vez sin hablar.</li><li>Repítela a la vez que el audio, 3–5 veces.</li><li>Grábate con el celular y compárate con el original.</li></ol>
      <p>Es la técnica más rápida para que tu acento suene italiano. Hazlo 5 minutos al día con los botones ▶ de esta app.</p>`,
    errores: [
      ["“SIAO”", "CHAO (ciao)", "ci/ce siempre suenan “chi/che”."],
      ["“CHIAVE” con ch española", "KIÁ-ve (chiave)", "ch en italiano es siempre “k”."],
      ["“pala” por “palla”", "PÁL-la", "Las dobles cambian el significado: pala ≠ palla (pelota)."]
    ],
    extra: "Las vocales italianas son las mismas cinco del español, puras y cortas: tienes ventaja sobre un angloparlante. Lo que más delata a un hispanohablante son las consonantes dobles y la “z”.",
    reto: "Deletrea en voz alta tu nombre completo, el nombre de tu calle y tu correo usando los nombres italianos de las letras. Luego grábate diciendo: “gnocchi, famiglia, chiesa, pesce, pizza”."
  },

  "numeri": {
    tecnica: "Práctica con números de la vida real",
    como: `<p>Los números se aprenden usándolos sin parar, no leyendo listas. Durante una semana:</p>
      <ul><li>Lee en italiano, mentalmente, cada <strong>precio</strong> que veas.</li><li>Cuenta en italiano tus <strong>repeticiones</strong> en el gym o los escalones.</li><li>Di la <strong>placa</strong> del carro de adelante o la hora de tu celular.</li></ul>
      <p>En 7 días ya no tendrás que pensar los números.</p>`,
    errores: [
      ["ventiuno", "ventuno", "La decena pierde la vocal antes de uno y otto."],
      ["diecisette", "diciassette", "17, 18 y 19 empiezan con “dicia/dici-”."],
      ["duemille", "duemila", "mille → mila en plural."]
    ],
    extra: "Los italianos dicen el teléfono cifra por cifra o en pares (“trentaquattro, settantadue…”). Al dar precios dicen “euro” sin plural: “dieci euro”.",
    reto: "Dicta en voz alta tu número de celular, tu fecha de nacimiento (es. il quattordici marzo duemiladue) y cuánto gastaste hoy."
  },

  "saluti": {
    tecnica: "Tu guion personal",
    como: `<p>Escribe un texto de 6–8 frases sobre ti y <strong>memorízalo completo</strong>. Es lo primero que te preguntarán en cualquier conversación, y tenerlo automatizado te da confianza para todo lo demás.</p>
      <p>Ejemplo: <em>Ciao! Mi chiamo Jonathan, ho 24 anni e sono di Panama. Studio e lavoro. Studio italiano perché mi piace la cultura italiana. Piacere!</em></p>
      <p>Repítelo cada día hasta que salga solo, y amplíalo con cada clase nueva.</p>`,
    errores: [
      ["Io mi chiamo… Io sono… Io ho…", "Mi chiamo… Sono… Ho…", "El pronombre se omite, igual que en español."],
      ["Buongiorno a las 7 p. m.", "Buonasera", "Desde la tarde (≈ 16–17 h) se pasa a buonasera."],
      ["Ciao al profesor", "Buongiorno / Salve", "Ciao solo con confianza."]
    ],
    extra: "Al despedirse de alguien que acabas de conocer, los italianos dicen “È stato un piacere” o “Piacere di averti conosciuto”. Y los besos de saludo son dos, primero en la mejilla izquierda.",
    reto: "Escribe tu guion personal en un papel, apréndetelo y dilo en voz alta sin mirar. Grábalo: en 2 meses lo vas a escuchar y notarás cuánto mejoraste."
  },

  "essere-avere": {
    tecnica: "Aprender en bloques (chunks)",
    como: `<p>No memorices verbos sueltos: aprende <strong>frases enteras</strong> que usarías de verdad. El cerebro guarda la gramática dentro de la frase.</p>
      <p>En lugar de “avere = tener”, aprende: <em>ho fame, ho sete, ho sonno, ho freddo, ho ragione, ho bisogno di…</em></p>
      <p>Cada vez que aprendas un verbo, anota 3 frases útiles para tu vida con él.</p>`,
    errores: [
      ["Sono 24 anni", "Ho 24 anni", "La edad va con avere (como en español)."],
      ["Sono freddo", "Ho freddo", "Frío, calor, hambre, sed, sueño → avere."],
      ["Sono un studente", "Sono studente", "Con profesiones no se usa artículo."]
    ],
    extra: "Otras expresiones con avere muy útiles: avere voglia di (tener ganas de), avere paura (tener miedo), avere fretta (tener prisa), avere bisogno di (necesitar).",
    reto: "Escribe 5 frases verdaderas sobre ti hoy con avere (ho fame, ho voglia di…) y 5 con essere."
  },

  "orari": {
    tecnica: "Cambia tu celular a italiano",
    como: `<p>Pon el idioma de tu celular (o de una app que uses mucho, como Instagram o Spotify) en <strong>italiano</strong>. Ya sabes dónde está cada botón, así que aprenderás palabras por contexto sin esfuerzo: <em>impostazioni, condividi, salva, cerca…</em></p>
      <p>Y cada vez que mires la hora, dila en italiano.</p>`,
    errores: [
      ["Sono la una", "È l'una", "La una va en singular, como en español."],
      ["Sono le tre e media", "Sono le tre e mezza / mezzo", "Media → mezza."],
      ["Quanto è costa?", "Quanto costa? / Quant'è?", "Dos formas distintas, no se mezclan."]
    ],
    extra: "Para quedar: “Facciamo alle otto?” (¿Quedamos a las ocho?). Y ojo con la puntualidad: en el norte se respeta bastante más que en el sur.",
    reto: "Durante un día, cada vez que mires el reloj di la hora completa en italiano en voz baja."
  },

  "bar": {
    tecnica: "Role-play mental",
    como: `<p>Antes de dormir o en el bus, <strong>imagina una escena</strong> concreta (entrar a un bar en Roma) y di en voz baja todo lo que harías: saludar, pedir, preguntar el precio, pagar, despedirte.</p>
      <p>Cuando te falte una palabra, anótala y búscala después. Así descubres exactamente lo que te falta, sin depender de nadie.</p>`,
    errores: [
      ["Quiero un caffè → Voglio un caffè", "Vorrei un caffè", "Voglio suena brusco; vorrei es lo educado."],
      ["Un latte (esperando café)", "Un caffè latte / latte macchiato", "Latte es solo leche."],
      ["Il acqua", "L'acqua", "Ante vocal, el artículo se apostrofa."]
    ],
    extra: "En muchos bares primero se paga en la caja (cassa) con el ticket (scontrino) y luego se pide en la barra. Tomar el café de pie en la barra es más barato que sentado en una mesa.",
    reto: "Haz el role-play completo del bar en voz alta: entrar, pedir para ti y un amigo, preguntar el precio, pagar con tarjeta y despedirte."
  },

  "giornata": {
    tecnica: "Hablar solo (self-talk)",
    como: `<p>Narra en italiano lo que estás haciendo mientras lo haces: <em>Adesso mi sveglio… faccio la doccia… preparo il caffè… esco di casa…</em></p>
      <p>Parece raro, pero es la manera más fácil de practicar hablar todos los días sin necesitar a otra persona. Empieza con 2 minutos en la mañana.</p>`,
    errores: [
      ["Io parlo, tu parla", "tu parli", "La 2ª persona (tu) siempre termina en -i."],
      ["Noi parlamo", "Noi parliamo", "Noi siempre termina en -iamo."],
      ["Esco de casa", "Esco di casa", "“de” en italiano es di."]
    ],
    extra: "Los días de la semana van en minúscula: lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica. “Il lunedì” = todos los lunes; “lunedì” solo = este lunes.",
    reto: "Mañana, narra en voz alta tu rutina desde que te levantas hasta que sales de casa, solo en italiano."
  },

  "citta": {
    tecnica: "Viajar con Google Maps",
    como: `<p>Abre Google Maps en italiano y “pasea” con Street View por Roma, Florencia o Bolonia. Lee los letreros de las tiendas, los nombres de las calles y las paradas.</p>
      <p>Luego da indicaciones en voz alta: <em>dalla stazione vai sempre dritto, poi giri a destra…</em></p>`,
    errores: [
      ["Salire de casa", "Uscire di casa", "Salire = subir; uscire = salir."],
      ["Vado a la stazione", "Vado alla stazione", "a + la = alla."],
      ["C'è due bar", "Ci sono due bar", "Plural → ci sono."]
    ],
    extra: "Palabras que verás en la calle: “uscita” (salida), “entrata” (entrada), “spingere/tirare” (empujar/halar), “vietato” (prohibido), “chiuso/aperto” (cerrado/abierto), “sciopero” (huelga; muy común en transportes).",
    reto: "Elige una ciudad italiana en Google Maps y explica en voz alta cómo ir de la estación de tren al centro."
  },

  "ristorante": {
    tecnica: "Cognados: el atajo del español",
    como: `<p>Miles de palabras se pueden “traducir” del español con reglas fijas:</p>
      <table><tr><th>Español</th><th>Italiano</th><th>Ejemplo</th></tr>
      <tr><td>-ción</td><td>-zione</td><td>nación → nazione</td></tr>
      <tr><td>-dad / -tad</td><td>-tà</td><td>ciudad → città, libertad → libertà</td></tr>
      <tr><td>-oso</td><td>-oso</td><td>famoso → famoso</td></tr>
      <tr><td>-mente</td><td>-mente</td><td>rápidamente → rapidamente</td></tr>
      <tr><td>-ble</td><td>-bile</td><td>posible → possibile</td></tr>
      <tr><td>-ista</td><td>-ista</td><td>turista → turista</td></tr></table>
      <p>Úsalas, pero vigila los falsos amigos.</p>`,
    errores: [
      ["burro = burro", "burro = mantequilla", "El animal es asino."],
      ["Mi piace i dolci", "Mi piacciono i dolci", "Plural → piacciono."],
      ["Pasta con pollo", "Pasta + secondo di pollo", "Cultural: la carne va en el segundo plato."]
    ],
    extra: "Más falsos amigos: “salire” (subir), “guardare” (mirar), “caldo” (caliente), “aceto” (vinagre), “gamba” (pierna), “imbarazzata” (avergonzada, no embarazada: incinta).",
    reto: "Encuentra 10 palabras que puedas “adivinar” con las reglas de cognados y compruébalas en un diccionario."
  },

  "weekend": {
    tecnica: "Diario de 3 frases",
    como: `<p>Cada noche escribe <strong>3 frases</strong> sobre lo que hiciste ese día, en passato prossimo. Nada más. Es poco, así que no lo vas a abandonar.</p>
      <p><em>Oggi ho lavorato tanto. Ho mangiato una pizza con mia sorella. Sono andato a letto presto.</em></p>
      <p>Al final del mes tendrás 90 frases escritas por ti y verás tu progreso.</p>`,
    errores: [
      ["Ho andato", "Sono andato", "Verbos de movimiento → essere."],
      ["Lei è andato", "Lei è andata", "Con essere, el participio concuerda."],
      ["Ho facto", "Ho fatto", "Participio irregular de fare."]
    ],
    extra: "Truco para la concordancia: con essere el participio funciona como un adjetivo (andato/andata/andati/andate), igual que en español decimos “cansado/cansada”.",
    reto: "Empieza tu diario hoy: 3 frases sobre lo que hiciste. Mínimo una con essere."
  },

  "a2-imperfetto": {
    tecnica: "Contar la misma historia 3 veces (4-3-2)",
    como: `<p>Cuenta un recuerdo de tu infancia en voz alta en <strong>4 minutos</strong>. Después cuéntalo otra vez en <strong>3</strong>, y una última en <strong>2</strong>.</p>
      <p>Al reducir el tiempo, el cerebro automatiza las frases y ganas fluidez de verdad. Es una técnica muy usada en la enseñanza de idiomas.</p>`,
    errores: [
      ["Da bambino ho giocato a calcio ogni giorno", "giocavo", "Costumbre del pasado → imperfetto."],
      ["Ieri pioveva tutto il giorno e ho rimasto a casa", "sono rimasto", "rimanere usa essere."],
      ["Era / era (io / lui) confundidos", "ero (io) · era (lui/lei)", "Fíjate en la vocal final."]
    ],
    extra: "Palabras que piden imperfetto: sempre, di solito, ogni giorno, mentre, da piccolo. Palabras que piden passato prossimo: ieri, una volta, all'improvviso, un giorno.",
    reto: "Cuenta en voz alta cómo era tu escuela y tu barrio de niño. Hazlo con la técnica 4-3-2."
  },

  "a2-futuro": {
    tecnica: "Repetición espaciada",
    como: `<p>Olvidamos casi todo lo nuevo en pocos días si no lo repasamos. La solución es <strong>repasar justo antes de olvidar</strong>, con intervalos cada vez más largos:</p>
      <p><strong>Día 1 → día 3 → día 7 → día 14 → día 30</strong></p>
      <p>Usa las tarjetas de abajo con cada clase siguiendo ese calendario, o una app como Anki. Con 10 minutos al día recuerdas muchísimo más que estudiando 2 horas una vez por semana.</p>`,
    errores: [
      ["Parlarò", "Parlerò", "En -are, la a cambia a e."],
      ["Cuando llegue → Quando arrivi (futuro)", "Quando arriverò", "Futuro, no subjuntivo."],
      ["Andarò", "Andrò", "andare → andr-."]
    ],
    extra: "El futuro también sirve para suponer: “Sarà stanco” = debe de estar cansado. “Dove sarà Marco?” = ¿Dónde estará Marco?",
    reto: "Escribe 5 metas para el próximo año en futuro y ponlas en un lugar visible. Es. “Parlerò italiano con un italiano per 10 minuti.”"
  },

  "a2-shopping": {
    tecnica: "Input comprensible",
    como: `<p>Se aprende un idioma sobre todo <strong>entendiendo mensajes</strong> un poco por encima de tu nivel. Busca vídeos donde entiendas el 70–80% y deduce el resto por el contexto.</p>
      <p>Para empezar: canal de YouTube <strong>Easy Italian</strong> (entrevistas en la calle con subtítulos en italiano e inglés). Ve un vídeo corto al día, primero con subtítulos y luego sin ellos.</p>`,
    errores: [
      ["La maglietta? Lo prendo", "La prendo", "El pronombre concuerda con la cosa."],
      ["I pantaloni? Le compro", "Li compro", "Masculino plural → li."],
      ["Mi queda bien → Mi resta bene", "Mi sta bene", "Para ropa se usa stare."]
    ],
    extra: "Tallas: en Italia la ropa de mujer usa números (40, 42, 44…) que no coinciden con los de América, y los zapatos usan la talla europea (un 9 de EE. UU. es aproximadamente un 42). Pregunta siempre: “Posso provarlo?”.",
    reto: "Describe en voz alta lo que llevas puesto hoy (Oggi porto una maglietta nera e…) y di si te queda bien o no."
  },

  "a2-salute": {
    tecnica: "Recuerdo activo (active recall)",
    como: `<p>Releer no sirve de mucho. Lo que fija la memoria es <strong>obligarte a recordar</strong> antes de ver la respuesta.</p>
      <ul><li>Tapa la columna del italiano y di cada palabra solo viendo el español.</li><li>Usa las tarjetas de abajo: piensa la respuesta antes de darle la vuelta.</li><li>Si fallas, no pasa nada: fallar y corregir es justo lo que hace que lo recuerdes.</li></ul>`,
    errores: [
      ["Mi fa male le gambe", "Mi fanno male le gambe", "Concuerda con la parte del cuerpo."],
      ["Sono constipato (queriendo decir estreñido)", "Sono stitico", "Constipato = resfriado / congestionado."],
      ["Ho dolore di testa", "Ho mal di testa", "La expresión fija es mal di."]
    ],
    extra: "En la farmacia pueden recomendarte medicinas sin receta para cosas simples: “Ho bisogno di qualcosa per…”. Las emergencias se atienden en el Pronto Soccorso; el número único europeo es el 112.",
    reto: "Haz una lista de 10 partes del cuerpo tocándolas y diciendo su nombre en italiano. Luego tápala y repite de memoria."
  },

  "a2-casa": {
    tecnica: "Escribir y que te corrijan",
    como: `<p>Escribe textos cortos y pide corrección. Puedes usar:</p>
      <ul><li>Un asistente de IA: “Corrígeme este texto en italiano y explícame los errores en español”.</li><li>Apps como HelloTalk o Tandem, donde nativos corrigen tus mensajes.</li></ul>
      <p>Lo importante: <strong>vuelve a escribir la versión corregida a mano</strong>. Así es como se queda.</p>`,
    errores: [
      ["Più grande che Firenze", "Più grande di Firenze", "Antes de nombre o pronombre → di."],
      ["Parli più bene di me", "Parli meglio di me", "“Más bien” con verbos → meglio."],
      ["Il primo piano = planta baja", "Piano terra = planta baja", "El 1º piano es nuestro 2º piso."]
    ],
    extra: "Siglas de anuncios: “bilocale” = 1 dormitorio + sala, “trilocale” = 2 dormitorios + sala, “mq” = metros cuadrados, “spese escluse” = gastos aparte, “arredato” = amueblado.",
    reto: "Escribe un anuncio buscando piso (5–6 frases: qué buscas, presupuesto, zona) y pide que te lo corrijan."
  },

  "a2-viaggio": {
    tecnica: "Intercambio de idiomas (tándem)",
    como: `<p>Hay miles de italianos aprendiendo español. En apps como <strong>Tandem</strong> o <strong>HelloTalk</strong> puedes hablar con ellos: 15 minutos en italiano y 15 en español.</p>
      <p>Consejos: prepara 3 preguntas antes de cada llamada, anota las palabras nuevas y pide que te corrijan. Empieza por mensajes de texto si te da nervios.</p>`,
    errores: [
      ["Gli telefono a Marco", "Telefono a Marco / Gli telefono", "En italiano estándar no se repite el pronombre como en español (“le llamo a Marco”)."],
      ["Gli (a ella)", "Le (a ella)", "Gli = a él / a ellos."],
      ["Ho perdido il treno", "Ho perso il treno", "El participio de perdere es perso (perduto existe, pero es más formal)."]
    ],
    extra: "Trenes: Frecciarossa e Italo son los de alta velocidad (reserva obligatoria). Los Regionali son baratos y sin reserva, pero hay que validar el billete de papel. Comprar con antelación en la app sale mucho más barato.",
    reto: "Descarga Tandem o HelloTalk, crea tu perfil en italiano y escribe a 3 personas presentándote."
  },

  "a2-lavoro": {
    tecnica: "Frases comodín y grabarte en vídeo",
    como: `<p>Prepara <strong>frases comodín</strong> que te sirvan para ganar tiempo y sonar natural:</p>
      <ul><li><em>Bella domanda…</em> (Buena pregunta…)</li><li><em>Come posso dire…</em> (Cómo te digo…)</li><li><em>In altre parole…</em> (En otras palabras…)</li><li><em>Mi scusi, non ho capito bene.</em></li></ul>
      <p>Después grábate en vídeo respondiendo 5 preguntas típicas de entrevista. Verte es incómodo, pero te muestra exactamente qué mejorar.</p>`,
    errores: [
      ["Parleremo (condicional)", "Parleremmo", "Condicional noi: doble m."],
      ["Mi piacerei", "Mi piacerebbe", "Va en 3ª persona, como “me gustaría”."],
      ["Lei vorresti…", "Lei vorrebbe…", "Con Lei, 3ª persona."]
    ],
    extra: "En un CV italiano es común poner “Autorizzo il trattamento dei dati personali” al final (protección de datos). El tono es formal: siempre Lei, nunca tu, hasta que te inviten a tutear.",
    reto: "Graba un vídeo de 1 minuto presentándote profesionalmente en italiano: quién eres, tu experiencia y por qué te gustaría trabajar en Italia."
  },

  "a2-colloquiale": {
    tecnica: "Inmersión en casa",
    como: `<p>Rodéate de italiano en lo que ya haces por diversión:</p>
      <ul><li><strong>Series:</strong> Skam Italia, Mare Fuori, L'amica geniale, Summertime.</li><li><strong>Podcasts:</strong> Podcast Italiano (Davide), Italiano Automatico, Coffee Break Italian.</li><li><strong>Música:</strong> Måneskin, Mahmood, Elodie, Ultimo, Annalisa. Busca la letra y canta.</li><li><strong>Redes:</strong> sigue cuentas de memes e influencers italianos.</li></ul>
      <p><strong>Escucha activa vs. pasiva:</strong> la activa (prestas atención, pausas y repites) enseña mucho más. La pasiva (de fondo) sirve para acostumbrar el oído al ritmo.</p>`,
    errores: [
      ["Ti amo (a un amigo)", "Ti voglio bene", "Ti amo es solo romántico."],
      ["Dici! (imperativo)", "Di'! / Dimmi!", "Imperativo irregular."],
      ["Non preoccupati", "Non preoccuparti / Non ti preoccupare", "Negativo informal = non + infinitivo."]
    ],
    extra: "Muletillas que te harán sonar natural: “cioè” (o sea), “tipo” (como, en plan), “praticamente”, “niente” (nada, en fin), “eh” al final de frase, “no?” para buscar confirmación.",
    reto: "Elige una serie italiana y mira un episodio con subtítulos en italiano. Anota 5 expresiones que escuches y búscalas."
  }
};
