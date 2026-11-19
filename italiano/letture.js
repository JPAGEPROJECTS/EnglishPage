// Lecturas con preguntas de comprensión. text y es son listas de párrafos (misma cantidad).
// glossary: [italiano, español] · questions: { q, opts, a }

const LETTURE = [
  // ============ A1 ============
  {
    id: "a1-presento", level: "A1", type: "👤 Perfil", title: "Mi presento: Luca",
    text: [
      "Ciao a tutti! Mi chiamo Luca, ho ventisei anni e sono di Bologna. Adesso abito a Milano con un amico, in un piccolo appartamento in centro.",
      "Sono ingegnere e lavoro in un'azienda di computer. Il mio lavoro è interessante, ma lavoro molto: dalle nove alle sei, dal lunedì al venerdì.",
      "La mia famiglia vive ancora a Bologna. Ho una sorella, si chiama Giulia e ha vent'anni. Studia medicina all'università.",
      "Nel tempo libero mi piace giocare a calcio e cucinare. Il sabato sera esco con gli amici. Parlo italiano, inglese e un po' di spagnolo!"
    ],
    es: [
      "¡Hola a todos! Me llamo Luca, tengo veintiséis años y soy de Bolonia. Ahora vivo en Milán con un amigo, en un apartamento pequeño en el centro.",
      "Soy ingeniero y trabajo en una empresa de computadoras. Mi trabajo es interesante, pero trabajo mucho: de nueve a seis, de lunes a viernes.",
      "Mi familia todavía vive en Bolonia. Tengo una hermana, se llama Giulia y tiene veinte años. Estudia medicina en la universidad.",
      "En el tiempo libre me gusta jugar fútbol y cocinar. Los sábados en la noche salgo con los amigos. ¡Hablo italiano, inglés y un poco de español!"
    ],
    glossary: [["adesso", "ahora"], ["l'azienda", "la empresa"], ["ancora", "todavía"], ["il tempo libero", "el tiempo libre"], ["un po' di", "un poco de"]],
    questions: [
      { q: "¿De dónde es Luca?", opts: ["De Milán", "De Bolonia", "De Roma"], a: 1 },
      { q: "¿Con quién vive?", opts: ["Con su hermana", "Solo", "Con un amigo"], a: 2 },
      { q: "¿Qué hace Giulia?", opts: ["Es ingeniera", "Estudia medicina", "Trabaja en un bar"], a: 1 },
      { q: "¿Qué hace Luca los sábados en la noche?", opts: ["Cocina en casa", "Juega fútbol", "Sale con amigos"], a: 2 }
    ]
  },
  {
    id: "a1-messaggio", level: "A1", type: "💬 Mensaje", title: "Un messaggio di Chiara",
    text: [
      "Ciao Marta! Come stai? Sabato è il mio compleanno e faccio una piccola festa a casa mia. Vieni?",
      "La festa comincia alle otto di sera. Ci sono pizza, dolci e tanta musica! Vengono anche Paolo, Sara e i miei cugini.",
      "Il mio indirizzo è via Roma 15, terzo piano. Se vieni in macchina, c'è un parcheggio davanti al supermercato.",
      "Per favore, rispondi entro giovedì. Non portare regali, solo il tuo sorriso! Un bacio, Chiara"
    ],
    es: [
      "¡Hola Marta! ¿Cómo estás? El sábado es mi cumpleaños y hago una pequeña fiesta en mi casa. ¿Vienes?",
      "La fiesta empieza a las ocho de la noche. ¡Hay pizza, dulces y mucha música! También vienen Paolo, Sara y mis primos.",
      "Mi dirección es calle Roma 15, tercer piso. Si vienes en carro, hay un estacionamiento frente al supermercado.",
      "Por favor, responde antes del jueves. ¡No traigas regalos, solo tu sonrisa! Un beso, Chiara"
    ],
    glossary: [["il compleanno", "el cumpleaños"], ["l'indirizzo", "la dirección"], ["il piano", "el piso (planta)"], ["entro", "antes de / a más tardar"], ["il sorriso", "la sonrisa"]],
    questions: [
      { q: "¿Por qué hace Chiara una fiesta?", opts: ["Por su cumpleaños", "Porque tiene casa nueva", "Por el fin de curso"], a: 0 },
      { q: "¿A qué hora empieza?", opts: ["A las 6", "A las 8", "A las 10"], a: 1 },
      { q: "¿En qué piso vive Chiara?", opts: ["En el primero", "En el segundo", "En el tercero"], a: 2 },
      { q: "¿Qué tiene que hacer Marta antes del jueves?", opts: ["Comprar un regalo", "Responder", "Llevar pizza"], a: 1 }
    ]
  },
  {
    id: "a1-bar", level: "A1", type: "☕ Menú", title: "Il listino del Bar Centrale",
    text: [
      "BAR CENTRALE — Colazione dalle 7:00 alle 11:00. Caffè 1,20 € · Cappuccino 1,60 € · Cornetto 1,30 € · Spremuta d'arancia 3,00 €.",
      "Pranzo dalle 12:00 alle 15:00. Panino al prosciutto 4,50 € · Insalata mista 6,00 € · Pasta del giorno 8,00 €. Acqua naturale o frizzante 1,50 €.",
      "Aperitivo dalle 18:00 alle 21:00. Spritz 6,00 € · Bicchiere di vino 5,00 € · Birra piccola 4,00 €. Con l'aperitivo, stuzzichini gratis!",
      "Il bar è chiuso il lunedì. Se consumi al tavolo, c'è un supplemento di 1,00 €. Si accettano carte."
    ],
    es: [
      "BAR CENTRAL — Desayuno de 7:00 a 11:00. Café 1,20 € · Capuchino 1,60 € · Croissant 1,30 € · Jugo de naranja natural 3,00 €.",
      "Almuerzo de 12:00 a 15:00. Sándwich de jamón 4,50 € · Ensalada mixta 6,00 € · Pasta del día 8,00 €. Agua sin gas o con gas 1,50 €.",
      "Aperitivo de 18:00 a 21:00. Spritz 6,00 € · Copa de vino 5,00 € · Cerveza pequeña 4,00 €. ¡Con el aperitivo, picadera gratis!",
      "El bar cierra los lunes. Si consumes en la mesa, hay un recargo de 1,00 €. Se aceptan tarjetas."
    ],
    glossary: [["il listino", "la lista de precios"], ["la spremuta", "el jugo natural exprimido"], ["il panino", "el sándwich"], ["gli stuzzichini", "la picadera / pasapalos"], ["il supplemento", "el recargo"]],
    questions: [
      { q: "¿Cuánto cuestan un capuchino y un croissant?", opts: ["2,50 €", "2,90 €", "3,10 €"], a: 1 },
      { q: "¿Qué día está cerrado el bar?", opts: ["Domingo", "Lunes", "Sábado"], a: 1 },
      { q: "¿Qué pasa si tomas el café sentado en la mesa?", opts: ["Es gratis", "Pagas 1 € más", "No se puede"], a: 1 },
      { q: "¿Qué te dan gratis con el aperitivo?", opts: ["Agua", "Picadera", "Un café"], a: 1 }
    ]
  },
  {
    id: "a1-giornata", level: "A1", type: "📖 Texto", title: "La giornata di Sara",
    text: [
      "Sara è un'infermiera e lavora in un ospedale di Firenze. La sua giornata comincia molto presto: si sveglia alle cinque e mezza.",
      "Fa colazione con un caffè e uno yogurt, poi prende l'autobus delle sei e un quarto. All'ospedale lavora dalle sette alle tre del pomeriggio.",
      "Dopo il lavoro torna a casa, mangia qualcosa e riposa un'ora. Il martedì e il giovedì va in palestra; gli altri giorni fa una passeggiata con il suo cane, Biscotto.",
      "La sera cena con il suo ragazzo, guarda una serie e va a letto alle dieci. Il fine settimana non lavora e dorme fino a tardi!"
    ],
    es: [
      "Sara es enfermera y trabaja en un hospital de Florencia. Su día empieza muy temprano: se despierta a las cinco y media.",
      "Desayuna un café y un yogur, luego toma el bus de las seis y cuarto. En el hospital trabaja de siete a tres de la tarde.",
      "Después del trabajo vuelve a casa, come algo y descansa una hora. Los martes y jueves va al gym; los otros días da un paseo con su perro, Biscotto.",
      "En la noche cena con su novio, ve una serie y se acuesta a las diez. ¡El fin de semana no trabaja y duerme hasta tarde!"
    ],
    glossary: [["l'infermiera", "la enfermera"], ["presto", "temprano"], ["riposare", "descansar"], ["la passeggiata", "el paseo"], ["fino a tardi", "hasta tarde"]],
    questions: [
      { q: "¿A qué hora se despierta Sara?", opts: ["A las 5:30", "A las 6:15", "A las 7:00"], a: 0 },
      { q: "¿Cómo va al trabajo?", opts: ["En carro", "En bus", "A pie"], a: 1 },
      { q: "¿Qué hace los martes?", opts: ["Pasea al perro", "Va al gym", "Trabaja de noche"], a: 1 },
      { q: "¿Quién es Biscotto?", opts: ["Su novio", "Su gato", "Su perro"], a: 2 }
    ]
  },
  {
    id: "a1-meteo", level: "A1", type: "🌦️ Pronóstico", title: "Il meteo del weekend",
    text: [
      "Buongiorno e benvenuti al meteo! Sabato al nord il cielo è nuvoloso e fa freddo: a Milano e Torino le temperature sono tra i 3 e gli 8 gradi.",
      "Al centro c'è il sole, ma c'è anche molto vento, soprattutto sulla costa. A Roma la temperatura massima è di 15 gradi.",
      "Al sud fa bel tempo: a Napoli e a Palermo ci sono 18 gradi. È una giornata perfetta per una passeggiata al mare!",
      "Domenica arriva la pioggia in tutta Italia, e in montagna nevica. Consiglio: prendete l'ombrello! Buon fine settimana!"
    ],
    es: [
      "¡Buenos días y bienvenidos al pronóstico del tiempo! El sábado en el norte el cielo está nublado y hace frío: en Milán y Turín las temperaturas están entre 3 y 8 grados.",
      "En el centro hace sol, pero también hay mucho viento, sobre todo en la costa. En Roma la temperatura máxima es de 15 grados.",
      "En el sur hace buen tiempo: en Nápoles y Palermo hay 18 grados. ¡Es un día perfecto para un paseo por el mar!",
      "El domingo llega la lluvia a toda Italia, y en la montaña nieva. Consejo: ¡lleven paraguas! ¡Buen fin de semana!"
    ],
    glossary: [["nuvoloso", "nublado"], ["il grado", "el grado"], ["soprattutto", "sobre todo"], ["la pioggia", "la lluvia"], ["l'ombrello", "el paraguas"]],
    questions: [
      { q: "¿Qué tiempo hace el sábado en Milán?", opts: ["Sol y calor", "Nublado y frío", "Lluvia"], a: 1 },
      { q: "¿Dónde hace más calor el sábado?", opts: ["En Roma", "En Turín", "En Palermo"], a: 2 },
      { q: "¿Qué problema hay en la costa del centro?", opts: ["Mucho viento", "Nieve", "Niebla"], a: 0 },
      { q: "¿Qué recomienda para el domingo?", opts: ["Ir al mar", "Llevar paraguas", "Ir a la montaña"], a: 1 }
    ]
  },

  // ============ A2 ============
  {
    id: "a2-sicilia", level: "A2", type: "✈️ Relato", title: "Le mie vacanze in Sicilia",
    text: [
      "L'estate scorsa sono andato in Sicilia con due amici. Siamo partiti da Roma in aereo e siamo arrivati a Palermo dopo un'ora. Faceva caldissimo!",
      "I primi tre giorni siamo stati a Palermo. Abbiamo visitato il centro storico e il mercato di Ballarò, dove abbiamo mangiato gli arancini più buoni della mia vita.",
      "Poi abbiamo noleggiato una macchina e abbiamo fatto il giro dell'isola. A Cefalù il mare era trasparente e siamo rimasti in spiaggia tutto il giorno.",
      "L'ultima sera, mentre cenavamo a Catania, abbiamo visto l'Etna con la lava rossa. È stato il momento più bello del viaggio. L'anno prossimo voglio tornare!"
    ],
    es: [
      "El verano pasado fui a Sicilia con dos amigos. Salimos de Roma en avión y llegamos a Palermo después de una hora. ¡Hacía muchísimo calor!",
      "Los primeros tres días estuvimos en Palermo. Visitamos el centro histórico y el mercado de Ballarò, donde comimos los arancini más ricos de mi vida.",
      "Luego alquilamos un carro y le dimos la vuelta a la isla. En Cefalù el mar era transparente y nos quedamos en la playa todo el día.",
      "La última noche, mientras cenábamos en Catania, vimos el Etna con la lava roja. Fue el momento más bonito del viaje. ¡El año que viene quiero volver!"
    ],
    glossary: [["scorso", "pasado"], ["gli arancini", "bolitas de arroz fritas sicilianas"], ["noleggiare", "alquilar (un vehículo)"], ["fare il giro", "dar la vuelta"], ["rimanere", "quedarse"]],
    questions: [
      { q: "¿Cómo llegaron a Sicilia?", opts: ["En barco", "En avión", "En tren"], a: 1 },
      { q: "¿Qué comieron en el mercado?", opts: ["Pizza", "Arancini", "Pescado"], a: 1 },
      { q: "¿Qué hicieron en Cefalù?", opts: ["Visitaron museos", "Estuvieron en la playa", "Subieron al Etna"], a: 1 },
      { q: "¿Qué fue lo más bonito del viaje?", opts: ["El mercado", "La comida de Palermo", "Ver el Etna con lava"], a: 2 },
      { q: "“Mentre cenavamo” está en…", opts: ["imperfetto", "passato prossimo", "futuro"], a: 0 }
    ]
  },
  {
    id: "a2-annuncio", level: "A2", type: "🏠 Anuncio", title: "Cercasi coinquilino",
    text: [
      "CERCASI COINQUILINO/A — Siamo due ragazze di 25 e 27 anni, una studentessa e una grafica, e cerchiamo una persona per la terza camera del nostro appartamento a Bologna, zona universitaria.",
      "La camera è singola, luminosa e ammobiliata (letto, armadio e scrivania). L'appartamento ha una cucina grande, un bagno e un piccolo balcone.",
      "L'affitto è di 450 euro al mese, spese escluse (circa 60 euro). Chiediamo un mese di caparra. Disponibile dal primo settembre.",
      "Cerchiamo una persona tranquilla, ordinata e non fumatrice. Gli animali sono benvenuti! Se sei interessato/a, scrivici un messaggio e raccontaci qualcosa di te."
    ],
    es: [
      "SE BUSCA COMPAÑERO/A DE PISO — Somos dos chicas de 25 y 27 años, una estudiante y una diseñadora gráfica, y buscamos a una persona para la tercera habitación de nuestro apartamento en Bolonia, zona universitaria.",
      "La habitación es individual, luminosa y amueblada (cama, armario y escritorio). El apartamento tiene una cocina grande, un baño y un pequeño balcón.",
      "El alquiler es de 450 euros al mes, gastos aparte (unos 60 euros). Pedimos un mes de depósito. Disponible desde el primero de septiembre.",
      "Buscamos a una persona tranquila, ordenada y que no fume. ¡Los animales son bienvenidos! Si te interesa, escríbenos un mensaje y cuéntanos algo de ti."
    ],
    glossary: [["cercasi", "se busca"], ["ammobiliata", "amueblada"], ["spese escluse", "gastos no incluidos"], ["la caparra", "el depósito"], ["non fumatore", "no fumador"]],
    questions: [
      { q: "¿Cuántas personas vivirán en el apartamento?", opts: ["Dos", "Tres", "Cuatro"], a: 1 },
      { q: "¿Cuánto se paga en total al mes, aproximadamente?", opts: ["450 €", "510 €", "390 €"], a: 1 },
      { q: "¿Desde cuándo está disponible la habitación?", opts: ["Desde agosto", "Desde el 1 de septiembre", "Ya"], a: 1 },
      { q: "¿Qué NO quieren en el piso?", opts: ["Animales", "Fumadores", "Estudiantes"], a: 1 },
      { q: "¿Qué tiene la habitación?", opts: ["Balcón propio", "Baño propio", "Cama, armario y escritorio"], a: 2 }
    ]
  },
  {
    id: "a2-email", level: "A2", type: "📧 Email", title: "Una email alla scuola di lingue",
    text: [
      "Gentile segreteria, mi chiamo Jonathan e sono uno studente panamense. Studio italiano da sei mesi e vorrei frequentare un corso nella vostra scuola a Firenze il prossimo marzo.",
      "Avrei alcune domande: quante ore di lezione ci sono a settimana? Le classi sono piccole? Vorrei anche sapere se organizzate attività culturali, come visite ai musei o corsi di cucina.",
      "Inoltre, potreste aiutarmi a trovare un alloggio? Preferirei vivere con una famiglia italiana, così posso parlare italiano anche a casa.",
      "Vi ringrazio in anticipo per la risposta. Cordiali saluti, Jonathan Page"
    ],
    es: [
      "Estimada secretaría: me llamo Jonathan y soy un estudiante panameño. Estudio italiano desde hace seis meses y quisiera tomar un curso en su escuela de Florencia el próximo marzo.",
      "Tendría algunas preguntas: ¿cuántas horas de clase hay por semana? ¿Las clases son pequeñas? También quisiera saber si organizan actividades culturales, como visitas a museos o cursos de cocina.",
      "Además, ¿podrían ayudarme a encontrar alojamiento? Preferiría vivir con una familia italiana, así puedo hablar italiano también en casa.",
      "Les agradezco de antemano su respuesta. Saludos cordiales, Jonathan Page"
    ],
    glossary: [["la segreteria", "la secretaría / recepción"], ["frequentare un corso", "asistir a un curso"], ["inoltre", "además"], ["l'alloggio", "el alojamiento"], ["in anticipo", "de antemano"]],
    questions: [
      { q: "¿Desde cuándo estudia italiano Jonathan?", opts: ["Hace un año", "Hace seis meses", "Desde marzo"], a: 1 },
      { q: "¿Dónde está la escuela?", opts: ["En Roma", "En Florencia", "En Milán"], a: 1 },
      { q: "¿Dónde le gustaría vivir?", opts: ["En una residencia", "Con una familia italiana", "En un hotel"], a: 1 },
      { q: "¿Por qué usa “vorrei, avrei, potreste”?", opts: ["Porque habla del pasado", "Para ser educado (condicional)", "Porque es un futuro"], a: 1 }
    ]
  },
  {
    id: "a2-ricordi", level: "A2", type: "🧸 Recuerdos", title: "Quando ero piccola",
    text: [
      "Quando ero piccola vivevo in un paesino in Calabria con i miei genitori e i miei nonni. La nostra casa era vecchia ma grande, con un giardino pieno di alberi di limone.",
      "Ogni mattina andavo a scuola a piedi con mio fratello. Dopo la scuola giocavamo in piazza con gli altri bambini fino all'ora di cena. Non avevamo il telefono, ma ci divertivamo tantissimo!",
      "La domenica tutta la famiglia pranzava insieme. Mia nonna cucinava per ore e la tavola era sempre piena: pasta fatta in casa, verdure dell'orto e dolci buonissimi.",
      "Quando avevo quattordici anni, ci siamo trasferiti a Torino per il lavoro di mio padre. All'inizio è stato difficile, ma oggi amo la città. Però ogni estate torno al paese: è ancora casa mia."
    ],
    es: [
      "Cuando era pequeña vivía en un pueblito de Calabria con mis padres y mis abuelos. Nuestra casa era vieja pero grande, con un jardín lleno de limoneros.",
      "Cada mañana iba a la escuela a pie con mi hermano. Después de la escuela jugábamos en la plaza con los otros niños hasta la hora de cenar. No teníamos teléfono, ¡pero nos divertíamos muchísimo!",
      "Los domingos toda la familia almorzaba junta. Mi abuela cocinaba durante horas y la mesa siempre estaba llena: pasta casera, verduras del huerto y dulces buenísimos.",
      "Cuando tenía catorce años, nos mudamos a Turín por el trabajo de mi padre. Al principio fue difícil, pero hoy amo la ciudad. Aun así, cada verano vuelvo al pueblo: sigue siendo mi casa."
    ],
    glossary: [["il paesino", "el pueblito"], ["l'orto", "el huerto"], ["fatta in casa", "hecha en casa"], ["trasferirsi", "mudarse"], ["all'inizio", "al principio"]],
    questions: [
      { q: "¿Dónde vivía de pequeña?", opts: ["En Turín", "En un pueblo de Calabria", "En Roma"], a: 1 },
      { q: "¿Qué hacía después de la escuela?", opts: ["Jugaba en la plaza", "Usaba el teléfono", "Ayudaba en el huerto"], a: 0 },
      { q: "¿Quién cocinaba los domingos?", opts: ["Su madre", "Su abuela", "Su padre"], a: 1 },
      { q: "¿Por qué se mudaron a Turín?", opts: ["Por los estudios", "Por el trabajo de su padre", "Por la abuela"], a: 1 },
      { q: "“Ci siamo trasferiti” está en passato prossimo porque…", opts: ["es una acción concreta y terminada", "es una costumbre", "es una descripción"], a: 0 }
    ]
  },
  {
    id: "a2-colloquio", level: "A2", type: "📰 Revista", title: "5 consigli per il colloquio di lavoro",
    text: [
      "Hai un colloquio di lavoro e sei nervoso? Ecco cinque consigli per fare una buona impressione.",
      "1. Informati sull'azienda: leggi il sito e cerca notizie recenti. 2. Arriva dieci minuti prima: arrivare in ritardo è il peggior inizio possibile.",
      "3. Vestiti in modo adeguato: non serve un abito elegante, ma devi essere ordinato. 4. Prepara due o tre domande da fare alla fine: dimostri interesse.",
      "5. Non parlare male del tuo vecchio lavoro o del tuo capo. E soprattutto, sorridi: anche se sei agitato, un sorriso ti aiuterà a sentirti più sicuro!"
    ],
    es: [
      "¿Tienes una entrevista de trabajo y estás nervioso? Aquí tienes cinco consejos para dar una buena impresión.",
      "1. Infórmate sobre la empresa: lee la página web y busca noticias recientes. 2. Llega diez minutos antes: llegar tarde es el peor comienzo posible.",
      "3. Vístete de forma adecuada: no hace falta un traje elegante, pero debes estar arreglado. 4. Prepara dos o tres preguntas para hacer al final: demuestras interés.",
      "5. No hables mal de tu antiguo trabajo ni de tu jefe. Y sobre todo, sonríe: aunque estés nervioso, una sonrisa te ayudará a sentirte más seguro."
    ],
    glossary: [["il consiglio", "el consejo"], ["informarsi", "informarse"], ["non serve", "no hace falta"], ["agitato", "nervioso / inquieto"], ["sicuro", "seguro"]],
    questions: [
      { q: "¿Cuánto antes hay que llegar?", opts: ["5 minutos", "10 minutos", "30 minutos"], a: 1 },
      { q: "¿Hace falta un traje elegante?", opts: ["Sí, siempre", "No, pero hay que ir arreglado", "Solo en bancos"], a: 1 },
      { q: "¿Para qué preparar preguntas?", opts: ["Para demostrar interés", "Para hablar del salario", "Para ganar tiempo"], a: 0 },
      { q: "¿Qué NO hay que hacer?", opts: ["Sonreír", "Hablar mal del jefe anterior", "Leer la web de la empresa"], a: 1 },
      { q: "“Informati, arriva, vestiti, sorridi” están en…", opts: ["imperativo (tu)", "presente", "futuro"], a: 0 }
    ]
  }
];
