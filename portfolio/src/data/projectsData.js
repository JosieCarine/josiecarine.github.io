export const projectsData = [
  {
    slug: 'fahrzeugverkaufssystem',
    title: 'Full-Stack Fahrzeugverkaufssystem',
    description:
      'Webanwendung mit Angular, Node.js, MongoDB und MariaDB. Containerisierung mit Docker für eine skalierbare Architektur.',
    tech: ['Angular', 'Node.js', 'MongoDB', 'MariaDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
    details: {
      overview: 'Entwicklung einer vollständigen Webanwendung zur Verwaltung und zum Verkauf von Fahrzeugen.',
      whatIDid: [
        'Design und Implementierung der Frontend-Architektur mit Angular',
        'RESTful API-Entwicklung mit Node.js und Express',
        'Datenbankdesign mit MongoDB und MariaDB',
        'Containerisierung der Anwendung mit Docker für einfaches Deployment',
      ],
      results: [
        'Skalierbare und wartbare Full-Stack-Anwendung',
        'Einfache Bereitstellung durch Docker-Container',
        'Trennung von NoSQL (MongoDB) und SQL (MariaDB) je nach Datenmodell',
      ],
      learned: [
        'Vertiefte Kenntnisse in Angular und TypeScript',
        'Best Practices für Microservices-Architekturen',
        'Docker und Container-Orchestrierung',
      ],
    },
  },
  {
    slug: 'cicd-evaluierung',
    title: 'CI/CD Evaluierungsprojekt',
    description:
      'Bachelorprojekt: Analyse und Vergleich verschiedener CI/CD-Tools. Webanwendung mit Frontend-/Backend-Architektur und automatisierten Tests.',
    tech: ['CI/CD', 'Jenkins', 'Web App', 'Tests'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
    details: {
      overview: 'Bachelorprojekt zur Evaluierung von CI/CD-Plattformen mit Entwicklung einer Demonstrations-Webanwendung.',
      whatIDid: [
        'Analyse und Vergleich verschiedener CI/CD-Tools (Jenkins, GitLab CI, GitHub Actions)',
        'Entwicklung einer Webanwendung mit Frontend- und Backend-Architektur',
        'Implementierung automatisierten Tests in der Pipeline',
        'Dokumentation der Ergebnisse und Empfehlungen',
      ],
      results: [
        'Detaillierter Vergleich der CI/CD-Plattformen',
        'Funktionsfähige Webanwendung als Referenzprojekt',
        'Automatisierte Test- und Build-Pipeline',
      ],
      learned: [
        'Tiefes Verständnis von Continuous Integration und Deployment',
        'Praktische Erfahrung mit Jenkins und Pipelines',
        'Best Practices für automatisierte Tests',
      ],
    },
  },
  {
    slug: 'iot-wetterstation',
    title: 'IoT Wetterstation',
    description:
      'Entwicklung einer Wetterstation mit Sensorintegration und grafischer Benutzeroberfläche zur Visualisierung von Sensordaten.',
    tech: ['IoT', 'Python', 'Arduino', 'Sensoren'],
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
    details: {
      overview: 'Entwicklung einer vollständigen IoT-Lösung zur Erfassung und Visualisierung von Wetterdaten.',
      whatIDid: [
        'Integration verschiedener Sensoren (Temperatur, Luftfeuchtigkeit, Druck)',
        'Programmierung der Mikrocontroller mit Arduino',
        'Datenübertragung und -speicherung',
        'Entwicklung einer grafischen Benutzeroberfläche zur Visualisierung',
      ],
      results: [
        'Funktionsfähige Wetterstation mit Echtzeit-Daten',
        'Intuitive Visualisierung der Sensordaten',
        'Skalierbare Architektur für weitere Sensoren',
      ],
      learned: [
        'IoT-Protokolle und Hardware-Anbindung',
        'Umgang mit Sensordaten und Echtzeitvisualisierung',
        'Embedded Systems Programmierung',
      ],
    },
  },
  {
    slug: 'telegram-esp32-led',
    title: 'Telegram-Bot & ESP32 LED-Matrix',
    description:
      'IoT-Kommunikationssystem mit Telegram-Bot zur Fernkommunikation, Ansteuerung einer LED-Matrix über ESP32 und Visualisierung auf LED-Display.',
    tech: ['IoT', 'Telegram', 'ESP32', 'Python'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
    details: {
      overview: 'Entwicklung eines IoT-Systems zur Fernsteuerung einer LED-Matrix über Telegram.',
      whatIDid: [
        'Entwicklung eines Telegram-Bots zur Steuerung',
        'Anbindung und Programmierung des ESP32 Mikrocontrollers',
        'Ansteuerung der LED-Matrix',
        'Implementierung der Visualisierung auf dem LED-Display',
      ],
      results: [
        'Fernsteuerung der LED-Matrix per Smartphone',
        'Echtzeit-Kommunikation über Telegram API',
        'Stabile Verbindung zwischen Bot und Hardware',
      ],
      learned: [
        'Telegram Bot API und Integration',
        'ESP32 Programmierung und WiFi-Kommunikation',
        'Hardware-Software-Schnittstellen',
      ],
    },
  },
  {
    slug: 'mobile-ecommerce-flutter',
    title: 'Mobile E-Commerce (Flutter)',
    description:
      'Entwicklung einer mobilen Webanwendung für Online-Handel mit Fokus auf Benutzerfreundlichkeit und responsivem Design.',
    tech: ['Flutter', 'Dart', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
    details: {
      overview: 'Entwicklung einer mobilen E-Commerce-Anwendung mit Flutter für plattformübergreifende Nutzung.',
      whatIDid: [
        'Konzeption der Benutzeroberfläche und User Flow',
        'Implementierung mit Flutter und Dart',
        'Integration von Zahlungs- und Warenkorb-Funktionalität',
        'Optimierung für verschiedene Bildschirmgrößen',
      ],
      results: [
        'Benutzerfreundliche mobile Shopping-Experience',
        'Responsives Design für alle Geräte',
        'Schnelle und flüssige App-Performance',
      ],
      learned: [
        'Flutter Framework und Dart-Programmierung',
        'Cross-Platform Mobile Development',
        'UX-Design für E-Commerce-Anwendungen',
      ],
    },
  },
  {
    slug: 'polutec-webseite',
    title: 'Polutec Firmenwebseite',
    description:
      'Konzeption und Entwicklung einer professionellen Firmenwebseite für Polutec (Frankreich).',
    tech: ['Web', 'HTML/CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    github: 'https://github.com/JosieCarine',
    details: {
      overview: 'Konzeption und Entwicklung einer professionellen Firmenwebseite für Polutec in Frankreich.',
      whatIDid: [
        'Analyse der Anforderungen und Zielgruppen',
        'Konzeption des Designs und der Informationsarchitektur',
        'Implementierung mit HTML, CSS und JavaScript',
        'Optimierung für Suchmaschinen und Performance',
      ],
      results: [
        'Moderne, professionelle Firmenpräsenz',
        'Responsives Design für alle Geräte',
        'Gute Ladezeiten und Benutzererfahrung',
      ],
      learned: [
        'Webdesign und Informationsarchitektur',
        'Projektarbeit im internationalen Kontext',
        'Best Practices für Unternehmenswebseiten',
      ],
    },
  },
];
