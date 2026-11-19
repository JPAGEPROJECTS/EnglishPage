// Contenido de las clases de italiano (nivel A1, para adulto hispanohablante).
// Para agregar una clase nueva, copia un objeto y cambia el contenido.
// id:      identificador único (se usa para guardar tu progreso, no lo cambies)
// vocab:   [italiano, español, pronunciación, texto a leer en voz alta (opcional)]
// phrases: [italiano, español, nota (o ""), pronunciación, texto a leer en voz alta (opcional)]
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
      ["Come si scrive?", "¿Cómo se escribe?", "La pregunta clave para deletrear", "CÓ-me si SCRÍ-ve"],
      ["Come si pronuncia?", "¿Cómo se pronuncia?", "", "CÓ-me si pro-NÚN-cha"],
      ["Puoi ripetere, per favore?", "¿Puedes repetir, por favor?", "", "puói ri-PÉ-te-re, per fa-VÓ-re"],
      ["Più piano, per favore.", "Más despacio, por favor.", "", "piú PIÁ-no, per fa-VÓ-re"],
      ["Si scrive con due elle.", "Se escribe con doble ele.", "Las dobles se dicen “due + letra”", "si SCRÍ-ve con DÚ-e ÉL-le"],
      ["Mi chiamo Page: pi, a, gi, e.", "Me llamo Page: P, A, G, E.", "", "mi KIÁ-mo PEICH: pi, a, yi, e"],
      ["Cosa vuol dire…?", "¿Qué significa…?", "Muy útil en clase", "CÓ-sa vuól DÍ-re"]
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
      ["ventidue", "22", "venti + due, todo junto", "ven-ti-DÚ-e"],
      ["ventuno", "21", "venti pierde la -i delante de uno", "ven-TÚ-no"],
      ["trentotto", "38", "trenta pierde la -a delante de otto", "tren-TÓT-to"],
      ["quarantatré", "43", "los terminados en 3 llevan tilde", "cua-ran-ta-TRÉ"],
      ["centocinquanta", "150", "", "chen-to-chin-CUÁN-ta"],
      ["milleduecento", "1.200", "mille → mila en plural", "mil-le-due-CHÉN-to"],
      ["duemilaventisei", "2026", "Los años se dicen como un número normal", "due-mi-la-ven-ti-SÉI"],
      ["Il mio numero è tre, quattro, sette…", "Mi número es 3, 4, 7…", "El teléfono se dice cifra por cifra", "il MÍ-o NÚ-me-ro É tre, CUÁT-tro, SÉT-te"]
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
      ["Come ti chiami?", "¿Cómo te llamas?", "Informal", "CÓ-me ti KIÁ-mi"],
      ["Mi chiamo Jonathan.", "Me llamo Jonathan.", "", "mi KIÁ-mo YÓ-na-tan"],
      ["Come stai?", "¿Cómo estás?", "Informal (tú)", "CÓ-me STÁI"],
      ["Come sta?", "¿Cómo está usted?", "Formal (Lei)", "CÓ-me STA"],
      ["Sto bene, grazie. E tu?", "Estoy bien, gracias. ¿Y tú?", "", "sto BÉ-ne, GRÁ-tsie. e TU"],
      ["Così così.", "Más o menos.", "", "co-SÍ co-SÍ"],
      ["Di dove sei?", "¿De dónde eres?", "", "di DÓ-ve SÉI"],
      ["Sono di Panama.", "Soy de Panamá.", "", "SÓ-no di PÁ-na-ma"],
      ["Piacere di conoscerti!", "¡Gusto en conocerte!", "", "pia-CHÉ-re di co-NÓ-sher-ti"]
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
      ["Ho 24 anni.", "Tengo 24 años.", "¡Con avere, no con essere!", "o ven-ti-CUÁT-tro ÁN-ni"],
      ["Quanti anni hai?", "¿Cuántos años tienes?", "", "CUÁN-ti ÁN-ni ÁI"],
      ["Sono panamense.", "Soy panameño.", "", "SÓ-no pa-na-MÉN-se"],
      ["Che lavoro fai?", "¿En qué trabajas?", "", "ke la-VÓ-ro FÁI"],
      ["Sono studente.", "Soy estudiante.", "Sin artículo “un”", "SÓ-no stu-DÉN-te"],
      ["Ho fame.", "Tengo hambre.", "", "o FÁ-me"],
      ["Ho un fratello e una sorella.", "Tengo un hermano y una hermana.", "", "o un fra-TÉL-lo e ú-na so-RÉL-la"],
      ["Sono stanco.", "Estoy cansado.", "Essere = ser y estar", "SÓ-no STÁN-co"]
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
    id: "plurali-possessivi",
    title: "Plurali e possessivi",
    sub: "i libri, le case · mio, tuo, suo…",
    intro: "Dos bases del italiano: cómo se forma el plural (que cambia la vocal final, no añade -s) y cómo decir “mi, tu, su”, con una regla curiosa para la familia.",
    vocab: [
      ["il libro → i libri", "el libro → los libros", "LÍ-bro → LÍ-bri"],
      ["la casa → le case", "la casa → las casas", "CÁ-sa → CÁ-se"],
      ["il cane → i cani", "el perro → los perros", "CÁ-ne → CÁ-ni"],
      ["la chiave → le chiavi", "la llave → las llaves", "KIÁ-ve → KIÁ-vi"],
      ["lo zaino → gli zaini", "la mochila → las mochilas", "DZÁI-no → li DZÁI-ni"],
      ["l'amico → gli amici", "el amigo → los amigos", "a-MÍ-co → li a-MÍ-chi"],
      ["l'amica → le amiche", "la amiga → las amigas", "a-MÍ-ca → a-MÍ-ke"],
      ["il caffè → i caffè", "el café → los cafés", "caf-FÉ (no cambia)"],
      ["la città → le città", "la ciudad → las ciudades", "chit-TÁ (no cambia)"],
      ["l'uomo → gli uomini", "el hombre → los hombres", "UÓ-mo → UÓ-mi-ni"],
      ["mio / mia / miei / mie", "mi / mis", "MÍ-o / MÍ-a / MIÉI / MÍ-e"],
      ["tuo / suo / nostro / vostro / loro", "tu / su / nuestro / vuestro / su (de ellos)", "TÚ-o / SÚ-o / NÓS-tro"]
    ],
    phrases: [
      ["Ho due cani e tre gatti.", "Tengo dos perros y tres gatos.", "", "o DÚ-e CÁ-ni e TRE GÁT-ti"],
      ["Gli studenti sono in classe.", "Los estudiantes están en clase.", "gli ante s+consonante y vocal", "li stu-DÉN-ti SÓ-no in CLÁS-se"],
      ["Mia madre si chiama Ana.", "Mi madre se llama Ana.", "Familiar en singular: sin artículo", "MÍ-a MÁ-dre si KIÁ-ma Á-na"],
      ["I miei genitori sono di Panama.", "Mis padres son de Panamá.", "Familiar en plural: con artículo", "i MIÉI ye-ni-TÓ-ri SÓ-no di PÁ-na-ma"],
      ["La mia macchina è rossa.", "Mi carro es rojo.", "Cosas: siempre con artículo", "la MÍ-a MÁC-ki-na É RÓS-sa"],
      ["Questo è il tuo telefono?", "¿Este es tu teléfono?", "", "CUÉS-to É il TÚ-o te-LÉ-fo-no"],
      ["Suo fratello lavora a Milano.", "Su hermano trabaja en Milán.", "suo = de él o de ella", "SÚ-o fra-TÉL-lo la-VÓ-ra a mi-LÁ-no"],
      ["Le loro case sono grandi.", "Sus casas son grandes.", "loro no cambia nunca", "le LÓ-ro CÁ-se SÓ-no GRÁN-di"]
    ],
    grammar: {
      title: "Plurales, artículos y posesivos",
      html: `<p><strong>Plural:</strong> se cambia la última vocal.</p>
      <table><tr><th>Singular</th><th>Plural</th><th>Ejemplo</th></tr>
      <tr><td>-o (masc.)</td><td>-i</td><td>libro → libri</td></tr>
      <tr><td>-a (fem.)</td><td>-e</td><td>casa → case</td></tr>
      <tr><td>-e (masc. o fem.)</td><td>-i</td><td>cane → cani, chiave → chiavi</td></tr>
      <tr><td>acento final / extranjeras</td><td>no cambia</td><td>caffè, città, film, bar</td></tr></table>
      <p><strong>Artículos en plural:</strong> il → <b>i</b> · lo / l' (masc.) → <b>gli</b> · la / l' (fem.) → <b>le</b>.</p>
      <p><strong>Posesivos:</strong> concuerdan con la cosa poseída y llevan artículo: <em>il mio libro, la mia casa, i miei libri, le mie case</em>.</p>
      <table><tr><th>Persona</th><th>masc. sing.</th><th>fem. sing.</th><th>masc. pl.</th><th>fem. pl.</th></tr>
      <tr><td>io</td><td>mio</td><td>mia</td><td>miei</td><td>mie</td></tr>
      <tr><td>tu</td><td>tuo</td><td>tua</td><td>tuoi</td><td>tue</td></tr>
      <tr><td>lui / lei</td><td>suo</td><td>sua</td><td>suoi</td><td>sue</td></tr>
      <tr><td>noi</td><td>nostro</td><td>nostra</td><td>nostri</td><td>nostre</td></tr>
      <tr><td>voi</td><td>vostro</td><td>vostra</td><td>vostri</td><td>vostre</td></tr>
      <tr><td>loro</td><td colspan="4">loro (no cambia)</td></tr></table>
      <p><strong>Regla de la familia:</strong> con un familiar en singular <u>no</u> se pone artículo (<em>mia madre, tuo fratello</em>). Sí se pone en plural (<em>i miei fratelli</em>), con <em>loro</em> (<em>il loro padre</em>) y con <em>mamma / papà</em> (<em>la mia mamma</em>).</p>`
    },
    tips: [
      "<strong>Ojo:</strong> el italiano casi nunca pone -s para el plural. “Los cafés” = <em>i caffè</em>, no “i caffès”.",
      "<strong>Truco:</strong> <em>suo</em> sirve para “de él”, “de ella” y “de usted”, igual que nuestro “su”. Concuerda con la cosa, no con el dueño: <em>la sua macchina</em> puede ser el carro de Marco.",
      "<strong>Cambios de sonido:</strong> <em>amico → amici</em> (ki → chi), pero <em>amica → amiche</em> (mantiene el sonido k con h)."
    ],
    dialog: [
      ["A", "Questa è una foto della mia famiglia.", "Esta es una foto de mi familia."],
      ["B", "Che bella! Chi sono questi ragazzi?", "¡Qué bonita! ¿Quiénes son estos chicos?"],
      ["A", "Sono i miei fratelli. E questa è mia sorella.", "Son mis hermanos. Y esta es mi hermana."],
      ["B", "E i vostri genitori?", "¿Y sus padres?"],
      ["A", "Mio padre è qui, mia madre ha fatto la foto.", "Mi padre está aquí, mi madre tomó la foto."],
      ["B", "Avete anche dei cani?", "¿También tienen perros?"]
    ],
    quiz: [
      { q: "Plural de “la chiave”:", opts: ["le chiave", "le chiavi", "i chiavi"], a: 1 },
      { q: "Plural de “lo zaino”:", opts: ["i zaini", "gli zaini", "le zaini"], a: 1 },
      { q: "“Mi madre” =", opts: ["la mia madre", "mia madre", "mio madre"], a: 1 },
      { q: "“Mis amigos” =", opts: ["i mii amici", "i miei amici", "miei amici"], a: 1 },
      { q: "Escribe el plural de “la città”:", fill: ["le città", "le citta"] },
      { q: "Escribe “nuestra casa” (con artículo):", fill: ["la nostra casa"] }
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
      ["Che ore sono?", "¿Qué hora es?", "", "ke Ó-re SÓ-no"],
      ["Sono le tre e mezza.", "Son las tres y media.", "", "SÓ-no le TRE e MÉD-dza"],
      ["È l'una.", "Es la una.", "Singular, como en español", "É LÚ-na"],
      ["A che ora ci vediamo?", "¿A qué hora nos vemos?", "", "a ke Ó-ra chi ve-DIÁ-mo"],
      ["Alle otto di sera.", "A las ocho de la noche.", "", "ÁL-le ÓT-to di SÉ-ra"],
      ["Qual è il tuo numero?", "¿Cuál es tu número?", "", "cuál É il TÚ-o NÚ-me-ro"],
      ["Quanto costa?", "¿Cuánto cuesta?", "", "CUÁN-to CÓS-ta"],
      ["Costa dodici euro.", "Cuesta doce euros.", "euro no cambia en plural", "CÓS-ta DÓ-di-chi ÉU-ro"]
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
    id: "descrivere-meteo",
    title: "Com'è? Persone, date e tempo",
    sub: "Describir personas · meses, fechas y clima",
    intro: "Describe a la gente (cómo es por fuera y por dentro), di fechas y cumpleaños, y habla del clima: los temas de conversación más comunes con alguien nuevo.",
    vocab: [
      ["alto / basso", "alto / bajo", "ÁL-to / BÁS-so"],
      ["magro / robusto", "delgado / corpulento", "MÁ-gro / ro-BÚS-to"],
      ["i capelli lunghi / corti", "el cabello largo / corto", "ca-PÉL-li LÚN-gui / CÓR-ti"],
      ["gli occhi azzurri / castani", "los ojos azules / marrones", "ÓC-ki ad-DZÚR-ri / cas-TÁ-ni"],
      ["simpatico / antipatico", "simpático / antipático", "sim-PÁ-ti-co"],
      ["gentile / timido", "amable / tímido", "yen-TÍ-le / TÍ-mi-do"],
      ["gennaio, febbraio, marzo…", "enero, febrero, marzo…", "yen-NÁ-io, feb-BRÁ-io, MÁR-tso"],
      ["la primavera / l'estate", "la primavera / el verano", "pri-ma-VÉ-ra / es-TÁ-te"],
      ["l'autunno / l'inverno", "el otoño / el invierno", "au-TÚN-no / in-VÉR-no"],
      ["fa caldo / fa freddo", "hace calor / hace frío", "fa CÁL-do / fa FRÉD-do"],
      ["piove / nevica", "llueve / nieva", "PIÓ-ve / NÉ-vi-ca"],
      ["c'è il sole / c'è vento", "hace sol / hace viento", "CHÉ il SÓ-le / CHÉ VÉN-to"]
    ],
    phrases: [
      ["Com'è il tuo ragazzo?", "¿Cómo es tu novio?", "", "co-MÉ il TÚ-o ra-GÁT-tso"],
      ["È alto, ha i capelli neri e gli occhi verdi.", "Es alto, tiene el cabello negro y los ojos verdes.", "Pelo y ojos van con avere", "É ÁL-to, a i ca-PÉL-li NÉ-ri e li ÓC-ki VÉR-di"],
      ["È una persona molto simpatica.", "Es una persona muy simpática.", "", "É ú-na per-SÓ-na MÓL-to sim-PÁ-ti-ca"],
      ["Quando è il tuo compleanno?", "¿Cuándo es tu cumpleaños?", "", "CUÁN-do É il TÚ-o com-ple-ÁN-no"],
      ["Il mio compleanno è il tre marzo.", "Mi cumpleaños es el tres de marzo.", "Número normal, sin “de”", "il MÍ-o com-ple-ÁN-no É il TRE MÁR-tso"],
      ["Oggi è il primo giugno.", "Hoy es el primero de junio.", "El día 1 se dice “primo”", "ÓD-yi É il PRÍ-mo YÚ-ño"],
      ["Che tempo fa oggi?", "¿Qué tiempo hace hoy?", "", "ke TÉM-po fa ÓD-yi"],
      ["Fa bel tempo, ma domani piove.", "Hace buen tiempo, pero mañana llueve.", "", "fa BEL TÉM-po, ma do-MÁ-ni PIÓ-ve"]
    ],
    grammar: {
      title: "Adjetivos, fechas y el clima",
      html: `<p><strong>Adjetivos:</strong> concuerdan en género y número, como en español.</p>
      <table><tr><th>Tipo</th><th>masc. sing.</th><th>fem. sing.</th><th>masc. pl.</th><th>fem. pl.</th></tr>
      <tr><td>-o / -a</td><td>alto</td><td>alta</td><td>alti</td><td>alte</td></tr>
      <tr><td>-e</td><td>gentile</td><td>gentile</td><td>gentili</td><td>gentili</td></tr></table>
      <p><strong>Pelo y ojos:</strong> con <em>avere</em>: <em>Ha gli occhi azzurri</em> (tiene ojos azules). Pero altura y carácter con <em>essere</em>: <em>È alta e simpatica</em>.</p>
      <p><strong>Meses:</strong> gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre (con minúscula).</p>
      <p><strong>Fechas:</strong> <em>il</em> + número + mes: <em>il 15 agosto</em>. Excepción: el día 1 es <em>il primo</em>. Y “en marzo” = <em>a marzo</em> o <em>in marzo</em>.</p>
      <p><strong>Clima:</strong> casi todo va con <em>fare</em> (<em>fa caldo, fa freddo, fa bel / brutto tempo</em>) o con <em>c'è</em> (<em>c'è il sole, c'è nebbia</em>).</p>`
    },
    tips: [
      "<strong>Falso amigo:</strong> <em>castano</em> es marrón para el pelo y los ojos (no “castaño” solo). Y <em>bruno</em> se usa para pelo oscuro.",
      "<strong>Ojo:</strong> en italiano “tener calor” es <em>avere caldo</em> (ho caldo), pero “hace calor” es <em>fa caldo</em>. Igual que en español, pero con verbos distintos.",
      "<strong>Cultura:</strong> el 15 de agosto es <em>Ferragosto</em>, la gran fiesta del verano: medio país está de vacaciones y las ciudades se vacían."
    ],
    dialog: [
      ["A", "Allora, com'è la tua nuova coinquilina?", "Entonces, ¿cómo es tu nueva compañera de piso?"],
      ["B", "È bassa, ha i capelli ricci ed è simpaticissima.", "Es bajita, tiene el pelo rizado y es simpatiquísima."],
      ["A", "Di dov'è?", "¿De dónde es?"],
      ["B", "È di Palermo. Dice che a Milano fa troppo freddo!", "Es de Palermo. ¡Dice que en Milán hace demasiado frío!"],
      ["A", "Ha ragione, oggi nevica! Quando è il suo compleanno?", "¡Tiene razón, hoy nieva! ¿Cuándo es su cumpleaños?"],
      ["B", "Il venti dicembre. Facciamo una festa!", "El veinte de diciembre. ¡Hacemos una fiesta!"]
    ],
    quiz: [
      { q: "“Tiene los ojos verdes” =", opts: ["È gli occhi verdi", "Ha gli occhi verdi", "Ha occhi verdi è"], a: 1 },
      { q: "Femenino plural de “simpatico”:", opts: ["simpatiche", "simpatice", "simpatici"], a: 0 },
      { q: "“El 1 de mayo” =", opts: ["l'uno maggio", "il primo maggio", "il uno di maggio"], a: 1 },
      { q: "“Hace frío” =", opts: ["È freddo", "Ha freddo", "Fa freddo"], a: 2 },
      { q: "Escribe el mes “julio”:", fill: ["luglio"] },
      { q: "Escucha y escribe:", say: "che tempo fa oggi", fill: ["che tempo fa oggi", "che tempo fa oggi?"] }
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
      ["Vorrei un caffè, per favore.", "Quisiera un café, por favor.", "La forma más educada", "vor-RÉI un caf-FÉ, per fa-VÓ-re"],
      ["Prendo un cappuccino.", "Tomo un capuchino.", "", "PRÉN-do un cap-pu-CHÍ-no"],
      ["Per me una birra.", "Para mí una cerveza.", "", "per ME ú-na BÍR-ra"],
      ["Il conto, per favore.", "La cuenta, por favor.", "", "il CÓN-to, per fa-VÓ-re"],
      ["Posso pagare con la carta?", "¿Puedo pagar con tarjeta?", "", "PÓS-so pa-GÁ-re con la CÁR-ta"],
      ["Quant'è?", "¿Cuánto es?", "Muy común al pagar", "cuan-TÉ"],
      ["Offro io!", "¡Invito yo!", "", "ÓF-fro Í-o"],
      ["Cin cin! / Salute!", "¡Salud!", "", "chin CHIN / sa-LÚ-te"]
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
      ["Mi sveglio alle sette.", "Me despierto a las siete.", "", "mi SVÉ-lio ÁL-le SÉT-te"],
      ["Di solito lavoro fino alle cinque.", "Normalmente trabajo hasta las cinco.", "", "di SÓ-li-to la-VÓ-ro FÍ-no ÁL-le CHÍN-cue"],
      ["Il lunedì vado in palestra.", "Los lunes voy al gym.", "il + día = todos los…", "il lu-ne-DÍ VÁ-do in pa-LÉS-tra"],
      ["Non mangio mai a casa.", "Nunca como en casa.", "Doble negación, como en español", "non MÁN-yo MÁI a CÁ-sa"],
      ["Il weekend esco con gli amici.", "El fin de semana salgo con mis amigos.", "", "il UÍ-kend ÉS-co con li a-MÍ-chi"],
      ["Cosa fai stasera?", "¿Qué haces esta noche?", "", "CÓ-sa FÁI sta-SÉ-ra"],
      ["Guardo una serie su Netflix.", "Veo una serie en Netflix.", "", "GUÁR-do ú-na SÉ-rie su NÉT-flix"]
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
      ["Scusi, dov'è la stazione?", "Disculpe, ¿dónde está la estación?", "", "SCÚ-si, do-VÉ la sta-TSIÓ-ne"],
      ["C'è una farmacia qui vicino?", "¿Hay una farmacia cerca?", "c'è = hay (singular)", "CHÉ ú-na far-ma-CHÍ-a cui vi-CHÍ-no"],
      ["Vada sempre dritto.", "Siga todo recto.", "Imperativo formal", "VÁ-da SÉM-pre DRÍT-to"],
      ["Giri a destra al semaforo.", "Gire a la derecha en el semáforo.", "", "YÍ-ri a DÉS-tra al se-MÁ-fo-ro"],
      ["È lontano?", "¿Está lejos?", "", "É lon-TÁ-no"],
      ["Sono cinque minuti a piedi.", "Son cinco minutos a pie.", "", "SÓ-no CHÍN-cue mi-NÚ-ti a PIÉ-di"],
      ["Un biglietto per Firenze, per favore.", "Un boleto para Florencia, por favor.", "", "un bi-LIÉT-to per fi-RÉN-tse, per fa-VÓ-re"],
      ["Mi sono perso.", "Me perdí.", "", "mi SÓ-no PÉR-so"]
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
      ["Un tavolo per due, per favore.", "Una mesa para dos, por favor.", "", "un TÁ-vo-lo per DÚ-e, per fa-VÓ-re"],
      ["Ho una prenotazione a nome Page.", "Tengo una reserva a nombre de Page.", "", "o ú-na pre-no-ta-TSIÓ-ne a NÓ-me PEICH"],
      ["Cosa mi consiglia?", "¿Qué me recomienda?", "", "CÓ-sa mi con-SÍ-lia"],
      ["Come primo prendo la carbonara.", "De primero tomo la carbonara.", "", "CÓ-me PRÍ-mo PRÉN-do la car-bo-NÁ-ra"],
      ["Mi piace la pizza.", "Me gusta la pizza.", "", "mi PIÁ-che la PÍT-tsa"],
      ["Mi piacciono i dolci.", "Me gustan los postres.", "Plural → piacciono", "mi PIÁT-cho-no i DÓL-chi"],
      ["Non mi piace il pesce.", "No me gusta el pescado.", "", "non mi PIÁ-che il PÉ-she"],
      ["Era tutto buonissimo!", "¡Todo estaba buenísimo!", "", "É-ra TÚT-to buo-NÍS-si-mo"]
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
      ["Cosa hai fatto nel weekend?", "¿Qué hiciste el fin de semana?", "", "CÓ-sa ÁI FÁT-to nel UÍ-kend"],
      ["Sabato sono andato al mare.", "El sábado fui a la playa.", "", "SÁ-ba-to SÓ-no an-DÁ-to al MÁ-re"],
      ["Ieri sera ho visto un film.", "Anoche vi una película.", "", "IÉ-ri SÉ-ra o VÍS-to un FILM"],
      ["Siamo usciti a ballare.", "Salimos a bailar.", "Con essere, concuerda en plural", "SIÁ-mo u-SHÍ-ti a bal-LÁ-re"],
      ["Ho dormito tutto il giorno.", "Dormí todo el día.", "", "o dor-MÍ-to TÚT-to il YÓR-no"],
      ["Mi sono divertito un sacco!", "¡Me divertí un montón!", "", "mi SÓ-no di-ver-TÍ-to un SÁC-co"],
      ["Com'è andata?", "¿Cómo te fue?", "", "co-MÉ an-DÁ-ta"]
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
    id: "a2-riflessivi",
    level: "A2",
    title: "Mi sveglio, mi vesto…",
    sub: "Verbos reflexivos · stare + gerundio",
    intro: "Los verbos reflexivos (despertarse, vestirse, divertirse) son de los más usados en la vida diaria. Y con “stare + gerundio” dices lo que estás haciendo justo ahora.",
    vocab: [
      ["svegliarsi", "despertarse", "sve-LIÁR-si"],
      ["alzarsi", "levantarse", "al-TSÁR-si"],
      ["lavarsi", "lavarse", "la-VÁR-si"],
      ["vestirsi", "vestirse", "ves-TÍR-si"],
      ["prepararsi", "arreglarse / prepararse", "pre-pa-RÁR-si"],
      ["sentirsi", "sentirse", "sen-TÍR-si"],
      ["divertirsi", "divertirse", "di-ver-TÍR-si"],
      ["annoiarsi", "aburrirse", "an-no-IÁR-si"],
      ["arrabbiarsi", "enojarse", "ar-rab-BIÁR-si"],
      ["riposarsi", "descansar", "ri-po-SÁR-si"],
      ["addormentarsi", "dormirse", "ad-dor-men-TÁR-si"],
      ["sbrigarsi", "darse prisa", "sbri-GÁR-si"]
    ],
    phrases: [
      ["Mi sveglio alle sette e mi alzo subito.", "Me despierto a las siete y me levanto enseguida.", "", "mi SVÉ-lio ÁL-le SÉT-te e mi ÁL-tso SÚ-bi-to"],
      ["Come ti senti oggi?", "¿Cómo te sientes hoy?", "", "CÓ-me ti SÉN-ti ÓD-yi"],
      ["Ci divertiamo un sacco insieme.", "Nos divertimos un montón juntos.", "", "chi di-ver-TIÁ-mo un SÁC-co in-SIÉ-me"],
      ["Ieri mi sono addormentato tardi.", "Ayer me dormí tarde.", "Pasado: siempre con essere", "IÉ-ri mi SÓ-no ad-dor-men-TÁ-to TÁR-di"],
      ["Sbrigati, siamo in ritardo!", "¡Date prisa, vamos tarde!", "Imperativo: pronombre al final", "SBRÍ-ga-ti, SIÁ-mo in ri-TÁR-do"],
      ["Sto cucinando, ti chiamo dopo.", "Estoy cocinando, te llamo después.", "stare + gerundio", "sto cu-chi-NÁN-do, ti KIÁ-mo DÓ-po"],
      ["Cosa stai facendo?", "¿Qué estás haciendo?", "", "CÓ-sa STAI fa-CHÉN-do"],
      ["Mi sto preparando per uscire.", "Me estoy arreglando para salir.", "", "mi sto pre-pa-RÁN-do per u-SHÍ-re"]
    ],
    grammar: {
      title: "Reflexivos y stare + gerundio",
      html: `<p><strong>Reflexivos:</strong> pronombre + verbo conjugado, igual que “me levanto”.</p>
      <table><tr><th>Persona</th><th>Presente</th><th>Passato prossimo</th></tr>
      <tr><td>io</td><td><b>mi</b> sveglio</td><td>mi sono svegliato/a</td></tr>
      <tr><td>tu</td><td><b>ti</b> svegli</td><td>ti sei svegliato/a</td></tr>
      <tr><td>lui / lei</td><td><b>si</b> sveglia</td><td>si è svegliato/a</td></tr>
      <tr><td>noi</td><td><b>ci</b> svegliamo</td><td>ci siamo svegliati/e</td></tr>
      <tr><td>voi</td><td><b>vi</b> svegliate</td><td>vi siete svegliati/e</td></tr>
      <tr><td>loro</td><td><b>si</b> svegliano</td><td>si sono svegliati/e</td></tr></table>
      <p>En pasado, los reflexivos <strong>siempre</strong> usan <em>essere</em>, y el participio concuerda.</p>
      <p>Con infinitivo, el pronombre se pega al final: <em>Devo alzar<u>mi</u> presto</em> (o <em><u>Mi</u> devo alzare</em>).</p>
      <p><strong>stare + gerundio</strong> = estar haciendo algo ahora. Gerundio: <em>-are → -ando</em>, <em>-ere / -ire → -endo</em>. Irregulares: <em>fare → facendo, dire → dicendo, bere → bevendo</em>.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> algunos verbos son reflexivos en italiano y no en español, y al revés: <em>ricordarsi</em> (acordarse) sí, pero <em>riposare</em> (descansar) se usa con y sin <em>si</em>.",
      "<strong>Truco:</strong> en italiano se usa el presente normal donde en español usaríamos a veces el gerundio. “¿Qué haces?” = <em>Cosa fai?</em>. Usa <em>stare + gerundio</em> solo para remarcar “justo ahora”."
    ],
    dialog: [
      ["A", "Pronto? Cosa stai facendo?", "¿Aló? ¿Qué estás haciendo?"],
      ["B", "Mi sto preparando, tra mezz'ora esco con Luca.", "Me estoy arreglando, en media hora salgo con Luca."],
      ["A", "Dove andate?", "¿A dónde van?"],
      ["B", "A ballare. L'ultima volta ci siamo divertiti tantissimo!", "A bailar. ¡La última vez nos divertimos muchísimo!"],
      ["A", "Beati voi! Io sono stanchissimo, mi riposo.", "¡Qué suerte! Yo estoy cansadísimo, descanso."],
      ["B", "Allora riposati e ci sentiamo domani!", "¡Entonces descansa y hablamos mañana!"]
    ],
    quiz: [
      { q: "Io ___ alle sette. (svegliarsi)", opts: ["sveglio", "mi sveglio", "si sveglio"], a: 1 },
      { q: "Ieri Giulia ___ tardi. (alzarsi)", opts: ["ha alzato", "si è alzata", "si ha alzata"], a: 1 },
      { q: "“¿Qué estás haciendo?” =", opts: ["Cosa stai facendo?", "Cosa sei facendo?", "Cosa stai fare?"], a: 0 },
      { q: "Gerundio de “bere”:", opts: ["berendo", "bevendo", "beviendo"], a: 1 },
      { q: "Escribe “nos divertimos” (presente):", fill: ["ci divertiamo", "noi ci divertiamo"] },
      { q: "Escribe “estoy comiendo” (mangiare):", fill: ["sto mangiando", "io sto mangiando"] }
    ]
  },

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
      ["Da bambino giocavo a calcio ogni giorno.", "De niño jugaba fútbol todos los días.", "Acción habitual → imperfetto", "da bam-BÍ-no yo-CÁ-vo a CÁL-cho Ó-ñi YÓR-no"],
      ["Quando ero piccolo vivevo con i nonni.", "Cuando era pequeño vivía con mis abuelos.", "", "CUÁN-do É-ro PÍC-co-lo vi-VÉ-vo con i NÓN-ni"],
      ["Ero molto timido.", "Era muy tímido.", "Descripción → imperfetto", "É-ro MÓL-to TÍ-mi-do"],
      ["Ogni estate andavamo al mare.", "Cada verano íbamos a la playa.", "", "Ó-ñi es-TÁ-te an-da-VÁ-mo al MÁ-re"],
      ["Mentre studiavo, è arrivato Marco.", "Mientras estudiaba, llegó Marco.", "Contexto (imperf.) + acción puntual (pass. pross.)", "MÉN-tre stu-DIÁ-vo, É ar-ri-VÁ-to MÁR-co"],
      ["Faceva caldo e c'era tanta gente.", "Hacía calor y había mucha gente.", "", "fa-CHÉ-va CÁL-do e CHÉ-ra TÁN-ta YÉN-te"],
      ["Com'eri da piccolo?", "¿Cómo eras de pequeño?", "", "co-MÉ-ri da PÍC-co-lo"]
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
      ["L'anno prossimo andrò in Italia.", "El año que viene iré a Italia.", "", "LÁN-no PRÓS-si-mo an-DRÓ in i-TÁ-lia"],
      ["Cosa farai questo weekend?", "¿Qué harás este fin de semana?", "", "CÓ-sa fa-RÁI CUÉS-to UÍ-kend"],
      ["Quando avrò più soldi, viaggerò di più.", "Cuando tenga más dinero, viajaré más.", "En italiano: futuro + futuro", "CUÁN-do a-VRÓ piú SÓL-di, viad-ye-RÓ di PIÚ"],
      ["Sarà difficile, ma ce la farò.", "Será difícil, pero lo lograré.", "farcela = lograrlo", "sa-RÁ dif-FÍ-chi-le, ma che la fa-RÓ"],
      ["Spero di parlare bene italiano.", "Espero hablar bien italiano.", "", "SPÉ-ro di par-LÁ-re BÉ-ne i-ta-LIÁ-no"],
      ["Domani studio tutto il giorno.", "Mañana estudio todo el día.", "Para planes cercanos se usa mucho el presente", "do-MÁ-ni STÚ-dio TÚT-to il YÓR-no"],
      ["Che ore saranno?", "¿Qué hora será?", "Futuro de suposición", "ke Ó-re sa-RÁN-no"]
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
      ["Posso provarla?", "¿Me la puedo probar?", "", "PÓS-so pro-VÁR-la"],
      ["Che taglia porta?", "¿Qué talla usa?", "Formal", "ke TÁ-lia PÓR-ta"],
      ["Porto la M.", "Uso la M.", "", "PÓR-to la ÉM-me"],
      ["Ce l'avete in nero?", "¿La tienen en negro?", "Muy usado: ce l'avete = ¿lo tienen?", "che la-VÉ-te in NÉ-ro"],
      ["Mi sta stretta.", "Me queda apretada.", "stare = quedar (ropa)", "mi sta STRÉT-ta"],
      ["Avete una taglia più grande?", "¿Tienen una talla más grande?", "", "a-VÉ-te ú-na TÁ-lia piú GRÁN-de"],
      ["La prendo!", "¡Me la llevo!", "", "la PRÉN-do"],
      ["Sto solo guardando, grazie.", "Solo estoy mirando, gracias.", "", "sto SÓ-lo guar-DÁN-do, GRÁ-tsie"]
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
      ["Non mi sento bene.", "No me siento bien.", "", "non mi SÉN-to BÉ-ne"],
      ["Mi fa male la testa.", "Me duele la cabeza.", "Singular → fa", "mi fa MÁ-le la TÉS-ta"],
      ["Mi fanno male i piedi.", "Me duelen los pies.", "Plural → fanno", "mi FÁN-no MÁ-le i PIÉ-di"],
      ["Ho mal di gola.", "Tengo dolor de garganta.", "", "o mal di GÓ-la"],
      ["Ho la febbre da ieri.", "Tengo fiebre desde ayer.", "", "o la FÉB-bre da IÉ-ri"],
      ["Sono allergico alla penicillina.", "Soy alérgico a la penicilina.", "", "SÓ-no al-LÉR-yi-co ÁL-la pe-ni-chil-LÍ-na"],
      ["Deve riposare e bere molta acqua.", "Debe descansar y tomar mucha agua.", "", "DÉ-ve ri-po-SÁ-re e BÉ-re MÓL-ta ÁC-cua"],
      ["Posso avere qualcosa per il raffreddore?", "¿Me puede dar algo para el resfriado?", "En la farmacia", "PÓS-so a-VÉ-re cual-CÓ-sa per il raf-fred-DÓ-re"]
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
      ["Quanto costa l'affitto al mese?", "¿Cuánto cuesta el alquiler al mes?", "", "CUÁN-to CÓS-ta laf-FÍT-to al MÉ-se"],
      ["Le spese sono incluse?", "¿Los gastos están incluidos?", "", "le SPÉ-se SÓ-no in-CLÚ-se"],
      ["Questo è più grande dell'altro.", "Este es más grande que el otro.", "", "CUÉS-to É piú GRÁN-de del-LÁL-tro"],
      ["È meno caro di quanto pensavo.", "Es menos caro de lo que pensaba.", "", "É MÉ-no CÁ-ro di CUÁN-to pen-SÁ-vo"],
      ["È il più luminoso di tutti.", "Es el más luminoso de todos.", "", "É il piú lu-mi-NÓ-so di TÚT-ti"],
      ["La zona è tranquillissima.", "La zona es tranquilísima.", "", "la DZÓ-na É tran-cuil-LÍS-si-ma"],
      ["Quando posso vederlo?", "¿Cuándo lo puedo ver?", "", "CUÁN-do PÓS-so ve-DÉR-lo"],
      ["Cerco una stanza in un appartamento condiviso.", "Busco una habitación en un piso compartido.", "", "CHÉR-co ú-na STÁN-tsa in un ap-par-ta-MÉN-to con-di-VÍ-so"]
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
    id: "a2-preposizioni",
    level: "A2",
    title: "A Roma, in Italia, dal medico",
    sub: "Preposiciones de lugar · ci y ne básicos",
    intro: "¿“A” o “in”? ¿Y cuándo “da”? Las preposiciones con lugares son el error más típico de los hispanohablantes. Además, empiezas a usar ci y ne, dos palabritas que los italianos dicen todo el tiempo.",
    vocab: [
      ["a Roma / a casa", "en/a Roma / en/a casa", "a RÓ-ma / a CÁ-sa"],
      ["in Italia / in Toscana", "en/a Italia / en/a la Toscana", "in i-TÁ-lia / in tos-CÁ-na"],
      ["in centro / in ufficio", "en/al centro / en/a la oficina", "in CHÉN-tro / in uf-FÍ-cho"],
      ["al mare / al cinema", "en/a la playa / en/al cine", "al MÁ-re / al CHÍ-ne-ma"],
      ["in montagna / in palestra", "en/a la montaña / en/al gym", "in mon-TÁ-ña / in pa-LÉS-tra"],
      ["dal medico / da Marco", "en/a lo del médico / en casa de Marco", "dal MÉ-di-co / da MÁR-co"],
      ["in treno / in macchina", "en tren / en carro", "in TRÉ-no / in MÁC-ki-na"],
      ["a piedi / in bici", "a pie / en bici", "a PIÉ-di / in BÍ-chi"],
      ["vengo da Panama", "vengo de Panamá", "VÉN-go da PÁ-na-ma"],
      ["ci (= allí)", "allí / ahí", "chi"],
      ["ne (= de eso)", "de eso / de ellos", "ne"],
      ["ce l'ho / non ce l'ho", "lo tengo / no lo tengo", "che LO / non che LO"]
    ],
    phrases: [
      ["Abito a Panama ma vorrei vivere in Italia.", "Vivo en Panamá pero quisiera vivir en Italia.", "Ciudad/país pequeño → a; país grande → in", "Á-bi-to a PÁ-na-ma ma vor-RÉI VÍ-ve-re in i-TÁ-lia"],
      ["Stasera vado da Giulia.", "Esta noche voy a casa de Giulia.", "Persona → da", "sta-SÉ-ra VÁ-do da YÚ-lia"],
      ["Domani devo andare dal dentista.", "Mañana tengo que ir al dentista.", "", "do-MÁ-ni DÉ-vo an-DÁ-re dal den-TÍS-ta"],
      ["Andiamo al mare o in montagna?", "¿Vamos a la playa o a la montaña?", "", "an-DIÁ-mo al MÁ-re o in mon-TÁ-ña"],
      ["Sei mai stato a Venezia? Sì, ci sono stato l'anno scorso.", "¿Has estado en Venecia? Sí, estuve el año pasado.", "ci = allí", "SÉI MAI STÁ-to a ve-NÉ-tsia? si, chi SÓ-no STÁ-to LÁN-no SCÓR-so"],
      ["Quanti caffè bevi? Ne bevo tre al giorno.", "¿Cuántos cafés tomas? Tomo tres al día.", "ne = de ellos", "CUÁN-ti caf-FÉ BÉ-vi? ne BÉ-vo TRE al YÓR-no"],
      ["Hai le chiavi? Sì, ce l'ho.", "¿Tienes las llaves? Sí, las tengo.", "", "ÁI le KIÁ-vi? si, che LO"],
      ["Ci vuole un'ora in treno.", "Se tarda una hora en tren.", "ci vuole = hace falta / se tarda", "chi VUÓ-le u-NÓ-ra in TRÉ-no"]
    ],
    grammar: {
      title: "a, in, da + ci y ne",
      html: `<table><tr><th>Preposición</th><th>Se usa con…</th><th>Ejemplos</th></tr>
      <tr><td><b>a</b></td><td>ciudades, islas pequeñas, casa, escuela, teatro</td><td>a Roma, a Cuba, a casa, a scuola, a teatro</td></tr>
      <tr><td><b>in</b></td><td>países, regiones, muchos lugares y medios de transporte</td><td>in Italia, in Sicilia, in banca, in farmacia, in centro, in treno</td></tr>
      <tr><td><b>al / alla</b></td><td>algunos lugares con artículo</td><td>al mare, al cinema, al bar, alla stazione</td></tr>
      <tr><td><b>da</b></td><td>personas y profesionales (a casa de / a lo de)</td><td>da Marco, dal medico, dalla nonna</td></tr>
      <tr><td><b>da</b></td><td>origen (desde)</td><td>vengo da Panama, il treno da Milano</td></tr></table>
      <p>Para “estar” y “ir” se usa la misma preposición: <em>Sono <u>a</u> Roma / Vado <u>a</u> Roma</em>.</p>
      <p><strong>ci</strong> = “allí” (un lugar ya mencionado): <em>Vai in palestra? Sì, ci vado ogni giorno.</em></p>
      <p><strong>ne</strong> = “de eso / de ellos”, sobre todo con cantidades: <em>Quanti anni hai? Ne ho 24.</em></p>`
    },
    tips: [
      "<strong>Ojo:</strong> los hispanohablantes dicen “vado in Roma” o “sono in casa di Marco”. Lo correcto: <em>vado <u>a</u> Roma</em>, <em>sono <u>da</u> Marco</em>.",
      "<strong>Truco:</strong> si en español dirías “a casa de…” o “al doctor”, en italiano casi siempre va <em>da</em>.",
      "<strong>Expresiones con ci:</strong> <em>ci vuole</em> (hace falta), <em>ci metto</em> (tardo), <em>c'è / ci sono</em> (hay), <em>ce l'ho</em> (lo tengo). Ya las conoces sin saberlo."
    ],
    dialog: [
      ["A", "Dove vai in vacanza quest'estate?", "¿A dónde vas de vacaciones este verano?"],
      ["B", "Vado in Puglia, da mia cugina. E tu?", "Voy a Apulia, a casa de mi prima. ¿Y tú?"],
      ["A", "Io resto a Milano, ma nel weekend vado al lago.", "Yo me quedo en Milán, pero el fin de semana voy al lago."],
      ["B", "Al lago di Como? Ci sono stato, è bellissimo!", "¿Al lago de Como? Estuve allí, ¡es bellísimo!"],
      ["A", "Quanto ci vuole in treno?", "¿Cuánto se tarda en tren?"],
      ["B", "Più o meno un'ora. Ne vale la pena!", "Más o menos una hora. ¡Vale la pena!"]
    ],
    quiz: [
      { q: "Abito ___ Roma.", opts: ["in", "a", "da"], a: 1 },
      { q: "Vorrei vivere ___ Spagna.", opts: ["in", "a", "al"], a: 0 },
      { q: "Stasera vado ___ Paolo.", opts: ["a", "in", "da"], a: 2 },
      { q: "Vai al cinema? Sì, ___ vado stasera.", opts: ["ne", "ci", "lo"], a: 1 },
      { q: "Quante sorelle hai? ___ ho due.", opts: ["Ci", "Ne", "Le"], a: 1 },
      { q: "Escribe “voy al médico”:", fill: ["vado dal medico", "io vado dal medico"] }
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
      ["Un biglietto di andata e ritorno per Napoli.", "Un billete de ida y vuelta a Nápoles.", "", "un bi-LIÉT-to di an-DÁ-ta e ri-TÓR-no per NÁ-po-li"],
      ["Da quale binario parte?", "¿De qué andén sale?", "", "da CUÁ-le bi-NÁ-rio PÁR-te"],
      ["Mi può dare la chiave, per favore?", "¿Me puede dar la llave, por favor?", "mi = a mí", "mi PUÓ DÁ-re la KIÁ-ve, per fa-VÓ-re"],
      ["Le scrivo una mail per confermare.", "Le escribo un correo para confirmar.", "Le = a usted (formal)", "le SCRÍ-vo ú-na MEIL per con-fer-MÁ-re"],
      ["Gli ho mandato un messaggio.", "Le mandé un mensaje (a él).", "gli = a él / a ellos", "li o man-DÁ-to un mes-SÁD-yo"],
      ["A che ora è il check-out?", "¿A qué hora es el check-out?", "", "a ke Ó-ra É il chek-ÁUT"],
      ["Il riscaldamento non funziona.", "La calefacción no funciona.", "", "il ris-cal-da-MÉN-to non fun-TSIÓ-na"],
      ["Ho perso la coincidenza.", "Perdí la conexión.", "", "o PÉR-so la coin-chi-DÉN-tsa"]
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
      ["Mi piacerebbe lavorare con voi.", "Me gustaría trabajar con ustedes.", "", "mi pia-che-RÉB-be la-vo-RÁ-re con VÓI"],
      ["Ho due anni di esperienza nel settore.", "Tengo dos años de experiencia en el sector.", "", "o DÚ-e ÁN-ni di es-pe-RIÉN-tsa nel set-TÓ-re"],
      ["Parlo spagnolo, inglese e un po' di italiano.", "Hablo español, inglés y un poco de italiano.", "", "PÁR-lo spa-ÑÓ-lo, in-GLÉ-se e un PO di i-ta-LIÁ-no"],
      ["Il mio punto di forza è la flessibilità.", "Mi punto fuerte es la flexibilidad.", "", "il MÍ-o PÚN-to di FÓR-tsa É la fles-si-bi-li-TÁ"],
      ["Potrebbe ripetere la domanda?", "¿Podría repetir la pregunta?", "", "po-TRÉB-be ri-PÉ-te-re la do-MÁN-da"],
      ["Quando potrei cominciare?", "¿Cuándo podría empezar?", "", "CUÁN-do po-TRÉI co-min-CHÁ-re"],
      ["Dovresti mandare il curriculum entro venerdì.", "Deberías mandar el CV antes del viernes.", "Consejo → dovresti", "do-VRÉS-ti man-DÁ-re il cur-RÍ-cu-lum ÉN-tro ve-ner-DÍ"],
      ["Sarei disponibile da subito.", "Estaría disponible de inmediato.", "", "sa-RÉI dis-po-NÍ-bi-le da SÚ-bi-to"]
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
      ["Dimmi tutto!", "¡Cuéntamelo todo!", "di' + mi", "DÍM-mi TÚT-to"],
      ["Fammi sapere.", "Avísame.", "fa' + mi", "FÁM-mi sa-PÉ-re"],
      ["Vieni stasera? Dai!", "¿Vienes esta noche? ¡Anda!", "", "VIÉ-ni sta-SÉ-ra? DAI"],
      ["Non ti preoccupare.", "No te preocupes.", "No + infinitivo", "non ti pre-oc-cu-PÁ-re"],
      ["Scrivimi quando arrivi.", "Escríbeme cuando llegues.", "", "SCRÍ-vi-mi CUÁN-do ar-RÍ-vi"],
      ["Cmq nn posso, scs", "Comunque non posso, scusa", "Chat: “igual no puedo, perdón”", "co-MÚN-cue non PÓS-so, SCÚ-sa", "Comunque non posso, scusa"],
      ["Xké nn rispondi?", "Perché non rispondi?", "Chat: ¿por qué no respondes?", "per-KÉ non ris-PÓN-di", "Perché non rispondi?"],
      ["Tvb ❤️", "Ti voglio bene", "Te quiero (amigos y familia)", "ti VÓ-lio BÉ-ne", "Ti voglio bene"]
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
  },

  // ===================== NIVEL B1 =====================

  {
    id: "b1-congiuntivo",
    level: "B1",
    title: "Secondo me: il congiuntivo",
    sub: "Opiniones, deseos y dudas · penso che sia",
    intro: "El subjuntivo italiano. Buena noticia: se usa en casi los mismos casos que en español (opinar, desear, dudar). La diferencia: en italiano también va después de “pensar” y “creer”.",
    vocab: [
      ["l'opinione", "la opinión", "o-pi-NIÓ-ne"],
      ["secondo me", "en mi opinión", "se-CÓN-do ME"],
      ["essere d'accordo", "estar de acuerdo", "d'ac-CÓR-do"],
      ["avere ragione / torto", "tener razón / no tenerla", "ra-YÓ-ne / TÓR-to"],
      ["il dubbio", "la duda", "DÚB-bio"],
      ["sembrare", "parecer", "sem-BRÁ-re"],
      ["bisogna che", "hace falta que", "bi-SÓ-ña ke"],
      ["è importante che", "es importante que", "im-por-TÁN-te"],
      ["sebbene / benché", "aunque", "seb-BÉ-ne / ben-KÉ"],
      ["prima che", "antes de que", "PRÍ-ma ke"],
      ["affinché", "para que", "af-fin-KÉ"],
      ["il punto di vista", "el punto de vista", "PÚN-to di VÍS-ta"]
    ],
    phrases: [
      ["Penso che sia una buona idea.", "Creo que es una buena idea.", "¡En español va indicativo!", "PÉN-so ke SÍ-a ú-na BUÓ-na i-DÉ-a"],
      ["Credo che abbia ragione lui.", "Creo que él tiene razón.", "", "CRÉ-do ke ÁB-bia ra-YÓ-ne LUI"],
      ["Spero che tu stia meglio.", "Espero que estés mejor.", "", "SPÉ-ro ke tu STÍ-a MÉ-lio"],
      ["Non so se sia vero.", "No sé si es verdad.", "", "non SO se SÍ-a VÉ-ro"],
      ["Voglio che tu venga alla festa.", "Quiero que vengas a la fiesta.", "", "VÓ-lio ke tu VÉN-ga ÁL-la FÉS-ta"],
      ["Mi sembra che sia troppo caro.", "Me parece que es demasiado caro.", "", "mi SÉM-bra ke SÍ-a TRÓP-po CÁ-ro"],
      ["Benché piova, usciamo lo stesso.", "Aunque llueva, salimos igual.", "", "ben-KÉ PIÓ-va, u-SHÁ-mo lo STÉS-so"],
      ["Sono d'accordo con te.", "Estoy de acuerdo contigo.", "", "SÓ-no dac-CÓR-do con TE"]
    ],
    grammar: {
      title: "Congiuntivo presente",
      html: `<table><tr><th>Persona</th><th>parlare</th><th>prendere</th><th>partire</th></tr>
      <tr><td>che io</td><td>parli</td><td>prenda</td><td>parta</td></tr>
      <tr><td>che tu</td><td>parli</td><td>prenda</td><td>parta</td></tr>
      <tr><td>che lui/lei</td><td>parli</td><td>prenda</td><td>parta</td></tr>
      <tr><td>che noi</td><td>parliamo</td><td>prendiamo</td><td>partiamo</td></tr>
      <tr><td>che voi</td><td>parliate</td><td>prendiate</td><td>partiate</td></tr>
      <tr><td>che loro</td><td>parlino</td><td>prendano</td><td>partano</td></tr></table>
      <p>Las tres personas del singular son iguales: por eso a veces se añade el pronombre (<em>che tu parli</em>).</p>
      <p>Irregulares: <strong>essere</strong> → sia, siamo, siate, siano · <strong>avere</strong> → abbia · <strong>fare</strong> → faccia · <strong>andare</strong> → vada · <strong>venire</strong> → venga · <strong>stare</strong> → stia · <strong>potere</strong> → possa · <strong>volere</strong> → voglia.</p>
      <p><strong>Cuándo:</strong> después de <em>penso/credo/mi sembra che</em> (opinión), <em>spero/voglio che</em> (deseo), <em>non so se, dubito che</em> (duda), <em>è importante/bisogna che</em> y conjunciones como <em>benché, prima che, affinché</em>.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> la gran diferencia con el español: “Creo que <u>es</u> verdad” → <em>Credo che <u>sia</u> vero</em>. Los verbos de opinión piden subjuntivo en italiano.",
      "<strong>Truco:</strong> si el sujeto es el mismo, no se usa congiuntivo sino <em>di</em> + infinitivo: <em>Penso <u>di</u> partire</em> (pienso irme), no “penso che io parta”.",
      "<strong>Realidad:</strong> en el habla informal muchos italianos usan el indicativo (<em>penso che è…</em>). Entiéndelo, pero tú usa el congiuntivo: suena más culto."
    ],
    dialog: [
      ["A", "Secondo te, conviene andare a vivere a Milano?", "En tu opinión, ¿conviene irse a vivir a Milán?"],
      ["B", "Penso che sia una città piena di opportunità.", "Creo que es una ciudad llena de oportunidades."],
      ["A", "Sì, ma credo che gli affitti siano carissimi.", "Sí, pero creo que los alquileres son carísimos."],
      ["B", "È vero. Bisogna che tu trovi un buon lavoro prima.", "Es verdad. Hace falta que encuentres un buen trabajo antes."],
      ["A", "Spero che mi rispondano presto dall'azienda.", "Espero que me respondan pronto de la empresa."],
      ["B", "Vedrai che andrà tutto bene!", "¡Ya verás que todo saldrá bien!"]
    ],
    quiz: [
      { q: "Penso che Marco ___ stanco.", opts: ["è", "sia", "fosse"], a: 1 },
      { q: "Spero che voi ___ (venire).", opts: ["venite", "veniate", "vengano"], a: 1 },
      { q: "“Pienso irme mañana” =", opts: ["Penso che io parta domani", "Penso di partire domani", "Penso partire domani"], a: 1 },
      { q: "Escribe el congiuntivo de essere, lui:", fill: ["sia", "che lui sia"] },
      { q: "Escribe el congiuntivo de avere, loro:", fill: ["abbiano", "che loro abbiano"] },
      { q: "Escucha y escribe:", say: "credo che abbia ragione", fill: ["credo che abbia ragione"] }
    ]
  },

  {
    id: "b1-ipotesi",
    level: "B1",
    title: "Se fossi ricco…",
    sub: "Hipótesis y deseos · se + congiuntivo imperfetto",
    intro: "Para hablar de lo que harías si las cosas fueran distintas: si tuviera tiempo, si viviera en Italia, si ganara la lotería. Funciona igual que en español.",
    vocab: [
      ["vincere la lotteria", "ganar la lotería", "VÍN-che-re la lot-te-RÍ-a"],
      ["il sogno", "el sueño", "SÓ-ño"],
      ["realizzare", "cumplir / realizar", "re-a-lid-DZÁ-re"],
      ["magari", "ojalá", "ma-GÁ-ri"],
      ["al posto tuo", "en tu lugar", "al PÓS-to TÚ-o"],
      ["fare il giro del mondo", "dar la vuelta al mundo", "YÍ-ro del MÓN-do"],
      ["licenziarsi", "renunciar al trabajo", "li-chen-TSIÁR-si"],
      ["mettersi in proprio", "independizarse (negocio)", "MÉT-ter-si in PRÓ-prio"],
      ["la possibilità", "la posibilidad", "pos-si-bi-li-TÁ"],
      ["immaginare", "imaginar", "im-ma-yi-NÁ-re"],
      ["il rimpianto", "el arrepentimiento", "rim-PIÁN-to"],
      ["come se", "como si", "CÓ-me se"]
    ],
    phrases: [
      ["Se fossi ricco, viaggerei sempre.", "Si fuera rico, viajaría siempre.", "", "se FÓS-si RÍC-co, viad-ye-RÉI SÉM-pre"],
      ["Se avessi più tempo, studierei di più.", "Si tuviera más tiempo, estudiaría más.", "", "se a-VÉS-si piú TÉM-po, stu-die-RÉI di PIÚ"],
      ["Al posto tuo, accetterei.", "En tu lugar, aceptaría.", "", "al PÓS-to TÚ-o, ac-chet-te-RÉI"],
      ["Magari potessi venire!", "¡Ojalá pudiera ir!", "", "ma-GÁ-ri po-TÉS-si ve-NÍ-re"],
      ["Se potessi, vivrei a Firenze.", "Si pudiera, viviría en Florencia.", "", "se po-TÉS-si, vi-VRÉI a fi-RÉN-tse"],
      ["Parla come se fosse il capo.", "Habla como si fuera el jefe.", "", "PÁR-la CÓ-me se FÓS-se il CÁ-po"],
      ["Cosa faresti se vincessi la lotteria?", "¿Qué harías si ganaras la lotería?", "", "CÓ-sa fa-RÉS-ti se vin-CHÉS-si la lot-te-RÍ-a"],
      ["Vorrei che tu fossi qui.", "Me gustaría que estuvieras aquí.", "", "vor-RÉI ke tu FÓS-si CUI"]
    ],
    grammar: {
      title: "Congiuntivo imperfetto + condizionale",
      html: `<p>Estructura: <strong>se + congiuntivo imperfetto, condizionale</strong>. Igual que “si + subjuntivo, condicional”.</p>
      <table><tr><th>Persona</th><th>parlare</th><th>essere</th><th>avere</th></tr>
      <tr><td>(se) io</td><td>parlassi</td><td>fossi</td><td>avessi</td></tr>
      <tr><td>(se) tu</td><td>parlassi</td><td>fossi</td><td>avessi</td></tr>
      <tr><td>(se) lui/lei</td><td>parlasse</td><td>fosse</td><td>avesse</td></tr>
      <tr><td>(se) noi</td><td>parlassimo</td><td>fossimo</td><td>avessimo</td></tr>
      <tr><td>(se) voi</td><td>parlaste</td><td>foste</td><td>aveste</td></tr>
      <tr><td>(se) loro</td><td>parlassero</td><td>fossero</td><td>avessero</td></tr></table>
      <p>Irregulares: <strong>fare</strong> → facessi · <strong>dire</strong> → dicessi · <strong>bere</strong> → bevessi · <strong>dare</strong> → dessi · <strong>stare</strong> → stessi.</p>
      <p>También después de <em>vorrei che, magari, come se</em>.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> nunca uses el condicional después de <em>se</em>: ~~se avrei~~ → <em>se avessi</em>. Es el error más típico (también de los italianos jóvenes).",
      "<strong>Truco:</strong> el congiuntivo imperfetto se forma casi como el “-ase/-ara” español: habl<u>ase</u> → parl<u>assi</u>."
    ],
    dialog: [
      ["A", "Cosa faresti se vincessi un milione di euro?", "¿Qué harías si ganaras un millón de euros?"],
      ["B", "Mi licenzierei subito e farei il giro del mondo!", "¡Renunciaría enseguida y daría la vuelta al mundo!"],
      ["A", "E se dovessi scegliere un solo paese?", "¿Y si tuvieras que elegir un solo país?"],
      ["B", "Andrei in Italia, ovviamente. Comprerei una casa in Toscana.", "Iría a Italia, obviamente. Compraría una casa en la Toscana."],
      ["A", "Magari fosse così facile!", "¡Ojalá fuera tan fácil!"],
      ["B", "Sognare non costa niente.", "Soñar no cuesta nada."]
    ],
    quiz: [
      { q: "Se ___ tempo, verrei.", opts: ["avrei", "avessi", "ho avuto"], a: 1 },
      { q: "Se fossi in te, ___ .", opts: ["accetterei", "accetto", "accettassi"], a: 0 },
      { q: "Congiuntivo imperfetto de fare, io:", opts: ["fassi", "facessi", "farei"], a: 1 },
      { q: "Escribe “si fuera” (essere, io):", fill: ["se fossi", "fossi"] },
      { q: "Escribe “¡Ojalá!” en italiano:", fill: ["magari", "magari!"] },
      { q: "Escucha y escribe:", say: "come se fosse facile", fill: ["come se fosse facile"] }
    ]
  },

  {
    id: "b1-pronomi",
    level: "B1",
    title: "Te lo dico io",
    sub: "Pronombres combinados · ci y ne",
    intro: "Para sonar natural necesitas juntar pronombres (“te lo digo”, “se lo di”) y dominar dos palabritas que los italianos usan sin parar: ci y ne.",
    vocab: [
      ["me lo / me la", "me lo / me la", "me lo / me la"],
      ["te lo / te la", "te lo / te la", "te lo / te la"],
      ["glielo / gliela", "se lo / se la (a él, ella, usted)", "LIÉ-lo / LIÉ-la"],
      ["ce lo / ve lo", "nos lo / os lo", "che lo / ve lo"],
      ["ne", "de eso / de ellos (cantidad)", "ne"],
      ["ci", "allí / en eso", "chi"],
      ["prestare", "prestar", "pres-TÁ-re"],
      ["regalare", "regalar", "re-ga-LÁ-re"],
      ["restituire", "devolver", "res-ti-tu-Í-re"],
      ["parlarne", "hablar de ello", "par-LÁR-ne"],
      ["pensarci", "pensarlo", "pen-SÁR-chi"],
      ["andarsene", "irse", "an-DÁR-se-ne"]
    ],
    phrases: [
      ["Te lo dico domani.", "Te lo digo mañana.", "", "te lo DÍ-co do-MÁ-ni"],
      ["Gliel'ho già dato.", "Ya se lo di.", "glielo + ho", "lie-LÓ YA DÁ-to"],
      ["Me lo puoi prestare?", "¿Me lo puedes prestar?", "", "me lo puói pres-TÁ-re"],
      ["Quanti fratelli hai? Ne ho due.", "¿Cuántos hermanos tienes? Tengo dos.", "ne = de ellos", "CUÁN-ti fra-TÉL-li ÁI? ne o DÚ-e"],
      ["Ne parliamo dopo.", "Hablamos de eso después.", "", "ne par-LIÁ-mo DÓ-po"],
      ["Vai a Roma? Sì, ci vado domani.", "¿Vas a Roma? Sí, voy mañana.", "ci = allí", "vai a RÓ-ma? si, chi VÁ-do do-MÁ-ni"],
      ["Ci penso io!", "¡Yo me encargo!", "Expresión muy común", "chi PÉN-so Í-o"],
      ["Me ne vado.", "Me voy.", "andarsene", "me ne VÁ-do"]
    ],
    grammar: {
      title: "Pronombres combinados, ci y ne",
      html: `<p>Indirecto + directo. Los indirectos <em>mi, ti, ci, vi</em> cambian la i por e:</p>
      <table><tr><th>Indirecto</th><th>+ lo</th><th>+ la</th><th>+ ne</th></tr>
      <tr><td>mi</td><td>me lo</td><td>me la</td><td>me ne</td></tr>
      <tr><td>ti</td><td>te lo</td><td>te la</td><td>te ne</td></tr>
      <tr><td>gli / le / Le</td><td>glielo</td><td>gliela</td><td>gliene</td></tr>
      <tr><td>ci</td><td>ce lo</td><td>ce la</td><td>ce ne</td></tr>
      <tr><td>vi</td><td>ve lo</td><td>ve la</td><td>ve ne</td></tr></table>
      <p><strong>glie-</strong> sirve para él, ella y usted, y se escribe junto: <em>glielo</em>.</p>
      <p><strong>ne</strong> = “de eso / de ellos”, sobre todo con cantidades: <em>Quanti caffè bevi? Ne bevo tre.</em></p>
      <p><strong>ci</strong> = “allí” o “en eso”: <em>Ci vado. Ci penso.</em> Y en expresiones: <em>ci vuole</em> (se necesita), <em>ce l'ho</em> (lo tengo).</p>`
    },
    tips: [
      "<strong>Ojo:</strong> en italiano “ne” es obligatorio con cantidades. “Tengo dos” no se dice ~~ho due~~ sino <em>ne ho due</em>.",
      "<strong>Expresiones con ci/ne muy usadas:</strong> <em>ce la faccio</em> (lo logro), <em>non ce la faccio più</em> (no puedo más), <em>me ne frego</em> (me da igual, coloquial), <em>ci vuole un'ora</em> (se tarda una hora)."
    ],
    dialog: [
      ["A", "Hai ancora il libro che ti ho prestato?", "¿Todavía tienes el libro que te presté?"],
      ["B", "Sì, scusa! Te lo restituisco domani.", "¡Sí, perdón! Te lo devuelvo mañana."],
      ["A", "Tranquillo. E il regalo per Giulia? Gliel'hai dato?", "Tranquilo. ¿Y el regalo para Giulia? ¿Se lo diste?"],
      ["B", "Non ancora, glielo do stasera alla festa.", "Todavía no, se lo doy esta noche en la fiesta."],
      ["A", "Vieni anche tu? Quante persone ci saranno?", "¿Vienes tú también? ¿Cuántas personas habrá?"],
      ["B", "Ne ho invitate venti. Ci vediamo lì!", "Invité a veinte. ¡Nos vemos allí!"]
    ],
    quiz: [
      { q: "Il libro? ___ do a Marco.", opts: ["Glielo", "Gli lo", "Se lo"], a: 0 },
      { q: "La foto? ___ mandi? (a mí)", opts: ["Mi la", "Me la", "Me lo"], a: 1 },
      { q: "Quante pizze vuoi? ___ voglio due.", opts: ["Ci", "Ne", "Le"], a: 1 },
      { q: "Vai al cinema? Sì, ___ vado stasera.", opts: ["ne", "ci", "lo"], a: 1 },
      { q: "Escribe “te lo digo”:", fill: ["te lo dico"] },
      { q: "“Non ce la faccio più” significa…", opts: ["No lo encuentro", "No puedo más", "No me importa"], a: 1 }
    ]
  },

  {
    id: "b1-relazioni",
    level: "B1",
    title: "Relazioni",
    sub: "Amor, amistad y conflictos · che, cui, il quale",
    intro: "Para hablar de personas importantes en tu vida, de pareja y de amistad, y unir frases como un nativo con los pronombres relativos.",
    vocab: [
      ["innamorarsi", "enamorarse", "in-na-mo-RÁR-si"],
      ["fidanzarsi", "hacerse novios / comprometerse", "fi-dan-TSÁR-si"],
      ["il fidanzato / la fidanzata", "el novio / la novia", "fi-dan-TSÁ-to"],
      ["lasciarsi", "terminar (una relación)", "la-SHÁR-si"],
      ["litigare", "pelear / discutir", "li-ti-GÁ-re"],
      ["fare pace", "reconciliarse", "FÁ-re PÁ-che"],
      ["fidarsi di", "confiar en", "fi-DÁR-si di"],
      ["la gelosia", "los celos", "ye-lo-SÍ-a"],
      ["andare d'accordo", "llevarse bien", "an-DÁ-re dac-CÓR-do"],
      ["sentire la mancanza", "extrañar", "man-CÁN-tsa"],
      ["l'amicizia", "la amistad", "a-mi-CHÍ-tsia"],
      ["il rapporto", "la relación", "rap-PÓR-to"]
    ],
    phrases: [
      ["Ci siamo conosciuti all'università.", "Nos conocimos en la universidad.", "", "chi SIÁ-mo co-no-SHÚ-ti al-lu-ni-ver-si-TÁ"],
      ["Vado molto d'accordo con mia sorella.", "Me llevo muy bien con mi hermana.", "", "VÁ-do MÓL-to dac-CÓR-do con MÍ-a so-RÉL-la"],
      ["Mi manchi tanto.", "Te extraño mucho.", "¡Cuidado con el orden!", "mi MÁN-ki TÁN-to"],
      ["È la persona di cui mi fido di più.", "Es la persona en quien más confío.", "", "É la per-SÓ-na di CUI mi FÍ-do di PIÚ"],
      ["Il ragazzo con cui esco è romano.", "El chico con el que salgo es romano.", "", "il ra-GÁT-tso con CUI ÉS-co É ro-MÁ-no"],
      ["Abbiamo litigato, ma poi abbiamo fatto pace.", "Peleamos, pero luego nos reconciliamos.", "", "ab-BIÁ-mo li-ti-GÁ-to, ma POI ab-BIÁ-mo FÁT-to PÁ-che"],
      ["Si sono lasciati dopo tre anni.", "Terminaron después de tres años.", "", "si SÓ-no la-SHÁ-ti DÓ-po TRE ÁN-ni"],
      ["Gli amici sono la famiglia che scegli.", "Los amigos son la familia que eliges.", "", "li a-MÍ-chi SÓ-no la fa-MÍ-lia ke SHÉ-li"]
    ],
    grammar: {
      title: "Pronombres relativos: che, cui, il quale",
      html: `<table><tr><th>Uso</th><th>Italiano</th><th>Ejemplo</th></tr>
      <tr><td>sujeto u objeto directo</td><td>che</td><td>Il film <u>che</u> ho visto…</td></tr>
      <tr><td>después de preposición</td><td>cui</td><td>La ragazza <u>con cui</u> esco… / Il motivo <u>per cui</u>…</td></tr>
      <tr><td>formal / para evitar ambigüedad</td><td>il quale, la quale, i quali, le quali</td><td>Il collega <u>con il quale</u> lavoro…</td></tr>
      <tr><td>“lo que”</td><td>quello che / ciò che</td><td><u>Quello che</u> dici è vero.</td></tr>
      <tr><td>“cuyo”</td><td>il cui, la cui…</td><td>Lo scrittore <u>il cui</u> libro…</td></tr></table>
      <p>Nunca uses <em>che</em> después de una preposición: ~~con che~~ → <em>con cui</em>.</p>`
    },
    tips: [
      "<strong>Ojo — mancare:</strong> funciona al revés que “extrañar”, como <em>piacere</em>. <em>Mi manchi</em> = te extraño (literalmente “me faltas”). <em>Mi manca l'Italia</em> = extraño Italia.",
      "<strong>Falso amigo:</strong> <em>la fidanzata</em> es la novia (no necesariamente prometida). “Prometida para casarse” también se dice así, o <em>promessa sposa</em>."
    ],
    dialog: [
      ["A", "Come vi siete conosciuti tu e Luca?", "¿Cómo se conocieron tú y Luca?"],
      ["B", "A una festa di un'amica con cui studiavo.", "En una fiesta de una amiga con la que estudiaba."],
      ["A", "E andate d'accordo?", "¿Y se llevan bien?"],
      ["B", "Sì, anche se a volte litighiamo per cose stupide.", "Sí, aunque a veces peleamos por tonterías."],
      ["A", "È normale! L'importante è fidarsi l'uno dell'altra.", "¡Es normal! Lo importante es confiar el uno en el otro."],
      ["B", "Esatto. E quando non c'è, mi manca tantissimo.", "Exacto. Y cuando no está, lo extraño muchísimo."]
    ],
    quiz: [
      { q: "La persona con ___ lavoro è simpatica.", opts: ["che", "cui", "quale"], a: 1 },
      { q: "Il libro ___ leggo è bellissimo.", opts: ["che", "cui", "di cui"], a: 0 },
      { q: "“Te extraño” =", opts: ["Ti manco", "Mi manchi", "Ti mancano"], a: 1 },
      { q: "“Llevarse bien” =", opts: ["portarsi bene", "andare d'accordo", "stare bene"], a: 1 },
      { q: "Escribe “reconciliarse” (fare…):", fill: ["fare pace"] },
      { q: "Escucha y escribe:", say: "mi fido di te", fill: ["mi fido di te"] }
    ]
  },

  {
    id: "b1-racconti",
    level: "B1",
    title: "Raccontare una storia",
    sub: "Trapassato prossimo · stare + gerundio",
    intro: "Para contar historias con orden: lo que ya había pasado antes, lo que estaba pasando en ese momento y lo que pasó después.",
    vocab: [
      ["all'improvviso", "de repente", "al-lim-prov-VÍ-so"],
      ["nel frattempo", "mientras tanto", "nel frat-TÉM-po"],
      ["alla fine", "al final", "ÁL-la FÍ-ne"],
      ["prima di + inf.", "antes de", "PRÍ-ma di"],
      ["dopo aver + part.", "después de haber", "DÓ-po a-VÉR"],
      ["succedere", "suceder", "suc-CHÉ-de-re"],
      ["accorgersi", "darse cuenta", "ac-CÓR-yer-si"],
      ["ricordarsi", "acordarse", "ri-cor-DÁR-si"],
      ["la sorpresa", "la sorpresa", "sor-PRÉ-sa"],
      ["per fortuna", "por suerte", "per for-TÚ-na"],
      ["stare per", "estar a punto de", "STÁ-re per"],
      ["un sacco di", "un montón de", "un SÁC-co di"]
    ],
    phrases: [
      ["Quando sono arrivato, il treno era già partito.", "Cuando llegué, el tren ya había salido.", "Trapassato", "CUÁN-do SÓ-no ar-ri-VÁ-to, il TRÉ-no É-ra YA par-TÍ-to"],
      ["Non avevo mai visto la neve prima.", "Nunca había visto la nieve antes.", "", "non a-VÉ-vo MAI VÍS-to la NÉ-ve PRÍ-ma"],
      ["Sto lavorando, ti chiamo dopo.", "Estoy trabajando, te llamo después.", "stare + gerundio", "sto la-vo-RÁN-do, ti KIÁ-mo DÓ-po"],
      ["Stavo dormendo quando hai chiamato.", "Estaba durmiendo cuando llamaste.", "", "STÁ-vo dor-MÉN-do CUÁN-do ÁI kia-MÁ-to"],
      ["Sto per uscire.", "Estoy a punto de salir.", "", "sto per u-SHÍ-re"],
      ["All'improvviso mi sono accorto che avevo perso il portafoglio.", "De repente me di cuenta de que había perdido la billetera.", "", "al-lim-prov-VÍ-so mi SÓ-no ac-CÓR-to ke a-VÉ-vo PÉR-so il por-ta-FÓ-lio"],
      ["Dopo aver mangiato, siamo andati a ballare.", "Después de comer, fuimos a bailar.", "", "DÓ-po a-VÉR man-YÁ-to, SIÁ-mo an-DÁ-ti a bal-LÁ-re"],
      ["Per fortuna, alla fine è andato tutto bene.", "Por suerte, al final todo salió bien.", "", "per for-TÚ-na, ÁL-la FÍ-ne É an-DÁ-to TÚT-to BÉ-ne"]
    ],
    grammar: {
      title: "Trapassato prossimo y gerundio",
      html: `<p><strong>Trapassato prossimo</strong> = imperfetto de avere/essere + participio. Es nuestro “había + participio”.</p>
      <table><tr><th>Persona</th><th>con avere</th><th>con essere</th></tr>
      <tr><td>io</td><td>avevo mangiato</td><td>ero partito/a</td></tr>
      <tr><td>tu</td><td>avevi mangiato</td><td>eri partito/a</td></tr>
      <tr><td>lui/lei</td><td>aveva mangiato</td><td>era partito/a</td></tr>
      <tr><td>noi</td><td>avevamo mangiato</td><td>eravamo partiti/e</td></tr>
      <tr><td>voi</td><td>avevate mangiato</td><td>eravate partiti/e</td></tr>
      <tr><td>loro</td><td>avevano mangiato</td><td>erano partiti/e</td></tr></table>
      <p><strong>Gerundio:</strong> -are → <em>-ando</em>, -ere/-ire → <em>-endo</em> (parlando, prendendo, dormendo). Irregulares: <em>facendo, dicendo, bevendo</em>.</p>
      <p><strong>stare + gerundio</strong> = acción en curso: <em>sto mangiando, stavo leggendo</em>. <strong>stare per</strong> + infinitivo = estar a punto de.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> en italiano “stare + gerundio” se usa menos que en español. “¿Qué haces?” suele ser <em>Cosa fai?</em>, no “cosa stai facendo?” (salvo para remarcar que es justo ahora).",
      "<strong>Conectores para contar:</strong> <em>prima, poi, dopo, a un certo punto, all'improvviso, nel frattempo, alla fine</em>. Con ellos cualquier historia suena ordenada."
    ],
    dialog: [
      ["A", "Allora, com'è andato il viaggio a Napoli?", "Entonces, ¿cómo te fue el viaje a Nápoles?"],
      ["B", "Un disastro all'inizio! Quando sono arrivato in stazione, il treno era già partito.", "¡Un desastre al principio! Cuando llegué a la estación, el tren ya había salido."],
      ["A", "Noo! E cosa hai fatto?", "¡Nooo! ¿Y qué hiciste?"],
      ["B", "Stavo per tornare a casa, ma poi ho trovato un pullman.", "Estaba a punto de volver a casa, pero luego encontré un bus."],
      ["A", "Per fortuna! E Napoli?", "¡Menos mal! ¿Y Nápoles?"],
      ["B", "Bellissima. Non avevo mai mangiato una pizza così buona.", "Bellísima. Nunca había comido una pizza tan buena."]
    ],
    quiz: [
      { q: "Quando sono arrivato, lei ___ già ___ .", opts: ["è / uscita", "era / uscita", "aveva / uscito"], a: 1 },
      { q: "Gerundio de fare:", opts: ["fando", "facendo", "farendo"], a: 1 },
      { q: "“Estoy a punto de salir” =", opts: ["Sto uscendo", "Sto per uscire", "Ero uscito"], a: 1 },
      { q: "Escribe “estaba durmiendo” (io):", fill: ["stavo dormendo", "io stavo dormendo"] },
      { q: "Escribe “yo había comido”:", fill: ["avevo mangiato", "io avevo mangiato"] },
      { q: "Escucha y escribe:", say: "all'improvviso", fill: ["all'improvviso"] }
    ]
  },

  {
    id: "b1-notizie",
    level: "B1",
    title: "Le notizie",
    sub: "Actualidad y sociedad · forma pasiva y “si”",
    intro: "Para entender noticias, leer periódicos y opinar sobre temas de sociedad. Aprendes la voz pasiva y el “si” impersonal, muy usados en textos escritos.",
    vocab: [
      ["il governo", "el gobierno", "go-VÉR-no"],
      ["le elezioni", "las elecciones", "e-le-TSIÓ-ni"],
      ["la legge", "la ley", "LÉD-ye"],
      ["lo sciopero", "la huelga", "SHÓ-pe-ro"],
      ["l'inquinamento", "la contaminación", "in-cui-na-MÉN-to"],
      ["il cambiamento climatico", "el cambio climático", "cam-bia-MÉN-to cli-MÁ-ti-co"],
      ["la disoccupazione", "el desempleo", "di-soc-cu-pa-TSIÓ-ne"],
      ["la crisi", "la crisis", "CRÍ-si"],
      ["il giornale", "el periódico", "yor-NÁ-le"],
      ["l'articolo", "el artículo", "ar-TÍ-co-lo"],
      ["secondo gli esperti", "según los expertos", "es-PÉR-ti"],
      ["aumentare / diminuire", "aumentar / disminuir", "au-men-TÁ-re / di-mi-nu-Í-re"]
    ],
    phrases: [
      ["Hai letto le notizie di oggi?", "¿Leíste las noticias de hoy?", "", "ÁI LÉT-to le no-TÍ-tsie di ÓD-yi"],
      ["La legge è stata approvata ieri.", "La ley fue aprobada ayer.", "Pasiva con essere", "la LÉD-ye É STÁ-ta ap-pro-VÁ-ta IÉ-ri"],
      ["Il ponte viene costruito in due anni.", "El puente se construye en dos años.", "Pasiva con venire", "il PÓN-te VIÉ-ne cos-tru-Í-to in DÚ-e ÁN-ni"],
      ["In Italia si mangia bene.", "En Italia se come bien.", "si impersonal", "in i-TÁ-lia si MÁN-ya BÉ-ne"],
      ["Si vendono biglietti online.", "Se venden boletos en línea.", "", "si VÉN-do-no bi-LIÉT-ti on-LÁIN"],
      ["Domani c'è sciopero dei treni.", "Mañana hay huelga de trenes.", "", "do-MÁ-ni CHÉ SHÓ-pe-ro dei TRÉ-ni"],
      ["Secondo gli esperti, la disoccupazione è diminuita.", "Según los expertos, el desempleo disminuyó.", "", "se-CÓN-do li es-PÉR-ti, la di-soc-cu-pa-TSIÓ-ne É di-mi-nu-Í-ta"],
      ["Bisognerebbe fare di più per l'ambiente.", "Habría que hacer más por el medio ambiente.", "", "bi-so-ñe-RÉB-be FÁ-re di PIÚ per lam-BIÉN-te"]
    ],
    grammar: {
      title: "Forma pasiva y si impersonal",
      html: `<p><strong>Pasiva</strong> = essere (o venire) + participio, que concuerda con el sujeto:</p>
      <table><tr><th>Activa</th><th>Pasiva</th></tr>
      <tr><td>Il governo approva la legge.</td><td>La legge <u>è approvata</u> / <u>viene approvata</u> dal governo.</td></tr>
      <tr><td>Hanno costruito il ponte.</td><td>Il ponte <u>è stato costruito</u>.</td></tr></table>
      <p><strong>venire</strong> solo en tiempos simples (viene, veniva, verrà) y da sensación de proceso. <strong>andare</strong> + participio = obligación: <em>Il biglietto va convalidato</em> (debe validarse).</p>
      <p><strong>si</strong> impersonal/pasivo = “se”: <em>si dice, si vive bene, si parla italiano</em>. Con plural, el verbo va en plural: <em>si vendono case</em>.</p>`
    },
    tips: [
      "<strong>Truco:</strong> los titulares italianos casi siempre usan la pasiva o frases sin verbo: <em>“Approvata la nuova legge”</em>, <em>“Sciopero dei treni: i dettagli”</em>.",
      "<strong>Cultura:</strong> periódicos principales: <em>Corriere della Sera, la Repubblica, La Stampa</em>. Para tu nivel, prueba <em>“Il Post”</em> (lenguaje claro) o noticias en italiano fácil."
    ],
    dialog: [
      ["A", "Hai sentito? Domani c'è sciopero dei mezzi.", "¿Escuchaste? Mañana hay huelga del transporte."],
      ["B", "Di nuovo? Come si fa ad andare al lavoro?", "¿Otra vez? ¿Cómo se hace para ir al trabajo?"],
      ["A", "Secondo il giornale, vengono garantiti alcuni treni la mattina.", "Según el periódico, se garantizan algunos trenes en la mañana."],
      ["B", "Meno male. Comunque bisognerebbe migliorare i trasporti.", "Menos mal. De todas formas habría que mejorar el transporte."],
      ["A", "Sono d'accordo. E anche ridurre l'inquinamento.", "Estoy de acuerdo. Y también reducir la contaminación."],
      ["B", "Infatti. In questa città non si respira!", "Exacto. ¡En esta ciudad no se puede respirar!"]
    ],
    quiz: [
      { q: "La casa ___ venduta l'anno scorso.", opts: ["ha stata", "è stata", "è stato"], a: 1 },
      { q: "In questo negozio ___ vestiti usati.", opts: ["si vende", "si vendono", "vende"], a: 1 },
      { q: "“Il biglietto va convalidato” significa…", opts: ["El boleto se validó", "El boleto debe validarse", "El boleto va a validarse"], a: 1 },
      { q: "“Lo sciopero” es…", opts: ["el atasco", "la huelga", "la elección"], a: 1 },
      { q: "Escribe “la contaminación”:", fill: ["l'inquinamento"] },
      { q: "Escucha y escribe:", say: "in Italia si mangia bene", fill: ["in italia si mangia bene"] }
    ]
  },

  {
    id: "b1-email",
    level: "B1",
    title: "Email e discorso indiretto",
    sub: "Escribir formal · ha detto che…",
    intro: "Escribir correos formales (a una universidad, un casero o una empresa) y contar lo que otra persona dijo: el estilo indirecto.",
    vocab: [
      ["Gentile Signora / Egregio Signore", "Estimada señora / Estimado señor", "yen-TÍ-le / e-GRÉ-yo"],
      ["Le scrivo per…", "Le escribo para…", "le SCRÍ-vo per"],
      ["in allegato", "adjunto", "in al-le-GÁ-to"],
      ["la richiesta", "la solicitud", "ri-KIÉS-ta"],
      ["chiedere informazioni", "pedir información", "in-for-ma-TSIÓ-ni"],
      ["Resto in attesa di un Suo riscontro", "Quedo a la espera de su respuesta", "RÉS-to in at-TÉ-sa di un SÚ-o ris-CÓN-tro"],
      ["Distinti saluti / Cordiali saluti", "Atentamente / Saludos cordiales", "dis-TÍN-ti sa-LÚ-ti"],
      ["il modulo", "el formulario", "MÓ-du-lo"],
      ["la scadenza", "el plazo", "sca-DÉN-tsa"],
      ["confermare", "confirmar", "con-fer-MÁ-re"],
      ["riferire", "contar / informar", "ri-fe-RÍ-re"],
      ["il giorno dopo", "el día siguiente", "il YÓR-no DÓ-po"]
    ],
    phrases: [
      ["Gentile Professoressa Rossi,", "Estimada profesora Rossi:", "Saludo formal", "yen-TÍ-le pro-fes-so-RÉS-sa RÓS-si"],
      ["Le scrivo per chiedere informazioni sul corso.", "Le escribo para pedir información sobre el curso.", "", "le SCRÍ-vo per KIÉ-de-re in-for-ma-TSIÓ-ni sul CÓR-so"],
      ["In allegato trova il mio curriculum.", "Adjunto encontrará mi CV.", "", "in al-le-GÁ-to TRÓ-va il MÍ-o cur-RÍ-cu-lum"],
      ["La ringrazio per l'attenzione.", "Le agradezco su atención.", "", "la rin-GRÁ-tsio per lat-ten-TSIÓ-ne"],
      ["Cordiali saluti, Jonathan Page", "Saludos cordiales, Jonathan Page", "Cierre", "cor-DIÁ-li sa-LÚ-ti, YÓ-na-tan PEICH"],
      ["Marco ha detto che è stanco.", "Marco dijo que está cansado.", "", "MÁR-co a DÉT-to ke É STÁN-co"],
      ["Mi ha detto che sarebbe venuto il giorno dopo.", "Me dijo que vendría al día siguiente.", "Futuro → condizionale passato", "mi a DÉT-to ke sa-RÉB-be ve-NÚ-to il YÓR-no DÓ-po"],
      ["Mi ha chiesto se volevo uscire.", "Me preguntó si quería salir.", "", "mi a KIÉS-to se vo-LÉ-vo u-SHÍ-re"]
    ],
    grammar: {
      title: "Discorso indiretto",
      html: `<p>Cuando el verbo introductor está en pasado (<em>ha detto, disse</em>), los tiempos cambian:</p>
      <table><tr><th>Directo</th><th>Indirecto</th></tr>
      <tr><td>presente: “Sono stanco.”</td><td>imperfetto: Ha detto che <u>era</u> stanco.</td></tr>
      <tr><td>pass. prossimo: “Ho finito.”</td><td>trapassato: Ha detto che <u>aveva finito</u>.</td></tr>
      <tr><td>futuro: “Verrò.”</td><td>cond. passato: Ha detto che <u>sarebbe venuto</u>.</td></tr>
      <tr><td>imperativo: “Chiamami!”</td><td>di + inf.: Mi ha detto <u>di chiamarlo</u>.</td></tr></table>
      <p>También cambian: <em>io → lui/lei, qui → lì, oggi → quel giorno, domani → il giorno dopo, ieri → il giorno prima</em>.</p>
      <p>Ojo: en italiano el futuro en el pasado usa el <strong>condicional compuesto</strong> (<em>sarebbe venuto</em>), donde el español usa el simple (“vendría”).</p>`
    },
    tips: [
      "<strong>Formal:</strong> en un correo formal se trata de <strong>Lei</strong> y los posesivos van en mayúscula por cortesía: <em>la Sua risposta, La ringrazio</em>.",
      "<strong>Estructura de un email formal:</strong> saludo (<em>Gentile…,</em>) → motivo (<em>Le scrivo per…</em>) → detalles → petición (<em>Le sarei grato se…</em>) → cierre (<em>Cordiali saluti</em>)."
    ],
    dialog: [
      ["A", "Hai sentito Giulia? Cosa ti ha detto?", "¿Hablaste con Giulia? ¿Qué te dijo?"],
      ["B", "Mi ha detto che aveva trovato un nuovo lavoro.", "Me dijo que había encontrado un trabajo nuevo."],
      ["A", "Davvero? E quando comincia?", "¿En serio? ¿Y cuándo empieza?"],
      ["B", "Ha detto che avrebbe cominciato il mese dopo.", "Dijo que empezaría el mes siguiente."],
      ["A", "Che bello! Le scrivo per farle i complimenti.", "¡Qué bien! Le escribo para felicitarla."],
      ["B", "Sì, mi ha chiesto di salutarti.", "Sí, me pidió que te saludara."]
    ],
    quiz: [
      { q: "“Estoy cansado”, dijo Paolo → Paolo ha detto che ___ stanco.", opts: ["è stato", "era", "sarà"], a: 1 },
      { q: "“Verrò domani” → Ha detto che ___ il giorno dopo.", opts: ["verrebbe", "sarebbe venuto", "verrà"], a: 1 },
      { q: "Cierre correcto de un email formal:", opts: ["Baci", "Ciao ciao", "Cordiali saluti"], a: 2 },
      { q: "“Chiamami!” → Mi ha detto ___ .", opts: ["di chiamarlo", "che chiamami", "chiamarlo"], a: 0 },
      { q: "Escribe “adjunto” (en un email):", fill: ["in allegato"] },
      { q: "Escribe “Le escribo para…”:", fill: ["le scrivo per", "le scrivo per…"] }
    ]
  },

  {
    id: "b1-cultura",
    level: "B1",
    title: "Libri, film e storia",
    sub: "Cultura italiana · reconocer el passato remoto",
    intro: "Para leer libros, entender documentales y hablar de cultura. Conocerás el passato remoto: un pasado que casi no se usa al hablar en el norte, pero que aparece en todos los libros y en la historia.",
    vocab: [
      ["il romanzo", "la novela", "ro-MÁN-dzo"],
      ["lo scrittore / la scrittrice", "el escritor / la escritora", "scrit-TÓ-re"],
      ["il regista", "el director (de cine)", "re-YÍS-ta"],
      ["la trama", "la trama / el argumento", "TRÁ-ma"],
      ["il personaggio", "el personaje", "per-so-NÁD-yo"],
      ["la mostra", "la exposición", "MÓS-tra"],
      ["l'opera", "la ópera / la obra", "Ó-pe-ra"],
      ["il Rinascimento", "el Renacimiento", "ri-na-shi-MÉN-to"],
      ["il secolo", "el siglo", "SÉ-co-lo"],
      ["consigliare", "recomendar", "con-si-LIÁ-re"],
      ["valere la pena", "valer la pena", "va-LÉ-re la PÉ-na"],
      ["ambientato a", "ambientado en", "am-bien-TÁ-to"]
    ],
    phrases: [
      ["Mi ha consigliato un romanzo di Elena Ferrante.", "Me recomendó una novela de Elena Ferrante.", "", "mi a con-si-LIÁ-to un ro-MÁN-dzo di É-le-na fer-RÁN-te"],
      ["Il film è ambientato a Napoli negli anni Cinquanta.", "La película está ambientada en Nápoles en los años cincuenta.", "", "il FILM É am-bien-TÁ-to a NÁ-po-li NÉ-li ÁN-ni chin-CUÁN-ta"],
      ["Vale la pena vederlo.", "Vale la pena verla.", "", "VÁ-le la PÉ-na ve-DÉR-lo"],
      ["Dante scrisse la Divina Commedia.", "Dante escribió la Divina Comedia.", "Passato remoto", "DÁN-te SCRÍS-se la di-VÍ-na com-MÉ-dia"],
      ["Leonardo nacque nel 1452.", "Leonardo nació en 1452.", "", "le-o-NÁR-do NÁC-cue nel mil-le-cuat-tro-chen-to-chin-cuan-ta-DÚ-e"],
      ["Garibaldi fu un eroe dell'Unità d'Italia.", "Garibaldi fue un héroe de la Unificación de Italia.", "", "ga-ri-BÁL-di FU un e-RÓ-e del-lu-ni-TÁ di-TÁ-lia"],
      ["Di cosa parla il libro?", "¿De qué trata el libro?", "", "di CÓ-sa PÁR-la il LÍ-bro"],
      ["Il finale mi ha lasciato senza parole.", "El final me dejó sin palabras.", "", "il fi-NÁ-le mi a la-SHÁ-to SÉN-tsa pa-RÓ-le"]
    ],
    grammar: {
      title: "Passato remoto (para reconocerlo)",
      html: `<p>Es el pasado de las novelas, los cuentos y la historia. En el sur de Italia también se usa al hablar. A tu nivel basta con <strong>reconocerlo</strong>.</p>
      <table><tr><th>Persona</th><th>parlare</th><th>credere</th><th>partire</th></tr>
      <tr><td>io</td><td>parlai</td><td>credei / credetti</td><td>partii</td></tr>
      <tr><td>tu</td><td>parlasti</td><td>credesti</td><td>partisti</td></tr>
      <tr><td>lui/lei</td><td>parlò</td><td>credé / credette</td><td>partì</td></tr>
      <tr><td>noi</td><td>parlammo</td><td>credemmo</td><td>partimmo</td></tr>
      <tr><td>voi</td><td>parlaste</td><td>credeste</td><td>partiste</td></tr>
      <tr><td>loro</td><td>parlarono</td><td>crederono / credettero</td><td>partirono</td></tr></table>
      <p>Irregulares que verás en todas partes: <strong>essere</strong> → fu, furono · <strong>avere</strong> → ebbe, ebbero · <strong>fare</strong> → fece · <strong>dire</strong> → disse · <strong>nascere</strong> → nacque · <strong>vivere</strong> → visse · <strong>scrivere</strong> → scrisse · <strong>vedere</strong> → vide.</p>`
    },
    tips: [
      "<strong>Truco:</strong> el passato remoto se parece mucho al pretérito español: <em>parlò</em> ≈ habló, <em>parlarono</em> ≈ hablaron, <em>fu</em> ≈ fue.",
      "<strong>Cultura:</strong> para empezar a leer: <em>“Il piccolo principe”</em> (traducido), cuentos de Italo Calvino (<em>“Marcovaldo”</em>) o libros en italiano fácil (graded readers) para tu nivel.",
      "<strong>Años:</strong> se leen como un número: <em>1492 = millequattrocentonovantadue</em>. Los siglos 1400, 1500… se llaman <em>il Quattrocento, il Cinquecento</em>."
    ],
    dialog: [
      ["A", "Che libro stai leggendo?", "¿Qué libro estás leyendo?"],
      ["B", "“L'amica geniale”. Me l'ha consigliato la mia insegnante.", "“La amiga estupenda”. Me la recomendó mi profesora."],
      ["A", "Di cosa parla?", "¿De qué trata?"],
      ["B", "Di due amiche che crescono a Napoli dopo la guerra.", "De dos amigas que crecen en Nápoles después de la guerra."],
      ["A", "Ho visto la serie! Vale proprio la pena.", "¡Vi la serie! De verdad vale la pena."],
      ["B", "Allora dopo il libro la guardo anch'io.", "Entonces después del libro la veo yo también."]
    ],
    quiz: [
      { q: "“Fu” es el passato remoto de…", opts: ["fare", "essere", "andare"], a: 1 },
      { q: "“Nacque” significa…", opts: ["nadó", "nació", "nevó"], a: 1 },
      { q: "“Ebbe” es el passato remoto de…", opts: ["avere", "essere", "bere"], a: 0 },
      { q: "“Il regista” es…", opts: ["el registro", "el director de cine", "el guionista"], a: 1 },
      { q: "Escribe “vale la pena”:", fill: ["vale la pena"] },
      { q: "Escribe “la novela”:", fill: ["il romanzo"] }
    ]
  }
];
