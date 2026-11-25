// Lecturas del curso English B1→C1. text y es son listas de párrafos (misma cantidad).
// glossary: [inglés, español] · questions: { q, opts, a }

const LETTURE = [
  // ============ B1 ============
  {
    id: "b1-remote", level: "B1", type: "📝 Blog", title: "My first year working from home",
    text: [
      "When my company told us that we could work from home permanently, I was thrilled. No more traffic, no more expensive lunches and no more waking up at five in the morning. A year later, I have to admit that the reality has been a bit more complicated.",
      "At first, everything was great. I used to start work at eight in my pyjamas and I saved a lot of money. However, after a few months I realised that I was working longer hours than before. Without a clear end to the day, I kept checking emails until nine or ten at night.",
      "The biggest challenge, though, has been loneliness. I hadn't realised how much I enjoyed chatting with my colleagues at the coffee machine. Video calls are useful, but they aren't the same as having lunch together.",
      "So I've made some changes. I now have a fixed schedule, I go to a co-working space twice a week and I've joined a running club. If I could give one piece of advice to new remote workers, it would be this: create a routine and protect it."
    ],
    es: [
      "Cuando mi empresa nos dijo que podíamos trabajar desde casa de forma permanente, me puse feliz. Se acabó el tráfico, los almuerzos caros y despertarme a las cinco de la mañana. Un año después, tengo que admitir que la realidad ha sido un poco más complicada.",
      "Al principio todo era genial. Empezaba a trabajar a las ocho en pijama y ahorraba mucho dinero. Sin embargo, después de unos meses me di cuenta de que trabajaba más horas que antes. Sin un final claro del día, seguía revisando correos hasta las nueve o diez de la noche.",
      "El mayor reto, sin embargo, ha sido la soledad. No me había dado cuenta de cuánto disfrutaba charlar con mis compañeros junto a la máquina de café. Las videollamadas son útiles, pero no es lo mismo que almorzar juntos.",
      "Así que he hecho algunos cambios. Ahora tengo un horario fijo, voy a un espacio de co-working dos veces por semana y me uní a un club de corredores. Si pudiera dar un consejo a quienes empiezan a trabajar en remoto, sería este: crea una rutina y protégela."
    ],
    glossary: [["thrilled", "encantado"], ["realise", "darse cuenta"], ["loneliness", "soledad"], ["co-working space", "espacio de trabajo compartido"], ["fixed schedule", "horario fijo"]],
    questions: [
      { q: "¿Cómo se sintió al principio con la noticia?", opts: ["Preocupado", "Muy contento", "Indiferente"], a: 1 },
      { q: "¿Qué problema descubrió después de unos meses?", opts: ["Ganaba menos", "Trabajaba más horas", "No tenía internet"], a: 1 },
      { q: "¿Cuál ha sido el mayor reto?", opts: ["La soledad", "El ruido", "La tecnología"], a: 0 },
      { q: "¿Qué cambio NO menciona?", opts: ["Un horario fijo", "Ir a un co-working", "Volver a la oficina todos los días"], a: 2 },
      { q: "“I used to start work at eight” significa…", opts: ["Empiezo a las ocho", "Solía empezar a las ocho", "Estoy acostumbrado a empezar a las ocho"], a: 1 }
    ]
  },
  {
    id: "b1-complaint", level: "B1", type: "📧 Email", title: "A complaint to a hotel",
    text: [
      "Dear Sir or Madam, I am writing to complain about my recent stay at your hotel from 3rd to 6th March. I had booked a sea-view room, but when I arrived I was given a small room overlooking the car park.",
      "When I spoke to the receptionist, she said that the hotel was full and that nothing could be done. Moreover, the air conditioning in the room didn't work properly, so I couldn't sleep well during the whole stay.",
      "I had chosen your hotel because of its excellent reviews, so I was extremely disappointed. I would be grateful if you could refund the difference between the two rooms, which was $40 per night.",
      "I look forward to hearing from you. Yours faithfully, Jonathan Page"
    ],
    es: [
      "Estimado señor o señora: le escribo para quejarme de mi reciente estancia en su hotel del 3 al 6 de marzo. Había reservado una habitación con vista al mar, pero cuando llegué me dieron una habitación pequeña con vista al estacionamiento.",
      "Cuando hablé con la recepcionista, me dijo que el hotel estaba lleno y que no se podía hacer nada. Además, el aire acondicionado de la habitación no funcionaba bien, así que no pude dormir bien durante toda la estancia.",
      "Había elegido su hotel por sus excelentes reseñas, así que me sentí muy decepcionado. Le agradecería que me reembolsara la diferencia entre las dos habitaciones, que era de 40 dólares por noche.",
      "Quedo a la espera de su respuesta. Atentamente, Jonathan Page"
    ],
    glossary: [["complain", "quejarse"], ["overlooking", "con vista a"], ["moreover", "además"], ["refund", "reembolsar"], ["Yours faithfully", "atentamente (si no sabes el nombre)"]],
    questions: [
      { q: "¿Qué tipo de habitación había reservado?", opts: ["Con vista al mar", "Con vista al estacionamiento", "Una suite"], a: 0 },
      { q: "¿Qué otro problema tuvo?", opts: ["El wifi", "El aire acondicionado", "El desayuno"], a: 1 },
      { q: "¿Por qué eligió ese hotel?", opts: ["Por el precio", "Por las buenas reseñas", "Por la ubicación"], a: 1 },
      { q: "¿Qué pide?", opts: ["Una noche gratis", "Que le devuelvan la diferencia", "Hablar con el gerente"], a: 1 },
      { q: "¿Por qué termina con “Yours faithfully”?", opts: ["Porque es informal", "Porque empezó con Dear Sir or Madam", "Porque conoce al gerente"], a: 1 }
    ]
  },
  {
    id: "b1-habits", level: "B1", type: "📰 Artículo", title: "How long does it take to form a habit?",
    text: [
      "You've probably heard that it takes 21 days to form a new habit. It sounds nice, but it isn't true. The idea comes from a book written in the 1960s by a surgeon who noticed that his patients needed about three weeks to get used to their new faces.",
      "In 2009, researchers at University College London studied 96 people who were trying to build a new habit, such as drinking water at lunch or going for a run before dinner. They found that, on average, it took 66 days for the new behaviour to become automatic. For some people it took only 18 days; for others, more than 200.",
      "The good news is that missing one day didn't make a real difference. What mattered was repetition in the same context: doing the habit at the same time and in the same place.",
      "So if you want to study English every day, don't give up after three weeks. Choose a fixed moment, such as after breakfast, keep going for at least two months, and don't worry if you miss a day."
    ],
    es: [
      "Probablemente has oído que se necesitan 21 días para formar un hábito nuevo. Suena bien, pero no es verdad. La idea viene de un libro escrito en los años 60 por un cirujano que notó que sus pacientes necesitaban unas tres semanas para acostumbrarse a sus caras nuevas.",
      "En 2009, investigadores del University College London estudiaron a 96 personas que intentaban crear un hábito nuevo, como tomar agua en el almuerzo o salir a correr antes de cenar. Descubrieron que, de media, el nuevo comportamiento tardaba 66 días en volverse automático. Para algunas personas solo 18 días; para otras, más de 200.",
      "La buena noticia es que saltarse un día no marcaba una diferencia real. Lo que importaba era la repetición en el mismo contexto: hacer el hábito a la misma hora y en el mismo lugar.",
      "Así que si quieres estudiar inglés todos los días, no te rindas después de tres semanas. Elige un momento fijo, como después del desayuno, sigue al menos dos meses y no te preocupes si te saltas un día."
    ],
    glossary: [["surgeon", "cirujano"], ["on average", "de media / en promedio"], ["behaviour", "comportamiento"], ["give up", "rendirse"], ["keep going", "seguir adelante"]],
    questions: [
      { q: "¿De dónde viene la idea de los 21 días?", opts: ["De un estudio de 2009", "De un libro de un cirujano", "De una universidad"], a: 1 },
      { q: "¿Cuánto tardó de media en formarse un hábito?", opts: ["21 días", "66 días", "200 días"], a: 1 },
      { q: "¿Qué pasaba si alguien se saltaba un día?", opts: ["Tenía que empezar de nuevo", "No había una diferencia real", "Tardaba el doble"], a: 1 },
      { q: "¿Qué era lo más importante?", opts: ["Repetir en el mismo contexto", "Hacerlo muy temprano", "Hacerlo con amigos"], a: 0 },
      { q: "“It took 66 days to become automatic” — “it took” significa…", opts: ["tomó (bebida)", "tardó / se necesitaron", "llevó (objeto)"], a: 1 }
    ]
  },

  // ============ B2 ============
  {
    id: "b2-cities", level: "B2", type: "📰 Opinion piece", title: "Should cities ban cars from their centres?",
    text: [
      "Over the past decade, a growing number of European cities have restricted or banned private cars from their historic centres. Oslo, Madrid and Ghent are often cited as success stories: air quality has improved, noise levels have dropped and local businesses, contrary to what many feared, have generally benefited from the increase in pedestrians.",
      "Critics, however, argue that such policies hit the most vulnerable hardest. People who live on the outskirts and depend on their cars to get to work may find themselves facing longer journeys, especially where public transport is unreliable. Elderly and disabled residents have also raised concerns about access to shops and services.",
      "Supporters respond that the solution is not to keep cars in city centres but to invest heavily in buses, trams and safe cycling routes before introducing restrictions. In their view, a car ban should be the final step of a broader plan rather than a sudden change imposed overnight.",
      "What seems clear is that the debate is less about cars themselves than about what kind of cities we want to live in. Whether a ban works depends largely on how it is designed, communicated and, above all, on whether residents are offered realistic alternatives."
    ],
    es: [
      "Durante la última década, un número creciente de ciudades europeas ha restringido o prohibido los carros privados en sus centros históricos. Oslo, Madrid y Gante se citan a menudo como casos de éxito: la calidad del aire ha mejorado, el ruido ha disminuido y los comercios locales, al contrario de lo que muchos temían, en general se han beneficiado del aumento de peatones.",
      "Los críticos, sin embargo, sostienen que estas políticas golpean más fuerte a los más vulnerables. Quienes viven en las afueras y dependen del carro para ir a trabajar pueden enfrentarse a trayectos más largos, sobre todo donde el transporte público no es fiable. Las personas mayores y con discapacidad también han expresado su preocupación por el acceso a tiendas y servicios.",
      "Los defensores responden que la solución no es mantener los carros en los centros, sino invertir fuertemente en buses, tranvías y ciclovías seguras antes de introducir restricciones. En su opinión, una prohibición debería ser el último paso de un plan más amplio y no un cambio repentino impuesto de la noche a la mañana.",
      "Lo que parece claro es que el debate trata menos de los carros en sí que del tipo de ciudad en la que queremos vivir. Que una prohibición funcione depende en gran medida de cómo se diseña y se comunica y, sobre todo, de si se ofrece a los residentes alternativas realistas."
    ],
    glossary: [["cited as", "citado como"], ["outskirts", "afueras"], ["unreliable", "poco fiable"], ["raise concerns", "expresar preocupación"], ["overnight", "de la noche a la mañana"]],
    questions: [
      { q: "According to the text, what happened to local businesses in cities with bans?", opts: ["They generally lost customers", "They generally benefited", "Most of them closed"], a: 1 },
      { q: "Who do critics say are most affected?", opts: ["Tourists", "Vulnerable people such as those living on the outskirts", "Shop owners"], a: 1 },
      { q: "What do supporters say should happen first?", opts: ["A sudden ban", "Investment in public transport and cycling", "Higher fuel taxes"], a: 1 },
      { q: "What is the writer's overall position?", opts: ["Strongly against bans", "Strongly in favour of immediate bans", "Balanced: it depends on design and alternatives"], a: 2 },
      { q: "“Contrary to what many feared” means…", opts: ["as many expected", "the opposite of what many were afraid of", "because many were afraid"], a: 1 }
    ]
  },
  {
    id: "b2-memory", level: "B2", type: "🔬 Science", title: "Why we forget — and how to remember more",
    text: [
      "In the 1880s, the German psychologist Hermann Ebbinghaus spent years memorising lists of meaningless syllables and testing himself at different intervals. His results produced what is now known as the “forgetting curve”: within a day of learning something new, we typically lose more than half of it unless we review it.",
      "Ebbinghaus also discovered something more encouraging. Each time information is reviewed, the curve becomes flatter, meaning that we forget it more slowly. This is the principle behind spaced repetition, a technique in which material is reviewed at gradually increasing intervals — after one day, three days, a week, and so on.",
      "Modern research has added another key idea: retrieval practice. Simply rereading notes creates an illusion of knowledge, whereas actively trying to recall information — for example, by testing yourself — strengthens memory far more effectively, even if you get the answer wrong.",
      "For language learners, the implications are clear. Rather than spending hours rereading vocabulary lists, it is better to test yourself for a few minutes every day, ideally using a system that schedules reviews for you. It may feel harder, but that difficulty is precisely what makes the learning stick."
    ],
    es: [
      "En la década de 1880, el psicólogo alemán Hermann Ebbinghaus pasó años memorizando listas de sílabas sin sentido y evaluándose a distintos intervalos. Sus resultados produjeron lo que hoy se conoce como la “curva del olvido”: en un día después de aprender algo nuevo, normalmente perdemos más de la mitad a menos que lo repasemos.",
      "Ebbinghaus también descubrió algo más alentador. Cada vez que se repasa la información, la curva se vuelve más plana, lo que significa que la olvidamos más despacio. Este es el principio detrás de la repetición espaciada, una técnica en la que el material se repasa a intervalos cada vez mayores: después de un día, tres días, una semana, etc.",
      "La investigación moderna ha añadido otra idea clave: la práctica de recuperación. Releer apuntes crea una ilusión de conocimiento, mientras que intentar recordar activamente la información (por ejemplo, poniéndote a prueba) refuerza la memoria mucho más eficazmente, incluso si te equivocas.",
      "Para quienes aprenden idiomas, las implicaciones son claras. En lugar de pasar horas releyendo listas de vocabulario, es mejor ponerse a prueba unos minutos cada día, idealmente con un sistema que programe los repasos por ti. Puede parecer más difícil, pero esa dificultad es justamente lo que hace que el aprendizaje se quede."
    ],
    glossary: [["meaningless", "sin sentido"], ["interval", "intervalo"], ["encouraging", "alentador"], ["retrieval", "recuperación"], ["stick", "quedarse / fijarse"]],
    questions: [
      { q: "What is the “forgetting curve”?", opts: ["A way to memorise lists", "How quickly we forget information without review", "A type of syllable"], a: 1 },
      { q: "What happens to the curve each time we review?", opts: ["It becomes steeper", "It becomes flatter", "It disappears"], a: 1 },
      { q: "According to the text, why is rereading notes not very effective?", opts: ["It takes too long", "It creates an illusion of knowledge", "It's boring"], a: 1 },
      { q: "What does retrieval practice involve?", opts: ["Actively trying to recall information", "Reading slowly", "Listening to music"], a: 0 },
      { q: "“That difficulty is precisely what makes the learning stick.” The writer suggests that…", opts: ["easy methods are best", "effortful practice helps memory", "we should avoid mistakes"], a: 1 }
    ]
  },
  {
    id: "b2-interview", level: "B2", type: "💼 Careers", title: "The interview question everyone gets wrong",
    text: [
      "“So, tell me about yourself.” It's usually the first question in a job interview, and it's surprisingly easy to get wrong. Many candidates either recite their entire CV, starting from secondary school, or share far too much personal information. Neither approach does them any favours.",
      "Recruiters say the question is really asking something else: “Why are you a good fit for this role?” A strong answer typically follows a simple structure — present, past, future. Start with what you are currently doing, mention one or two past experiences that are relevant to the job, and finish by explaining why you are interested in this particular position.",
      "The answer should last no more than two minutes. It's worth preparing it in advance and practising it out loud, but you shouldn't memorise it word for word, or it will sound robotic. Instead, remember the key points and a couple of concrete examples, ideally with numbers: “I reduced response times by 30%” is far more memorable than “I'm very efficient”.",
      "Finally, remember that interviews are a two-way process. Ending your answer with a link to the company — “That's why I was so excited to see this opening in your team” — shows that you have done your research and gives the conversation a natural direction."
    ],
    es: [
      "“Entonces, háblame de ti.” Suele ser la primera pregunta de una entrevista de trabajo, y es sorprendentemente fácil responderla mal. Muchos candidatos o recitan todo su CV, empezando por la secundaria, o comparten demasiada información personal. Ninguno de los dos enfoques les ayuda.",
      "Los reclutadores dicen que la pregunta en realidad pregunta otra cosa: “¿Por qué encajas bien en este puesto?”. Una buena respuesta suele seguir una estructura simple: presente, pasado, futuro. Empieza por lo que haces actualmente, menciona una o dos experiencias pasadas relevantes para el trabajo y termina explicando por qué te interesa este puesto en particular.",
      "La respuesta no debería durar más de dos minutos. Vale la pena prepararla y practicarla en voz alta, pero no deberías memorizarla palabra por palabra o sonará robótica. En cambio, recuerda los puntos clave y un par de ejemplos concretos, idealmente con números: “Reduje los tiempos de respuesta un 30%” se recuerda mucho más que “Soy muy eficiente”.",
      "Por último, recuerda que las entrevistas van en las dos direcciones. Terminar tu respuesta con un vínculo con la empresa (“Por eso me entusiasmó tanto ver esta vacante en su equipo”) demuestra que investigaste y le da a la conversación una dirección natural."
    ],
    glossary: [["recite", "recitar"], ["does them no favours", "no les ayuda"], ["good fit", "buena opción / encaja bien"], ["word for word", "palabra por palabra"], ["opening", "vacante"]],
    questions: [
      { q: "What mistake do many candidates make?", opts: ["They answer too briefly", "They recite their whole CV or share too much personal information", "They ask too many questions"], a: 1 },
      { q: "What is the question really asking, according to recruiters?", opts: ["Where you grew up", "Why you are a good fit for the role", "How much money you want"], a: 1 },
      { q: "What structure is recommended?", opts: ["Past, present, future", "Present, past, future", "Future, past, present"], a: 1 },
      { q: "Why shouldn't you memorise the answer word for word?", opts: ["It will sound robotic", "It takes too long", "Recruiters don't like preparation"], a: 0 },
      { q: "What does ending with a link to the company show?", opts: ["That you are nervous", "That you have researched the company", "That you want a higher salary"], a: 1 }
    ]
  },

  // ============ C1 ============
  {
    id: "c1-bilingual", level: "C1", type: "🎓 Essay", title: "The bilingual advantage: myth or reality?",
    text: [
      "For much of the twentieth century, bilingualism was regarded with suspicion. Parents were routinely advised to raise their children in a single language, lest exposure to two should confuse them or delay their development. It was not until the 1960s that researchers began to challenge this view, and by the 2000s the pendulum had swung decisively in the opposite direction.",
      "A series of influential studies suggested that bilinguals outperformed monolinguals on tasks requiring attention control and the ability to switch between tasks — so-called executive functions. The explanation seemed intuitive: since both languages are constantly active in a bilingual brain, speakers must continually suppress one of them, thereby exercising a kind of mental muscle.",
      "More recent research, however, has painted a considerably more nuanced picture. Several large-scale studies have failed to replicate the original findings, and some researchers argue that the so-called “bilingual advantage” may have been, at least in part, an artefact of small samples and publication bias, whereby positive results are more likely to be published than null ones.",
      "This is not to say that learning another language is without benefits. Quite the opposite: the social, cultural and professional rewards are well documented, and there is some evidence that bilingualism may delay the onset of dementia symptoms. What the debate does illustrate is how easily an appealing idea can outrun the evidence — and why scientific claims, however intuitive, warrant a healthy dose of scepticism."
    ],
    es: [
      "Durante gran parte del siglo XX, el bilingüismo se veía con recelo. A los padres se les aconsejaba habitualmente criar a sus hijos en un solo idioma, no fuera a ser que la exposición a dos los confundiera o retrasara su desarrollo. No fue hasta los años 60 que los investigadores empezaron a cuestionar esta idea, y para los 2000 el péndulo había oscilado claramente en la dirección opuesta.",
      "Una serie de estudios influyentes sugirió que los bilingües superaban a los monolingües en tareas que requerían control de la atención y la capacidad de cambiar entre tareas, las llamadas funciones ejecutivas. La explicación parecía intuitiva: como ambos idiomas están constantemente activos en un cerebro bilingüe, los hablantes deben suprimir continuamente uno de ellos, ejercitando así una especie de músculo mental.",
      "Investigaciones más recientes, sin embargo, han dibujado un panorama considerablemente más matizado. Varios estudios a gran escala no han logrado replicar los resultados originales, y algunos investigadores sostienen que la llamada “ventaja bilingüe” podría haber sido, al menos en parte, un artefacto de muestras pequeñas y del sesgo de publicación, por el cual los resultados positivos tienen más probabilidades de publicarse que los nulos.",
      "Esto no quiere decir que aprender otro idioma no tenga beneficios. Todo lo contrario: las recompensas sociales, culturales y profesionales están bien documentadas, y hay algunas pruebas de que el bilingüismo podría retrasar la aparición de los síntomas de la demencia. Lo que sí ilustra el debate es la facilidad con la que una idea atractiva puede adelantarse a las pruebas, y por qué las afirmaciones científicas, por intuitivas que sean, merecen una buena dosis de escepticismo."
    ],
    glossary: [["lest", "no fuera a ser que"], ["outperform", "superar en rendimiento"], ["nuanced", "matizado"], ["replicate", "replicar"], ["warrant", "merecer / justificar"]],
    questions: [
      { q: "How was bilingualism viewed for most of the 20th century?", opts: ["As a clear advantage", "With suspicion", "As irrelevant"], a: 1 },
      { q: "What are “executive functions” according to the text?", opts: ["Business skills", "Attention control and task switching", "Vocabulary size"], a: 1 },
      { q: "Why do some researchers doubt the “bilingual advantage”?", opts: ["Because bilinguals perform worse", "Because larger studies failed to replicate the results", "Because the studies were too old"], a: 1 },
      { q: "What is “publication bias”?", opts: ["Positive results being more likely to be published", "Journals preferring long articles", "Researchers writing in English"], a: 0 },
      { q: "What is the writer's main conclusion?", opts: ["Learning languages has no benefits", "Appealing ideas can go beyond the evidence, so scepticism is healthy", "Bilinguals are always smarter"], a: 1 },
      { q: "“It was not until the 1960s that researchers began…” is an example of…", opts: ["a cleft sentence", "a passive", "a third conditional"], a: 0 }
    ]
  },
  {
    id: "c1-ai-work", level: "C1", type: "📰 Feature", title: "Will AI take your job — or change it?",
    text: [
      "Few topics generate as much anxiety in the workplace as artificial intelligence. Headlines warning that millions of jobs are at risk have become a staple of the news cycle, and it would be naïve to dismiss such concerns out of hand. Yet history suggests that the relationship between technology and employment is rarely as straightforward as the headlines imply.",
      "When ATMs became widespread in the 1980s, many predicted the end of the bank teller. In practice, the number of tellers in the United States actually rose for several decades, as cheaper branches allowed banks to open more of them and tellers took on tasks that machines could not perform, such as advising customers. The job did not vanish; it was transformed.",
      "That said, there are reasons to believe this time might be different. Unlike previous waves of automation, which mainly affected routine manual work, current AI systems are increasingly capable of performing cognitive tasks — drafting documents, analysing data, even writing code. Professions long considered safe are, for the first time, having to reconsider what exactly they offer that a machine cannot.",
      "The most likely outcome, many economists argue, lies somewhere between utopia and catastrophe. Rather than replacing entire occupations, AI will probably automate specific tasks within them, rewarding workers who can combine technical tools with distinctly human skills: judgement, empathy, negotiation and the ability to ask the right questions. Seen in that light, the question is not so much whether AI will take your job, but whether you will learn to work alongside it."
    ],
    es: [
      "Pocos temas generan tanta ansiedad en el trabajo como la inteligencia artificial. Los titulares que advierten que millones de empleos están en riesgo se han vuelto un elemento habitual de las noticias, y sería ingenuo descartar esas preocupaciones de plano. Sin embargo, la historia sugiere que la relación entre tecnología y empleo rara vez es tan sencilla como insinúan los titulares.",
      "Cuando los cajeros automáticos se generalizaron en los años 80, muchos predijeron el fin del cajero de banco. En la práctica, el número de cajeros en EE. UU. aumentó durante varias décadas, ya que sucursales más baratas permitieron a los bancos abrir más, y los cajeros asumieron tareas que las máquinas no podían hacer, como asesorar a los clientes. El trabajo no desapareció; se transformó.",
      "Dicho esto, hay razones para creer que esta vez podría ser diferente. A diferencia de olas anteriores de automatización, que afectaron sobre todo al trabajo manual rutinario, los sistemas de IA actuales son cada vez más capaces de realizar tareas cognitivas: redactar documentos, analizar datos e incluso escribir código. Profesiones consideradas seguras durante mucho tiempo tienen, por primera vez, que replantearse qué ofrecen exactamente que una máquina no pueda.",
      "El resultado más probable, sostienen muchos economistas, está en algún punto entre la utopía y la catástrofe. En lugar de reemplazar ocupaciones enteras, la IA probablemente automatizará tareas concretas dentro de ellas, premiando a los trabajadores que sepan combinar herramientas técnicas con habilidades claramente humanas: criterio, empatía, negociación y la capacidad de hacer las preguntas correctas. Visto así, la pregunta no es tanto si la IA te quitará el trabajo, sino si aprenderás a trabajar junto a ella."
    ],
    glossary: [["a staple of", "algo habitual de"], ["dismiss out of hand", "descartar de plano"], ["teller", "cajero (de banco)"], ["vanish", "desaparecer"], ["seen in that light", "visto así"]],
    questions: [
      { q: "What does the writer say about the headlines on AI?", opts: ["They are completely wrong", "The reality is usually less straightforward than they imply", "They underestimate the risk"], a: 1 },
      { q: "What happened to bank tellers after ATMs were introduced?", opts: ["They disappeared quickly", "Their numbers rose and their role changed", "They became ATM technicians"], a: 1 },
      { q: "Why might AI be different from previous automation?", opts: ["It is cheaper", "It can perform cognitive tasks, not just manual ones", "It only affects factories"], a: 1 },
      { q: "According to economists, what will AI most likely do?", opts: ["Replace whole professions", "Automate specific tasks within jobs", "Have no impact"], a: 1 },
      { q: "Which skill is NOT mentioned as distinctly human?", opts: ["Empathy", "Negotiation", "Speed of calculation"], a: 2 },
      { q: "“That said” at the start of paragraph 3 introduces…", opts: ["an example", "a contrasting point", "a conclusion"], a: 1 }
    ]
  },
  {
    id: "c1-panama", level: "C1", type: "🌎 Report", title: "Water, ships and climate: the Panama Canal's balancing act",
    text: [
      "Few pieces of infrastructure are as intimately tied to the natural environment as the Panama Canal. Unlike sea-level canals such as Suez, Panama's relies on a system of locks that lift ships 26 metres above sea level, and every vessel that crosses requires millions of litres of fresh water drawn from Gatun Lake.",
      "In 2023, a severe drought, exacerbated by the El Niño phenomenon, pushed the lake to historically low levels. The Panama Canal Authority was forced to cut the number of daily transits and impose draught restrictions, meaning that ships had to carry less cargo in order to sail through. The resulting queues and delays rippled through global supply chains.",
      "The episode highlighted a dilemma that is unlikely to go away. The same lake that keeps the canal operating also supplies drinking water to roughly half of the country's population. In times of scarcity, the authorities must weigh the economic importance of the canal — a major source of national revenue — against the basic needs of residents.",
      "Proposed solutions range from building new reservoirs to introducing water-saving technologies, though each comes with considerable costs and, in some cases, social controversy over land use. What is beyond dispute is that the future of one of the world's most strategic trade routes now depends, to a large extent, on how successfully Panama adapts to a changing climate."
    ],
    es: [
      "Pocas infraestructuras están tan íntimamente ligadas al medio ambiente como el Canal de Panamá. A diferencia de canales a nivel del mar como el de Suez, el de Panamá depende de un sistema de esclusas que elevan los barcos 26 metros sobre el nivel del mar, y cada buque que cruza requiere millones de litros de agua dulce del lago Gatún.",
      "En 2023, una sequía severa, agravada por el fenómeno de El Niño, llevó el lago a niveles históricamente bajos. La Autoridad del Canal de Panamá se vio obligada a reducir el número de tránsitos diarios e imponer restricciones de calado, lo que significaba que los barcos debían llevar menos carga para poder pasar. Las filas y retrasos resultantes se propagaron por las cadenas de suministro mundiales.",
      "El episodio puso de relieve un dilema que difícilmente desaparecerá. El mismo lago que mantiene operando el canal también abastece de agua potable a aproximadamente la mitad de la población del país. En épocas de escasez, las autoridades deben sopesar la importancia económica del canal, una gran fuente de ingresos nacionales, frente a las necesidades básicas de los residentes.",
      "Las soluciones propuestas van desde construir nuevos embalses hasta introducir tecnologías de ahorro de agua, aunque cada una conlleva costos considerables y, en algunos casos, controversia social por el uso de la tierra. Lo que está fuera de discusión es que el futuro de una de las rutas comerciales más estratégicas del mundo depende ahora, en gran medida, de cuán bien se adapte Panamá a un clima cambiante."
    ],
    glossary: [["locks", "esclusas"], ["exacerbated", "agravado"], ["draught (US: draft)", "calado"], ["ripple through", "propagarse por"], ["reservoir", "embalse"]],
    questions: [
      { q: "How is the Panama Canal different from the Suez Canal?", opts: ["It is longer", "It uses locks that require fresh water", "It is at sea level"], a: 1 },
      { q: "What did the Canal Authority do during the 2023 drought?", opts: ["Closed the canal", "Reduced daily transits and limited ship draught", "Increased tolls only"], a: 1 },
      { q: "What dilemma does the text describe?", opts: ["Tourism vs. trade", "Canal operations vs. drinking water for residents", "Old ships vs. new ships"], a: 1 },
      { q: "What do the proposed solutions have in common?", opts: ["They are cheap and simple", "They involve significant costs and sometimes controversy", "They have already been completed"], a: 1 },
      { q: "“What is beyond dispute is that…” means…", opts: ["what is controversial is that…", "what nobody can deny is that…", "what is unclear is that…"], a: 1 }
    ]
  }
];
