// Contenido de las clases de italiano (nivel A1, para adulto hispanohablante).
// Para agregar una clase nueva, copia un objeto y cambia el contenido.
// id:      identificador único (se usa para guardar tu progreso, no lo cambies)
// vocab:   [italiano, español, pronunciación, texto a leer en voz alta (opcional)]
// phrases: [italiano, español, nota opcional]
// dialog:  ["A" | "B", italiano, español]
// quiz:    { q, opts, a }  (opción múltiple, a = índice correcto)
//          { q, fill: [respuestas válidas] }  (escribir)
//          añade say: "texto" a cualquier pregunta para que tenga botón de audio

const LEZIONI = [
  {
    id: "alfabeto",
    title: "L'alfabeto e la pronuncia",
    sub: "A, bi, ci… cómo suena cada letra",
    intro: "El alfabeto italiano tiene solo 21 letras propias. Aquí aprendes cómo se llaman, cómo deletrear tu nombre y las reglas de pronunciación que más confunden a un hispanohablante.",
    vocab: [
      ["A", "como la “a” española", "a", "a"],
      ["B — bi", "", "bi", "bi"],
      ["C — ci", "", "chi", "ci"],
      ["D — di", "", "di", "di"],
      ["E — e", "", "e", "e"],
      ["F — effe", "", "ÉF-fe", "effe"],
      ["G — gi", "", "yi (dyi)", "gi"],
      ["H — acca", "siempre muda", "ÁK-ka", "acca"],
      ["I — i", "", "i", "i"],
      ["L — elle", "", "ÉL-le", "elle"],
      ["M — emme", "", "ÉM-me", "emme"],
      ["N — enne", "", "ÉN-ne", "enne"],
      ["O — o", "", "o", "o"],
      ["P — pi", "", "pi", "pi"],
      ["Q — cu", "siempre seguida de u", "ku", "cu"],
      ["R — erre", "vibrante, como “pero/perro”", "ÉR-re", "erre"],
      ["S — esse", "", "ÉS-se", "esse"],
      ["T — ti", "", "ti", "ti"],
      ["U — u", "", "u", "u"],
      ["V — vu", "con los dientes sobre el labio", "vu", "vu"],
      ["Z — zeta", "suena “ts” o “dz”", "DZÉ-ta", "zeta"],
      ["J — i lunga", "solo en palabras extranjeras", "i LÚN-ga", "i lunga"],
      ["K — cappa", "solo en palabras extranjeras", "CÁP-pa", "cappa"],
      ["W — doppia vu", "solo en palabras extranjeras", "DÓP-pia vu", "doppia vu"],
      ["X — ics", "solo en palabras extranjeras", "iks", "ics"],
      ["Y — ipsilon", "solo en palabras extranjeras", "ÍP-si-lon", "ipsilon"]
    ],
    phrases: [
      ["Come si scrive?", "¿Cómo se escribe?", "La pregunta clave para deletrear"],
      ["Come si pronuncia?", "¿Cómo se pronuncia?", ""],
      ["Puoi ripetere, per favore?", "¿Puedes repetir, por favor?", ""],
      ["Più piano, per favore.", "Más despacio, por favor.", ""],
      ["Si scrive con due elle.", "Se escribe con doble ele.", "Las dobles se dicen “due + letra”"],
      ["Mi chiamo Page: pi, a, gi, e.", "Me llamo Page: P, A, G, E.", ""],
      ["Cosa vuol dire…?", "¿Qué significa…?", "Muy útil en clase"]
    ],
    grammar: {
      title: "Las reglas de pronunciación que tienes que saber",
      html: `<p>El italiano se lee casi como se escribe, igual que el español. Solo hay que memorizar estos grupos:</p>
      <table><tr><th>Se escribe</th><th>Suena</th><th>Ejemplo</th></tr>
      <tr><td>ca, co, cu</td><td>ka, ko, ku</td><td>casa, cotto</td></tr>
      <tr><td>ce, ci</td><td>che, chi</td><td>cena, ciao</td></tr>
      <tr><td>che, chi</td><td>ke, ki</td><td>che, chiave</td></tr>
      <tr><td>ga, go, gu</td><td>ga, go, gu</td><td>gatto, gusto</td></tr>
      <tr><td>ge, gi</td><td>dye, dyi (como “yo” fuerte)</td><td>gelato, giorno</td></tr>
      <tr><td>ghe, ghi</td><td>gue, gui</td><td>spaghetti</td></tr>
      <tr><td>gn</td><td>ñ</td><td>bagno, gnocchi</td></tr>
      <tr><td>gli</td><td>lli suave</td><td>famiglia, figlio</td></tr>
      <tr><td>sce, sci</td><td>she, shi</td><td>pesce, sci</td></tr>
      <tr><td>z, zz</td><td>ts o dz</td><td>pizza, zero</td></tr>
      <tr><td>h</td><td>muda</td><td>ho, hotel</td></tr></table>
      <p><strong>Consonantes dobles</strong> (tt, ll, ss, pp…): se mantienen un instante más. <em>Pala</em> (pala) ≠ <em>palla</em> (pelota); <em>nono</em> (noveno) ≠ <em>nonno</em> (abuelo).</p>`
    },
    tips: [
      "<strong>Ojo:</strong> la regla de <em>c/ch</em> es al revés que en español: <em>ci</em> = “chi” y <em>chi</em> = “ki”. Pasa lo mismo con <em>g/gh</em>.",
      "<strong>Truco:</strong> para deletrear por teléfono, los italianos usan nombres de ciudades: “A come Ancona, B come Bologna, C come Como…”.",
      "<strong>Acento:</strong> casi siempre va en la penúltima sílaba. Solo se escribe la tilde cuando va en la última: <em>città, caffè, perché</em>."
    ],
    dialog: [
      ["A", "Buongiorno, ho una prenotazione.", "Buenos días, tengo una reserva."],
      ["B", "A che nome?", "¿A nombre de quién?"],
      ["A", "Page. Pi, a, gi, e.", "Page. P, A, G, E."],
      ["B", "E il nome?", "¿Y el nombre?"],
      ["A", "Jonathan: i lunga, o, enne, a, ti, acca, a, enne.", "Jonathan: J, O, N, A, T, H, A, N."],
      ["B", "Perfetto, ecco la chiave. Camera dodici.", "Perfecto, aquí está la llave. Habitación doce."]
    ],
    quiz: [
      { q: "¿Cuántas letras propias tiene el alfabeto italiano?", opts: ["21", "26", "27"], a: 0 },
      { q: "¿Cómo se llama la letra H?", opts: ["hache", "acca", "ache"], a: 1 },
      { q: "“Ciao” suena…", opts: ["SIAO", "KIAO", "CHAO"], a: 2 },
      { q: "“Chiave” suena…", opts: ["CHIA-ve", "KIA-ve", "SHIA-ve"], a: 1 },
      { q: "“Gnocchi” suena…", opts: ["GNO-ki", "ÑO-ki", "NO-chi"], a: 1 },
      { q: "Escucha y escribe la palabra:", say: "famiglia", fill: ["famiglia"] },
      { q: "Escucha y escribe la palabra:", say: "pesce", fill: ["pesce"] },
      { q: "Escribe cómo se llama la letra R:", fill: ["erre"] }
    ]
  },

  {
    id: "numeri",
    title: "I numeri",
    sub: "0–20 · decenas · cientos y miles",
    intro: "Todos los números que necesitas: del 0 al 20 (que hay que memorizar), las decenas y cómo armar cualquier número hasta un millón.",
    vocab: [
      ["zero", "0", "DZÉ-ro"],
      ["uno", "1", "Ú-no"],
      ["due", "2", "DÚ-e"],
      ["tre", "3", "TRE"],
      ["quattro", "4", "CUÁT-tro"],
      ["cinque", "5", "CHÍN-cue"],
      ["sei", "6", "SÉI"],
      ["sette", "7", "SÉT-te"],
      ["otto", "8", "ÓT-to"],
      ["nove", "9", "NÓ-ve"],
      ["dieci", "10", "DIÉ-chi"],
      ["undici", "11", "ÚN-di-chi"],
      ["dodici", "12", "DÓ-di-chi"],
      ["tredici", "13", "TRÉ-di-chi"],
      ["quattordici", "14", "cuat-TÓR-di-chi"],
      ["quindici", "15", "CUÍN-di-chi"],
      ["sedici", "16", "SÉ-di-chi"],
      ["diciassette", "17", "di-chas-SÉT-te"],
      ["diciotto", "18", "di-CHÓT-to"],
      ["diciannove", "19", "di-chan-NÓ-ve"],
      ["venti", "20", "VÉN-ti"],
      ["trenta", "30", "TRÉN-ta"],
      ["quaranta", "40", "cua-RÁN-ta"],
      ["cinquanta", "50", "chin-CUÁN-ta"],
      ["sessanta", "60", "ses-SÁN-ta"],
      ["settanta", "70", "set-TÁN-ta"],
      ["ottanta", "80", "ot-TÁN-ta"],
      ["novanta", "90", "no-VÁN-ta"],
      ["cento", "100", "CHÉN-to"],
      ["duecento", "200", "due-CHÉN-to"],
      ["mille", "1.000", "MÍL-le"],
      ["duemila", "2.000", "due-MÍ-la"],
      ["un milione", "1.000.000", "un mi-LIÓ-ne"]
    ],
    phrases: [
      ["ventidue", "22", "venti + due, todo junto"],
      ["ventuno", "21", "venti pierde la -i delante de uno"],
      ["trentotto", "38", "trenta pierde la -a delante de otto"],
      ["quarantatré", "43", "los terminados en 3 llevan tilde"],
      ["centocinquanta", "150", ""],
      ["milleduecento", "1.200", "mille → mila en plural"],
      ["duemilaventisei", "2026", "Los años se dicen como un número normal"],
      ["Il mio numero è tre, quattro, sette…", "Mi número es 3, 4, 7…", "El teléfono se dice cifra por cifra"]
    ],
    grammar: {
      title: "Cómo se arma cualquier número",
      html: `<p>Los números se escriben <strong>todo junto</strong>, en una sola palabra (sí, aunque sea larguísima):</p>
      <table><tr><th>Número</th><th>Italiano</th></tr>
      <tr><td>24</td><td>ventiquattro</td></tr>
      <tr><td>31</td><td>trentuno</td></tr>
      <tr><td>58</td><td>cinquantotto</td></tr>
      <tr><td>73</td><td>settantatré</td></tr>
      <tr><td>101</td><td>centouno</td></tr>
      <tr><td>365</td><td>trecentosessantacinque</td></tr>
      <tr><td>1.999</td><td>millenovecentonovantanove</td></tr></table>
      <p>Tres reglas:</p>
      <p>1. Si sigue <strong>uno</strong> u <strong>otto</strong>, la decena pierde su última vocal: <em>ventuno, quarantotto</em> (pero <em>centouno, centootto</em> se mantienen).</p>
      <p>2. Si termina en <strong>3</strong>, lleva tilde: <em>trentatré</em>.</p>
      <p>3. <strong>Mille</strong> en singular, <strong>-mila</strong> en plural: <em>mille, duemila, diecimila</em>.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> en Italia el punto separa miles y la coma los decimales, igual que en buena parte de Latinoamérica: 1.500,50 €. Panamá usa la convención contraria (1,500.50), así que fíjate bien en los precios.",
      "<strong>Truco:</strong> del 11 al 16 terminan en <em>-dici</em> (undici… sedici); del 17 al 19 empiezan con <em>dici-</em> (diciassette, diciotto, diciannove). Igual que en español: once… dieciséis, diecisiete…",
      "<strong>Edad:</strong> “Tengo 24 años” = <em>Ho ventiquattro anni</em>."
    ],
    dialog: [
      ["A", "Mi dai il tuo numero?", "¿Me das tu número?"],
      ["B", "Certo: tre, quattro, sette, due, uno, otto, nove, cinque, zero, sei.", "Claro: 3, 4, 7, 2, 1, 8, 9, 5, 0, 6."],
      ["A", "Aspetta, più piano! Tre, quattro, sette…", "¡Espera, más despacio! 3, 4, 7…"],
      ["B", "…due, uno, otto.", "…2, 1, 8."],
      ["A", "Perfetto. Quanti anni hai, a proposito?", "Perfecto. ¿Cuántos años tienes, por cierto?"],
      ["B", "Ventiquattro. E tu?", "Veinticuatro. ¿Y tú?"]
    ],
    quiz: [
      { q: "¿Cómo se dice 17?", opts: ["diecisette", "diciassette", "settedici"], a: 1 },
      { q: "¿Cómo se dice 31?", opts: ["trentauno", "trentuno", "trenta e uno"], a: 1 },
      { q: "¿Cómo se dice 2.000?", opts: ["duemille", "duemila", "due mille"], a: 1 },
      { q: "Escucha y escribe el número (en cifras):", say: "quarantasette", fill: ["47", "quarantasette"] },
      { q: "Escucha y escribe el número (en cifras):", say: "diciotto", fill: ["18", "diciotto"] },
      { q: "Escucha y escribe el número (en cifras):", say: "sessantatré", fill: ["63", "sessantatré", "sessantatre"] },
      { q: "Escucha y escribe el número (en cifras):", say: "centoventi", fill: ["120", "centoventi"] },
      { q: "Escribe con letras: 24", fill: ["ventiquattro"] },
      { q: "Escribe con letras: 15", fill: ["quindici"] },
      { q: "Escribe con letras: 88", fill: ["ottantotto"] }
    ]
  },

  {
    id: "saluti",
    title: "Ciao! Saludos y presentaciones",
    sub: "Ciao · Buongiorno · Mi chiamo…",
    intro: "Lo básico para no quedarte en blanco: saludar, presentarte y despedirte, tanto con amigos como en situaciones formales.",
    vocab: [
      ["Ciao", "Hola / Chao (informal)", "CHAO"],
      ["Buongiorno", "Buenos días", "buon-YÓR-no"],
      ["Buonasera", "Buenas tardes / noches", "buo-na-SÉ-ra"],
      ["Buonanotte", "Buenas noches (al dormir)", "buo-na-NÓT-te"],
      ["Salve", "Hola (neutro, educado)", "SAL-ve"],
      ["Arrivederci", "Adiós (formal)", "a-rri-ve-DÉR-chi"],
      ["A dopo", "Hasta luego", "a DÓ-po"],
      ["A domani", "Hasta mañana", "a do-MÁ-ni"],
      ["Grazie", "Gracias", "GRÁ-tsie"],
      ["Prego", "De nada / Adelante", "PRÉ-go"],
      ["Scusa / Scusi", "Perdón (tú / usted)", "SCÚ-sa / SCÚ-si"],
      ["Piacere", "Mucho gusto", "pia-CHÉ-re"]
    ],
    phrases: [
      ["Come ti chiami?", "¿Cómo te llamas?", "Informal"],
      ["Mi chiamo Jonathan.", "Me llamo Jonathan.", ""],
      ["Come stai?", "¿Cómo estás?", "Informal (tú)"],
      ["Come sta?", "¿Cómo está usted?", "Formal (Lei)"],
      ["Sto bene, grazie. E tu?", "Estoy bien, gracias. ¿Y tú?", ""],
      ["Così così.", "Más o menos.", ""],
      ["Di dove sei?", "¿De dónde eres?", ""],
      ["Sono di Panama.", "Soy de Panamá.", ""],
      ["Piacere di conoscerti!", "¡Gusto en conocerte!", ""]
    ],
    grammar: {
      title: "Tú vs. Lei (usted)",
      html: `<p>En italiano el trato formal usa <strong>Lei</strong> (literalmente “ella”), y el verbo va en 3ª persona, igual que nuestro “usted”.</p>
      <table><tr><th>Español</th><th>Italiano</th></tr>
      <tr><td>¿Cómo estás? (tú)</td><td>Come stai?</td></tr>
      <tr><td>¿Cómo está? (usted)</td><td>Come sta?</td></tr>
      <tr><td>¿Cómo te llamas?</td><td>Come ti chiami?</td></tr>
      <tr><td>¿Cómo se llama usted?</td><td>Come si chiama?</td></tr></table>
      <p>Con gente de tu edad, en un bar o con amigos: <strong>tu</strong>. Con un profesor, en una tienda o en una oficina: <strong>Lei</strong>.</p>`
    },
    tips: [
      "<strong>Pronunciación:</strong> <em>ci / ce</em> suenan “chi / che” (ciao = CHAO). <em>chi / che</em> suenan “ki / ke” (chiamo = KIA-mo). Es al revés de lo que parece.",
      "<strong>Ciao</strong> se usa tanto para saludar como para despedirse, pero solo con gente de confianza."
    ],
    dialog: [
      ["A", "Ciao! Come ti chiami?", "¡Hola! ¿Cómo te llamas?"],
      ["B", "Ciao, mi chiamo Giulia. E tu?", "Hola, me llamo Giulia. ¿Y tú?"],
      ["A", "Io sono Jonathan. Piacere!", "Yo soy Jonathan. ¡Mucho gusto!"],
      ["B", "Piacere mio! Di dove sei?", "¡El gusto es mío! ¿De dónde eres?"],
      ["A", "Sono di Panama. E tu?", "Soy de Panamá. ¿Y tú?"],
      ["B", "Sono di Roma. Benvenuto!", "Soy de Roma. ¡Bienvenido!"]
    ],
    quiz: [
      { q: "¿Cómo saludas a un profesor a las 10 de la mañana?", opts: ["Ciao!", "Buongiorno!", "Buonanotte!"], a: 1 },
      { q: "“Come sta?” es…", opts: ["Informal", "Formal (usted)", "Una despedida"], a: 1 },
      { q: "¿Cómo suena “chiamo”?", opts: ["CHIA-mo", "KIA-mo", "SHIA-mo"], a: 1 },
      { q: "Escribe en italiano: “Me llamo Marco.”", fill: ["mi chiamo marco"] },
      { q: "Escribe: “Gracias”", fill: ["grazie"] },
      { q: "Alguien te dice “Grazie!”. Respondes…", opts: ["Prego!", "Scusi!", "Salve!"], a: 0 }
    ]
  },

  {
    id: "essere-avere",
    title: "Essere e avere",
    sub: "Soy, tengo · edad, nacionalidad, profesión",
    intro: "Los dos verbos más importantes. Con ellos ya puedes hablar de ti: quién eres, cuántos años tienes, a qué te dedicas.",
    vocab: [
      ["italiano / italiana", "italiano / italiana", "i-ta-LIÁ-no"],
      ["panamense", "panameño/a", "pa-na-MÉN-se"],
      ["spagnolo", "español (idioma)", "spa-ÑÓ-lo"],
      ["lo studente / la studentessa", "el/la estudiante", "stu-DÉN-te"],
      ["l'ingegnere", "el ingeniero", "in-ye-ÑÉ-re"],
      ["il lavoro", "el trabajo", "la-VÓ-ro"],
      ["l'anno / gli anni", "el año / los años", "ÁN-no"],
      ["il fratello", "el hermano", "fra-TÉL-lo"],
      ["la sorella", "la hermana", "so-RÉL-la"],
      ["sposato / single", "casado / soltero", "spo-SÁ-to"],
      ["stanco", "cansado", "STÁN-co"],
      ["fame / sete", "hambre / sed", "FÁ-me / SÉ-te"]
    ],
    phrases: [
      ["Ho 24 anni.", "Tengo 24 años.", "¡Con avere, no con essere!"],
      ["Quanti anni hai?", "¿Cuántos años tienes?", ""],
      ["Sono panamense.", "Soy panameño.", ""],
      ["Che lavoro fai?", "¿En qué trabajas?", ""],
      ["Sono studente.", "Soy estudiante.", "Sin artículo “un”"],
      ["Ho fame.", "Tengo hambre.", ""],
      ["Ho un fratello e una sorella.", "Tengo un hermano y una hermana.", ""],
      ["Sono stanco.", "Estoy cansado.", "Essere = ser y estar"]
    ],
    grammar: {
      title: "Conjugación: essere (ser/estar) y avere (tener)",
      html: `<table><tr><th>Persona</th><th>essere</th><th>avere</th></tr>
      <tr><td>io</td><td>sono</td><td>ho</td></tr>
      <tr><td>tu</td><td>sei</td><td>hai</td></tr>
      <tr><td>lui / lei / Lei</td><td>è</td><td>ha</td></tr>
      <tr><td>noi</td><td>siamo</td><td>abbiamo</td></tr>
      <tr><td>voi</td><td>siete</td><td>avete</td></tr>
      <tr><td>loro</td><td>sono</td><td>hanno</td></tr></table>
      <p>La <strong>h</strong> de <em>ho, hai, ha, hanno</em> es muda: “o, ai, a, ANno”. Sirve para no confundir <em>ha</em> (tiene) con <em>a</em> (a).</p>`
    },
    tips: [
      "<strong>Essere</strong> cubre “ser” y “estar”: <em>sono stanco</em> (estoy cansado), <em>sono alto</em> (soy alto). Una cosa menos que pensar.",
      "<strong>Ojo:</strong> en italiano casi siempre se omite el pronombre: <em>sono di Panama</em>, no “io sono di Panama” (salvo para enfatizar, como en español)."
    ],
    dialog: [
      ["A", "Quanti anni hai?", "¿Cuántos años tienes?"],
      ["B", "Ho ventiquattro anni. E tu?", "Tengo veinticuatro. ¿Y tú?"],
      ["A", "Ventisei. Che lavoro fai?", "Veintiséis. ¿En qué trabajas?"],
      ["B", "Sono studente, ma lavoro anche in un bar.", "Soy estudiante, pero también trabajo en un bar."],
      ["A", "Hai fratelli?", "¿Tienes hermanos?"],
      ["B", "Sì, ho una sorella. Lei è più piccola.", "Sí, tengo una hermana. Ella es menor."]
    ],
    quiz: [
      { q: "“Tengo 24 años” se dice…", opts: ["Sono 24 anni", "Ho 24 anni", "Ha 24 anni"], a: 1 },
      { q: "Completa: Noi ___ di Panama.", opts: ["siamo", "sono", "siete"], a: 0 },
      { q: "Completa: Loro ___ fame.", opts: ["ha", "hanno", "avete"], a: 1 },
      { q: "Escribe “tú eres” (essere, tu):", fill: ["sei", "tu sei"] },
      { q: "Escribe “ella tiene” (avere, lei):", fill: ["ha", "lei ha"] },
      { q: "¿Cómo suena “hanno”?", opts: ["JÁN-no", "ÁN-no", "HÁ-no con h aspirada"], a: 1 }
    ]
  },

  {
    id: "orari",
    title: "Orari e prezzi",
    sub: "¿Qué hora es? · precios · quedar con alguien",
    intro: "Números para dar tu número, pagar, decir la hora y quedar con alguien.",
    vocab: [
      ["uno, due, tre", "1, 2, 3", "Ú-no, DÚ-e, TRE"],
      ["quattro, cinque, sei", "4, 5, 6", "CUÁT-tro, CHÍN-cue, SÉI"],
      ["sette, otto, nove", "7, 8, 9", "SÉT-te, ÓT-to, NÓ-ve"],
      ["dieci", "10", "DIÉ-chi"],
      ["undici, dodici", "11, 12", "ÚN-di-chi, DÓ-di-chi"],
      ["venti", "20", "VÉN-ti"],
      ["ventuno, ventotto", "21, 28", "ven-TÚ-no"],
      ["trenta, quaranta", "30, 40", "TRÉN-ta, cua-RÁN-ta"],
      ["cinquanta, sessanta", "50, 60", "chin-CUÁN-ta"],
      ["settanta, ottanta, novanta", "70, 80, 90", "set-TÁN-ta"],
      ["cento", "100", "CHÉN-to"],
      ["mezzo / un quarto", "media / un cuarto", "MÉD-dzo"]
    ],
    phrases: [
      ["Che ore sono?", "¿Qué hora es?", ""],
      ["Sono le tre e mezza.", "Son las tres y media.", ""],
      ["È l'una.", "Es la una.", "Singular, como en español"],
      ["A che ora ci vediamo?", "¿A qué hora nos vemos?", ""],
      ["Alle otto di sera.", "A las ocho de la noche.", ""],
      ["Qual è il tuo numero?", "¿Cuál es tu número?", ""],
      ["Quanto costa?", "¿Cuánto cuesta?", ""],
      ["Costa dodici euro.", "Cuesta doce euros.", "euro no cambia en plural"]
    ],
    grammar: {
      title: "Cómo se forman los números",
      html: `<p>Decena + unidad, todo junto: <strong>trenta + due = trentadue</strong> (32).</p>
      <p>Si la unidad es <strong>uno</strong> u <strong>otto</strong> (empiezan con vocal), la decena pierde su última vocal:</p>
      <table><tr><th>Número</th><th>Italiano</th></tr>
      <tr><td>21</td><td>ventuno</td></tr>
      <tr><td>28</td><td>ventotto</td></tr>
      <tr><td>33</td><td>trentatré</td></tr>
      <tr><td>41</td><td>quarantuno</td></tr>
      <tr><td>99</td><td>novantanove</td></tr></table>
      <p>Los terminados en 3 llevan tilde: <em>ventitré, trentatré</em>.</p>`
    },
    tips: [
      "<strong>Hora:</strong> en Italia se usa mucho el formato de 24 h: “alle venti” = a las 8 p. m.",
      "<strong>Doble consonante:</strong> <em>otto, sette, mezzo</em> se pronuncian con una pequeña pausa, alargando la consonante. Si dices “oto” suena raro."
    ],
    dialog: [
      ["A", "Ci vediamo stasera?", "¿Nos vemos esta noche?"],
      ["B", "Sì! A che ora?", "¡Sí! ¿A qué hora?"],
      ["A", "Alle nove, davanti al cinema.", "A las nueve, frente al cine."],
      ["B", "Perfetto. Quanto costa il biglietto?", "Perfecto. ¿Cuánto cuesta la entrada?"],
      ["A", "Otto euro e cinquanta.", "Ocho euros con cincuenta."],
      ["B", "Ok, a dopo!", "¡Ok, hasta luego!"]
    ],
    quiz: [
      { q: "¿Cómo se dice 28?", opts: ["ventiotto", "ventotto", "vent'otto"], a: 1 },
      { q: "“Sono le quattro e mezza” =", opts: ["4:15", "4:30", "4:45"], a: 1 },
      { q: "Escribe el número 50 en italiano:", fill: ["cinquanta"] },
      { q: "Escribe el número 100:", fill: ["cento"] },
      { q: "“Alle venti” es…", opts: ["las 2 p. m.", "las 8 p. m.", "las 10 p. m."], a: 1 },
      { q: "¿Cómo preguntas el precio?", opts: ["Che ore sono?", "Quanto costa?", "Quanti anni hai?"], a: 1 }
    ]
  },

  {
    id: "bar",
    title: "Al bar",
    sub: "Pedir café, aperitivo y pagar",
    intro: "El bar es el centro de la vida italiana: desayuno de pie, café a cualquier hora y aperitivo antes de cenar.",
    vocab: [
      ["un caffè", "un espresso", "caf-FÉ"],
      ["un cappuccino", "un capuchino", "cap-pu-CHÍ-no"],
      ["un cornetto", "un croissant", "cor-NÉT-to"],
      ["un bicchiere d'acqua", "un vaso de agua", "bic-KIÉ-re"],
      ["acqua naturale / frizzante", "agua sin gas / con gas", "fri-DZÁN-te"],
      ["una birra", "una cerveza", "BÍR-ra"],
      ["un bicchiere di vino", "una copa de vino", "VÍ-no"],
      ["lo spritz", "el spritz (aperitivo)", "SPRITS"],
      ["il conto", "la cuenta", "CÓN-to"],
      ["lo scontrino", "el ticket / recibo", "scon-TRÍ-no"],
      ["il bancone", "la barra", "ban-CÓ-ne"],
      ["lo zucchero", "el azúcar", "DZÚC-ke-ro"]
    ],
    phrases: [
      ["Vorrei un caffè, per favore.", "Quisiera un café, por favor.", "La forma más educada"],
      ["Prendo un cappuccino.", "Tomo un capuchino.", ""],
      ["Per me una birra.", "Para mí una cerveza.", ""],
      ["Il conto, per favore.", "La cuenta, por favor.", ""],
      ["Posso pagare con la carta?", "¿Puedo pagar con tarjeta?", ""],
      ["Quant'è?", "¿Cuánto es?", "Muy común al pagar"],
      ["Offro io!", "¡Invito yo!", ""],
      ["Cin cin! / Salute!", "¡Salud!", ""]
    ],
    grammar: {
      title: "Artículos: il, lo, la, l', un, uno, una",
      html: `<table><tr><th>Tipo de palabra</th><th>el / la</th><th>un / una</th></tr>
      <tr><td>Masculino normal</td><td>il caffè</td><td>un caffè</td></tr>
      <tr><td>Masc. con s+consonante, z, gn, ps</td><td>lo spritz, lo zucchero</td><td>uno spritz</td></tr>
      <tr><td>Masc. con vocal</td><td>l'aperitivo</td><td>un aperitivo</td></tr>
      <tr><td>Femenino</td><td>la birra</td><td>una birra</td></tr>
      <tr><td>Fem. con vocal</td><td>l'acqua</td><td>un'acqua</td></tr></table>
      <p><strong>Vorrei</strong> (quisiera) es tu mejor amigo: sirve en bares, tiendas, hoteles y restaurantes.</p>`
    },
    tips: [
      "<strong>Cultura:</strong> si pides “un caffè” te dan un espresso. “Latte” es solo leche: si quieres café con leche, pide <em>caffè latte</em> o <em>latte macchiato</em>.",
      "<strong>Cultura:</strong> el capuchino es de la mañana. Pedirlo después de comer es muy de turista (nadie te va a regañar, pero lo notan 😄).",
      "<strong>Aperitivo:</strong> entre las 18 y las 20 h, pides un spritz y muchas veces te ponen algo de picar gratis."
    ],
    dialog: [
      ["A", "Buongiorno! Cosa prendi?", "¡Buenos días! ¿Qué vas a tomar?"],
      ["B", "Vorrei un cappuccino e un cornetto, per favore.", "Quisiera un capuchino y un croissant, por favor."],
      ["A", "Cornetto vuoto o alla crema?", "¿Croissant solo o con crema?"],
      ["B", "Alla crema. Quant'è?", "Con crema. ¿Cuánto es?"],
      ["A", "Due euro e ottanta.", "Dos euros con ochenta."],
      ["B", "Ecco. Grazie, buona giornata!", "Aquí tiene. ¡Gracias, buen día!"]
    ],
    quiz: [
      { q: "Pides “un caffè” en Italia. Te dan…", opts: ["Café americano", "Un espresso", "Café con leche"], a: 1 },
      { q: "Artículo correcto: ___ spritz", opts: ["il", "lo", "la"], a: 1 },
      { q: "Artículo correcto: ___ acqua", opts: ["la", "lo", "l'"], a: 2 },
      { q: "Escribe: “La cuenta, por favor.”", fill: ["il conto, per favore", "il conto per favore"] },
      { q: "Escribe “quisiera” en italiano:", fill: ["vorrei"] },
      { q: "“Offro io!” significa…", opts: ["¡Invito yo!", "¡Yo pido!", "¡Me voy!"], a: 0 }
    ]
  },

  {
    id: "giornata",
    title: "La mia giornata",
    sub: "Verbos -are / -ere / -ire · rutina",
    intro: "Aprende el presente de los verbos regulares y describe tu día normal: trabajo, gym, estudio, salir.",
    vocab: [
      ["svegliarsi", "despertarse", "sve-LIÁR-si"],
      ["fare colazione", "desayunar", "co-la-TSIÓ-ne"],
      ["lavorare", "trabajar", "la-vo-RÁ-re"],
      ["studiare", "estudiar", "stu-DIÁ-re"],
      ["prendere l'autobus", "tomar el bus", "PRÉN-de-re"],
      ["pranzare / cenare", "almorzar / cenar", "pran-DZÁ-re"],
      ["andare in palestra", "ir al gym", "pa-LÉS-tra"],
      ["uscire con gli amici", "salir con los amigos", "u-SHÍ-re"],
      ["dormire", "dormir", "dor-MÍ-re"],
      ["sempre / spesso", "siempre / a menudo", "SÉM-pre / SPÉS-so"],
      ["di solito", "normalmente", "di SÓ-li-to"],
      ["mai", "nunca", "MAI"]
    ],
    phrases: [
      ["Mi sveglio alle sette.", "Me despierto a las siete.", ""],
      ["Di solito lavoro fino alle cinque.", "Normalmente trabajo hasta las cinco.", ""],
      ["Il lunedì vado in palestra.", "Los lunes voy al gym.", "il + día = todos los…"],
      ["Non mangio mai a casa.", "Nunca como en casa.", "Doble negación, como en español"],
      ["Il weekend esco con gli amici.", "El fin de semana salgo con mis amigos.", ""],
      ["Cosa fai stasera?", "¿Qué haces esta noche?", ""],
      ["Guardo una serie su Netflix.", "Veo una serie en Netflix.", ""]
    ],
    grammar: {
      title: "Presente de los verbos regulares",
      html: `<table><tr><th>Persona</th><th>parlare</th><th>prendere</th><th>dormire</th></tr>
      <tr><td>io</td><td>parlo</td><td>prendo</td><td>dormo</td></tr>
      <tr><td>tu</td><td>parli</td><td>prendi</td><td>dormi</td></tr>
      <tr><td>lui/lei</td><td>parla</td><td>prende</td><td>dorme</td></tr>
      <tr><td>noi</td><td>parliamo</td><td>prendiamo</td><td>dormiamo</td></tr>
      <tr><td>voi</td><td>parlate</td><td>prendete</td><td>dormite</td></tr>
      <tr><td>loro</td><td>parlano</td><td>prendono</td><td>dormono</td></tr></table>
      <p>Muy parecido al español. Truco: <strong>tu</strong> siempre termina en <strong>-i</strong>, y <strong>noi</strong> siempre en <strong>-iamo</strong>.</p>
      <p>Irregulares útiles: <strong>fare</strong> (faccio, fai, fa…), <strong>andare</strong> (vado, vai, va…), <strong>uscire</strong> (esco, esci, esce…).</p>`
    },
    tips: [
      "<strong>sc</strong> antes de e/i suena “sh”: <em>uscire</em> = u-SHÍ-re, <em>esci</em> = É-shi.",
      "<strong>gl</strong> suena como una “ll” suave: <em>sveglio</em> = SVÉ-lio, <em>famiglia</em> = fa-MÍ-lia."
    ],
    dialog: [
      ["A", "A che ora ti svegli di solito?", "¿A qué hora te despiertas normalmente?"],
      ["B", "Alle sei e mezza, purtroppo.", "A las seis y media, lamentablemente."],
      ["A", "Così presto? Che fai?", "¿Tan temprano? ¿Qué haces?"],
      ["B", "Vado in palestra prima di lavorare.", "Voy al gym antes de trabajar."],
      ["A", "Bravo! Io invece dormo fino alle nove.", "¡Bien! Yo en cambio duermo hasta las nueve."],
      ["B", "Beato te!", "¡Qué suerte la tuya!"]
    ],
    quiz: [
      { q: "Completa: Noi ___ (parlare) italiano.", opts: ["parlate", "parliamo", "parlano"], a: 1 },
      { q: "Completa: Tu ___ (prendere) l'autobus?", opts: ["prendi", "prende", "prendo"], a: 0 },
      { q: "Escribe “yo duermo”:", fill: ["dormo", "io dormo"] },
      { q: "Escribe “ellos trabajan” (lavorare):", fill: ["lavorano", "loro lavorano"] },
      { q: "“Il sabato esco” significa…", opts: ["Este sábado salgo", "Los sábados salgo", "El sábado pasado salí"], a: 1 },
      { q: "¿Cómo suena “esci”?", opts: ["ÉS-ki", "É-shi", "ÉS-chi"], a: 1 }
    ]
  },

  {
    id: "citta",
    title: "In giro per la città",
    sub: "Direcciones, transporte y lugares",
    intro: "Para moverte solo por una ciudad italiana: preguntar dónde está algo, entender la respuesta y comprar un ticket.",
    vocab: [
      ["la stazione", "la estación", "sta-TSIÓ-ne"],
      ["la fermata", "la parada", "fer-MÁ-ta"],
      ["il biglietto", "el boleto", "bi-LIÉT-to"],
      ["la metro", "el metro", "MÉ-tro"],
      ["la piazza", "la plaza", "PIÁT-tsa"],
      ["la farmacia", "la farmacia", "far-ma-CHÍ-a"],
      ["il supermercato", "el supermercado", "su-per-mer-CÁ-to"],
      ["a destra / a sinistra", "a la derecha / izquierda", "DÉS-tra / si-NÍS-tra"],
      ["sempre dritto", "todo recto", "SÉM-pre DRÍT-to"],
      ["vicino / lontano", "cerca / lejos", "vi-CHÍ-no / lon-TÁ-no"],
      ["l'incrocio", "el cruce", "in-CRÓ-cho"],
      ["il semaforo", "el semáforo", "se-MÁ-fo-ro"]
    ],
    phrases: [
      ["Scusi, dov'è la stazione?", "Disculpe, ¿dónde está la estación?", ""],
      ["C'è una farmacia qui vicino?", "¿Hay una farmacia cerca?", "c'è = hay (singular)"],
      ["Vada sempre dritto.", "Siga todo recto.", "Imperativo formal"],
      ["Giri a destra al semaforo.", "Gire a la derecha en el semáforo.", ""],
      ["È lontano?", "¿Está lejos?", ""],
      ["Sono cinque minuti a piedi.", "Son cinco minutos a pie.", ""],
      ["Un biglietto per Firenze, per favore.", "Un boleto para Florencia, por favor.", ""],
      ["Mi sono perso.", "Me perdí.", ""]
    ],
    grammar: {
      title: "C'è / ci sono y preposiciones con artículo",
      html: `<p><strong>C'è</strong> = hay (una cosa). <strong>Ci sono</strong> = hay (varias).</p>
      <p>Las preposiciones se fusionan con el artículo, como nuestro “al” y “del”, pero con más formas:</p>
      <table><tr><th>Preposición</th><th>+ il</th><th>+ la</th></tr>
      <tr><td>a (a)</td><td>al</td><td>alla</td></tr>
      <tr><td>di (de)</td><td>del</td><td>della</td></tr>
      <tr><td>in (en)</td><td>nel</td><td>nella</td></tr>
      <tr><td>da (desde/donde)</td><td>dal</td><td>dalla</td></tr>
      <tr><td>su (sobre)</td><td>sul</td><td>sulla</td></tr></table>
      <p>Ej.: <em>Vado alla stazione</em>, <em>Il bar è nella piazza</em>.</p>`
    },
    tips: [
      "<strong>Transporte:</strong> en Italia los boletos de bus se compran antes de subir (en un <em>tabacchi</em> o en la app) y hay que validarlos al subir.",
      "<strong>Falso amigo:</strong> <em>salire</em> = subir (al tren), no “salir”. Salir es <em>uscire</em>."
    ],
    dialog: [
      ["A", "Scusi, c'è una metro qui vicino?", "Disculpe, ¿hay un metro cerca?"],
      ["B", "Sì, vada sempre dritto e poi giri a sinistra.", "Sí, siga recto y luego gire a la izquierda."],
      ["A", "È lontano?", "¿Está lejos?"],
      ["B", "No, sono dieci minuti a piedi.", "No, son diez minutos a pie."],
      ["A", "Dove compro il biglietto?", "¿Dónde compro el boleto?"],
      ["B", "Al tabacchi, lì di fronte.", "En el estanco, ahí enfrente."]
    ],
    quiz: [
      { q: "“A sinistra” significa…", opts: ["A la derecha", "A la izquierda", "Todo recto"], a: 1 },
      { q: "Completa: ___ due farmacie qui vicino.", opts: ["C'è", "Ci sono", "È"], a: 1 },
      { q: "a + la =", opts: ["al", "alla", "alle"], a: 1 },
      { q: "Escribe: “¿Dónde está la estación?” (con Scusi,)", fill: ["scusi, dov'è la stazione?", "scusi dov'è la stazione", "scusi, dov'è la stazione", "dov'è la stazione?", "dov'è la stazione"] },
      { q: "“Salire sul treno” es…", opts: ["Salir del tren", "Subir al tren", "Perder el tren"], a: 1 },
      { q: "Escribe “el boleto”:", fill: ["il biglietto"] }
    ]
  },

  {
    id: "ristorante",
    title: "Al ristorante",
    sub: "Reservar, pedir y gustos",
    intro: "Una cena completa en italiano: reservar mesa, entender el menú, pedir y decir lo que te gusta o no.",
    vocab: [
      ["il menù", "la carta", "me-NÚ"],
      ["l'antipasto", "la entrada", "an-ti-PÁS-to"],
      ["il primo", "primer plato (pasta, risotto)", "PRÍ-mo"],
      ["il secondo", "segundo plato (carne, pescado)", "se-CÓN-do"],
      ["il contorno", "la guarnición", "con-TÓR-no"],
      ["il dolce", "el postre", "DÓL-che"],
      ["la carne / il pesce", "la carne / el pescado", "PÉ-she"],
      ["le verdure", "las verduras", "ver-DÚ-re"],
      ["il burro", "la mantequilla", "BÚR-ro"],
      ["piccante", "picante", "pic-CÁN-te"],
      ["buonissimo", "buenísimo", "buo-NÍS-si-mo"],
      ["il cameriere", "el mesero", "ca-me-RIÉ-re"]
    ],
    phrases: [
      ["Un tavolo per due, per favore.", "Una mesa para dos, por favor.", ""],
      ["Ho una prenotazione a nome Page.", "Tengo una reserva a nombre de Page.", ""],
      ["Cosa mi consiglia?", "¿Qué me recomienda?", ""],
      ["Come primo prendo la carbonara.", "De primero tomo la carbonara.", ""],
      ["Mi piace la pizza.", "Me gusta la pizza.", ""],
      ["Mi piacciono i dolci.", "Me gustan los postres.", "Plural → piacciono"],
      ["Non mi piace il pesce.", "No me gusta el pescado.", ""],
      ["Era tutto buonissimo!", "¡Todo estaba buenísimo!", ""]
    ],
    grammar: {
      title: "Mi piace / mi piacciono",
      html: `<p>Funciona exactamente como “gustar” en español. ¡Ventaja para ti!</p>
      <table><tr><th>Español</th><th>Italiano</th></tr>
      <tr><td>me gusta</td><td>mi piace</td></tr>
      <tr><td>te gusta</td><td>ti piace</td></tr>
      <tr><td>le gusta (a él / a ella)</td><td>gli piace / le piace</td></tr>
      <tr><td>nos gusta</td><td>ci piace</td></tr>
      <tr><td>me gustan</td><td>mi piacciono</td></tr></table>
      <p>Con verbos también: <em>Mi piace cucinare</em> (me gusta cocinar).</p>`
    },
    tips: [
      "<strong>Falso amigo:</strong> <em>burro</em> = mantequilla. <em>Salire</em> = subir. <em>Guardare</em> = mirar. <em>Caldo</em> = caliente (¡no caldo de sopa!).",
      "<strong>Cultura:</strong> en Italia el <em>coperto</em> (cubierto) es un cargo fijo por persona que aparece en la cuenta. La propina no es obligatoria.",
      "<strong>Cultura:</strong> nada de pollo en la pasta ni ketchup en la pizza si quieres ganarte al mesero 😉."
    ],
    dialog: [
      ["A", "Buonasera, avete un tavolo per due?", "Buenas noches, ¿tienen una mesa para dos?"],
      ["B", "Certo, prego. Ecco il menù.", "Claro, adelante. Aquí está la carta."],
      ["A", "Cosa mi consiglia?", "¿Qué me recomienda?"],
      ["B", "Le tagliatelle al ragù sono la nostra specialità.", "Las tagliatelle al ragú son nuestra especialidad."],
      ["A", "Perfetto, le prendo. E da bere un bicchiere di vino rosso.", "Perfecto, las pido. Y de tomar una copa de vino tinto."],
      ["B", "Ottima scelta!", "¡Excelente elección!"]
    ],
    quiz: [
      { q: "“Il burro” es…", opts: ["El burro", "La mantequilla", "El pan"], a: 1 },
      { q: "Completa: Mi ___ gli spaghetti.", opts: ["piace", "piacciono", "piaci"], a: 1 },
      { q: "La pasta normalmente es el…", opts: ["antipasto", "primo", "secondo"], a: 1 },
      { q: "Escribe: “Me gusta la pizza.”", fill: ["mi piace la pizza"] },
      { q: "Escribe “¿Qué me recomienda?” (formal):", fill: ["cosa mi consiglia?", "cosa mi consiglia", "che cosa mi consiglia?", "che cosa mi consiglia"] },
      { q: "“Caldo” significa…", opts: ["Sopa", "Caliente", "Frío"], a: 1 }
    ]
  },

  {
    id: "weekend",
    title: "Il weekend: passato prossimo",
    sub: "Contar qué hiciste · ho fatto, sono andato",
    intro: "El pasado más usado en la conversación. Con esto puedes contar tu fin de semana, un viaje o una salida.",
    vocab: [
      ["ieri", "ayer", "IÉ-ri"],
      ["ieri sera", "anoche", "IÉ-ri SÉ-ra"],
      ["la settimana scorsa", "la semana pasada", "SCÓR-sa"],
      ["fa (due giorni fa)", "hace (hace dos días)", "FA"],
      ["ho fatto", "hice", "o FÁT-to"],
      ["ho mangiato", "comí", "o man-YÁ-to"],
      ["ho visto", "vi", "o VÍS-to"],
      ["sono andato/a", "fui", "SÓ-no an-DÁ-to"],
      ["sono uscito/a", "salí", "u-SHÍ-to"],
      ["sono stato/a", "estuve / fui", "STÁ-to"],
      ["divertente / noioso", "divertido / aburrido", "di-ver-TÉN-te / noi-Ó-so"],
      ["una festa", "una fiesta", "FÉS-ta"]
    ],
    phrases: [
      ["Cosa hai fatto nel weekend?", "¿Qué hiciste el fin de semana?", ""],
      ["Sabato sono andato al mare.", "El sábado fui a la playa.", ""],
      ["Ieri sera ho visto un film.", "Anoche vi una película.", ""],
      ["Siamo usciti a ballare.", "Salimos a bailar.", "Con essere, concuerda en plural"],
      ["Ho dormito tutto il giorno.", "Dormí todo el día.", ""],
      ["Mi sono divertito un sacco!", "¡Me divertí un montón!", ""],
      ["Com'è andata?", "¿Cómo te fue?", ""]
    ],
    grammar: {
      title: "Passato prossimo = avere/essere + participio",
      html: `<p>Participio: <strong>-are → -ato</strong>, <strong>-ere → -uto</strong>, <strong>-ire → -ito</strong>.</p>
      <p>La mayoría de verbos usan <strong>avere</strong>: <em>ho mangiato, hai lavorato, abbiamo dormito</em>.</p>
      <p>Los verbos de <strong>movimiento o cambio de estado</strong> (andare, venire, uscire, partire, arrivare, stare, essere, nascere) y los reflexivos usan <strong>essere</strong>, y el participio concuerda como un adjetivo:</p>
      <table><tr><th>Quién</th><th>andare</th></tr>
      <tr><td>io (hombre)</td><td>sono andato</td></tr>
      <tr><td>io (mujer)</td><td>sono andata</td></tr>
      <tr><td>noi (chicos / mixto)</td><td>siamo andati</td></tr>
      <tr><td>loro (chicas)</td><td>sono andate</td></tr></table>
      <p>Irregulares típicos: <em>fare → fatto, vedere → visto, prendere → preso, bere → bevuto, leggere → letto</em>.</p>`
    },
    tips: [
      "<strong>Truco:</strong> si en tu cabeza el verbo “mueve” tu cuerpo de un lugar a otro (ir, venir, salir, llegar), usa <em>essere</em>.",
      "<strong>Expresión:</strong> <em>un sacco</em> = un montón. Muy coloquial y muy usado entre jóvenes."
    ],
    dialog: [
      ["A", "Allora, cosa hai fatto nel weekend?", "Entonces, ¿qué hiciste el fin de semana?"],
      ["B", "Sabato sono andata a una festa a casa di Luca.", "El sábado fui a una fiesta en casa de Luca."],
      ["A", "Dai! Com'è stata?", "¡No me digas! ¿Qué tal estuvo?"],
      ["B", "Divertentissima. Abbiamo ballato fino alle tre.", "Divertidísima. Bailamos hasta las tres."],
      ["A", "E domenica?", "¿Y el domingo?"],
      ["B", "Ho dormito tutto il giorno, ovviamente!", "¡Dormí todo el día, obviamente!"]
    ],
    quiz: [
      { q: "“Ayer comí pasta” =", opts: ["Ieri sono mangiato la pasta", "Ieri ho mangiato la pasta", "Ieri mangio la pasta"], a: 1 },
      { q: "Una chica dice: “Sono ___ al cinema.”", opts: ["andato", "andata", "andati"], a: 1 },
      { q: "Participio de “fare”:", opts: ["fatto", "fato", "faciuto"], a: 0 },
      { q: "Escribe “vi” (vedere, io):", fill: ["ho visto", "io ho visto"] },
      { q: "Escribe “salimos” (uscire, noi, grupo mixto):", fill: ["siamo usciti", "noi siamo usciti"] },
      { q: "¿Qué verbo usa ESSERE en pasado?", opts: ["mangiare", "partire", "guardare"], a: 1 }
    ]
  },

  // ===================== NIVEL A2 =====================

  {
    id: "a2-imperfetto",
    level: "A2",
    title: "Ricordi: l'imperfetto",
    sub: "Cuando era niño… · descripciones y costumbres",
    intro: "El segundo pasado del italiano. Se usa para describir cómo eran las cosas, lo que hacías habitualmente y el contexto de una historia.",
    vocab: [
      ["da bambino / da bambina", "de niño / de niña", "da bam-BÍ-no"],
      ["quando ero piccolo", "cuando era pequeño", "CUÁN-do É-ro PÍC-co-lo"],
      ["l'infanzia", "la infancia", "in-FÁN-tsia"],
      ["la scuola elementare", "la escuela primaria", "SCUÓ-la e-le-men-TÁ-re"],
      ["il quartiere", "el barrio", "cuar-TIÉ-re"],
      ["giocare", "jugar", "yo-CÁ-re"],
      ["i nonni", "los abuelos", "NÓN-ni"],
      ["ogni estate", "cada verano", "Ó-ñi es-TÁ-te"],
      ["di solito / sempre", "normalmente / siempre", "di SÓ-li-to"],
      ["mentre", "mientras", "MÉN-tre"],
      ["all'improvviso", "de repente", "al-lim-prov-VÍ-so"],
      ["timido / vivace", "tímido / inquieto", "TÍ-mi-do / vi-VÁ-che"]
    ],
    phrases: [
      ["Da bambino giocavo a calcio ogni giorno.", "De niño jugaba fútbol todos los días.", "Acción habitual → imperfetto"],
      ["Quando ero piccolo vivevo con i nonni.", "Cuando era pequeño vivía con mis abuelos.", ""],
      ["Ero molto timido.", "Era muy tímido.", "Descripción → imperfetto"],
      ["Ogni estate andavamo al mare.", "Cada verano íbamos a la playa.", ""],
      ["Mentre studiavo, è arrivato Marco.", "Mientras estudiaba, llegó Marco.", "Contexto (imperf.) + acción puntual (pass. pross.)"],
      ["Faceva caldo e c'era tanta gente.", "Hacía calor y había mucha gente.", ""],
      ["Com'eri da piccolo?", "¿Cómo eras de pequeño?", ""]
    ],
    grammar: {
      title: "Imperfetto: formación y uso",
      html: `<p>Se quita <strong>-re</strong> al infinitivo y se añade <strong>-vo, -vi, -va, -vamo, -vate, -vano</strong>. ¡Se parece muchísimo al español!</p>
      <table><tr><th>Persona</th><th>parlare</th><th>avere</th><th>dormire</th></tr>
      <tr><td>io</td><td>parlavo</td><td>avevo</td><td>dormivo</td></tr>
      <tr><td>tu</td><td>parlavi</td><td>avevi</td><td>dormivi</td></tr>
      <tr><td>lui/lei</td><td>parlava</td><td>aveva</td><td>dormiva</td></tr>
      <tr><td>noi</td><td>parlavamo</td><td>avevamo</td><td>dormivamo</td></tr>
      <tr><td>voi</td><td>parlavate</td><td>avevate</td><td>dormivate</td></tr>
      <tr><td>loro</td><td>parlavano</td><td>avevano</td><td>dormivano</td></tr></table>
      <p>Irregulares: <strong>essere</strong> → ero, eri, era, eravamo, eravate, erano · <strong>fare</strong> → facevo · <strong>bere</strong> → bevevo · <strong>dire</strong> → dicevo.</p>
      <p><strong>¿Imperfetto o passato prossimo?</strong> Igual que “-aba/-ía” vs “-é/-í” en español: <em>Ieri <u>pioveva</u> (contexto) e <u>sono rimasto</u> a casa (acción concreta)</em>.</p>`
    },
    tips: [
      "<strong>Truco:</strong> si en español usarías “jugaba, tenía, era, íbamos”, en italiano casi siempre va imperfetto. Tu intuición de hispanohablante funciona aquí.",
      "<strong>Ojo:</strong> el acento de la 3ª plural cae lejos: <em>PAR-la-va-no, A-ve-va-no</em>, no “parlaVAno”."
    ],
    dialog: [
      ["A", "Com'eri da bambino?", "¿Cómo eras de niño?"],
      ["B", "Ero vivacissimo! Non stavo mai fermo.", "¡Era inquietísimo! Nunca me quedaba quieto."],
      ["A", "E cosa ti piaceva fare?", "¿Y qué te gustaba hacer?"],
      ["B", "Giocavo a calcio con i miei cugini ogni pomeriggio.", "Jugaba fútbol con mis primos todas las tardes."],
      ["A", "Io invece ero timida. Leggevo sempre.", "Yo en cambio era tímida. Siempre leía."],
      ["B", "Ecco perché adesso sai tutto!", "¡Por eso ahora lo sabes todo!"]
    ],
    quiz: [
      { q: "“De niño vivía en Panamá” =", opts: ["Da bambino ho vissuto a Panama", "Da bambino vivevo a Panama", "Da bambino vivo a Panama"], a: 1 },
      { q: "Imperfetto de essere, io:", opts: ["era", "ero", "sono stato"], a: 1 },
      { q: "Mentre ___ la TV, è suonato il telefono.", opts: ["guardavo", "ho guardato", "guardo"], a: 0 },
      { q: "Escribe “nosotros teníamos” (avere):", fill: ["avevamo", "noi avevamo"] },
      { q: "Escribe “ella hacía” (fare):", fill: ["faceva", "lei faceva"] },
      { q: "Escucha y escribe:", say: "andavamo al mare", fill: ["andavamo al mare"] }
    ]
  },

  {
    id: "a2-futuro",
    level: "A2",
    title: "Progetti: il futuro",
    sub: "Planes, viajes y promesas · farò, andrò",
    intro: "Para hablar de tus planes: qué vas a hacer el año que viene, tus metas y lo que harás cuando viajes a Italia.",
    vocab: [
      ["l'anno prossimo", "el año que viene", "PRÓS-si-mo"],
      ["fra due settimane", "dentro de dos semanas", "fra DÚ-e set-ti-MÁ-ne"],
      ["un giorno", "algún día", "un YÓR-no"],
      ["il progetto", "el proyecto / plan", "pro-YÉT-to"],
      ["l'obiettivo", "la meta", "o-biet-TÍ-vo"],
      ["risparmiare", "ahorrar", "ris-par-MIÁ-re"],
      ["trasferirsi", "mudarse (de ciudad)", "tras-fe-RÍR-si"],
      ["laurearsi", "graduarse (universidad)", "lau-re-ÁR-si"],
      ["forse", "quizás", "FÓR-se"],
      ["sicuramente", "seguramente", "si-cu-ra-MÉN-te"],
      ["spero di…", "espero…", "SPÉ-ro di"],
      ["ho intenzione di…", "tengo la intención de…", "in-ten-TSIÓ-ne"]
    ],
    phrases: [
      ["L'anno prossimo andrò in Italia.", "El año que viene iré a Italia.", ""],
      ["Cosa farai questo weekend?", "¿Qué harás este fin de semana?", ""],
      ["Quando avrò più soldi, viaggerò di più.", "Cuando tenga más dinero, viajaré más.", "En italiano: futuro + futuro"],
      ["Sarà difficile, ma ce la farò.", "Será difícil, pero lo lograré.", "farcela = lograrlo"],
      ["Spero di parlare bene italiano.", "Espero hablar bien italiano.", ""],
      ["Domani studio tutto il giorno.", "Mañana estudio todo el día.", "Para planes cercanos se usa mucho el presente"],
      ["Che ore saranno?", "¿Qué hora será?", "Futuro de suposición"]
    ],
    grammar: {
      title: "Futuro semplice",
      html: `<p>Terminaciones iguales para todos: <strong>-ò, -ai, -à, -emo, -ete, -anno</strong>. Ojo: los verbos en <em>-are</em> cambian la <em>a</em> por <em>e</em> (parl<u>e</u>rò).</p>
      <table><tr><th>Persona</th><th>parlare</th><th>prendere</th><th>partire</th></tr>
      <tr><td>io</td><td>parlerò</td><td>prenderò</td><td>partirò</td></tr>
      <tr><td>tu</td><td>parlerai</td><td>prenderai</td><td>partirai</td></tr>
      <tr><td>lui/lei</td><td>parlerà</td><td>prenderà</td><td>partirà</td></tr>
      <tr><td>noi</td><td>parleremo</td><td>prenderemo</td><td>partiremo</td></tr>
      <tr><td>voi</td><td>parlerete</td><td>prenderete</td><td>partirete</td></tr>
      <tr><td>loro</td><td>parleranno</td><td>prenderanno</td><td>partiranno</td></tr></table>
      <p>Irregulares: <strong>essere</strong> → sarò · <strong>avere</strong> → avrò · <strong>andare</strong> → andrò · <strong>fare</strong> → farò · <strong>venire</strong> → verrò · <strong>volere</strong> → vorrò · <strong>potere</strong> → potrò.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> después de <em>quando</em> y <em>se</em> (si) referidos al futuro, el italiano usa futuro donde el español usa subjuntivo: <em>Quando arriverò</em> = Cuando llegue.",
      "<strong>Acento:</strong> la tilde final es obligatoria y cambia el significado: <em>parlo</em> (hablo) ≠ <em>parlò</em> (habló, pasado remoto) ≠ <em>parlerò</em> (hablaré)."
    ],
    dialog: [
      ["A", "Allora, cosa farai dopo la laurea?", "Entonces, ¿qué harás después de graduarte?"],
      ["B", "Ho intenzione di trasferirmi in Italia.", "Tengo la intención de mudarme a Italia."],
      ["A", "Davvero? Dove andrai?", "¿En serio? ¿A dónde irás?"],
      ["B", "Forse a Bologna. Prima però risparmierò un po'.", "Quizás a Bolonia. Pero primero ahorraré un poco."],
      ["A", "Sarà un'esperienza bellissima!", "¡Será una experiencia preciosa!"],
      ["B", "Lo spero! Quando arriverò, ti chiamerò.", "¡Eso espero! Cuando llegue, te llamaré."]
    ],
    quiz: [
      { q: "Futuro de fare, io:", opts: ["farò", "facerò", "fazzo"], a: 0 },
      { q: "Futuro de parlare, noi:", opts: ["parlaremo", "parleremo", "parliamo"], a: 1 },
      { q: "“Cuando llegue, te llamo” =", opts: ["Quando arrivo, ti chiamo", "Quando arriverò, ti chiamerò", "Ambas son posibles"], a: 2 },
      { q: "Escribe “yo seré” (essere):", fill: ["sarò", "io sarò", "saro"] },
      { q: "Escribe “ellos irán” (andare):", fill: ["andranno", "loro andranno"] },
      { q: "Escucha y escribe:", say: "l'anno prossimo", fill: ["l'anno prossimo"] }
    ]
  },

  {
    id: "a2-shopping",
    level: "A2",
    title: "Fare shopping: lo, la, li, le",
    sub: "Ropa, tallas y pronombres directos",
    intro: "Compra ropa en Italia sin problema: pedir tu talla, probarte algo y decir “me lo llevo”. De paso aprendes los pronombres directos.",
    vocab: [
      ["i vestiti", "la ropa", "ves-TÍ-ti"],
      ["la maglietta", "la camiseta", "ma-LIÉT-ta"],
      ["la camicia", "la camisa", "ca-MÍ-cha"],
      ["i pantaloni", "los pantalones", "pan-ta-LÓ-ni"],
      ["la giacca", "la chaqueta", "YÁC-ca"],
      ["le scarpe", "los zapatos", "SCÁR-pe"],
      ["la taglia", "la talla (ropa)", "TÁ-lia"],
      ["il numero", "la talla (zapatos)", "NÚ-me-ro"],
      ["il camerino", "el probador", "ca-me-RÍ-no"],
      ["i saldi / lo sconto", "las rebajas / el descuento", "SÁL-di / SCÓN-to"],
      ["stretto / largo", "apretado / ancho", "STRÉT-to / LÁR-go"],
      ["la cassa", "la caja (para pagar)", "CÁS-sa"]
    ],
    phrases: [
      ["Posso provarla?", "¿Me la puedo probar?", ""],
      ["Che taglia porta?", "¿Qué talla usa?", "Formal"],
      ["Porto la M.", "Uso la M.", ""],
      ["Ce l'avete in nero?", "¿La tienen en negro?", "Muy usado: ce l'avete = ¿lo tienen?"],
      ["Mi sta stretta.", "Me queda apretada.", "stare = quedar (ropa)"],
      ["Avete una taglia più grande?", "¿Tienen una talla más grande?", ""],
      ["La prendo!", "¡Me la llevo!", ""],
      ["Sto solo guardando, grazie.", "Solo estoy mirando, gracias.", ""]
    ],
    grammar: {
      title: "Pronombres directos",
      html: `<p>Sustituyen a la cosa o persona, como “lo/la/los/las” en español, y van antes del verbo.</p>
      <table><tr><th>Español</th><th>Italiano</th><th>Ejemplo</th></tr>
      <tr><td>me</td><td>mi</td><td>Mi chiami?</td></tr>
      <tr><td>te</td><td>ti</td><td>Ti vedo domani.</td></tr>
      <tr><td>lo</td><td>lo</td><td>Il cappotto? Lo prendo.</td></tr>
      <tr><td>la</td><td>la</td><td>La giacca? La provo.</td></tr>
      <tr><td>nos / os</td><td>ci / vi</td><td>Ci aspetti?</td></tr>
      <tr><td>los</td><td>li</td><td>I pantaloni? Li compro.</td></tr>
      <tr><td>las</td><td>le</td><td>Le scarpe? Le provo.</td></tr></table>
      <p>Con infinitivo se pegan al final: <em>Posso provar<u>la</u>?</em> En passato prossimo el participio concuerda: <em>La giacca? L'ho comprat<u>a</u>.</em></p>`
    },
    tips: [
      "<strong>Falso amigo:</strong> <em>la camicia</em> = camisa, pero <em>la camiseta</em> se dice <em>maglietta</em>. Y <em>il vestito</em> también puede ser “el vestido” o “el traje”.",
      "<strong>Ojo:</strong> <em>le</em> es “las” (directo femenino plural), no “le” como en español. “Le” en italiano también significa “a ella” (indirecto), lo verás en otra clase."
    ],
    dialog: [
      ["A", "Buongiorno, posso aiutarla?", "Buenos días, ¿le puedo ayudar?"],
      ["B", "Sì, cerco una giacca. Questa ce l'avete in blu?", "Sí, busco una chaqueta. ¿Esta la tienen en azul?"],
      ["A", "Certo. Che taglia porta?", "Claro. ¿Qué talla usa?"],
      ["B", "La L, credo. Posso provarla?", "La L, creo. ¿Me la puedo probar?"],
      ["A", "Il camerino è in fondo a destra.", "El probador está al fondo a la derecha."],
      ["B", "Mi sta benissimo. La prendo!", "Me queda perfecta. ¡Me la llevo!"]
    ],
    quiz: [
      { q: "I pantaloni? ___ compro.", opts: ["Lo", "Li", "Le"], a: 1 },
      { q: "Le scarpe? ___ provo.", opts: ["Le", "Li", "La"], a: 0 },
      { q: "“Me queda grande” =", opts: ["Mi sta larga", "Mi è grande", "Ho grande"], a: 0 },
      { q: "Escribe: “¡Me la llevo!”", fill: ["la prendo!", "la prendo"] },
      { q: "Escribe “la talla” (ropa):", fill: ["la taglia"] },
      { q: "La maglietta? L'ho ___.", opts: ["comprato", "comprata", "comprati"], a: 1 }
    ]
  },

  {
    id: "a2-salute",
    level: "A2",
    title: "Dal medico",
    sub: "Mi fa male… · dovere, potere, volere",
    intro: "Si te enfermas en Italia necesitas explicar qué te duele, entender al médico y pedir en la farmacia. Aquí también aprendes los verbos modales.",
    vocab: [
      ["la testa", "la cabeza", "TÉS-ta"],
      ["la gola", "la garganta", "GÓ-la"],
      ["la pancia", "la barriga", "PÁN-cha"],
      ["la schiena", "la espalda", "SKIÉ-na"],
      ["il braccio / le braccia", "el brazo / los brazos", "BRÁT-cho"],
      ["la gamba", "la pierna", "GÁM-ba"],
      ["la febbre", "la fiebre", "FÉB-bre"],
      ["la tosse", "la tos", "TÓS-se"],
      ["il raffreddore", "el resfriado", "raf-fred-DÓ-re"],
      ["la ricetta", "la receta médica", "ri-CHÉT-ta"],
      ["la pastiglia", "la pastilla", "pas-TÍ-lia"],
      ["il pronto soccorso", "urgencias", "PRÓN-to soc-CÓR-so"]
    ],
    phrases: [
      ["Non mi sento bene.", "No me siento bien.", ""],
      ["Mi fa male la testa.", "Me duele la cabeza.", "Singular → fa"],
      ["Mi fanno male i piedi.", "Me duelen los pies.", "Plural → fanno"],
      ["Ho mal di gola.", "Tengo dolor de garganta.", ""],
      ["Ho la febbre da ieri.", "Tengo fiebre desde ayer.", ""],
      ["Sono allergico alla penicillina.", "Soy alérgico a la penicilina.", ""],
      ["Deve riposare e bere molta acqua.", "Debe descansar y tomar mucha agua.", ""],
      ["Posso avere qualcosa per il raffreddore?", "¿Me puede dar algo para el resfriado?", "En la farmacia"]
    ],
    grammar: {
      title: "Verbos modales: dovere, potere, volere",
      html: `<p>Van seguidos de un infinitivo, igual que “deber, poder, querer”. Los tres son irregulares:</p>
      <table><tr><th>Persona</th><th>dovere</th><th>potere</th><th>volere</th></tr>
      <tr><td>io</td><td>devo</td><td>posso</td><td>voglio</td></tr>
      <tr><td>tu</td><td>devi</td><td>puoi</td><td>vuoi</td></tr>
      <tr><td>lui/lei</td><td>deve</td><td>può</td><td>vuole</td></tr>
      <tr><td>noi</td><td>dobbiamo</td><td>possiamo</td><td>vogliamo</td></tr>
      <tr><td>voi</td><td>dovete</td><td>potete</td><td>volete</td></tr>
      <tr><td>loro</td><td>devono</td><td>possono</td><td>vogliono</td></tr></table>
      <p><strong>Mi fa male</strong> funciona como <em>mi piace</em>: el verbo concuerda con la parte del cuerpo. <em>Mi fa male il braccio / Mi fanno male le braccia.</em></p>`
    },
    tips: [
      "<strong>Falso amigo:</strong> <em>la ricetta</em> es la receta del médico <u>y</u> la de cocina. Pero <em>constipato</em> significa resfriado/congestionado, ¡no estreñido!",
      "<strong>Cultura:</strong> las farmacias tienen una cruz verde. Para urgencias el número es el <strong>112</strong>.",
      "<strong>Plural raro:</strong> algunas partes del cuerpo cambian a femenino en plural: <em>il braccio → le braccia, il dito → le dita, il ginocchio → le ginocchia</em>."
    ],
    dialog: [
      ["A", "Buongiorno, cosa si sente?", "Buenos días, ¿qué siente?"],
      ["B", "Ho mal di gola e un po' di febbre.", "Tengo dolor de garganta y un poco de fiebre."],
      ["A", "Da quanto tempo?", "¿Desde hace cuánto?"],
      ["B", "Da due giorni. E mi fa male anche la testa.", "Desde hace dos días. Y también me duele la cabeza."],
      ["A", "È un'influenza. Deve stare a letto e prendere queste pastiglie.", "Es una gripe. Debe guardar reposo y tomar estas pastillas."],
      ["B", "Posso andare a lavorare domani?", "¿Puedo ir a trabajar mañana?"]
    ],
    quiz: [
      { q: "“Me duelen las piernas” =", opts: ["Mi fa male le gambe", "Mi fanno male le gambe", "Ho male le gambe"], a: 1 },
      { q: "Potere, tu:", opts: ["puoi", "poti", "può"], a: 0 },
      { q: "Volere, io:", opts: ["volo", "voglio", "vuoglio"], a: 1 },
      { q: "“Sono constipato” significa…", opts: ["Estoy estreñido", "Estoy resfriado", "Estoy cansado"], a: 1 },
      { q: "Escribe “Tengo fiebre.”", fill: ["ho la febbre", "ho la febbre."] },
      { q: "Escribe “nosotros debemos” (dovere):", fill: ["dobbiamo", "noi dobbiamo"] }
    ]
  },

  {
    id: "a2-casa",
    level: "A2",
    title: "Cercare casa",
    sub: "Alquilar piso · comparativos y superlativos",
    intro: "Buscar apartamento, comparar opciones y hablar con el dueño. Las comparaciones te sirven para todo: ciudades, trabajos, comida…",
    vocab: [
      ["l'appartamento", "el apartamento", "ap-par-ta-MÉN-to"],
      ["l'affitto", "el alquiler", "af-FÍT-to"],
      ["affittare", "alquilar", "af-fit-TÁ-re"],
      ["il padrone di casa", "el dueño / casero", "pa-DRÓ-ne"],
      ["le spese (condominiali)", "los gastos comunes", "SPÉ-se"],
      ["la caparra", "el depósito / fianza", "ca-PÁR-ra"],
      ["la camera da letto", "el dormitorio", "CÁ-me-ra da LÉT-to"],
      ["il soggiorno", "la sala", "sod-YÓR-no"],
      ["ammobiliato", "amueblado", "am-mo-bi-LIÁ-to"],
      ["luminoso", "luminoso", "lu-mi-NÓ-so"],
      ["il coinquilino", "el compañero de piso", "co-in-cui-LÍ-no"],
      ["il trasloco", "la mudanza", "tras-LÓ-co"]
    ],
    phrases: [
      ["Quanto costa l'affitto al mese?", "¿Cuánto cuesta el alquiler al mes?", ""],
      ["Le spese sono incluse?", "¿Los gastos están incluidos?", ""],
      ["Questo è più grande dell'altro.", "Este es más grande que el otro.", ""],
      ["È meno caro di quanto pensavo.", "Es menos caro de lo que pensaba.", ""],
      ["È il più luminoso di tutti.", "Es el más luminoso de todos.", ""],
      ["La zona è tranquillissima.", "La zona es tranquilísima.", ""],
      ["Quando posso vederlo?", "¿Cuándo lo puedo ver?", ""],
      ["Cerco una stanza in un appartamento condiviso.", "Busco una habitación en un piso compartido.", ""]
    ],
    grammar: {
      title: "Comparar: più, meno, come",
      html: `<table><tr><th>Español</th><th>Italiano</th></tr>
      <tr><td>más … que</td><td>più … di</td></tr>
      <tr><td>menos … que</td><td>meno … di</td></tr>
      <tr><td>tan … como</td><td>(così) … come</td></tr>
      <tr><td>el más …</td><td>il più …</td></tr>
      <tr><td>-ísimo</td><td>-issimo</td></tr>
      <tr><td>mejor / peor</td><td>migliore / peggiore</td></tr></table>
      <p><strong>di</strong> se usa antes de un sustantivo o pronombre: <em>Roma è più grande <u>di</u> Firenze.</em></p>
      <p><strong>che</strong> se usa al comparar dos adjetivos, verbos o cantidades: <em>È più bello <u>che</u> comodo. Meglio tardi <u>che</u> mai.</em></p>
      <p><strong>meglio / peggio</strong> son adverbios (mejor/peor con verbos): <em>Parli meglio di me.</em></p>`
    },
    tips: [
      "<strong>Cultura:</strong> en Italia los contratos de alquiler suelen pedir 2-3 meses de <em>caparra</em>. Para estudiantes es muy común vivir en <em>appartamento condiviso</em>.",
      "<strong>Ojo:</strong> <em>il piano</em> = el piso (planta), y el primer piso italiano es nuestro segundo: la planta baja se llama <em>piano terra</em>."
    ],
    dialog: [
      ["A", "Allora, che ne pensi dei due appartamenti?", "Entonces, ¿qué piensas de los dos apartamentos?"],
      ["B", "Il primo è più grande, ma il secondo è più luminoso.", "El primero es más grande, pero el segundo es más luminoso."],
      ["A", "E il prezzo?", "¿Y el precio?"],
      ["B", "Il secondo costa cento euro in meno, e le spese sono incluse.", "El segundo cuesta cien euros menos, y los gastos están incluidos."],
      ["A", "Allora è il migliore!", "¡Entonces es el mejor!"],
      ["B", "Sì, chiamo subito il padrone di casa.", "Sí, llamo ahora mismo al dueño."]
    ],
    quiz: [
      { q: "Milano è più cara ___ Napoli.", opts: ["che", "di", "come"], a: 1 },
      { q: "È più bello ___ comodo.", opts: ["di", "che", "del"], a: 1 },
      { q: "“El alquiler” =", opts: ["l'affitto", "l'alquilo", "la caparra"], a: 0 },
      { q: "Superlativo de “bello” (-ísimo):", opts: ["bellisimo", "bellissimo", "molto bellissimo"], a: 1 },
      { q: "Escribe “mejor” (adjetivo, il … ristorante):", fill: ["migliore", "il migliore"] },
      { q: "Escucha y escribe:", say: "le spese sono incluse", fill: ["le spese sono incluse"] }
    ]
  },

  {
    id: "a2-viaggio",
    level: "A2",
    title: "In viaggio",
    sub: "Tren, hotel, aeropuerto · mi, ti, gli, le",
    intro: "Todo para viajar por Italia: comprar billetes de tren, hacer check-in en el hotel y resolver problemas. Con los pronombres indirectos: “me puede dar…”, “le escribo”.",
    vocab: [
      ["il binario", "el andén", "bi-NÁ-rio"],
      ["andata e ritorno", "ida y vuelta", "an-DÁ-ta e ri-TÓR-no"],
      ["il treno è in ritardo", "el tren viene con retraso", "ri-TÁR-do"],
      ["la coincidenza", "el transbordo / conexión", "coin-chi-DÉN-tsa"],
      ["timbrare / convalidare", "validar el ticket", "tim-BRÁ-re"],
      ["la valigia", "la maleta", "va-LÍ-ya"],
      ["il volo", "el vuelo", "VÓ-lo"],
      ["la carta d'imbarco", "la tarjeta de embarque", "im-BÁR-co"],
      ["la camera singola / doppia", "habitación simple / doble", "SÍN-go-la / DÓP-pia"],
      ["la colazione è inclusa", "el desayuno está incluido", "co-la-TSIÓ-ne"],
      ["la prenotazione", "la reserva", "pre-no-ta-TSIÓ-ne"],
      ["perdere il treno", "perder el tren", "PÉR-de-re"]
    ],
    phrases: [
      ["Un biglietto di andata e ritorno per Napoli.", "Un billete de ida y vuelta a Nápoles.", ""],
      ["Da quale binario parte?", "¿De qué andén sale?", ""],
      ["Mi può dare la chiave, per favore?", "¿Me puede dar la llave, por favor?", "mi = a mí"],
      ["Le scrivo una mail per confermare.", "Le escribo un correo para confirmar.", "Le = a usted (formal)"],
      ["Gli ho mandato un messaggio.", "Le mandé un mensaje (a él).", "gli = a él / a ellos"],
      ["A che ora è il check-out?", "¿A qué hora es el check-out?", ""],
      ["Il riscaldamento non funziona.", "La calefacción no funciona.", ""],
      ["Ho perso la coincidenza.", "Perdí la conexión.", ""]
    ],
    grammar: {
      title: "Pronombres indirectos",
      html: `<p>Responden a “¿a quién?”. Van antes del verbo, como en español.</p>
      <table><tr><th>Español</th><th>Italiano</th></tr>
      <tr><td>me (a mí)</td><td>mi</td></tr>
      <tr><td>te (a ti)</td><td>ti</td></tr>
      <tr><td>le (a él)</td><td>gli</td></tr>
      <tr><td>le (a ella)</td><td>le</td></tr>
      <tr><td>le (a usted)</td><td>Le</td></tr>
      <tr><td>nos / os</td><td>ci / vi</td></tr>
      <tr><td>les (a ellos/ellas)</td><td>gli</td></tr></table>
      <p>Ejemplos: <em>Telefono a Marco → <u>Gli</u> telefono.</em> · <em>Scrivo a Giulia → <u>Le</u> scrivo.</em> · <em>Che cosa <u>ti</u> ha detto?</em></p>`
    },
    tips: [
      "<strong>Transporte:</strong> los billetes regionales de tren en papel hay que <em>convalidarlos</em> en las máquinas verdes antes de subir, o te multan. Los digitales no.",
      "<strong>Ojo:</strong> <em>gli</em> sirve para “a él” y “a ellos”. En el habla diaria casi nadie usa <em>loro</em> para “a ellos”."
    ],
    dialog: [
      ["A", "Buonasera, ho una prenotazione a nome Page.", "Buenas noches, tengo una reserva a nombre de Page."],
      ["B", "Sì, una camera doppia per tre notti. Mi può dare un documento?", "Sí, una habitación doble por tres noches. ¿Me puede dar un documento?"],
      ["A", "Ecco il passaporto. La colazione è inclusa?", "Aquí está el pasaporte. ¿El desayuno está incluido?"],
      ["B", "Sì, dalle sette alle dieci al piano terra.", "Sí, de siete a diez en la planta baja."],
      ["A", "Perfetto. Domani devo prendere il treno delle otto per Firenze.", "Perfecto. Mañana tengo que tomar el tren de las ocho a Florencia."],
      ["B", "Allora Le chiamo un taxi per le sette e mezza?", "¿Entonces le llamo un taxi para las siete y media?"]
    ],
    quiz: [
      { q: "Telefono a Paolo → ___ telefono.", opts: ["Lo", "Gli", "Le"], a: 1 },
      { q: "Scrivo a Sara → ___ scrivo.", opts: ["Gli", "La", "Le"], a: 2 },
      { q: "“El andén” =", opts: ["il binario", "la banchina", "il marciapiede"], a: 0 },
      { q: "Escribe “ida y vuelta”:", fill: ["andata e ritorno"] },
      { q: "Escribe “la maleta”:", fill: ["la valigia"] },
      { q: "Escucha y escribe:", say: "il treno è in ritardo", fill: ["il treno è in ritardo", "il treno e in ritardo"] }
    ]
  },

  {
    id: "a2-lavoro",
    level: "A2",
    title: "Il colloquio di lavoro",
    sub: "Entrevista y CV · condizionale",
    intro: "Prepárate para una entrevista de trabajo o una conversación profesional, y aprende el condicional: la forma educada de pedir y de hablar de deseos.",
    vocab: [
      ["il colloquio", "la entrevista", "col-LÓ-cuio"],
      ["il curriculum", "el CV", "cur-RÍ-cu-lum"],
      ["l'azienda", "la empresa", "a-DZIÉN-da"],
      ["lo stipendio", "el sueldo", "sti-PÉN-dio"],
      ["il contratto", "el contrato", "con-TRÁT-to"],
      ["a tempo pieno / part-time", "a tiempo completo / parcial", "a TÉM-po PIÉ-no"],
      ["il capo", "el jefe", "CÁ-po"],
      ["il collega", "el compañero de trabajo", "col-LÉ-ga"],
      ["le ferie", "las vacaciones (laborales)", "FÉ-rie"],
      ["l'esperienza", "la experiencia", "es-pe-RIÉN-tsa"],
      ["candidarsi", "postularse", "can-di-DÁR-si"],
      ["il punto di forza", "el punto fuerte", "PÚN-to di FÓR-tsa"]
    ],
    phrases: [
      ["Mi piacerebbe lavorare con voi.", "Me gustaría trabajar con ustedes.", ""],
      ["Ho due anni di esperienza nel settore.", "Tengo dos años de experiencia en el sector.", ""],
      ["Parlo spagnolo, inglese e un po' di italiano.", "Hablo español, inglés y un poco de italiano.", ""],
      ["Il mio punto di forza è la flessibilità.", "Mi punto fuerte es la flexibilidad.", ""],
      ["Potrebbe ripetere la domanda?", "¿Podría repetir la pregunta?", ""],
      ["Quando potrei cominciare?", "¿Cuándo podría empezar?", ""],
      ["Dovresti mandare il curriculum entro venerdì.", "Deberías mandar el CV antes del viernes.", "Consejo → dovresti"],
      ["Sarei disponibile da subito.", "Estaría disponible de inmediato.", ""]
    ],
    grammar: {
      title: "Condizionale presente",
      html: `<p>Raíz del futuro + <strong>-ei, -esti, -ebbe, -emmo, -este, -ebbero</strong>. Equivale a “-ría” en español.</p>
      <table><tr><th>Persona</th><th>parlare</th><th>essere</th><th>potere</th></tr>
      <tr><td>io</td><td>parlerei</td><td>sarei</td><td>potrei</td></tr>
      <tr><td>tu</td><td>parleresti</td><td>saresti</td><td>potresti</td></tr>
      <tr><td>lui/lei</td><td>parlerebbe</td><td>sarebbe</td><td>potrebbe</td></tr>
      <tr><td>noi</td><td>parleremmo</td><td>saremmo</td><td>potremmo</td></tr>
      <tr><td>voi</td><td>parlereste</td><td>sareste</td><td>potreste</td></tr>
      <tr><td>loro</td><td>parlerebbero</td><td>sarebbero</td><td>potrebbero</td></tr></table>
      <p>Usos: <strong>pedir con cortesía</strong> (<em>vorrei, potrebbe…?</em>), <strong>deseos</strong> (<em>mi piacerebbe</em>), <strong>consejos</strong> (<em>dovresti</em>).</p>`
    },
    tips: [
      "<strong>Ojo:</strong> <em>noi</em> lleva doble m (<em>parleremmo</em> = hablaríamos) y el futuro una sola (<em>parleremo</em> = hablaremos). Se distinguen al pronunciar.",
      "<strong>Falso amigo:</strong> <em>il capo</em> es el jefe; <em>la carriera</em> es la carrera profesional, pero la carrera universitaria es <em>il corso di laurea</em>."
    ],
    dialog: [
      ["A", "Buongiorno, si accomodi. Mi parli un po' di Lei.", "Buenos días, siéntese. Hábleme un poco de usted."],
      ["B", "Ho 24 anni, sono panamense e ho esperienza nel servizio clienti.", "Tengo 24 años, soy panameño y tengo experiencia en atención al cliente."],
      ["A", "Perché vorrebbe lavorare con noi?", "¿Por qué querría trabajar con nosotros?"],
      ["B", "Mi piacerebbe crescere in un'azienda internazionale.", "Me gustaría crecer en una empresa internacional."],
      ["A", "Sarebbe disponibile a lavorare nel weekend?", "¿Estaría disponible para trabajar los fines de semana?"],
      ["B", "Sì, nessun problema. Quando potrei cominciare?", "Sí, ningún problema. ¿Cuándo podría empezar?"]
    ],
    quiz: [
      { q: "“Me gustaría” =", opts: ["Mi piacerà", "Mi piacerebbe", "Mi piaceva"], a: 1 },
      { q: "Condicional de potere, Lei (formal):", opts: ["potrebbe", "potrà", "può"], a: 0 },
      { q: "“Hablaríamos” =", opts: ["parleremo", "parleremmo", "parlavamo"], a: 1 },
      { q: "Escribe “yo sería / estaría” (essere):", fill: ["sarei", "io sarei"] },
      { q: "Escribe “deberías” (dovere, tu):", fill: ["dovresti", "tu dovresti"] },
      { q: "“Lo stipendio” es…", opts: ["el horario", "el sueldo", "el contrato"], a: 1 }
    ]
  },

  {
    id: "a2-colloquiale",
    level: "A2",
    title: "Parlare come un italiano",
    sub: "Expresiones, chats e imperativo informal",
    intro: "Lo que no viene en los libros: las muletillas y expresiones que oirás todo el día, cómo escriben los italianos por WhatsApp y el imperativo para hablar con amigos.",
    vocab: [
      ["Dai!", "¡Vamos! / ¡No me digas!", "DAI"],
      ["Boh", "Ni idea", "BO"],
      ["Magari!", "¡Ojalá!", "ma-GÁ-ri"],
      ["Figurati!", "¡No hay de qué! / ¡Para nada!", "fi-GÚ-ra-ti"],
      ["Meno male", "Menos mal", "MÉ-no MÁ-le"],
      ["Che figata!", "¡Qué chévere!", "fi-GÁ-ta"],
      ["Mi raccomando", "Por favor, no lo olvides", "rac-co-MÁN-do"],
      ["Non vedo l'ora!", "¡No veo la hora!", "non VÉ-do LÓ-ra"],
      ["Allora…", "Entonces… / Bueno…", "al-LÓ-ra"],
      ["Insomma", "En fin / Más o menos", "in-SÓM-ma"],
      ["Va be'", "Bueno, vale", "va BE"],
      ["Ci sta", "Tiene sentido / Me parece bien", "chi STA"]
    ],
    phrases: [
      ["Dimmi tutto!", "¡Cuéntamelo todo!", "di' + mi"],
      ["Fammi sapere.", "Avísame.", "fa' + mi"],
      ["Vieni stasera? Dai!", "¿Vienes esta noche? ¡Anda!", ""],
      ["Non ti preoccupare.", "No te preocupes.", "No + infinitivo"],
      ["Scrivimi quando arrivi.", "Escríbeme cuando llegues.", ""],
      ["Cmq nn posso, scs", "Comunque non posso, scusa", "Chat: “igual no puedo, perdón”"],
      ["Xké nn rispondi?", "Perché non rispondi?", "Chat: ¿por qué no respondes?"],
      ["Tvb ❤️", "Ti voglio bene", "Te quiero (amigos y familia)"]
    ],
    grammar: {
      title: "Imperativo informal (tu)",
      html: `<table><tr><th>Verbo</th><th>tu</th><th>Ejemplo</th></tr>
      <tr><td>parlare (-are)</td><td>parla!</td><td>Parla più piano!</td></tr>
      <tr><td>prendere (-ere)</td><td>prendi!</td><td>Prendi un caffè!</td></tr>
      <tr><td>sentire (-ire)</td><td>senti!</td><td>Senti, ti devo dire una cosa.</td></tr>
      <tr><td>fare</td><td>fa' / fai</td><td>Fammi vedere!</td></tr>
      <tr><td>dire</td><td>di'</td><td>Dimmi!</td></tr>
      <tr><td>andare</td><td>va' / vai</td><td>Vai tranquillo!</td></tr></table>
      <p>Los pronombres se pegan al final: <em>scrivi<u>mi</u>, chiama<u>lo</u></em>. Con <em>fa', di', va'</em> la consonante se duplica: <em>fa<u>mm</u>i, di<u>mm</u>i</em>.</p>
      <p><strong>Negativo:</strong> <em>non</em> + infinitivo: <em>Non parlare! Non ti preoccupare!</em></p>`
    },
    tips: [
      "<strong>Ti voglio bene</strong> es cariño a amigos y familia. <strong>Ti amo</strong> es solo para la pareja. ¡No los confundas!",
      "<strong>Chat:</strong> <em>x</em> = per (xké = perché, xò = però), <em>cmq</em> = comunque, <em>nn</em> = non, <em>raga</em> = ragazzi, <em>grz</em> = grazie, <em>ahah</em> = jaja.",
      "<strong>Gesto:</strong> la famosa mano con los dedos juntos hacia arriba significa “¿pero qué dices?”. Úsala con moderación 😄."
    ],
    dialog: [
      ["A", "Raga, stasera pizza da me?", "Chicos, ¿esta noche pizza en mi casa?"],
      ["B", "Dai, che figata! A che ora?", "¡Vamos, qué chévere! ¿A qué hora?"],
      ["A", "Boh, verso le nove? Fammi sapere se vieni.", "Ni idea, ¿tipo a las nueve? Avísame si vienes."],
      ["B", "Ci sta. Porto io le birre.", "Me parece bien. Yo llevo las cervezas."],
      ["A", "Grazie mille!", "¡Muchas gracias!"],
      ["B", "Figurati! Non vedo l'ora.", "¡No hay de qué! No veo la hora."]
    ],
    quiz: [
      { q: "Alguien te pregunta algo y no sabes. Dices…", opts: ["Magari!", "Boh", "Figurati!"], a: 1 },
      { q: "“¡Ojalá!” =", opts: ["Magari!", "Dai!", "Meno male!"], a: 0 },
      { q: "Imperativo: “¡Dime!”", opts: ["Dici!", "Dimmi!", "Dimi!"], a: 1 },
      { q: "“No te preocupes” =", opts: ["Non ti preoccupi", "Non preoccuparti", "Non ti preoccupare / Non preoccuparti"], a: 2 },
      { q: "Escribe “Avísame.” (fare sapere):", fill: ["fammi sapere", "fammi sapere."] },
      { q: "A tu mejor amigo le dices…", opts: ["Ti amo", "Ti voglio bene", "Ti piaccio"], a: 1 },
      { q: "Escucha y escribe:", say: "non vedo l'ora", fill: ["non vedo l'ora", "non vedo l'ora!"] }
    ]
  }
];
