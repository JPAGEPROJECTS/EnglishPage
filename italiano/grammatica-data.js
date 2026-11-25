// Gramática completa de italiano (A1 → B1) para la página grammatica.html.
// Cada tema: id, lv (nivel), cat (bloque), t (título), sub, html (explicación),
// ex: [[italiano, español]] (ejemplos con audio), quiz: [[pregunta, [opciones], índice correcto]], lesson: id de clase relacionada.

const GRAM = [
  // ======================= 🧱 LO BÁSICO =======================
  { id: 'pronomi', lv: 'A1', cat: '🧱 Lo básico', t: 'Pronombres personales', sub: 'io, tu, lui, lei, Lei, noi, voi, loro', lesson: 'saluti',
    html: `<table><tr><th>Español</th><th>Italiano</th><th>Notas</th></tr>
      <tr><td>yo</td><td><b>io</b></td><td>con minúscula (a diferencia del inglés “I”)</td></tr>
      <tr><td>tú</td><td><b>tu</b></td><td>informal, sin tilde (no confundir con <em>tu</em> = tu, posesivo: en italiano es <em>tuo</em>)</td></tr>
      <tr><td>él / ella</td><td><b>lui / lei</b></td><td>en textos literarios: <em>egli / ella, esso / essa</em></td></tr>
      <tr><td>usted</td><td><b>Lei</b></td><td>le hablas a la persona (2ª), pero se conjuga como <em>lui/lei</em> (3ª)</td></tr>
      <tr><td>nosotros/as</td><td><b>noi</b></td><td>no cambia por género</td></tr>
      <tr><td>vosotros / ustedes</td><td><b>voi</b></td><td>en Latinoamérica “ustedes” = <em>voi</em> (también formal en el sur de Italia)</td></tr>
      <tr><td>ellos / ellas</td><td><b>loro</b></td><td>no cambia por género; el formal plural <em>Loro</em> casi no se usa</td></tr></table>
      <p><strong>Se omiten casi siempre</strong>, igual que en español: <em>Sono stanco</em> (no “io sono stanco”). Se dicen para <u>contrastar o enfatizar</u>: <em>Io lavoro e tu dormi!</em></p>
      <p><strong>Después de anche, neanche, proprio y en respuestas cortas</strong> sí van: <em>Anch'io! — Neanche lui. — Chi è? Io!</em></p>
      <div class="card tip" style="margin:10px 0 0"><p style="margin-top:0"><strong>🎩 ¿Cómo funciona “Lei” (usted)?</strong></p>
      <p>Con <em>Lei</em> le hablas <strong>directamente</strong> a la persona (como si fuera segunda persona), pero <strong>todo se conjuga como tercera persona</strong>, igual que “usted es” en español.</p>
      <table><tr><th></th><th>Tú (informal)</th><th>Usted (formal)</th></tr>
      <tr><td>Verbo</td><td>Tu <b>sei</b> stanco?</td><td>Lei <b>è</b> stanco?</td></tr>
      <tr><td>Cómo estás</td><td>Come <b>stai</b>?</td><td>Come <b>sta</b>?</td></tr>
      <tr><td>Objeto</td><td><b>Ti</b> chiamo domani.</td><td><b>La</b> chiamo domani.</td></tr>
      <tr><td>A ti / a usted</td><td><b>Ti</b> piace?</td><td><b>Le</b> piace?</td></tr>
      <tr><td>Posesivo</td><td>il <b>tuo</b> nome</td><td>il <b>Suo</b> nome</td></tr></table>
      <p><em>Lei</em> significa literalmente “ella”, pero se usa igual con hombres y mujeres. Por eso al escribir va con mayúscula (<em>Lei, La, Le, Suo</em>).</p></div>`,
    ex: [['Io sono di Panama, e tu?', 'Yo soy de Panamá, ¿y tú?'], ['Lei è italiana? Sì, sono di Roma.', '¿Usted es italiana? Sí, soy de Roma.'], ['Scusi, Lei parla inglese?', 'Disculpe, ¿usted habla inglés?'], ['Di dove siete?', '¿De dónde son ustedes?'], ['Anch\'io studio italiano.', 'Yo también estudio italiano.']],
    quiz: [['“¿Ustedes vienen?” (a un grupo de amigos)', ['Lei viene?', 'Loro vengono?', 'Voi venite?'], 2], ['A un señor mayor: “¿Usted tiene hijos?”', ['Lei hai figli?', 'Lei ha figli?', 'Tu ha figli?'], 1], ['“Yo también” =', ['Anch\'io', 'Anche me', 'Io anche'], 0]] },

  { id: 'essere', lv: 'A1', cat: '🧱 Lo básico', t: 'Ser y estar: essere, stare, avere, fare', sub: 'sono stanco · sto bene · ho fame · fa caldo', lesson: 'essere-avere',
    html: `<p>En italiano <strong>essere</strong> cubre casi todo lo que en español es “ser” <u>y</u> “estar”. <strong>stare</strong> solo se usa en casos concretos.</p>
      <table><tr><th>Uso</th><th>Verbo</th><th>Ejemplo</th></tr>
      <tr><td>identidad, origen, profesión, carácter</td><td><b>essere</b></td><td>Sono Jonathan. Sono panamense. È simpatica.</td></tr>
      <tr><td>emociones y estados de ánimo</td><td><b>essere</b></td><td>Sono stanco. Sei arrabbiato? (estoy cansado / ¿estás enojado?)</td></tr>
      <tr><td>ubicación</td><td><b>essere</b></td><td>Dove sei? Sono a casa.</td></tr>
      <tr><td>estado civil, profesión</td><td><b>essere</b></td><td>Sono single. È medico.</td></tr>
      <tr><td>salud / cómo estás</td><td><b>stare</b></td><td>Come stai? Sto bene / male / meglio.</td></tr>
      <tr><td>acción en curso</td><td><b>stare</b> + gerundio</td><td>Sto mangiando.</td></tr>
      <tr><td>a punto de</td><td><b>stare per</b> + infinitivo</td><td>Sto per uscire.</td></tr>
      <tr><td>quedarse / permanecer</td><td><b>stare</b></td><td>Oggi sto a casa. Stai zitto! Stai fermo! Stai attento!</td></tr>
      <tr><td>edad, hambre, sed, sueño, frío, calor, miedo, prisa, razón</td><td><b>avere</b></td><td>Ho 24 anni. Ho fame. Ho sonno. Ho fretta. Hai ragione.</td></tr>
      <tr><td>clima</td><td><b>fare</b></td><td>Fa caldo. Fa freddo. Fa bel tempo.</td></tr></table>
      <table><tr><th></th><th>io</th><th>tu</th><th>lui/lei</th><th>noi</th><th>voi</th><th>loro</th></tr>
      <tr><td><b>essere</b></td><td>sono</td><td>sei</td><td>è</td><td>siamo</td><td>siete</td><td>sono</td></tr>
      <tr><td><b>stare</b></td><td>sto</td><td>stai</td><td>sta</td><td>stiamo</td><td>state</td><td>stanno</td></tr>
      <tr><td><b>avere</b></td><td>ho</td><td>hai</td><td>ha</td><td>abbiamo</td><td>avete</td><td>hanno</td></tr>
      <tr><td><b>fare</b></td><td>faccio</td><td>fai</td><td>fa</td><td>facciamo</td><td>fate</td><td>fanno</td></tr></table>
      <p><strong>Ojo regional:</strong> en Roma y el sur se oye mucho <em>sto a casa, sto stanco</em>. Se entiende, pero en italiano estándar se dice <em>sono a casa, sono stanco</em>.</p>
      <p><strong>c'è / ci sono</strong> = hay (uno / varios): <em>C'è un problema. Ci sono due bar.</em> En pasado: <em>c'era / c'erano</em>, <em>c'è stato / ci sono stati</em>.</p>`,
    ex: [['Sono stanco, ma sto bene.', 'Estoy cansado, pero estoy bien (de salud).'], ['Ho fame e ho sonno.', 'Tengo hambre y tengo sueño.'], ['Oggi fa molto caldo.', 'Hoy hace mucho calor.'], ['Stai attento, la strada è bagnata!', '¡Ten cuidado, la calle está mojada!'], ['C\'è qualcuno a casa?', '¿Hay alguien en casa?'], ['Sto per partire.', 'Estoy a punto de irme.']],
    quiz: [['“Estoy nervioso” =', ['Sono nervoso', 'Sto nervoso', 'Ho nervoso'], 0], ['“Tengo frío” =', ['Sono freddo', 'Ho freddo', 'Fa freddo io'], 1], ['“Tienes razón” =', ['Sei ragione', 'Hai ragione', 'Stai ragione'], 1], ['“Hay muchos turistas” =', ['C\'è molti turisti', 'Ci sono molti turisti', 'Hanno molti turisti'], 1]] },

  { id: 'articoli', lv: 'A1', cat: '🧱 Lo básico', t: 'Artículos y partitivo', sub: 'il, lo, la, l\', i, gli, le · un, uno, una · del, della, dei', lesson: 'bar',
    html: `<table><tr><th>La palabra empieza por…</th><th>el / la</th><th>los / las</th><th>un / una</th></tr>
      <tr><td>masc. + consonante</td><td><b>il</b> libro</td><td><b>i</b> libri</td><td><b>un</b> libro</td></tr>
      <tr><td>masc. + s+consonante, z, gn, ps, x, y</td><td><b>lo</b> zaino, lo studente, lo gnocco</td><td><b>gli</b> zaini, gli studenti</td><td><b>uno</b> zaino</td></tr>
      <tr><td>masc. + vocal</td><td><b>l'</b>amico</td><td><b>gli</b> amici</td><td><b>un</b> amico (sin apóstrofo)</td></tr>
      <tr><td>fem. + consonante</td><td><b>la</b> casa</td><td><b>le</b> case</td><td><b>una</b> casa</td></tr>
      <tr><td>fem. + vocal</td><td><b>l'</b>amica</td><td><b>le</b> amiche</td><td><b>un'</b>amica (con apóstrofo)</td></tr></table>
      <p><strong>Truco del apóstrofo:</strong> <em>un amico</em> (masc., sin apóstrofo) / <em>un'amica</em> (fem., con apóstrofo). Así sabes el género al leer.</p>
      <p><strong>Diferencias con el español:</strong></p>
      <ul><li>Con posesivos <u>sí</u> va artículo: <em>la mia casa</em> (pero no con familiares en singular: <em>mia madre</em>).</li>
      <li>Con países y regiones <u>sí</u>: <em>l'Italia è bella, la Sicilia</em>; con ciudades <u>no</u>: <em>Roma è bella</em>.</li>
      <li>Con la hora: <em>sono <u>le</u> tre</em>; con días habituales: <em>il lunedì</em> = todos los lunes.</li>
      <li>Sin artículo: <em>a casa, in centro, in macchina, a scuola</em>.</li></ul>
      <p><strong>Partitivo (“algo de / unos”):</strong> <em>di</em> + artículo.</p>
      <table><tr><th>Forma</th><th>Ejemplo</th><th>Español</th></tr>
      <tr><td>del / dello / dell' / della</td><td>Vorrei del pane. Compro della frutta.</td><td>Quisiera pan. Compro (algo de) fruta.</td></tr>
      <tr><td>dei / degli / delle</td><td>Ho dei libri. Ci sono degli studenti. Ho delle domande.</td><td>Tengo unos libros. Hay unos estudiantes. Tengo unas preguntas.</td></tr></table>
      <p>En preguntas y negaciones se suele omitir: <em>Hai fratelli? Non ho soldi.</em></p>`,
    ex: [['Lo zaino è sul tavolo.', 'La mochila está sobre la mesa.'], ['Gli studenti sono in classe.', 'Los estudiantes están en clase.'], ['Ho un\'amica a Milano.', 'Tengo una amiga en Milán.'], ['Vorrei dell\'acqua, per favore.', 'Quisiera agua, por favor.'], ['L\'Italia è un paese bellissimo.', 'Italia es un país bellísimo.']],
    quiz: [['___ studente (el estudiante)', ['il', 'lo', 'l\''], 1], ['___ amici (los amigos)', ['i', 'gli', 'le'], 1], ['___ amica (una amiga)', ['un', 'un\'', 'una'], 1], ['“Quiero unas manzanas” =', ['Voglio delle mele', 'Voglio unas mele', 'Voglio dei mele'], 0]] },

  { id: 'nomi', lv: 'A1', cat: '🧱 Lo básico', t: 'Sustantivos: género y plural', sub: 'libro → libri · amica → amiche · uovo → uova', lesson: 'plurali-possessivi',
    html: `<table><tr><th>Singular</th><th>Plural</th><th>Ejemplos</th></tr>
      <tr><td>-o (masc.)</td><td>-i</td><td>il ragazzo → i ragazzi</td></tr>
      <tr><td>-a (fem.)</td><td>-e</td><td>la ragazza → le ragazze</td></tr>
      <tr><td>-e (masc. o fem.)</td><td>-i</td><td>il fiore → i fiori · la notte → le notti</td></tr>
      <tr><td>-a (masc., de origen griego)</td><td>-i</td><td>il problema → i problemi · il programma → i programmi</td></tr>
      <tr><td>acento final, una sílaba o extranjera</td><td>no cambia</td><td>la città → le città · il re → i re · il bar → i bar · il film → i film</td></tr>
      <tr><td>-ca / -ga</td><td>-che / -ghe</td><td>l'amica → le amiche · la riga → le righe</td></tr>
      <tr><td>-co / -go (acento en la penúltima)</td><td>-chi / -ghi</td><td>il tedesco → i tedeschi · il lago → i laghi</td></tr>
      <tr><td>-co (acento antes de la penúltima)</td><td>-ci</td><td>il medico → i medici · l'amico → gli amici (excepción)</td></tr>
      <tr><td>-cia / -gia</td><td>-ce / -ge (si hay consonante antes)</td><td>l'arancia → le arance · la valigia → le valigie</td></tr>
      <tr><td>-io</td><td>-i</td><td>il negozio → i negozi · lo zio → gli zii</td></tr></table>
      <p><strong>Plurales irregulares muy usados:</strong> l'uomo → gli <b>uomini</b> · l'uovo → le <b>uova</b> · la mano → le <b>mani</b> · il braccio → le <b>braccia</b> · il dito → le <b>dita</b> · il ginocchio → le <b>ginocchia</b> · il labbro → le <b>labbra</b> · l'orecchio → le <b>orecchie</b> · il paio → le <b>paia</b>.</p>
      <p><strong>Género distinto al español:</strong> <em>il latte</em> (la leche), <em>il miele</em> (la miel), <em>il fiore</em> (la flor), <em>il sangue</em> (la sangre), <em>il mare</em> (el mar, siempre masc.), <em>la fine</em> (el final), <em>la mano</em> (fem. aunque termina en -o), <em>la radio, la foto, la moto, l'auto</em> (abreviaciones, femeninas e invariables).</p>`,
    ex: [['Ho due cani e tre gatti.', 'Tengo dos perros y tres gatos.'], ['Le mie amiche sono simpatiche.', 'Mis amigas son simpáticas.'], ['Ho comprato sei uova.', 'Compré seis huevos.'], ['Ci sono molti problemi.', 'Hay muchos problemas.'], ['Lavati le mani!', '¡Lávate las manos!']],
    quiz: [['Plural de “la città”', ['le cittè', 'le città', 'le cittas'], 1], ['Plural de “l\'uovo”', ['gli uovi', 'le uova', 'le uove'], 1], ['Plural de “il problema”', ['le probleme', 'i problemi', 'i problema'], 1], ['“La leche” =', ['la latte', 'il latte', 'lo latte'], 1]] },

  { id: 'aggettivi', lv: 'A1', cat: '🧱 Lo básico', t: 'Adjetivos: concordancia y posición', sub: 'alto/alta/alti/alte · bello, buono, grande', lesson: 'descrivere-meteo',
    html: `<table><tr><th>Tipo</th><th>masc. sing.</th><th>fem. sing.</th><th>masc. pl.</th><th>fem. pl.</th></tr>
      <tr><td>-o (4 formas)</td><td>alto</td><td>alta</td><td>alti</td><td>alte</td></tr>
      <tr><td>-e (2 formas)</td><td>gentile</td><td>gentile</td><td>gentili</td><td>gentili</td></tr>
      <tr><td>invariables</td><td colspan="4">blu, rosa, viola, beige, pari, dispari, super</td></tr></table>
      <p><strong>Posición:</strong> normalmente <u>después</u> del sustantivo (<em>una macchina rossa</em>). Algunos van antes (<em>bello, buono, brutto, grande, piccolo, nuovo, vecchio</em>), y a veces <strong>cambia el significado</strong>:</p>
      <table><tr><th>Antes</th><th>Después</th></tr>
      <tr><td>un <b>grande</b> uomo (un gran hombre)</td><td>un uomo <b>grande</b> (un hombre grande, alto)</td></tr>
      <tr><td>un <b>vecchio</b> amico (amigo de hace años)</td><td>un amico <b>vecchio</b> (amigo anciano)</td></tr>
      <tr><td><b>diversi</b> libri (varios libros)</td><td>libri <b>diversi</b> (libros diferentes)</td></tr>
      <tr><td>un <b>povero</b> uomo (pobre, digno de pena)</td><td>un uomo <b>povero</b> (sin dinero)</td></tr></table>
      <p><strong>bello y buono antes del sustantivo</strong> cambian como los artículos:</p>
      <table><tr><th>Artículo</th><th>bello</th><th>buono</th></tr>
      <tr><td>il / i</td><td>bel / bei</td><td>buon</td></tr>
      <tr><td>lo / gli</td><td>bello / begli</td><td>buono</td></tr>
      <tr><td>l' / gli</td><td>bell' / begli</td><td>buon</td></tr>
      <tr><td>la / le</td><td>bella / belle</td><td>buona / buon' (ante vocal)</td></tr></table>
      <p>Ejemplos: <em>un bel ragazzo, un bello spettacolo, un bell'albero, dei bei giorni, dei begli occhi · un buon caffè, una buona idea, una buon'amica</em>. <strong>grande</strong> puede reducirse a <em>gran</em>: <em>un gran lavoro</em>.</p>`,
    ex: [['Ho una macchina rossa e due biciclette blu.', 'Tengo un carro rojo y dos bicicletas azules.'], ['Che bel tempo oggi!', '¡Qué buen tiempo hace hoy!'], ['È un vecchio amico di scuola.', 'Es un viejo amigo de la escuela.'], ['Buon appetito! Buona giornata!', '¡Buen provecho! ¡Buen día!'], ['Le ragazze sono molto gentili.', 'Las chicas son muy amables.']],
    quiz: [['Femenino plural de “simpatico”', ['simpatiche', 'simpatice', 'simpatici'], 0], ['“Un buen café” =', ['un buono caffè', 'un buon caffè', 'un buona caffè'], 1], ['“Unos ojos bonitos” =', ['dei bei occhi', 'dei begli occhi', 'dei belli occhi'], 1], ['“Un gran hombre” (moral) =', ['un uomo grande', 'un grande uomo', 'un uomo grosso'], 1]] },

  { id: 'possessivi', lv: 'A1', cat: '🧱 Lo básico', t: 'Posesivos', sub: 'il mio, la tua, i suoi · è mio · mia madre', lesson: 'plurali-possessivi',
    html: `<table><tr><th>Persona</th><th>masc. sing.</th><th>fem. sing.</th><th>masc. pl.</th><th>fem. pl.</th></tr>
      <tr><td>io</td><td><b>il mio</b></td><td><b>la mia</b></td><td><b>i miei</b></td><td><b>le mie</b></td></tr>
      <tr><td>tu</td><td>il tuo</td><td>la tua</td><td>i tuoi</td><td>le tue</td></tr>
      <tr><td>lui / lei / Lei</td><td>il suo</td><td>la sua</td><td>i suoi</td><td>le sue</td></tr>
      <tr><td>noi</td><td>il nostro</td><td>la nostra</td><td>i nostri</td><td>le nostre</td></tr>
      <tr><td>voi</td><td>il vostro</td><td>la vostra</td><td>i vostri</td><td>le vostre</td></tr>
      <tr><td>loro</td><td>il loro</td><td>la loro</td><td>i loro</td><td>le loro</td></tr></table>
      <ul><li><strong>Una sola forma para “mi” y “mío”:</strong> <em>il mio libro</em> (mi libro) / <em>è il mio</em> (es el mío) / <em>è mio</em> (es mío).</li>
      <li><strong>Concuerda con la cosa</strong>, no con el dueño: <em>la sua macchina</em> = el carro de él / de ella / de usted.</li>
      <li><strong>Familiares en singular sin artículo:</strong> <em>mio padre, tua sorella, suo marito</em>. Pero <u>con</u> artículo si: es plural (<em>i miei fratelli</em>), lleva adjetivo o diminutivo (<em>la mia cara nonna, il mio fratellino</em>), es <em>loro</em> (<em>il loro figlio</em>) o es <em>mamma/papà</em> (<em>la mia mamma</em>).</li>
      <li><em>“I miei”</em> solo = mis padres: <em>Vivo con i miei.</em></li>
      <li><strong>Expresiones sin artículo:</strong> <em>a casa mia, è colpa mia (es culpa mía), per conto mio (por mi cuenta), Mamma mia!</em></li>
      <li>Para evitar ambigüedad con “suo”: <em>la casa di Marco / la casa di lei</em>.</li></ul>`,
    ex: [['Di chi è questa borsa? È mia!', '¿De quién es este bolso? ¡Es mío!'], ['La mia macchina è rossa, la tua è nera.', 'Mi carro es rojo, el tuyo es negro.'], ['Mia sorella vive con i suoi figli.', 'Mi hermana vive con sus hijos.'], ['Stasera ceniamo a casa mia.', 'Esta noche cenamos en mi casa.'], ['Scusa, è colpa mia.', 'Perdón, es culpa mía.']],
    quiz: [['“Sus llaves” (de Marco)', ['i suoi chiavi', 'le sue chiavi', 'le loro chiavi'], 1], ['“Mi padre” =', ['il mio padre', 'mio padre', 'mi padre'], 1], ['“Mis hermanos” =', ['miei fratelli', 'i miei fratelli', 'i mii fratelli'], 1], ['“Su casa” (de ellos)', ['la sua casa', 'la loro casa', 'la lora casa'], 1]] },

  { id: 'dimostrativi', lv: 'A1', cat: '🧱 Lo básico', t: 'Demostrativos', sub: 'questo, quello (quel, quell\', quei, quegli)', lesson: 'a2-shopping',
    html: `<p><strong>questo</strong> = este (cerca) · <strong>quello</strong> = ese / aquel (lejos). En italiano no hay diferencia entre “ese” y “aquel”.</p>
      <p><em>questo</em> es regular: <em>questo, questa, questi, queste</em>. Ante vocal se puede apostrofar: <em>quest'anno, quest'estate</em>. Atención: <em>stamattina, stasera, stanotte, stavolta</em> (esta mañana, esta noche, esta vez).</p>
      <p><em>quello</em> delante de un sustantivo cambia <strong>como el artículo</strong>:</p>
      <table><tr><th>Artículo</th><th>quello</th><th>Ejemplo</th></tr>
      <tr><td>il / i</td><td><b>quel / quei</b></td><td>quel libro, quei libri</td></tr>
      <tr><td>lo / gli</td><td><b>quello / quegli</b></td><td>quello zaino, quegli zaini</td></tr>
      <tr><td>l' / gli</td><td><b>quell' / quegli</b></td><td>quell'amico, quegli amici</td></tr>
      <tr><td>la / le</td><td><b>quella / quelle</b></td><td>quella casa, quelle case</td></tr>
      <tr><td>l' (fem.)</td><td><b>quell'</b></td><td>quell'amica</td></tr></table>
      <p><strong>Solo (pronombre)</strong> es regular: <em>quello, quella, quelli, quelle</em>: <em>Quale vuoi? Quello rosso.</em></p>
      <p><strong>quello che</strong> = lo que: <em>Quello che dici è vero.</em> · <strong>ciò</strong> = eso (formal): <em>Ciò non è possibile.</em></p>`,
    ex: [['Questa pizza è buonissima.', 'Esta pizza está buenísima.'], ['Quel ristorante è troppo caro.', 'Ese restaurante es demasiado caro.'], ['Chi sono quegli uomini?', '¿Quiénes son esos hombres?'], ['Quale preferisci? Quella blu.', '¿Cuál prefieres? Esa azul.'], ['Quest\'anno vado in Italia.', 'Este año voy a Italia.']],
    quiz: [['___ ragazzi sono miei amici. (esos)', ['Quelli', 'Quegli', 'Quei'], 2], ['___ studenti (esos)', ['quei', 'quegli', 'quelli'], 1], ['“Esta noche” =', ['questa notte / stanotte', 'quella notte', 'questo sera'], 0], ['“Lo que quiero” =', ['che voglio', 'quello che voglio', 'il che voglio'], 1]] },

  // ======================= 👤 PRONOMBRES =======================
  { id: 'diretti', lv: 'A2', cat: '👤 Pronombres', t: 'Pronombres directos', sub: 'mi, ti, lo, la, ci, vi, li, le · l\'ho vista', lesson: 'a2-shopping',
    html: `<table><tr><th>Español</th><th>Italiano</th><th>Ejemplo</th></tr>
      <tr><td>me</td><td><b>mi</b></td><td>Mi chiami domani?</td></tr>
      <tr><td>te</td><td><b>ti</b></td><td>Ti aspetto qui.</td></tr>
      <tr><td>lo (él / cosa masc.)</td><td><b>lo</b></td><td>Il libro? Lo leggo stasera.</td></tr>
      <tr><td>la (ella / cosa fem.)</td><td><b>la</b></td><td>La pizza? La ordino io.</td></tr>
      <tr><td>lo / la (usted)</td><td><b>La</b></td><td>La ringrazio. (Le agradezco)</td></tr>
      <tr><td>nos / os</td><td><b>ci / vi</b></td><td>Ci vedi? Vi chiamo dopo.</td></tr>
      <tr><td>los</td><td><b>li</b></td><td>I biglietti? Li ho comprati.</td></tr>
      <tr><td>las</td><td><b>le</b></td><td>Le chiavi? Le ho perse.</td></tr></table>
      <p><strong>Posición:</strong> antes del verbo conjugado (<em>Lo compro</em>), pegado al infinitivo, gerundio e imperativo informal (<em>Voglio comprarlo, comprandolo, Compralo!</em>). Con modales, las dos opciones: <em>Lo voglio comprare / Voglio comprarlo</em>.</p>
      <p><strong>Con passato prossimo</strong> el participio <u>concuerda</u> con lo, la, li, le: <em>La pizza? L'ho mangiat<b>a</b>. I libri? Li ho lett<b>i</b>. Le chiavi? Le ho pers<b>e</b>.</em> <em>lo</em> y <em>la</em> se apostrofan ante <em>ho, hai, ha</em>: <em>l'ho, l'hai</em>.</p>
      <p><strong>Ecco + pronombre:</strong> <em>Eccomi! (¡aquí estoy!), Eccolo! Eccoli!</em></p>`,
    ex: [['Il caffè? Lo prendo senza zucchero.', '¿El café? Lo tomo sin azúcar.'], ['Hai visto Giulia? Sì, l\'ho vista ieri.', '¿Viste a Giulia? Sí, la vi ayer.'], ['Le chiavi? Non le trovo!', '¿Las llaves? ¡No las encuentro!'], ['Ti chiamo appena arrivo.', 'Te llamo apenas llegue.'], ['Dov\'è il telefono? Eccolo!', '¿Dónde está el teléfono? ¡Aquí está!']],
    quiz: [['I pantaloni? ___ compro.', ['Lo', 'Li', 'Le'], 1], ['La lettera? L\'ho ___ ieri.', ['scritto', 'scritta', 'scritti'], 1], ['“Quiero verla” =', ['Voglio vederla', 'Voglio la vedere', 'Voglio vederle'], 0]] },

  { id: 'indiretti', lv: 'A2', cat: '👤 Pronombres', t: 'Pronombres indirectos', sub: 'mi, ti, gli, le, Le, ci, vi, gli', lesson: 'a2-viaggio',
    html: `<p>Responden a “¿a quién?”. Ojo con <em>gli</em> y <em>le</em>, que no coinciden con el español.</p>
      <table><tr><th>Español</th><th>Italiano</th><th>Ejemplo</th></tr>
      <tr><td>me (a mí)</td><td><b>mi</b></td><td>Mi dai una mano?</td></tr>
      <tr><td>te (a ti)</td><td><b>ti</b></td><td>Ti scrivo dopo.</td></tr>
      <tr><td>le (a él)</td><td><b>gli</b></td><td>Gli telefono domani.</td></tr>
      <tr><td>le (a ella)</td><td><b>le</b></td><td>Le regalo un libro.</td></tr>
      <tr><td>le (a usted)</td><td><b>Le</b></td><td>Le posso offrire un caffè?</td></tr>
      <tr><td>nos / os</td><td><b>ci / vi</b></td><td>Ci spiega la regola? Vi mando le foto.</td></tr>
      <tr><td>les (a ellos/ellas)</td><td><b>gli</b> (hablado) / <em>loro</em> (formal, después del verbo)</td><td>Gli dico la verdad. / Dico loro la verità.</td></tr></table>
      <p><strong>Verbos que piden indirecto</strong> (aunque en español a veces no): <em>telefonare a, rispondere a, chiedere a, dire a, dare a, piacere a, interessare a, servire a</em>: <em>Gli ho telefonato</em> (lo llamé).</p>
      <p><strong>No se duplica</strong> como en español: “Le dije a Marco” = <em>Ho detto a Marco</em> o <em>Gli ho detto</em> (no “gli ho detto a Marco”, salvo en registro coloquial).</p>
      <p>Con passato prossimo el participio <u>no</u> concuerda con el indirecto: <em>Le ho scritto</em> (no “scritta”).</p>`,
    ex: [['Gli ho mandato un messaggio.', 'Le mandé un mensaje (a él).'], ['Le piace molto il cinema.', 'A ella le gusta mucho el cine.'], ['Mi può dare la chiave, per favore?', '¿Me puede dar la llave, por favor?'], ['Ci hanno risposto subito.', 'Nos respondieron enseguida.'], ['Signora, Le serve aiuto?', 'Señora, ¿necesita ayuda?']],
    quiz: [['Telefono a Paolo → ___ telefono.', ['Lo', 'Gli', 'Le'], 1], ['Scrivo a Sara → ___ scrivo.', ['Gli', 'La', 'Le'], 2], ['“¿Le gusta?” (a usted)', ['Ti piace?', 'Le piace?', 'Gli piace?'], 1]] },

  { id: 'tonici', lv: 'A2', cat: '👤 Pronombres', t: 'Reflexivos y pronombres tónicos', sub: 'mi lavo · con me, per te, a lui', lesson: 'a2-riflessivi',
    html: `<table><tr><th>Sujeto</th><th>Reflexivo</th><th>Tónico (tras preposición / énfasis)</th></tr>
      <tr><td>io</td><td>mi</td><td><b>me</b></td></tr><tr><td>tu</td><td>ti</td><td><b>te</b></td></tr>
      <tr><td>lui / lei / Lei</td><td>si</td><td><b>lui / lei / Lei</b> (sé = sí mismo)</td></tr>
      <tr><td>noi</td><td>ci</td><td><b>noi</b></td></tr><tr><td>voi</td><td>vi</td><td><b>voi</b></td></tr><tr><td>loro</td><td>si</td><td><b>loro</b></td></tr></table>
      <p><strong>Tónicos</strong> después de preposición: <em>con me</em> (conmigo), <em>per te</em> (para ti), <em>da lui</em> (a casa de él), <em>senza di te</em> (sin ti), <em>secondo me</em> (en mi opinión), <em>tra noi</em>. Nunca “con mi”.</p>
      <p>También para <strong>enfatizar o contrastar</strong>: <em>Chiamo te, non lui!</em> (Te llamo a ti, no a él). <em>A me piace, a te no.</em></p>
      <p><strong>Reflexivos:</strong> <em>mi sveglio, ti vesti, si lava, ci divertiamo</em>. En pasado siempre con <em>essere</em> y concordancia: <em>Ci siamo divertiti.</em> Con partes del cuerpo: <em>Mi lavo <u>le</u> mani</em> (no “le mie mani”).</p>
      <p><strong>Recíprocos:</strong> <em>Ci vediamo domani. Si sono conosciuti a Roma. Vi sentite spesso?</em></p>`,
    ex: [['Vieni con me? Questo regalo è per te.', '¿Vienes conmigo? Este regalo es para ti.'], ['Secondo me, hai ragione.', 'En mi opinión, tienes razón.'], ['A me piace il mare, a lei la montagna.', 'A mí me gusta el mar, a ella la montaña.'], ['Mi sono svegliato tardi.', 'Me desperté tarde.'], ['Ci vediamo stasera!', '¡Nos vemos esta noche!']],
    quiz: [['“Conmigo” =', ['con me', 'con mi', 'conmigo'], 0], ['“Para ti” =', ['per ti', 'per te', 'per tu'], 1], ['Ieri Giulia ___ tardi. (alzarsi)', ['ha alzato', 'si è alzata', 'si ha alzata'], 1]] },

  { id: 'combinati', lv: 'B1', cat: '👤 Pronombres', t: 'Pronombres combinados', sub: 'me lo, te la, glielo, ce ne', lesson: 'b1-pronomi',
    html: `<p>Indirecto + directo. Los indirectos <em>mi, ti, ci, vi, si</em> cambian la i por e; <em>gli / le / Le</em> se convierten en <b>glie-</b> y se escriben juntos.</p>
      <table><tr><th></th><th>+ lo</th><th>+ la</th><th>+ li</th><th>+ le</th><th>+ ne</th></tr>
      <tr><td>mi</td><td>me lo</td><td>me la</td><td>me li</td><td>me le</td><td>me ne</td></tr>
      <tr><td>ti</td><td>te lo</td><td>te la</td><td>te li</td><td>te le</td><td>te ne</td></tr>
      <tr><td>gli / le / Le</td><td>glielo</td><td>gliela</td><td>glieli</td><td>gliele</td><td>gliene</td></tr>
      <tr><td>ci</td><td>ce lo</td><td>ce la</td><td>ce li</td><td>ce le</td><td>ce ne</td></tr>
      <tr><td>vi</td><td>ve lo</td><td>ve la</td><td>ve li</td><td>ve le</td><td>ve ne</td></tr>
      <tr><td>si</td><td>se lo</td><td>se la</td><td>se li</td><td>se le</td><td>se ne</td></tr></table>
      <p>Con passato prossimo el participio concuerda con el directo: <em>Le foto? <u>Te le</u> ho mandat<b>e</b>.</em> · <em>Gliel'ho detto</em> (glielo + ho).</p>
      <p>Pegados al infinitivo/imperativo: <em>Puoi dirmelo? Dammelo! Portaglielo!</em></p>
      <p><strong>Verbos pronominales con combinados (muy coloquiales):</strong> <em>andarsene</em> (irse: me ne vado), <em>fregarsene</em> (me ne frego), <em>farcela</em> (ce la faccio), <em>cavarsela</em> (me la cavo), <em>prendersela</em> (non prendertela).</p>`,
    ex: [['Te lo dico domani.', 'Te lo digo mañana.'], ['Gliel\'ho già dato.', 'Ya se lo di.'], ['Me lo puoi prestare?', '¿Me lo puedes prestar?'], ['Le foto? Te le mando stasera.', '¿Las fotos? Te las mando esta noche.'], ['Me ne vado, ciao!', '¡Me voy, chao!']],
    quiz: [['Il libro? ___ do a Marco.', ['Glielo', 'Gli lo', 'Se lo'], 0], ['La foto? ___ mandi? (a mí)', ['Mi la', 'Me la', 'Me lo'], 1], ['“Dámelo” =', ['Dammelo!', 'Dami lo!', 'Dalo mi!'], 0]] },

  { id: 'cine', lv: 'B1', cat: '👤 Pronombres', t: 'Ci y ne', sub: 'ci vado · ne ho due · ci penso · non ne posso più', lesson: 'a2-preposizioni',
    html: `<table><tr><th>Partícula</th><th>Significado</th><th>Ejemplo</th></tr>
      <tr><td><b>ci</b></td><td>allí / a ese lugar</td><td>Vai a Roma? Sì, <u>ci</u> vado domani.</td></tr>
      <tr><td><b>ci</b></td><td>en eso / a eso (pensare a, credere a)</td><td>Ci penso io. Non ci credo!</td></tr>
      <tr><td><b>ci</b></td><td>expresiones fijas</td><td>c'è / ci sono, ci vuole (hace falta), ci metto (tardo), ce l'ho (lo tengo)</td></tr>
      <tr><td><b>ne</b></td><td>de eso / de ellos (cantidad)</td><td>Quanti fratelli hai? <u>Ne</u> ho due.</td></tr>
      <tr><td><b>ne</b></td><td>de eso (parlare di, avere bisogno di)</td><td>Ne parliamo dopo. Ne ho bisogno.</td></tr>
      <tr><td><b>ne</b></td><td>de allí (venire da)</td><td>Me ne vado. (Me voy de aquí)</td></tr></table>
      <p><strong>ne es obligatorio con cantidades:</strong> “Tengo dos” = <em>Ne ho due</em> (no “ho due”). Con passato prossimo, el participio concuerda con la cantidad: <em>Quante pizze hai mangiato? Ne ho mangiat<b>e</b> tre.</em></p>
      <p><strong>Expresiones con ne/ci:</strong> <em>non ne posso più</em> (no puedo más), <em>ne vale la pena</em> (vale la pena), <em>me ne frego</em> (me da igual, vulgar suave), <em>ce la faccio</em> (lo logro), <em>non ce la faccio più</em>.</p>`,
    ex: [['Vai in palestra? Sì, ci vado ogni giorno.', '¿Vas al gym? Sí, voy todos los días.'], ['Quanti caffè bevi? Ne bevo tre.', '¿Cuántos cafés tomas? Tomo tres.'], ['Ci vuole un\'ora in treno.', 'Se tarda una hora en tren.'], ['Non ne posso più di questo caldo!', '¡No aguanto más este calor!'], ['Hai la patente? Sì, ce l\'ho.', '¿Tienes licencia? Sí, la tengo.']],
    quiz: [['Quante pizze vuoi? ___ voglio due.', ['Ci', 'Ne', 'Le'], 1], ['Vai al cinema? Sì, ___ vado stasera.', ['ne', 'ci', 'lo'], 1], ['“No puedo más” =', ['Non posso di più', 'Non ne posso più', 'Non ci posso più'], 1]] },

  { id: 'relativi', lv: 'B1', cat: '👤 Pronombres', t: 'Pronombres relativos', sub: 'che, cui, il quale, chi, quello che', lesson: 'b1-relazioni',
    html: `<table><tr><th>Uso</th><th>Italiano</th><th>Ejemplo</th></tr>
      <tr><td>sujeto u objeto directo</td><td><b>che</b></td><td>Il film <u>che</u> ho visto… / La ragazza <u>che</u> parla…</td></tr>
      <tr><td>después de preposición</td><td><b>cui</b></td><td>La persona <u>con cui</u> lavoro… / La città <u>in cui</u> vivo…</td></tr>
      <tr><td>formal o para evitar ambigüedad</td><td><b>il quale, la quale, i quali, le quali</b></td><td>Il collega <u>con il quale</u> ho parlato…</td></tr>
      <tr><td>“lo que”</td><td><b>quello che / ciò che</b></td><td><u>Quello che</u> dici è vero.</td></tr>
      <tr><td>“quien / el que” (personas en general)</td><td><b>chi</b></td><td><u>Chi</u> dorme non piglia pesci.</td></tr>
      <tr><td>“cuyo”</td><td><b>il cui, la cui, i cui, le cui</b></td><td>Lo scrittore <u>il cui</u> libro ho letto…</td></tr>
      <tr><td>“lo cual” (toda la frase)</td><td><b>il che</b></td><td>È arrivato tardi, <u>il che</u> mi ha irritato.</td></tr></table>
      <p><strong>Errores típicos:</strong> nunca <em>che</em> tras preposición (<em>con che</em> ✗ → <em>con cui</em>). <em>cui</em> sin preposición = “a quien”: <em>la persona cui ho scritto</em> (formal).</p>
      <p><strong>dove / in cui</strong> para lugares: <em>la casa dove / in cui sono nato</em>. <strong>quando / in cui</strong> para tiempo: <em>il giorno in cui ci siamo conosciuti</em>.</p>`,
    ex: [['La ragazza che vedi è mia sorella.', 'La chica que ves es mi hermana.'], ['È la persona di cui mi fido di più.', 'Es la persona en quien más confío.'], ['Quello che mi serve è un po\' di tempo.', 'Lo que necesito es un poco de tiempo.'], ['Chi cerca trova.', 'Quien busca, encuentra.'], ['Il giorno in cui ci siamo conosciuti pioveva.', 'El día en que nos conocimos llovía.']],
    quiz: [['La persona con ___ lavoro è simpatica.', ['che', 'cui', 'quale'], 1], ['Il libro ___ leggo è bellissimo.', ['che', 'cui', 'di cui'], 0], ['“Lo que dices” =', ['ciò dici', 'quello che dici', 'che dici'], 1]] },

  // ======================= 🔗 PREPOSICIONES Y CONECTORES =======================
  { id: 'preposizioni', lv: 'A1', cat: '🔗 Preposiciones y conectores', t: 'Preposiciones y sus contracciones', sub: 'di, a, da, in, con, su, per, tra/fra · del, al, nel…', lesson: 'citta',
    html: `<p>Las preposiciones <em>di, a, da, in, su</em> se unen al artículo (como “a + el = al”):</p>
      <table><tr><th></th><th>il</th><th>lo</th><th>l'</th><th>la</th><th>i</th><th>gli</th><th>le</th></tr>
      <tr><td><b>di</b></td><td>del</td><td>dello</td><td>dell'</td><td>della</td><td>dei</td><td>degli</td><td>delle</td></tr>
      <tr><td><b>a</b></td><td>al</td><td>allo</td><td>all'</td><td>alla</td><td>ai</td><td>agli</td><td>alle</td></tr>
      <tr><td><b>da</b></td><td>dal</td><td>dallo</td><td>dall'</td><td>dalla</td><td>dai</td><td>dagli</td><td>dalle</td></tr>
      <tr><td><b>in</b></td><td>nel</td><td>nello</td><td>nell'</td><td>nella</td><td>nei</td><td>negli</td><td>nelle</td></tr>
      <tr><td><b>su</b></td><td>sul</td><td>sullo</td><td>sull'</td><td>sulla</td><td>sui</td><td>sugli</td><td>sulle</td></tr></table>
      <p><em>con, per, tra, fra</em> no se unen (<em>con il treno</em>; en el habla se oye <em>col</em>).</p>
      <table><tr><th>Prep.</th><th>Usos principales</th><th>Ejemplos</th></tr>
      <tr><td><b>di</b></td><td>posesión, materia, origen (con essere), tema, comparación</td><td>il libro di Marco · una giacca di pelle · sono di Panama · parliamo di calcio · più alto di me</td></tr>
      <tr><td><b>a</b></td><td>ciudades, dirección a personas, hora, edad, modo</td><td>vado a Roma · lo do a Luca · alle otto · a 20 anni · a piedi, al forno</td></tr>
      <tr><td><b>da</b></td><td>procedencia, a casa de, desde hace, finalidad, agente pasiva, característica</td><td>vengo da Milano · vado dal medico · studio da un anno · macchina da corsa · scritto da Dante · la ragazza dagli occhi verdi</td></tr>
      <tr><td><b>in</b></td><td>países, regiones, medios de transporte, lugares, años</td><td>in Italia · in treno · in banca · nel 2026</td></tr>
      <tr><td><b>su</b></td><td>sobre, encima, acerca de</td><td>sul tavolo · un libro su Roma</td></tr>
      <tr><td><b>per</b></td><td>para, por, durante, destino de viaje</td><td>è per te · per due ore · il treno per Napoli</td></tr>
      <tr><td><b>tra / fra</b></td><td>entre, dentro de (tiempo futuro)</td><td>tra casa e ufficio · fra dieci minuti (dentro de diez minutos)</td></tr></table>
      <p><strong>“Dentro de 10 minutos”</strong> = <em>tra / fra 10 minuti</em>. <strong>“Hace 10 minutos”</strong> = <em>10 minuti fa</em>. <strong>“Desde hace 1 año”</strong> = <em>da un anno</em>.</p>`,
    ex: [['Il libro è sul tavolo della cucina.', 'El libro está sobre la mesa de la cocina.'], ['Studio italiano da sei mesi.', 'Estudio italiano desde hace seis meses.'], ['Ci vediamo tra mezz\'ora.', 'Nos vemos dentro de media hora.'], ['Stasera vado da Giulia.', 'Esta noche voy a casa de Giulia.'], ['Il treno per Firenze parte alle nove.', 'El tren a Florencia sale a las nueve.']],
    quiz: [['Le chiavi sono ___ tavolo.', ['su il', 'sul', 'nel'], 1], ['“Estudio desde hace un año” =', ['Studio per un anno', 'Studio di un anno', 'Studio da un anno'], 2], ['“Dentro de dos días” =', ['tra due giorni', 'due giorni fa', 'da due giorni'], 0], ['Vado ___ dentista.', ['al', 'dal', 'nel'], 1]] },

  { id: 'luoghi', lv: 'A2', cat: '🔗 Preposiciones y conectores', t: 'A, in, da con lugares', sub: 'a Roma · in Italia · al mare · dal medico', lesson: 'a2-preposizioni',
    html: `<table><tr><th>Preposición</th><th>Con…</th><th>Ejemplos</th></tr>
      <tr><td><b>a</b></td><td>ciudades, islas pequeñas, casa, escuela, teatro, letto</td><td>a Roma · a Capri · a casa · a scuola · a teatro · a letto</td></tr>
      <tr><td><b>in</b></td><td>países, regiones, islas grandes, palabras en -ia/-eria, medios</td><td>in Italia · in Sicilia · in pizzeria · in farmacia · in banca · in centro · in ufficio · in macchina</td></tr>
      <tr><td><b>al / alla</b></td><td>algunos lugares fijos</td><td>al mare · al cinema · al bar · al supermercato · alla stazione · all'università</td></tr>
      <tr><td><b>da</b></td><td>personas y profesionales</td><td>da Marco · dal medico · dalla nonna · dal parrucchiere</td></tr>
      <tr><td><b>in</b> / <b>a</b> + montagna / campagna</td><td>lugares naturales</td><td>in montagna · in campagna · al lago · al mare</td></tr></table>
      <p>La misma preposición sirve para <strong>estar</strong> y para <strong>ir</strong>: <em>Sono a Roma / Vado a Roma</em>, <em>Sono in banca / Vado in banca</em>.</p>
      <p><strong>Medios de transporte:</strong> <em>in</em> sin artículo (<em>in treno, in aereo, in bici</em>), pero <em>a piedi, a cavallo</em>. Con un medio concreto: <em>con il treno delle 8</em>.</p>`,
    ex: [['Abito a Panama ma vorrei vivere in Italia.', 'Vivo en Panamá pero quisiera vivir en Italia.'], ['Andiamo al mare o in montagna?', '¿Vamos a la playa o a la montaña?'], ['Domani devo andare dal dentista.', 'Mañana tengo que ir al dentista.'], ['Vado al lavoro in bici.', 'Voy al trabajo en bici.']],
    quiz: [['Abito ___ Roma.', ['in', 'a', 'da'], 1], ['Vorrei vivere ___ Spagna.', ['in', 'a', 'al'], 0], ['Stasera vado ___ Paolo.', ['a', 'in', 'da'], 2]] },

  { id: 'verbiprep', lv: 'B1', cat: '🔗 Preposiciones y conectores', t: 'Verbos + preposición', sub: 'cominciare a · smettere di · pensare a · credere in', lesson: 'b1-pronomi',
    html: `<table><tr><th>+ a + infinitivo</th><th>+ di + infinitivo</th><th>sin preposición</th></tr>
      <tr><td>cominciare a, iniziare a, continuare a, imparare a, insegnare a, aiutare a, riuscire a, provare a, abituarsi a, andare a, venire a</td><td>finire di, smettere di, decidere di, cercare di (intentar), sperare di, pensare di (planear), credere di, ricordarsi di, dimenticare di, avere paura di, avere bisogno di, essere sicuro di</td><td>volere, potere, dovere, sapere, preferire, piacere, amare, desiderare, bisognare</td></tr></table>
      <table><tr><th>Español</th><th>Italiano</th></tr>
      <tr><td>pensar en</td><td>pensare <b>a</b> (<em>Penso a te</em>)</td></tr>
      <tr><td>pensar de (opinión)</td><td>pensare <b>di</b> (<em>Cosa pensi di lui?</em>)</td></tr>
      <tr><td>creer en</td><td>credere <b>in</b> (Dios, uno mismo) / <b>a</b> (cosas: <em>credere ai fantasmi</em>)</td></tr>
      <tr><td>enamorarse de</td><td>innamorarsi <b>di</b></td></tr>
      <tr><td>casarse con</td><td>sposarsi <b>con</b></td></tr>
      <tr><td>soñar con</td><td>sognare (sin prep.) / sognare <b>di</b> + inf.</td></tr>
      <tr><td>depender de</td><td>dipendere <b>da</b></td></tr>
      <tr><td>consistir en</td><td>consistere <b>in</b></td></tr>
      <tr><td>tratar de (intentar)</td><td>cercare <b>di</b> / provare <b>a</b></td></tr>
      <tr><td>acordarse de</td><td>ricordarsi <b>di</b></td></tr></table>`,
    ex: [['Ho cominciato a studiare italiano l\'anno scorso.', 'Empecé a estudiar italiano el año pasado.'], ['Ho smesso di fumare.', 'Dejé de fumar.'], ['Cerco di parlare ogni giorno.', 'Intento hablar todos los días.'], ['Dipende dal tempo.', 'Depende del tiempo.'], ['Penso sempre a te.', 'Siempre pienso en ti.']],
    quiz: [['Ho deciso ___ partire.', ['a', 'di', '(nada)'], 1], ['Sono riuscito ___ finire.', ['a', 'di', 'da'], 0], ['“Depende de ti” =', ['Dipende di te', 'Dipende da te', 'Dipende a te'], 1]] },

  { id: 'avverbi', lv: 'A2', cat: '🔗 Preposiciones y conectores', t: 'Adverbios', sub: '-mente · molto/poco · già, ancora, sempre, mai', lesson: 'giornata',
    html: `<p><strong>Formación con -mente:</strong> sobre el femenino del adjetivo: <em>lento → lentamente, veloce → velocemente</em>. Los que terminan en -le / -re pierden la e: <em>facile → facilmente, regolare → regolarmente</em>.</p>
      <p><strong>Irregulares:</strong> <em>buono → bene, cattivo → male, migliore → meglio, peggiore → peggio</em>.</p>
      <p><strong>molto, poco, tanto, troppo:</strong> como adverbio no cambian (<em>Lei è molto bella</em>); como adjetivo concuerdan (<em>Ho molti amici, molte amiche</em>).</p>
      <table><tr><th>Adverbio</th><th>Español</th><th>Ejemplo</th></tr>
      <tr><td>già</td><td>ya</td><td>Hai già mangiato?</td></tr>
      <tr><td>ancora</td><td>todavía / otra vez</td><td>Non è ancora arrivato. Ancora un caffè?</td></tr>
      <tr><td>sempre / spesso / a volte / raramente / mai</td><td>siempre / a menudo / a veces / rara vez / nunca</td><td>Vado spesso al cinema.</td></tr>
      <tr><td>appena</td><td>apenas / recién</td><td>Sono appena arrivato.</td></tr>
      <tr><td>subito</td><td>enseguida (¡falso amigo!)</td><td>Arrivo subito!</td></tr>
      <tr><td>presto / tardi</td><td>temprano o pronto / tarde</td><td>A presto!</td></tr>
      <tr><td>davvero / proprio</td><td>de verdad / realmente, justo</td><td>È proprio bello.</td></tr>
      <tr><td>anche / neanche (nemmeno, neppure)</td><td>también / tampoco</td><td>Neanch'io.</td></tr></table>
      <p><strong>Posición:</strong> con tiempos compuestos, <em>già, ancora, sempre, mai, appena</em> van entre el auxiliar y el participio: <em>Ho <u>già</u> mangiato. Non sono <u>mai</u> stato a Venezia.</em></p>`,
    ex: [['Parli italiano molto bene!', '¡Hablas italiano muy bien!'], ['Sono appena tornato dal lavoro.', 'Acabo de volver del trabajo.'], ['Non sono mai stato a Venezia.', 'Nunca he estado en Venecia.'], ['Arrivo subito, aspettami!', '¡Llego enseguida, espérame!'], ['Ho molti amici italiani.', 'Tengo muchos amigos italianos.']],
    quiz: [['Adverbio de “facile”', ['facilemente', 'facilmente', 'facilmenta'], 1], ['“Subito” significa…', ['súbitamente', 'enseguida', 'subido'], 1], ['Lei è ___ simpatica. (muy)', ['molta', 'molto', 'molte'], 1]] },

  { id: 'connettori', lv: 'B1', cat: '🔗 Preposiciones y conectores', t: 'Conectores', sub: 'però, quindi, invece, anche se, benché, siccome…', lesson: 'b1-racconti',
    html: `<table><tr><th>Idea</th><th>Conectores</th><th>Ejemplo</th></tr>
      <tr><td>Adición</td><td>e, anche, inoltre, per di più</td><td>È economico e inoltre è vicino.</td></tr>
      <tr><td>Contraste</td><td>ma, però, invece, tuttavia, eppure</td><td>Volevo uscire, però pioveva.</td></tr>
      <tr><td>Concesión</td><td>anche se (+ indicativo), benché / sebbene / nonostante (+ congiuntivo)</td><td>Anche se piove, esco. / Benché piova, esco.</td></tr>
      <tr><td>Causa</td><td>perché, poiché, siccome (al inicio), dato che</td><td>Siccome era tardi, siamo tornati.</td></tr>
      <tr><td>Consecuencia</td><td>quindi, allora, perciò, dunque, così</td><td>Sono stanco, quindi vado a letto.</td></tr>
      <tr><td>Finalidad</td><td>per + inf., affinché / perché + congiuntivo</td><td>Studio per migliorare. Te lo dico perché tu lo sappia.</td></tr>
      <tr><td>Tiempo</td><td>quando, mentre, appena, prima di / che, dopo (che), finché</td><td>Appena arrivo, ti chiamo.</td></tr>
      <tr><td>Condición</td><td>se, purché, a meno che (non) + congiuntivo</td><td>Vengo, purché tu mi aspetti.</td></tr>
      <tr><td>Ordenar</td><td>prima, poi, dopo, infine, alla fine</td><td>Prima mangiamo, poi usciamo.</td></tr>
      <tr><td>Opinión / resumen</td><td>secondo me, in effetti, insomma, comunque</td><td>Insomma, è andata bene.</td></tr></table>
      <p><strong>Ojo:</strong> <em>invece</em> = en cambio (no “invés”); <em>però</em> = pero; <em>perché</em> = porque y por qué.</p>`,
    ex: [['Anche se è caro, lo compro.', 'Aunque es caro, lo compro.'], ['Siccome pioveva, siamo rimasti a casa.', 'Como llovía, nos quedamos en casa.'], ['Io bevo caffè, lei invece beve tè.', 'Yo tomo café; ella, en cambio, toma té.'], ['Appena arrivo, ti scrivo.', 'En cuanto llegue, te escribo.']],
    quiz: [['___ piova, usciamo lo stesso.', ['Anche se', 'Benché', 'Perché'], 1], ['Sono stanco, ___ vado a letto.', ['quindi', 'invece', 'benché'], 0], ['“En cambio” =', ['invece', 'però', 'inoltre'], 0]] },

  // ======================= ⏱️ VERBOS =======================
  { id: 'presente', lv: 'A1', cat: '⏱️ Verbos', t: 'Presente: regulares, -isc e irregulares', sub: 'parlo, prendo, dormo, capisco · vado, faccio, vengo', lesson: 'giornata',
    html: `<table><tr><th>Persona</th><th>parlare</th><th>prendere</th><th>dormire</th><th>capire (-isc)</th></tr>
      <tr><td>io</td><td>parlo</td><td>prendo</td><td>dormo</td><td>capisco</td></tr>
      <tr><td>tu</td><td>parli</td><td>prendi</td><td>dormi</td><td>capisci</td></tr>
      <tr><td>lui/lei</td><td>parla</td><td>prende</td><td>dorme</td><td>capisce</td></tr>
      <tr><td>noi</td><td>parliamo</td><td>prendiamo</td><td>dormiamo</td><td>capiamo</td></tr>
      <tr><td>voi</td><td>parlate</td><td>prendete</td><td>dormite</td><td>capite</td></tr>
      <tr><td>loro</td><td>parlano</td><td>prendono</td><td>dormono</td><td>capiscono</td></tr></table>
      <p><strong>Trucos:</strong> <em>tu</em> siempre termina en <b>-i</b> y <em>noi</em> en <b>-iamo</b>. El acento de <em>loro</em> va lejos: PÁR-la-no, PRÉN-do-no.</p>
      <p><strong>-isc-:</strong> capire, finire, preferire, pulire, spedire, costruire, suggerire.</p>
      <p><strong>Ortografía:</strong> <em>cercare → cerchi, cerchiamo</em> (se añade h); <em>mangiare → mangi</em> (una sola i).</p>
      <table><tr><th>Irregular</th><th>Presente</th></tr>
      <tr><td>andare</td><td>vado, vai, va, andiamo, andate, vanno</td></tr>
      <tr><td>fare</td><td>faccio, fai, fa, facciamo, fate, fanno</td></tr>
      <tr><td>venire</td><td>vengo, vieni, viene, veniamo, venite, vengono</td></tr>
      <tr><td>dire</td><td>dico, dici, dice, diciamo, dite, dicono</td></tr>
      <tr><td>uscire</td><td>esco, esci, esce, usciamo, uscite, escono</td></tr>
      <tr><td>dare</td><td>do, dai, dà, diamo, date, danno</td></tr>
      <tr><td>sapere</td><td>so, sai, sa, sappiamo, sapete, sanno</td></tr>
      <tr><td>bere</td><td>bevo, bevi, beve, beviamo, bevete, bevono</td></tr>
      <tr><td>rimanere</td><td>rimango, rimani, rimane, rimaniamo, rimanete, rimangono</td></tr></table>
      <p>El presente también se usa para el <strong>futuro cercano</strong> (<em>Domani parto</em>) y con <strong>da</strong> para acciones que siguen (<em>Abito qui da 3 anni</em>).</p>`,
    ex: [['Di solito lavoro fino alle cinque.', 'Normalmente trabajo hasta las cinco.'], ['Capisci quello che dico?', '¿Entiendes lo que digo?'], ['Stasera usciamo con gli amici.', 'Esta noche salimos con los amigos.'], ['Cosa fai nel fine settimana?', '¿Qué haces el fin de semana?'], ['Domani parto per Roma.', 'Mañana salgo para Roma.']],
    quiz: [['Noi ___ (parlare) italiano.', ['parlate', 'parliamo', 'parlano'], 1], ['Loro ___ (finire) alle sei.', ['finono', 'finiscono', 'finiscano'], 1], ['Io ___ (andare) al lavoro.', ['ando', 'vado', 'vai'], 1], ['Tu ___ (cercare) casa?', ['cerci', 'cerchi', 'cercchi'], 1]] },

  { id: 'passato', lv: 'A1', cat: '⏱️ Verbos', t: 'Passato prossimo', sub: 'ho mangiato · sono andato/a · participios irregulares', lesson: 'weekend',
    html: `<p><strong>avere / essere</strong> en presente + <strong>participio</strong> (-are → <b>-ato</b>, -ere → <b>-uto</b>, -ire → <b>-ito</b>).</p>
      <table><tr><th>Con AVERE (la mayoría)</th><th>Con ESSERE</th></tr>
      <tr><td>verbos con objeto directo: mangiare, comprare, vedere, fare…</td><td>movimiento: andare, venire, partire, arrivare, tornare, entrare, uscire, cadere</td></tr>
      <tr><td>muchos intransitivos de actividad: dormire, lavorare, viaggiare, camminare</td><td>estado y cambio: essere, stare, rimanere, nascere, morire, diventare, crescere</td></tr>
      <tr><td>participio <u>no</u> concuerda (salvo con lo/la/li/le)</td><td>reflexivos y <em>piacere</em>, <em>succedere</em>, <em>costare</em>, <em>sembrare</em></td></tr>
      <tr><td><em>Ho mangiato. Abbiamo dormito.</em></td><td>participio <u>concuerda</u>: <em>È andat<b>a</b>. Siamo partit<b>i</b>.</em></td></tr></table>
      <table><tr><th>Participios irregulares muy usados</th></tr>
      <tr><td>fare → <b>fatto</b> · dire → <b>detto</b> · vedere → <b>visto</b> · prendere → <b>preso</b> · mettere → <b>messo</b> · leggere → <b>letto</b> · scrivere → <b>scritto</b> · aprire → <b>aperto</b> · chiudere → <b>chiuso</b> · chiedere → <b>chiesto</b> · rispondere → <b>risposto</b> · bere → <b>bevuto</b> · venire → <b>venuto</b> · essere/stare → <b>stato</b> · rimanere → <b>rimasto</b> · nascere → <b>nato</b> · morire → <b>morto</b> · perdere → <b>perso</b> · vivere → <b>vissuto</b> · scegliere → <b>scelto</b> · decidere → <b>deciso</b> · correre → <b>corso</b> · offrire → <b>offerto</b> · succedere → <b>successo</b></td></tr></table>
      <p><strong>Verbos con dos auxiliares:</strong> <em>cominciare, finire, passare, cambiare</em>: <em>Ho cominciato il lavoro</em> (con objeto) / <em>Il film è cominciato</em> (sin objeto).</p>
      <p><strong>Modales:</strong> toman el auxiliar del verbo que acompañan: <em>Ho dovuto lavorare / Sono dovuto partire</em> (en el habla se acepta <em>ho dovuto partire</em>).</p>`,
    ex: [['Ieri ho mangiato una pizza buonissima.', 'Ayer comí una pizza buenísima.'], ['Giulia è andata a Milano.', 'Giulia se fue a Milán.'], ['Cosa hai fatto nel weekend?', '¿Qué hiciste el fin de semana?'], ['Siamo rimasti a casa tutto il giorno.', 'Nos quedamos en casa todo el día.'], ['Mi è piaciuto molto il film.', 'Me gustó mucho la película.']],
    quiz: [['Ieri ___ al cinema. (andare, io, chico)', ['ho andato', 'sono andato', 'sono andata'], 1], ['Participio de “prendere”', ['prenduto', 'preso', 'prendito'], 1], ['Le ragazze ___ tardi. (arrivare)', ['hanno arrivato', 'sono arrivate', 'sono arrivati'], 1], ['Mi ___ la pizza. (piacere)', ['ha piaciuto', 'è piaciuta', 'è piaciuto'], 1]] },

  { id: 'imperfetto', lv: 'A2', cat: '⏱️ Verbos', t: 'Imperfetto vs passato prossimo', sub: 'giocavo / ho giocato · mentre, all\'improvviso', lesson: 'a2-imperfetto',
    html: `<p><strong>Formación:</strong> quita -re y añade -vo, -vi, -va, -vamo, -vate, -vano: <em>parlavo, prendevo, dormivo</em>. Irregulares: <em>essere</em> → ero, eri, era, eravamo, eravate, erano · <em>fare</em> → facevo · <em>dire</em> → dicevo · <em>bere</em> → bevevo.</p>
      <table><tr><th>Imperfetto (≈ -aba / -ía)</th><th>Passato prossimo (≈ -é / -í)</th></tr>
      <tr><td>descripciones: <em>Era una giornata bellissima.</em></td><td>acciones concretas y terminadas: <em>Siamo andati al mare.</em></td></tr>
      <tr><td>costumbres: <em>Da bambino giocavo a calcio.</em></td><td>acciones con número de veces: <em>Ci sono andato tre volte.</em></td></tr>
      <tr><td>acción en curso (fondo): <em>Mentre cucinavo…</em></td><td>acción que interrumpe: <em>…è suonato il telefono.</em></td></tr>
      <tr><td>estados físicos/mentales: <em>Avevo fame. Ero stanco.</em></td><td>cambio de estado puntual: <em>All'improvviso ho avuto paura.</em></td></tr>
      <tr><td>hora y edad en el pasado: <em>Erano le dieci. Avevo 15 anni.</em></td><td>duración cerrada: <em>Ho vissuto a Roma per due anni.</em></td></tr></table>
      <p><strong>Cambian de significado:</strong> <em>sapevo</em> (sabía) / <em>ho saputo</em> (me enteré) · <em>conoscevo</em> (conocía) / <em>ho conosciuto</em> (conocí a alguien por primera vez) · <em>dovevo</em> (tenía que, quizás no lo hice) / <em>ho dovuto</em> (tuve que, y lo hice).</p>`,
    ex: [['Da bambino vivevo con i nonni.', 'De niño vivía con mis abuelos.'], ['Mentre studiavo, è arrivato Marco.', 'Mientras estudiaba, llegó Marco.'], ['Faceva caldo e c\'era tanta gente.', 'Hacía calor y había mucha gente.'], ['Ho conosciuto Luca a una festa.', 'Conocí a Luca en una fiesta.'], ['Ieri ho saputo la notizia.', 'Ayer me enteré de la noticia.']],
    quiz: [['Da piccolo ___ a calcio ogni giorno.', ['ho giocato', 'giocavo', 'gioco'], 1], ['Mentre ___ la TV, è suonato il telefono.', ['guardavo', 'ho guardato', 'guardo'], 0], ['“Me enteré” =', ['sapevo', 'ho saputo', 'sapetti'], 1]] },

  { id: 'trapassato', lv: 'B1', cat: '⏱️ Verbos', t: 'Trapassato prossimo', sub: 'avevo mangiato · ero partito', lesson: 'b1-racconti',
    html: `<p>Imperfetto de <em>avere/essere</em> + participio. Es el “había + participio” español: una acción anterior a otra del pasado.</p>
      <table><tr><th>Persona</th><th>con avere</th><th>con essere</th></tr>
      <tr><td>io</td><td>avevo finito</td><td>ero partito/a</td></tr>
      <tr><td>tu</td><td>avevi finito</td><td>eri partito/a</td></tr>
      <tr><td>lui/lei</td><td>aveva finito</td><td>era partito/a</td></tr>
      <tr><td>noi</td><td>avevamo finito</td><td>eravamo partiti/e</td></tr>
      <tr><td>voi</td><td>avevate finito</td><td>eravate partiti/e</td></tr>
      <tr><td>loro</td><td>avevano finito</td><td>erano partiti/e</td></tr></table>
      <p>Típico con <em>già, mai, appena, quando, perché</em>: <em>Quando sono arrivato, il film era già cominciato. Non avevo mai visto la neve.</em></p>`,
    ex: [['Quando sono arrivato, il treno era già partito.', 'Cuando llegué, el tren ya había salido.'], ['Non avevo mai mangiato una pizza così buona.', 'Nunca había comido una pizza tan buena.'], ['Mi ha detto che aveva perso le chiavi.', 'Me dijo que había perdido las llaves.']],
    quiz: [['Quando sono arrivato, lei ___ già ___ .', ['è / uscita', 'era / uscita', 'aveva / uscito'], 1], ['“Yo había comido” =', ['ho mangiato', 'avevo mangiato', 'mangiavo'], 1]] },

  { id: 'futuro', lv: 'A2', cat: '⏱️ Verbos', t: 'Futuro simple y anterior', sub: 'parlerò · andrò · avrò finito', lesson: 'a2-futuro',
    html: `<table><tr><th>Persona</th><th>parlare</th><th>prendere</th><th>partire</th></tr>
      <tr><td>io</td><td>parlerò</td><td>prenderò</td><td>partirò</td></tr>
      <tr><td>tu</td><td>parlerai</td><td>prenderai</td><td>partirai</td></tr>
      <tr><td>lui/lei</td><td>parlerà</td><td>prenderà</td><td>partirà</td></tr>
      <tr><td>noi</td><td>parleremo</td><td>prenderemo</td><td>partiremo</td></tr>
      <tr><td>voi</td><td>parlerete</td><td>prenderete</td><td>partirete</td></tr>
      <tr><td>loro</td><td>parleranno</td><td>prenderanno</td><td>partiranno</td></tr></table>
      <p>En -are la <b>a</b> cambia a <b>e</b> (parl<u>e</u>rò). Ortografía: <em>cercherò, pagherò, mangerò, comincerò</em>.</p>
      <p><strong>Raíces irregulares:</strong> essere → <b>sar</b>ò · avere → <b>avr</b>ò · andare → <b>andr</b>ò · fare → <b>far</b>ò · dare → <b>dar</b>ò · stare → <b>star</b>ò · venire → <b>verr</b>ò · volere → <b>vorr</b>ò · potere → <b>potr</b>ò · dovere → <b>dovr</b>ò · sapere → <b>sapr</b>ò · vedere → <b>vedr</b>ò · vivere → <b>vivr</b>ò · bere → <b>berr</b>ò · rimanere → <b>rimarr</b>ò.</p>
      <p><strong>Usos:</strong> planes y predicciones; <strong>suposición en el presente</strong> (<em>Sarà stanco</em> = debe de estar cansado; <em>Che ore saranno?</em>); después de <em>quando, appena, se</em> referido al futuro (<em>Quando arriverò, ti chiamerò</em> = cuando llegue…).</p>
      <p><strong>Futuro anteriore</strong> (avrò/sarò + participio) = “habré hecho”, o suposición sobre el pasado: <em>Appena avrò finito, uscirò. Avrà perso il treno</em> (habrá perdido el tren).</p>`,
    ex: [['L\'anno prossimo andrò in Italia.', 'El año que viene iré a Italia.'], ['Quando avrò più soldi, viaggerò di più.', 'Cuando tenga más dinero, viajaré más.'], ['Non risponde, sarà occupato.', 'No contesta, debe de estar ocupado.'], ['Appena avrò finito, ti chiamo.', 'En cuanto haya terminado, te llamo.']],
    quiz: [['Futuro de “fare”, io:', ['farò', 'facerò', 'fazzo'], 0], ['Futuro de “parlare”, noi:', ['parlaremo', 'parleremo', 'parliamo'], 1], ['“Debe de tener 30 años” =', ['Ha 30 anni', 'Avrà 30 anni', 'Avrebbe 30 anni'], 1]] },

  { id: 'condizionale', lv: 'A2', cat: '⏱️ Verbos', t: 'Condicional presente y pasado', sub: 'vorrei · mi piacerebbe · avrei voluto', lesson: 'a2-lavoro',
    html: `<p>Raíz del futuro + <b>-ei, -esti, -ebbe, -emmo, -este, -ebbero</b>.</p>
      <table><tr><th>Persona</th><th>parlare</th><th>essere</th><th>potere</th><th>volere</th></tr>
      <tr><td>io</td><td>parlerei</td><td>sarei</td><td>potrei</td><td>vorrei</td></tr>
      <tr><td>tu</td><td>parleresti</td><td>saresti</td><td>potresti</td><td>vorresti</td></tr>
      <tr><td>lui/lei</td><td>parlerebbe</td><td>sarebbe</td><td>potrebbe</td><td>vorrebbe</td></tr>
      <tr><td>noi</td><td>parleremmo</td><td>saremmo</td><td>potremmo</td><td>vorremmo</td></tr>
      <tr><td>voi</td><td>parlereste</td><td>sareste</td><td>potreste</td><td>vorreste</td></tr>
      <tr><td>loro</td><td>parlerebbero</td><td>sarebbero</td><td>potrebbero</td><td>vorrebbero</td></tr></table>
      <p><strong>Usos:</strong> cortesía (<em>Vorrei un caffè. Potrebbe aiutarmi?</em>), deseos (<em>Mi piacerebbe…</em>), consejos (<em>Dovresti riposare</em>), noticias no confirmadas (<em>Il ministro sarebbe malato</em> = estaría enfermo, según fuentes).</p>
      <p><strong>Condizionale passato</strong> (avrei/sarei + participio) = “habría hecho”: <em>Avrei voluto venire, ma ero malato.</em> <strong>¡Clave!</strong> El futuro en el pasado usa condicional <u>compuesto</u>: <em>Ha detto che sarebbe venuto</em> (dijo que vendría).</p>
      <p><strong>Ojo:</strong> <em>parleremmo</em> (hablaríamos, doble m) ≠ <em>parleremo</em> (hablaremos).</p>`,
    ex: [['Vorrei un tavolo per due, per favore.', 'Quisiera una mesa para dos, por favor.'], ['Mi piacerebbe vivere a Firenze.', 'Me gustaría vivir en Florencia.'], ['Dovresti parlare con lei.', 'Deberías hablar con ella.'], ['Avrei voluto chiamarti, ma non avevo il telefono.', 'Habría querido llamarte, pero no tenía el teléfono.'], ['Ha detto che sarebbe arrivato alle otto.', 'Dijo que llegaría a las ocho.']],
    quiz: [['“Me gustaría” =', ['Mi piacerà', 'Mi piacerebbe', 'Mi piaceva'], 1], ['“Hablaríamos” =', ['parleremo', 'parleremmo', 'parlavamo'], 1], ['Ha detto che ___ il giorno dopo.', ['verrebbe', 'sarebbe venuto', 'verrà'], 1]] },

  { id: 'imperativo', lv: 'A2', cat: '⏱️ Verbos', t: 'Imperativo', sub: 'parla! · non parlare! · mi dica · fammi', lesson: 'a2-colloquiale',
    html: `<table><tr><th></th><th>parlare</th><th>prendere</th><th>sentire</th><th>finire</th></tr>
      <tr><td>tu</td><td>parla!</td><td>prendi!</td><td>senti!</td><td>finisci!</td></tr>
      <tr><td>Lei (formal)</td><td>parli!</td><td>prenda!</td><td>senta!</td><td>finisca!</td></tr>
      <tr><td>noi</td><td>parliamo!</td><td>prendiamo!</td><td>sentiamo!</td><td>finiamo!</td></tr>
      <tr><td>voi</td><td>parlate!</td><td>prendete!</td><td>sentite!</td><td>finite!</td></tr></table>
      <p><strong>Negativo:</strong> con <em>tu</em>: <b>non + infinitivo</b> (<em>Non parlare! Non preoccuparti!</em>); el resto: non + imperativo (<em>Non parli! Non parlate!</em>).</p>
      <p><strong>Irregulares (tu):</strong> andare → <b>va'</b> / vai · fare → <b>fa'</b> / fai · dare → <b>da'</b> / dai · stare → <b>sta'</b> / stai · dire → <b>di'</b> · essere → <b>sii</b> · avere → <b>abbi</b>. Formal (Lei): vada, faccia, dia, stia, dica, sia, abbia, venga.</p>
      <p><strong>Pronombres:</strong> se pegan con tu/noi/voi (<em>Chiamami! Diciamolo! Ditemi!</em>) y van delante con Lei (<em>Mi dica. Si accomodi.</em>). Con <em>va', fa', da', sta', di'</em> se duplica la consonante: <em>fammi, dimmi, dallo, stammi bene</em> (excepto con gli: <em>digli</em>).</p>`,
    ex: [['Dimmi la verità!', '¡Dime la verdad!'], ['Non preoccuparti, ci penso io.', 'No te preocupes, yo me encargo.'], ['Prego, si accomodi.', 'Adelante, siéntese.'], ['Scusi, mi dica dov\'è la stazione.', 'Disculpe, dígame dónde está la estación.'], ['Fammi sapere quando arrivi.', 'Avísame cuando llegues.']],
    quiz: [['“¡No hables!” (tu)', ['Non parli!', 'Non parlare!', 'Non parla!'], 1], ['“Dímelo” =', ['Dimmelo!', 'Dilo mi!', 'Dicimelo!'], 0], ['Formal: “Venga” es de…', ['vedere', 'venire', 'vendere'], 1]] },

  { id: 'congiuntivo', lv: 'B1', cat: '⏱️ Verbos', t: 'Congiuntivo (subjuntivo)', sub: 'penso che sia · speravo che venisse · credo che abbia capito', lesson: 'b1-congiuntivo',
    html: `<table><tr><th>Persona</th><th>Presente: parlare / prendere / partire</th><th>essere / avere</th></tr>
      <tr><td>che io</td><td>parli / prenda / parta</td><td>sia / abbia</td></tr>
      <tr><td>che tu</td><td>parli / prenda / parta</td><td>sia / abbia</td></tr>
      <tr><td>che lui/lei</td><td>parli / prenda / parta</td><td>sia / abbia</td></tr>
      <tr><td>che noi</td><td>parliamo / prendiamo / partiamo</td><td>siamo / abbiamo</td></tr>
      <tr><td>che voi</td><td>parliate / prendiate / partiate</td><td>siate / abbiate</td></tr>
      <tr><td>che loro</td><td>parlino / prendano / partano</td><td>siano / abbiano</td></tr></table>
      <p><strong>Irregulares (presente):</strong> vada, faccia, venga, stia, dia, dica, possa, voglia, debba, sappia, esca.</p>
      <p><strong>Imperfetto:</strong> parlassi, prendessi, partissi · essere → fossi · avere → avessi · fare → facessi · dare → dessi · stare → stessi · dire → dicessi.</p>
      <p><strong>Pasado / trapassato:</strong> <em>che io abbia parlato / che io avessi parlato</em>.</p>
      <table><tr><th>Se usa después de…</th><th>Ejemplo</th></tr>
      <tr><td>opinión: penso, credo, mi sembra, immagino che</td><td>Penso che sia vero. (¡en español sería indicativo!)</td></tr>
      <tr><td>deseo y voluntad: voglio, spero, preferisco che</td><td>Spero che tu stia bene.</td></tr>
      <tr><td>duda: non so se, dubito che</td><td>Non so se venga.</td></tr>
      <tr><td>emoción: sono contento, ho paura che</td><td>Sono contento che tu sia qui.</td></tr>
      <tr><td>impersonales: è importante, bisogna, è possibile che</td><td>Bisogna che tu studi.</td></tr>
      <tr><td>conjunciones: benché, sebbene, affinché, prima che, purché, a meno che, senza che</td><td>Esco prima che piova.</td></tr></table>
      <p><strong>Concordancia:</strong> verbo principal en presente → congiuntivo presente/pasado (<em>Penso che venga / sia venuto</em>); en pasado o condicional → imperfetto/trapassato (<em>Pensavo che venisse / fosse venuto; Vorrei che tu venissi</em>).</p>
      <p>Mismo sujeto → <em>di</em> + infinitivo: <em>Penso di partire</em> (no “penso che io parta”).</p>`,
    ex: [['Penso che sia una buona idea.', 'Creo que es una buena idea.'], ['Spero che tu stia meglio.', 'Espero que estés mejor.'], ['Benché piova, usciamo lo stesso.', 'Aunque llueva, salimos igual.'], ['Pensavo che fossi a casa.', 'Pensaba que estabas en casa.'], ['Vorrei che tu venissi con me.', 'Me gustaría que vinieras conmigo.']],
    quiz: [['Penso che Marco ___ stanco.', ['è', 'sia', 'fosse'], 1], ['Speravo che tu ___ .', ['venga', 'venissi', 'vieni'], 1], ['“Pienso irme” =', ['Penso che io parta', 'Penso di partire', 'Penso partire'], 1]] },

  { id: 'ipotetico', lv: 'B1', cat: '⏱️ Verbos', t: 'Periodo hipotético (condicionales)', sub: 'se piove… · se avessi… · se avessi saputo…', lesson: 'b1-ipotesi',
    html: `<table><tr><th>Tipo</th><th>Se…</th><th>Resultado</th><th>Ejemplo</th></tr>
      <tr><td>Real</td><td>presente / futuro</td><td>presente / futuro / imperativo</td><td>Se piove, resto a casa. Se vieni, ti presento Luca.</td></tr>
      <tr><td>Posible / irreal presente</td><td>congiuntivo imperfetto</td><td>condizionale presente</td><td>Se avessi tempo, viaggerei.</td></tr>
      <tr><td>Irreal pasado</td><td>congiuntivo trapassato</td><td>condizionale passato</td><td>Se avessi studiato, avrei passato l'esame.</td></tr>
      <tr><td>Mixto</td><td>congiuntivo trapassato</td><td>condizionale presente</td><td>Se avessi accettato quel lavoro, adesso vivrei a Milano.</td></tr></table>
      <p><strong>Nunca condicional después de se:</strong> <em>se avrei</em> ✗ → <em>se avessi</em> ✓ (es un error que cometen hasta los italianos jóvenes).</p>
      <p><strong>En el habla</strong> se oye el imperfetto en lugar del irreal pasado: <em>Se lo sapevo, te lo dicevo</em> (= Se l'avessi saputo, te l'avrei detto). Entiéndelo, pero no lo escribas.</p>
      <p>Otras formas: <em>magari + congiuntivo imperfetto</em> (¡ojalá!), <em>come se + congiuntivo</em> (como si), <em>al posto tuo</em> (en tu lugar).</p>`,
    ex: [['Se fossi ricco, viaggerei sempre.', 'Si fuera rico, viajaría siempre.'], ['Se avessi saputo, sarei venuto.', 'Si lo hubiera sabido, habría venido.'], ['Magari potessi venire!', '¡Ojalá pudiera ir!'], ['Parla come se fosse il capo.', 'Habla como si fuera el jefe.'], ['Al posto tuo, accetterei.', 'En tu lugar, aceptaría.']],
    quiz: [['Se ___ tempo, verrei.', ['avrei', 'avessi', 'ho avuto'], 1], ['Se avessi studiato, ___ l\'esame.', ['passerei', 'avrei passato', 'ho passato'], 1], ['“¡Ojalá!” =', ['Magari!', 'Ojalà!', 'Purtroppo!'], 0]] },

  { id: 'gerundio', lv: 'B1', cat: '⏱️ Verbos', t: 'Gerundio, infinitivo y participio', sub: 'sto mangiando · studiando si impara · dopo aver mangiato', lesson: 'b1-racconti',
    html: `<p><strong>Gerundio:</strong> -are → <b>-ando</b>; -ere/-ire → <b>-endo</b>. Irregulares: <em>facendo, dicendo, bevendo, ponendo</em>.</p>
      <table><tr><th>Uso</th><th>Ejemplo</th></tr>
      <tr><td>stare + gerundio (acción en curso)</td><td>Sto lavorando. Stavo dormendo.</td></tr>
      <tr><td>modo / medio</td><td>Studiando si impara. (Estudiando se aprende.)</td></tr>
      <tr><td>tiempo (mientras)</td><td>Tornando a casa, ho visto Marco.</td></tr>
      <tr><td>causa</td><td>Essendo stanco, sono andato a letto.</td></tr></table>
      <p><strong>Ojo:</strong> el italiano usa menos el gerundio que el español. “Llevo dos años estudiando” = <em>Studio da due anni</em>. “Sigo trabajando” = <em>Continuo a lavorare</em>.</p>
      <p><strong>Infinitivo</strong> como sustantivo: <em>Viaggiare è bello. Il mangiare italiano.</em> <strong>Infinitivo pasado</strong>: <em>dopo aver(e) mangiato / dopo essere arrivato</em> (después de haber…).</p>
      <p><strong>Participio pasado</strong> solo (formal): <em>Finita la lezione, siamo usciti</em> (terminada la clase…). <em>Una volta arrivati, chiamateci.</em></p>`,
    ex: [['Sto cucinando, ti chiamo dopo.', 'Estoy cocinando, te llamo después.'], ['Sbagliando si impara.', 'Equivocándose se aprende.'], ['Dopo aver mangiato, siamo usciti.', 'Después de comer, salimos.'], ['Finita la riunione, siamo andati a pranzo.', 'Terminada la reunión, fuimos a almorzar.']],
    quiz: [['Gerundio de “fare”', ['fando', 'facendo', 'farendo'], 1], ['“Después de llegar” =', ['dopo arrivare', 'dopo essere arrivato', 'dopo arrivando'], 1], ['“Llevo 2 años viviendo aquí” =', ['Sto vivendo qui da 2 anni', 'Vivo qui da 2 anni', 'Ho vissuto qui per 2 anni'], 1]] },

  { id: 'passiva', lv: 'B1', cat: '⏱️ Verbos', t: 'Pasiva y si impersonal', sub: 'è stato costruito · viene servito · si mangia bene', lesson: 'b1-notizie',
    html: `<p><strong>Pasiva</strong> = essere + participio (concuerda): <em>La casa è stata venduta.</em> Con <b>venire</b> (solo tiempos simples, idea de proceso): <em>Il pranzo viene servito alle 13.</em> Con <b>andare</b> = obligación: <em>Il biglietto va convalidato</em> (debe validarse). Agente con <b>da</b>: <em>scritto da Dante</em>.</p>
      <table><tr><th>Activa</th><th>Pasiva</th></tr>
      <tr><td>Il governo approva la legge.</td><td>La legge è / viene approvata dal governo.</td></tr>
      <tr><td>Hanno costruito il ponte.</td><td>Il ponte è stato costruito.</td></tr>
      <tr><td>Costruiranno una scuola.</td><td>Sarà / verrà costruita una scuola.</td></tr></table>
      <p><strong>Si impersonal / pasivo</strong> = “se”: <em>Si dice che… In Italia si mangia bene.</em> Con sustantivo plural el verbo va en plural: <em>Si vendono case</em>. Con adjetivo, el adjetivo va en plural: <em>Quando si è giovani…</em> En tiempos compuestos usa essere: <em>Si è mangiato bene.</em></p>`,
    ex: [['La legge è stata approvata ieri.', 'La ley fue aprobada ayer.'], ['In Italia si mangia molto bene.', 'En Italia se come muy bien.'], ['Si vendono biglietti online.', 'Se venden boletos en línea.'], ['Il biglietto va convalidato prima di salire.', 'El boleto debe validarse antes de subir.']],
    quiz: [['La casa ___ venduta l\'anno scorso.', ['ha stata', 'è stata', 'è stato'], 1], ['In questo negozio ___ vestiti usati.', ['si vende', 'si vendono', 'vende'], 1]] },

  { id: 'indiretto', lv: 'B1', cat: '⏱️ Verbos', t: 'Estilo indirecto', sub: 'ha detto che era stanco · mi ha chiesto se…', lesson: 'b1-email',
    html: `<table><tr><th>Directo</th><th>Indirecto (verbo introductor en pasado)</th></tr>
      <tr><td>presente: “Sono stanco.”</td><td>imperfetto: Ha detto che <b>era</b> stanco.</td></tr>
      <tr><td>passato prossimo: “Ho finito.”</td><td>trapassato: Ha detto che <b>aveva finito</b>.</td></tr>
      <tr><td>futuro: “Verrò.”</td><td>condizionale passato: Ha detto che <b>sarebbe venuto</b>.</td></tr>
      <tr><td>imperativo: “Chiamami!”</td><td>di + infinitivo: Mi ha detto <b>di chiamarlo</b>.</td></tr>
      <tr><td>pregunta: “Vieni?”</td><td>se: Mi ha chiesto <b>se venivo</b> (o venissi, formal).</td></tr></table>
      <p>También cambian: <em>io → lui/lei, qui → lì, oggi → quel giorno, domani → il giorno dopo, ieri → il giorno prima, questo → quello</em>.</p>
      <p>Si el verbo introductor está en presente, no cambia nada: <em>Dice che è stanco.</em></p>`,
    ex: [['Marco ha detto che era stanco.', 'Marco dijo que estaba cansado.'], ['Mi ha detto che sarebbe venuto il giorno dopo.', 'Me dijo que vendría al día siguiente.'], ['Mi ha chiesto se volevo uscire.', 'Me preguntó si quería salir.'], ['Mi ha detto di aspettarlo.', 'Me dijo que lo esperara.']],
    quiz: [['“Sono stanco”, ha detto. → Ha detto che ___ stanco.', ['è stato', 'era', 'sarà'], 1], ['“Chiamami!” → Mi ha detto ___ .', ['di chiamarlo', 'che chiamami', 'chiamarlo'], 0]] },

  { id: 'piacere', lv: 'A1', cat: '⏱️ Verbos', t: 'Piacere y verbos parecidos', sub: 'mi piace · mi piacciono · mi manchi · mi serve', lesson: 'ristorante',
    html: `<p><strong>piacere</strong> funciona como “gustar”: el sujeto es lo que gusta.</p>
      <table><tr><th>Español</th><th>Singular / verbo</th><th>Plural</th></tr>
      <tr><td>me gusta(n)</td><td>mi piace</td><td>mi piacciono</td></tr>
      <tr><td>te gusta(n)</td><td>ti piace</td><td>ti piacciono</td></tr>
      <tr><td>le gusta(n) (a él / a ella / a usted)</td><td>gli / le / Le piace</td><td>gli / le / Le piacciono</td></tr>
      <tr><td>nos / os / les gusta(n)</td><td>ci / vi / gli piace</td><td>ci / vi / gli piacciono</td></tr></table>
      <p>Con nombre: <em>A Marco piace il calcio. A me piace, a te no.</em> Pasado con essere: <em>Mi è piaciuto il film, mi sono piaciute le canzoni.</em> “No me gusta nada” = <em>Non mi piace per niente.</em></p>
      <p><strong>Verbos que funcionan igual:</strong> <em>mancare</em> (extrañar: <em>Mi manchi</em> = te extraño), <em>servire</em> (necesitar: <em>Mi serve una penna</em>), <em>interessare</em> (<em>Non mi interessa</em>), <em>sembrare</em> (<em>Mi sembra giusto</em>), <em>bastare</em> (<em>Mi basta</em>), <em>restare / rimanere</em> (<em>Mi restano 10 euro</em>), <em>dispiacere</em> (<em>Mi dispiace</em> = lo siento), <em>fare male</em> (<em>Mi fa male la testa</em>).</p>
      <p><strong>“Me gustas”</strong> = <em>Mi piaci</em>. “Le gusto” = <em>Gli / Le piaccio</em>.</p>`,
    ex: [['Mi piace molto la cucina italiana.', 'Me gusta mucho la cocina italiana.'], ['Mi piacciono i film di Sorrentino.', 'Me gustan las películas de Sorrentino.'], ['Mi manchi tanto.', 'Te extraño mucho.'], ['Ti serve qualcosa?', '¿Necesitas algo?'], ['Mi dispiace, non posso venire.', 'Lo siento, no puedo ir.']],
    quiz: [['Mi ___ gli spaghetti.', ['piace', 'piacciono', 'piaci'], 1], ['“Te extraño” =', ['Ti manco', 'Mi manchi', 'Ti mancano'], 1], ['“Me gustó la película” =', ['Mi ha piaciuto il film', 'Mi è piaciuto il film', 'Mi è piaciuta il film'], 1]] },

  { id: 'modali', lv: 'A2', cat: '⏱️ Verbos', t: 'Verbos modales y sapere / conoscere', sub: 'devo, posso, voglio · so nuotare · conosco Roma', lesson: 'a2-salute',
    html: `<table><tr><th>Persona</th><th>dovere</th><th>potere</th><th>volere</th><th>sapere</th></tr>
      <tr><td>io</td><td>devo</td><td>posso</td><td>voglio</td><td>so</td></tr>
      <tr><td>tu</td><td>devi</td><td>puoi</td><td>vuoi</td><td>sai</td></tr>
      <tr><td>lui/lei</td><td>deve</td><td>può</td><td>vuole</td><td>sa</td></tr>
      <tr><td>noi</td><td>dobbiamo</td><td>possiamo</td><td>vogliamo</td><td>sappiamo</td></tr>
      <tr><td>voi</td><td>dovete</td><td>potete</td><td>volete</td><td>sapete</td></tr>
      <tr><td>loro</td><td>devono</td><td>possono</td><td>vogliono</td><td>sanno</td></tr></table>
      <p><strong>sapere vs conoscere:</strong> <em>sapere</em> = saber un dato o una habilidad (<em>So nuotare, Sai dov'è?</em>); <em>conoscere</em> = conocer personas o lugares (<em>Conosco Marco, Conosci Roma?</em>). “Saber nadar” es <em>saper nuotare</em> (no “potere”).</p>
      <p><strong>Volerci vs metterci:</strong> <em>Ci vuole un'ora</em> (se tarda/hace falta, impersonal) / <em>Ci metto un'ora</em> (yo tardo).</p>
      <p><strong>Cortesía:</strong> <em>Potrei…? Vorrei… Dovresti…</em> (condicional).</p>`,
    ex: [['Devo lavorare anche sabato.', 'Tengo que trabajar también el sábado.'], ['Posso entrare?', '¿Puedo entrar?'], ['Non so cucinare, ma conosco un buon ristorante.', 'No sé cocinar, pero conozco un buen restaurante.'], ['Quanto ci vuole per arrivare?', '¿Cuánto se tarda en llegar?']],
    quiz: [['“¿Sabes nadar?” =', ['Puoi nuotare?', 'Sai nuotare?', 'Conosci nuotare?'], 1], ['Potere, lui:', ['pote', 'può', 'puoi'], 1], ['“Conozco a tu hermano” =', ['So tuo fratello', 'Conosco tuo fratello', 'Conosco a tuo fratello'], 1]] },

  // ======================= 🗣️ FRASES =======================
  { id: 'negazione', lv: 'A1', cat: '🗣️ Frases', t: 'Negación y preguntas', sub: 'non… mai / niente / nessuno · chi, cosa, dove, quale', lesson: 'saluti',
    html: `<p><strong>Negar:</strong> <em>non</em> va justo antes del verbo (y antes de los pronombres): <em>Non lo so. Non ti capisco.</em></p>
      <table><tr><th>Italiano</th><th>Español</th><th>Ejemplo</th></tr>
      <tr><td><b>non… mai</b></td><td>nunca</td><td>Non bevo mai caffè.</td></tr>
      <tr><td><b>non… niente / nulla</b></td><td>nada</td><td>Non ho capito niente.</td></tr>
      <tr><td><b>non… nessuno</b></td><td>nadie / ningún</td><td>Non c'è nessuno. Non ho nessun problema.</td></tr>
      <tr><td><b>non… più</b></td><td>ya no</td><td>Non fumo più.</td></tr>
      <tr><td><b>non… ancora</b></td><td>todavía no</td><td>Non ho ancora mangiato.</td></tr>
      <tr><td><b>non… neanche / nemmeno</b></td><td>ni siquiera / tampoco</td><td>Non mi ha neanche salutato.</td></tr>
      <tr><td><b>non… né… né</b></td><td>ni… ni…</td><td>Non bevo né vino né birra.</td></tr></table>
      <p>Si la palabra negativa va al inicio, no se pone <em>non</em>: <em>Nessuno lo sa. Mai più!</em></p>
      <p><strong>Preguntar:</strong> el orden no cambia, solo la entonación: <em>Parli italiano?</em></p>
      <table><tr><th>Italiano</th><th>Español</th><th>Ejemplo</th></tr>
      <tr><td><b>chi</b></td><td>quién</td><td>Chi è? Con chi esci?</td></tr>
      <tr><td><b>che cosa / cosa / che</b></td><td>qué</td><td>Cosa fai? Che lavoro fai?</td></tr>
      <tr><td><b>dove</b></td><td>dónde</td><td>Dove abiti? Dov'è?</td></tr>
      <tr><td><b>quando</b></td><td>cuándo</td><td>Quando parti?</td></tr>
      <tr><td><b>come</b></td><td>cómo</td><td>Come stai? Com'è?</td></tr>
      <tr><td><b>perché</b></td><td>por qué / porque</td><td>Perché ridi? Perché sono felice.</td></tr>
      <tr><td><b>quanto/a/i/e</b></td><td>cuánto/a/os/as</td><td>Quanti anni hai? Quanto costa?</td></tr>
      <tr><td><b>quale / qual</b></td><td>cuál</td><td>Qual è il tuo numero? Quali preferisci?</td></tr>
      <tr><td><b>di dove / da dove</b></td><td>de dónde (origen / procedencia)</td><td>Di dove sei? Da dove vieni?</td></tr></table>
      <p><strong>Muletillas de pregunta:</strong> <em>…, vero? / …, no?</em> (¿verdad?): <em>Sei italiano, vero?</em></p>`,
    ex: [['Non ho capito niente.', 'No entendí nada.'], ['Non c\'è nessuno in ufficio.', 'No hay nadie en la oficina.'], ['Non fumo più da tre anni.', 'Ya no fumo desde hace tres años.'], ['Qual è il tuo piatto preferito?', '¿Cuál es tu plato preferido?'], ['Sei di Panama, vero?', 'Eres de Panamá, ¿verdad?']],
    quiz: [['“Todavía no he comido” =', ['Ancora non mangio', 'Non ho ancora mangiato', 'Non ho più mangiato'], 1], ['“Nadie lo sabe” =', ['Non nessuno lo sa', 'Nessuno lo sa', 'Nessuno non lo sa'], 1], ['“¿Cuál es tu nombre?” =', ['Qual è il tuo nome?', 'Quale è tuo nome?', 'Che è il tuo nome?'], 0]] },

  { id: 'comparativi', lv: 'A2', cat: '🗣️ Frases', t: 'Comparativos y superlativos', sub: 'più… di / che · il più · -issimo · migliore, ottimo', lesson: 'a2-casa',
    html: `<table><tr><th>Español</th><th>Italiano</th><th>Ejemplo</th></tr>
      <tr><td>más … que</td><td>più … di / che</td><td>Roma è più grande di Firenze.</td></tr>
      <tr><td>menos … que</td><td>meno … di / che</td><td>Questo è meno caro di quello.</td></tr>
      <tr><td>tan … como</td><td>(così) … come / (tanto) … quanto</td><td>È alto come me.</td></tr>
      <tr><td>el más …</td><td>il più … (di)</td><td>È il più bravo della classe.</td></tr>
      <tr><td>-ísimo</td><td>-issimo</td><td>bellissimo, buonissimo, carissimo</td></tr></table>
      <p><strong>di o che:</strong> <em>di</em> ante sustantivo o pronombre (<em>più alto di me</em>); <em>che</em> al comparar dos adjetivos, verbos, cantidades o con preposición (<em>più bello che utile, meglio tardi che mai, più a Roma che a Milano</em>).</p>
      <table><tr><th>Adjetivo</th><th>Comparativo</th><th>Superlativo</th></tr>
      <tr><td>buono</td><td>migliore (più buono)</td><td>il migliore / ottimo</td></tr>
      <tr><td>cattivo</td><td>peggiore (più cattivo)</td><td>il peggiore / pessimo</td></tr>
      <tr><td>grande</td><td>maggiore (más grande / mayor)</td><td>il maggiore / massimo</td></tr>
      <tr><td>piccolo</td><td>minore (menor)</td><td>il minore / minimo</td></tr>
      <tr><td>bene (adverbio)</td><td>meglio</td><td>benissimo</td></tr>
      <tr><td>male (adverbio)</td><td>peggio</td><td>malissimo</td></tr></table>
      <p><em>migliore</em> es adjetivo (<em>il miglior ristorante</em>); <em>meglio</em> es adverbio (<em>parli meglio di me</em>). “Mi hermano mayor” = <em>mio fratello maggiore / più grande</em>.</p>`,
    ex: [['Milano è più cara di Napoli.', 'Milán es más cara que Nápoles.'], ['È più bello che comodo.', 'Es más bonito que cómodo.'], ['È il miglior ristorante della città.', 'Es el mejor restaurante de la ciudad.'], ['Parli italiano meglio di me.', 'Hablas italiano mejor que yo.'], ['La pizza era buonissima!', '¡La pizza estaba buenísima!']],
    quiz: [['Milano è più cara ___ Napoli.', ['che', 'di', 'come'], 1], ['È più bello ___ comodo.', ['di', 'che', 'del'], 1], ['“Mejor” (con verbo: canta mejor) =', ['migliore', 'meglio', 'più bene'], 1]] },

  { id: 'errori', lv: 'A1', cat: '🗣️ Frases', t: 'Los 25 errores típicos del hispanohablante', sub: 'lo que más delata a un hispanohablante', lesson: 'alfabeto',
    html: `<table><tr><th>✗ Incorrecto</th><th>✓ Correcto</th><th>Por qué</th></tr>
      <tr><td>Sono 24 anni.</td><td>Ho 24 anni.</td><td>edad con avere</td></tr>
      <tr><td>Sto stanco.</td><td>Sono stanco.</td><td>estados con essere</td></tr>
      <tr><td>È caldo oggi.</td><td>Fa caldo oggi.</td><td>clima con fare</td></tr>
      <tr><td>La mia madre</td><td>Mia madre</td><td>familia en singular sin artículo</td></tr>
      <tr><td>La problema</td><td>Il problema</td><td>masculino aunque termina en -a</td></tr>
      <tr><td>Vado in Roma.</td><td>Vado a Roma.</td><td>ciudades con a</td></tr>
      <tr><td>Vado al medico.</td><td>Vado dal medico.</td><td>personas con da</td></tr>
      <tr><td>Studio per 2 anni (y sigo)</td><td>Studio da 2 anni</td><td>“desde hace” (algo que sigue) = da</td></tr>
      <tr><td>Ho andato.</td><td>Sono andato.</td><td>movimiento con essere</td></tr>
      <tr><td>Mi ha piaciuto.</td><td>Mi è piaciuto.</td><td>piacere con essere</td></tr>
      <tr><td>Credo che è vero.</td><td>Credo che sia vero.</td><td>opinión → congiuntivo</td></tr>
      <tr><td>Se avrei tempo…</td><td>Se avessi tempo…</td><td>nunca condicional tras se</td></tr>
      <tr><td>Con mi / per mi</td><td>Con me / per me</td><td>pronombres tónicos</td></tr>
      <tr><td>Le dico a Marco</td><td>Gli dico / Dico a Marco</td><td>a él = gli; sin duplicar</td></tr>
      <tr><td>Ho due (hermanos)</td><td>Ne ho due</td><td>ne con cantidades</td></tr>
      <tr><td>Parli molto buono.</td><td>Parli molto bene.</td><td>con verbos, el adverbio bene</td></tr>
      <tr><td>Burro = burro</td><td>Burro = mantequilla</td><td>falso amigo</td></tr>
      <tr><td>Salire = salir</td><td>Salire = subir; uscire = salir</td><td>falso amigo</td></tr>
      <tr><td>Subito = súbitamente</td><td>Subito = enseguida</td><td>falso amigo</td></tr>
      <tr><td>Imbarazzata = embarazada</td><td>Incinta = embarazada</td><td>falso amigo</td></tr>
      <tr><td>Pronunciar “ci” como “si”</td><td>ci = “chi” (ciao)</td><td>pronunciación</td></tr>
      <tr><td>Pronunciar “chi” como “chi”</td><td>chi = “ki”</td><td>pronunciación</td></tr>
      <tr><td>No marcar las dobles: “pala”</td><td>palla (pelota)</td><td>consonantes dobles</td></tr>
      <tr><td>Io sono, io ho, io vado…</td><td>Sono, ho, vado</td><td>omitir el pronombre</td></tr>
      <tr><td>Di nada.</td><td>Prego / Figurati / Di niente</td><td>“de nada”</td></tr></table>`,
    ex: [['Ho ventiquattro anni.', 'Tengo veinticuatro años.'], ['Credo che sia vero.', 'Creo que es verdad.'], ['Vado dal medico domani.', 'Voy al médico mañana.'], ['Quanti fratelli hai? Ne ho due.', '¿Cuántos hermanos tienes? Tengo dos.']],
    quiz: [['“Tengo 30 años” =', ['Sono 30 anni', 'Ho 30 anni', 'Ho 30 di età'], 1], ['“Voy a casa de Marco” =', ['Vado a Marco', 'Vado da Marco', 'Vado in Marco'], 1], ['“Salir de casa” =', ['salire di casa', 'uscire di casa', 'partire casa'], 1], ['“De nada” =', ['Di nada', 'Prego', 'Niente grazie'], 1]] }
];
