// Contenido de las clases de italiano (nivel A1, para adulto hispanohablante).
// Para agregar una clase nueva, copia un objeto y cambia el contenido.
// vocab:   [italiano, español, pronunciación]
// phrases: [italiano, español, nota opcional]
// dialog:  ["A" | "B", italiano, español]
// quiz:    { q, opts, a }  (opción múltiple, a = índice correcto)
//          { q, fill: [respuestas válidas] }  (escribir)

const LEZIONI = [
  {
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
    title: "Numeri e orari",
    sub: "0–100 · ¿qué hora es? · el teléfono",
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
  }
];
