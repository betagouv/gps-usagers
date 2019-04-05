const epnData = [
  {
    name: "CRANT - AMVD",
    structure: "",
    address: "60 Place Champlain",
    zip: 14000,
    city: "Caen",
    phone: "",
    latitude: 49.1976327,
    longitude: -0.34747240000002
  },
  {
    name: "CRANT - La Prairie",
    structure: "",
    address: "11 avenue Albert Sorel",
    zip: 14000,
    city: "Caen",
    phone: "02 31 85 25 16",
    latitude: 49.177761,
    longitude: -0.37081699999999
  },
  {
    name: "CRANT - Tandem",
    structure: "",
    address: "8 Rue Nicolas Oresme",
    zip: 14000,
    city: "Caen",
    phone: "",
    latitude: 49.1852164,
    longitude: -0.39922090000005
  },
  {
    name: "EPN - AMVD",
    structure: "AMVD Caen",
    address: "60 Place Champlain",
    zip: 14000,
    city: "Caen",
    phone: "02 31 93 10 80",
    latitude: 49.197431659644,
    longitude: -0.34692440478511
  },
  {
    name: "EPN - Bb Chemin Vert - CyberEspace",
    structure: "Bibliothèque du Chemin Vert",
    address: "6 rue Jean Racine",
    zip: 14000,
    city: "Caen",
    phone: "02 14 37 29 87",
    latitude: 49.1930496,
    longitude: -0.3899565
  },
  {
    name: "EPN - Bb de la Grâce de Dieu - Point multimédia",
    structure: "Bibliothèque de la Grâce de Dieu",
    address: "8 Esplanade André-Malraux",
    zip: 14000,
    city: "Caen",
    phone: "02 14 37 29 82",
    latitude: 49.1618226,
    longitude: -0.359616
  },
  {
    name: "EPN - Bb de La Guérinière - CyberEspace",
    structure: "Bibliothèque de la Guérinière",
    address: "6 rue des Bouviers",
    zip: 14000,
    city: "Caen",
    phone: "02 14 37 29 83",
    latitude: 49.163351,
    longitude: -0.3463631
  },
  {
    name: "EPN - Bb du Centre Ville - Espace multimédia",
    structure: "Bibliothèque centrale de Caen",
    address: "15 quai François Mitterrand",
    zip: 14000,
    city: "Caen",
    phone: "02 31 30 47 00",
    latitude: 49.1819521,
    longitude: -0.35045230000003
  },
  {
    name: "EPN - Bb Pierre Heuzé - Point multimédia",
    structure: "Bibliothèque de la Pierre Heuzé",
    address: "17 place Champlain",
    zip: 14000,
    city: "Caen",
    phone: "02 14 37 29 81",
    latitude: 49.1976729,
    longitude: -0.3468702
  },
  {
    name: "EPN - Centre d'animation Folie couvrechef",
    structure: "Centre d'animation Folie couvrechef",
    address: "3 rue des acadiens",
    zip: 14000,
    city: "Caen",
    phone: "02 31 44 06 95",
    latitude: 49.2042863,
    longitude: -0.38151100000005
  },
  {
    name: "EPN - Centre socio-culturel CAF de la Pierre Heuzé",
    structure: "Centre socio-culturel CAF de la Pierre Heuzé",
    address: "49 boulevard Général Vanier",
    zip: 14000,
    city: "Caen",
    phone: "02 31 93 41 45",
    latitude: 49.1972703,
    longitude: -0.34910079999997
  },
  {
    name: "EPN - Centre socio-culturel CAF Grâce de Dieu",
    structure: "Centre socio-culturel CAF Grâce de Dieu",
    address: "Avenue Père Charles de Foucauld",
    zip: 14000,
    city: "Caen",
    phone: "02 31 82 34 69",
    latitude: 49.1614373,
    longitude: -0.35932709999997
  },
  {
    name: "EPN - Centre socio-culturel de la Guérinière",
    structure: "Centre socio-culturel de la Guérinière",
    address: "2 boulevard de l'Espérance",
    zip: 14000,
    city: "Caen",
    phone: "02 31 52 59 00",
    latitude: 49.1571638,
    longitude: -0.32535789999997
  },
  {
    name: "EPN - Centre socio-culturel du Chemin Vert",
    structure: "Centre socio-culturel - Caen - Chemin Vert",
    address: "17 rue Pierre Corneille",
    zip: 14000,
    city: "Caen",
    phone: "02 31 73 19 69",
    latitude: 49.193071254309,
    longitude: -0.39063457249142
  },
  {
    name: "EPN - CyberTandem",
    structure: "CA Tandem",
    address: "8 Rue Nicolas Oresme",
    zip: 14000,
    city: "Caen",
    phone: "02 31 29 54 54",
    latitude: 49.183707,
    longitude: -0.3996535
  },
  {
    name: "EPN - La Prairie",
    structure: "CA La Prairie Caen",
    address: "11 avenue Albert Sorel",
    zip: 14000,
    city: "Caen",
    phone: "02 31 85 25 16",
    latitude: 49.177579550895,
    longitude: -0.3706169128418
  },
  {
    name: "EPN - Centre socio-culturel CAF de Lisieux",
    structure: "Centre socio-culturel CAF de Lisieux",
    address: "Rue Taunton",
    zip: 14100,
    city: "Lisieux",
    phone: "02 31 31 67 12",
    latitude: 49.14324,
    longitude: 0.24024899999995
  },
  {
    name: "EPN - Médiathèque André Malraux",
    structure: "Médiathèque André Malraux",
    address: "Place de la République",
    zip: 14100,
    city: "Lisieux",
    phone: "02 31 48 41 00",
    latitude: 49.144148676828,
    longitude: 0.22613876826172
  },
  {
    name: "EPN - PointCyb Lisieux",
    structure: "PointCyb Lisieux",
    address: "13 boulevard Pasteur",
    zip: 14100,
    city: "Lisieux",
    phone: "02 31 31 70 95",
    latitude: 49.1458749,
    longitude: 0.2206138
  },
  {
    name: "EPN - Centre socio-culturel de Mondeville",
    structure: "Centre socio-culturel de Mondeville",
    address: "Rue du 19 mars 1962",
    zip: 14120,
    city: "Mondeville",
    phone: "02 31 84 20 72",
    latitude: "",
    longitude: ""
  },
  {
    name: "EPN - Bibliothèque municipale",
    structure: "Bibliothèque municipale Pauline ROLAND",
    address: "20 Rue François Mitterrand",
    zip: 14123,
    city: "Fleury-sur-Orne",
    phone: "02 31 84 31 94",
    latitude: 49.1511992,
    longitude: -0.37366499999996
  },
  {
    name: "EPN de Pont l'Evèque",
    structure: "",
    address: "18 rue Thouret",
    zip: 14130,
    city: "Pont-l'Évêque",
    phone: "02 31 64 94 49",
    latitude: 49.2877773,
    longitude: 0.1868515
  },
  {
    name: "EPN - Livarot",
    structure: "Centre Culturel",
    address: "36 rue du Général Leclerc",
    zip: 14140,
    city: "Livarot-Pays-d'Auge",
    phone: "02 31 32 05 66",
    latitude: 49.002908,
    longitude: 0.1512231
  },
  {
    name: "EPN - Ouistreham",
    structure: "Centre Socio-culturel",
    address: "11 rue des Arts",
    zip: 14150,
    city: "Ouistreham",
    phone: "02 31 25 51 60",
    latitude: 49.2763439,
    longitude: -0.26261790000001
  },
  {
    name: "EPN - Médiathèque Jacques Prévert",
    structure: "Médiathèque Jacques Prévert",
    address: "Rue du Commandant Charcot",
    zip: 14160,
    city: "Dives-sur-Mer",
    phone: "02 31 24 29 27",
    latitude: 49.2928227,
    longitude: -0.1005054
  },
  {
    name: "EPN - Bb d'Hérouville St Clair",
    structure: "Bibliothèque d'Hérouville Saint-Clair",
    address: "5 Square du Théâtre,",
    zip: 14200,
    city: "Hérouville-Saint-Clair",
    phone: "",
    latitude: 49.2105,
    longitude: -0.33466
  },
  {
    name: "EPN - Centre socio-culturel CAF HSC",
    structure: "Centre socio-culturel CAF HSC",
    address: "202 boulevard des Belles Portes",
    zip: 14200,
    city: "Hérouville-Saint-Clair",
    phone: "02 31 95 83 00",
    latitude: 49.2024244,
    longitude: -0.32829160000006
  },
  {
    name: "EPN - S3A",
    structure: "S3A",
    address: "10-18 quartier du grand parc",
    zip: 14200,
    city: "Hérouville-Saint-Clair",
    phone: "02 31 06 17 50",
    latitude: 49.198165775782,
    longitude: -0.33685946143805
  },
  {
    name: "EPN - Thury Harcourt",
    structure: "Maison des Services",
    address: "4 rue Docteur Gourdin",
    zip: 14220,
    city: "Le Hom",
    phone: "02 31 79 87 26",
    latitude: 48.986326070606,
    longitude: -0.47289461268917
  },
  {
    name: "EPN - Isigny Omaha Intercom",
    structure: "Maison des services - Isigny-sur-Mer",
    address: "16 rue Émile Demagny",
    zip: 14230,
    city: "Isigny-sur-Mer",
    phone: "02 31 51 62 42",
    latitude: 49.3188998,
    longitude: -1.1005213
  },
  {
    name: "Médiathèque Intercommunale de La Cambe",
    structure: "Médiathèque Intercommunale de La Cambe",
    address: "Rue Principale (derrière la Mairie)",
    zip: 14230,
    city: "La Cambe",
    phone: "02 31 10 66 16",
    latitude: 49.342928534535,
    longitude: -1.0039778761269
  },
  {
    name: "EPN - Anacrouses",
    structure: "",
    address: "Place Saint-Clair, 45 rue saint martin",
    zip: 14240,
    city: "Caumont-sur-Aure",
    phone: "09 81 62 66 24",
    latitude: 49.091007,
    longitude: -0.807691
  },
  {
    name: "EPN - Pré-Bocage Intercom",
    structure: "",
    address: "31 rue de Vire",
    zip: 14260,
    city: "Les Monts d'Aunay",
    phone: "02 31 97 28 38",
    latitude: 49.016101420603,
    longitude: -0.63711333512947
  },
  {
    name: "EPN - Vallée d'Auge",
    structure: "Maison de services publics",
    address: "12 rue Voltaire",
    zip: 14270,
    city: "Mézidon Vallée d'Auge",
    phone: "02 31 42 68 54",
    latitude: 49.071785742592,
    longitude: -0.07358149206539
  },
  {
    name: "EPN - Pôle du Savoir",
    structure: "Pôle du Savoir",
    address: "15 avenue du Bois",
    zip: 14290,
    city: "Orbec",
    phone: "06 48 16 61 33",
    latitude: 49.0282349,
    longitude: 0.4083158
  },
  {
    name: "EPN - CyberCentre",
    structure: "",
    address: "Rue du château",
    zip: 14340,
    city: "Bonnebosq",
    phone: "02 31 64 75 41",
    latitude: 49.20565411949,
    longitude: 0.07738709449768
  },
  {
    name: "EPN - Le Bény-Bocage",
    structure: "",
    address: "2 place de la Mairie",
    zip: 14350,
    city: "Souleuvre en Bocage",
    phone: "02 31 69 58 58",
    latitude: 48.9375498,
    longitude: -0.8421133
  },
  {
    name: "EPN - Val Es Dunes",
    structure: "Mairie de Bellengreville",
    address: "10 rue Léonard Gilles",
    zip: 14370,
    city: "Bellengreville",
    phone: "02 31 23 68 08",
    latitude: 49.125475,
    longitude: -0.21052340000006
  },
  {
    name: "EPN mobile - Val Es Dunes",
    structure: "",
    address: "10 rue Léonard Gilles",
    zip: 14370,
    city: "Bellengreville",
    phone: "",
    latitude: "",
    longitude: ""
  },
  {
    name: "EPN - La Vache qui clique",
    structure: "La Vache qui Lit",
    address: "23 rue de la Gare",
    zip: 14380,
    city: "Noues de Sienne",
    phone: "02 31 66 97 10",
    latitude: 48.842352,
    longitude: -1.0511747
  },
  {
    name: "EPN - Bayeux-Argouges",
    structure: "",
    address: "48 bis rue de Beauvais",
    zip: 14400,
    city: "Bayeux",
    phone: "02 31 92 11 08",
    latitude: 49.290544992556,
    longitude: -0.70914387702942
  },
  {
    name: "EPN - Médiathèque de Bayeux",
    structure: "Médiathèque de Bayeux",
    address: "Centre Guillaume Le Conquérant Rue aux Coqs",
    zip: 14400,
    city: "Bayeux",
    phone: "02 31 51 20 20",
    latitude: 49.274603708544,
    longitude: -0.70004144550782
  },
  {
    name: "EPN NCPA - site de Dozulé",
    structure: "Ecole élémentaire de Dozulé Unité B",
    address: "23 Grande Rue",
    zip: 14430,
    city: "Dozulé",
    phone: "07 87 77 10 85",
    latitude: 49.233176,
    longitude: -0.03957719999994
  },
  {
    name: "EPN - Douvres la Délivrande",
    structure: "Espace socio-culturel Louise Jarry",
    address: "8 rue de l'Eglise",
    zip: 14440,
    city: "Douvres-la-Délivrande",
    phone: "02 31 37 18 04",
    latitude: 49.2944346,
    longitude: -0.37813349999999
  },
  {
    name: "Point Public Numérique",
    structure: "Office du tourisme",
    address: "26 Quai Henri Crampond",
    zip: 14450,
    city: "Grandcamp-Maisy",
    phone: "02 31 21 46 00",
    latitude: 49.389000272043,
    longitude: -1.0432412181076
  },
  {
    name: "EPN - Bibliothèque de Colombelles",
    structure: "Bibliothèque de Colombelles",
    address: "10 rue Elsa Triolet",
    zip: 14460,
    city: "Colombelles",
    phone: "02 31 72 27 46",
    latitude: 49.205477408431,
    longitude: -0.2975685944732
  },
  {
    name: "EPN - Vire",
    structure: "EPN - Vire",
    address: "16 rue Chênedollé",
    zip: 14500,
    city: "Vire Normandie",
    phone: "02 31 66 49 74",
    latitude: 48.8389865,
    longitude: -0.8908234
  },
  {
    name: "EPN - Les motordus",
    structure: "Médiathèque de Blainville-sur-Orne",
    address: "Esplanade Colbert",
    zip: 14550,
    city: "Blainville-sur-Orne",
    phone: "02 31 06 02 06",
    latitude: 49.226307,
    longitude: -0.303487
  },
  {
    name: "EPN - Espace Culturel",
    structure: "Foyer Espace Culturel",
    address: "Salle Multimédia rue Jean Monnet",
    zip: 14590,
    city: "Moyaux",
    phone: "02 31 63 07 49",
    latitude: 49.196279953862,
    longitude: 0.35520182131387
  },
  {
    name: "EPN - Jeunes Séniors Familles",
    structure: "Jeunes sans Frontières",
    address: "Maisons des familles avenue du Canteloup",
    zip: 14600,
    city: "Honfleur",
    phone: "02 31 49 49 00",
    latitude: 49.408405892146,
    longitude: 0.24676456359862
  },
  {
    name: "CRANT - Falaise",
    structure: "",
    address: "1 rue des Prémontrés",
    zip: 14700,
    city: "Falaise",
    phone: "",
    latitude: 48.8952633,
    longitude: -0.19608600000004
  },
  {
    name: "EPN - Falaise",
    structure: "",
    address: "1 rue des Prémontrés",
    zip: 14700,
    city: "Falaise",
    phone: "02 31 20 79 68",
    latitude: 48.894687,
    longitude: -0.194892
  },
  {
    name: "EPN - Touques multimédia",
    structure: "",
    address: "6 Avenue Aristide Briand",
    zip: 14800,
    city: "Touques",
    phone: "02 31 14 65 73",
    latitude: 49.345198258259,
    longitude: 0.10221783869247
  },
  {
    name: "EPN NCPA - site de Gonneville en Auge",
    structure: "",
    address: "4 rue de la Mairie",
    zip: 14810,
    city: "Gonneville-en-Auge",
    phone: "02 31 24 25 93",
    latitude: 49.2615414,
    longitude: -0.1894973
  },
  {
    name: "EPN - Cyber-Base Médiathèque",
    structure: "Médiathèque Jean-François Sarasin",
    address: "144 Grande rue",
    zip: 14880,
    city: "Hermanville-sur-Mer",
    phone: "02 31 36 18 05",
    latitude: 49.2862929,
    longitude: -0.31371379999996
  },
  {
    name: "EPN - Bernières sur Mer",
    structure: "Cellule Emploi",
    address: "Place du 6 Juin",
    zip: 14990,
    city: "Bernières-sur-Mer",
    phone: "",
    latitude: "",
    longitude: ""
  }
];

export default epnData