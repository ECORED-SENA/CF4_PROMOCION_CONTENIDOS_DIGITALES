export default {
  global: {
    componenteFormativo: 'Conceptualización de piezas gráficas',
    descripcionCurso:
      'El proceso de conceptualización es importante para cualquier proyecto creativo porque a partir de este es que una idea puede impactar a los clientes haciendo que la marca alcance los objetivos trazados. Para lograrlo, el concepto se apoya en técnicas creativas y en la comunicación visual de tal manera que el producto final sea atractivo para el espectador.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El concepto creativo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de creatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fuentes de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'El proyecto gráficon',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'La comunicación visual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'El mensaje comunicacional',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Semiótica',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'La tipografía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Fuente tipográfica',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Familia tipográfica',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: '<i>Lettering</i>',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El concepto creativo',
      referencia:
        'Complot Escuela de Creatividad. (2021). ¿Qué es y cómo crear un Concepto Creativo? // Con Pol Martínez, Director Creativo en & Rosàs. [Video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_gSHXGMyoFI',
    },
    {
      tema: 'Licencia de <i>Creative Commons</i>',
      referencia:
        'Fernández, J. (2020). Qué son las Licencias Creative Commons y cómo usarlas. [Video] ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IZpQ2eQxTTE',
    },
    {
      tema: 'La semiótica',
      referencia:
        'Santana, I. (2020). La semiótica. Universidad Autónoma de Santo Domingo.',
      tipo: 'Artículo',
      descarga: '/downloads/semiotica.pdf',
    },
    {
      tema: 'Tipografía',
      referencia:
        'Harros, P. y Ambrose, G. (2009). Fundamentos de la tipografía. Editorial Parramón. Segunda edición.',
      tipo: 'Libro',
      descarga: '/downloads/fundamentos_de_la_tipografia_ambrose_harris.pdf',
    },
  ],
  glosario: [
    {
      termino: '<i>Brief</i>',
      significado:
        'Documento que posee información imprescindible para el comienzo de una planificación o ejecución de cualquier proyecto.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Intercambiar información entre dos o más personas con el fin de contribuir con los mensajes. Proceso en el que actúan un emisor, un receptor y el mensaje con el que se entrega la información.',
    },
    {
      termino: 'Concepto',
      significado:
        'Es un grupo de elementos que ayudan a un creativo, mediante el cual puede formular visualmente las ideas para la creación de un proyecto gráfico.',
    },
    {
      termino: '<i>Copyright</i>',
      significado:
        'Personifica los derechos de autor que se le otorgan a los autores de una obra que puede ser musical, literaria, científica, artística, entre otras. Es la forma en que se atribuye la autoría a una persona sobre sus obras y que además le proporciona los derechos como autor.',
    },
    {
      termino: 'Fuentes de información',
      significado:
        'Instrumentos que sirven de apoyo para tener conocimiento, acceso y búsqueda de los datos.',
    },
    {
      termino: '<i>Lettering</i>',
      significado:
        'Es el arte de diseñar, crear, ilustrar o dibujar mensajes llamativos a través de una creación gráfica que juega con la forma de las letras, según sea el contexto del proyecto.',
    },
    {
      termino: 'Pieza gráfica',
      significado:
        'Composición visual en diseño que se relaciona directamente con la publicidad, y que tiene versatilidad en soportes y formatos según sean las necesidades de comunicación.',
    },
    {
      termino: 'Semiótica',
      significado:
        'Ciencia que se deriva de la filosofía, dedicada a estudiar los sistemas de comunicación en la sociedad. Se encarga de estudiar los signos existentes en la comunicación social (semiosis).',
    },
    {
      termino: 'Tipografía',
      significado:
        'Disciplina que se encarga de analizar y estudiar la representación gráfica de los caracteres para que los mensajes escritos sean más efectivos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arellano, G., Barrera, D., Buendía, F., Castillo, L., & Zamora, A. (2013). Comunicación publicitaria en medios impresos. Instituto Politécnico Nacional.',
    },
    {
      referencia:
        'Blázquez Ochando, M. (2015). Fuentes de Información Especializada: Aspectos Teóricos y Prácticos.  mblazquez.es.',
    },
    {
      referencia:
        'Casacuberta, D., Castells, R., & Llop, R. (30 de Septiembre de 2004). El copyright en el diseño gráfico. (R. Grrr, Entrevistador)',
    },
    {
      referencia: 'Costa, J. (2003). Diseñar para los ojos. Editorial Design.',
    },
    {
      referencia:
        'Hernández Barrueco, L. C. (2020). Manual del Comercio Electrónico. Marge.',
    },
    {
      referencia:
        'Kane, J. (2012). Manual de tipografía.  Editorial Gustavo Gili.',
    },
    {
      referencia:
        'López Carreño, R. (2017). Fuentes de Información: Guía Básica y Nueva Clasificación. Editorial UOC.',
    },
    {
      referencia:
        'Lupton, E. (2011). Pensar con tipos. Editorial Gustavo Gili.',
    },
    {
      referencia:
        'Marín González, A. (2010). Técnicas y Métodos Creativos Aplicados a la Conceptualización del Diseño. Contexto: Revista de la Facultad de Arquitectura Universidad Autónoma de Nuevo León, 41-44.',
    },
    {
      referencia:
        'Peña Casallas, N. (2020). El diseño gráfico más allá de la experiencia visual-óptica. Bitácora Urbano Territorial, 101-112.',
    },
    {
      referencia:
        'Pérez Rodríguez, M. D. (2010). Técnicas Publicitarias. Editorial ICB.',
    },
    {
      referencia:
        'Quilly, M. (2014). Preparación de Proyectos de Diseño Gráfico. Editorial IC.',
    },
    {
      referencia:
        'Roig, F. (2011). La estrategia creativa. Ediciones Infinito.',
    },
    {
      referencia:
        'Vilajoana Alejandre, S., & Jiménez Morales, M. a. (2017). ¿Cómo aplicar los conceptos básicos de Publicidad? UOC.',
    },
    {
      referencia: 'Wells, W. S. (2007). Publicidad. Pearson Educación.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Samuel Pinilla Hurtado',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio - Regional Cauca',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
