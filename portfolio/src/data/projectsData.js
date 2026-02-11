export const projectsData = [
  {
    slug: 'cicd-evaluierung',
    title: 'CI/CD Evaluierungsprojekt',
    description:
      'Bachelorprojekt zur Analyse und zum Vergleich verschiedener CI/CD-Plattformen inklusive Demo-Anwendung mit automatisierten Tests.',
    tech: ['CI/CD', 'Jenkins', 'Web App', 'Tests'],
    image: '/images/project/cicd.jpeg',
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
      'Entwicklung einer Wetterstation mit Sensorintegration und grafischer Oberfläche zur Visualisierung von Messwerten in Echtzeit.',
    tech: ['IoT', 'Python', 'Arduino', 'Sensoren'],
    image: '/images/project/iot-cover.png',
    headerMedia: {
      type: 'video',
      src: '/images/project/iot-3.mp4',
      poster: '/images/project/iot-cover.png',
      caption: 'Interaktive Visualisierung der IoT-Wetterstation',
    },
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
    slug: 'fahrzeugverkaufssystem',
    title: 'Full-Stack Fahrzeugverkaufssystem',
    description:
      'Full-Stack-Plattform zur Verwaltung und zum Verkauf von Fahrzeugen mit Angular, Node.js, MongoDB, MariaDB und Docker.',
    tech: ['Angular', 'Node.js', 'MongoDB', 'MariaDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
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
    slug: 'mobile-ecommerce-flutter',
    title: 'Mobile E-Commerce (Flutter)',
    description:
      'Mobile Shopping-App auf Flutter-Basis mit responsivem UX-Design und performanter Architektur.',
    tech: ['Flutter', 'Dart', 'Mobile'],
    image: '/images/project/android_cover.png',
    headerMedia: {
      type: 'video',
      src: '/images/project/android-03.mp4',
      poster: '/images/project/android_cover.png',
      caption: 'Flutter UI Showcase · Prototyp & Motion',
    },
    details: {
      overview: 'Entwicklung einer mobilen E-Commerce-Anwendung mit Flutter für plattformübergreifende Nutzung.',
      whatIDid: [
        'Konzeption der Benutzeroberfläche und User Flow',
        'Implementierung mit Flutter und Dart',
        'Integration von Zahlungs- und Warenkorb-Funktionalität',
        'Optimierung für verschiedene Bildschirmgrößen',
      ],
      results: [
        'Benutzerfreundliches Mobile-Shopping-Erlebnis',
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
    slug: 'telegram-esp32-led',
    title: 'Telegram-Bot & ESP32 LED-Matrix',
    description:
      'IoT-Kommunikationssystem mit Telegram-Bot zur Fernsteuerung einer LED-Matrix über ESP32 samt Visualisierung auf dem Display.',
    tech: ['IoT', 'Telegram', 'ESP32', 'Python'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
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
    slug: 'polutec-webseite',
    title: 'Polutec Firmenwebseite',
    description:
      'Konzeption und Entwicklung einer professionellen Firmenwebseite für Polutec (Frankreich).',
    tech: ['Web', 'HTML/CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
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
