// Clases del curso English B1→C1 (mismo formato que el curso de italiano).
// vocab: [inglés, español, pronunciación] · phrases: [inglés, español, nota]
// quiz: { q, opts, a } o { q, fill: [respuestas válidas] }

const LEZIONI = [
  // ===================== B1 · CONSOLIDAR =====================
  {
    id: "b1-present-perfect", level: "B1",
    title: "Present perfect vs past simple",
    sub: "I've lived / I lived · for, since, ever, already, yet",
    intro: "El error número uno de los hispanohablantes en B1. Aquí aprendes de una vez cuándo usar “I have done” y cuándo “I did”, y las palabras que te dicen cuál toca.",
    vocab: [
      ["ever", "alguna vez (en preguntas)", "É-ver"], ["never", "nunca", "NÉ-ver"], ["already", "ya (antes de lo esperado)", "ol-RÉ-di"], ["yet", "todavía / ya (negativas y preguntas)", "YET"],
      ["just", "acabar de", "YAST"], ["since", "desde (un momento)", "SINS"], ["for", "durante / desde hace (un periodo)", "FOR"], ["so far", "hasta ahora", "sou FAR"],
      ["recently / lately", "recientemente / últimamente", "RÍ-sent-li / LÉIT-li"], ["ago", "hace (pasado terminado)", "a-GÓU"], ["in my life", "en mi vida", "in mai LAIF"], ["once / twice", "una vez / dos veces", "UANS / TUAIS"]
    ],
    phrases: [
      ["Have you ever been to London?", "¿Has estado alguna vez en Londres?", "Experiencia sin fecha → present perfect"],
      ["I went to London in 2019.", "Fui a Londres en 2019.", "Fecha concreta → past simple"],
      ["I've lived in Panama for 24 years.", "Vivo en Panamá desde hace 24 años.", "¡En español usamos presente!"],
      ["I've known her since 2015.", "La conozco desde 2015.", "since + momento"],
      ["I've just finished work.", "Acabo de terminar el trabajo.", "just = acabar de"],
      ["Have you finished yet? — Not yet.", "¿Ya terminaste? — Todavía no.", "yet al final"],
      ["I've already seen that movie.", "Ya vi esa película.", ""],
      ["She has gone to the gym. / She has been to the gym.", "Se fue al gym (sigue allá). / Fue al gym (ya volvió).", "gone vs been"]
    ],
    grammar: {
      title: "¿Present perfect o past simple?",
      html: `<table><tr><th>Present perfect (have + participio)</th><th>Past simple</th></tr>
      <tr><td>Experiencias sin fecha: <em>I've visited Rome.</em></td><td>Con fecha o momento terminado: <em>I visited Rome <b>last year</b>.</em></td></tr>
      <tr><td>Algo que empezó y <b>sigue</b>: <em>I've worked here for 3 years</em> (sigo).</td><td>Algo totalmente terminado: <em>I worked there for 3 years</em> (ya no).</td></tr>
      <tr><td>Resultado ahora: <em>I've lost my keys</em> (no las tengo).</td><td>Historia / secuencia: <em>I lost my keys, then I found them.</em></td></tr>
      <tr><td>Palabras: <b>ever, never, already, yet, just, since, for, so far, recently, this week</b></td><td>Palabras: <b>yesterday, ago, last…, in 2019, when I was…</b></td></tr></table>
      <p><strong>La regla de oro:</strong> si dices <u>cuándo</u> pasó, usa past simple. <em>I have seen him yesterday</em> ✗ → <em>I saw him yesterday</em> ✓.</p>
      <p><strong>for vs since:</strong> <em>for</em> + duración (for two years, for ages); <em>since</em> + punto de inicio (since 2020, since Monday, since I was a child).</p>
      <p><strong>Desde hace…:</strong> el español usa presente (“vivo aquí desde hace 5 años”), el inglés present perfect: <em>I've lived here for 5 years</em>. Nunca “I live here since 5 years”.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> en inglés británico el present perfect se usa más; en americano es común “Did you eat yet?”. Para exámenes, usa la regla británica.",
      "<strong>Truco:</strong> pregúntate “¿importa cuándo?”. Si importa o lo dices, past simple. Si importa el resultado o la experiencia, present perfect."
    ],
    dialog: [
      ["A", "Have you ever worked abroad?", "¿Alguna vez has trabajado en el extranjero?"],
      ["B", "Yes, I worked in Miami for six months in 2022.", "Sí, trabajé en Miami seis meses en 2022."],
      ["A", "Nice! And how long have you been in your current job?", "¡Genial! ¿Y cuánto tiempo llevas en tu trabajo actual?"],
      ["B", "I've been there since January, so almost a year.", "Estoy ahí desde enero, así que casi un año."],
      ["A", "Have you had a promotion yet?", "¿Ya te han ascendido?"],
      ["B", "Not yet, but I've just applied for a new position.", "Todavía no, pero acabo de postularme a un puesto nuevo."]
    ],
    quiz: [
      { q: "I ___ him yesterday.", opts: ["have seen", "saw", "have saw"], a: 1 },
      { q: "She ___ here since 2020.", opts: ["works", "has worked", "worked"], a: 1 },
      { q: "“Vivo aquí desde hace 5 años” =", opts: ["I live here since 5 years", "I've lived here for 5 years", "I lived here for 5 years"], a: 1 },
      { q: "Have you finished ___?", opts: ["already", "yet", "just"], a: 1 },
      { q: "Mi jefa está de viaje (no ha vuelto): She has ___ to Spain.", opts: ["been", "gone", "went"], a: 1 },
      { q: "Escribe: “Acabo de llegar” (arrive).", fill: ["i've just arrived", "i have just arrived"] },
      { q: "Completa: I've known him ___ ten years.", fill: ["for"] }
    ]
  },

  {
    id: "b1-narrative", level: "B1",
    title: "Telling stories: narrative tenses",
    sub: "was doing · had done · used to · would",
    intro: "Para contar historias como un nativo combinas cuatro pasados: el simple (acciones), el continuo (fondo), el perfecto (antes de antes) y used to / would (costumbres).",
    vocab: [
      ["suddenly", "de repente", "SÁ-den-li"], ["meanwhile", "mientras tanto", "MÍIN-uail"], ["eventually", "finalmente (tras un tiempo)", "i-VÉN-chua-li"], ["at first", "al principio", "at FERST"],
      ["afterwards", "después", "ÁF-ter-uords"], ["by the time", "para cuando", "bai di TAIM"], ["as soon as", "en cuanto", "as SUUN as"], ["while", "mientras", "UAIL"],
      ["used to", "solía", "IÚS-tu"], ["realise", "darse cuenta", "RÍ-a-lais"], ["turn out", "resultar", "tern ÁUT"], ["it turned out that…", "resultó que…", "it ternd ÁUT dat"]
    ],
    phrases: [
      ["I was cooking when the lights went out.", "Estaba cocinando cuando se fue la luz.", "Fondo (continuo) + acción (simple)"],
      ["While I was driving, it started to rain.", "Mientras manejaba, empezó a llover.", ""],
      ["When I arrived, the film had already started.", "Cuando llegué, la película ya había empezado.", "Past perfect: antes de otro pasado"],
      ["I had never seen snow before that trip.", "Nunca había visto nieve antes de ese viaje.", ""],
      ["I used to play football every day.", "Solía jugar fútbol todos los días.", "Costumbre pasada"],
      ["My grandma would tell us stories at night.", "Mi abuela nos contaba cuentos en la noche.", "would = costumbre (acciones)"],
      ["It turned out that he was her brother.", "Resultó que era su hermano.", ""],
      ["Eventually, we found the hotel.", "Al final encontramos el hotel.", "¡No es “eventualmente”!"]
    ],
    grammar: {
      title: "Los cuatro pasados para narrar",
      html: `<table><tr><th>Tiempo</th><th>Uso</th><th>Ejemplo</th></tr>
      <tr><td><b>Past simple</b></td><td>acciones principales, en orden</td><td>I got up, had a shower and left.</td></tr>
      <tr><td><b>Past continuous</b></td><td>el fondo / acción interrumpida</td><td>It was raining and people were running.</td></tr>
      <tr><td><b>Past perfect</b></td><td>algo anterior a otro pasado</td><td>I realised I had left my phone at home.</td></tr>
      <tr><td><b>Past perfect continuous</b></td><td>duración antes de otro pasado</td><td>She was tired because she had been working all day.</td></tr></table>
      <p><strong>used to</strong> = costumbres y estados del pasado que ya no son: <em>I used to live in Colón. I used to be shy.</em> Negativo: <em>didn't <u>use</u> to</em>.</p>
      <p><strong>would</strong> = solo costumbres-acción (no estados): <em>Every summer we would go to the beach</em> ✓; <em>I would be shy</em> ✗.</p>`
    },
    tips: [
      "<strong>Falso amigo:</strong> <em>eventually</em> = al final, finalmente. “Eventualmente” en el sentido de “quizás” es <em>possibly</em>.",
      "<strong>Ojo:</strong> <em>used to</em> (solía) ≠ <em>be used to</em> (estar acostumbrado). Lo verás en B2."
    ],
    dialog: [
      ["A", "What happened to your phone?", "¿Qué le pasó a tu teléfono?"],
      ["B", "I was running for the bus when it fell out of my pocket.", "Iba corriendo al bus cuando se me cayó del bolsillo."],
      ["A", "Oh no! Did you get the bus at least?", "¡Ay no! ¿Por lo menos alcanzaste el bus?"],
      ["B", "No, by the time I picked it up, the bus had already left.", "No, para cuando lo recogí, el bus ya se había ido."],
      ["A", "That's bad luck. Was it working?", "Qué mala suerte. ¿Funcionaba?"],
      ["B", "At first I thought it was broken, but it turned out to be fine.", "Al principio pensé que estaba roto, pero resultó que estaba bien."]
    ],
    quiz: [
      { q: "I ___ TV when you called.", opts: ["watched", "was watching", "had watched"], a: 1 },
      { q: "When we got to the station, the train ___ .", opts: ["already left", "had already left", "was already leaving"], a: 1 },
      { q: "I ___ have long hair when I was a teenager.", opts: ["used to", "would", "was used to"], a: 0 },
      { q: "“Eventually” significa…", opts: ["eventualmente", "al final", "a veces"], a: 1 },
      { q: "Escribe el negativo: I ___ like vegetables (no solía).", fill: ["didn't use to", "did not use to"] },
      { q: "Escribe “resultó que” (turn out):", fill: ["it turned out that", "it turned out"] }
    ]
  },

  {
    id: "b1-future", level: "B1",
    title: "The future: will, going to & more",
    sub: "Planes, predicciones, decisiones y horarios",
    intro: "En español casi todo se dice con “voy a…”. En inglés hay cinco maneras de hablar del futuro y cada una da un matiz distinto. Domínalas y sonarás mucho más natural.",
    vocab: [
      ["plan", "planear / plan", "PLAN"], ["intend to", "tener la intención de", "in-TÉND tu"], ["be about to", "estar a punto de", "bi a-BÁUT tu"], ["be likely to", "ser probable que", "bi LÁIK-li tu"],
      ["definitely", "definitivamente / seguro", "DÉ-fi-nit-li"], ["probably", "probablemente", "PRÓ-ba-bli"], ["schedule", "horario / agenda", "SKÉ-yul"], ["deadline", "fecha límite", "DÉD-lain"],
      ["by next week", "para la próxima semana", "bai next UIIK"], ["in the long run", "a largo plazo", "in di long RAN"], ["sooner or later", "tarde o temprano", "SÚ-ner or LÉI-ter"], ["look forward to", "esperar con ganas", "luk FÓR-uard tu"]
    ],
    phrases: [
      ["I'm going to study for the IELTS next year.", "Voy a estudiar para el IELTS el próximo año.", "Plan ya decidido"],
      ["I'm meeting my boss at 10 tomorrow.", "Me reúno con mi jefe mañana a las 10.", "Cita fija → present continuous"],
      ["The train leaves at 7:45.", "El tren sale a las 7:45.", "Horario → present simple"],
      ["It's cold. I'll close the window.", "Hace frío. Cerraré la ventana.", "Decisión del momento → will"],
      ["Look at those clouds! It's going to rain.", "¡Mira esas nubes! Va a llover.", "Predicción con evidencia → going to"],
      ["This time next week I'll be lying on a beach.", "La semana que viene a esta hora estaré tirado en una playa.", "Future continuous"],
      ["I'll have finished the report by Friday.", "Habré terminado el informe para el viernes.", "Future perfect"],
      ["I'm looking forward to seeing you.", "Tengo muchas ganas de verte.", "look forward to + -ing"]
    ],
    grammar: {
      title: "Cinco formas de hablar del futuro",
      html: `<table><tr><th>Forma</th><th>Uso</th><th>Ejemplo</th></tr>
      <tr><td><b>will</b></td><td>decisión espontánea, promesa, opinión/predicción</td><td>I'll help you. I think she'll win.</td></tr>
      <tr><td><b>going to</b></td><td>intención decidida; predicción con evidencia</td><td>I'm going to quit. It's going to fall!</td></tr>
      <tr><td><b>present continuous</b></td><td>planes con hora/lugar (en la agenda)</td><td>We're flying to Bogotá on Friday.</td></tr>
      <tr><td><b>present simple</b></td><td>horarios oficiales</td><td>The class starts at 6.</td></tr>
      <tr><td><b>will be + -ing</b></td><td>acción en curso en un momento futuro</td><td>At 8 I'll be having dinner.</td></tr>
      <tr><td><b>will have + participio</b></td><td>algo terminado antes de un momento futuro</td><td>By 2027 I'll have reached C1.</td></tr></table>
      <p><strong>Después de when, as soon as, before, until, if</strong> se usa presente, no will: <em>I'll call you when I <u>arrive</u></em> (no “when I will arrive”).</p>`
    },
    tips: [
      "<strong>Ojo:</strong> <em>look forward to</em> lleva -ing porque <em>to</em> aquí es preposición: “I look forward to <u>hearing</u> from you” (cierre típico de emails).",
      "<strong>Truco:</strong> si ya está en tu calendario, usa present continuous: suena mucho más natural que “I will meet”."
    ],
    dialog: [
      ["A", "What are you doing this weekend?", "¿Qué haces este fin de semana?"],
      ["B", "I'm visiting my cousins in David. The bus leaves at 6 a.m.!", "Visito a mis primos en David. ¡El bus sale a las 6 a. m.!"],
      ["A", "That's early. Are you going to stay long?", "Qué temprano. ¿Te vas a quedar mucho?"],
      ["B", "Just two days. I'll be back by Monday night.", "Solo dos días. Estaré de vuelta el lunes en la noche."],
      ["A", "Text me when you get there.", "Escríbeme cuando llegues."],
      ["B", "I will. I'm really looking forward to the trip.", "Lo haré. Tengo muchas ganas del viaje."]
    ],
    quiz: [
      { q: "The phone is ringing. — I ___ get it!", opts: ["'m going to", "'ll", "'m getting"], a: 1 },
      { q: "We ___ my parents on Sunday (ya está quedado).", opts: ["visit", "are visiting", "will visit"], a: 1 },
      { q: "I'll call you when I ___ home.", opts: ["will get", "get", "am going to get"], a: 1 },
      { q: "By June I ___ my degree.", opts: ["will finish", "will have finished", "am finishing"], a: 1 },
      { q: "I look forward to ___ from you.", opts: ["hear", "hearing", "heard"], a: 1 },
      { q: "Escribe “estar a punto de salir” (be about to leave, I):", fill: ["i'm about to leave", "i am about to leave"] }
    ]
  },

  {
    id: "b1-modals", level: "B1",
    title: "Modals: obligation, advice & possibility",
    sub: "must, have to, should, might, could, can't",
    intro: "Los modales cambian el tono de todo lo que dices: obligación, consejo, permiso, probabilidad. Aquí está la diferencia entre must y have to, y por qué “mustn't” no es “no tener que”.",
    vocab: [
      ["must", "deber (obligación personal / deducción)", "MAST"], ["have to", "tener que (obligación externa)", "JAV tu"], ["mustn't", "no deber (prohibido)", "MÁ-sent"], ["don't have to", "no tener que (no es necesario)", "dount JAV tu"],
      ["should", "debería (consejo)", "SHUD"], ["ought to", "debería (más formal)", "OT tu"], ["might / may", "podría (posibilidad)", "MAIT / MEI"], ["could", "podría / pudo", "CUD"],
      ["be allowed to", "tener permiso para", "bi a-LÁUD tu"], ["need to", "necesitar", "NIID tu"], ["had better", "más vale que", "jad BÉ-ter"], ["be supposed to", "se supone que", "bi su-PÓUSD tu"]
    ],
    phrases: [
      ["You mustn't smoke here.", "No puedes fumar aquí (está prohibido).", "mustn't = prohibido"],
      ["You don't have to come if you're tired.", "No tienes que venir si estás cansado.", "don't have to = no es necesario"],
      ["I have to wear a uniform at work.", "Tengo que usar uniforme en el trabajo.", "Regla externa"],
      ["You should talk to her.", "Deberías hablar con ella.", "Consejo"],
      ["You'd better hurry or you'll miss the bus.", "Más vale que te apures o perderás el bus.", "Advertencia"],
      ["It might rain later.", "Puede que llueva más tarde.", "Posibilidad"],
      ["He must be tired. He worked all night.", "Debe de estar cansado. Trabajó toda la noche.", "Deducción segura"],
      ["We're supposed to be there at 8.", "Se supone que debemos estar allí a las 8.", ""]
    ],
    grammar: {
      title: "Modales en presente",
      html: `<table><tr><th>Idea</th><th>Modal</th><th>Ejemplo</th></tr>
      <tr><td>Obligación (la siento yo)</td><td><b>must</b></td><td>I must call my mom.</td></tr>
      <tr><td>Obligación (regla externa)</td><td><b>have to</b></td><td>I have to work on Saturdays.</td></tr>
      <tr><td>Prohibición</td><td><b>mustn't / can't</b></td><td>You mustn't park here.</td></tr>
      <tr><td>Falta de necesidad</td><td><b>don't have to / needn't</b></td><td>You don't have to pay, it's free.</td></tr>
      <tr><td>Consejo</td><td><b>should / ought to / had better</b></td><td>You should rest.</td></tr>
      <tr><td>Posibilidad</td><td><b>might / may / could</b></td><td>She might be late.</td></tr>
      <tr><td>Deducción segura (sí)</td><td><b>must</b></td><td>That must be John.</td></tr>
      <tr><td>Deducción segura (no)</td><td><b>can't</b></td><td>That can't be true!</td></tr></table>
      <p><strong>Pasado:</strong> must no tiene pasado → <em>had to</em>: “I had to work yesterday”.</p>
      <p>Los modales nunca llevan -s ni “to”: <em>She <u>can</u> swim</em>, <em>He <u>should</u> go</em> (no “shoulds”, no “should to”). Excepción: <em>have to, ought to, need to</em>.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> la gran trampa: <em>mustn't</em> = está prohibido; <em>don't have to</em> = no es obligatorio. “You mustn't come” y “You don't have to come” significan cosas muy distintas.",
      "<strong>Para sonar educado:</strong> <em>Could you…?</em> es más cortés que <em>Can you…?</em>, y <em>Would you mind + -ing?</em> todavía más."
    ],
    dialog: [
      ["A", "Do I have to bring anything to the party?", "¿Tengo que llevar algo a la fiesta?"],
      ["B", "No, you don't have to bring anything. But you could bring some music.", "No, no tienes que llevar nada. Pero podrías llevar algo de música."],
      ["A", "Sure. Is it OK if I bring a friend?", "Claro. ¿Está bien si llevo a un amigo?"],
      ["B", "Of course. Oh, and you mustn't tell Ana, it's a surprise!", "Claro. Ah, ¡y no le puedes decir a Ana, es sorpresa!"],
      ["A", "Got it. Where is it? It must be at your place.", "Entendido. ¿Dónde es? Debe de ser en tu casa."],
      ["B", "Actually, it might be at my sister's. I'll let you know.", "En realidad, puede que sea en casa de mi hermana. Te aviso."]
    ],
    quiz: [
      { q: "It's free. You ___ pay.", opts: ["mustn't", "don't have to", "can't"], a: 1 },
      { q: "You ___ use your phone during the exam. It's forbidden.", opts: ["mustn't", "don't have to", "shouldn't to"], a: 0 },
      { q: "Pasado de “I must work”:", opts: ["I musted work", "I had to work", "I must worked"], a: 1 },
      { q: "She's not answering. She ___ be asleep.", opts: ["must", "has to", "should to"], a: 0 },
      { q: "That ___ be Mark, he's in Spain!", opts: ["mustn't", "can't", "doesn't have to"], a: 1 },
      { q: "Escribe un consejo: “Deberías descansar” (rest):", fill: ["you should rest", "you ought to rest"] }
    ]
  },

  {
    id: "b1-conditionals", level: "B1",
    title: "Conditionals 0, 1 & 2",
    sub: "If it rains… · If I had… · unless, as long as",
    intro: "Los condicionales son la base para hablar de planes, consecuencias e hipótesis. Aquí repasas los tres básicos y aprendes alternativas a “if” que suben tu nivel.",
    vocab: [
      ["unless", "a menos que", "an-LÉS"], ["as long as", "siempre que / mientras", "as LONG as"], ["provided that", "con tal de que", "pro-VÁI-ded dat"], ["in case", "por si acaso", "in KEIS"],
      ["otherwise", "si no / de lo contrario", "Á-der-uais"], ["what if…?", "¿y si…?", "uat IF"], ["even if", "aunque / incluso si", "Í-ven if"], ["suppose", "supongamos", "su-PÓUS"],
      ["afford", "permitirse (económicamente)", "a-FÓRD"], ["take a risk", "arriesgarse", "teik a RISK"], ["consequence", "consecuencia", "CÓN-se-cuens"], ["outcome", "resultado", "ÁUT-kam"]
    ],
    phrases: [
      ["If you heat ice, it melts.", "Si calientas hielo, se derrite.", "Zero: verdades generales"],
      ["If it rains tomorrow, we'll stay home.", "Si llueve mañana, nos quedamos en casa.", "First: posible y real"],
      ["If I had more money, I'd travel more.", "Si tuviera más dinero, viajaría más.", "Second: hipotético"],
      ["If I were you, I'd accept the offer.", "Yo que tú, aceptaría la oferta.", "were para todas las personas"],
      ["You won't pass unless you study.", "No aprobarás a menos que estudies.", "unless = if not"],
      ["You can borrow my car as long as you're careful.", "Puedes usar mi carro siempre que tengas cuidado.", ""],
      ["Take an umbrella in case it rains.", "Lleva paraguas por si llueve.", "in case ≠ if"],
      ["Hurry up, otherwise we'll be late.", "Apúrate, si no llegaremos tarde.", ""]
    ],
    grammar: {
      title: "Condicionales 0, 1 y 2",
      html: `<table><tr><th>Tipo</th><th>Estructura</th><th>Uso</th><th>Ejemplo</th></tr>
      <tr><td><b>0</b></td><td>if + presente, presente</td><td>verdades, reglas</td><td>If you don't water plants, they die.</td></tr>
      <tr><td><b>1</b></td><td>if + presente, will</td><td>situación real y probable</td><td>If I finish early, I'll call you.</td></tr>
      <tr><td><b>2</b></td><td>if + pasado, would</td><td>hipotético / improbable / imaginario</td><td>If I lived in London, I'd go to museums.</td></tr></table>
      <p><strong>Nunca will/would después de if:</strong> <em>If I <u>will have</u> time</em> ✗ → <em>If I <u>have</u> time</em> ✓. <em>If I <u>would know</u></em> ✗ → <em>If I <u>knew</u></em> ✓.</p>
      <p><strong>Alternativas:</strong> <em>unless</em> (a menos que), <em>as long as / provided that</em> (siempre que), <em>in case</em> (por si acaso: precaución, no condición).</p>
      <p>El orden se puede invertir; si <em>if</em> va primero, pon coma: <em>If it rains, we'll stay. / We'll stay if it rains.</em></p>`
    },
    tips: [
      "<strong>Ojo:</strong> <em>in case</em> no es <em>if</em>. “Take an umbrella <u>in case</u> it rains” = llévalo ahora por precaución. “Take an umbrella <u>if</u> it rains” = llévalo solo si llueve.",
      "<strong>Formal vs informal:</strong> “If I were you” es lo correcto en exámenes; “If I was you” se oye mucho en la calle."
    ],
    dialog: [
      ["A", "Are you going to take the job in Panama City?", "¿Vas a aceptar el trabajo en la Ciudad de Panamá?"],
      ["B", "I'm not sure. If I take it, I'll have to move.", "No estoy seguro. Si lo acepto, tendré que mudarme."],
      ["A", "If I were you, I'd go for it. It's a great opportunity.", "Yo que tú, me lanzaría. Es una gran oportunidad."],
      ["B", "Maybe. I'd accept it if the salary were a bit higher.", "Quizás. Lo aceptaría si el salario fuera un poco más alto."],
      ["A", "You won't know unless you ask them.", "No lo sabrás a menos que les preguntes."],
      ["B", "True. I'll call them tomorrow, as long as I don't lose my nerve!", "Cierto. Los llamo mañana, ¡siempre que no me eche para atrás!"]
    ],
    quiz: [
      { q: "If it ___ tomorrow, we'll cancel the trip.", opts: ["will rain", "rains", "rained"], a: 1 },
      { q: "If I ___ rich, I'd buy a house in Boquete.", opts: ["am", "was/were", "would be"], a: 1 },
      { q: "You won't get the job ___ you prepare.", opts: ["if", "unless", "in case"], a: 1 },
      { q: "Take some cash ___ they don't accept cards.", opts: ["if", "in case", "unless"], a: 1 },
      { q: "If I ___ you, I'd apologise.", opts: ["am", "were", "would be"], a: 1 },
      { q: "Escribe: “Si tuviera tiempo, te ayudaría” (have, help).", fill: ["if i had time, i would help you", "if i had time, i'd help you", "if i had time i would help you", "if i had time i'd help you"] }
    ]
  },

  {
    id: "b1-gerunds", level: "B1",
    title: "Gerunds & infinitives",
    sub: "enjoy doing · decide to do · stop doing / stop to do",
    intro: "¿“I enjoy to read” o “I enjoy reading”? Cada verbo pide una forma distinta y algunos cambian de significado. Aquí están los grupos que más se usan.",
    vocab: [
      ["enjoy + -ing", "disfrutar", "en-YÓI"], ["avoid + -ing", "evitar", "a-VÓID"], ["mind + -ing", "importar (molestar)", "MAIND"], ["finish + -ing", "terminar", "FÍ-nish"],
      ["keep + -ing", "seguir / no parar de", "KIIP"], ["decide + to", "decidir", "di-SÁID"], ["manage + to", "lograr", "MÁ-nich"], ["afford + to", "permitirse", "a-FÓRD"],
      ["refuse + to", "negarse", "ri-FIÚS"], ["promise + to", "prometer", "PRÓ-mis"], ["be good at + -ing", "ser bueno en", "bi gud at"], ["can't stand + -ing", "no soportar", "cant STAND"]
    ],
    phrases: [
      ["I enjoy reading in English.", "Disfruto leer en inglés.", "enjoy + -ing"],
      ["Would you mind closing the door?", "¿Te importaría cerrar la puerta?", "Muy cortés"],
      ["I decided to learn Italian.", "Decidí aprender italiano.", "decide + to"],
      ["I managed to finish on time.", "Logré terminar a tiempo.", ""],
      ["I stopped smoking two years ago.", "Dejé de fumar hace dos años.", "stop + -ing = dejar de"],
      ["I stopped to buy some water.", "Me detuve para comprar agua.", "stop + to = parar para"],
      ["Remember to lock the door!", "¡Acuérdate de cerrar la puerta!", "remember + to = no olvidar hacer"],
      ["I remember meeting him in 2018.", "Recuerdo haberlo conocido en 2018.", "remember + -ing = recordar algo pasado"]
    ],
    grammar: {
      title: "¿-ing o to + infinitivo?",
      html: `<table><tr><th>+ -ing</th><th>+ to + infinitivo</th></tr>
      <tr><td>enjoy, avoid, mind, finish, keep, suggest, consider, practise, miss, can't stand, can't help, feel like, give up</td><td>want, decide, hope, plan, manage, afford, refuse, promise, agree, expect, seem, learn, offer, tend</td></tr>
      <tr><td>después de <b>preposiciones</b>: good at <u>cooking</u>, interested in <u>learning</u>, before <u>leaving</u>, instead of <u>waiting</u></td><td>después de <b>adjetivos</b>: easy <u>to learn</u>, happy <u>to help</u>, nice <u>to meet</u> you</td></tr>
      <tr><td>como <b>sujeto</b>: <u>Swimming</u> is good for you.</td><td>para expresar <b>propósito</b>: I came here <u>to study</u>.</td></tr></table>
      <p><strong>Cambian de significado:</strong></p>
      <ul><li><b>stop</b> doing (dejar de) / stop to do (parar para)</li>
      <li><b>remember / forget</b> doing (algo pasado) / to do (algo pendiente)</li>
      <li><b>try</b> doing (probar a ver qué pasa) / to do (intentar, esforzarse)</li>
      <li><b>regret</b> doing (lamentar haberlo hecho) / to tell you (lamento informarte)</li></ul>
      <p><b>like, love, hate, prefer, start, begin, continue</b> aceptan las dos sin gran cambio.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> después de preposición siempre -ing, aunque en español usemos infinitivo: “antes de salir” = <em>before <u>leaving</u></em>, “en vez de esperar” = <em>instead of <u>waiting</u></em>.",
      "<strong>Truco:</strong> aprende cada verbo con su forma en un bloque: no “enjoy = disfrutar”, sino “enjoy doing something”."
    ],
    dialog: [
      ["A", "Do you feel like going out tonight?", "¿Tienes ganas de salir esta noche?"],
      ["B", "I'd love to, but I promised to help my brother with his homework.", "Me encantaría, pero prometí ayudar a mi hermano con su tarea."],
      ["A", "Can't you finish helping him early?", "¿No puedes terminar de ayudarlo temprano?"],
      ["B", "I'll try. I can't afford to miss his exam prep.", "Lo intentaré. No me puedo permitir faltar a su preparación del examen."],
      ["A", "OK. Remember to text me if you manage to escape!", "Ok. ¡Acuérdate de escribirme si logras escaparte!"],
      ["B", "I will. I'm looking forward to seeing everyone.", "Lo haré. Tengo ganas de ver a todos."]
    ],
    quiz: [
      { q: "I really enjoy ___ to podcasts.", opts: ["to listen", "listening", "listen"], a: 1 },
      { q: "We decided ___ a new car.", opts: ["buying", "to buy", "buy"], a: 1 },
      { q: "He's interested in ___ abroad.", opts: ["to work", "working", "work"], a: 1 },
      { q: "“Dejé de beber café” =", opts: ["I stopped to drink coffee", "I stopped drinking coffee", "I stopped drink coffee"], a: 1 },
      { q: "Don't forget ___ the lights.", opts: ["turning off", "to turn off", "turn off"], a: 1 },
      { q: "Escribe “antes de salir” (leave):", fill: ["before leaving"] }
    ]
  },

  // ===================== B2 · UPPER-INTERMEDIATE =====================
  {
    id: "b2-perfect-continuous", level: "B2",
    title: "Perfect continuous tenses",
    sub: "I've been working · I'd been waiting · How long…?",
    intro: "Para hablar de duración y de actividades que acaban de terminar con un resultado visible. Es una de las marcas que separan un B1 de un B2.",
    vocab: [
      ["How long…?", "¿Cuánto tiempo…?", "jau LONG"], ["all day / all morning", "todo el día / toda la mañana", "ol DEI"], ["lately", "últimamente", "LÉIT-li"], ["non-stop", "sin parar", "non-STOP"],
      ["exhausted", "agotado", "ig-SÓS-ted"], ["out of breath", "sin aliento", "aut ov BREZ"], ["for ages", "desde hace siglos", "for ÉI-yes"], ["get the hang of", "agarrarle el truco a", "guet di JANG ov"],
      ["keep up with", "mantenerse al día con", "kiip AP uiz"], ["fall behind", "quedarse atrás", "fol bi-JÁIND"], ["catch up on", "ponerse al día con", "kach AP on"], ["wear out", "desgastar / agotar", "uer ÁUT"]
    ],
    phrases: [
      ["I've been studying English for ten years.", "Llevo diez años estudiando inglés.", "Duración hasta ahora"],
      ["How long have you been waiting?", "¿Cuánto tiempo llevas esperando?", ""],
      ["You look tired. Have you been running?", "Te ves cansado. ¿Has estado corriendo?", "Resultado visible"],
      ["I've been reading this book all week, but I haven't finished it.", "Llevo toda la semana leyendo este libro, pero no lo he terminado.", "Continuous = actividad; simple = resultado"],
      ["I've read three books this month.", "He leído tres libros este mes.", "Cantidad → present perfect simple"],
      ["She had been working there for years when she got promoted.", "Llevaba años trabajando allí cuando la ascendieron.", "Past perfect continuous"],
      ["I've known him for ages.", "Lo conozco desde hace siglos.", "know: verbo de estado, sin -ing"],
      ["I'm trying to catch up on my emails.", "Estoy intentando ponerme al día con mis correos.", ""]
    ],
    grammar: {
      title: "Perfect simple vs perfect continuous",
      html: `<table><tr><th>Present perfect continuous (have been + -ing)</th><th>Present perfect simple</th></tr>
      <tr><td>Énfasis en la <b>actividad</b> y su duración: <em>I've been painting the house.</em></td><td>Énfasis en el <b>resultado</b> o la cantidad: <em>I've painted two rooms.</em></td></tr>
      <tr><td>Pregunta <b>How long…?</b>: <em>How long have you been learning?</em></td><td>Pregunta <b>How much / How many…?</b>: <em>How many lessons have you done?</em></td></tr>
      <tr><td>Actividad reciente con efecto visible: <em>Your eyes are red. Have you been crying?</em></td><td>Verbos de estado (know, be, have, like, believe): <em>I've known her for years.</em></td></tr></table>
      <p><strong>Past perfect continuous</strong> (had been + -ing): duración antes de otro momento pasado. <em>When I arrived, they had been waiting for an hour.</em></p>
      <p><strong>Verbos de estado</strong> no van en continuo: know, believe, understand, own, belong, prefer, need, seem. <em>I've been knowing</em> ✗.</p>`
    },
    tips: [
      "<strong>Clave para hispanohablantes:</strong> “Llevo X tiempo haciendo algo” = <em>I've been doing something for X</em>. Es la traducción más natural y la que más se olvida.",
      "<strong>Ojo:</strong> en una entrevista de trabajo: “I've been working in customer service for three years” suena mucho mejor que “I work in customer service since three years”."
    ],
    dialog: [
      ["A", "You look exhausted. What have you been doing?", "Te ves agotado. ¿Qué has estado haciendo?"],
      ["B", "I've been working on this presentation all day.", "Llevo todo el día trabajando en esta presentación."],
      ["A", "How many slides have you done?", "¿Cuántas diapositivas has hecho?"],
      ["B", "I've finished twenty, but I've been struggling with the charts.", "He terminado veinte, pero he estado batallando con los gráficos."],
      ["A", "Want some help? I've been using that software for years.", "¿Quieres ayuda? Llevo años usando ese programa."],
      ["B", "That would be amazing. I'm falling behind!", "Eso sería genial. ¡Me estoy quedando atrás!"]
    ],
    quiz: [
      { q: "I ___ for you for half an hour! Where were you?", opts: ["wait", "have been waiting", "am waiting"], a: 1 },
      { q: "She ___ three emails this morning.", opts: ["has been writing", "has written", "wrote since"], a: 1 },
      { q: "I ___ him since we were kids.", opts: ["have been knowing", "have known", "know"], a: 1 },
      { q: "When the boss arrived, we ___ for two hours.", opts: ["had been working", "have been working", "were working since"], a: 0 },
      { q: "Escribe: “Llevo dos años aprendiendo italiano” (learn).", fill: ["i've been learning italian for two years", "i have been learning italian for two years", "i've been learning italian for 2 years", "i have been learning italian for 2 years"] },
      { q: "Pregunta natural por la duración:", opts: ["How much time are you living here?", "How long have you been living here?", "Since when you live here?"], a: 1 }
    ]
  },

  {
    id: "b2-passive", level: "B2",
    title: "The passive & causative",
    sub: "It was built · It is said that… · I had my car fixed",
    intro: "La voz pasiva es esencial en noticias, informes y textos formales. Y el causativo (“have something done”) es lo que usamos para decir “me corté el pelo” sin cortárnoslo nosotros mismos.",
    vocab: [
      ["be built", "ser construido", "bi BILT"], ["be held", "celebrarse (evento)", "bi JELD"], ["be expected to", "esperarse que", "bi ex-PÉC-ted tu"], ["be thought to", "creerse que", "bi ZOT tu"],
      ["it is said that", "se dice que", "it iz SED dat"], ["by", "por (agente)", "BAI"], ["have something done", "mandar hacer algo", "jav SAM-zing DAN"], ["get something done", "lograr que se haga algo", "guet SAM-zing DAN"],
      ["fix / repair", "arreglar", "FIKS / ri-PÉR"], ["deliver", "entregar / repartir", "di-LÍ-ver"], ["be released", "ser lanzado / estrenado", "bi ri-LÍIST"], ["be banned", "ser prohibido", "bi BAND"]
    ],
    phrases: [
      ["The Panama Canal was opened in 1914.", "El Canal de Panamá fue inaugurado en 1914.", "Past simple passive"],
      ["English is spoken all over the world.", "El inglés se habla en todo el mundo.", "Equivale a nuestra “se”"],
      ["The meeting has been cancelled.", "La reunión ha sido cancelada.", ""],
      ["The new bridge is being built right now.", "El nuevo puente se está construyendo ahora mismo.", "Continuous passive"],
      ["It is said that the hotel is haunted.", "Se dice que el hotel está embrujado.", "Impersonal"],
      ["He is thought to be the richest man in town.", "Se cree que es el hombre más rico del pueblo.", ""],
      ["I had my hair cut yesterday.", "Me corté el pelo ayer (en la barbería).", "Causativo"],
      ["We need to get the car fixed before the trip.", "Tenemos que mandar a arreglar el carro antes del viaje.", ""]
    ],
    grammar: {
      title: "Pasiva = be + participio",
      html: `<table><tr><th>Tiempo</th><th>Activa</th><th>Pasiva</th></tr>
      <tr><td>Present simple</td><td>They clean the office.</td><td>The office <b>is cleaned</b>.</td></tr>
      <tr><td>Present continuous</td><td>They are cleaning it.</td><td>It <b>is being cleaned</b>.</td></tr>
      <tr><td>Past simple</td><td>They cleaned it.</td><td>It <b>was cleaned</b>.</td></tr>
      <tr><td>Present perfect</td><td>They have cleaned it.</td><td>It <b>has been cleaned</b>.</td></tr>
      <tr><td>Future</td><td>They will clean it.</td><td>It <b>will be cleaned</b>.</td></tr>
      <tr><td>Modal</td><td>They must clean it.</td><td>It <b>must be cleaned</b>.</td></tr></table>
      <p><strong>Cuándo usarla:</strong> cuando no importa o no se sabe quién lo hace, o en textos formales. El agente va con <em>by</em> solo si aporta información.</p>
      <p><strong>Pasiva impersonal (muy B2/C1):</strong> <em>It is said / believed / reported that…</em> o <em>He is said to be…</em> → “se dice que”.</p>
      <p><strong>Causativo:</strong> <em>have / get + objeto + participio</em> = algo que otra persona hace por ti: <em>I had my eyes tested</em>, <em>I'm getting my nails done</em>.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> el “se” impersonal del español casi siempre se traduce con pasiva o con <em>you / people</em>: “Aquí se habla inglés” = <em>English is spoken here</em>.",
      "<strong>Error típico:</strong> “I cut my hair” significa que te lo cortaste tú mismo. Si fuiste a la barbería: <em>I had my hair cut</em>."
    ],
    dialog: [
      ["A", "Have you heard? The office is being renovated next month.", "¿Te enteraste? La oficina va a ser renovada el próximo mes."],
      ["B", "Really? Where will we be moved to?", "¿En serio? ¿A dónde nos van a mover?"],
      ["A", "It's been decided that we'll work from home for two weeks.", "Se ha decidido que trabajaremos desde casa dos semanas."],
      ["B", "Great. I'll have my internet upgraded then.", "Genial. Entonces voy a mandar a mejorar mi internet."],
      ["A", "Good idea. The new furniture is expected to arrive in March.", "Buena idea. Se espera que los muebles nuevos lleguen en marzo."],
      ["B", "As long as the coffee machine is replaced, I'm happy!", "¡Mientras cambien la cafetera, estoy feliz!"]
    ],
    quiz: [
      { q: "The letter ___ yesterday.", opts: ["was sent", "has sent", "sent"], a: 0 },
      { q: "The road ___ at the moment, so take another route.", opts: ["is repaired", "is being repaired", "has repaired"], a: 1 },
      { q: "“Me arreglaron el teléfono” (causativo) =", opts: ["I fixed my phone", "I had my phone fixed", "I had fixed my phone"], a: 1 },
      { q: "It ___ that the company will close.", opts: ["says", "is said", "is saying"], a: 1 },
      { q: "She is believed ___ in Spain now.", opts: ["living", "to be living", "that lives"], a: 1 },
      { q: "Escribe en pasiva: They built this house in 1990.", fill: ["this house was built in 1990"] }
    ]
  },

  {
    id: "b2-reported", level: "B2",
    title: "Reported speech & reporting verbs",
    sub: "She said that… · He suggested going · They denied…",
    intro: "Contar lo que otra persona dijo es básico en el trabajo y en la vida. A nivel B2 no basta con “said”: necesitas verbos como suggest, admit, deny, warn o refuse, cada uno con su estructura.",
    vocab: [
      ["claim", "afirmar (sin pruebas)", "CLEIM"], ["admit", "admitir", "ad-MÍT"], ["deny", "negar", "di-NÁI"], ["suggest", "sugerir", "su-YÉST"],
      ["recommend", "recomendar", "re-co-MÉND"], ["warn", "advertir", "UORN"], ["remind", "recordar (a alguien)", "ri-MÁIND"], ["refuse", "negarse", "ri-FIÚS"],
      ["insist on", "insistir en", "in-SÍST on"], ["apologise for", "disculparse por", "a-PÓ-lo-yais for"], ["accuse sb of", "acusar a alguien de", "a-KIÚS"], ["promise", "prometer", "PRÓ-mis"]
    ],
    phrases: [
      ["She said (that) she was tired.", "Dijo que estaba cansada.", "is → was"],
      ["He told me he had lost his keys.", "Me dijo que había perdido las llaves.", "tell + persona"],
      ["They asked me where I lived.", "Me preguntaron dónde vivía.", "Pregunta indirecta: sin inversión"],
      ["She asked if I wanted coffee.", "Preguntó si quería café.", "yes/no → if/whether"],
      ["He suggested going to the beach.", "Sugirió ir a la playa.", "suggest + -ing"],
      ["She admitted making a mistake.", "Admitió haberse equivocado.", ""],
      ["He refused to pay the bill.", "Se negó a pagar la cuenta.", "refuse + to"],
      ["My boss reminded me to send the report.", "Mi jefe me recordó enviar el informe.", "remind + persona + to"]
    ],
    grammar: {
      title: "Estilo indirecto",
      html: `<table><tr><th>Directo</th><th>Indirecto (verbo en pasado)</th></tr>
      <tr><td>“I <b>work</b> here.”</td><td>He said he <b>worked</b> there.</td></tr>
      <tr><td>“I'<b>m working</b>.”</td><td>He said he <b>was working</b>.</td></tr>
      <tr><td>“I <b>worked</b> / <b>have worked</b>.”</td><td>He said he <b>had worked</b>.</td></tr>
      <tr><td>“I <b>will</b> call.”</td><td>He said he <b>would</b> call.</td></tr>
      <tr><td>“I <b>can</b> help.”</td><td>He said he <b>could</b> help.</td></tr></table>
      <p>También cambian: <em>today → that day, tomorrow → the next day, here → there, this → that</em>. Si lo dicho sigue siendo verdad, se puede no cambiar el tiempo: <em>She said she <u>lives</u> in Colón</em>.</p>
      <p><strong>say vs tell:</strong> <em>say (something)</em>, <em>tell <u>someone</u> (something)</em>. “He said me” ✗.</p>
      <p><strong>Verbos y sus estructuras:</strong></p>
      <ul><li>+ to: <em>agree, refuse, promise, offer, threaten</em> → He refused <u>to help</u>.</li>
      <li>+ persona + to: <em>tell, ask, advise, warn, remind, encourage</em> → She warned me <u>not to go</u>.</li>
      <li>+ -ing: <em>suggest, admit, deny, recommend</em> → He denied <u>stealing</u> the money.</li>
      <li>+ prep + -ing: <em>apologise for, insist on, accuse sb of, blame sb for</em> → She apologised <u>for being</u> late.</li></ul>`
    },
    tips: [
      "<strong>Ojo:</strong> <em>suggest</em> nunca va con “to + persona + infinitivo”: “He suggested me to go” ✗ → <em>He suggested going</em> o <em>He suggested (that) I go/should go</em>.",
      "<strong>Preguntas indirectas:</strong> el orden vuelve a ser de afirmación: <em>Can you tell me where <u>the station is</u>?</em> (no “where is the station”)."
    ],
    dialog: [
      ["A", "What did the manager say in the meeting?", "¿Qué dijo el gerente en la reunión?"],
      ["B", "He told us that sales had dropped and asked what we thought.", "Nos dijo que las ventas habían bajado y preguntó qué pensábamos."],
      ["A", "Did anyone suggest anything?", "¿Alguien sugirió algo?"],
      ["B", "Laura suggested launching an online campaign.", "Laura sugirió lanzar una campaña en línea."],
      ["A", "And what did he say?", "¿Y qué dijo él?"],
      ["B", "He agreed to try it, but he warned us not to expect miracles.", "Aceptó probarlo, pero nos advirtió que no esperáramos milagros."]
    ],
    quiz: [
      { q: "“I'm hungry,” she said. → She said she ___ hungry.", opts: ["is being", "was", "has been"], a: 1 },
      { q: "He ___ me that he would be late.", opts: ["said", "told", "said to"], a: 1 },
      { q: "They asked me where ___.", opts: ["did I work", "I worked", "do I work"], a: 1 },
      { q: "She suggested ___ a taxi.", opts: ["to take", "taking", "us to take"], a: 1 },
      { q: "He denied ___ the window.", opts: ["to break", "breaking", "that break"], a: 1 },
      { q: "Escribe: “Me advirtió que no llegara tarde” (warn, be late).", fill: ["she warned me not to be late", "he warned me not to be late"] }
    ]
  },

  {
    id: "b2-wishes", level: "B2",
    title: "Third conditional, wishes & regrets",
    sub: "If I had known… · I wish I had… · If only…",
    intro: "Para hablar de lo que pudo ser y no fue, de lamentos y de deseos. Son estructuras muy frecuentes en conversaciones y en los exámenes FCE/IELTS.",
    vocab: [
      ["regret", "arrepentirse / lamentar", "ri-GRÉT"], ["wish", "desear / ojalá", "UISH"], ["if only", "ojalá / si tan solo", "if ÓUN-li"], ["missed opportunity", "oportunidad perdida", "MIST o-por-TIÚ-ni-ti"],
      ["in hindsight", "en retrospectiva", "in JÁIND-sait"], ["make a mistake", "cometer un error", "meik a mis-TÉIK"], ["it's high time", "ya es hora de que", "its JAI taim"], ["would rather", "preferiría", "uud RÁ-der"],
      ["blame oneself", "culparse", "BLEIM uan-SÉLF"], ["let down", "decepcionar", "let DÁUN"], ["turn down", "rechazar (oferta)", "tern DÁUN"], ["go for it", "lanzarse / intentarlo", "gou FOR it"]
    ],
    phrases: [
      ["If I had studied harder, I would have passed.", "Si hubiera estudiado más, habría aprobado.", "Third conditional"],
      ["If you hadn't called me, I would have missed the flight.", "Si no me hubieras llamado, habría perdido el vuelo.", ""],
      ["If I had taken that job, I would be living in Spain now.", "Si hubiera aceptado ese trabajo, ahora viviría en España.", "Mixed conditional"],
      ["I wish I spoke English fluently.", "Ojalá hablara inglés con fluidez.", "Deseo presente → pasado"],
      ["I wish I hadn't said that.", "Ojalá no hubiera dicho eso.", "Lamento pasado → past perfect"],
      ["I wish you would stop interrupting me.", "Ojalá dejaras de interrumpirme.", "Queja → would"],
      ["If only I had more time!", "¡Si tan solo tuviera más tiempo!", ""],
      ["It's high time we left.", "Ya es hora de que nos vayamos.", "it's time + pasado"]
    ],
    grammar: {
      title: "Hipótesis sobre el pasado y deseos",
      html: `<table><tr><th>Estructura</th><th>Uso</th><th>Ejemplo</th></tr>
      <tr><td><b>If + past perfect, would have + participio</b></td><td>3er condicional: pasado irreal</td><td>If I'd left earlier, I wouldn't have missed the bus.</td></tr>
      <tr><td><b>If + past perfect, would + verbo</b></td><td>mixto: causa pasada, efecto presente</td><td>If I'd slept more, I wouldn't be so tired now.</td></tr>
      <tr><td><b>If + past simple, would have + participio</b></td><td>mixto: rasgo presente, efecto pasado</td><td>If I were braver, I would have asked her out.</td></tr>
      <tr><td><b>wish / if only + past simple</b></td><td>deseo sobre el presente</td><td>I wish I lived closer.</td></tr>
      <tr><td><b>wish / if only + past perfect</b></td><td>lamento sobre el pasado</td><td>I wish I had listened to you.</td></tr>
      <tr><td><b>wish + would</b></td><td>queja sobre lo que otro hace</td><td>I wish he would call me back.</td></tr></table>
      <p><strong>Contracciones:</strong> <em>I'd</em> puede ser <em>I had</em> o <em>I would</em>: “If I'<u>d</u> known, I'<u>d</u> have told you” = If I had known, I would have told you.</p>
      <p><strong>would rather + pasado</strong> para preferencias sobre otros: <em>I'd rather you didn't smoke here</em>.</p>`
    },
    tips: [
      "<strong>Pronunciación:</strong> “would have” se dice casi siempre /UUD-ov/ o incluso /UÚ-da/: “I would've” — por eso muchos nativos escriben mal “would of”.",
      "<strong>Ojo:</strong> nunca “If I would have known” en inglés estándar: <em>If I had known</em>."
    ],
    dialog: [
      ["A", "I can't believe I didn't buy those concert tickets.", "No puedo creer que no compré esas entradas del concierto."],
      ["B", "If you'd bought them in March, they would have been half the price.", "Si las hubieras comprado en marzo, habrían costado la mitad."],
      ["A", "I know. I wish I hadn't waited so long.", "Lo sé. Ojalá no hubiera esperado tanto."],
      ["B", "If I were you, I'd check the resale sites.", "Yo que tú, revisaría las páginas de reventa."],
      ["A", "Good idea. If only I had more money right now!", "Buena idea. ¡Si tan solo tuviera más dinero ahora!"],
      ["B", "Well, in hindsight, it was a missed opportunity. Next time, go for it!", "Bueno, en retrospectiva, fue una oportunidad perdida. ¡La próxima vez, lánzate!"]
    ],
    quiz: [
      { q: "If I ___ about the traffic, I would have left earlier.", opts: ["knew", "had known", "would know"], a: 1 },
      { q: "If she had taken the medicine, she ___ better now.", opts: ["would feel", "would have felt", "felt"], a: 0 },
      { q: "I wish I ___ taller. (presente)", opts: ["am", "were", "had been"], a: 1 },
      { q: "I wish I ___ that email. (lamento pasado)", opts: ["didn't send", "hadn't sent", "wouldn't send"], a: 1 },
      { q: "It's high time you ___ a job.", opts: ["find", "found", "will find"], a: 1 },
      { q: "Escribe: “Si me hubieras preguntado, te habría ayudado” (ask, help).", fill: ["if you had asked me, i would have helped you", "if you'd asked me, i'd have helped you", "if you had asked me, i'd have helped you", "if you'd asked me, i would have helped you", "if you had asked me i would have helped you"] }
    ]
  },

  {
    id: "b2-deduction", level: "B2",
    title: "Modals of deduction & past modals",
    sub: "must have · can't have · might have · should have",
    intro: "Para especular sobre lo que pasó (“debe de haber salido”) y criticar o lamentar decisiones (“deberías haber llamado”). Muy útil en conversación natural.",
    vocab: [
      ["must have done", "debe de haber hecho", "MÁST-ov"], ["can't have done", "no puede haber hecho", "CANT-ov"], ["might / may have done", "puede que haya hecho", "MÁIT-ov"], ["could have done", "podría haber hecho", "CÚD-ov"],
      ["should have done", "debería haber hecho", "SHÚD-ov"], ["needn't have done", "no hacía falta haber hecho", "NÍI-dent-ov"], ["evidence", "evidencia / prueba", "É-vi-dens"], ["obviously", "obviamente", "ÓB-vi-us-li"],
      ["apparently", "al parecer", "a-PÁ-rent-li"], ["no wonder", "con razón", "nou UÁN-der"], ["take for granted", "dar por sentado", "teik for GRÁN-ted"], ["jump to conclusions", "sacar conclusiones precipitadas", "yamp tu con-CLÚ-shons"]
    ],
    phrases: [
      ["The lights are off. They must have gone out.", "Las luces están apagadas. Deben de haber salido.", "Casi seguro que sí"],
      ["She can't have finished already. She only started at 9.", "No puede haber terminado ya. Empezó a las 9.", "Casi seguro que no"],
      ["He might have missed the bus.", "Puede que haya perdido el bus.", "Posible"],
      ["You should have told me earlier!", "¡Deberías habérmelo dicho antes!", "Crítica / lamento"],
      ["I shouldn't have eaten so much.", "No debería haber comido tanto.", ""],
      ["We could have gone by car, but we took the train.", "Podríamos haber ido en carro, pero tomamos el tren.", "Opción no usada"],
      ["You needn't have bought wine. We have plenty.", "No hacía falta que compraras vino. Tenemos mucho.", ""],
      ["No wonder you're tired — you must have slept badly.", "Con razón estás cansado: debes de haber dormido mal.", ""]
    ],
    grammar: {
      title: "Modal + have + participio",
      html: `<table><tr><th>Certeza</th><th>Presente</th><th>Pasado</th></tr>
      <tr><td>Casi seguro que sí</td><td>He <b>must be</b> at home.</td><td>He <b>must have been</b> at home.</td></tr>
      <tr><td>Posible</td><td>He <b>might / may / could be</b> ill.</td><td>He <b>might / may / could have been</b> ill.</td></tr>
      <tr><td>Casi seguro que no</td><td>He <b>can't / couldn't be</b> 50.</td><td>He <b>can't / couldn't have been</b> there.</td></tr></table>
      <table><tr><th>Juicio sobre el pasado</th><th>Ejemplo</th></tr>
      <tr><td><b>should(n't) have</b> = crítica / lamento</td><td>You shouldn't have shouted at him.</td></tr>
      <tr><td><b>could have</b> = posibilidad no aprovechada</td><td>You could have asked me for help!</td></tr>
      <tr><td><b>needn't have</b> = lo hiciste pero no hacía falta</td><td>I needn't have worried.</td></tr>
      <tr><td><b>didn't need to</b> = no lo hiciste porque no hacía falta</td><td>I didn't need to take a taxi.</td></tr></table>
      <p><strong>Ojo:</strong> el contrario de <em>must have</em> (deducción) es <em>can't have</em>, no “mustn't have”.</p>`
    },
    tips: [
      "<strong>Pronunciación:</strong> en el habla real <em>have</em> se reduce: <em>must've</em> /MÁS-tov/, <em>should've</em> /SHÚ-dov/, <em>could've</em> /CÚ-dov/. Escúchalo en series y repítelo.",
      "<strong>Para sonar natural:</strong> “You shouldn't have!” es la respuesta típica (y amable) cuando alguien te hace un regalo: “¡No te hubieras molestado!”."
    ],
    dialog: [
      ["A", "Where's Tom? The meeting started twenty minutes ago.", "¿Dónde está Tom? La reunión empezó hace veinte minutos."],
      ["B", "He must have got stuck in traffic. It's raining heavily.", "Debe de haberse quedado atascado en el tráfico. Está lloviendo fuerte."],
      ["A", "He can't have forgotten, I reminded him this morning.", "No puede haberlo olvidado, se lo recordé esta mañana."],
      ["B", "He might have had a problem with his car.", "Puede que haya tenido un problema con el carro."],
      ["A", "Well, he should have called us.", "Bueno, debería habernos llamado."],
      ["B", "True. Oh, here's a message: his battery died! No wonder.", "Cierto. Ah, aquí hay un mensaje: ¡se le murió la batería! Con razón."]
    ],
    quiz: [
      { q: "The ground is wet. It ___ last night.", opts: ["must rain", "must have rained", "should have rained"], a: 1 },
      { q: "She ___ seen me. I wasn't there!", opts: ["mustn't have", "can't have", "shouldn't have"], a: 1 },
      { q: "You ___ me! I would have helped you.", opts: ["should have told", "must have told", "can't have told"], a: 0 },
      { q: "I ___ brought an umbrella — it didn't rain (pero lo traje).", opts: ["didn't need to", "needn't have", "mustn't have"], a: 1 },
      { q: "He ___ the email; it may have gone to spam.", opts: ["might not have received", "can have received", "must not receive"], a: 0 },
      { q: "Escribe: “Deberías haberme llamado” (call).", fill: ["you should have called me", "you should've called me"] }
    ]
  },

  {
    id: "b2-relative", level: "B2",
    title: "Relative clauses",
    sub: "who, which, that, whose, where · defining & non-defining",
    intro: "Las oraciones de relativo te permiten unir ideas en frases más largas y elegantes. Es clave para escribir bien y para sonar B2 al hablar.",
    vocab: [
      ["who", "que / quien (personas)", "JU"], ["which", "que / lo cual (cosas)", "UICH"], ["that", "que (personas/cosas, defining)", "DAT"], ["whose", "cuyo / de quien", "JUUS"],
      ["where", "donde", "UER"], ["when", "cuando / en que", "UEN"], ["whom", "a quien (formal)", "JUUM"], ["which is why", "por lo cual", "uich iz UAI"],
      ["most of whom", "la mayoría de los cuales", "MOUST ov juum"], ["all of which", "todo lo cual", "OL ov uich"], ["the reason why", "la razón por la que", "di RÍI-son uai"], ["whatever / whoever", "lo que sea / quien sea", "uat-É-ver / ju-É-ver"]
    ],
    phrases: [
      ["The woman who lives next door is a doctor.", "La mujer que vive al lado es doctora.", "Defining: sin comas"],
      ["My sister, who lives in Spain, is a doctor.", "Mi hermana, que vive en España, es doctora.", "Non-defining: con comas"],
      ["The book (that) I'm reading is amazing.", "El libro que estoy leyendo es increíble.", "Se puede omitir that si es objeto"],
      ["That's the guy whose car was stolen.", "Ese es el tipo al que le robaron el carro.", "whose = cuyo"],
      ["This is the restaurant where we met.", "Este es el restaurante donde nos conocimos.", ""],
      ["He missed the deadline, which annoyed the boss.", "No cumplió el plazo, lo cual molestó al jefe.", "which = lo cual (toda la idea)"],
      ["I have three brothers, two of whom live abroad.", "Tengo tres hermanos, dos de los cuales viven fuera.", "Formal"],
      ["The person I spoke to was very helpful.", "La persona con la que hablé fue muy amable.", "Preposición al final"]
    ],
    grammar: {
      title: "Defining vs non-defining",
      html: `<table><tr><th></th><th>Defining</th><th>Non-defining</th></tr>
      <tr><td>Función</td><td>identifica de qué hablamos</td><td>añade información extra</td></tr>
      <tr><td>Comas</td><td>no</td><td><b>sí</b></td></tr>
      <tr><td>¿“that”?</td><td>sí (who/which/that)</td><td><b>no</b>, solo who/which</td></tr>
      <tr><td>¿Se omite el pronombre?</td><td>sí, si es objeto: <em>the film (that) I saw</em></td><td>nunca</td></tr></table>
      <p><strong>which = lo cual:</strong> para referirse a toda la frase anterior: <em>She passed the exam, which surprised everyone.</em> Nunca “what” en este caso.</p>
      <p><strong>Preposiciones:</strong> informal al final (<em>the house I grew up in</em>), formal delante (<em>the house in which I grew up</em>). Con preposición delante solo <em>which/whom</em>.</p>
      <p><strong>Reducidas:</strong> <em>The man (who is) sitting there…, The houses (which were) built in 1900…</em> → más natural y avanzado.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> “lo que” al inicio o como objeto es <em>what</em> (<em>What I need is time</em>), pero “lo cual” referido a una frase es <em>which</em>: “He lied, <u>which</u> is bad” (no “what is bad”).",
      "<strong>Error típico:</strong> repetir el pronombre: “The man who I saw <u>him</u>” ✗ → <em>The man (who) I saw</em>."
    ],
    dialog: [
      ["A", "Who's the guy who just waved at you?", "¿Quién es el tipo que te acaba de saludar?"],
      ["B", "That's Daniel, whose sister works with me.", "Es Daniel, cuya hermana trabaja conmigo."],
      ["A", "The one who organised the party last month?", "¿La que organizó la fiesta el mes pasado?"],
      ["B", "Exactly. The party, which ended at 4 a.m., was legendary.", "Exacto. La fiesta, que terminó a las 4 a. m., fue legendaria."],
      ["A", "Is that the bar where it took place?", "¿Ese es el bar donde fue?"],
      ["B", "No, it was at a place I'd never been to before.", "No, fue en un lugar en el que nunca había estado."]
    ],
    quiz: [
      { q: "My boss, ___ is from Chile, is very friendly.", opts: ["that", "who", "which"], a: 1 },
      { q: "The car ___ I bought last year is already broken.", opts: ["who", "whose", "that"], a: 2 },
      { q: "He didn't come, ___ was a shame.", opts: ["what", "that", "which"], a: 2 },
      { q: "That's the woman ___ son plays for Panama.", opts: ["who", "whose", "which"], a: 1 },
      { q: "¿Qué frase lleva comas?", opts: ["The students who failed must repeat.", "My father who is 60 still works.", "The phone that I lost was new."], a: 1 },
      { q: "Escribe: “la ciudad donde nací” (be born).", fill: ["the city where i was born", "the city i was born in"] }
    ]
  },

  {
    id: "b2-used-to", level: "B2",
    title: "Used to, be used to & get used to",
    sub: "Hábitos pasados, costumbre y adaptación",
    intro: "Tres expresiones parecidas que confunden incluso a niveles avanzados. Dominarlas te ayuda a hablar de cambios en tu vida: mudanzas, trabajos nuevos, otro país.",
    vocab: [
      ["used to + verb", "solía", "IÚS-tu"], ["be used to + -ing", "estar acostumbrado a", "bi IÚSD tu"], ["get used to + -ing", "acostumbrarse a", "guet IÚSD tu"], ["adapt to", "adaptarse a", "a-DÁPT tu"],
      ["settle in", "instalarse / adaptarse", "SÉ-tel in"], ["routine", "rutina", "ru-TÍIN"], ["habit", "hábito", "JÁ-bit"], ["culture shock", "choque cultural", "CÁL-cher shok"],
      ["homesick", "con nostalgia de casa", "JÓUM-sik"], ["struggle", "batallar / costar", "STRÁ-guel"], ["at first", "al principio", "at FERST"], ["by now", "a estas alturas", "bai NAU"]
    ],
    phrases: [
      ["I used to live in Colón.", "Antes vivía en Colón (ya no).", "used to = hábito/estado pasado"],
      ["Did you use to play any sports?", "¿Solías practicar algún deporte?", "Pregunta: use (sin d)"],
      ["I'm used to working at night.", "Estoy acostumbrado a trabajar de noche.", "be used to + -ing"],
      ["I'm not used to the cold.", "No estoy acostumbrado al frío.", "+ sustantivo"],
      ["It took me months to get used to driving on the left.", "Me costó meses acostumbrarme a manejar por la izquierda.", "get used to = proceso"],
      ["You'll get used to it.", "Te acostumbrarás.", "Frase muy común"],
      ["At first I was homesick, but by now I've settled in.", "Al principio extrañaba mi casa, pero a estas alturas ya me adapté.", ""],
      ["I would walk to school every morning.", "Caminaba a la escuela cada mañana.", "would = hábito pasado (acciones)"]
    ],
    grammar: {
      title: "Tres estructuras distintas",
      html: `<table><tr><th>Estructura</th><th>Significado</th><th>Ejemplo</th></tr>
      <tr><td><b>used to + infinitivo</b></td><td>hábito o estado pasado que ya no existe</td><td>I used to smoke. (ya no)</td></tr>
      <tr><td><b>be used to + -ing / sustantivo</b></td><td>estar acostumbrado (ya no es raro)</td><td>I'm used to getting up early.</td></tr>
      <tr><td><b>get used to + -ing / sustantivo</b></td><td>acostumbrarse (proceso)</td><td>I'm getting used to my new job.</td></tr></table>
      <p>En <em>be/get used to</em>, el <em>to</em> es preposición: por eso va <b>-ing</b>. <em>I'm used to work</em> ✗ → <em>I'm used to working</em> ✓.</p>
      <p><em>be/get used to</em> se conjugan en todos los tiempos: <em>I wasn't used to…, You'll get used to…, I've got used to…</em>. <em>used to</em> solo existe en pasado.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> en presente “suelo hacer” NO es “I use to”: es <em>I usually do</em>. “I use to go to the gym” ✗ → <em>I usually go to the gym</em>.",
      "<strong>Pronunciación:</strong> <em>used to</em> se dice /IÚS-tu/ con s sorda, nunca /iúsd-tu/."
    ],
    dialog: [
      ["A", "How's life in Toronto?", "¿Cómo va la vida en Toronto?"],
      ["B", "Good, but I'm still not used to the winters!", "Bien, ¡pero todavía no me acostumbro a los inviernos!"],
      ["A", "I bet. In Panama you used to complain about the heat.", "Me imagino. En Panamá te quejabas del calor."],
      ["B", "I know! Now I'd give anything for a hot day.", "¡Lo sé! Ahora daría lo que fuera por un día caluroso."],
      ["A", "Don't worry, you'll get used to it.", "No te preocupes, te acostumbrarás."],
      ["B", "I'm getting used to the food at least. I used to hate pancakes, now I love them.", "Al menos me estoy acostumbrando a la comida. Antes odiaba los pancakes, ahora me encantan."]
    ],
    quiz: [
      { q: "I ___ have a beard, but I shaved it off.", opts: ["am used to", "used to", "get used to"], a: 1 },
      { q: "She's a nurse, so she's used to ___ nights.", opts: ["work", "working", "worked"], a: 1 },
      { q: "“Normalmente voy al gym” =", opts: ["I use to go to the gym", "I usually go to the gym", "I'm used to go to the gym"], a: 1 },
      { q: "It's hard at first, but you'll ___ it.", opts: ["use to", "get used to", "be use to"], a: 1 },
      { q: "Did you ___ live here?", opts: ["used to", "use to", "using to"], a: 1 },
      { q: "Escribe: “No estoy acostumbrado a hablar en público” (speak in public).", fill: ["i'm not used to speaking in public", "i am not used to speaking in public"] }
    ]
  },

  {
    id: "b2-linking", level: "B2",
    title: "Linking words for speaking & writing",
    sub: "although, despite, whereas, however, therefore…",
    intro: "Los conectores son lo que más sube tu nota en writing y lo que hace que tu speaking suene organizado. Aquí aprendes los esenciales y, sobre todo, su gramática (dónde van y qué llevan después).",
    vocab: [
      ["although / even though", "aunque", "ol-DÓU / Í-ven dou"], ["despite / in spite of", "a pesar de", "dis-PÁIT"], ["however", "sin embargo", "jau-É-ver"], ["whereas / while", "mientras que (contraste)", "uer-ÁS"],
      ["therefore", "por lo tanto", "DÉR-for"], ["as a result", "como resultado", "as a ri-SÁLT"], ["moreover / furthermore", "además (formal)", "mor-ÓU-ver"], ["in addition", "además", "in a-DÍ-shon"],
      ["due to / owing to", "debido a", "DIU tu"], ["so that / in order to", "para que / para", "SOU dat"], ["on the other hand", "por otro lado", "on di Á-der jand"], ["overall / to sum up", "en general / en resumen", "óu-ver-OL"]
    ],
    phrases: [
      ["Although it was raining, we went out.", "Aunque estaba lloviendo, salimos.", "although + frase"],
      ["Despite the rain, we went out.", "A pesar de la lluvia, salimos.", "despite + sustantivo"],
      ["Despite feeling tired, she kept working.", "A pesar de sentirse cansada, siguió trabajando.", "despite + -ing"],
      ["The plan is good. However, it's too expensive.", "El plan es bueno. Sin embargo, es muy caro.", "however: frase nueva + coma"],
      ["I prefer the city, whereas my wife prefers the countryside.", "Yo prefiero la ciudad, mientras que mi esposa prefiere el campo.", ""],
      ["The flight was cancelled due to bad weather.", "El vuelo fue cancelado debido al mal tiempo.", "due to + sustantivo"],
      ["I'm saving money in order to travel next year.", "Estoy ahorrando para viajar el próximo año.", ""],
      ["Overall, I think the advantages outweigh the disadvantages.", "En general, creo que las ventajas superan las desventajas.", "Para concluir"]
    ],
    grammar: {
      title: "Qué va después de cada conector",
      html: `<table><tr><th>Idea</th><th>+ frase completa</th><th>+ sustantivo / -ing</th><th>Entre frases (con puntuación)</th></tr>
      <tr><td>Contraste</td><td>although, even though, though, whereas, while</td><td>despite, in spite of</td><td>However, … / Nevertheless, … / On the other hand, …</td></tr>
      <tr><td>Causa</td><td>because, as, since</td><td>because of, due to, owing to</td><td>—</td></tr>
      <tr><td>Resultado</td><td>so</td><td>—</td><td>Therefore, … / As a result, … / Consequently, …</td></tr>
      <tr><td>Adición</td><td>—</td><td>as well as, in addition to</td><td>Moreover, … / Furthermore, … / What's more, …</td></tr>
      <tr><td>Propósito</td><td>so that (+ can/could)</td><td>in order to / so as to + verbo</td><td>—</td></tr></table>
      <p><strong>despite + frase:</strong> usa <em>despite the fact that</em>: <em>Despite the fact that it was late, he called.</em></p>
      <p><strong>Registro:</strong> en conversación usa <em>but, so, also, anyway, actually</em>; en writing formal, <em>however, therefore, moreover, consequently</em>.</p>`
    },
    tips: [
      "<strong>Error típico:</strong> “Despite it was raining” ✗ → <em>Although it was raining</em> o <em>Despite the rain</em>.",
      "<strong>Ojo:</strong> <em>however</em> no une dos frases con coma sola: “It's good, however it's expensive” ✗ → <em>It's good. However, it's expensive.</em> o <em>It's good; however, it's expensive.</em>",
      "<strong>Truco IELTS/FCE:</strong> no metas un conector en cada frase. Variedad y uso correcto puntúan más que cantidad."
    ],
    dialog: [
      ["A", "Did you enjoy the conference?", "¿Disfrutaste la conferencia?"],
      ["B", "Overall, yes. Although some talks were boring, I learned a lot.", "En general, sí. Aunque algunas charlas fueron aburridas, aprendí mucho."],
      ["A", "Was it worth the price?", "¿Valió lo que costó?"],
      ["B", "It was expensive. However, the networking was excellent.", "Fue cara. Sin embargo, el networking fue excelente."],
      ["A", "Are you going next year?", "¿Vas el próximo año?"],
      ["B", "Probably, so that I can present my own project.", "Probablemente, para poder presentar mi propio proyecto."]
    ],
    quiz: [
      { q: "___ the traffic, we arrived on time.", opts: ["Although", "Despite", "However"], a: 1 },
      { q: "___ he's rich, he lives in a small flat.", opts: ["Despite", "In spite of", "Even though"], a: 2 },
      { q: "The product is cheap. ___, the quality is poor.", opts: ["However", "Although", "Despite"], a: 0 },
      { q: "The match was cancelled ___ the storm.", opts: ["because", "due to", "so"], a: 1 },
      { q: "I study at night ___ I can work during the day.", opts: ["in order to", "so that", "due to"], a: 1 },
      { q: "Escribe “a pesar de estar cansado” (despite + -ing, be tired).", fill: ["despite being tired", "in spite of being tired"] }
    ]
  },

  // ===================== C1 · ADVANCED =====================
  {
    id: "c1-inversion", level: "C1",
    title: "Inversion for emphasis",
    sub: "Never have I… · Not only… but also · Hardly had…",
    intro: "La inversión (verbo auxiliar antes del sujeto después de una expresión negativa) es una de las marcas más claras de un C1. Se usa en discursos, escritura formal y para dar dramatismo.",
    vocab: [
      ["never before", "nunca antes", "NÉ-ver bi-FÓR"], ["rarely / seldom", "rara vez", "RÉR-li / SÉL-dom"], ["not only… but also", "no solo… sino también", "not ÓUN-li… bat OL-sou"], ["no sooner… than", "apenas… cuando", "nou SÚ-ner… dan"],
      ["hardly / scarcely… when", "apenas… cuando", "JÁRD-li… uen"], ["under no circumstances", "bajo ninguna circunstancia", "ÁN-der nou SÉR-cum-stan-ses"], ["not until", "no fue hasta", "not an-TÍL"], ["only then", "solo entonces", "ÓUN-li DEN"],
      ["little did I know", "poco sabía yo", "LÍ-tel did ai NOU"], ["on no account", "de ninguna manera", "on nou a-CÁUNT"], ["so + adj + that", "tan… que", "SOU… dat"], ["nowhere else", "en ningún otro lugar", "NÓU-uer els"]
    ],
    phrases: [
      ["Never have I seen such a beautiful sunset.", "Nunca he visto un atardecer tan bonito.", "Never + have + sujeto"],
      ["Not only did he arrive late, but he also forgot the documents.", "No solo llegó tarde, sino que también olvidó los documentos.", "Not only + did"],
      ["Rarely do we get such good feedback.", "Rara vez recibimos comentarios tan buenos.", ""],
      ["No sooner had I sat down than the phone rang.", "Apenas me había sentado cuando sonó el teléfono.", "No sooner… than"],
      ["Hardly had we left when it started to pour.", "Apenas habíamos salido cuando empezó a diluviar.", "Hardly… when"],
      ["Under no circumstances should you open this door.", "Bajo ninguna circunstancia debes abrir esta puerta.", ""],
      ["Not until I moved abroad did I appreciate my family.", "No fue hasta que me mudé al extranjero que valoré a mi familia.", "Inversión en la 2ª parte"],
      ["Little did I know that she would become my wife.", "Poco sabía yo que se convertiría en mi esposa.", "Muy narrativo"]
    ],
    grammar: {
      title: "Expresión negativa + auxiliar + sujeto",
      html: `<p>Igual que en una pregunta: <em>I have never seen</em> → <em>Never <u>have I</u> seen</em>. Si no hay auxiliar, se usa <b>do/does/did</b>: <em>I rarely go</em> → <em>Rarely <u>do I</u> go</em>.</p>
      <table><tr><th>Expresión</th><th>Ejemplo</th></tr>
      <tr><td>Never / Rarely / Seldom</td><td>Seldom <b>does she</b> complain.</td></tr>
      <tr><td>Not only… but (also)</td><td>Not only <b>is it</b> cheap, but it's also fast.</td></tr>
      <tr><td>No sooner… than / Hardly… when</td><td>No sooner <b>had I</b> arrived than…</td></tr>
      <tr><td>Under no circumstances / On no account</td><td>On no account <b>must you</b> tell her.</td></tr>
      <tr><td>Not until / Only after / Only when</td><td>Only when I left <b>did I</b> realise.</td></tr>
      <tr><td>Little</td><td>Little <b>did they</b> know…</td></tr>
      <tr><td>So + adj / Such + be</td><td>So difficult <b>was the exam</b> that… / Such <b>was his anger</b> that…</td></tr></table>
      <p><strong>Condicionales con inversión (sin if):</strong> <em>Had I known</em> = If I had known · <em>Should you need</em> = If you need · <em>Were I to</em> = If I were to.</p>`
    },
    tips: [
      "<strong>Registro:</strong> la inversión es formal o enfática. En conversación normal suena teatral; úsala en presentaciones, ensayos o para contar algo con drama.",
      "<strong>Ojo:</strong> después de <em>Not until / Only when</em>, la inversión va en la <u>segunda</u> parte: “Only when I saw her <u>did I</u> understand”."
    ],
    dialog: [
      ["A", "How was the trip to Patagonia?", "¿Qué tal el viaje a la Patagonia?"],
      ["B", "Incredible. Never have I seen landscapes like that.", "Increíble. Nunca he visto paisajes así."],
      ["A", "Any problems on the way?", "¿Algún problema en el camino?"],
      ["B", "Well, no sooner had we landed than they lost our luggage!", "Bueno, ¡apenas aterrizamos nos perdieron el equipaje!"],
      ["A", "Oh no. Did you get it back?", "Ay no. ¿Lo recuperaron?"],
      ["B", "Only after three days did it turn up. Not only that, but one bag was soaked.", "Solo apareció después de tres días. Y no solo eso, una maleta estaba empapada."]
    ],
    quiz: [
      { q: "Never ___ such a mess!", opts: ["I have seen", "have I seen", "I saw"], a: 1 },
      { q: "Rarely ___ to the cinema these days.", opts: ["we go", "do we go", "we do go"], a: 1 },
      { q: "No sooner had she left ___ he arrived.", opts: ["when", "than", "that"], a: 1 },
      { q: "Not until the next day ___ the truth.", opts: ["we discovered", "did we discover", "discovered we"], a: 1 },
      { q: "___ I known, I would have helped.", opts: ["If", "Had", "Should"], a: 1 },
      { q: "Escribe con inversión: “I have never felt so tired.” (Never…)", fill: ["never have i felt so tired"] }
    ]
  },

  {
    id: "c1-cleft", level: "C1",
    title: "Cleft sentences & emphasis",
    sub: "What I need is… · It was X that… · I do like it!",
    intro: "Las oraciones “hendidas” mueven el foco de la frase hacia lo que quieres destacar. Los nativos las usan constantemente para sonar claros y persuasivos.",
    vocab: [
      ["what I need is…", "lo que necesito es…", "uat ai NIID iz"], ["all I want is…", "lo único que quiero es…", "OL ai uant iz"], ["the thing is…", "la cosa es que…", "di ZING iz"], ["the reason why… is that…", "la razón por la que… es que…", "di RÍI-son uai"],
      ["it was… that…", "fue… quien / lo que…", "it uos… dat"], ["the last thing I want", "lo último que quiero", "di LAST zing"], ["what happened was…", "lo que pasó fue…", "uat JÁ-pend uos"], ["the point is…", "el punto es…", "di POINT iz"],
      ["indeed", "de hecho / sin duda", "in-DÍID"], ["by far", "con diferencia", "bai FAR"], ["the very", "el mismísimo / justo", "di VÉ-ri"], ["at all", "en absoluto", "at OL"]
    ],
    phrases: [
      ["What I really need is a holiday.", "Lo que de verdad necesito son unas vacaciones.", "What-cleft"],
      ["It was my brother who broke the window, not me.", "Fue mi hermano quien rompió la ventana, no yo.", "It-cleft"],
      ["It wasn't until midnight that we finished.", "No fue hasta la medianoche que terminamos.", ""],
      ["All I want is a bit of peace and quiet.", "Lo único que quiero es un poco de paz y tranquilidad.", ""],
      ["The reason why I'm calling is that I need your help.", "La razón por la que llamo es que necesito tu ayuda.", ""],
      ["The thing is, I don't really like my job.", "La cosa es que no me gusta mucho mi trabajo.", "Muy conversacional"],
      ["I do understand your point, but I disagree.", "Sí que entiendo tu punto, pero no estoy de acuerdo.", "do enfático"],
      ["That's the very book I was looking for!", "¡Ese es justo el libro que buscaba!", ""]
    ],
    grammar: {
      title: "Tres formas de dar énfasis",
      html: `<table><tr><th>Tipo</th><th>Estructura</th><th>Normal → Enfático</th></tr>
      <tr><td><b>It-cleft</b></td><td>It is/was + foco + that/who…</td><td>Ana called. → <em>It was <u>Ana</u> who called.</em></td></tr>
      <tr><td><b>What-cleft</b></td><td>What + sujeto + verbo + is/was…</td><td>I need sleep. → <em>What I need is <u>sleep</u>.</em></td></tr>
      <tr><td><b>Acción completa</b></td><td>What + sujeto + did was + infinitivo</td><td>I called the police. → <em>What I did was (to) call the police.</em></td></tr>
      <tr><td><b>Do enfático</b></td><td>do/does/did + verbo base</td><td>I like it. → <em>I <u>do</u> like it!</em></td></tr></table>
      <p>Otras aperturas útiles: <em>The thing (that) I love about… is…</em>, <em>The place where… is…</em>, <em>The person who… was…</em>, <em>The last thing I want is…</em></p>
      <p><strong>Para contradecir con educación:</strong> <em>I <u>did</u> send the email — maybe it's in your spam.</em></p>`
    },
    tips: [
      "<strong>En el speaking:</strong> abrir con “What I find interesting is…” o “The thing that worries me is…” te da tiempo para pensar y suena muy natural.",
      "<strong>Pronunciación:</strong> en el <em>do</em> enfático, el acento cae fuerte en el auxiliar: “I DO like it”."
    ],
    dialog: [
      ["A", "You don't seem happy with the new manager.", "No pareces contento con el nuevo gerente."],
      ["B", "It's not that I don't like him. The thing is, he never listens.", "No es que no me caiga bien. La cosa es que nunca escucha."],
      ["A", "Have you told him?", "¿Se lo has dicho?"],
      ["B", "I did tell him, last week. What he did was change the subject.", "Sí se lo dije, la semana pasada. Lo que hizo fue cambiar de tema."],
      ["A", "Maybe it was HR who should've dealt with it.", "Quizás era Recursos Humanos quien debía encargarse."],
      ["B", "Exactly. What I need now is someone who actually cares.", "Exacto. Lo que necesito ahora es alguien a quien de verdad le importe."]
    ],
    quiz: [
      { q: "___ I need is a good night's sleep.", opts: ["That", "What", "Which"], a: 1 },
      { q: "It was Maria ___ told me the news.", opts: ["which", "who", "what"], a: 1 },
      { q: "It wasn't until I was 30 ___ I learned to drive.", opts: ["that", "when", "which"], a: 0 },
      { q: "Énfasis: “I locked the door!” →", opts: ["I did lock the door!", "I locked did the door!", "I do locked the door!"], a: 0 },
      { q: "What I did ___ call my lawyer.", opts: ["is", "was", "did"], a: 1 },
      { q: "Escribe: “Lo único que quiero es dormir” (All…).", fill: ["all i want is to sleep", "all i want is sleep", "all i want to do is sleep"] }
    ]
  },

  {
    id: "c1-conditionals", level: "C1",
    title: "Advanced conditionals",
    sub: "Were I to… · But for… · Supposing · Otherwise",
    intro: "A nivel C1 no basta con “if”. Aprende alternativas elegantes y formales para hipótesis, condiciones y consecuencias, muy usadas en negocios y escritura.",
    vocab: [
      ["provided / providing (that)", "siempre y cuando", "pro-VÁI-ded"], ["on condition that", "con la condición de que", "on con-DÍ-shon dat"], ["supposing / suppose", "suponiendo que", "su-PÓU-sing"], ["but for", "de no ser por", "bat FOR"],
      ["were it not for", "si no fuera por", "uer it NOT for"], ["if it hadn't been for", "si no hubiera sido por", "if it JÁ-dent bin for"], ["assuming (that)", "asumiendo que", "a-SIÚ-ming"], ["whether or not", "sea o no", "UÉ-der or not"],
      ["if so / if not", "si es así / si no", "if SOU / if NOT"], ["in the event of", "en caso de", "in di i-VÉNT ov"], ["imagine", "imagina que", "i-MÁ-yin"], ["otherwise", "de lo contrario", "Á-der-uais"]
    ],
    phrases: [
      ["Were I to win the lottery, I'd quit my job.", "Si llegara a ganar la lotería, dejaría mi trabajo.", "Were + to: muy hipotético"],
      ["Should you have any questions, please contact me.", "Si tiene alguna pregunta, por favor contácteme.", "Formal (emails)"],
      ["Had we known, we would have come earlier.", "De haberlo sabido, habríamos venido antes.", ""],
      ["But for your help, I would have failed.", "De no ser por tu ayuda, habría fallado.", ""],
      ["Were it not for the rain, we'd go hiking.", "Si no fuera por la lluvia, iríamos de excursión.", ""],
      ["Supposing you lost your job, what would you do?", "Suponiendo que perdieras tu trabajo, ¿qué harías?", ""],
      ["You can borrow it on condition that you return it by Friday.", "Puedes tomarlo prestado con la condición de que lo devuelvas el viernes.", ""],
      ["In the event of a fire, use the stairs.", "En caso de incendio, use las escaleras.", "Muy formal"]
    ],
    grammar: {
      title: "Más allá de “if”",
      html: `<table><tr><th>Estructura</th><th>Equivale a</th><th>Ejemplo</th></tr>
      <tr><td><b>Should + sujeto + verbo</b></td><td>If (por si acaso, formal)</td><td>Should you need help, call me.</td></tr>
      <tr><td><b>Were + sujeto + to + verbo</b></td><td>If (muy improbable)</td><td>Were he to resign, who'd replace him?</td></tr>
      <tr><td><b>Had + sujeto + participio</b></td><td>If + past perfect</td><td>Had I known, I'd have stayed.</td></tr>
      <tr><td><b>But for / Without + sustantivo</b></td><td>If it hadn't been for / If it weren't for</td><td>But for the traffic, we'd be there.</td></tr>
      <tr><td><b>Provided / Providing / As long as</b></td><td>Only if</td><td>You'll pass provided you revise.</td></tr>
      <tr><td><b>Supposing / Suppose / Imagine</b></td><td>What if…?</td><td>Suppose it rains, what then?</td></tr>
      <tr><td><b>Otherwise / Or else</b></td><td>If not</td><td>Leave now, otherwise you'll be late.</td></tr></table>
      <p><strong>Condicional implícito:</strong> a veces la condición está escondida: <em>I'd have called you, <u>but</u> I didn't have your number.</em> / <em>A true friend <u>would</u> have told me.</em></p>`
    },
    tips: [
      "<strong>Emails de trabajo:</strong> “Should you require any further information, please do not hesitate to contact me” es la frase formal de cierre por excelencia.",
      "<strong>Ojo:</strong> la inversión condicional nunca lleva “if”: “If had I known” ✗."
    ],
    dialog: [
      ["A", "Are you going to accept the offer from the bank?", "¿Vas a aceptar la oferta del banco?"],
      ["B", "Only provided that they let me work from home twice a week.", "Solo siempre y cuando me dejen trabajar desde casa dos veces por semana."],
      ["A", "And supposing they say no?", "¿Y suponiendo que digan que no?"],
      ["B", "Then I'll stay where I am. Were they to offer more money, though, I might reconsider.", "Entonces me quedo donde estoy. Aunque si llegaran a ofrecer más dinero, quizás lo reconsideraría."],
      ["A", "Fair enough. Had I been in your position, I'd have negotiated too.", "Justo. De haber estado en tu lugar, yo también habría negociado."],
      ["B", "But for your advice last year, I wouldn't even have applied.", "De no ser por tu consejo del año pasado, ni siquiera me habría postulado."]
    ],
    quiz: [
      { q: "___ you need anything, just let me know.", opts: ["Should", "Had", "Were"], a: 0 },
      { q: "___ we left earlier, we wouldn't have missed it.", opts: ["Should", "Had", "If had"], a: 1 },
      { q: "___ your support, I couldn't have done it.", opts: ["But for", "Unless", "Provided"], a: 0 },
      { q: "___ he to call, what would you say?", opts: ["Was", "Were", "Should"], a: 1 },
      { q: "You can go out ___ you finish your homework first.", opts: ["unless", "provided that", "otherwise"], a: 1 },
      { q: "Escribe con inversión: “If I had known…” →", fill: ["had i known", "had i known…"] }
    ]
  },

  {
    id: "c1-participle", level: "C1",
    title: "Participle clauses",
    sub: "Having finished… · Not knowing… · Built in 1900…",
    intro: "Las cláusulas de participio condensan dos ideas en una frase más corta y elegante. Son típicas de la escritura avanzada y de cualquier texto profesional.",
    vocab: [
      ["having done", "habiendo hecho / después de hacer", "JÁ-ving dan"], ["not knowing", "sin saber / como no sabía", "not NÓU-ing"], ["given that", "dado que", "GUÍ-ven dat"], ["considering", "teniendo en cuenta", "con-SÍ-de-ring"],
      ["judging by", "a juzgar por", "YÁ-ying bai"], ["generally speaking", "en términos generales", "YÉ-ne-ra-li SPÍI-king"], ["while + -ing", "mientras + gerundio", "uail"], ["on arriving", "al llegar", "on a-RÁI-ving"],
      ["upon + -ing", "al + infinitivo (formal)", "a-PÓN"], ["once completed", "una vez completado", "UANS com-PLÍI-ted"], ["if needed", "si es necesario", "if NÍI-ded"], ["unless stated otherwise", "salvo que se indique lo contrario", "an-LÉS STÉI-ted"]
    ],
    phrases: [
      ["Having finished the report, she went home.", "Después de terminar el informe, se fue a casa.", "Acción anterior"],
      ["Not knowing what to say, I kept quiet.", "Como no sabía qué decir, me quedé callado.", "Causa"],
      ["Walking down the street, I saw an old friend.", "Caminando por la calle, vi a un viejo amigo.", "Simultáneo"],
      ["Built in 1673, the cathedral is the oldest in the city.", "Construida en 1673, la catedral es la más antigua de la ciudad.", "Pasivo"],
      ["Given that we have little time, let's start.", "Dado que tenemos poco tiempo, empecemos.", ""],
      ["Judging by his face, the news wasn't good.", "A juzgar por su cara, la noticia no era buena.", ""],
      ["Upon arriving, please report to reception.", "Al llegar, preséntese en recepción.", "Formal"],
      ["Once signed, the contract cannot be changed.", "Una vez firmado, el contrato no puede cambiarse.", ""]
    ],
    grammar: {
      title: "Reducir frases con participios",
      html: `<table><tr><th>Tipo</th><th>Frase larga</th><th>Con participio</th></tr>
      <tr><td><b>-ing</b> (activo, simultáneo o causa)</td><td>Because I felt ill, I left early.</td><td><em>Feeling ill, I left early.</em></td></tr>
      <tr><td><b>Having + participio</b> (anterior)</td><td>After I had read the email, I called him.</td><td><em>Having read the email, I called him.</em></td></tr>
      <tr><td><b>Participio pasado</b> (pasivo)</td><td>The book, which was written in 1950, …</td><td><em>Written in 1950, the book…</em></td></tr>
      <tr><td><b>Negativo</b></td><td>As I didn't know the way, …</td><td><em>Not knowing the way, …</em></td></tr></table>
      <p><strong>Regla de oro:</strong> el sujeto de la cláusula y el de la frase principal deben ser el mismo. “<u>Walking</u> to work, <u>it</u> started to rain” ✗ (la lluvia no camina) → <em>Walking to work, <u>I</u> got caught in the rain.</em></p>
      <p>También con conjunción: <em>while waiting, after leaving, before signing, when asked, if needed, once completed</em>.</p>`
    },
    tips: [
      "<strong>Error típico (“dangling participle”):</strong> asegúrate de que el sujeto coincide; es lo que más revisan los examinadores de C1.",
      "<strong>Truco:</strong> úsalas en writing para variar el inicio de las frases; demuestran rango gramatical."
    ],
    dialog: [
      ["A", "How did the interview go?", "¿Cómo te fue en la entrevista?"],
      ["B", "Well, having prepared for a week, I felt pretty confident.", "Bueno, después de prepararme una semana, me sentía bastante seguro."],
      ["A", "Any difficult questions?", "¿Alguna pregunta difícil?"],
      ["B", "One. Not knowing the answer, I explained how I would find it.", "Una. Como no sabía la respuesta, expliqué cómo la encontraría."],
      ["A", "Smart. Judging by your smile, it went well.", "Inteligente. A juzgar por tu sonrisa, salió bien."],
      ["B", "Given that they've already called me back, I'd say so!", "Dado que ya me volvieron a llamar, ¡diría que sí!"]
    ],
    quiz: [
      { q: "___ the work, they went for a drink.", opts: ["Having finished", "Finished", "Have finished"], a: 0 },
      { q: "___ in 1914, the canal changed world trade.", opts: ["Opening", "Opened", "Having opened"], a: 1 },
      { q: "___ what to do, she called her mother.", opts: ["Not knowing", "Knowing not", "Didn't know"], a: 0 },
      { q: "¿Cuál es correcta?", opts: ["Driving home, the rain started.", "Driving home, I got caught in the rain.", "Driven home, I got caught in the rain."], a: 1 },
      { q: "___ arriving at the hotel, check in at reception.", opts: ["Upon", "Having", "Given"], a: 0 },
      { q: "Escribe: “Dado que…” (formal):", fill: ["given that"] }
    ]
  },

  {
    id: "c1-hedging", level: "C1",
    title: "Hedging & diplomatic language",
    sub: "It would seem that… · I'm inclined to think… · arguably",
    intro: "Un C1 sabe suavizar lo que dice: opinar sin sonar arrogante, discrepar sin ofender y dar malas noticias con tacto. Es esencial en el trabajo y en la escritura académica.",
    vocab: [
      ["arguably", "posiblemente / se podría decir", "ÁR-giu-a-bli"], ["it would seem that", "parecería que", "it uud SIIM dat"], ["tend to", "tender a", "TEND tu"], ["to some extent", "hasta cierto punto", "tu sam ex-TÉNT"],
      ["I'm inclined to think", "me inclino a pensar", "aim in-CLÁIND tu zink"], ["somewhat", "algo / un tanto", "SAM-uat"], ["a slight concern", "una pequeña preocupación", "a SLAIT con-SÉRN"], ["with all due respect", "con todo respeto", "uiz ol diu ris-PÉCT"],
      ["I see your point, but…", "entiendo tu punto, pero…", "ai SII ior point"], ["not entirely", "no del todo", "not en-TÁI-er-li"], ["it might be worth", "quizás valga la pena", "it mait bi UÉRZ"], ["I'm afraid that…", "me temo que…", "aim a-FRÉID dat"]
    ],
    phrases: [
      ["It would seem that the project is behind schedule.", "Parecería que el proyecto va atrasado.", "Suaviza una mala noticia"],
      ["I'm not entirely convinced that's the best option.", "No estoy del todo convencido de que sea la mejor opción.", "Discrepar con tacto"],
      ["I see your point, but I wonder if we've considered the costs.", "Entiendo tu punto, pero me pregunto si hemos considerado los costos.", ""],
      ["It might be worth getting a second opinion.", "Quizás valga la pena pedir una segunda opinión.", "Sugerir"],
      ["This is arguably the best film of the decade.", "Esta es, posiblemente, la mejor película de la década.", ""],
      ["People tend to underestimate how long things take.", "La gente tiende a subestimar cuánto tardan las cosas.", "Generalizar con cuidado"],
      ["I'm afraid we won't be able to meet the deadline.", "Me temo que no podremos cumplir el plazo.", ""],
      ["Would it be possible to reschedule?", "¿Sería posible reprogramar?", "Pedir con cortesía"]
    ],
    grammar: {
      title: "Herramientas para suavizar",
      html: `<table><tr><th>Herramienta</th><th>Directo</th><th>Diplomático</th></tr>
      <tr><td>Verbos de apariencia</td><td>The plan is wrong.</td><td>The plan <b>seems / appears to</b> have some issues.</td></tr>
      <tr><td>Modales</td><td>This will fail.</td><td>This <b>could / might</b> run into problems.</td></tr>
      <tr><td>Adverbios</td><td>It's too expensive.</td><td>It's <b>slightly / somewhat / a bit</b> over budget.</td></tr>
      <tr><td>Negativo + positivo</td><td>It's a bad idea.</td><td>It's <b>not the best</b> idea.</td></tr>
      <tr><td>Preguntas</td><td>Change the date.</td><td><b>Would it be possible to</b> change the date?</td></tr>
      <tr><td>Pasado / continuo</td><td>I want to ask you…</td><td><b>I was wondering if</b> I could ask you…</td></tr>
      <tr><td>Generalizar</td><td>Students are lazy.</td><td>Students <b>tend to</b> leave things until the last minute.</td></tr></table>
      <p><strong>En writing académico:</strong> <em>It could be argued that…, There is some evidence to suggest that…, This may be due to…, To a certain extent…</em></p>`
    },
    tips: [
      "<strong>Cultura:</strong> en el mundo anglosajón (sobre todo británico) la franqueza latina puede sonar brusca. “Not bad” puede ser un gran elogio y “interesting idea” puede significar “no me gusta”.",
      "<strong>Truco:</strong> “I was wondering if…” convierte cualquier petición en algo educadísimo."
    ],
    dialog: [
      ["A", "So, what do you think of my proposal?", "Entonces, ¿qué te parece mi propuesta?"],
      ["B", "It's a really interesting idea. I do have a slight concern about the budget, though.", "Es una idea muy interesante. Aunque tengo una pequeña preocupación sobre el presupuesto."],
      ["A", "You think it's too expensive?", "¿Crees que es muy caro?"],
      ["B", "It would seem to be somewhat over what we planned. It might be worth reviewing the costs.", "Parecería estar algo por encima de lo planeado. Quizás valga la pena revisar los costos."],
      ["A", "Fair point. I'll look at it again.", "Buen punto. Lo reviso otra vez."],
      ["B", "Great. I was wondering if we could discuss it on Thursday?", "Genial. Me preguntaba si podríamos hablarlo el jueves."]
    ],
    quiz: [
      { q: "La forma más diplomática de discrepar:", opts: ["You're wrong.", "I'm not entirely sure I agree.", "That's stupid."], a: 1 },
      { q: "“Arguably” significa…", opts: ["discutiblemente mal", "se podría decir que / posiblemente", "obviamente"], a: 1 },
      { q: "Petición más cortés:", opts: ["Send me the file.", "I want the file.", "I was wondering if you could send me the file."], a: 2 },
      { q: "“The figures appear ___ incorrect.”", opts: ["be", "to be", "being"], a: 1 },
      { q: "“Interesting idea” en una reunión británica puede significar…", opts: ["Me encanta", "No me convence mucho", "Es perfecta"], a: 1 },
      { q: "Escribe “Me temo que…”:", fill: ["i'm afraid that", "i'm afraid", "i am afraid that"] }
    ]
  },

  {
    id: "c1-collocations", level: "C1",
    title: "Collocations & word formation",
    sub: "make a decision · heavy rain · un- / -ness / -ity",
    intro: "Un C1 no se nota por palabras raras, sino por combinaciones naturales: “heavy rain”, no “strong rain”. Además, aprende a formar familias de palabras con prefijos y sufijos.",
    vocab: [
      ["make a decision", "tomar una decisión", "meik a di-SÍ-shon"], ["take a break", "tomar un descanso", "teik a BREIK"], ["pay attention", "prestar atención", "pei a-TÉN-shon"], ["do research", "investigar", "du ri-SÉRCH"],
      ["heavy rain / traffic", "lluvia fuerte / tráfico denso", "JÉ-vi rein"], ["strong coffee", "café cargado", "strong CÓ-fi"], ["bitterly disappointed", "profundamente decepcionado", "BÍ-ter-li"], ["highly recommended", "muy recomendado", "JÁI-li re-co-MÉN-ded"],
      ["raise awareness", "concienciar", "reis a-UÉR-nes"], ["meet a deadline", "cumplir un plazo", "miit a DÉD-lain"], ["reach an agreement", "llegar a un acuerdo", "riich an a-GRÍI-ment"], ["draw a conclusion", "sacar una conclusión", "dro a con-CLÚ-shon"]
    ],
    phrases: [
      ["We need to make a decision by Friday.", "Tenemos que tomar una decisión antes del viernes.", "make (no take) a decision"],
      ["There was heavy traffic on the way.", "Había mucho tráfico en el camino.", "heavy (no much/strong)"],
      ["I'm bitterly disappointed with the result.", "Estoy profundamente decepcionado con el resultado.", ""],
      ["The hotel comes highly recommended.", "El hotel viene muy recomendado.", ""],
      ["The campaign aims to raise awareness of climate change.", "La campaña busca concienciar sobre el cambio climático.", ""],
      ["It's hard to draw any conclusions from such little data.", "Es difícil sacar conclusiones de tan pocos datos.", ""],
      ["Her behaviour was completely unacceptable.", "Su comportamiento fue totalmente inaceptable.", "un + accept + able"],
      ["The reliability of the system has improved.", "La fiabilidad del sistema ha mejorado.", "rely → reliable → reliability"]
    ],
    grammar: {
      title: "Collocations y formación de palabras",
      html: `<table><tr><th>Make</th><th>Do</th><th>Take</th><th>Have</th></tr>
      <tr><td>a decision, a mistake, money, progress, an effort, a complaint, sense</td><td>research, homework, business, a favour, damage, your best, exercise</td><td>a break, a risk, place, part in, advantage of, responsibility</td><td>a go, fun, a look, an argument, a word with sb</td></tr></table>
      <p><strong>Adjetivo + sustantivo:</strong> heavy rain/traffic/smoker, strong coffee/accent/wind, deep sleep/regret, high price/quality, bright future, vast majority.</p>
      <p><strong>Adverbio + adjetivo:</strong> highly unlikely, deeply concerned, fully aware, utterly exhausted, painfully slow, perfectly normal.</p>
      <table><tr><th>Sufijo / prefijo</th><th>Forma</th><th>Ejemplos</th></tr>
      <tr><td>-ness, -ity, -ment, -tion</td><td>sustantivos</td><td>aware<b>ness</b>, reliab<b>ility</b>, develop<b>ment</b>, inform<b>ation</b></td></tr>
      <tr><td>-ful, -less, -ous, -ive, -able</td><td>adjetivos</td><td>care<b>ful</b>, home<b>less</b>, danger<b>ous</b>, effect<b>ive</b>, afford<b>able</b></td></tr>
      <tr><td>-ise/-ize, -en, -ify</td><td>verbos</td><td>modern<b>ise</b>, wid<b>en</b>, simpl<b>ify</b></td></tr>
      <tr><td>un-, in-, im-, ir-, il-, dis-, mis-</td><td>negativos</td><td><b>un</b>likely, <b>in</b>efficient, <b>im</b>possible, <b>ir</b>relevant, <b>il</b>legal, <b>dis</b>agree, <b>mis</b>understand</td></tr>
      <tr><td>over-, under-, re-, out-</td><td>matices</td><td><b>over</b>estimate, <b>under</b>paid, <b>re</b>think, <b>out</b>perform</td></tr></table>`
    },
    tips: [
      "<strong>Truco:</strong> cuando aprendas una palabra, anota con qué verbo y adjetivo va: no “decision”, sino “make / reach a tough decision”.",
      "<strong>Herramienta:</strong> el diccionario <em>Oxford Collocations</em> (o ozdic.com) te dice qué palabras combinan; úsalo al escribir."
    ],
    dialog: [
      ["A", "Have you made a decision about the course?", "¿Ya tomaste una decisión sobre el curso?"],
      ["B", "Not yet. I've done some research and it comes highly recommended.", "Todavía no. He investigado y viene muy recomendado."],
      ["A", "So what's stopping you?", "¿Entonces qué te frena?"],
      ["B", "Honestly, the price is a bit unreasonable for my budget.", "Sinceramente, el precio es algo excesivo para mi presupuesto."],
      ["A", "Maybe you could take advantage of the early-bird discount.", "Quizás podrías aprovechar el descuento por inscripción anticipada."],
      ["B", "Good idea. That would make a big difference.", "Buena idea. Eso marcaría una gran diferencia."]
    ],
    quiz: [
      { q: "We have to ___ a decision today.", opts: ["do", "make", "take"], a: 1 },
      { q: "There was ___ rain all night.", opts: ["strong", "heavy", "big"], a: 1 },
      { q: "I need to ___ some research before the meeting.", opts: ["make", "do", "have"], a: 1 },
      { q: "Sustantivo de “aware”:", opts: ["awareness", "awarity", "awarement"], a: 0 },
      { q: "Opuesto de “relevant”:", opts: ["unrelevant", "irrelevant", "disrelevant"], a: 1 },
      { q: "Escribe “cumplir un plazo” (deadline):", fill: ["meet a deadline", "meet the deadline"] }
    ]
  },

  {
    id: "c1-idioms", level: "C1",
    title: "Idioms & natural phrasal verbs",
    sub: "Hablar como nativo sin sonar forzado",
    intro: "Lo que más separa a un C1 de un B2 al hablar es la naturalidad: phrasal verbs bien usados y algunas expresiones idiomáticas en el momento justo (sin abusar).",
    vocab: [
      ["get the ball rolling", "poner las cosas en marcha", "guet di BOL RÓU-ling"], ["a piece of cake", "pan comido", "a PIIS ov keik"], ["cost an arm and a leg", "costar un ojo de la cara", "cost an ARM and a leg"], ["hit the nail on the head", "dar en el clavo", "jit di NEIL"],
      ["break the ice", "romper el hielo", "breik di AIS"], ["on the same page", "en la misma sintonía", "on di seim PEICH"], ["call it a day", "dar por terminado (el día)", "col it a DEI"], ["the elephant in the room", "el tema que nadie menciona", "di É-le-fant"],
      ["bring up", "sacar (un tema)", "bring AP"], ["put off", "posponer / desanimar", "put OF"], ["come across", "encontrarse con / dar la impresión", "cam a-CRÓS"], ["figure out", "descifrar / entender", "FÍ-guer ÁUT"]
    ],
    phrases: [
      ["Let's get the ball rolling with the first item.", "Pongamos en marcha el primer punto.", "Reuniones"],
      ["You hit the nail on the head.", "Diste en el clavo.", ""],
      ["I think we're all on the same page now.", "Creo que ya estamos todos en la misma sintonía.", ""],
      ["It's late. Let's call it a day.", "Es tarde. Dejémoslo por hoy.", ""],
      ["He brought up an interesting point.", "Sacó un punto interesante.", "bring up"],
      ["Don't put off your studies until next year.", "No pospongas tus estudios hasta el próximo año.", "put off"],
      ["She comes across as very confident.", "Da la impresión de ser muy segura.", "come across as"],
      ["I can't figure out how this works.", "No logro entender cómo funciona esto.", "figure out"]
    ],
    grammar: {
      title: "Phrasal verbs: separables o no",
      html: `<table><tr><th>Tipo</th><th>Regla</th><th>Ejemplo</th></tr>
      <tr><td><b>Separables</b></td><td>el objeto puede ir en medio o al final; si es pronombre, <u>siempre en medio</u></td><td>turn off the light / turn the light off / turn <b>it</b> off (no “turn off it”)</td></tr>
      <tr><td><b>Inseparables</b></td><td>el objeto siempre va después</td><td>look after the kids / look after <b>them</b></td></tr>
      <tr><td><b>Intransitivos</b></td><td>sin objeto</td><td>The plane took off. My car broke down.</td></tr>
      <tr><td><b>De 3 partes</b></td><td>inseparables</td><td>I'm looking forward to it. / We ran out of milk.</td></tr></table>
      <p><strong>Un mismo phrasal verb, varios significados:</strong> <em>take off</em> (despegar / quitarse ropa / tener éxito de repente), <em>pick up</em> (recoger / aprender sin estudiar / contestar el teléfono), <em>make up</em> (inventar / reconciliarse / maquillarse / componer).</p>
      <p><strong>Registro:</strong> los phrasal verbs son más informales que su sinónimo latino: <em>find out ↔ discover, put off ↔ postpone, go up ↔ increase</em>. En un ensayo formal, usa el latino.</p>`
    },
    tips: [
      "<strong>Ojo con los idioms:</strong> un idiom mal usado suena peor que no usarlo. Úsalos solo cuando los hayas oído varias veces en contexto.",
      "<strong>Técnica:</strong> aprende los phrasal verbs por tema (trabajo, relaciones, viajes), no por partícula, y siempre con una frase de ejemplo."
    ],
    dialog: [
      ["A", "OK everyone, let's get the ball rolling.", "Bien, todos, pongamos las cosas en marcha."],
      ["B", "Before we start, can I bring up the budget issue?", "Antes de empezar, ¿puedo sacar el tema del presupuesto?"],
      ["A", "Sure. That's been the elephant in the room for weeks.", "Claro. Eso ha sido el tema que nadie menciona desde hace semanas."],
      ["B", "We can't keep putting it off. The new software costs an arm and a leg.", "No podemos seguir posponiéndolo. El software nuevo cuesta un ojo de la cara."],
      ["A", "You've hit the nail on the head. Let's figure out some options.", "Diste en el clavo. Busquemos algunas opciones."],
      ["B", "Great. And then maybe we can call it a day.", "Genial. Y después quizás podamos dejarlo por hoy."]
    ],
    quiz: [
      { q: "“Costar un ojo de la cara” =", opts: ["cost an eye of the face", "cost an arm and a leg", "cost a fortune of eyes"], a: 1 },
      { q: "The light is on. Can you turn ___?", opts: ["off it", "it off", "it of"], a: 1 },
      { q: "“Romper el hielo” =", opts: ["break the ice", "crack the cold", "open the ice"], a: 0 },
      { q: "We ___ milk. Can you buy some?", opts: ["ran out of", "ran off", "ran over"], a: 0 },
      { q: "She ___ as a bit arrogant, but she's lovely.", opts: ["comes across", "comes up", "comes over to"], a: 0 },
      { q: "Escribe el phrasal verb de “posponer”:", fill: ["put off"] }
    ]
  },

  {
    id: "c1-register", level: "C1",
    title: "Formal register & nominalisation",
    sub: "Emails profesionales, informes y lenguaje académico",
    intro: "Saber cambiar de registro (de un chat con amigos a un informe para la dirección) es una habilidad central del C1. La nominalización convierte verbos en sustantivos y da a tus textos un tono profesional.",
    vocab: [
      ["regarding / with regard to", "en relación con", "ri-GÁR-ding"], ["in accordance with", "de acuerdo con", "in a-CÓR-dans uiz"], ["prior to", "antes de (formal)", "PRÁI-or tu"], ["subsequently", "posteriormente", "SÁB-se-cuent-li"],
      ["approximately", "aproximadamente", "a-PRÓK-si-mat-li"], ["sufficient", "suficiente", "su-FÍ-shent"], ["obtain", "obtener", "ob-TÉIN"], ["commence", "comenzar (formal)", "co-MÉNS"],
      ["inquire / enquire", "preguntar (formal)", "in-CUÁIER"], ["assistance", "ayuda / asistencia", "a-SÍS-tans"], ["furthermore", "además", "FÉR-der-mor"], ["nonetheless", "no obstante", "nan-de-LÉS"]
    ],
    phrases: [
      ["I am writing with regard to your recent enquiry.", "Le escribo en relación con su reciente consulta.", "Apertura formal"],
      ["Please find attached the requested documents.", "Adjunto los documentos solicitados.", ""],
      ["I would be grateful if you could confirm receipt.", "Le agradecería que confirmara la recepción.", ""],
      ["Prior to the meeting, please review the agenda.", "Antes de la reunión, revise la agenda.", ""],
      ["The implementation of the new policy led to a reduction in costs.", "La implementación de la nueva política llevó a una reducción de costos.", "Nominalización"],
      ["There has been a significant increase in demand.", "Ha habido un aumento significativo de la demanda.", ""],
      ["Should you require further assistance, do not hesitate to contact us.", "Si necesita más ayuda, no dude en contactarnos.", "Cierre formal"],
      ["I look forward to hearing from you.", "Quedo a la espera de su respuesta.", ""]
    ],
    grammar: {
      title: "Del registro informal al formal",
      html: `<table><tr><th>Informal</th><th>Formal</th></tr>
      <tr><td>get</td><td>obtain / receive</td></tr>
      <tr><td>ask</td><td>enquire / request</td></tr>
      <tr><td>help</td><td>assist / assistance</td></tr>
      <tr><td>start / begin</td><td>commence</td></tr>
      <tr><td>find out</td><td>discover / ascertain</td></tr>
      <tr><td>about</td><td>regarding / concerning</td></tr>
      <tr><td>before / after</td><td>prior to / following</td></tr>
      <tr><td>but / so</td><td>however / therefore</td></tr>
      <tr><td>enough</td><td>sufficient</td></tr></table>
      <p><strong>Nominalización:</strong> convertir verbos o adjetivos en sustantivos.</p>
      <table><tr><th>Con verbos (normal)</th><th>Nominalizado (formal)</th></tr>
      <tr><td>Prices increased sharply, so people bought less.</td><td><em>The sharp <b>increase</b> in prices led to a <b>fall</b> in consumption.</em></td></tr>
      <tr><td>We analysed the data and found that…</td><td><em><b>Analysis</b> of the data revealed that…</em></td></tr>
      <tr><td>Because the company was late delivering…</td><td><em>Due to the <b>delay</b> in <b>delivery</b>…</em></td></tr></table>
      <p>Otros rasgos formales: no contracciones (<em>I am, do not</em>), pasiva e impersonal (<em>It is recommended that…</em>), frases completas y sin phrasal verbs coloquiales.</p>`
    },
    tips: [
      "<strong>Ojo:</strong> no exageres. Un email de trabajo moderno en inglés es más directo que uno en español: claro, cortés y breve gana.",
      "<strong>Para C1 (CAE/IELTS):</strong> los examinadores valoran que adaptes el registro a la tarea: carta formal ≠ email a un amigo ≠ artículo para una revista."
    ],
    dialog: [
      ["A", "Can you help me make this email sound more professional?", "¿Me ayudas a que este email suene más profesional?"],
      ["B", "Sure. Instead of “I want to know about the job”, try “I am writing to enquire about the position”.", "Claro. En vez de “quiero saber del trabajo”, prueba “le escribo para consultar sobre el puesto”."],
      ["A", "And “Send me the info”?", "¿Y “Mándame la info”?"],
      ["B", "“I would be grateful if you could send me further information.”", "“Le agradecería que me enviara más información.”"],
      ["A", "That sounds much better. How do I finish?", "Suena mucho mejor. ¿Cómo termino?"],
      ["B", "“I look forward to hearing from you. Kind regards.” Done!", "“Quedo a la espera de su respuesta. Saludos cordiales.” ¡Listo!"]
    ],
    quiz: [
      { q: "Equivalente formal de “ask”:", opts: ["enquire", "find out", "get"], a: 0 },
      { q: "Equivalente formal de “before”:", opts: ["prior to", "after that", "previous"], a: 0 },
      { q: "Nominaliza: “Prices rose” → “The ___ in prices…”", opts: ["rise", "rising", "rose"], a: 0 },
      { q: "Cierre formal de email:", opts: ["See ya!", "I look forward to hearing from you.", "Write me soon, OK?"], a: 1 },
      { q: "En un informe formal es mejor…", opts: ["usar contracciones", "evitar contracciones", "usar muchos phrasal verbs"], a: 1 },
      { q: "Escribe la apertura: “Le escribo en relación con…” (with regard to).", fill: ["i am writing with regard to", "i'm writing with regard to"] }
    ]
  }
];
