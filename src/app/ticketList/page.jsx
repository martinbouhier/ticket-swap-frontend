import { useState } from "react";
import Ticket from "../ticket/page";

const tickets = [
  {
    id: 1,
    title: "¡ANIME-CON ARGENTINA 2024!",
    description:
      "Los días 16, 17 y 18 de Agosto de 2024 llega Anime-Con a Costa Salguero.El fenómeno del Anime y el Manga es uno de los más avasallantes de los últimos años, y 'Anime-Con Argentina' es la mega convención más grande e importante de la historia de nuestro país. Los días 16, 17 y 18 de Agosto el predio Costa Salguero abrirá sus puertas para dar inicio a la edición 2024 de esta experiencia única. Contando con la participación de las principales marcas de la industria, cientos de stands, exhibiciones, actividades, shows, invitados de Japón, mega concursos de cosplay, auténtica gastronomía japonesa y un sinfín más de atracciones. Producen y Organizan: Editorial Ivrea y Producciones",
    price: 4000,
    phone: "+5491173608095",
    image_url:
      "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artist/public/images/artist/anim440.jpg",
  },
  {
    id: 1,
    title: "PAMPAS – SÚPER RUGBY AMÉRICAS",
    description:
      "Lo que nació como la Superliga Americana de Rugby (SLAR), en 2023 ha sido rebautizada como Súper Rugby Américas y aunque sufrió modificaciones en su estructura, la esencia de este gran torneo de América no se altera: es la competencia por excelencia, que sostiene y promueve el desarrollo de jugadores de la región. El Súper Rugby Américas (SRA), es el campeonato que reúne a los mejores combinados profesionales del continente y, por segundo año consecutivo, nuestro país estará representado por dos franquicias: Pampas y Dogos XV (la Unión Cordobesa de Rugby tiene a su cargo el control de este equipo). Para este nuevo campeonato, Pampas (la franquicia nacional que reemplazó a Jaguares XV) tendrá como head coach a Juan Manuel Leguizamón, y como asistentes estarán Nicolás Vergallo y Rodrigo Martínez. Los equipos restantes que participarán del certamen continental son: Selknam Rugby (Chile), Yacare XV (Paraguay), Peñarol (Uruguay), Cobras Brasil (Brasil) y American Raptors (Estados Unidos). El torneo tendrá una etapa regular de 14 jornadas, de las cuales cada equipo disputará seis partidos como local y seis de visitante; las semifinales se jugarán el 7 y 8 de junio, mientras que la gran final será el 14 de junio.",
    price: 2400,
    phone: "+5491173608095",
    image_url:
      "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artist/public/images/artist/pampas_a_2.png",
  },
  {
    id: 1,
    title: "LOS PUMAS Y FRANCIA OTRA VEZ EN ARGENTINA",
    description:
      "Tras el cuarto puesto conseguido en el Mundial de Francia 2023, Los Pumas vuelven al país y disputarán dos test-matches con Francia, el rival que más veces enfrentaron en la historia (53). Se cumplen 75 años del primer partido entre ambos seleccionados (fue en 1949 en GEBA) y será la 18° gira de Francia por nuestro país (su última visita fue hace 8 años en Tucumán).Los compromisos con Les Bleus marcarán el debut de Felipe Contepomi como head-coach del Seleccionado Nacional, y corresponden a Ventana Internacional de Julio Copa Visa Banco Macro.La primera cita del clásico se jugará en la provincia de Mendoza, en el Estadio Malvinas Argentinas, el sábado 6 de julio desde las 16:00 horas, y será el primer registro de un duelo entre ambos seleccionados en la provincia. La revancha tendrá lugar en el estadio de Vélez Sarsfield, en Capital Federal, el sábado 13 de julio, a partir de las 16:00 horas. La última vez allí, fue en 2010 con triunfo de Los Pumas por 41-13. ¡Vuelven Los Pumas al país, no te pierdas la posibilidad de disfrutar del mejor rugby del mundo!",
    price: 6000,
    phone: "+5491173608095",
    image_url:
      "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artist/public/images/artist/pumas_a.png",
  },
  {
    id: 1,
    title: "DIVIDIDOS LLEGA A CÓRDOBA EN EL MARCO DE SU GIRA NACIONAL",
    description:
      "Divididos comenzó el año con su muy esperado regreso al Estadio Obras, el Templo del Rock, donde batieron récords allá por los años 90.Luego de esta seguidilla de shows, Divididos retoma su gira por el país presentándose el 6 de septiembre en Quality Espacio de Córdoba. En 2023, La Aplanadora giró celebrando sus 35 años de historia, con el ya recordado concierto en el Estadio Vélez, ante 45.000 personas, con invitados de la talla de La Renga y Gustavo Santaolalla. Ese concierto está disponible en YouTube y en plataformas digitales, tanto en audio como en video bajo el nombre de “Agradecer y Seguir”. Además, también el año pasado volvieron a girar por España, donde no iban hace casi una década y sumaron conciertos en Uruguay y en Chile también. Actualmente Divididos se encuentra en pleno proceso creativo de lo que será su próximo material discográfico. Planean este año tomarse el tiempo necesario para poder concluir las canciones que ya vinieron lanzando y regalarle así a los fans el tan esperado nuevo álbum.",
    price: 3500,
    phone: "+5491173608095",
    image_url:
      "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artist/public/images/artist/divididos_440x600.png",
  },
  {
    id: 1,
    title: "LA DELIO VALDEZ",
    description:
      "La Delio Valdez cumple 15 años recorriendo miles y miles de kilómetros llevando su música a diferentes escenarios de todo el país, y hasta de todo el mundo, participando en reconocidos festivales como también produciendo sus propios shows de manera independiente y autogestiva. Luego de comunicar su vuelta a Europa en Julio de este mismo año, nos sorprende con su próxima Gira Sudamericana que dará comienzo en Agosto y recorrerá varias ciudades de la Argentina, además de Uruguay y Chile. Santa Fe, La Plata, La Pampa, San Luis, Córdoba, Neuquén, Salta, Tucumán y Rosario, serán algunos de los destinos de esta gira. Luego cruzará una vez más la orilla vecina para llevar todas sus canciones por primera vez al Velódromo Municipal de Montevideo (UY), y volverán con todo su repertorio a Santiago de Chile! Los tickets de la Gira completa ya están disponibles en su sitio web.",
    price: 2000,
    phone: "+5491173608095",
    image_url:
      "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artist/public/images/artist/ldv_a.png",
  },
  {
    id: 1,
    title: "CANTICUÉNTICOS EN ROSARIO, TEATRO EL CÍRCULO",
    description:
      "Canticuénticos, el reconocido grupo santafesino de música para las infancias y familias, vuelve a Rosario en vacaciones de invierno. Con +16 años de trayectoria, han recorrido América Latina y España, realizando más de 2.000 shows en vivo con una propuesta origi- nal, que combina diversión con emociones profundas, convocando a toda la familia para cantar, jugar y bailar a través de la música en vivo, el humor, la poesía y la emoción.",
    price: 1400,
    phone: "+5491173608095",
    image_url:
      "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artist/public/images/artist/cuen440.jpg",
  },
  {
    id: 1,
    title: "SOLTAR PARA SER FELIZ",
    description:
      "Mario Massaccesi y Patricia Daleiro.  Después del éxito editorial, Mario Massaccesi y Patricia Daleiro le ponen el cuerpo a su obra con una propuesta teatral diferente que a través del humor, la emoción y las historias personales ayuda al espectador/a responder la pregunta: ¿Qué es soltar, cómo se hace?  “Soltar para Ser Feliz” fue publicado en noviembre de 2020 y ya va por la novena edición, convirtiéndose en un “Long seller” por estar tanto tiempo en los primeros lugares en ventas.  Mario y Patricia encontraron en el teatro un lugar mágico para compartir la propuesta de “soltar” que ya experimentaron miles de personas en todo el país que los siguen a través de sus libros, los talleres que brindan; sus podcast y los “Viajes con sentido”.  Sobre el escenario se atreven a ir por más, y de la mano de sus otros títulos “Saltar al Buen Vivir” y “Salir de los miedos” se desafían y dejan en claro que todos tenemos la maravillosa posibilidad de soltar para vivir más felices. Mario Massaccesi, Argentino, oriundo de Rio Carto, Prov de Córdoba es periodista, conductor de radio y televisión. Figura central de TN y Canal 13 en Buenos Aires. Coach ontológico profesional y escritor.  Patricia Daleiro Uruguaya radicada hace unos años en Argentina, es Lic en Psicología,  Master coach y escritora.  Ambos son responsables de la consultora MyP (www.marioypatricia.com) donde ofrecen diferentes servicios a personas y organizaciones.  Así como en sus libros, este es un espectáculo coral donde se van sucediendo las voces de ambos y las historias personales -algunas muy fuertes- que tuvieron que atravesar para llegar a la felicidad.  Una propuesta distinta para quienes quieren y necesitan herramientas para una vida de “bien estar”.  Una invitación para reflexionar sobre lo que ya no queremos. Un espacio para reencontrarnos con nuestros sueños.",
    price: 4500,
    phone: "+5491173608095",
    image_url:
      "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artist/public/images/artist/solt440.jpg",
  },
  {
    id: 1,
    title: "PEDRO Y EL LOBO",
    description:
      "El martes 9 de julio, a las 18 hs., en el Foyer del Teatro El Círculo, de Rosario, el Ensamble de Vientos del Paraná presenta una propuesta de música clásica para los más chicos, PEDRO Y EL LOBO, Op. 67, de Serguei Prokofiev, adaptada para conjunto de cámara. Bajo la dirección de Eduardo Candia y Martín Mendoza, el proyecto nació con la idea de presentar una versión de la obra para toda la familia.",
    price: 870,
    phone: "+5491173608095",
    image_url:
      "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artist/public/images/artist/pedro440_0.jpg",
  },
];

export default function TicketList() {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">tickets</h2>
        <div className="flex justify-center mb-8">
          <button
            type="button"
            className="ml-2 px-4 py-2 bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-125"
          >
            Publicar un Ticket
          </button>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {tickets.map((ticket) => (
            <button key={ticket.id} onClick={() => handleTicketClick(ticket)}>
              <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={ticket.image_url}
                  alt={ticket.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{ticket.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${ticket.price}
              </p>
            </button>
          ))}
        </div>
      </div>
      {selectedTicket && (
        <Ticket
          ticket={selectedTicket}
          open={selectedTicket !== null}
          setOpen={setSelectedTicket}
        />
      )}
    </div>
  );
}
