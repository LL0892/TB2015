//
// Populate DB with sample data on server start
// to disable, edit config/environment/index.js, and set `seedDB: false`
//

'use strict';

var Geodata = require('../api/geodata/geodata.model');

Geodata.find({}).remove(function(){

    Geodata.create({
        "Commune" : "Suhr",
        "NPA" : 5034,
        "Canton" : "AG"
      },
      {
        "Commune" : "Sulgen",
        "NPA" : 8583,
        "Canton" : "TG"
      },
      {
        "Commune" : "Sullens",
        "NPA" : 1036,
        "Canton" : "VD"
      },
      {
        "Commune" : "Sulz AG",
        "NPA" : 5085,
        "Canton" : "AG"
      },
      {
        "Commune" : "Sulz LU",
        "NPA" : 6284,
        "Canton" : "LU"
      },
      {
        "Commune" : "Sulzbach",
        "NPA" : 8614,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Sumiswald",
        "NPA" : 3454,
        "Canton" : "BE"
      },
      {
        "Commune" : "Summaprada",
        "NPA" : 7421,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sumvitg",
        "NPA" : 7175,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sundlauenen",
        "NPA" : 3800,
        "Canton" : "BE"
      },
      {
        "Commune" : "Sur",
        "NPA" : 7456,
        "Canton" : "GR"
      },
      {
        "Commune" : "Surava",
        "NPA" : 7472,
        "Canton" : "GR"
      },
      {
        "Commune" : "Surcasti",
        "NPA" : 7115,
        "Canton" : "GR"
      },
      {
        "Commune" : "Surcuolm",
        "NPA" : 7138,
        "Canton" : "GR"
      },
      {
        "Commune" : "Surin",
        "NPA" : 7148,
        "Canton" : "GR"
      },
      {
        "Commune" : "Surpierre",
        "NPA" : 1528,
        "Canton" : "FR"
      },
      {
        "Commune" : "St. Antönien",
        "NPA" : 7246,
        "Canton" : "GR"
      },
      {
        "Commune" : "St. Erhard",
        "NPA" : 6212,
        "Canton" : "LU"
      },
      {
        "Commune" : "St. Gallen",
        "NPA" : 9010,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Gallen",
        "NPA" : 9000,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Gallen",
        "NPA" : 9008,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Gallen",
        "NPA" : 9014,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Gallen",
        "NPA" : 9016,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Gallen",
        "NPA" : 9015,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Gallen",
        "NPA" : 9012,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Gallen",
        "NPA" : 9011,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Gallenkappel",
        "NPA" : 8735,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. German",
        "NPA" : 3942,
        "Canton" : "VS"
      },
      {
        "Commune" : "St. Josefen",
        "NPA" : 9030,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Margarethen TG",
        "NPA" : 9543,
        "Canton" : "TG"
      },
      {
        "Commune" : "St. Margrethen SG",
        "NPA" : 9430,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Margrethenberg",
        "NPA" : 7313,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Martin (Lugnez)",
        "NPA" : 7116,
        "Canton" : "GR"
      },
      {
        "Commune" : "St. Moritz",
        "NPA" : 7500,
        "Canton" : "GR"
      },
      {
        "Commune" : "St. Niklaus VS",
        "NPA" : 3924,
        "Canton" : "VS"
      },
      {
        "Commune" : "St. Niklausen LU",
        "NPA" : 6005,
        "Canton" : "LU"
      },
      {
        "Commune" : "St. Niklausen OW",
        "NPA" : 6066,
        "Canton" : "OW"
      },
      {
        "Commune" : "St. Pantaleon",
        "NPA" : 4421,
        "Canton" : "SO"
      },
      {
        "Commune" : "St. Pelagiberg",
        "NPA" : 9225,
        "Canton" : "TG"
      },
      {
        "Commune" : "St. Peter",
        "NPA" : 7028,
        "Canton" : "GR"
      },
      {
        "Commune" : "St. Peterzell",
        "NPA" : 9127,
        "Canton" : "SG"
      },
      {
        "Commune" : "St. Silvester",
        "NPA" : 1736,
        "Canton" : "FR"
      },
      {
        "Commune" : "St. Stephan",
        "NPA" : 3772,
        "Canton" : "BE"
      },
      {
        "Commune" : "St. Urban",
        "NPA" : 4915,
        "Canton" : "LU"
      },
      {
        "Commune" : "St. Ursen",
        "NPA" : 1717,
        "Canton" : "FR"
      },
      {
        "Commune" : "Sta. Maria Val Müstair",
        "NPA" : 7536,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sta. Maria in Calanca",
        "NPA" : 6541,
        "Canton" : "GR"
      },
      {
        "Commune" : "Staad SG",
        "NPA" : 9422,
        "Canton" : "SG"
      },
      {
        "Commune" : "Stabio",
        "NPA" : 6855,
        "Canton" : "TI"
      },
      {
        "Commune" : "Stachen",
        "NPA" : 9320,
        "Canton" : "TG"
      },
      {
        "Commune" : "Stadel (Winterthur)",
        "NPA" : 8404,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Stadel b. Niederglatt",
        "NPA" : 8174,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Staffelbach",
        "NPA" : 5053,
        "Canton" : "AG"
      },
      {
        "Commune" : "Stalden (Sarnen)",
        "NPA" : 6063,
        "Canton" : "OW"
      },
      {
        "Commune" : "Stalden VS",
        "NPA" : 3922,
        "Canton" : "VS"
      },
      {
        "Commune" : "Staldenried",
        "NPA" : 3933,
        "Canton" : "VS"
      },
      {
        "Commune" : "Stallikon",
        "NPA" : 8143,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Stampa",
        "NPA" : 7605,
        "Canton" : "GR"
      },
      {
        "Commune" : "Stans",
        "NPA" : 6370,
        "Canton" : "NW"
      },
      {
        "Commune" : "Stansstad",
        "NPA" : 6362,
        "Canton" : "NW"
      },
      {
        "Commune" : "Starrkirch-Wil",
        "NPA" : 4656,
        "Canton" : "SO"
      },
      {
        "Commune" : "Staufen",
        "NPA" : 5603,
        "Canton" : "AG"
      },
      {
        "Commune" : "Ste-Croix",
        "NPA" : 1450,
        "Canton" : "VD"
      },
      {
        "Commune" : "Stechelberg",
        "NPA" : 3824,
        "Canton" : "BE"
      },
      {
        "Commune" : "Steckborn",
        "NPA" : 8266,
        "Canton" : "TG"
      },
      {
        "Commune" : "Steffisburg",
        "NPA" : 3613,
        "Canton" : "BE"
      },
      {
        "Commune" : "Steffisburg",
        "NPA" : 3612,
        "Canton" : "BE"
      },
      {
        "Commune" : "Steg VS",
        "NPA" : 3940,
        "Canton" : "VS"
      },
      {
        "Commune" : "Steg im Tösstal",
        "NPA" : 8496,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Stehrenberg",
        "NPA" : 9503,
        "Canton" : "TG"
      },
      {
        "Commune" : "Stein AG",
        "NPA" : 4332,
        "Canton" : "AG"
      },
      {
        "Commune" : "Stein AR",
        "NPA" : 9063,
        "Canton" : "AR"
      },
      {
        "Commune" : "Stein SG",
        "NPA" : 9655,
        "Canton" : "SG"
      },
      {
        "Commune" : "Stein am Rhein",
        "NPA" : 8260,
        "Canton" : "SH"
      },
      {
        "Commune" : "Steinach",
        "NPA" : 9323,
        "Canton" : "SG"
      },
      {
        "Commune" : "Steinebrunn",
        "NPA" : 9314,
        "Canton" : "TG"
      },
      {
        "Commune" : "Steinen",
        "NPA" : 6422,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Steinerberg",
        "NPA" : 6416,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Steinhaus",
        "NPA" : 3995,
        "Canton" : "VS"
      },
      {
        "Commune" : "Steinhausen",
        "NPA" : 6312,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Steinhof SO",
        "NPA" : 4556,
        "Canton" : "SO"
      },
      {
        "Commune" : "Steinhuserberg",
        "NPA" : 6114,
        "Canton" : "LU"
      },
      {
        "Commune" : "Steinmaur",
        "NPA" : 8162,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Stels",
        "NPA" : 7226,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sternenberg",
        "NPA" : 8499,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Stetten AG",
        "NPA" : 5608,
        "Canton" : "AG"
      },
      {
        "Commune" : "Stetten SH",
        "NPA" : 8234,
        "Canton" : "SH"
      },
      {
        "Commune" : "Stettfurt",
        "NPA" : 9507,
        "Canton" : "TG"
      },
      {
        "Commune" : "Stettlen",
        "NPA" : 3066,
        "Canton" : "BE"
      },
      {
        "Commune" : "Stierva",
        "NPA" : 7459,
        "Canton" : "GR"
      },
      {
        "Commune" : "Stilli",
        "NPA" : 5233,
        "Canton" : "AG"
      },
      {
        "Commune" : "Stoos SZ",
        "NPA" : 6433,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Strada",
        "NPA" : 7558,
        "Canton" : "GR"
      },
      {
        "Commune" : "Strengelbach",
        "NPA" : 4802,
        "Canton" : "AG"
      },
      {
        "Commune" : "Studen BE",
        "NPA" : 2557,
        "Canton" : "BE"
      },
      {
        "Commune" : "Studen SZ",
        "NPA" : 8845,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Stugl/Stuls",
        "NPA" : 7482,
        "Canton" : "GR"
      },
      {
        "Commune" : "Stäfa",
        "NPA" : 8712,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Stüsslingen",
        "NPA" : 4655,
        "Canton" : "SO"
      },
      {
        "Commune" : "Suberg",
        "NPA" : 3262,
        "Canton" : "BE"
      },
      {
        "Commune" : "Subingen",
        "NPA" : 4553,
        "Canton" : "SO"
      },
      {
        "Commune" : "Suchy",
        "NPA" : 1433,
        "Canton" : "VD"
      },
      {
        "Commune" : "Suen (St-Martin)",
        "NPA" : 1969,
        "Canton" : "VS"
      },
      {
        "Commune" : "Sufers",
        "NPA" : 7434,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sugiez",
        "NPA" : 1786,
        "Canton" : "FR"
      },
      {
        "Commune" : "Sugnens",
        "NPA" : 1043,
        "Canton" : "VD"
      },
      {
        "Commune" : "Rüfenacht BE",
        "NPA" : 3075,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rümikon AG",
        "NPA" : 5464,
        "Canton" : "AG"
      },
      {
        "Commune" : "Rümlang",
        "NPA" : 8153,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rümligen",
        "NPA" : 3128,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rümlingen",
        "NPA" : 4444,
        "Canton" : "BL"
      },
      {
        "Commune" : "Rünenberg",
        "NPA" : 4497,
        "Canton" : "BL"
      },
      {
        "Commune" : "Rüschegg Gambach",
        "NPA" : 3153,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüschegg Heubach",
        "NPA" : 3154,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüschlikon",
        "NPA" : 8803,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rüthi (Rheintal)",
        "NPA" : 9464,
        "Canton" : "SG"
      },
      {
        "Commune" : "Rüti GL",
        "NPA" : 8782,
        "Canton" : "GL"
      },
      {
        "Commune" : "Rüti ZH",
        "NPA" : 8630,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rüti b. Büren",
        "NPA" : 3295,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüti b. Lyssach",
        "NPA" : 3421,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüti b. Riggisberg",
        "NPA" : 3099,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rütihof",
        "NPA" : 5406,
        "Canton" : "AG"
      },
      {
        "Commune" : "Rütli",
        "NPA" : 6441,
        "Canton" : "UR"
      },
      {
        "Commune" : "Rütschelen",
        "NPA" : 4933,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüttenen",
        "NPA" : 4522,
        "Canton" : "SO"
      },
      {
        "Commune" : "S-chanf",
        "NPA" : 7525,
        "Canton" : "GR"
      },
      {
        "Commune" : "S. Antonino",
        "NPA" : 6592,
        "Canton" : "TI"
      },
      {
        "Commune" : "S. Antonio (Val Morobbia)",
        "NPA" : 6583,
        "Canton" : "TI"
      },
      {
        "Commune" : "S. Benedetg",
        "NPA" : 7174,
        "Canton" : "GR"
      },
      {
        "Commune" : "S. Bernardino",
        "NPA" : 6565,
        "Canton" : "GR"
      },
      {
        "Commune" : "S. Carlo (Poschiavo)",
        "NPA" : 7741,
        "Canton" : "GR"
      },
      {
        "Commune" : "S. Carlo (Val Bavona)",
        "NPA" : 6690,
        "Canton" : "TI"
      },
      {
        "Commune" : "S. Nazzaro",
        "NPA" : 6575,
        "Canton" : "TI"
      },
      {
        "Commune" : "S. Pietro",
        "NPA" : 6854,
        "Canton" : "TI"
      },
      {
        "Commune" : "S. Vittore",
        "NPA" : 6534,
        "Canton" : "GR"
      },
      {
        "Commune" : "Saanen",
        "NPA" : 3792,
        "Canton" : "BE"
      },
      {
        "Commune" : "Saanenmöser",
        "NPA" : 3777,
        "Canton" : "BE"
      },
      {
        "Commune" : "Saas im Prättigau",
        "NPA" : 7247,
        "Canton" : "GR"
      },
      {
        "Commune" : "Saas-Almagell",
        "NPA" : 3905,
        "Canton" : "VS"
      },
      {
        "Commune" : "Saas-Balen",
        "NPA" : 3908,
        "Canton" : "VS"
      },
      {
        "Commune" : "Saas-Fee",
        "NPA" : 3906,
        "Canton" : "VS"
      },
      {
        "Commune" : "Saas-Grund",
        "NPA" : 3910,
        "Canton" : "VS"
      },
      {
        "Commune" : "Sachseln",
        "NPA" : 6072,
        "Canton" : "OW"
      },
      {
        "Commune" : "Saclentse",
        "NPA" : 1996,
        "Canton" : "VS"
      },
      {
        "Commune" : "Safenwil",
        "NPA" : 5745,
        "Canton" : "AG"
      },
      {
        "Commune" : "Safien Platz",
        "NPA" : 7107,
        "Canton" : "GR"
      },
      {
        "Commune" : "Safnern",
        "NPA" : 2553,
        "Canton" : "BE"
      },
      {
        "Commune" : "Sagno",
        "NPA" : 6839,
        "Canton" : "TI"
      },
      {
        "Commune" : "Sagogn",
        "NPA" : 7152,
        "Canton" : "GR"
      },
      {
        "Commune" : "Saicourt",
        "NPA" : 2732,
        "Canton" : "BE"
      },
      {
        "Commune" : "Saignelégier",
        "NPA" : 2350,
        "Canton" : "JU"
      },
      {
        "Commune" : "Saillon",
        "NPA" : 1913,
        "Canton" : "VS"
      },
      {
        "Commune" : "Sala Capriasca",
        "NPA" : 6954,
        "Canton" : "TI"
      },
      {
        "Commune" : "Saland",
        "NPA" : 8493,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Salavaux",
        "NPA" : 1585,
        "Canton" : "VD"
      },
      {
        "Commune" : "Salenstein",
        "NPA" : 8268,
        "Canton" : "TG"
      },
      {
        "Commune" : "Salez",
        "NPA" : 9465,
        "Canton" : "SG"
      },
      {
        "Commune" : "Salgesch",
        "NPA" : 3970,
        "Canton" : "VS"
      },
      {
        "Commune" : "Salins",
        "NPA" : 1991,
        "Canton" : "VS"
      },
      {
        "Commune" : "Salmsach",
        "NPA" : 8599,
        "Canton" : "TG"
      },
      {
        "Commune" : "Salorino",
        "NPA" : 6872,
        "Canton" : "TI"
      },
      {
        "Commune" : "Salouf",
        "NPA" : 7462,
        "Canton" : "GR"
      },
      {
        "Commune" : "Salvan",
        "NPA" : 1922,
        "Canton" : "VS"
      },
      {
        "Commune" : "Salvenach",
        "NPA" : 1794,
        "Canton" : "FR"
      },
      {
        "Commune" : "Samedan",
        "NPA" : 7503,
        "Canton" : "GR"
      },
      {
        "Commune" : "Samnaun Dorf",
        "NPA" : 7563,
        "Canton" : "GR"
      },
      {
        "Commune" : "Samnaun-Compatsch",
        "NPA" : 7562,
        "Canton" : "GR"
      },
      {
        "Commune" : "Samstagern",
        "NPA" : 8833,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Sangernboden",
        "NPA" : 1738,
        "Canton" : "BE"
      },
      {
        "Commune" : "Sargans",
        "NPA" : 7320,
        "Canton" : "SG"
      },
      {
        "Commune" : "Sarmenstorf",
        "NPA" : 5614,
        "Canton" : "AG"
      },
      {
        "Commune" : "Sarn",
        "NPA" : 7423,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sarnen",
        "NPA" : 6060,
        "Canton" : "OW"
      },
      {
        "Commune" : "Sarreyer",
        "NPA" : 1948,
        "Canton" : "VS"
      },
      {
        "Commune" : "Sarzens",
        "NPA" : 1683,
        "Canton" : "VD"
      },
      {
        "Commune" : "Sassel",
        "NPA" : 1534,
        "Canton" : "VD"
      },
      {
        "Commune" : "Satigny",
        "NPA" : 1242,
        "Canton" : "GE"
      },
      {
        "Commune" : "Sattel",
        "NPA" : 6417,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Saubraz",
        "NPA" : 1189,
        "Canton" : "VD"
      },
      {
        "Commune" : "Saulcy",
        "NPA" : 2873,
        "Canton" : "JU"
      },
      {
        "Commune" : "Saules",
        "NPA" : 2063,
        "Canton" : "NE"
      },
      {
        "Commune" : "Saules BE",
        "NPA" : 2732,
        "Canton" : "BE"
      },
      {
        "Commune" : "Savagnier",
        "NPA" : 2065,
        "Canton" : "NE"
      },
      {
        "Commune" : "Savigny",
        "NPA" : 1073,
        "Canton" : "VD"
      },
      {
        "Commune" : "Savognin",
        "NPA" : 7460,
        "Canton" : "GR"
      },
      {
        "Commune" : "Savosa",
        "NPA" : 6942,
        "Canton" : "TI"
      },
      {
        "Commune" : "Sax",
        "NPA" : 9468,
        "Canton" : "SG"
      },
      {
        "Commune" : "Saxeten",
        "NPA" : 3813,
        "Canton" : "BE"
      },
      {
        "Commune" : "Saxon",
        "NPA" : 1907,
        "Canton" : "VS"
      },
      {
        "Commune" : "Saxonne (Ayent)",
        "NPA" : 1966,
        "Canton" : "VS"
      },
      {
        "Commune" : "Says",
        "NPA" : 7202,
        "Canton" : "GR"
      },
      {
        "Commune" : "Scareglia",
        "NPA" : 6951,
        "Canton" : "TI"
      },
      {
        "Commune" : "Schaan",
        "NPA" : 9494,
        "Canton" : "LI"
      },
      {
        "Commune" : "Schaanwald",
        "NPA" : 9486,
        "Canton" : "LI"
      },
      {
        "Commune" : "Schachen LU",
        "NPA" : 6105,
        "Canton" : "LU"
      },
      {
        "Commune" : "Schachen b. Herisau",
        "NPA" : 9112,
        "Canton" : "AR"
      },
      {
        "Commune" : "Schachen b. Reute",
        "NPA" : 9414,
        "Canton" : "AR"
      },
      {
        "Commune" : "Schaffhausen",
        "NPA" : 8200,
        "Canton" : "SH"
      },
      {
        "Commune" : "Schaffhausen",
        "NPA" : 8203,
        "Canton" : "SH"
      },
      {
        "Commune" : "Schaffhausen",
        "NPA" : 8207,
        "Canton" : "SH"
      },
      {
        "Commune" : "Schaffhausen",
        "NPA" : 8208,
        "Canton" : "SH"
      },
      {
        "Commune" : "Schafhausen im Emmental",
        "NPA" : 3415,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schafisheim",
        "NPA" : 5503,
        "Canton" : "AG"
      },
      {
        "Commune" : "Schalunen",
        "NPA" : 3314,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schangnau",
        "NPA" : 6197,
        "Canton" : "BE"
      },
      {
        "Commune" : "Scharans",
        "NPA" : 7412,
        "Canton" : "GR"
      },
      {
        "Commune" : "Scharnachtal",
        "NPA" : 3722,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schattdorf",
        "NPA" : 6467,
        "Canton" : "UR"
      },
      {
        "Commune" : "Schattenhalb",
        "NPA" : 3860,
        "Canton" : "BE"
      },
      {
        "Commune" : "Scheid",
        "NPA" : 7419,
        "Canton" : "GR"
      },
      {
        "Commune" : "Schellenberg",
        "NPA" : 9488,
        "Canton" : "LI"
      },
      {
        "Commune" : "Schelten",
        "NPA" : 2827,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schenkon",
        "NPA" : 6214,
        "Canton" : "LU"
      },
      {
        "Commune" : "Scherz",
        "NPA" : 5246,
        "Canton" : "AG"
      },
      {
        "Commune" : "Scherzingen",
        "NPA" : 8596,
        "Canton" : "TG"
      },
      {
        "Commune" : "Scheunen",
        "NPA" : 3305,
        "Canton" : "BE"
      },
      {
        "Commune" : "Scheuren",
        "NPA" : 2556,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schiers",
        "NPA" : 7220,
        "Canton" : "GR"
      },
      {
        "Commune" : "Schindellegi",
        "NPA" : 8834,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Schinznach Bad",
        "NPA" : 5116,
        "Canton" : "AG"
      },
      {
        "Commune" : "Schinznach Dorf",
        "NPA" : 5107,
        "Canton" : "AG"
      },
      {
        "Commune" : "Schlans",
        "NPA" : 7168,
        "Canton" : "GR"
      },
      {
        "Commune" : "Schlatt TG",
        "NPA" : 8252,
        "Canton" : "TG"
      },
      {
        "Commune" : "Schlatt b. Winterthur",
        "NPA" : 8418,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Schlattingen",
        "NPA" : 8255,
        "Canton" : "TG"
      },
      {
        "Commune" : "Schleinikon",
        "NPA" : 8165,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Schleitheim",
        "NPA" : 8226,
        "Canton" : "SH"
      },
      {
        "Commune" : "Schlierbach",
        "NPA" : 6231,
        "Canton" : "LU"
      },
      {
        "Commune" : "Schlieren",
        "NPA" : 8952,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Schliern b. Köniz",
        "NPA" : 3098,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schlossrued",
        "NPA" : 5044,
        "Canton" : "AG"
      },
      {
        "Commune" : "Schlosswil",
        "NPA" : 3082,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schluein",
        "NPA" : 7151,
        "Canton" : "GR"
      },
      {
        "Commune" : "Schmerikon",
        "NPA" : 8716,
        "Canton" : "SG"
      },
      {
        "Commune" : "Schmidigen-Mühleweg",
        "NPA" : 3464,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schmidrüti",
        "NPA" : 8495,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Schmidshof",
        "NPA" : 9565,
        "Canton" : "TG"
      },
      {
        "Commune" : "Schmiedrued",
        "NPA" : 5046,
        "Canton" : "AG"
      },
      {
        "Commune" : "Schmitten (Albula)",
        "NPA" : 7493,
        "Canton" : "GR"
      },
      {
        "Commune" : "Schmitten FR",
        "NPA" : 3185,
        "Canton" : "FR"
      },
      {
        "Commune" : "Schnaus",
        "NPA" : 7130,
        "Canton" : "GR"
      },
      {
        "Commune" : "Schneisingen",
        "NPA" : 5425,
        "Canton" : "AG"
      },
      {
        "Commune" : "Schnottwil",
        "NPA" : 3253,
        "Canton" : "SO"
      },
      {
        "Commune" : "Schocherswil",
        "NPA" : 8581,
        "Canton" : "TG"
      },
      {
        "Commune" : "Schongau",
        "NPA" : 6288,
        "Canton" : "LU"
      },
      {
        "Commune" : "Schuders",
        "NPA" : 7228,
        "Canton" : "GR"
      },
      {
        "Commune" : "Schupfart",
        "NPA" : 4325,
        "Canton" : "AG"
      },
      {
        "Commune" : "Schwaderloch",
        "NPA" : 5326,
        "Canton" : "AG"
      },
      {
        "Commune" : "Schwadernau",
        "NPA" : 2556,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schwanden (Sigriswil)",
        "NPA" : 3657,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schwanden GL",
        "NPA" : 8762,
        "Canton" : "GL"
      },
      {
        "Commune" : "Schwanden b. Brienz",
        "NPA" : 3855,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schwanden im Emmental",
        "NPA" : 3433,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schwarzenbach (Huttwil)",
        "NPA" : 4953,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schwarzenbach LU",
        "NPA" : 6215,
        "Canton" : "LU"
      },
      {
        "Commune" : "Schwarzenbach SG",
        "NPA" : 9536,
        "Canton" : "SG"
      },
      {
        "Commune" : "Schwarzenberg LU",
        "NPA" : 6103,
        "Canton" : "LU"
      },
      {
        "Commune" : "Schwarzenburg",
        "NPA" : 3150,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schwarzenegg",
        "NPA" : 3616,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schwarzhäusern",
        "NPA" : 4911,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schwarzsee",
        "NPA" : 1716,
        "Canton" : "FR"
      },
      {
        "Commune" : "Schweizersholz",
        "NPA" : 9223,
        "Canton" : "TG"
      },
      {
        "Commune" : "Schwellbrunn",
        "NPA" : 9103,
        "Canton" : "AR"
      },
      {
        "Commune" : "Schwende",
        "NPA" : 9057,
        "Canton" : "AI"
      },
      {
        "Commune" : "Schwenden im Diemtigtal",
        "NPA" : 3757,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schwendi im Weisstannental",
        "NPA" : 7325,
        "Canton" : "SG"
      },
      {
        "Commune" : "Schwendibach",
        "NPA" : 3624,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schwerzenbach",
        "NPA" : 8603,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Schwyz",
        "NPA" : 6430,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Schwändi b. Schwanden",
        "NPA" : 8762,
        "Canton" : "GL"
      },
      {
        "Commune" : "Schänis",
        "NPA" : 8718,
        "Canton" : "SG"
      },
      {
        "Commune" : "Schöfflisdorf",
        "NPA" : 8165,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Schöftland",
        "NPA" : 5040,
        "Canton" : "AG"
      },
      {
        "Commune" : "Schönenbaumgarten",
        "NPA" : 8585,
        "Canton" : "TG"
      },
      {
        "Commune" : "Schönenberg ZH",
        "NPA" : 8824,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Schönenberg an der Thur",
        "NPA" : 9215,
        "Canton" : "TG"
      },
      {
        "Commune" : "Schönenbuch",
        "NPA" : 4124,
        "Canton" : "BL"
      },
      {
        "Commune" : "Schönengrund",
        "NPA" : 9105,
        "Canton" : "AR"
      },
      {
        "Commune" : "Schönenwerd",
        "NPA" : 5012,
        "Canton" : "SO"
      },
      {
        "Commune" : "Schönholzerswilen",
        "NPA" : 8577,
        "Canton" : "TG"
      },
      {
        "Commune" : "Schönried",
        "NPA" : 3778,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schötz",
        "NPA" : 6247,
        "Canton" : "LU"
      },
      {
        "Commune" : "Schübelbach",
        "NPA" : 8862,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Schüpbach",
        "NPA" : 3535,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schüpfen",
        "NPA" : 3054,
        "Canton" : "BE"
      },
      {
        "Commune" : "Schüpfheim",
        "NPA" : 6170,
        "Canton" : "LU"
      },
      {
        "Commune" : "Scudellate",
        "NPA" : 6838,
        "Canton" : "TI"
      },
      {
        "Commune" : "Scuol",
        "NPA" : 7550,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sedrun",
        "NPA" : 7188,
        "Canton" : "GR"
      },
      {
        "Commune" : "Seeberg",
        "NPA" : 3365,
        "Canton" : "BE"
      },
      {
        "Commune" : "Seedorf BE",
        "NPA" : 3267,
        "Canton" : "BE"
      },
      {
        "Commune" : "Seedorf UR",
        "NPA" : 6462,
        "Canton" : "UR"
      },
      {
        "Commune" : "Seehof",
        "NPA" : 2747,
        "Canton" : "BE"
      },
      {
        "Commune" : "Seelisberg",
        "NPA" : 6377,
        "Canton" : "UR"
      },
      {
        "Commune" : "Seengen",
        "NPA" : 5707,
        "Canton" : "AG"
      },
      {
        "Commune" : "Seewen SO",
        "NPA" : 4206,
        "Canton" : "SO"
      },
      {
        "Commune" : "Seewen SZ",
        "NPA" : 6423,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Seewil",
        "NPA" : 3256,
        "Canton" : "BE"
      },
      {
        "Commune" : "Seewis Dorf",
        "NPA" : 7212,
        "Canton" : "GR"
      },
      {
        "Commune" : "Seewis-Pardisla",
        "NPA" : 7212,
        "Canton" : "GR"
      },
      {
        "Commune" : "Seewis-Schmitten",
        "NPA" : 7212,
        "Canton" : "GR"
      },
      {
        "Commune" : "Seftigen",
        "NPA" : 3662,
        "Canton" : "BE"
      },
      {
        "Commune" : "Segnas",
        "NPA" : 7186,
        "Canton" : "GR"
      },
      {
        "Commune" : "Seigneux",
        "NPA" : 1525,
        "Canton" : "VD"
      },
      {
        "Commune" : "Seiry",
        "NPA" : 1470,
        "Canton" : "FR"
      },
      {
        "Commune" : "Seleute",
        "NPA" : 2888,
        "Canton" : "JU"
      },
      {
        "Commune" : "Selkingen",
        "NPA" : 3989,
        "Canton" : "VS"
      },
      {
        "Commune" : "Selma",
        "NPA" : 6545,
        "Canton" : "GR"
      },
      {
        "Commune" : "Seltisberg",
        "NPA" : 4411,
        "Canton" : "BL"
      },
      {
        "Commune" : "Selzach",
        "NPA" : 2545,
        "Canton" : "SO"
      },
      {
        "Commune" : "Sembrancher",
        "NPA" : 1933,
        "Canton" : "VS"
      },
      {
        "Commune" : "Sementina",
        "NPA" : 6514,
        "Canton" : "TI"
      },
      {
        "Commune" : "Semione",
        "NPA" : 6714,
        "Canton" : "TI"
      },
      {
        "Commune" : "Sempach",
        "NPA" : 6204,
        "Canton" : "LU"
      },
      {
        "Commune" : "Sempach Station",
        "NPA" : 6203,
        "Canton" : "LU"
      },
      {
        "Commune" : "Semsales",
        "NPA" : 1623,
        "Canton" : "FR"
      },
      {
        "Commune" : "Senarclens",
        "NPA" : 1304,
        "Canton" : "VD"
      },
      {
        "Commune" : "Sennhof (Winterthur)",
        "NPA" : 8482,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Sennwald",
        "NPA" : 9466,
        "Canton" : "SG"
      },
      {
        "Commune" : "Sent",
        "NPA" : 7554,
        "Canton" : "GR"
      },
      {
        "Commune" : "Senèdes",
        "NPA" : 1724,
        "Canton" : "FR"
      },
      {
        "Commune" : "Seon",
        "NPA" : 5703,
        "Canton" : "AG"
      },
      {
        "Commune" : "Sergey",
        "NPA" : 1355,
        "Canton" : "VD"
      },
      {
        "Commune" : "Serneus",
        "NPA" : 7249,
        "Canton" : "GR"
      },
      {
        "Commune" : "Serpiano",
        "NPA" : 6867,
        "Canton" : "TI"
      },
      {
        "Commune" : "Servion",
        "NPA" : 1077,
        "Canton" : "VD"
      },
      {
        "Commune" : "Seseglio",
        "NPA" : 6832,
        "Canton" : "TI"
      },
      {
        "Commune" : "Sessa",
        "NPA" : 6997,
        "Canton" : "TI"
      },
      {
        "Commune" : "Seuzach",
        "NPA" : 8472,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Sevelen",
        "NPA" : 9475,
        "Canton" : "SG"
      },
      {
        "Commune" : "Sevgein",
        "NPA" : 7127,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sfazù",
        "NPA" : 7742,
        "Canton" : "GR"
      },
      {
        "Commune" : "Siat",
        "NPA" : 7157,
        "Canton" : "GR"
      },
      {
        "Commune" : "Siblingen",
        "NPA" : 8225,
        "Canton" : "SH"
      },
      {
        "Commune" : "Siebnen",
        "NPA" : 8854,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Siegershausen",
        "NPA" : 8573,
        "Canton" : "TG"
      },
      {
        "Commune" : "Sierre",
        "NPA" : 3960,
        "Canton" : "VS"
      },
      {
        "Commune" : "Siggenthal Station",
        "NPA" : 5301,
        "Canton" : "AG"
      },
      {
        "Commune" : "Sigigen",
        "NPA" : 6019,
        "Canton" : "LU"
      },
      {
        "Commune" : "Sigirino",
        "NPA" : 6806,
        "Canton" : "TI"
      },
      {
        "Commune" : "Siglistorf",
        "NPA" : 5462,
        "Canton" : "AG"
      },
      {
        "Commune" : "Signau",
        "NPA" : 3534,
        "Canton" : "BE"
      },
      {
        "Commune" : "Signy",
        "NPA" : 1274,
        "Canton" : "VD"
      },
      {
        "Commune" : "Signèse (Ayent)",
        "NPA" : 1966,
        "Canton" : "VS"
      },
      {
        "Commune" : "Signôra",
        "NPA" : 6951,
        "Canton" : "TI"
      },
      {
        "Commune" : "Sigriswil",
        "NPA" : 3655,
        "Canton" : "BE"
      },
      {
        "Commune" : "Sihlbrugg",
        "NPA" : 6340,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Sihlbrugg Station",
        "NPA" : 8135,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Sihlwald",
        "NPA" : 8135,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Silenen",
        "NPA" : 6473,
        "Canton" : "UR"
      },
      {
        "Commune" : "Sils im Domleschg",
        "NPA" : 7411,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sils/Segl Baselgia",
        "NPA" : 7515,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sils/Segl Maria",
        "NPA" : 7514,
        "Canton" : "GR"
      },
      {
        "Commune" : "Silvaplana",
        "NPA" : 7513,
        "Canton" : "GR"
      },
      {
        "Commune" : "Silvaplana-Surlej",
        "NPA" : 7513,
        "Canton" : "GR"
      },
      {
        "Commune" : "Simplon Dorf",
        "NPA" : 3907,
        "Canton" : "VS"
      },
      {
        "Commune" : "Sins",
        "NPA" : 5643,
        "Canton" : "AG"
      },
      {
        "Commune" : "Sion",
        "NPA" : 1950,
        "Canton" : "VS"
      },
      {
        "Commune" : "Sirnach",
        "NPA" : 8370,
        "Canton" : "TG"
      },
      {
        "Commune" : "Siselen BE",
        "NPA" : 2577,
        "Canton" : "BE"
      },
      {
        "Commune" : "Sisikon",
        "NPA" : 6452,
        "Canton" : "UR"
      },
      {
        "Commune" : "Sissach",
        "NPA" : 4450,
        "Canton" : "BL"
      },
      {
        "Commune" : "Sisseln AG",
        "NPA" : 4334,
        "Canton" : "AG"
      },
      {
        "Commune" : "Sitterdorf",
        "NPA" : 8589,
        "Canton" : "TG"
      },
      {
        "Commune" : "Siviez (Nendaz)",
        "NPA" : 1997,
        "Canton" : "VS"
      },
      {
        "Commune" : "Siviriez",
        "NPA" : 1678,
        "Canton" : "FR"
      },
      {
        "Commune" : "Soazza",
        "NPA" : 6562,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sobrio",
        "NPA" : 6749,
        "Canton" : "TI"
      },
      {
        "Commune" : "Soglio",
        "NPA" : 7610,
        "Canton" : "GR"
      },
      {
        "Commune" : "Solduno",
        "NPA" : 6600,
        "Canton" : "TI"
      },
      {
        "Commune" : "Solothurn",
        "NPA" : 4500,
        "Canton" : "SO"
      },
      {
        "Commune" : "Somazzo",
        "NPA" : 6872,
        "Canton" : "TI"
      },
      {
        "Commune" : "Someo",
        "NPA" : 6674,
        "Canton" : "TI"
      },
      {
        "Commune" : "Sommentier",
        "NPA" : 1688,
        "Canton" : "FR"
      },
      {
        "Commune" : "Sommeri",
        "NPA" : 8580,
        "Canton" : "TG"
      },
      {
        "Commune" : "Sonceboz-Sombeval",
        "NPA" : 2605,
        "Canton" : "BE"
      },
      {
        "Commune" : "Sonnental",
        "NPA" : 9245,
        "Canton" : "SG"
      },
      {
        "Commune" : "Sonogno",
        "NPA" : 6637,
        "Canton" : "TI"
      },
      {
        "Commune" : "Sonterswil",
        "NPA" : 8564,
        "Canton" : "TG"
      },
      {
        "Commune" : "Sonvico",
        "NPA" : 6968,
        "Canton" : "TI"
      },
      {
        "Commune" : "Sonvilier",
        "NPA" : 2615,
        "Canton" : "BE"
      },
      {
        "Commune" : "Sool",
        "NPA" : 8762,
        "Canton" : "GL"
      },
      {
        "Commune" : "Soral",
        "NPA" : 1286,
        "Canton" : "GE"
      },
      {
        "Commune" : "Sorengo",
        "NPA" : 6924,
        "Canton" : "TI"
      },
      {
        "Commune" : "Sorens",
        "NPA" : 1642,
        "Canton" : "FR"
      },
      {
        "Commune" : "Sornard (Nendaz)",
        "NPA" : 1997,
        "Canton" : "VS"
      },
      {
        "Commune" : "Sornetan",
        "NPA" : 2716,
        "Canton" : "BE"
      },
      {
        "Commune" : "Sorvilier",
        "NPA" : 2736,
        "Canton" : "BE"
      },
      {
        "Commune" : "Sottens",
        "NPA" : 1062,
        "Canton" : "VD"
      },
      {
        "Commune" : "Soubey",
        "NPA" : 2887,
        "Canton" : "JU"
      },
      {
        "Commune" : "Souboz",
        "NPA" : 2748,
        "Canton" : "BE"
      },
      {
        "Commune" : "Soulce",
        "NPA" : 2864,
        "Canton" : "JU"
      },
      {
        "Commune" : "Soyhières",
        "NPA" : 2805,
        "Canton" : "JU"
      },
      {
        "Commune" : "Speicher",
        "NPA" : 9042,
        "Canton" : "AR"
      },
      {
        "Commune" : "Speicherschwendi",
        "NPA" : 9037,
        "Canton" : "AR"
      },
      {
        "Commune" : "Spiegel b. Bern",
        "NPA" : 3095,
        "Canton" : "BE"
      },
      {
        "Commune" : "Spiez",
        "NPA" : 3700,
        "Canton" : "BE"
      },
      {
        "Commune" : "Spiringen",
        "NPA" : 6464,
        "Canton" : "UR"
      },
      {
        "Commune" : "Splügen",
        "NPA" : 7435,
        "Canton" : "GR"
      },
      {
        "Commune" : "Spreitenbach",
        "NPA" : 8957,
        "Canton" : "AG"
      },
      {
        "Commune" : "Spruga",
        "NPA" : 6663,
        "Canton" : "TI"
      },
      {
        "Commune" : "St-Aubin FR",
        "NPA" : 1566,
        "Canton" : "FR"
      },
      {
        "Commune" : "St-Aubin-Sauges",
        "NPA" : 2024,
        "Canton" : "NE"
      },
      {
        "Commune" : "St-Barthélemy VD",
        "NPA" : 1040,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-Blaise",
        "NPA" : 2072,
        "Canton" : "NE"
      },
      {
        "Commune" : "St-Brais",
        "NPA" : 2364,
        "Canton" : "JU"
      },
      {
        "Commune" : "St-Cergue",
        "NPA" : 1264,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-Cierges",
        "NPA" : 1410,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-George",
        "NPA" : 1188,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-Germain (Savièse)",
        "NPA" : 1965,
        "Canton" : "VS"
      },
      {
        "Commune" : "St-Gingolph",
        "NPA" : 1898,
        "Canton" : "VS"
      },
      {
        "Commune" : "St-Imier",
        "NPA" : 2610,
        "Canton" : "BE"
      },
      {
        "Commune" : "St-Jean VS",
        "NPA" : 3961,
        "Canton" : "VS"
      },
      {
        "Commune" : "St-Livres",
        "NPA" : 1176,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-Luc",
        "NPA" : 3961,
        "Canton" : "VS"
      },
      {
        "Commune" : "St-Légier-La Chiésaz",
        "NPA" : 1806,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-Léonard",
        "NPA" : 1958,
        "Canton" : "VS"
      },
      {
        "Commune" : "St-Martin FR",
        "NPA" : 1609,
        "Canton" : "FR"
      },
      {
        "Commune" : "St-Martin VS",
        "NPA" : 1969,
        "Canton" : "VS"
      },
      {
        "Commune" : "St-Maurice",
        "NPA" : 1890,
        "Canton" : "VS"
      },
      {
        "Commune" : "St-Oyens",
        "NPA" : 1187,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-Pierre-de-Clages",
        "NPA" : 1955,
        "Canton" : "VS"
      },
      {
        "Commune" : "St-Prex",
        "NPA" : 1162,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-Romain (Ayent)",
        "NPA" : 1966,
        "Canton" : "VS"
      },
      {
        "Commune" : "St-Saphorin (Lavaux)",
        "NPA" : 1071,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-Saphorin-sur-Morges",
        "NPA" : 1113,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-Sulpice NE",
        "NPA" : 2123,
        "Canton" : "NE"
      },
      {
        "Commune" : "St-Sulpice VD",
        "NPA" : 1025,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-Séverin",
        "NPA" : 1975,
        "Canton" : "VS"
      },
      {
        "Commune" : "St-Triphon",
        "NPA" : 1867,
        "Canton" : "VD"
      },
      {
        "Commune" : "St-Ursanne",
        "NPA" : 2882,
        "Canton" : "JU"
      },
      {
        "Commune" : "St. Antoni",
        "NPA" : 1713,
        "Canton" : "FR"
      },
      {
        "Commune" : "Les Clées",
        "NPA" : 1356,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Collons",
        "NPA" : 1988,
        "Canton" : "VS"
      },
      {
        "Commune" : "Les Crosets",
        "NPA" : 1873,
        "Canton" : "VS"
      },
      {
        "Commune" : "Les Cullayes",
        "NPA" : 1080,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Diablerets",
        "NPA" : 1865,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Ecasseys",
        "NPA" : 1697,
        "Canton" : "FR"
      },
      {
        "Commune" : "Les Ecorcheresses",
        "NPA" : 2748,
        "Canton" : "BE"
      },
      {
        "Commune" : "Les Emibois",
        "NPA" : 2338,
        "Canton" : "JU"
      },
      {
        "Commune" : "Les Enfers",
        "NPA" : 2363,
        "Canton" : "JU"
      },
      {
        "Commune" : "Les Evouettes",
        "NPA" : 1897,
        "Canton" : "VS"
      },
      {
        "Commune" : "Les Friques",
        "NPA" : 1566,
        "Canton" : "FR"
      },
      {
        "Commune" : "Les Geneveys-sur-Coffrane",
        "NPA" : 2206,
        "Canton" : "NE"
      },
      {
        "Commune" : "Les Genevez JU",
        "NPA" : 2714,
        "Canton" : "JU"
      },
      {
        "Commune" : "Les Giettes",
        "NPA" : 1871,
        "Canton" : "VS"
      },
      {
        "Commune" : "Les Granges (Salvan)",
        "NPA" : 1922,
        "Canton" : "VS"
      },
      {
        "Commune" : "Les Haudères",
        "NPA" : 1984,
        "Canton" : "VS"
      },
      {
        "Commune" : "Les Hauts-Geneveys",
        "NPA" : 2208,
        "Canton" : "NE"
      },
      {
        "Commune" : "Les Marécottes",
        "NPA" : 1923,
        "Canton" : "VS"
      },
      {
        "Commune" : "Les Mayens-de-Sion",
        "NPA" : 1992,
        "Canton" : "VS"
      },
      {
        "Commune" : "Les Monts-de-Corsier",
        "NPA" : 1808,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Monts-de-Pully",
        "NPA" : 1068,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Mosses",
        "NPA" : 1862,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Moulins",
        "NPA" : 1660,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Moulins VS (Liddes)",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Les Paccots",
        "NPA" : 1619,
        "Canton" : "FR"
      },
      {
        "Commune" : "Les Planchettes",
        "NPA" : 2325,
        "Canton" : "NE"
      },
      {
        "Commune" : "Les Plans-sur-Bex",
        "NPA" : 1880,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Pommerats",
        "NPA" : 2353,
        "Canton" : "JU"
      },
      {
        "Commune" : "Les Pontins",
        "NPA" : 2610,
        "Canton" : "BE"
      },
      {
        "Commune" : "Les Ponts-de-Martel",
        "NPA" : 2316,
        "Canton" : "NE"
      },
      {
        "Commune" : "Les Posses-sur-Bex",
        "NPA" : 1880,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Prés-d'Orvin",
        "NPA" : 2534,
        "Canton" : "BE"
      },
      {
        "Commune" : "Les Rasses",
        "NPA" : 1452,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Reussilles",
        "NPA" : 2722,
        "Canton" : "BE"
      },
      {
        "Commune" : "Les Sagnettes",
        "NPA" : 2124,
        "Canton" : "NE"
      },
      {
        "Commune" : "Les Sciernes-d'Albeuve",
        "NPA" : 1669,
        "Canton" : "FR"
      },
      {
        "Commune" : "Les Taillères",
        "NPA" : 2406,
        "Canton" : "NE"
      },
      {
        "Commune" : "Les Tavernes",
        "NPA" : 1607,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Thioleyres",
        "NPA" : 1607,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Valettes (Bovernier)",
        "NPA" : 1932,
        "Canton" : "VS"
      },
      {
        "Commune" : "Les Verrières",
        "NPA" : 2126,
        "Canton" : "NE"
      },
      {
        "Commune" : "Les Vieux-Prés",
        "NPA" : 2054,
        "Canton" : "NE"
      },
      {
        "Commune" : "Les Vérines (Chamoson)",
        "NPA" : 1955,
        "Canton" : "VS"
      },
      {
        "Commune" : "Lessoc",
        "NPA" : 1669,
        "Canton" : "FR"
      },
      {
        "Commune" : "Leuggelbach",
        "NPA" : 8774,
        "Canton" : "GL"
      },
      {
        "Commune" : "Leuggern",
        "NPA" : 5316,
        "Canton" : "AG"
      },
      {
        "Commune" : "Leuk Stadt",
        "NPA" : 3953,
        "Canton" : "VS"
      },
      {
        "Commune" : "Leukerbad",
        "NPA" : 3954,
        "Canton" : "VS"
      },
      {
        "Commune" : "Leutwil",
        "NPA" : 5725,
        "Canton" : "AG"
      },
      {
        "Commune" : "Leuzigen",
        "NPA" : 3297,
        "Canton" : "BE"
      },
      {
        "Commune" : "Levron",
        "NPA" : 1942,
        "Canton" : "VS"
      },
      {
        "Commune" : "Leysin",
        "NPA" : 1854,
        "Canton" : "VD"
      },
      {
        "Commune" : "Leytron",
        "NPA" : 1912,
        "Canton" : "VS"
      },
      {
        "Commune" : "Li Curt",
        "NPA" : 7745,
        "Canton" : "GR"
      },
      {
        "Commune" : "Libingen",
        "NPA" : 9614,
        "Canton" : "SG"
      },
      {
        "Commune" : "Lichtensteig",
        "NPA" : 9620,
        "Canton" : "SG"
      },
      {
        "Commune" : "Liddes",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Liebefeld",
        "NPA" : 3097,
        "Canton" : "BE"
      },
      {
        "Commune" : "Liebistorf",
        "NPA" : 3213,
        "Canton" : "FR"
      },
      {
        "Commune" : "Liedertswil",
        "NPA" : 4436,
        "Canton" : "BL"
      },
      {
        "Commune" : "Lieffrens",
        "NPA" : 1688,
        "Canton" : "FR"
      },
      {
        "Commune" : "Lieli LU",
        "NPA" : 6277,
        "Canton" : "LU"
      },
      {
        "Commune" : "Lienz",
        "NPA" : 9464,
        "Canton" : "SG"
      },
      {
        "Commune" : "Liesberg",
        "NPA" : 4253,
        "Canton" : "BL"
      },
      {
        "Commune" : "Liesberg Dorf",
        "NPA" : 4254,
        "Canton" : "BL"
      },
      {
        "Commune" : "Liestal",
        "NPA" : 4410,
        "Canton" : "BL"
      },
      {
        "Commune" : "Liez (St-Martin)",
        "NPA" : 1969,
        "Canton" : "VS"
      },
      {
        "Commune" : "Ligerz",
        "NPA" : 2514,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lignerolle",
        "NPA" : 1357,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lignières",
        "NPA" : 2523,
        "Canton" : "NE"
      },
      {
        "Commune" : "Ligornetto",
        "NPA" : 6853,
        "Canton" : "TI"
      },
      {
        "Commune" : "Limpach",
        "NPA" : 3317,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lindau",
        "NPA" : 8315,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Linden",
        "NPA" : 3673,
        "Canton" : "BE"
      },
      {
        "Commune" : "Linescio",
        "NPA" : 6682,
        "Canton" : "TI"
      },
      {
        "Commune" : "Linthal",
        "NPA" : 8783,
        "Canton" : "GL"
      },
      {
        "Commune" : "Lipperswil",
        "NPA" : 8564,
        "Canton" : "TG"
      },
      {
        "Commune" : "Lippoldswilen",
        "NPA" : 8566,
        "Canton" : "TG"
      },
      {
        "Commune" : "Littenheid",
        "NPA" : 9573,
        "Canton" : "TG"
      },
      {
        "Commune" : "Litzirüti",
        "NPA" : 7058,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lobsigen",
        "NPA" : 3268,
        "Canton" : "BE"
      },
      {
        "Commune" : "Loc",
        "NPA" : 3960,
        "Canton" : "VS"
      },
      {
        "Commune" : "Locarno",
        "NPA" : 6605,
        "Canton" : "TI"
      },
      {
        "Commune" : "Locarno",
        "NPA" : 6600,
        "Canton" : "TI"
      },
      {
        "Commune" : "Loco",
        "NPA" : 6661,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lodano",
        "NPA" : 6678,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lodrino",
        "NPA" : 6527,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lohn GR",
        "NPA" : 7433,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lohn SH",
        "NPA" : 8235,
        "Canton" : "SH"
      },
      {
        "Commune" : "Lohn-Ammannsegg",
        "NPA" : 4573,
        "Canton" : "SO"
      },
      {
        "Commune" : "Lohnstorf",
        "NPA" : 3127,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lommis",
        "NPA" : 9506,
        "Canton" : "TG"
      },
      {
        "Commune" : "Lommiswil",
        "NPA" : 4514,
        "Canton" : "SO"
      },
      {
        "Commune" : "Lonay",
        "NPA" : 1027,
        "Canton" : "VD"
      },
      {
        "Commune" : "Longirod",
        "NPA" : 1261,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lopagno",
        "NPA" : 6956,
        "Canton" : "TI"
      },
      {
        "Commune" : "Losone",
        "NPA" : 6616,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lossy",
        "NPA" : 1782,
        "Canton" : "FR"
      },
      {
        "Commune" : "Lostallo",
        "NPA" : 6558,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lostorf",
        "NPA" : 4654,
        "Canton" : "SO"
      },
      {
        "Commune" : "Lottigna",
        "NPA" : 6716,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lotzwil",
        "NPA" : 4932,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lourtier",
        "NPA" : 1948,
        "Canton" : "VS"
      },
      {
        "Commune" : "Lovatens",
        "NPA" : 1682,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lovens",
        "NPA" : 1756,
        "Canton" : "FR"
      },
      {
        "Commune" : "Loveresse",
        "NPA" : 2732,
        "Canton" : "BE"
      },
      {
        "Commune" : "Luc (Ayent)",
        "NPA" : 1966,
        "Canton" : "VS"
      },
      {
        "Commune" : "Lucelle",
        "NPA" : 2807,
        "Canton" : "JU"
      },
      {
        "Commune" : "Lucens",
        "NPA" : 1522,
        "Canton" : "VD"
      },
      {
        "Commune" : "Luchsingen",
        "NPA" : 8775,
        "Canton" : "GL"
      },
      {
        "Commune" : "Ludiano",
        "NPA" : 6721,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lufingen",
        "NPA" : 8426,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Lugaggia",
        "NPA" : 6953,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lugano",
        "NPA" : 6900,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lugnez",
        "NPA" : 2933,
        "Canton" : "JU"
      },
      {
        "Commune" : "Lugnorre",
        "NPA" : 1789,
        "Canton" : "FR"
      },
      {
        "Commune" : "Luins",
        "NPA" : 1184,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lully FR",
        "NPA" : 1470,
        "Canton" : "FR"
      },
      {
        "Commune" : "Lully VD",
        "NPA" : 1132,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lumbrein",
        "NPA" : 7148,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lumino",
        "NPA" : 6533,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lunden",
        "NPA" : 7222,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lungern",
        "NPA" : 6078,
        "Canton" : "OW"
      },
      {
        "Commune" : "Lupfig",
        "NPA" : 5242,
        "Canton" : "AG"
      },
      {
        "Commune" : "Lupsingen",
        "NPA" : 4419,
        "Canton" : "BL"
      },
      {
        "Commune" : "Lurtigen",
        "NPA" : 3215,
        "Canton" : "FR"
      },
      {
        "Commune" : "Lussery-Villars",
        "NPA" : 1307,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lussy FR",
        "NPA" : 1690,
        "Canton" : "FR"
      },
      {
        "Commune" : "Lussy-sur-Morges",
        "NPA" : 1167,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lustdorf",
        "NPA" : 8512,
        "Canton" : "TG"
      },
      {
        "Commune" : "Lustmühle",
        "NPA" : 9062,
        "Canton" : "AR"
      },
      {
        "Commune" : "Luterbach",
        "NPA" : 4542,
        "Canton" : "SO"
      },
      {
        "Commune" : "Luthern",
        "NPA" : 6156,
        "Canton" : "LU"
      },
      {
        "Commune" : "Luthern Bad",
        "NPA" : 6156,
        "Canton" : "LU"
      },
      {
        "Commune" : "Lutry",
        "NPA" : 1095,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lutzenberg",
        "NPA" : 9426,
        "Canton" : "AR"
      },
      {
        "Commune" : "Luven",
        "NPA" : 7141,
        "Canton" : "GR"
      },
      {
        "Commune" : "Luzein",
        "NPA" : 7242,
        "Canton" : "GR"
      },
      {
        "Commune" : "Luzern",
        "NPA" : 6004,
        "Canton" : "LU"
      },
      {
        "Commune" : "Luzern",
        "NPA" : 6014,
        "Canton" : "LU"
      },
      {
        "Commune" : "Luzern",
        "NPA" : 6005,
        "Canton" : "LU"
      },
      {
        "Commune" : "Luzern",
        "NPA" : 6003,
        "Canton" : "LU"
      },
      {
        "Commune" : "Luzern",
        "NPA" : 6015,
        "Canton" : "LU"
      },
      {
        "Commune" : "Luzern",
        "NPA" : 6006,
        "Canton" : "LU"
      },
      {
        "Commune" : "Lyss",
        "NPA" : 3250,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lyssach",
        "NPA" : 3421,
        "Canton" : "BE"
      },
      {
        "Commune" : "Längenbühl",
        "NPA" : 3636,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lätti",
        "NPA" : 3053,
        "Canton" : "BE"
      },
      {
        "Commune" : "Läufelfingen",
        "NPA" : 4448,
        "Canton" : "BL"
      },
      {
        "Commune" : "Léchelles",
        "NPA" : 1773,
        "Canton" : "FR"
      },
      {
        "Commune" : "Löhningen",
        "NPA" : 8224,
        "Canton" : "SH"
      },
      {
        "Commune" : "Lömmenschwil",
        "NPA" : 9308,
        "Canton" : "SG"
      },
      {
        "Commune" : "Lü",
        "NPA" : 7534,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lüchingen",
        "NPA" : 9450,
        "Canton" : "SG"
      },
      {
        "Commune" : "Lüen",
        "NPA" : 7027,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lüscherz",
        "NPA" : 2576,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lüsslingen",
        "NPA" : 4574,
        "Canton" : "SO"
      },
      {
        "Commune" : "Lüterkofen",
        "NPA" : 4571,
        "Canton" : "SO"
      },
      {
        "Commune" : "Lüterswil",
        "NPA" : 4584,
        "Canton" : "SO"
      },
      {
        "Commune" : "Lütisburg",
        "NPA" : 9604,
        "Canton" : "SG"
      },
      {
        "Commune" : "Lütisburg Station",
        "NPA" : 9601,
        "Canton" : "SG"
      },
      {
        "Commune" : "Lütschental",
        "NPA" : 3816,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lützelflüh-Goldbach",
        "NPA" : 3432,
        "Canton" : "BE"
      },
      {
        "Commune" : "Macolin",
        "NPA" : 2532,
        "Canton" : "BE"
      },
      {
        "Commune" : "Madetswil",
        "NPA" : 8322,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Madiswil",
        "NPA" : 4934,
        "Canton" : "BE"
      },
      {
        "Commune" : "Madonna del Piano",
        "NPA" : 6995,
        "Canton" : "TI"
      },
      {
        "Commune" : "Madrano",
        "NPA" : 6780,
        "Canton" : "TI"
      },
      {
        "Commune" : "Madulain",
        "NPA" : 7523,
        "Canton" : "GR"
      },
      {
        "Commune" : "Magadino",
        "NPA" : 6573,
        "Canton" : "TI"
      },
      {
        "Commune" : "Magden",
        "NPA" : 4312,
        "Canton" : "AG"
      },
      {
        "Commune" : "Maggia",
        "NPA" : 6673,
        "Canton" : "TI"
      },
      {
        "Commune" : "Magliaso",
        "NPA" : 6983,
        "Canton" : "TI"
      },
      {
        "Commune" : "Maglio di Colla",
        "NPA" : 6959,
        "Canton" : "TI"
      },
      {
        "Commune" : "Magnedens",
        "NPA" : 1727,
        "Canton" : "FR"
      },
      {
        "Commune" : "Maienfeld",
        "NPA" : 7304,
        "Canton" : "GR"
      },
      {
        "Commune" : "Mairengo",
        "NPA" : 6763,
        "Canton" : "TI"
      },
      {
        "Commune" : "Maisprach",
        "NPA" : 4464,
        "Canton" : "BL"
      },
      {
        "Commune" : "Maladers",
        "NPA" : 7026,
        "Canton" : "GR"
      },
      {
        "Commune" : "Malans GR",
        "NPA" : 7208,
        "Canton" : "GR"
      },
      {
        "Commune" : "Malans SG",
        "NPA" : 9479,
        "Canton" : "SG"
      },
      {
        "Commune" : "Malix",
        "NPA" : 7074,
        "Canton" : "GR"
      },
      {
        "Commune" : "Malleray",
        "NPA" : 2735,
        "Canton" : "BE"
      },
      {
        "Commune" : "Maloja",
        "NPA" : 7516,
        "Canton" : "GR"
      },
      {
        "Commune" : "Malters",
        "NPA" : 6102,
        "Canton" : "LU"
      },
      {
        "Commune" : "Malvaglia",
        "NPA" : 6713,
        "Canton" : "TI"
      },
      {
        "Commune" : "Mamishaus",
        "NPA" : 3152,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mammern",
        "NPA" : 8265,
        "Canton" : "TG"
      },
      {
        "Commune" : "Mandach",
        "NPA" : 5318,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mannenbach-Salenstein",
        "NPA" : 8268,
        "Canton" : "TG"
      },
      {
        "Commune" : "Mannens",
        "NPA" : 1775,
        "Canton" : "FR"
      },
      {
        "Commune" : "Manno",
        "NPA" : 6928,
        "Canton" : "TI"
      },
      {
        "Commune" : "Maracon",
        "NPA" : 1613,
        "Canton" : "VD"
      },
      {
        "Commune" : "Marbach LU",
        "NPA" : 6196,
        "Canton" : "LU"
      },
      {
        "Commune" : "Marbach SG",
        "NPA" : 9437,
        "Canton" : "SG"
      },
      {
        "Commune" : "Marchissy",
        "NPA" : 1261,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mariastein",
        "NPA" : 4115,
        "Canton" : "SO"
      },
      {
        "Commune" : "Marin-Epagnier",
        "NPA" : 2074,
        "Canton" : "NE"
      },
      {
        "Commune" : "Marly",
        "NPA" : 1723,
        "Canton" : "FR"
      },
      {
        "Commune" : "Marmorera",
        "NPA" : 7456,
        "Canton" : "GR"
      },
      {
        "Commune" : "Marnand",
        "NPA" : 1524,
        "Canton" : "VD"
      },
      {
        "Commune" : "Maroggia",
        "NPA" : 6817,
        "Canton" : "TI"
      },
      {
        "Commune" : "Marolta",
        "NPA" : 6723,
        "Canton" : "TI"
      },
      {
        "Commune" : "Marsens",
        "NPA" : 1633,
        "Canton" : "FR"
      },
      {
        "Commune" : "Marthalen",
        "NPA" : 8460,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Martherenges",
        "NPA" : 1063,
        "Canton" : "VD"
      },
      {
        "Commune" : "Martigny",
        "NPA" : 1920,
        "Canton" : "VS"
      },
      {
        "Commune" : "Martigny-Croix",
        "NPA" : 1921,
        "Canton" : "VS"
      },
      {
        "Commune" : "Martina",
        "NPA" : 7560,
        "Canton" : "GR"
      },
      {
        "Commune" : "Martisberg",
        "NPA" : 3994,
        "Canton" : "VS"
      },
      {
        "Commune" : "Maschwanden",
        "NPA" : 8933,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Mase",
        "NPA" : 1968,
        "Canton" : "VS"
      },
      {
        "Commune" : "Masein",
        "NPA" : 7425,
        "Canton" : "GR"
      },
      {
        "Commune" : "Maseltrangen",
        "NPA" : 8723,
        "Canton" : "SG"
      },
      {
        "Commune" : "Massagno",
        "NPA" : 6900,
        "Canton" : "TI"
      },
      {
        "Commune" : "Massongex",
        "NPA" : 1869,
        "Canton" : "VS"
      },
      {
        "Commune" : "Massonnens",
        "NPA" : 1692,
        "Canton" : "FR"
      },
      {
        "Commune" : "Mastrils",
        "NPA" : 7303,
        "Canton" : "GR"
      },
      {
        "Commune" : "Mathod",
        "NPA" : 1438,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mathon",
        "NPA" : 7433,
        "Canton" : "GR"
      },
      {
        "Commune" : "Matran",
        "NPA" : 1753,
        "Canton" : "FR"
      },
      {
        "Commune" : "Matt",
        "NPA" : 8766,
        "Canton" : "GL"
      },
      {
        "Commune" : "Matten (St. Stephan)",
        "NPA" : 3773,
        "Canton" : "BE"
      },
      {
        "Commune" : "Matten b. Interlaken",
        "NPA" : 3800,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mattstetten",
        "NPA" : 3322,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mattwil",
        "NPA" : 8585,
        "Canton" : "TG"
      },
      {
        "Commune" : "Matzendorf",
        "NPA" : 4713,
        "Canton" : "SO"
      },
      {
        "Commune" : "Matzingen",
        "NPA" : 9548,
        "Canton" : "TG"
      },
      {
        "Commune" : "Mauborget",
        "NPA" : 1453,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mauensee",
        "NPA" : 6216,
        "Canton" : "LU"
      },
      {
        "Commune" : "Maules",
        "NPA" : 1625,
        "Canton" : "FR"
      },
      {
        "Commune" : "Maur",
        "NPA" : 8124,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Mauraz",
        "NPA" : 1148,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mauren FL",
        "NPA" : 9493,
        "Canton" : "LI"
      },
      {
        "Commune" : "Mauren TG",
        "NPA" : 8576,
        "Canton" : "TG"
      },
      {
        "Commune" : "Mayens-de-Chamoson",
        "NPA" : 1911,
        "Canton" : "VS"
      },
      {
        "Commune" : "Mayens-de-la-Zour (Savièse)",
        "NPA" : 1965,
        "Canton" : "VS"
      },
      {
        "Commune" : "Medeglia",
        "NPA" : 6809,
        "Canton" : "TI"
      },
      {
        "Commune" : "Medels im Rheinwald",
        "NPA" : 7436,
        "Canton" : "GR"
      },
      {
        "Commune" : "Meggen",
        "NPA" : 6045,
        "Canton" : "LU"
      },
      {
        "Commune" : "Mehlsecken",
        "NPA" : 6260,
        "Canton" : "LU"
      },
      {
        "Commune" : "Meien",
        "NPA" : 6485,
        "Canton" : "UR"
      },
      {
        "Commune" : "Meienberg",
        "NPA" : 5643,
        "Canton" : "AG"
      },
      {
        "Commune" : "Meienried",
        "NPA" : 3294,
        "Canton" : "BE"
      },
      {
        "Commune" : "Meierskappel",
        "NPA" : 6344,
        "Canton" : "LU"
      },
      {
        "Commune" : "Meikirch",
        "NPA" : 3045,
        "Canton" : "BE"
      },
      {
        "Commune" : "Meilen",
        "NPA" : 8706,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Meinier",
        "NPA" : 1252,
        "Canton" : "GE"
      },
      {
        "Commune" : "Meinisberg",
        "NPA" : 2554,
        "Canton" : "BE"
      },
      {
        "Commune" : "Meiringen",
        "NPA" : 3860,
        "Canton" : "BE"
      },
      {
        "Commune" : "Meisterschwanden",
        "NPA" : 5616,
        "Canton" : "AG"
      },
      {
        "Commune" : "Melano",
        "NPA" : 6818,
        "Canton" : "TI"
      },
      {
        "Commune" : "Melchnau",
        "NPA" : 4917,
        "Canton" : "BE"
      },
      {
        "Commune" : "Melchsee-Frutt",
        "NPA" : 6068,
        "Canton" : "OW"
      },
      {
        "Commune" : "Melchtal",
        "NPA" : 6067,
        "Canton" : "OW"
      },
      {
        "Commune" : "Melide",
        "NPA" : 6815,
        "Canton" : "TI"
      },
      {
        "Commune" : "Mellikon",
        "NPA" : 5465,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mellingen",
        "NPA" : 5507,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mels",
        "NPA" : 8887,
        "Canton" : "SG"
      },
      {
        "Commune" : "Meltingen",
        "NPA" : 4233,
        "Canton" : "SO"
      },
      {
        "Commune" : "Mendrisio",
        "NPA" : 6850,
        "Canton" : "TI"
      },
      {
        "Commune" : "Menzberg",
        "NPA" : 6125,
        "Canton" : "LU"
      },
      {
        "Commune" : "Menzengrüt",
        "NPA" : 8546,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Menziken",
        "NPA" : 5737,
        "Canton" : "AG"
      },
      {
        "Commune" : "Menzingen",
        "NPA" : 6313,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Menznau",
        "NPA" : 6122,
        "Canton" : "LU"
      },
      {
        "Commune" : "Menzonio",
        "NPA" : 6692,
        "Canton" : "TI"
      },
      {
        "Commune" : "Merenschwand",
        "NPA" : 5634,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mergoscia",
        "NPA" : 6647,
        "Canton" : "TI"
      },
      {
        "Commune" : "Meride",
        "NPA" : 6866,
        "Canton" : "TI"
      },
      {
        "Commune" : "Merishausen",
        "NPA" : 8232,
        "Canton" : "SH"
      },
      {
        "Commune" : "Merligen",
        "NPA" : 3658,
        "Canton" : "BE"
      },
      {
        "Commune" : "Merlischachen",
        "NPA" : 6402,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Mervelier",
        "NPA" : 2827,
        "Canton" : "JU"
      },
      {
        "Commune" : "Merzligen",
        "NPA" : 3274,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mesocco",
        "NPA" : 6563,
        "Canton" : "GR"
      },
      {
        "Commune" : "Messen",
        "NPA" : 3254,
        "Canton" : "SO"
      },
      {
        "Commune" : "Mettau",
        "NPA" : 5274,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mettembert",
        "NPA" : 2806,
        "Canton" : "JU"
      },
      {
        "Commune" : "Mettendorf TG",
        "NPA" : 8553,
        "Canton" : "TG"
      },
      {
        "Commune" : "Mettlen",
        "NPA" : 9517,
        "Canton" : "TG"
      },
      {
        "Commune" : "Mettmenstetten",
        "NPA" : 8932,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Metzerlen",
        "NPA" : 4116,
        "Canton" : "SO"
      },
      {
        "Commune" : "Mex VD",
        "NPA" : 1031,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mex VS",
        "NPA" : 1890,
        "Canton" : "VS"
      },
      {
        "Commune" : "Meyriez",
        "NPA" : 3280,
        "Canton" : "FR"
      },
      {
        "Commune" : "Meyrin",
        "NPA" : 1217,
        "Canton" : "GE"
      },
      {
        "Commune" : "Mezzovico",
        "NPA" : 6805,
        "Canton" : "TI"
      },
      {
        "Commune" : "Middes",
        "NPA" : 1749,
        "Canton" : "FR"
      },
      {
        "Commune" : "Mies",
        "NPA" : 1295,
        "Canton" : "VD"
      },
      {
        "Commune" : "Miex",
        "NPA" : 1896,
        "Canton" : "VS"
      },
      {
        "Commune" : "Miglieglia",
        "NPA" : 6986,
        "Canton" : "TI"
      },
      {
        "Commune" : "Milken",
        "NPA" : 3157,
        "Canton" : "BE"
      },
      {
        "Commune" : "Minusio",
        "NPA" : 6648,
        "Canton" : "TI"
      },
      {
        "Commune" : "Miralago",
        "NPA" : 7743,
        "Canton" : "GR"
      },
      {
        "Commune" : "Mirchel",
        "NPA" : 3532,
        "Canton" : "BE"
      },
      {
        "Commune" : "Misery",
        "NPA" : 1721,
        "Canton" : "FR"
      },
      {
        "Commune" : "Mission",
        "NPA" : 3961,
        "Canton" : "VS"
      },
      {
        "Commune" : "Missy",
        "NPA" : 1565,
        "Canton" : "VD"
      },
      {
        "Commune" : "Misériez (Salins)",
        "NPA" : 1991,
        "Canton" : "VS"
      },
      {
        "Commune" : "Mitlödi",
        "NPA" : 8756,
        "Canton" : "GL"
      },
      {
        "Commune" : "Mittelhäusern",
        "NPA" : 3147,
        "Canton" : "BE"
      },
      {
        "Commune" : "Miège",
        "NPA" : 3972,
        "Canton" : "VS"
      },
      {
        "Commune" : "Miécourt",
        "NPA" : 2946,
        "Canton" : "JU"
      },
      {
        "Commune" : "Mogelsberg",
        "NPA" : 9122,
        "Canton" : "SG"
      },
      {
        "Commune" : "Moghegno",
        "NPA" : 6677,
        "Canton" : "TI"
      },
      {
        "Commune" : "Moiry VD",
        "NPA" : 1148,
        "Canton" : "VD"
      },
      {
        "Commune" : "Molare",
        "NPA" : 6760,
        "Canton" : "TI"
      },
      {
        "Commune" : "Moleno",
        "NPA" : 6524,
        "Canton" : "TI"
      },
      {
        "Commune" : "Molinazzo di Monteggio",
        "NPA" : 6995,
        "Canton" : "TI"
      },
      {
        "Commune" : "Molinis",
        "NPA" : 7056,
        "Canton" : "GR"
      },
      {
        "Commune" : "Mollens VD",
        "NPA" : 1146,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mollens VS",
        "NPA" : 3974,
        "Canton" : "VS"
      },
      {
        "Commune" : "Mollie-Margot",
        "NPA" : 1073,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mollis",
        "NPA" : 8753,
        "Canton" : "GL"
      },
      {
        "Commune" : "Molondin",
        "NPA" : 1415,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mols",
        "NPA" : 8885,
        "Canton" : "SG"
      },
      {
        "Commune" : "Moléson-sur-Gruyères",
        "NPA" : 1663,
        "Canton" : "FR"
      },
      {
        "Commune" : "Mon",
        "NPA" : 7458,
        "Canton" : "GR"
      },
      {
        "Commune" : "Moneto",
        "NPA" : 6659,
        "Canton" : "TI"
      },
      {
        "Commune" : "Monible",
        "NPA" : 2715,
        "Canton" : "BE"
      },
      {
        "Commune" : "Monnaz",
        "NPA" : 1125,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mont-Crosin",
        "NPA" : 2610,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mont-Soleil",
        "NPA" : 2610,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mont-Tramelan",
        "NPA" : 2723,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mont-de-Buttes",
        "NPA" : 2116,
        "Canton" : "NE"
      },
      {
        "Commune" : "Mont-la-Ville",
        "NPA" : 1148,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mont-sur-Rolle",
        "NPA" : 1185,
        "Canton" : "VD"
      },
      {
        "Commune" : "Montagne-de-Courtelary",
        "NPA" : 2608,
        "Canton" : "BE"
      },
      {
        "Commune" : "Montagne-de-Sonvilier",
        "NPA" : 2615,
        "Canton" : "BE"
      },
      {
        "Commune" : "Montagnola",
        "NPA" : 6926,
        "Canton" : "TI"
      },
      {
        "Commune" : "Montagnon (Leytron)",
        "NPA" : 1912,
        "Canton" : "VS"
      },
      {
        "Commune" : "Montagny-la-Ville",
        "NPA" : 1776,
        "Canton" : "FR"
      },
      {
        "Commune" : "Montagny-les-Monts",
        "NPA" : 1774,
        "Canton" : "FR"
      },
      {
        "Commune" : "Montagny-près-Yverdon",
        "NPA" : 1442,
        "Canton" : "VD"
      },
      {
        "Commune" : "Montalchez",
        "NPA" : 2027,
        "Canton" : "NE"
      },
      {
        "Commune" : "Montana",
        "NPA" : 3963,
        "Canton" : "VS"
      },
      {
        "Commune" : "Montaubion-Chardonney",
        "NPA" : 1041,
        "Canton" : "VD"
      },
      {
        "Commune" : "Montavon",
        "NPA" : 2857,
        "Canton" : "JU"
      },
      {
        "Commune" : "Montbovon",
        "NPA" : 1669,
        "Canton" : "FR"
      },
      {
        "Commune" : "Montbrelloz",
        "NPA" : 1475,
        "Canton" : "FR"
      },
      {
        "Commune" : "Montcherand",
        "NPA" : 1354,
        "Canton" : "VD"
      },
      {
        "Commune" : "Monte",
        "NPA" : 6875,
        "Canton" : "TI"
      },
      {
        "Commune" : "Monte Carasso",
        "NPA" : 6513,
        "Canton" : "TI"
      },
      {
        "Commune" : "Monteiller (Savièse)",
        "NPA" : 1965,
        "Canton" : "VS"
      },
      {
        "Commune" : "Montenol",
        "NPA" : 2884,
        "Canton" : "JU"
      },
      {
        "Commune" : "Montet (Broye)",
        "NPA" : 1483,
        "Canton" : "FR"
      },
      {
        "Commune" : "Montet (Glâne)",
        "NPA" : 1674,
        "Canton" : "FR"
      },
      {
        "Commune" : "Montezillon",
        "NPA" : 2037,
        "Canton" : "NE"
      },
      {
        "Commune" : "Montfaucon",
        "NPA" : 2362,
        "Canton" : "JU"
      },
      {
        "Commune" : "Montfavergier",
        "NPA" : 2362,
        "Canton" : "JU"
      },
      {
        "Commune" : "Montherod",
        "NPA" : 1174,
        "Canton" : "VD"
      },
      {
        "Commune" : "Monthey",
        "NPA" : 1870,
        "Canton" : "VS"
      },
      {
        "Commune" : "Montignez",
        "NPA" : 2924,
        "Canton" : "JU"
      },
      {
        "Commune" : "Montlingen",
        "NPA" : 9462,
        "Canton" : "SG"
      },
      {
        "Commune" : "Montmagny",
        "NPA" : 1587,
        "Canton" : "VD"
      },
      {
        "Commune" : "Montmelon",
        "NPA" : 2883,
        "Canton" : "JU"
      },
      {
        "Commune" : "Montmollin",
        "NPA" : 2037,
        "Canton" : "NE"
      },
      {
        "Commune" : "Montpreveyres",
        "NPA" : 1081,
        "Canton" : "VD"
      },
      {
        "Commune" : "Montreux",
        "NPA" : 1820,
        "Canton" : "VD"
      },
      {
        "Commune" : "Montricher",
        "NPA" : 1147,
        "Canton" : "VD"
      },
      {
        "Commune" : "Montsevelier",
        "NPA" : 2828,
        "Canton" : "JU"
      },
      {
        "Commune" : "Montévraz",
        "NPA" : 1724,
        "Canton" : "FR"
      },
      {
        "Commune" : "Moosleerau",
        "NPA" : 5054,
        "Canton" : "AG"
      },
      {
        "Commune" : "Moosseedorf",
        "NPA" : 3302,
        "Canton" : "BE"
      },
      {
        "Commune" : "Morbio Inferiore",
        "NPA" : 6834,
        "Canton" : "TI"
      },
      {
        "Commune" : "Morbio Superiore",
        "NPA" : 6835,
        "Canton" : "TI"
      },
      {
        "Commune" : "Morcles",
        "NPA" : 1892,
        "Canton" : "VD"
      },
      {
        "Commune" : "Morcote",
        "NPA" : 6922,
        "Canton" : "TI"
      },
      {
        "Commune" : "Morens FR",
        "NPA" : 1541,
        "Canton" : "FR"
      },
      {
        "Commune" : "Morgarten",
        "NPA" : 6315,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Morges",
        "NPA" : 1110,
        "Canton" : "VD"
      },
      {
        "Commune" : "Morgins",
        "NPA" : 1875,
        "Canton" : "VS"
      },
      {
        "Commune" : "Morissen",
        "NPA" : 7143,
        "Canton" : "GR"
      },
      {
        "Commune" : "Morlens",
        "NPA" : 1674,
        "Canton" : "FR"
      },
      {
        "Commune" : "Morlon",
        "NPA" : 1638,
        "Canton" : "FR"
      },
      {
        "Commune" : "Morrens VD",
        "NPA" : 1054,
        "Canton" : "VD"
      },
      {
        "Commune" : "Morschach",
        "NPA" : 6443,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Mosen",
        "NPA" : 6295,
        "Canton" : "LU"
      },
      {
        "Commune" : "Mosnang",
        "NPA" : 9607,
        "Canton" : "SG"
      },
      {
        "Commune" : "Mosogno",
        "NPA" : 6611,
        "Canton" : "TI"
      },
      {
        "Commune" : "Mossel",
        "NPA" : 1675,
        "Canton" : "FR"
      },
      {
        "Commune" : "Motto (Blenio)",
        "NPA" : 6721,
        "Canton" : "TI"
      },
      {
        "Commune" : "Moudon",
        "NPA" : 1510,
        "Canton" : "VD"
      },
      {
        "Commune" : "Moutier",
        "NPA" : 2740,
        "Canton" : "BE"
      },
      {
        "Commune" : "Movelier",
        "NPA" : 2812,
        "Canton" : "JU"
      },
      {
        "Commune" : "Mugena",
        "NPA" : 6939,
        "Canton" : "TI"
      },
      {
        "Commune" : "Muggio",
        "NPA" : 6838,
        "Canton" : "TI"
      },
      {
        "Commune" : "Muhen",
        "NPA" : 5037,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mulegns",
        "NPA" : 7455,
        "Canton" : "GR"
      },
      {
        "Commune" : "Mumpf",
        "NPA" : 4322,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mumpé Medel",
        "NPA" : 7183,
        "Canton" : "GR"
      },
      {
        "Commune" : "Mund",
        "NPA" : 3903,
        "Canton" : "VS"
      },
      {
        "Commune" : "Muntelier",
        "NPA" : 3286,
        "Canton" : "FR"
      },
      {
        "Commune" : "Muolen",
        "NPA" : 9313,
        "Canton" : "SG"
      },
      {
        "Commune" : "Muotathal",
        "NPA" : 6436,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Mur (Vully) FR",
        "NPA" : 1787,
        "Canton" : "FR"
      },
      {
        "Commune" : "Mur (Vully) VD",
        "NPA" : 1787,
        "Canton" : "VD"
      },
      {
        "Commune" : "Muralto",
        "NPA" : 6600,
        "Canton" : "TI"
      },
      {
        "Commune" : "Muraz (Collombey)",
        "NPA" : 1893,
        "Canton" : "VS"
      },
      {
        "Commune" : "Muraz (Sierre)",
        "NPA" : 3960,
        "Canton" : "VS"
      },
      {
        "Commune" : "Murg",
        "NPA" : 8877,
        "Canton" : "SG"
      },
      {
        "Commune" : "Murgenthal",
        "NPA" : 4853,
        "Canton" : "AG"
      },
      {
        "Commune" : "Muri AG",
        "NPA" : 5630,
        "Canton" : "AG"
      },
      {
        "Commune" : "Muri b. Bern",
        "NPA" : 3074,
        "Canton" : "BE"
      },
      {
        "Commune" : "Muriaux",
        "NPA" : 2338,
        "Canton" : "JU"
      },
      {
        "Commune" : "Murist",
        "NPA" : 1489,
        "Canton" : "FR"
      },
      {
        "Commune" : "Murten",
        "NPA" : 3280,
        "Canton" : "FR"
      },
      {
        "Commune" : "Murzelen",
        "NPA" : 3034,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mutrux",
        "NPA" : 1428,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mutten",
        "NPA" : 7431,
        "Canton" : "GR"
      },
      {
        "Commune" : "Muttenz",
        "NPA" : 4132,
        "Canton" : "BL"
      },
      {
        "Commune" : "Muzzano",
        "NPA" : 6933,
        "Canton" : "TI"
      },
      {
        "Commune" : "Mädris-Vermol",
        "NPA" : 8886,
        "Canton" : "SG"
      },
      {
        "Commune" : "Mägenwil",
        "NPA" : 5506,
        "Canton" : "AG"
      },
      {
        "Commune" : "Männedorf",
        "NPA" : 8708,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Märstetten",
        "NPA" : 8560,
        "Canton" : "TG"
      },
      {
        "Commune" : "Märwil",
        "NPA" : 9562,
        "Canton" : "TG"
      },
      {
        "Commune" : "Ménières",
        "NPA" : 1533,
        "Canton" : "FR"
      },
      {
        "Commune" : "Mézery-près-Donneloye",
        "NPA" : 1407,
        "Canton" : "VD"
      },
      {
        "Commune" : "Mézières FR",
        "NPA" : 1684,
        "Canton" : "FR"
      },
      {
        "Commune" : "Mézières VD",
        "NPA" : 1083,
        "Canton" : "VD"
      },
      {
        "Commune" : "Môtier (Vully)",
        "NPA" : 1787,
        "Canton" : "FR"
      },
      {
        "Commune" : "Môtiers NE",
        "NPA" : 2112,
        "Canton" : "NE"
      },
      {
        "Commune" : "Möhlin",
        "NPA" : 4313,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mönchaltorf",
        "NPA" : 8617,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Mönthal",
        "NPA" : 5237,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mörel",
        "NPA" : 3983,
        "Canton" : "VS"
      },
      {
        "Commune" : "Mörigen",
        "NPA" : 2572,
        "Canton" : "BE"
      },
      {
        "Commune" : "Möriken AG",
        "NPA" : 5103,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mörschwil",
        "NPA" : 9402,
        "Canton" : "SG"
      },
      {
        "Commune" : "Mötschwil",
        "NPA" : 3324,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mühlau",
        "NPA" : 5642,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mühlebach (Goms)",
        "NPA" : 3995,
        "Canton" : "VS"
      },
      {
        "Commune" : "Mühleberg",
        "NPA" : 3203,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mühledorf BE",
        "NPA" : 3116,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mühledorf SO",
        "NPA" : 4583,
        "Canton" : "SO"
      },
      {
        "Commune" : "Mühlehorn",
        "NPA" : 8874,
        "Canton" : "GL"
      },
      {
        "Commune" : "Mühlethal",
        "NPA" : 4812,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mühlethurnen",
        "NPA" : 3127,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mühlrüti",
        "NPA" : 9613,
        "Canton" : "SG"
      },
      {
        "Commune" : "Mülchi",
        "NPA" : 3317,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mülenen",
        "NPA" : 3711,
        "Canton" : "BE"
      },
      {
        "Commune" : "Müllheim Dorf",
        "NPA" : 8555,
        "Canton" : "TG"
      },
      {
        "Commune" : "Müllheim-Wigoltingen",
        "NPA" : 8554,
        "Canton" : "TG"
      },
      {
        "Commune" : "Mülligen",
        "NPA" : 5243,
        "Canton" : "AG"
      },
      {
        "Commune" : "Mümliswil",
        "NPA" : 4717,
        "Canton" : "SO"
      },
      {
        "Commune" : "Münchenbuchsee",
        "NPA" : 3053,
        "Canton" : "BE"
      },
      {
        "Commune" : "Münchenstein",
        "NPA" : 4142,
        "Canton" : "BL"
      },
      {
        "Commune" : "Münchenwiler",
        "NPA" : 1797,
        "Canton" : "BE"
      },
      {
        "Commune" : "Münchringen",
        "NPA" : 3303,
        "Canton" : "BE"
      },
      {
        "Commune" : "Münchwilen AG",
        "NPA" : 4333,
        "Canton" : "AG"
      },
      {
        "Commune" : "Münchwilen TG",
        "NPA" : 9542,
        "Canton" : "TG"
      },
      {
        "Commune" : "Münsingen",
        "NPA" : 3110,
        "Canton" : "BE"
      },
      {
        "Commune" : "Münster VS",
        "NPA" : 3985,
        "Canton" : "VS"
      },
      {
        "Commune" : "Münsterlingen",
        "NPA" : 8596,
        "Canton" : "TG"
      },
      {
        "Commune" : "Müntschemier",
        "NPA" : 3225,
        "Canton" : "BE"
      },
      {
        "Commune" : "Mürren",
        "NPA" : 3825,
        "Canton" : "BE"
      },
      {
        "Commune" : "Müselbach",
        "NPA" : 9602,
        "Canton" : "SG"
      },
      {
        "Commune" : "Müstair",
        "NPA" : 7537,
        "Canton" : "GR"
      },
      {
        "Commune" : "Müswangen",
        "NPA" : 6289,
        "Canton" : "LU"
      },
      {
        "Commune" : "Nassen",
        "NPA" : 9123,
        "Canton" : "SG"
      },
      {
        "Commune" : "Nassenwil",
        "NPA" : 8155,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Naters",
        "NPA" : 3904,
        "Canton" : "VS"
      },
      {
        "Commune" : "Nax",
        "NPA" : 1973,
        "Canton" : "VS"
      },
      {
        "Commune" : "Naz",
        "NPA" : 1041,
        "Canton" : "VD"
      },
      {
        "Commune" : "Nebikon",
        "NPA" : 6244,
        "Canton" : "LU"
      },
      {
        "Commune" : "Necker",
        "NPA" : 9126,
        "Canton" : "SG"
      },
      {
        "Commune" : "Neerach",
        "NPA" : 8173,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Neftenbach",
        "NPA" : 8413,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Neggio",
        "NPA" : 6991,
        "Canton" : "TI"
      },
      {
        "Commune" : "Neirivue",
        "NPA" : 1669,
        "Canton" : "FR"
      },
      {
        "Commune" : "Nendeln",
        "NPA" : 9485,
        "Canton" : "LI"
      },
      {
        "Commune" : "Nennigkofen",
        "NPA" : 4574,
        "Canton" : "SO"
      },
      {
        "Commune" : "Nenzlingen",
        "NPA" : 4224,
        "Canton" : "BL"
      },
      {
        "Commune" : "Neschwil",
        "NPA" : 8484,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Nesselnbach",
        "NPA" : 5524,
        "Canton" : "AG"
      },
      {
        "Commune" : "Nesslau",
        "NPA" : 9650,
        "Canton" : "SG"
      },
      {
        "Commune" : "Netstal",
        "NPA" : 8754,
        "Canton" : "GL"
      },
      {
        "Commune" : "Neu St. Johann",
        "NPA" : 9652,
        "Canton" : "SG"
      },
      {
        "Commune" : "Neuchâtel",
        "NPA" : 2000,
        "Canton" : "NE"
      },
      {
        "Commune" : "Neudorf",
        "NPA" : 6025,
        "Canton" : "LU"
      },
      {
        "Commune" : "Neuendorf",
        "NPA" : 4623,
        "Canton" : "SO"
      },
      {
        "Commune" : "Neuenegg",
        "NPA" : 3176,
        "Canton" : "BE"
      },
      {
        "Commune" : "Neuenhof",
        "NPA" : 5432,
        "Canton" : "AG"
      },
      {
        "Commune" : "Neuenkirch",
        "NPA" : 6206,
        "Canton" : "LU"
      },
      {
        "Commune" : "Neuhaus SG",
        "NPA" : 8732,
        "Canton" : "SG"
      },
      {
        "Commune" : "Neuhausen am Rheinfall",
        "NPA" : 8212,
        "Canton" : "SH"
      },
      {
        "Commune" : "Neuheim",
        "NPA" : 6345,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Neukirch (Egnach)",
        "NPA" : 9315,
        "Canton" : "TG"
      },
      {
        "Commune" : "Neukirch an der Thur",
        "NPA" : 9217,
        "Canton" : "TG"
      },
      {
        "Commune" : "Neunkirch",
        "NPA" : 8213,
        "Canton" : "SH"
      },
      {
        "Commune" : "Neuwilen",
        "NPA" : 8566,
        "Canton" : "TG"
      },
      {
        "Commune" : "Neuägeri",
        "NPA" : 6314,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Neyruz FR",
        "NPA" : 1740,
        "Canton" : "FR"
      },
      {
        "Commune" : "Neyruz-sur-Moudon",
        "NPA" : 1515,
        "Canton" : "VD"
      },
      {
        "Commune" : "Nidau",
        "NPA" : 2560,
        "Canton" : "BE"
      },
      {
        "Commune" : "Nidfurn",
        "NPA" : 8772,
        "Canton" : "GL"
      },
      {
        "Commune" : "Niederbipp",
        "NPA" : 4704,
        "Canton" : "BE"
      },
      {
        "Commune" : "Niederbuchsiten",
        "NPA" : 4626,
        "Canton" : "SO"
      },
      {
        "Commune" : "Niederbüren",
        "NPA" : 9246,
        "Canton" : "SG"
      },
      {
        "Commune" : "Niederdorf",
        "NPA" : 4435,
        "Canton" : "BL"
      },
      {
        "Commune" : "Niedergampel",
        "NPA" : 3945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Niedergesteln",
        "NPA" : 3942,
        "Canton" : "VS"
      },
      {
        "Commune" : "Niederglatt SG",
        "NPA" : 9240,
        "Canton" : "SG"
      },
      {
        "Commune" : "Niederglatt ZH",
        "NPA" : 8172,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Niedergösgen",
        "NPA" : 5013,
        "Canton" : "SO"
      },
      {
        "Commune" : "Niederhasli",
        "NPA" : 8155,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Niederhelfenschwil",
        "NPA" : 9527,
        "Canton" : "SG"
      },
      {
        "Commune" : "Niederhünigen",
        "NPA" : 3504,
        "Canton" : "BE"
      },
      {
        "Commune" : "Niederlenz",
        "NPA" : 5702,
        "Canton" : "AG"
      },
      {
        "Commune" : "Niedermuhlern",
        "NPA" : 3087,
        "Canton" : "BE"
      },
      {
        "Commune" : "Niederneunforn",
        "NPA" : 8525,
        "Canton" : "TG"
      },
      {
        "Commune" : "Niederrickenbach",
        "NPA" : 6383,
        "Canton" : "NW"
      },
      {
        "Commune" : "Niederried b. Interlaken",
        "NPA" : 3853,
        "Canton" : "BE"
      },
      {
        "Commune" : "Niederried b. Kallnach",
        "NPA" : 3283,
        "Canton" : "BE"
      },
      {
        "Commune" : "Niederrohrdorf",
        "NPA" : 5443,
        "Canton" : "AG"
      },
      {
        "Commune" : "Niederscherli",
        "NPA" : 3145,
        "Canton" : "BE"
      },
      {
        "Commune" : "Niederstetten",
        "NPA" : 9249,
        "Canton" : "SG"
      },
      {
        "Commune" : "Niederstocken",
        "NPA" : 3632,
        "Canton" : "BE"
      },
      {
        "Commune" : "Niederteufen",
        "NPA" : 9052,
        "Canton" : "AR"
      },
      {
        "Commune" : "Niederurnen",
        "NPA" : 8867,
        "Canton" : "GL"
      },
      {
        "Commune" : "Niederuzwil",
        "NPA" : 9244,
        "Canton" : "SG"
      },
      {
        "Commune" : "Niederwald",
        "NPA" : 3989,
        "Canton" : "VS"
      },
      {
        "Commune" : "Niederwangen b. Bern",
        "NPA" : 3172,
        "Canton" : "BE"
      },
      {
        "Commune" : "Niederweningen",
        "NPA" : 8166,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Niederwil AG",
        "NPA" : 5524,
        "Canton" : "AG"
      },
      {
        "Commune" : "Niederwil SG",
        "NPA" : 9203,
        "Canton" : "SG"
      },
      {
        "Commune" : "Niederwil SO",
        "NPA" : 4523,
        "Canton" : "SO"
      },
      {
        "Commune" : "Niederönz",
        "NPA" : 3362,
        "Canton" : "BE"
      },
      {
        "Commune" : "Niederösch",
        "NPA" : 3424,
        "Canton" : "BE"
      },
      {
        "Commune" : "Nierlet-les-Bois",
        "NPA" : 1772,
        "Canton" : "FR"
      },
      {
        "Commune" : "Niouc",
        "NPA" : 3960,
        "Canton" : "VS"
      },
      {
        "Commune" : "Niva (Vallemaggia)",
        "NPA" : 6683,
        "Canton" : "TI"
      },
      {
        "Commune" : "Nivo",
        "NPA" : 6746,
        "Canton" : "TI"
      },
      {
        "Commune" : "Nods",
        "NPA" : 2518,
        "Canton" : "BE"
      },
      {
        "Commune" : "Noflen BE",
        "NPA" : 3116,
        "Canton" : "BE"
      },
      {
        "Commune" : "Nohl",
        "NPA" : 8212,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Noiraigue",
        "NPA" : 2103,
        "Canton" : "NE"
      },
      {
        "Commune" : "Noréaz",
        "NPA" : 1757,
        "Canton" : "FR"
      },
      {
        "Commune" : "Nottwil",
        "NPA" : 6207,
        "Canton" : "LU"
      },
      {
        "Commune" : "Novaggio",
        "NPA" : 6986,
        "Canton" : "TI"
      },
      {
        "Commune" : "Novalles",
        "NPA" : 1431,
        "Canton" : "VD"
      },
      {
        "Commune" : "Novazzano",
        "NPA" : 6883,
        "Canton" : "TI"
      },
      {
        "Commune" : "Noville",
        "NPA" : 1845,
        "Canton" : "VD"
      },
      {
        "Commune" : "Noës",
        "NPA" : 3976,
        "Canton" : "VS"
      },
      {
        "Commune" : "Nufenen",
        "NPA" : 7437,
        "Canton" : "GR"
      },
      {
        "Commune" : "Nuglar",
        "NPA" : 4412,
        "Canton" : "SO"
      },
      {
        "Commune" : "Nunningen",
        "NPA" : 4208,
        "Canton" : "SO"
      },
      {
        "Commune" : "Nussbaumen AG",
        "NPA" : 5415,
        "Canton" : "AG"
      },
      {
        "Commune" : "Nussbaumen TG",
        "NPA" : 8537,
        "Canton" : "TG"
      },
      {
        "Commune" : "Nusshof",
        "NPA" : 4453,
        "Canton" : "BL"
      },
      {
        "Commune" : "Nuvilly",
        "NPA" : 1485,
        "Canton" : "FR"
      },
      {
        "Commune" : "Nyon",
        "NPA" : 1260,
        "Canton" : "VD"
      },
      {
        "Commune" : "Näfels",
        "NPA" : 8752,
        "Canton" : "GL"
      },
      {
        "Commune" : "Nänikon",
        "NPA" : 8606,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Némiaz (Chamoson)",
        "NPA" : 1955,
        "Canton" : "VS"
      },
      {
        "Commune" : "Nürensdorf",
        "NPA" : 8309,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Obbürgen",
        "NPA" : 6363,
        "Canton" : "NW"
      },
      {
        "Commune" : "Oberaach",
        "NPA" : 8587,
        "Canton" : "TG"
      },
      {
        "Commune" : "Oberarth",
        "NPA" : 6414,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Oberbalm",
        "NPA" : 3096,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberbalmberg",
        "NPA" : 4524,
        "Canton" : "SO"
      },
      {
        "Commune" : "Oberbipp",
        "NPA" : 4538,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberbuchsiten",
        "NPA" : 4625,
        "Canton" : "SO"
      },
      {
        "Commune" : "Oberburg",
        "NPA" : 3414,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberbussnang",
        "NPA" : 9565,
        "Canton" : "TG"
      },
      {
        "Commune" : "Oberbüren",
        "NPA" : 9245,
        "Canton" : "SG"
      },
      {
        "Commune" : "Oberbütschel",
        "NPA" : 3088,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberdiessbach",
        "NPA" : 3672,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberdorf BL",
        "NPA" : 4436,
        "Canton" : "BL"
      },
      {
        "Commune" : "Oberdorf NW",
        "NPA" : 6370,
        "Canton" : "NW"
      },
      {
        "Commune" : "Oberdorf SO",
        "NPA" : 4515,
        "Canton" : "SO"
      },
      {
        "Commune" : "Oberegg",
        "NPA" : 9413,
        "Canton" : "AI"
      },
      {
        "Commune" : "Oberembrach",
        "NPA" : 8425,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Oberems",
        "NPA" : 3948,
        "Canton" : "VS"
      },
      {
        "Commune" : "Oberengstringen",
        "NPA" : 8102,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Oberentfelden",
        "NPA" : 5036,
        "Canton" : "AG"
      },
      {
        "Commune" : "Oberflachs",
        "NPA" : 5108,
        "Canton" : "AG"
      },
      {
        "Commune" : "Oberfrittenbach",
        "NPA" : 3551,
        "Canton" : "BE"
      },
      {
        "Commune" : "Obergerlafingen",
        "NPA" : 4564,
        "Canton" : "SO"
      },
      {
        "Commune" : "Obergesteln",
        "NPA" : 3988,
        "Canton" : "VS"
      },
      {
        "Commune" : "Oberglatt ZH",
        "NPA" : 8154,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Obergoldbach",
        "NPA" : 3434,
        "Canton" : "BE"
      },
      {
        "Commune" : "Obergösgen",
        "NPA" : 4653,
        "Canton" : "SO"
      },
      {
        "Commune" : "Oberhallau",
        "NPA" : 8216,
        "Canton" : "SH"
      },
      {
        "Commune" : "Oberhasli",
        "NPA" : 8156,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Oberhelfenschwil",
        "NPA" : 9621,
        "Canton" : "SG"
      },
      {
        "Commune" : "Oberhof",
        "NPA" : 5062,
        "Canton" : "AG"
      },
      {
        "Commune" : "Oberhofen AG",
        "NPA" : 5273,
        "Canton" : "AG"
      },
      {
        "Commune" : "Oberhofen TG",
        "NPA" : 8574,
        "Canton" : "TG"
      },
      {
        "Commune" : "Oberhofen am Thunersee",
        "NPA" : 3653,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberhünigen",
        "NPA" : 3504,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberiberg",
        "NPA" : 8843,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Oberkirch LU",
        "NPA" : 6208,
        "Canton" : "LU"
      },
      {
        "Commune" : "Oberkulm",
        "NPA" : 5727,
        "Canton" : "AG"
      },
      {
        "Commune" : "Oberlunkhofen",
        "NPA" : 8917,
        "Canton" : "AG"
      },
      {
        "Commune" : "Obermumpf",
        "NPA" : 4324,
        "Canton" : "AG"
      },
      {
        "Commune" : "Obermutten",
        "NPA" : 7431,
        "Canton" : "GR"
      },
      {
        "Commune" : "Obernau",
        "NPA" : 6012,
        "Canton" : "LU"
      },
      {
        "Commune" : "Oberneunforn",
        "NPA" : 8526,
        "Canton" : "TG"
      },
      {
        "Commune" : "Oberramsern",
        "NPA" : 4588,
        "Canton" : "SO"
      },
      {
        "Commune" : "Oberrickenbach",
        "NPA" : 6387,
        "Canton" : "NW"
      },
      {
        "Commune" : "Oberried FR",
        "NPA" : 1724,
        "Canton" : "FR"
      },
      {
        "Commune" : "Oberried am Brienzersee",
        "NPA" : 3854,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberrieden",
        "NPA" : 8942,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Oberriet SG",
        "NPA" : 9463,
        "Canton" : "SG"
      },
      {
        "Commune" : "Oberrindal",
        "NPA" : 9604,
        "Canton" : "SG"
      },
      {
        "Commune" : "Oberrohrdorf",
        "NPA" : 5452,
        "Canton" : "AG"
      },
      {
        "Commune" : "Oberrüti",
        "NPA" : 5647,
        "Canton" : "AG"
      },
      {
        "Commune" : "Obersaxen",
        "NPA" : 7134,
        "Canton" : "GR"
      },
      {
        "Commune" : "Oberschan",
        "NPA" : 9479,
        "Canton" : "SG"
      },
      {
        "Commune" : "Oberschrot",
        "NPA" : 1716,
        "Canton" : "FR"
      },
      {
        "Commune" : "Oberstammheim",
        "NPA" : 8477,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Obersteckholz",
        "NPA" : 4924,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberstetten",
        "NPA" : 9249,
        "Canton" : "SG"
      },
      {
        "Commune" : "Oberstocken",
        "NPA" : 3632,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberterzen",
        "NPA" : 8884,
        "Canton" : "SG"
      },
      {
        "Commune" : "Oberthal",
        "NPA" : 3531,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberurnen",
        "NPA" : 8868,
        "Canton" : "GL"
      },
      {
        "Commune" : "Oberuzwil",
        "NPA" : 9242,
        "Canton" : "SG"
      },
      {
        "Commune" : "Oberwald",
        "NPA" : 3999,
        "Canton" : "VS"
      },
      {
        "Commune" : "Oberwangen TG",
        "NPA" : 8374,
        "Canton" : "TG"
      },
      {
        "Commune" : "Oberwangen b. Bern",
        "NPA" : 3173,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberweningen",
        "NPA" : 8165,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Oberwil (Dägerlen)",
        "NPA" : 8471,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Oberwil BL",
        "NPA" : 4104,
        "Canton" : "BL"
      },
      {
        "Commune" : "Oberwil b. Büren",
        "NPA" : 3298,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberwil b. Zug",
        "NPA" : 6317,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Oberwil im Simmental",
        "NPA" : 3765,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberwil-Lieli",
        "NPA" : 8966,
        "Canton" : "AG"
      },
      {
        "Commune" : "Oberägeri",
        "NPA" : 6315,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Oberönz",
        "NPA" : 3363,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oberösch",
        "NPA" : 3424,
        "Canton" : "BE"
      },
      {
        "Commune" : "Obfelden",
        "NPA" : 8912,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Obstalden",
        "NPA" : 8758,
        "Canton" : "GL"
      },
      {
        "Commune" : "Ochlenberg",
        "NPA" : 3367,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ocourt",
        "NPA" : 2889,
        "Canton" : "JU"
      },
      {
        "Commune" : "Odogno",
        "NPA" : 6951,
        "Canton" : "TI"
      },
      {
        "Commune" : "Oekingen",
        "NPA" : 4566,
        "Canton" : "SO"
      },
      {
        "Commune" : "Oensingen",
        "NPA" : 4702,
        "Canton" : "SO"
      },
      {
        "Commune" : "Oerlingen",
        "NPA" : 8461,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Oeschenbach",
        "NPA" : 4943,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oeschgen",
        "NPA" : 5072,
        "Canton" : "AG"
      },
      {
        "Commune" : "Oeschseite",
        "NPA" : 3776,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oetwil am See",
        "NPA" : 8618,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Oetwil an der Limmat",
        "NPA" : 8955,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Oey",
        "NPA" : 3753,
        "Canton" : "BE"
      },
      {
        "Commune" : "Oftringen",
        "NPA" : 4665,
        "Canton" : "AG"
      },
      {
        "Commune" : "Ogens",
        "NPA" : 1045,
        "Canton" : "VD"
      },
      {
        "Commune" : "Oggio",
        "NPA" : 6955,
        "Canton" : "TI"
      },
      {
        "Commune" : "Ohmstal",
        "NPA" : 6143,
        "Canton" : "LU"
      },
      {
        "Commune" : "Oleyres",
        "NPA" : 1580,
        "Canton" : "VD"
      },
      {
        "Commune" : "Olivone",
        "NPA" : 6718,
        "Canton" : "TI"
      },
      {
        "Commune" : "Ollon VD",
        "NPA" : 1867,
        "Canton" : "VD"
      },
      {
        "Commune" : "Ollon VS",
        "NPA" : 3971,
        "Canton" : "VS"
      },
      {
        "Commune" : "Olsberg",
        "NPA" : 4305,
        "Canton" : "AG"
      },
      {
        "Commune" : "Olten",
        "NPA" : 4600,
        "Canton" : "SO"
      },
      {
        "Commune" : "Oltingen",
        "NPA" : 4494,
        "Canton" : "BL"
      },
      {
        "Commune" : "Onex",
        "NPA" : 1213,
        "Canton" : "GE"
      },
      {
        "Commune" : "Onnens FR",
        "NPA" : 1756,
        "Canton" : "FR"
      },
      {
        "Commune" : "Onnens VD",
        "NPA" : 1425,
        "Canton" : "VD"
      },
      {
        "Commune" : "Opfershofen TG",
        "NPA" : 8584,
        "Canton" : "TG"
      },
      {
        "Commune" : "Opfertshofen SH",
        "NPA" : 8236,
        "Canton" : "SH"
      },
      {
        "Commune" : "Opfikon",
        "NPA" : 8152,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Oppens",
        "NPA" : 1047,
        "Canton" : "VD"
      },
      {
        "Commune" : "Oppikon",
        "NPA" : 9565,
        "Canton" : "TG"
      },
      {
        "Commune" : "Oppligen",
        "NPA" : 3629,
        "Canton" : "BE"
      },
      {
        "Commune" : "Orbe",
        "NPA" : 1350,
        "Canton" : "VD"
      },
      {
        "Commune" : "Orges",
        "NPA" : 1430,
        "Canton" : "VD"
      },
      {
        "Commune" : "Orient",
        "NPA" : 1341,
        "Canton" : "VD"
      },
      {
        "Commune" : "Origlio",
        "NPA" : 6945,
        "Canton" : "TI"
      },
      {
        "Commune" : "Ormalingen",
        "NPA" : 4466,
        "Canton" : "BL"
      },
      {
        "Commune" : "Ormône (Savièse)",
        "NPA" : 1965,
        "Canton" : "VS"
      },
      {
        "Commune" : "Orny",
        "NPA" : 1317,
        "Canton" : "VD"
      },
      {
        "Commune" : "Oron-la-Ville",
        "NPA" : 1610,
        "Canton" : "VD"
      },
      {
        "Commune" : "Oron-le-Châtel",
        "NPA" : 1608,
        "Canton" : "VD"
      },
      {
        "Commune" : "Orpund",
        "NPA" : 2552,
        "Canton" : "BE"
      },
      {
        "Commune" : "Orselina",
        "NPA" : 6644,
        "Canton" : "TI"
      },
      {
        "Commune" : "Orsières",
        "NPA" : 1937,
        "Canton" : "VS"
      },
      {
        "Commune" : "Orsonnens",
        "NPA" : 1694,
        "Canton" : "FR"
      },
      {
        "Commune" : "Ortschwaben",
        "NPA" : 3042,
        "Canton" : "BE"
      },
      {
        "Commune" : "Orvin",
        "NPA" : 2534,
        "Canton" : "BE"
      },
      {
        "Commune" : "Orzens",
        "NPA" : 1413,
        "Canton" : "VD"
      },
      {
        "Commune" : "Oschwand",
        "NPA" : 3476,
        "Canton" : "BE"
      },
      {
        "Commune" : "Osco",
        "NPA" : 6763,
        "Canton" : "TI"
      },
      {
        "Commune" : "Osogna",
        "NPA" : 6703,
        "Canton" : "TI"
      },
      {
        "Commune" : "Ospizio Bernina",
        "NPA" : 7710,
        "Canton" : "GR"
      },
      {
        "Commune" : "Ossingen",
        "NPA" : 8475,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Osterfingen",
        "NPA" : 8218,
        "Canton" : "SH"
      },
      {
        "Commune" : "Ostermundigen",
        "NPA" : 3072,
        "Canton" : "BE"
      },
      {
        "Commune" : "Otelfingen",
        "NPA" : 8112,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Othmarsingen",
        "NPA" : 5504,
        "Canton" : "AG"
      },
      {
        "Commune" : "Ottenbach",
        "NPA" : 8913,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ottikon (Gossau ZH)",
        "NPA" : 8626,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ottikon b. Kemptthal",
        "NPA" : 8307,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ottoberg",
        "NPA" : 8561,
        "Canton" : "TG"
      },
      {
        "Commune" : "Oulens-sous-Echallens",
        "NPA" : 1377,
        "Canton" : "VD"
      },
      {
        "Commune" : "Oulens-sur-Lucens",
        "NPA" : 1522,
        "Canton" : "VD"
      },
      {
        "Commune" : "Ovronnaz",
        "NPA" : 1911,
        "Canton" : "VS"
      },
      {
        "Commune" : "Pagig",
        "NPA" : 7028,
        "Canton" : "GR"
      },
      {
        "Commune" : "Pailly",
        "NPA" : 1416,
        "Canton" : "VD"
      },
      {
        "Commune" : "Palagnedra",
        "NPA" : 6657,
        "Canton" : "TI"
      },
      {
        "Commune" : "Palasuit (Liddes)",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Palézieux",
        "NPA" : 1607,
        "Canton" : "VD"
      },
      {
        "Commune" : "Palézieux-Village",
        "NPA" : 1607,
        "Canton" : "VD"
      },
      {
        "Commune" : "Pambio-Noranco",
        "NPA" : 6915,
        "Canton" : "TI"
      },
      {
        "Commune" : "Pampigny",
        "NPA" : 1142,
        "Canton" : "VD"
      },
      {
        "Commune" : "Panex",
        "NPA" : 1867,
        "Canton" : "VD"
      },
      {
        "Commune" : "Pany",
        "NPA" : 7243,
        "Canton" : "GR"
      },
      {
        "Commune" : "Paradiso",
        "NPA" : 6900,
        "Canton" : "TI"
      },
      {
        "Commune" : "Parpan",
        "NPA" : 7076,
        "Canton" : "GR"
      },
      {
        "Commune" : "Parsonz",
        "NPA" : 7464,
        "Canton" : "GR"
      },
      {
        "Commune" : "Paspels",
        "NPA" : 7417,
        "Canton" : "GR"
      },
      {
        "Commune" : "Passugg",
        "NPA" : 7062,
        "Canton" : "GR"
      },
      {
        "Commune" : "Paudex",
        "NPA" : 1094,
        "Canton" : "VD"
      },
      {
        "Commune" : "Payerne",
        "NPA" : 1530,
        "Canton" : "VD"
      },
      {
        "Commune" : "Pazzallo",
        "NPA" : 6912,
        "Canton" : "TI"
      },
      {
        "Commune" : "Peccia",
        "NPA" : 6695,
        "Canton" : "TI"
      },
      {
        "Commune" : "Pedrinate",
        "NPA" : 6832,
        "Canton" : "TI"
      },
      {
        "Commune" : "Peiden",
        "NPA" : 7110,
        "Canton" : "GR"
      },
      {
        "Commune" : "Peist",
        "NPA" : 7029,
        "Canton" : "GR"
      },
      {
        "Commune" : "Peney-le-Jorat",
        "NPA" : 1059,
        "Canton" : "VD"
      },
      {
        "Commune" : "Pensier",
        "NPA" : 1783,
        "Canton" : "FR"
      },
      {
        "Commune" : "Penthalaz",
        "NPA" : 1305,
        "Canton" : "VD"
      },
      {
        "Commune" : "Penthaz",
        "NPA" : 1303,
        "Canton" : "VD"
      },
      {
        "Commune" : "Penthéréaz",
        "NPA" : 1375,
        "Canton" : "VD"
      },
      {
        "Commune" : "Perlen",
        "NPA" : 6035,
        "Canton" : "LU"
      },
      {
        "Commune" : "Perly",
        "NPA" : 1258,
        "Canton" : "GE"
      },
      {
        "Commune" : "Perrefitte",
        "NPA" : 2742,
        "Canton" : "BE"
      },
      {
        "Commune" : "Perroy",
        "NPA" : 1166,
        "Canton" : "VD"
      },
      {
        "Commune" : "Personico",
        "NPA" : 6744,
        "Canton" : "TI"
      },
      {
        "Commune" : "Peseux",
        "NPA" : 2034,
        "Canton" : "NE"
      },
      {
        "Commune" : "Petit Vichères (Liddes)",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Petit-Lancy",
        "NPA" : 1213,
        "Canton" : "GE"
      },
      {
        "Commune" : "Petit-Martel",
        "NPA" : 2316,
        "Canton" : "NE"
      },
      {
        "Commune" : "Peyres-Possens",
        "NPA" : 1063,
        "Canton" : "VD"
      },
      {
        "Commune" : "Pfaffhausen",
        "NPA" : 8118,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Pfaffnau",
        "NPA" : 6264,
        "Canton" : "LU"
      },
      {
        "Commune" : "Pfeffikon LU",
        "NPA" : 5735,
        "Canton" : "LU"
      },
      {
        "Commune" : "Pfeffingen",
        "NPA" : 4148,
        "Canton" : "BL"
      },
      {
        "Commune" : "Pfungen",
        "NPA" : 8422,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Pfyn",
        "NPA" : 8505,
        "Canton" : "TG"
      },
      {
        "Commune" : "Pfäfers",
        "NPA" : 7312,
        "Canton" : "SG"
      },
      {
        "Commune" : "Pfäffikon SZ",
        "NPA" : 8808,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Pfäffikon ZH",
        "NPA" : 8330,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Piandera Paese",
        "NPA" : 6959,
        "Canton" : "TI"
      },
      {
        "Commune" : "Pianezzo",
        "NPA" : 6582,
        "Canton" : "TI"
      },
      {
        "Commune" : "Piano di Peccia",
        "NPA" : 6695,
        "Canton" : "TI"
      },
      {
        "Commune" : "Piazzogna",
        "NPA" : 6579,
        "Canton" : "TI"
      },
      {
        "Commune" : "Pierrafortscha",
        "NPA" : 1723,
        "Canton" : "FR"
      },
      {
        "Commune" : "Pieterlen",
        "NPA" : 2542,
        "Canton" : "BE"
      },
      {
        "Commune" : "Pignia",
        "NPA" : 7443,
        "Canton" : "GR"
      },
      {
        "Commune" : "Pigniu",
        "NPA" : 7156,
        "Canton" : "GR"
      },
      {
        "Commune" : "Piotta",
        "NPA" : 6776,
        "Canton" : "TI"
      },
      {
        "Commune" : "Pitasch",
        "NPA" : 7111,
        "Canton" : "GR"
      },
      {
        "Commune" : "Pizy",
        "NPA" : 1174,
        "Canton" : "VD"
      },
      {
        "Commune" : "Plaffeien",
        "NPA" : 1716,
        "Canton" : "FR"
      },
      {
        "Commune" : "Plagne",
        "NPA" : 2536,
        "Canton" : "BE"
      },
      {
        "Commune" : "Plan-les-Ouates",
        "NPA" : 1228,
        "Canton" : "GE"
      },
      {
        "Commune" : "Planken",
        "NPA" : 9498,
        "Canton" : "LI"
      },
      {
        "Commune" : "Plasselb",
        "NPA" : 1737,
        "Canton" : "FR"
      },
      {
        "Commune" : "Platta",
        "NPA" : 7185,
        "Canton" : "GR"
      },
      {
        "Commune" : "Plaun da Lej",
        "NPA" : 7517,
        "Canton" : "GR"
      },
      {
        "Commune" : "Pleigne",
        "NPA" : 2807,
        "Canton" : "JU"
      },
      {
        "Commune" : "Pleujouse",
        "NPA" : 2953,
        "Canton" : "JU"
      },
      {
        "Commune" : "Plons",
        "NPA" : 8889,
        "Canton" : "SG"
      },
      {
        "Commune" : "Pohlern",
        "NPA" : 3638,
        "Canton" : "BE"
      },
      {
        "Commune" : "Poliez-Pittet",
        "NPA" : 1041,
        "Canton" : "VD"
      },
      {
        "Commune" : "Poliez-le-Grand",
        "NPA" : 1041,
        "Canton" : "VD"
      },
      {
        "Commune" : "Pollegio",
        "NPA" : 6742,
        "Canton" : "TI"
      },
      {
        "Commune" : "Pompaples",
        "NPA" : 1318,
        "Canton" : "VD"
      },
      {
        "Commune" : "Pomy",
        "NPA" : 1405,
        "Canton" : "VD"
      },
      {
        "Commune" : "Pont (Veveyse)",
        "NPA" : 1699,
        "Canton" : "FR"
      },
      {
        "Commune" : "Pont-de-la-Morge (Sion)",
        "NPA" : 1962,
        "Canton" : "VS"
      },
      {
        "Commune" : "Pont-la-Ville",
        "NPA" : 1649,
        "Canton" : "FR"
      },
      {
        "Commune" : "Ponte Capriasca",
        "NPA" : 6946,
        "Canton" : "TI"
      },
      {
        "Commune" : "Ponte Cremenaga",
        "NPA" : 6996,
        "Canton" : "TI"
      },
      {
        "Commune" : "Ponte Tresa",
        "NPA" : 6988,
        "Canton" : "TI"
      },
      {
        "Commune" : "Pontenet",
        "NPA" : 2733,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ponthaux",
        "NPA" : 1772,
        "Canton" : "FR"
      },
      {
        "Commune" : "Ponto Valentino",
        "NPA" : 6724,
        "Canton" : "TI"
      },
      {
        "Commune" : "Pontresina",
        "NPA" : 7504,
        "Canton" : "GR"
      },
      {
        "Commune" : "Porrentruy",
        "NPA" : 2900,
        "Canton" : "JU"
      },
      {
        "Commune" : "Porsel",
        "NPA" : 1699,
        "Canton" : "FR"
      },
      {
        "Commune" : "Port",
        "NPA" : 2562,
        "Canton" : "BE"
      },
      {
        "Commune" : "Portalban",
        "NPA" : 1568,
        "Canton" : "FR"
      },
      {
        "Commune" : "Portein",
        "NPA" : 7423,
        "Canton" : "GR"
      },
      {
        "Commune" : "Porto Ronco",
        "NPA" : 6613,
        "Canton" : "TI"
      },
      {
        "Commune" : "Porza",
        "NPA" : 6948,
        "Canton" : "TI"
      },
      {
        "Commune" : "Posat",
        "NPA" : 1726,
        "Canton" : "FR"
      },
      {
        "Commune" : "Poschiavo",
        "NPA" : 7742,
        "Canton" : "GR"
      },
      {
        "Commune" : "Posieux",
        "NPA" : 1725,
        "Canton" : "FR"
      },
      {
        "Commune" : "Praden",
        "NPA" : 7063,
        "Canton" : "GR"
      },
      {
        "Commune" : "Pragg-Jenaz",
        "NPA" : 7231,
        "Canton" : "GR"
      },
      {
        "Commune" : "Prahins",
        "NPA" : 1408,
        "Canton" : "VD"
      },
      {
        "Commune" : "Prangins",
        "NPA" : 1197,
        "Canton" : "VD"
      },
      {
        "Commune" : "Praratoud",
        "NPA" : 1528,
        "Canton" : "FR"
      },
      {
        "Commune" : "Prato (Leventina)",
        "NPA" : 6773,
        "Canton" : "TI"
      },
      {
        "Commune" : "Prato-Sornico",
        "NPA" : 6694,
        "Canton" : "TI"
      },
      {
        "Commune" : "Pratteln",
        "NPA" : 4133,
        "Canton" : "BL"
      },
      {
        "Commune" : "Pratval",
        "NPA" : 7415,
        "Canton" : "GR"
      },
      {
        "Commune" : "Pravidondaz (Salins)",
        "NPA" : 1991,
        "Canton" : "VS"
      },
      {
        "Commune" : "Praz (Vully)",
        "NPA" : 1788,
        "Canton" : "FR"
      },
      {
        "Commune" : "Praz-de-Fort",
        "NPA" : 1943,
        "Canton" : "VS"
      },
      {
        "Commune" : "Preda",
        "NPA" : 7482,
        "Canton" : "GR"
      },
      {
        "Commune" : "Pregassona",
        "NPA" : 6963,
        "Canton" : "TI"
      },
      {
        "Commune" : "Premier",
        "NPA" : 1324,
        "Canton" : "VD"
      },
      {
        "Commune" : "Preonzo",
        "NPA" : 6523,
        "Canton" : "TI"
      },
      {
        "Commune" : "Presinge",
        "NPA" : 1243,
        "Canton" : "GE"
      },
      {
        "Commune" : "Prez-vers-Noréaz",
        "NPA" : 1746,
        "Canton" : "FR"
      },
      {
        "Commune" : "Prez-vers-Siviriez",
        "NPA" : 1677,
        "Canton" : "FR"
      },
      {
        "Commune" : "Prilly",
        "NPA" : 1008,
        "Canton" : "VD"
      },
      {
        "Commune" : "Pringy",
        "NPA" : 1663,
        "Canton" : "FR"
      },
      {
        "Commune" : "Produit (Leytron)",
        "NPA" : 1912,
        "Canton" : "VS"
      },
      {
        "Commune" : "Progens",
        "NPA" : 1624,
        "Canton" : "FR"
      },
      {
        "Commune" : "Promasens",
        "NPA" : 1673,
        "Canton" : "FR"
      },
      {
        "Commune" : "Promontogno",
        "NPA" : 7606,
        "Canton" : "GR"
      },
      {
        "Commune" : "Prosito",
        "NPA" : 6526,
        "Canton" : "TI"
      },
      {
        "Commune" : "Provence",
        "NPA" : 1428,
        "Canton" : "VD"
      },
      {
        "Commune" : "Prugiasco",
        "NPA" : 6723,
        "Canton" : "TI"
      },
      {
        "Commune" : "Präz",
        "NPA" : 7424,
        "Canton" : "GR"
      },
      {
        "Commune" : "Préverenges",
        "NPA" : 1028,
        "Canton" : "VD"
      },
      {
        "Commune" : "Prévondavaux",
        "NPA" : 1410,
        "Canton" : "FR"
      },
      {
        "Commune" : "Prévonloup",
        "NPA" : 1682,
        "Canton" : "VD"
      },
      {
        "Commune" : "Prêles",
        "NPA" : 2515,
        "Canton" : "BE"
      },
      {
        "Commune" : "Pugerna",
        "NPA" : 6823,
        "Canton" : "TI"
      },
      {
        "Commune" : "Puidoux",
        "NPA" : 1070,
        "Canton" : "VD"
      },
      {
        "Commune" : "Pully",
        "NPA" : 1009,
        "Canton" : "VD"
      },
      {
        "Commune" : "Puplinge",
        "NPA" : 1241,
        "Canton" : "GE"
      },
      {
        "Commune" : "Pura",
        "NPA" : 6984,
        "Canton" : "TI"
      },
      {
        "Commune" : "Purasca",
        "NPA" : 6989,
        "Canton" : "TI"
      },
      {
        "Commune" : "Pusserein",
        "NPA" : 7228,
        "Canton" : "GR"
      },
      {
        "Commune" : "Putz",
        "NPA" : 7224,
        "Canton" : "GR"
      },
      {
        "Commune" : "Péry",
        "NPA" : 2603,
        "Canton" : "BE"
      },
      {
        "Commune" : "Quarten",
        "NPA" : 8883,
        "Canton" : "SG"
      },
      {
        "Commune" : "Quartino",
        "NPA" : 6572,
        "Canton" : "TI"
      },
      {
        "Commune" : "Quinten",
        "NPA" : 8878,
        "Canton" : "SG"
      },
      {
        "Commune" : "Quinto",
        "NPA" : 6777,
        "Canton" : "TI"
      },
      {
        "Commune" : "Rabius",
        "NPA" : 7172,
        "Canton" : "GR"
      },
      {
        "Commune" : "Radelfingen b. Aarberg",
        "NPA" : 3271,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rafz",
        "NPA" : 8197,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rain",
        "NPA" : 6026,
        "Canton" : "LU"
      },
      {
        "Commune" : "Ramersberg",
        "NPA" : 6060,
        "Canton" : "OW"
      },
      {
        "Commune" : "Ramiswil",
        "NPA" : 4719,
        "Canton" : "SO"
      },
      {
        "Commune" : "Ramlinsburg",
        "NPA" : 4433,
        "Canton" : "BL"
      },
      {
        "Commune" : "Ramosch",
        "NPA" : 7556,
        "Canton" : "GR"
      },
      {
        "Commune" : "Ramsei",
        "NPA" : 3435,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ramsen",
        "NPA" : 8262,
        "Canton" : "SH"
      },
      {
        "Commune" : "Rancate",
        "NPA" : 6862,
        "Canton" : "TI"
      },
      {
        "Commune" : "Rances",
        "NPA" : 1439,
        "Canton" : "VD"
      },
      {
        "Commune" : "Randa",
        "NPA" : 3928,
        "Canton" : "VS"
      },
      {
        "Commune" : "Randogne",
        "NPA" : 3975,
        "Canton" : "VS"
      },
      {
        "Commune" : "Ranflüh",
        "NPA" : 3439,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ranzo",
        "NPA" : 6577,
        "Canton" : "TI"
      },
      {
        "Commune" : "Raperswilen",
        "NPA" : 8558,
        "Canton" : "TG"
      },
      {
        "Commune" : "Rapperswil BE",
        "NPA" : 3255,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rapperswil SG",
        "NPA" : 8640,
        "Canton" : "SG"
      },
      {
        "Commune" : "Raron",
        "NPA" : 3942,
        "Canton" : "VS"
      },
      {
        "Commune" : "Rasa",
        "NPA" : 6655,
        "Canton" : "TI"
      },
      {
        "Commune" : "Ravoire",
        "NPA" : 1928,
        "Canton" : "VS"
      },
      {
        "Commune" : "Realp",
        "NPA" : 6491,
        "Canton" : "UR"
      },
      {
        "Commune" : "Realta",
        "NPA" : 7408,
        "Canton" : "GR"
      },
      {
        "Commune" : "Rebeuvelier",
        "NPA" : 2832,
        "Canton" : "JU"
      },
      {
        "Commune" : "Rebstein",
        "NPA" : 9445,
        "Canton" : "SG"
      },
      {
        "Commune" : "Rebévelier",
        "NPA" : 2717,
        "Canton" : "BE"
      },
      {
        "Commune" : "Recherswil",
        "NPA" : 4565,
        "Canton" : "SO"
      },
      {
        "Commune" : "Rechthalten",
        "NPA" : 1718,
        "Canton" : "FR"
      },
      {
        "Commune" : "Reckingen VS",
        "NPA" : 3998,
        "Canton" : "VS"
      },
      {
        "Commune" : "Reconvilier",
        "NPA" : 2732,
        "Canton" : "BE"
      },
      {
        "Commune" : "Regensberg",
        "NPA" : 8158,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Regensdorf",
        "NPA" : 8105,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rehetobel",
        "NPA" : 9038,
        "Canton" : "AR"
      },
      {
        "Commune" : "Reichenbach im Kandertal",
        "NPA" : 3713,
        "Canton" : "BE"
      },
      {
        "Commune" : "Reichenburg",
        "NPA" : 8864,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Reiden",
        "NPA" : 6260,
        "Canton" : "LU"
      },
      {
        "Commune" : "Reidermoos",
        "NPA" : 6260,
        "Canton" : "LU"
      },
      {
        "Commune" : "Reigoldswil",
        "NPA" : 4418,
        "Canton" : "BL"
      },
      {
        "Commune" : "Reinach AG",
        "NPA" : 5734,
        "Canton" : "AG"
      },
      {
        "Commune" : "Reinach BL",
        "NPA" : 4153,
        "Canton" : "BL"
      },
      {
        "Commune" : "Reisiswil",
        "NPA" : 4919,
        "Canton" : "BE"
      },
      {
        "Commune" : "Reitnau",
        "NPA" : 5057,
        "Canton" : "AG"
      },
      {
        "Commune" : "Rekingen AG",
        "NPA" : 5332,
        "Canton" : "AG"
      },
      {
        "Commune" : "Remaufens",
        "NPA" : 1617,
        "Canton" : "FR"
      },
      {
        "Commune" : "Remetschwil",
        "NPA" : 5453,
        "Canton" : "AG"
      },
      {
        "Commune" : "Remigen",
        "NPA" : 5236,
        "Canton" : "AG"
      },
      {
        "Commune" : "Renan BE",
        "NPA" : 2616,
        "Canton" : "BE"
      },
      {
        "Commune" : "Renens VD",
        "NPA" : 1020,
        "Canton" : "VD"
      },
      {
        "Commune" : "Rengg",
        "NPA" : 6162,
        "Canton" : "LU"
      },
      {
        "Commune" : "Rennaz",
        "NPA" : 1847,
        "Canton" : "VD"
      },
      {
        "Commune" : "Retschwil",
        "NPA" : 6285,
        "Canton" : "LU"
      },
      {
        "Commune" : "Reute AR",
        "NPA" : 9411,
        "Canton" : "SG"
      },
      {
        "Commune" : "Reute AR",
        "NPA" : 9411,
        "Canton" : "AR"
      },
      {
        "Commune" : "Reutigen",
        "NPA" : 3647,
        "Canton" : "BE"
      },
      {
        "Commune" : "Reutlingen (Winterthur)",
        "NPA" : 8404,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Reverolle",
        "NPA" : 1128,
        "Canton" : "VD"
      },
      {
        "Commune" : "Rheinau",
        "NPA" : 8462,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rheineck",
        "NPA" : 9424,
        "Canton" : "SG"
      },
      {
        "Commune" : "Rheinfelden",
        "NPA" : 4310,
        "Canton" : "AG"
      },
      {
        "Commune" : "Rheinklingen",
        "NPA" : 8259,
        "Canton" : "TG"
      },
      {
        "Commune" : "Rheinsulz",
        "NPA" : 5084,
        "Canton" : "AG"
      },
      {
        "Commune" : "Rhäzüns",
        "NPA" : 7403,
        "Canton" : "GR"
      },
      {
        "Commune" : "Riaz",
        "NPA" : 1632,
        "Canton" : "FR"
      },
      {
        "Commune" : "Riazzino",
        "NPA" : 6595,
        "Canton" : "TI"
      },
      {
        "Commune" : "Richenthal",
        "NPA" : 6263,
        "Canton" : "LU"
      },
      {
        "Commune" : "Richigen",
        "NPA" : 3078,
        "Canton" : "BE"
      },
      {
        "Commune" : "Richterswil",
        "NPA" : 8805,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ricken SG",
        "NPA" : 8726,
        "Canton" : "SG"
      },
      {
        "Commune" : "Rickenbach BL",
        "NPA" : 4462,
        "Canton" : "BL"
      },
      {
        "Commune" : "Rickenbach LU",
        "NPA" : 6221,
        "Canton" : "LU"
      },
      {
        "Commune" : "Rickenbach SO",
        "NPA" : 4613,
        "Canton" : "SO"
      },
      {
        "Commune" : "Rickenbach Sulz",
        "NPA" : 8545,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rickenbach ZH",
        "NPA" : 8545,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rickenbach b. Schwyz",
        "NPA" : 6432,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Rickenbach b. Wil",
        "NPA" : 9532,
        "Canton" : "SG"
      },
      {
        "Commune" : "Rickenbach b. Wil",
        "NPA" : 9532,
        "Canton" : "TG"
      },
      {
        "Commune" : "Ricketwil (Winterthur)",
        "NPA" : 8352,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Riddes",
        "NPA" : 1908,
        "Canton" : "VS"
      },
      {
        "Commune" : "Ried (Frutigen)",
        "NPA" : 3724,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ried (Muotathal)",
        "NPA" : 6436,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Ried b. Kerzers",
        "NPA" : 3216,
        "Canton" : "FR"
      },
      {
        "Commune" : "Ried-Brig",
        "NPA" : 3911,
        "Canton" : "VS"
      },
      {
        "Commune" : "Ried-Mörel",
        "NPA" : 3986,
        "Canton" : "VS"
      },
      {
        "Commune" : "Rieden AG",
        "NPA" : 5415,
        "Canton" : "AG"
      },
      {
        "Commune" : "Rieden SG",
        "NPA" : 8739,
        "Canton" : "SG"
      },
      {
        "Commune" : "Riederalp",
        "NPA" : 3987,
        "Canton" : "VS"
      },
      {
        "Commune" : "Riedern",
        "NPA" : 8750,
        "Canton" : "GL"
      },
      {
        "Commune" : "Riedholz",
        "NPA" : 4533,
        "Canton" : "SO"
      },
      {
        "Commune" : "Riedikon",
        "NPA" : 8616,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Riedstätt",
        "NPA" : 3159,
        "Canton" : "BE"
      },
      {
        "Commune" : "Riedt b. Erlen",
        "NPA" : 8586,
        "Canton" : "TG"
      },
      {
        "Commune" : "Riedtwil",
        "NPA" : 3475,
        "Canton" : "BE"
      },
      {
        "Commune" : "Riehen",
        "NPA" : 4125,
        "Canton" : "BS"
      },
      {
        "Commune" : "Riein",
        "NPA" : 7128,
        "Canton" : "GR"
      },
      {
        "Commune" : "Riemenstalden",
        "NPA" : 6452,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Riet (Neftenbach)",
        "NPA" : 8412,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rietheim",
        "NPA" : 5323,
        "Canton" : "AG"
      },
      {
        "Commune" : "Riex",
        "NPA" : 1097,
        "Canton" : "VD"
      },
      {
        "Commune" : "Riffenmatt",
        "NPA" : 3156,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rifferswil",
        "NPA" : 8911,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Riggisberg",
        "NPA" : 3132,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rigi Kaltbad",
        "NPA" : 6356,
        "Canton" : "LU"
      },
      {
        "Commune" : "Rigi Klösterli",
        "NPA" : 6410,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Rigi Kulm",
        "NPA" : 6410,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Rigi Scheidegg",
        "NPA" : 6410,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Rigi Staffel",
        "NPA" : 6410,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Riken AG",
        "NPA" : 4853,
        "Canton" : "AG"
      },
      {
        "Commune" : "Rikon im Tösstal",
        "NPA" : 8486,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ringgenberg BE",
        "NPA" : 3852,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ringoldswil",
        "NPA" : 3656,
        "Canton" : "BE"
      },
      {
        "Commune" : "Riniken",
        "NPA" : 5223,
        "Canton" : "AG"
      },
      {
        "Commune" : "Riom",
        "NPA" : 7463,
        "Canton" : "GR"
      },
      {
        "Commune" : "Risch",
        "NPA" : 6343,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Ritzingen",
        "NPA" : 3989,
        "Canton" : "VS"
      },
      {
        "Commune" : "Riva San Vitale",
        "NPA" : 6826,
        "Canton" : "TI"
      },
      {
        "Commune" : "Rivaz",
        "NPA" : 1071,
        "Canton" : "VD"
      },
      {
        "Commune" : "Rive Haute (Liddes)",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Riveo",
        "NPA" : 6674,
        "Canton" : "TI"
      },
      {
        "Commune" : "Rivera",
        "NPA" : 6802,
        "Canton" : "TI"
      },
      {
        "Commune" : "Rizenbach",
        "NPA" : 3206,
        "Canton" : "BE"
      },
      {
        "Commune" : "Robasacco",
        "NPA" : 6599,
        "Canton" : "TI"
      },
      {
        "Commune" : "Roche VD",
        "NPA" : 1852,
        "Canton" : "VD"
      },
      {
        "Commune" : "Roche-d'Or",
        "NPA" : 2912,
        "Canton" : "JU"
      },
      {
        "Commune" : "Rochefort",
        "NPA" : 2019,
        "Canton" : "NE"
      },
      {
        "Commune" : "Roches BE",
        "NPA" : 2762,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rocourt",
        "NPA" : 2907,
        "Canton" : "JU"
      },
      {
        "Commune" : "Rodels",
        "NPA" : 7415,
        "Canton" : "GR"
      },
      {
        "Commune" : "Rodersdorf",
        "NPA" : 4118,
        "Canton" : "SO"
      },
      {
        "Commune" : "Rodi-Fiesso",
        "NPA" : 6772,
        "Canton" : "TI"
      },
      {
        "Commune" : "Roggenburg",
        "NPA" : 2814,
        "Canton" : "BL"
      },
      {
        "Commune" : "Roggliswil",
        "NPA" : 6265,
        "Canton" : "LU"
      },
      {
        "Commune" : "Roggwil BE",
        "NPA" : 4914,
        "Canton" : "BE"
      },
      {
        "Commune" : "Roggwil TG",
        "NPA" : 9325,
        "Canton" : "TG"
      },
      {
        "Commune" : "Rohr b. Olten",
        "NPA" : 4655,
        "Canton" : "SO"
      },
      {
        "Commune" : "Rohrbach",
        "NPA" : 4938,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rohrbachgraben",
        "NPA" : 4938,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rohrmatt",
        "NPA" : 6132,
        "Canton" : "LU"
      },
      {
        "Commune" : "Rolle",
        "NPA" : 1180,
        "Canton" : "VD"
      },
      {
        "Commune" : "Romainmôtier",
        "NPA" : 1323,
        "Canton" : "VD"
      },
      {
        "Commune" : "Romairon",
        "NPA" : 1423,
        "Canton" : "VD"
      },
      {
        "Commune" : "Romanel-sur-Lausanne",
        "NPA" : 1032,
        "Canton" : "VD"
      },
      {
        "Commune" : "Romanel-sur-Morges",
        "NPA" : 1122,
        "Canton" : "VD"
      },
      {
        "Commune" : "Romanens",
        "NPA" : 1626,
        "Canton" : "FR"
      },
      {
        "Commune" : "Romanshorn",
        "NPA" : 8590,
        "Canton" : "TG"
      },
      {
        "Commune" : "Rombach",
        "NPA" : 5022,
        "Canton" : "AG"
      },
      {
        "Commune" : "Romont BE",
        "NPA" : 2538,
        "Canton" : "BE"
      },
      {
        "Commune" : "Romont FR",
        "NPA" : 1680,
        "Canton" : "FR"
      },
      {
        "Commune" : "Romoos",
        "NPA" : 6113,
        "Canton" : "LU"
      },
      {
        "Commune" : "Rona",
        "NPA" : 7454,
        "Canton" : "GR"
      },
      {
        "Commune" : "Ronco sopra Ascona",
        "NPA" : 6622,
        "Canton" : "TI"
      },
      {
        "Commune" : "Rongellen",
        "NPA" : 7430,
        "Canton" : "GR"
      },
      {
        "Commune" : "Root",
        "NPA" : 6037,
        "Canton" : "LU"
      },
      {
        "Commune" : "Root D4",
        "NPA" : 6039,
        "Canton" : "LU"
      },
      {
        "Commune" : "Ropraz",
        "NPA" : 1088,
        "Canton" : "VD"
      },
      {
        "Commune" : "Rorbas",
        "NPA" : 8427,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rorschach",
        "NPA" : 9400,
        "Canton" : "SG"
      },
      {
        "Commune" : "Rorschacherberg",
        "NPA" : 9404,
        "Canton" : "SG"
      },
      {
        "Commune" : "Rosenlaui",
        "NPA" : 3860,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rossa",
        "NPA" : 6548,
        "Canton" : "GR"
      },
      {
        "Commune" : "Rossemaison",
        "NPA" : 2842,
        "Canton" : "JU"
      },
      {
        "Commune" : "Rossenges",
        "NPA" : 1513,
        "Canton" : "VD"
      },
      {
        "Commune" : "Rossens FR",
        "NPA" : 1728,
        "Canton" : "FR"
      },
      {
        "Commune" : "Rossens VD",
        "NPA" : 1554,
        "Canton" : "VD"
      },
      {
        "Commune" : "Rosshäusern",
        "NPA" : 3204,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rossinière",
        "NPA" : 1658,
        "Canton" : "VD"
      },
      {
        "Commune" : "Rossrüti",
        "NPA" : 9512,
        "Canton" : "SG"
      },
      {
        "Commune" : "Rossura",
        "NPA" : 6760,
        "Canton" : "TI"
      },
      {
        "Commune" : "Rosswald",
        "NPA" : 3913,
        "Canton" : "VS"
      },
      {
        "Commune" : "Rosé",
        "NPA" : 1754,
        "Canton" : "FR"
      },
      {
        "Commune" : "Rothenbrunnen",
        "NPA" : 7405,
        "Canton" : "GR"
      },
      {
        "Commune" : "Rothenburg",
        "NPA" : 6023,
        "Canton" : "LU"
      },
      {
        "Commune" : "Rothenfluh",
        "NPA" : 4467,
        "Canton" : "BL"
      },
      {
        "Commune" : "Rothenhausen",
        "NPA" : 9565,
        "Canton" : "TG"
      },
      {
        "Commune" : "Rothenthurm",
        "NPA" : 6418,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Rothrist",
        "NPA" : 4852,
        "Canton" : "AG"
      },
      {
        "Commune" : "Rothwald",
        "NPA" : 3901,
        "Canton" : "VS"
      },
      {
        "Commune" : "Rotkreuz",
        "NPA" : 6343,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Rottenschwil",
        "NPA" : 8919,
        "Canton" : "AG"
      },
      {
        "Commune" : "Rougemont",
        "NPA" : 1659,
        "Canton" : "VD"
      },
      {
        "Commune" : "Roumaz (Savièse)",
        "NPA" : 1965,
        "Canton" : "VS"
      },
      {
        "Commune" : "Roveredo GR",
        "NPA" : 6535,
        "Canton" : "GR"
      },
      {
        "Commune" : "Roveredo TI",
        "NPA" : 6957,
        "Canton" : "TI"
      },
      {
        "Commune" : "Rovio",
        "NPA" : 6821,
        "Canton" : "TI"
      },
      {
        "Commune" : "Rovray",
        "NPA" : 1463,
        "Canton" : "VD"
      },
      {
        "Commune" : "Rubigen",
        "NPA" : 3113,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rudolfingen",
        "NPA" : 8465,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rudolfstetten",
        "NPA" : 8964,
        "Canton" : "AG"
      },
      {
        "Commune" : "Rue",
        "NPA" : 1673,
        "Canton" : "FR"
      },
      {
        "Commune" : "Rueras",
        "NPA" : 7189,
        "Canton" : "GR"
      },
      {
        "Commune" : "Rueun",
        "NPA" : 7156,
        "Canton" : "GR"
      },
      {
        "Commune" : "Rueyres",
        "NPA" : 1046,
        "Canton" : "VD"
      },
      {
        "Commune" : "Rueyres-St-Laurent",
        "NPA" : 1695,
        "Canton" : "FR"
      },
      {
        "Commune" : "Rueyres-Treyfayes",
        "NPA" : 1626,
        "Canton" : "FR"
      },
      {
        "Commune" : "Rueyres-les-Prés",
        "NPA" : 1542,
        "Canton" : "FR"
      },
      {
        "Commune" : "Rufi",
        "NPA" : 8723,
        "Canton" : "SG"
      },
      {
        "Commune" : "Ruggell",
        "NPA" : 9491,
        "Canton" : "LI"
      },
      {
        "Commune" : "Rumendingen",
        "NPA" : 3472,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rumisberg",
        "NPA" : 4539,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rumlikon",
        "NPA" : 8332,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Rupperswil",
        "NPA" : 5102,
        "Canton" : "AG"
      },
      {
        "Commune" : "Ruppoldsried",
        "NPA" : 3251,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ruschein",
        "NPA" : 7154,
        "Canton" : "GR"
      },
      {
        "Commune" : "Russikon",
        "NPA" : 8332,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Russin",
        "NPA" : 1281,
        "Canton" : "GE"
      },
      {
        "Commune" : "Russo",
        "NPA" : 6662,
        "Canton" : "TI"
      },
      {
        "Commune" : "Russy",
        "NPA" : 1773,
        "Canton" : "FR"
      },
      {
        "Commune" : "Ruswil",
        "NPA" : 6017,
        "Canton" : "LU"
      },
      {
        "Commune" : "Rutschwil (Dägerlen)",
        "NPA" : 8471,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ruvigliana",
        "NPA" : 6977,
        "Canton" : "TI"
      },
      {
        "Commune" : "Rämismühle",
        "NPA" : 8487,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Réchy",
        "NPA" : 3966,
        "Canton" : "VS"
      },
      {
        "Commune" : "Réclère",
        "NPA" : 2912,
        "Canton" : "JU"
      },
      {
        "Commune" : "Römerswil LU",
        "NPA" : 6027,
        "Canton" : "LU"
      },
      {
        "Commune" : "Röschenz",
        "NPA" : 4244,
        "Canton" : "BL"
      },
      {
        "Commune" : "Röthenbach Herzogenbuchsee",
        "NPA" : 3373,
        "Canton" : "BE"
      },
      {
        "Commune" : "Röthenbach im Emmental",
        "NPA" : 3538,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüderswil",
        "NPA" : 3437,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüdlingen",
        "NPA" : 8455,
        "Canton" : "SH"
      },
      {
        "Commune" : "Rüdtligen",
        "NPA" : 3422,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüedisbach",
        "NPA" : 3474,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüeggisberg",
        "NPA" : 3088,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüegsau",
        "NPA" : 3417,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüegsauschachen",
        "NPA" : 3415,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüegsbach",
        "NPA" : 3418,
        "Canton" : "BE"
      },
      {
        "Commune" : "Rüeterswil",
        "NPA" : 8735,
        "Canton" : "SG"
      },
      {
        "Commune" : "Rüfenach AG",
        "NPA" : 5235,
        "Canton" : "AG"
      },
      {
        "Commune" : "Aadorf",
        "NPA" : 8355,
        "Canton" : "TG"
      },
      {
        "Commune" : "Aarau",
        "NPA" : 5000,
        "Canton" : "AG"
      },
      {
        "Commune" : "Aarau",
        "NPA" : 5004,
        "Canton" : "AG"
      },
      {
        "Commune" : "Aarau Rohr",
        "NPA" : 5032,
        "Canton" : "AG"
      },
      {
        "Commune" : "Aarberg",
        "NPA" : 3270,
        "Canton" : "BE"
      },
      {
        "Commune" : "Aarburg",
        "NPA" : 4663,
        "Canton" : "AG"
      },
      {
        "Commune" : "Aarwangen",
        "NPA" : 4912,
        "Canton" : "BE"
      },
      {
        "Commune" : "Aathal-Seegräben",
        "NPA" : 8607,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Aawangen",
        "NPA" : 8522,
        "Canton" : "TG"
      },
      {
        "Commune" : "Abländschen",
        "NPA" : 1657,
        "Canton" : "BE"
      },
      {
        "Commune" : "Abtwil AG",
        "NPA" : 5646,
        "Canton" : "AG"
      },
      {
        "Commune" : "Abtwil SG",
        "NPA" : 9030,
        "Canton" : "SG"
      },
      {
        "Commune" : "Achseten",
        "NPA" : 3725,
        "Canton" : "BE"
      },
      {
        "Commune" : "Aclens",
        "NPA" : 1123,
        "Canton" : "VD"
      },
      {
        "Commune" : "Acquarossa",
        "NPA" : 6716,
        "Canton" : "TI"
      },
      {
        "Commune" : "Adelboden",
        "NPA" : 3715,
        "Canton" : "BE"
      },
      {
        "Commune" : "Adetswil",
        "NPA" : 8345,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Adligenswil",
        "NPA" : 6043,
        "Canton" : "LU"
      },
      {
        "Commune" : "Adlikon b. Andelfingen",
        "NPA" : 8452,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Adlikon b. Regensdorf",
        "NPA" : 8106,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Adliswil",
        "NPA" : 8134,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Aedermannsdorf",
        "NPA" : 4714,
        "Canton" : "SO"
      },
      {
        "Commune" : "Aefligen",
        "NPA" : 3426,
        "Canton" : "BE"
      },
      {
        "Commune" : "Aegerten",
        "NPA" : 2558,
        "Canton" : "BE"
      },
      {
        "Commune" : "Aesch (Neftenbach)",
        "NPA" : 8412,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Aesch BL",
        "NPA" : 4147,
        "Canton" : "BL"
      },
      {
        "Commune" : "Aesch LU",
        "NPA" : 6287,
        "Canton" : "LU"
      },
      {
        "Commune" : "Aesch ZH",
        "NPA" : 8904,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Aeschau",
        "NPA" : 3536,
        "Canton" : "BE"
      },
      {
        "Commune" : "Aeschi SO",
        "NPA" : 4556,
        "Canton" : "SO"
      },
      {
        "Commune" : "Aeschi b. Spiez",
        "NPA" : 3703,
        "Canton" : "BE"
      },
      {
        "Commune" : "Aeschiried",
        "NPA" : 3703,
        "Canton" : "BE"
      },
      {
        "Commune" : "Aeschlen b. Oberdiessbach",
        "NPA" : 3672,
        "Canton" : "BE"
      },
      {
        "Commune" : "Aeschlen ob Gunten",
        "NPA" : 3656,
        "Canton" : "BE"
      },
      {
        "Commune" : "Aetigkofen",
        "NPA" : 4583,
        "Canton" : "SO"
      },
      {
        "Commune" : "Aetingen",
        "NPA" : 4587,
        "Canton" : "SO"
      },
      {
        "Commune" : "Aettenschwil",
        "NPA" : 5645,
        "Canton" : "AG"
      },
      {
        "Commune" : "Aeugst am Albis",
        "NPA" : 8914,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Aeugstertal",
        "NPA" : 8914,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Affeltrangen",
        "NPA" : 9556,
        "Canton" : "TG"
      },
      {
        "Commune" : "Affoltern am Albis",
        "NPA" : 8910,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Affoltern im Emmental",
        "NPA" : 3416,
        "Canton" : "BE"
      },
      {
        "Commune" : "Agarn",
        "NPA" : 3951,
        "Canton" : "VS"
      },
      {
        "Commune" : "Agarone",
        "NPA" : 6597,
        "Canton" : "TI"
      },
      {
        "Commune" : "Agasul",
        "NPA" : 8308,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Agiez",
        "NPA" : 1352,
        "Canton" : "VD"
      },
      {
        "Commune" : "Agno",
        "NPA" : 6982,
        "Canton" : "TI"
      },
      {
        "Commune" : "Agra",
        "NPA" : 6927,
        "Canton" : "TI"
      },
      {
        "Commune" : "Agriswil",
        "NPA" : 3216,
        "Canton" : "FR"
      },
      {
        "Commune" : "Aigle",
        "NPA" : 1860,
        "Canton" : "VD"
      },
      {
        "Commune" : "Aire-la-Ville",
        "NPA" : 1288,
        "Canton" : "GE"
      },
      {
        "Commune" : "Airolo",
        "NPA" : 6780,
        "Canton" : "TI"
      },
      {
        "Commune" : "Alberswil",
        "NPA" : 6248,
        "Canton" : "LU"
      },
      {
        "Commune" : "Albeuve",
        "NPA" : 1669,
        "Canton" : "FR"
      },
      {
        "Commune" : "Albinen",
        "NPA" : 3955,
        "Canton" : "VS"
      },
      {
        "Commune" : "Albligen",
        "NPA" : 3183,
        "Canton" : "BE"
      },
      {
        "Commune" : "Alchenflüh",
        "NPA" : 3422,
        "Canton" : "BE"
      },
      {
        "Commune" : "Alchenstorf",
        "NPA" : 3473,
        "Canton" : "BE"
      },
      {
        "Commune" : "Aldesago",
        "NPA" : 6974,
        "Canton" : "TI"
      },
      {
        "Commune" : "Algetshausen",
        "NPA" : 9249,
        "Canton" : "SG"
      },
      {
        "Commune" : "Alikon",
        "NPA" : 5643,
        "Canton" : "AG"
      },
      {
        "Commune" : "Allaman",
        "NPA" : 1165,
        "Canton" : "VD"
      },
      {
        "Commune" : "Alle",
        "NPA" : 2942,
        "Canton" : "JU"
      },
      {
        "Commune" : "Allens",
        "NPA" : 1304,
        "Canton" : "VD"
      },
      {
        "Commune" : "Allenwinden",
        "NPA" : 6319,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Allerheiligenberg",
        "NPA" : 4615,
        "Canton" : "SO"
      },
      {
        "Commune" : "Allmendingen b. Bern",
        "NPA" : 3112,
        "Canton" : "BE"
      },
      {
        "Commune" : "Allschwil",
        "NPA" : 4123,
        "Canton" : "BL"
      },
      {
        "Commune" : "Almens",
        "NPA" : 7416,
        "Canton" : "GR"
      },
      {
        "Commune" : "Alosen",
        "NPA" : 6315,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Alp Grüm",
        "NPA" : 7710,
        "Canton" : "GR"
      },
      {
        "Commune" : "Alpnach Dorf",
        "NPA" : 6055,
        "Canton" : "OW"
      },
      {
        "Commune" : "Alpnachstad",
        "NPA" : 6053,
        "Canton" : "OW"
      },
      {
        "Commune" : "Alpthal",
        "NPA" : 8849,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Alt St. Johann",
        "NPA" : 9656,
        "Canton" : "SG"
      },
      {
        "Commune" : "Altbüron",
        "NPA" : 6147,
        "Canton" : "LU"
      },
      {
        "Commune" : "Altdorf SH",
        "NPA" : 8243,
        "Canton" : "SH"
      },
      {
        "Commune" : "Altdorf UR",
        "NPA" : 6460,
        "Canton" : "UR"
      },
      {
        "Commune" : "Alten",
        "NPA" : 8453,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Altendorf",
        "NPA" : 8852,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Altenrhein",
        "NPA" : 9423,
        "Canton" : "SG"
      },
      {
        "Commune" : "Alterswil FR",
        "NPA" : 1715,
        "Canton" : "FR"
      },
      {
        "Commune" : "Alterswilen",
        "NPA" : 8573,
        "Canton" : "TG"
      },
      {
        "Commune" : "Altikon",
        "NPA" : 8479,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Altishausen",
        "NPA" : 8573,
        "Canton" : "TG"
      },
      {
        "Commune" : "Altishofen",
        "NPA" : 6246,
        "Canton" : "LU"
      },
      {
        "Commune" : "Altnau",
        "NPA" : 8595,
        "Canton" : "TG"
      },
      {
        "Commune" : "Altstätten SG",
        "NPA" : 9450,
        "Canton" : "SG"
      },
      {
        "Commune" : "Altwis",
        "NPA" : 6286,
        "Canton" : "LU"
      },
      {
        "Commune" : "Alvaneu Bad",
        "NPA" : 7473,
        "Canton" : "GR"
      },
      {
        "Commune" : "Alvaneu Dorf",
        "NPA" : 7492,
        "Canton" : "GR"
      },
      {
        "Commune" : "Alvaschein",
        "NPA" : 7451,
        "Canton" : "GR"
      },
      {
        "Commune" : "Am Bach (Avers)",
        "NPA" : 7447,
        "Canton" : "GR"
      },
      {
        "Commune" : "Ambrì",
        "NPA" : 6775,
        "Canton" : "TI"
      },
      {
        "Commune" : "Amden",
        "NPA" : 8873,
        "Canton" : "SG"
      },
      {
        "Commune" : "Aminona",
        "NPA" : 3963,
        "Canton" : "VS"
      },
      {
        "Commune" : "Amlikon-Bissegg",
        "NPA" : 8514,
        "Canton" : "TG"
      },
      {
        "Commune" : "Ammerswil AG",
        "NPA" : 5600,
        "Canton" : "AG"
      },
      {
        "Commune" : "Ammerzwil BE",
        "NPA" : 3257,
        "Canton" : "BE"
      },
      {
        "Commune" : "Amriswil",
        "NPA" : 8580,
        "Canton" : "TG"
      },
      {
        "Commune" : "Amsoldingen",
        "NPA" : 3633,
        "Canton" : "BE"
      },
      {
        "Commune" : "Amsteg",
        "NPA" : 6474,
        "Canton" : "UR"
      },
      {
        "Commune" : "Andeer",
        "NPA" : 7440,
        "Canton" : "GR"
      },
      {
        "Commune" : "Andelfingen",
        "NPA" : 8450,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Andermatt",
        "NPA" : 6490,
        "Canton" : "UR"
      },
      {
        "Commune" : "Andhausen",
        "NPA" : 8572,
        "Canton" : "TG"
      },
      {
        "Commune" : "Andiast",
        "NPA" : 7159,
        "Canton" : "GR"
      },
      {
        "Commune" : "Andwil SG",
        "NPA" : 9204,
        "Canton" : "SG"
      },
      {
        "Commune" : "Andwil TG",
        "NPA" : 8586,
        "Canton" : "TG"
      },
      {
        "Commune" : "Anglikon",
        "NPA" : 5611,
        "Canton" : "AG"
      },
      {
        "Commune" : "Anières",
        "NPA" : 1247,
        "Canton" : "GE"
      },
      {
        "Commune" : "Anwil",
        "NPA" : 4469,
        "Canton" : "BL"
      },
      {
        "Commune" : "Anzonico",
        "NPA" : 6748,
        "Canton" : "TI"
      },
      {
        "Commune" : "Anzère",
        "NPA" : 1972,
        "Canton" : "VS"
      },
      {
        "Commune" : "Appenzell",
        "NPA" : 9050,
        "Canton" : "AI"
      },
      {
        "Commune" : "Appenzell Eggerstanden",
        "NPA" : 9050,
        "Canton" : "AI"
      },
      {
        "Commune" : "Appenzell Enggenhütten",
        "NPA" : 9050,
        "Canton" : "AI"
      },
      {
        "Commune" : "Appenzell Meistersrüte",
        "NPA" : 9050,
        "Canton" : "AI"
      },
      {
        "Commune" : "Appenzell Schlatt",
        "NPA" : 9050,
        "Canton" : "AI"
      },
      {
        "Commune" : "Appenzell Steinegg",
        "NPA" : 9050,
        "Canton" : "AI"
      },
      {
        "Commune" : "Apples",
        "NPA" : 1143,
        "Canton" : "VD"
      },
      {
        "Commune" : "Aproz (Nendaz)",
        "NPA" : 1994,
        "Canton" : "VS"
      },
      {
        "Commune" : "Aquila",
        "NPA" : 6719,
        "Canton" : "TI"
      },
      {
        "Commune" : "Aran",
        "NPA" : 1091,
        "Canton" : "VD"
      },
      {
        "Commune" : "Aranno",
        "NPA" : 6994,
        "Canton" : "TI"
      },
      {
        "Commune" : "Arbaz",
        "NPA" : 1974,
        "Canton" : "VS"
      },
      {
        "Commune" : "Arbedo",
        "NPA" : 6517,
        "Canton" : "TI"
      },
      {
        "Commune" : "Arboldswil",
        "NPA" : 4424,
        "Canton" : "BL"
      },
      {
        "Commune" : "Arbon",
        "NPA" : 9320,
        "Canton" : "TG"
      },
      {
        "Commune" : "Arcegno",
        "NPA" : 6618,
        "Canton" : "TI"
      },
      {
        "Commune" : "Arch",
        "NPA" : 3296,
        "Canton" : "BE"
      },
      {
        "Commune" : "Arconciel",
        "NPA" : 1732,
        "Canton" : "FR"
      },
      {
        "Commune" : "Ardez",
        "NPA" : 7546,
        "Canton" : "GR"
      },
      {
        "Commune" : "Ardon",
        "NPA" : 1957,
        "Canton" : "VS"
      },
      {
        "Commune" : "Areuse",
        "NPA" : 2015,
        "Canton" : "NE"
      },
      {
        "Commune" : "Arezen",
        "NPA" : 7104,
        "Canton" : "GR"
      },
      {
        "Commune" : "Argnou (Ayent)",
        "NPA" : 1966,
        "Canton" : "VS"
      },
      {
        "Commune" : "Arisdorf",
        "NPA" : 4422,
        "Canton" : "BL"
      },
      {
        "Commune" : "Aristau",
        "NPA" : 5628,
        "Canton" : "AG"
      },
      {
        "Commune" : "Arlesheim",
        "NPA" : 4144,
        "Canton" : "BL"
      },
      {
        "Commune" : "Arnegg",
        "NPA" : 9212,
        "Canton" : "SG"
      },
      {
        "Commune" : "Arnex-sur-Nyon",
        "NPA" : 1277,
        "Canton" : "VD"
      },
      {
        "Commune" : "Arnex-sur-Orbe",
        "NPA" : 1321,
        "Canton" : "VD"
      },
      {
        "Commune" : "Arni AG",
        "NPA" : 8905,
        "Canton" : "AG"
      },
      {
        "Commune" : "Arni BE",
        "NPA" : 3508,
        "Canton" : "BE"
      },
      {
        "Commune" : "Arogno",
        "NPA" : 6822,
        "Canton" : "TI"
      },
      {
        "Commune" : "Arolla",
        "NPA" : 1986,
        "Canton" : "VS"
      },
      {
        "Commune" : "Arosa",
        "NPA" : 7050,
        "Canton" : "GR"
      },
      {
        "Commune" : "Arosio",
        "NPA" : 6939,
        "Canton" : "TI"
      },
      {
        "Commune" : "Arth",
        "NPA" : 6415,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Arveyes",
        "NPA" : 1884,
        "Canton" : "VD"
      },
      {
        "Commune" : "Arvigo",
        "NPA" : 6543,
        "Canton" : "GR"
      },
      {
        "Commune" : "Arvillard (Salins)",
        "NPA" : 1991,
        "Canton" : "VS"
      },
      {
        "Commune" : "Arzier-Le Muids",
        "NPA" : 1273,
        "Canton" : "VD"
      },
      {
        "Commune" : "Arzo",
        "NPA" : 6864,
        "Canton" : "TI"
      },
      {
        "Commune" : "Ascharina",
        "NPA" : 7245,
        "Canton" : "GR"
      },
      {
        "Commune" : "Ascona",
        "NPA" : 6612,
        "Canton" : "TI"
      },
      {
        "Commune" : "Asp",
        "NPA" : 5025,
        "Canton" : "AG"
      },
      {
        "Commune" : "Assens",
        "NPA" : 1042,
        "Canton" : "VD"
      },
      {
        "Commune" : "Astano",
        "NPA" : 6999,
        "Canton" : "TI"
      },
      {
        "Commune" : "Asuel",
        "NPA" : 2954,
        "Canton" : "JU"
      },
      {
        "Commune" : "Athenaz (Avusy)",
        "NPA" : 1285,
        "Canton" : "GE"
      },
      {
        "Commune" : "Attalens",
        "NPA" : 1616,
        "Canton" : "FR"
      },
      {
        "Commune" : "Attelwil",
        "NPA" : 5056,
        "Canton" : "AG"
      },
      {
        "Commune" : "Attikon",
        "NPA" : 8544,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Attinghausen",
        "NPA" : 6468,
        "Canton" : "UR"
      },
      {
        "Commune" : "Attiswil",
        "NPA" : 4536,
        "Canton" : "BE"
      },
      {
        "Commune" : "Au SG",
        "NPA" : 9434,
        "Canton" : "SG"
      },
      {
        "Commune" : "Au TG",
        "NPA" : 8376,
        "Canton" : "TG"
      },
      {
        "Commune" : "Au ZH",
        "NPA" : 8804,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Aubonne",
        "NPA" : 1170,
        "Canton" : "VD"
      },
      {
        "Commune" : "Auboranges",
        "NPA" : 1673,
        "Canton" : "FR"
      },
      {
        "Commune" : "Auddes-sur-Riddes",
        "NPA" : 1914,
        "Canton" : "VS"
      },
      {
        "Commune" : "Auenstein",
        "NPA" : 5105,
        "Canton" : "AG"
      },
      {
        "Commune" : "Augio",
        "NPA" : 6547,
        "Canton" : "GR"
      },
      {
        "Commune" : "Augst BL",
        "NPA" : 4302,
        "Canton" : "BL"
      },
      {
        "Commune" : "Aumont",
        "NPA" : 1484,
        "Canton" : "FR"
      },
      {
        "Commune" : "Auressio",
        "NPA" : 6661,
        "Canton" : "TI"
      },
      {
        "Commune" : "Aurigeno",
        "NPA" : 6677,
        "Canton" : "TI"
      },
      {
        "Commune" : "Auslikon",
        "NPA" : 8331,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ausserberg",
        "NPA" : 3938,
        "Canton" : "VS"
      },
      {
        "Commune" : "Ausserbinn",
        "NPA" : 3995,
        "Canton" : "VS"
      },
      {
        "Commune" : "Ausserferrera",
        "NPA" : 7444,
        "Canton" : "GR"
      },
      {
        "Commune" : "Auswil",
        "NPA" : 4944,
        "Canton" : "BE"
      },
      {
        "Commune" : "Autafond",
        "NPA" : 1782,
        "Canton" : "FR"
      },
      {
        "Commune" : "Autavaux",
        "NPA" : 1475,
        "Canton" : "FR"
      },
      {
        "Commune" : "Autigny",
        "NPA" : 1742,
        "Canton" : "FR"
      },
      {
        "Commune" : "Auvernier",
        "NPA" : 2012,
        "Canton" : "NE"
      },
      {
        "Commune" : "Auw",
        "NPA" : 5644,
        "Canton" : "AG"
      },
      {
        "Commune" : "Avegno",
        "NPA" : 6670,
        "Canton" : "TI"
      },
      {
        "Commune" : "Aven",
        "NPA" : 1976,
        "Canton" : "VS"
      },
      {
        "Commune" : "Avenches",
        "NPA" : 1580,
        "Canton" : "VD"
      },
      {
        "Commune" : "Avry-devant-Pont",
        "NPA" : 1644,
        "Canton" : "FR"
      },
      {
        "Commune" : "Avry-sur-Matran",
        "NPA" : 1754,
        "Canton" : "FR"
      },
      {
        "Commune" : "Avully",
        "NPA" : 1237,
        "Canton" : "GE"
      },
      {
        "Commune" : "Axalp",
        "NPA" : 3855,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ayer",
        "NPA" : 3961,
        "Canton" : "VS"
      },
      {
        "Commune" : "Azmoos",
        "NPA" : 9478,
        "Canton" : "SG"
      },
      {
        "Commune" : "Aïre",
        "NPA" : 1219,
        "Canton" : "GE"
      },
      {
        "Commune" : "Baar",
        "NPA" : 6340,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Baar (Nendaz)",
        "NPA" : 1996,
        "Canton" : "VS"
      },
      {
        "Commune" : "Bachenbülach",
        "NPA" : 8184,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bachs",
        "NPA" : 8164,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bad Ragaz",
        "NPA" : 7310,
        "Canton" : "SG"
      },
      {
        "Commune" : "Bad Zurzach",
        "NPA" : 5330,
        "Canton" : "AG"
      },
      {
        "Commune" : "Baden",
        "NPA" : 5404,
        "Canton" : "AG"
      },
      {
        "Commune" : "Baden",
        "NPA" : 5400,
        "Canton" : "AG"
      },
      {
        "Commune" : "Baldegg",
        "NPA" : 6283,
        "Canton" : "LU"
      },
      {
        "Commune" : "Baldingen",
        "NPA" : 5333,
        "Canton" : "AG"
      },
      {
        "Commune" : "Balerna",
        "NPA" : 6828,
        "Canton" : "TI"
      },
      {
        "Commune" : "Balgach",
        "NPA" : 9436,
        "Canton" : "SG"
      },
      {
        "Commune" : "Ballaigues",
        "NPA" : 1338,
        "Canton" : "VD"
      },
      {
        "Commune" : "Ballens",
        "NPA" : 1144,
        "Canton" : "VD"
      },
      {
        "Commune" : "Ballmoos",
        "NPA" : 3303,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ballwil",
        "NPA" : 6275,
        "Canton" : "LU"
      },
      {
        "Commune" : "Balm b. Günsberg",
        "NPA" : 4525,
        "Canton" : "SO"
      },
      {
        "Commune" : "Balm b. Messen",
        "NPA" : 3254,
        "Canton" : "SO"
      },
      {
        "Commune" : "Balmberg",
        "NPA" : 4524,
        "Canton" : "SO"
      },
      {
        "Commune" : "Balsthal",
        "NPA" : 4710,
        "Canton" : "SO"
      },
      {
        "Commune" : "Balterswil",
        "NPA" : 8362,
        "Canton" : "TG"
      },
      {
        "Commune" : "Baltschieder",
        "NPA" : 3937,
        "Canton" : "VS"
      },
      {
        "Commune" : "Balzers",
        "NPA" : 9496,
        "Canton" : "LI"
      },
      {
        "Commune" : "Banco",
        "NPA" : 6981,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bangerten b. Dieterswil",
        "NPA" : 3256,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bannwil",
        "NPA" : 4913,
        "Canton" : "BE"
      },
      {
        "Commune" : "Barbengo",
        "NPA" : 6917,
        "Canton" : "TI"
      },
      {
        "Commune" : "Barberêche",
        "NPA" : 1783,
        "Canton" : "FR"
      },
      {
        "Commune" : "Bargen BE",
        "NPA" : 3282,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bargen SH",
        "NPA" : 8233,
        "Canton" : "SH"
      },
      {
        "Commune" : "Barmelweid",
        "NPA" : 5017,
        "Canton" : "AG"
      },
      {
        "Commune" : "Barzheim",
        "NPA" : 8241,
        "Canton" : "SH"
      },
      {
        "Commune" : "Basadingen",
        "NPA" : 8254,
        "Canton" : "TG"
      },
      {
        "Commune" : "Basel",
        "NPA" : 4051,
        "Canton" : "BS"
      },
      {
        "Commune" : "Basel",
        "NPA" : 4055,
        "Canton" : "BS"
      },
      {
        "Commune" : "Basel",
        "NPA" : 4052,
        "Canton" : "BS"
      },
      {
        "Commune" : "Basel",
        "NPA" : 4054,
        "Canton" : "BS"
      },
      {
        "Commune" : "Basel",
        "NPA" : 4001,
        "Canton" : "BS"
      },
      {
        "Commune" : "Basel",
        "NPA" : 4059,
        "Canton" : "BS"
      },
      {
        "Commune" : "Basel",
        "NPA" : 4053,
        "Canton" : "BS"
      },
      {
        "Commune" : "Basel",
        "NPA" : 4058,
        "Canton" : "BS"
      },
      {
        "Commune" : "Basel",
        "NPA" : 4057,
        "Canton" : "BS"
      },
      {
        "Commune" : "Basel",
        "NPA" : 4056,
        "Canton" : "BS"
      },
      {
        "Commune" : "Basse-Nendaz",
        "NPA" : 1996,
        "Canton" : "VS"
      },
      {
        "Commune" : "Bassecourt",
        "NPA" : 2854,
        "Canton" : "JU"
      },
      {
        "Commune" : "Bassersdorf",
        "NPA" : 8303,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bassins",
        "NPA" : 1269,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bauen",
        "NPA" : 6466,
        "Canton" : "UR"
      },
      {
        "Commune" : "Baulmes",
        "NPA" : 1446,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bauma",
        "NPA" : 8494,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bavois",
        "NPA" : 1372,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bazenheid",
        "NPA" : 9602,
        "Canton" : "SG"
      },
      {
        "Commune" : "Beatenberg",
        "NPA" : 3803,
        "Canton" : "BE"
      },
      {
        "Commune" : "Beckenried",
        "NPA" : 6375,
        "Canton" : "NW"
      },
      {
        "Commune" : "Bedano",
        "NPA" : 6930,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bedigliora",
        "NPA" : 6981,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bedretto",
        "NPA" : 6781,
        "Canton" : "TI"
      },
      {
        "Commune" : "Beggingen",
        "NPA" : 8228,
        "Canton" : "SH"
      },
      {
        "Commune" : "Begnins",
        "NPA" : 1268,
        "Canton" : "VD"
      },
      {
        "Commune" : "Beinwil (Freiamt)",
        "NPA" : 5637,
        "Canton" : "AG"
      },
      {
        "Commune" : "Beinwil SO",
        "NPA" : 4229,
        "Canton" : "SO"
      },
      {
        "Commune" : "Beinwil am See",
        "NPA" : 5712,
        "Canton" : "AG"
      },
      {
        "Commune" : "Belalp",
        "NPA" : 3914,
        "Canton" : "VS"
      },
      {
        "Commune" : "Belfaux",
        "NPA" : 1782,
        "Canton" : "FR"
      },
      {
        "Commune" : "Bellach",
        "NPA" : 4512,
        "Canton" : "SO"
      },
      {
        "Commune" : "Bellelay",
        "NPA" : 2713,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bellerive VD",
        "NPA" : 1585,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bellevue",
        "NPA" : 1293,
        "Canton" : "GE"
      },
      {
        "Commune" : "Bellikon",
        "NPA" : 5454,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bellinzona",
        "NPA" : 6503,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bellinzona",
        "NPA" : 6500,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bellmund",
        "NPA" : 2564,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bellwald",
        "NPA" : 3997,
        "Canton" : "VS"
      },
      {
        "Commune" : "Belmont-sur-Lausanne",
        "NPA" : 1092,
        "Canton" : "VD"
      },
      {
        "Commune" : "Belmont-sur-Yverdon",
        "NPA" : 1432,
        "Canton" : "VD"
      },
      {
        "Commune" : "Belp",
        "NPA" : 3123,
        "Canton" : "BE"
      },
      {
        "Commune" : "Belpberg",
        "NPA" : 3124,
        "Canton" : "BE"
      },
      {
        "Commune" : "Belprahon",
        "NPA" : 2744,
        "Canton" : "BE"
      },
      {
        "Commune" : "Benglen",
        "NPA" : 8121,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Benken SG",
        "NPA" : 8717,
        "Canton" : "SG"
      },
      {
        "Commune" : "Benken ZH",
        "NPA" : 8463,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bennau",
        "NPA" : 8836,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Bennwil",
        "NPA" : 4431,
        "Canton" : "BL"
      },
      {
        "Commune" : "Benzenschwil",
        "NPA" : 5636,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bercher",
        "NPA" : 1038,
        "Canton" : "VD"
      },
      {
        "Commune" : "Berg (Dägerlen)",
        "NPA" : 8471,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Berg SG",
        "NPA" : 9305,
        "Canton" : "SG"
      },
      {
        "Commune" : "Berg TG",
        "NPA" : 8572,
        "Canton" : "TG"
      },
      {
        "Commune" : "Berg am Irchel",
        "NPA" : 8415,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bergdietikon",
        "NPA" : 8962,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bergün/Bravuogn",
        "NPA" : 7482,
        "Canton" : "GR"
      },
      {
        "Commune" : "Berikon",
        "NPA" : 8965,
        "Canton" : "AG"
      },
      {
        "Commune" : "Beringen",
        "NPA" : 8222,
        "Canton" : "SH"
      },
      {
        "Commune" : "Berken",
        "NPA" : 3376,
        "Canton" : "BE"
      },
      {
        "Commune" : "Berlens",
        "NPA" : 1680,
        "Canton" : "FR"
      },
      {
        "Commune" : "Berlingen",
        "NPA" : 8267,
        "Canton" : "TG"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3011,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3018,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3015,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3005,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3006,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3008,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3014,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3013,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3010,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3004,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3012,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3020,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3007,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3027,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bern",
        "NPA" : 3019,
        "Canton" : "BE"
      },
      {
        "Commune" : "Berneck",
        "NPA" : 9442,
        "Canton" : "SG"
      },
      {
        "Commune" : "Bernex",
        "NPA" : 1233,
        "Canton" : "GE"
      },
      {
        "Commune" : "Bernhardzell",
        "NPA" : 9304,
        "Canton" : "SG"
      },
      {
        "Commune" : "Berolle",
        "NPA" : 1149,
        "Canton" : "VD"
      },
      {
        "Commune" : "Beromünster",
        "NPA" : 6215,
        "Canton" : "LU"
      },
      {
        "Commune" : "Berschis",
        "NPA" : 8892,
        "Canton" : "SG"
      },
      {
        "Commune" : "Bertschikon",
        "NPA" : 8543,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bertschikon (Gossau ZH)",
        "NPA" : 8614,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Berzona",
        "NPA" : 6661,
        "Canton" : "TI"
      },
      {
        "Commune" : "Besazio",
        "NPA" : 6863,
        "Canton" : "TI"
      },
      {
        "Commune" : "Besenbüren",
        "NPA" : 5627,
        "Canton" : "AG"
      },
      {
        "Commune" : "Besencens",
        "NPA" : 1609,
        "Canton" : "FR"
      },
      {
        "Commune" : "Betschwanden",
        "NPA" : 8777,
        "Canton" : "GL"
      },
      {
        "Commune" : "Betten",
        "NPA" : 3991,
        "Canton" : "VS"
      },
      {
        "Commune" : "Bettenhausen",
        "NPA" : 3366,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bettens",
        "NPA" : 1042,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bettingen",
        "NPA" : 4126,
        "Canton" : "BS"
      },
      {
        "Commune" : "Bettlach",
        "NPA" : 2544,
        "Canton" : "SO"
      },
      {
        "Commune" : "Bettmeralp",
        "NPA" : 3992,
        "Canton" : "VS"
      },
      {
        "Commune" : "Bettwiesen",
        "NPA" : 9553,
        "Canton" : "TG"
      },
      {
        "Commune" : "Bettwil",
        "NPA" : 5618,
        "Canton" : "AG"
      },
      {
        "Commune" : "Beurnevésin",
        "NPA" : 2935,
        "Canton" : "JU"
      },
      {
        "Commune" : "Beuson (Nendaz)",
        "NPA" : 1996,
        "Canton" : "VS"
      },
      {
        "Commune" : "Bevaix",
        "NPA" : 2022,
        "Canton" : "NE"
      },
      {
        "Commune" : "Bever",
        "NPA" : 7502,
        "Canton" : "GR"
      },
      {
        "Commune" : "Bex",
        "NPA" : 1880,
        "Canton" : "VD"
      },
      {
        "Commune" : "Biasca",
        "NPA" : 6710,
        "Canton" : "TI"
      },
      {
        "Commune" : "Biberen",
        "NPA" : 3206,
        "Canton" : "BE"
      },
      {
        "Commune" : "Biberist",
        "NPA" : 4562,
        "Canton" : "SO"
      },
      {
        "Commune" : "Bibern SH",
        "NPA" : 8242,
        "Canton" : "SH"
      },
      {
        "Commune" : "Bibern SO",
        "NPA" : 4578,
        "Canton" : "SO"
      },
      {
        "Commune" : "Biberstein",
        "NPA" : 5023,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bichelsee",
        "NPA" : 8363,
        "Canton" : "TG"
      },
      {
        "Commune" : "Bichwil",
        "NPA" : 9248,
        "Canton" : "SG"
      },
      {
        "Commune" : "Bidogno",
        "NPA" : 6958,
        "Canton" : "TI"
      },
      {
        "Commune" : "Biel VS",
        "NPA" : 3989,
        "Canton" : "VS"
      },
      {
        "Commune" : "Biel-Benken BL",
        "NPA" : 4105,
        "Canton" : "BL"
      },
      {
        "Commune" : "Biel/Bienne",
        "NPA" : 2503,
        "Canton" : "BE"
      },
      {
        "Commune" : "Biel/Bienne",
        "NPA" : 2504,
        "Canton" : "BE"
      },
      {
        "Commune" : "Biel/Bienne",
        "NPA" : 2502,
        "Canton" : "BE"
      },
      {
        "Commune" : "Biel/Bienne",
        "NPA" : 2505,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bielersee",
        "NPA" : 9999,
        "Canton" : "BE"
      },
      {
        "Commune" : "Biembach im Emmental",
        "NPA" : 3419,
        "Canton" : "BE"
      },
      {
        "Commune" : "Biessenhofen",
        "NPA" : 8580,
        "Canton" : "TG"
      },
      {
        "Commune" : "Bieudron (Nendaz)",
        "NPA" : 1996,
        "Canton" : "VS"
      },
      {
        "Commune" : "Biezwil",
        "NPA" : 4585,
        "Canton" : "SO"
      },
      {
        "Commune" : "Bigenthal",
        "NPA" : 3513,
        "Canton" : "BE"
      },
      {
        "Commune" : "Biglen",
        "NPA" : 3507,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bignasco",
        "NPA" : 6676,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bigorio",
        "NPA" : 6954,
        "Canton" : "TI"
      },
      {
        "Commune" : "Billens",
        "NPA" : 1681,
        "Canton" : "FR"
      },
      {
        "Commune" : "Bilten",
        "NPA" : 8865,
        "Canton" : "GL"
      },
      {
        "Commune" : "Binn",
        "NPA" : 3996,
        "Canton" : "VS"
      },
      {
        "Commune" : "Binningen",
        "NPA" : 4102,
        "Canton" : "BL"
      },
      {
        "Commune" : "Binz",
        "NPA" : 8122,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bioggio",
        "NPA" : 6934,
        "Canton" : "TI"
      },
      {
        "Commune" : "Biogno-Beride",
        "NPA" : 6981,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bioley-Magnoux",
        "NPA" : 1407,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bioley-Orjulaz",
        "NPA" : 1042,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bionnens",
        "NPA" : 1670,
        "Canton" : "FR"
      },
      {
        "Commune" : "Birgisch",
        "NPA" : 3903,
        "Canton" : "VS"
      },
      {
        "Commune" : "Birmensdorf ZH",
        "NPA" : 8903,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Birmenstorf AG",
        "NPA" : 5413,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bironico",
        "NPA" : 6804,
        "Canton" : "TI"
      },
      {
        "Commune" : "Birr",
        "NPA" : 5242,
        "Canton" : "AG"
      },
      {
        "Commune" : "Birrhard",
        "NPA" : 5244,
        "Canton" : "AG"
      },
      {
        "Commune" : "Birrwil",
        "NPA" : 5708,
        "Canton" : "AG"
      },
      {
        "Commune" : "Birsfelden",
        "NPA" : 4127,
        "Canton" : "BL"
      },
      {
        "Commune" : "Birwinken",
        "NPA" : 8585,
        "Canton" : "TG"
      },
      {
        "Commune" : "Bischofszell",
        "NPA" : 9220,
        "Canton" : "TG"
      },
      {
        "Commune" : "Bisisthal",
        "NPA" : 6436,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Bissone",
        "NPA" : 6816,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bister",
        "NPA" : 3983,
        "Canton" : "VS"
      },
      {
        "Commune" : "Bitsch",
        "NPA" : 3982,
        "Canton" : "VS"
      },
      {
        "Commune" : "Bivio",
        "NPA" : 7457,
        "Canton" : "GR"
      },
      {
        "Commune" : "Bière",
        "NPA" : 1145,
        "Canton" : "VD"
      },
      {
        "Commune" : "Blankenburg",
        "NPA" : 3771,
        "Canton" : "BE"
      },
      {
        "Commune" : "Blatten (Lötschen)",
        "NPA" : 3919,
        "Canton" : "VS"
      },
      {
        "Commune" : "Blatten b. Naters",
        "NPA" : 3914,
        "Canton" : "VS"
      },
      {
        "Commune" : "Blauen",
        "NPA" : 4223,
        "Canton" : "BL"
      },
      {
        "Commune" : "Blausee-Mitholz",
        "NPA" : 3717,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bleienbach",
        "NPA" : 3368,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bleiken b. Oberdiessbach",
        "NPA" : 3674,
        "Canton" : "BE"
      },
      {
        "Commune" : "Blessens",
        "NPA" : 1675,
        "Canton" : "FR"
      },
      {
        "Commune" : "Blignou (Ayent)",
        "NPA" : 1966,
        "Canton" : "VS"
      },
      {
        "Commune" : "Blitzingen",
        "NPA" : 3989,
        "Canton" : "VS"
      },
      {
        "Commune" : "Blonay",
        "NPA" : 1807,
        "Canton" : "VD"
      },
      {
        "Commune" : "Blumenstein",
        "NPA" : 3638,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bodio TI",
        "NPA" : 6743,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bofflens",
        "NPA" : 1353,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bogis-Bossey",
        "NPA" : 1279,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bogno",
        "NPA" : 6951,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bolken",
        "NPA" : 4556,
        "Canton" : "SO"
      },
      {
        "Commune" : "Boll",
        "NPA" : 3067,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bolligen",
        "NPA" : 3065,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bollingen",
        "NPA" : 8715,
        "Canton" : "SG"
      },
      {
        "Commune" : "Bollion",
        "NPA" : 1470,
        "Canton" : "FR"
      },
      {
        "Commune" : "Bollodingen",
        "NPA" : 3366,
        "Canton" : "BE"
      },
      {
        "Commune" : "Boltigen",
        "NPA" : 3766,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bombinasco",
        "NPA" : 6981,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bonaduz",
        "NPA" : 7402,
        "Canton" : "GR"
      },
      {
        "Commune" : "Bonau",
        "NPA" : 8554,
        "Canton" : "TG"
      },
      {
        "Commune" : "Boncourt",
        "NPA" : 2926,
        "Canton" : "JU"
      },
      {
        "Commune" : "Bonfol",
        "NPA" : 2944,
        "Canton" : "JU"
      },
      {
        "Commune" : "Boningen",
        "NPA" : 4618,
        "Canton" : "SO"
      },
      {
        "Commune" : "Boniswil",
        "NPA" : 5706,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bonnefontaine",
        "NPA" : 1724,
        "Canton" : "FR"
      },
      {
        "Commune" : "Bonstetten",
        "NPA" : 8906,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bonvillars",
        "NPA" : 1427,
        "Canton" : "VD"
      },
      {
        "Commune" : "Boppelsen",
        "NPA" : 8113,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Borex",
        "NPA" : 1277,
        "Canton" : "VD"
      },
      {
        "Commune" : "Borgnone",
        "NPA" : 6658,
        "Canton" : "TI"
      },
      {
        "Commune" : "Borgonovo",
        "NPA" : 7604,
        "Canton" : "GR"
      },
      {
        "Commune" : "Bosco Luganese",
        "NPA" : 6935,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bosco/Gurin",
        "NPA" : 6685,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bossonnens",
        "NPA" : 1615,
        "Canton" : "FR"
      },
      {
        "Commune" : "Boswil",
        "NPA" : 5623,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bottens",
        "NPA" : 1041,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bottenwil",
        "NPA" : 4814,
        "Canton" : "AG"
      },
      {
        "Commune" : "Botterens",
        "NPA" : 1652,
        "Canton" : "FR"
      },
      {
        "Commune" : "Bottighofen",
        "NPA" : 8598,
        "Canton" : "TG"
      },
      {
        "Commune" : "Bottmingen",
        "NPA" : 4103,
        "Canton" : "BL"
      },
      {
        "Commune" : "Botyre (Ayent)",
        "NPA" : 1966,
        "Canton" : "VS"
      },
      {
        "Commune" : "Boudevilliers",
        "NPA" : 2043,
        "Canton" : "NE"
      },
      {
        "Commune" : "Boudry",
        "NPA" : 2017,
        "Canton" : "NE"
      },
      {
        "Commune" : "Bougy-Villars",
        "NPA" : 1172,
        "Canton" : "VD"
      },
      {
        "Commune" : "Boulens",
        "NPA" : 1063,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bouloz",
        "NPA" : 1699,
        "Canton" : "FR"
      },
      {
        "Commune" : "Bourg-St-Pierre",
        "NPA" : 1946,
        "Canton" : "VS"
      },
      {
        "Commune" : "Bourguillon",
        "NPA" : 1722,
        "Canton" : "FR"
      },
      {
        "Commune" : "Bournens",
        "NPA" : 1035,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bourrignon",
        "NPA" : 2803,
        "Canton" : "JU"
      },
      {
        "Commune" : "Boussens",
        "NPA" : 1034,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bouveret",
        "NPA" : 1897,
        "Canton" : "VS"
      },
      {
        "Commune" : "Boveresse",
        "NPA" : 2113,
        "Canton" : "NE"
      },
      {
        "Commune" : "Bovernier",
        "NPA" : 1932,
        "Canton" : "VS"
      },
      {
        "Commune" : "Bowil",
        "NPA" : 3533,
        "Canton" : "BE"
      },
      {
        "Commune" : "Boécourt",
        "NPA" : 2856,
        "Canton" : "JU"
      },
      {
        "Commune" : "Braggio",
        "NPA" : 6544,
        "Canton" : "GR"
      },
      {
        "Commune" : "Brail",
        "NPA" : 7527,
        "Canton" : "GR"
      },
      {
        "Commune" : "Bramboden",
        "NPA" : 6167,
        "Canton" : "LU"
      },
      {
        "Commune" : "Bramois",
        "NPA" : 1967,
        "Canton" : "VS"
      },
      {
        "Commune" : "Bratsch",
        "NPA" : 3957,
        "Canton" : "VS"
      },
      {
        "Commune" : "Braunau",
        "NPA" : 9502,
        "Canton" : "TG"
      },
      {
        "Commune" : "Braunwald",
        "NPA" : 8784,
        "Canton" : "GL"
      },
      {
        "Commune" : "Breganzona",
        "NPA" : 6932,
        "Canton" : "TI"
      },
      {
        "Commune" : "Breil/Brigels",
        "NPA" : 7165,
        "Canton" : "GR"
      },
      {
        "Commune" : "Breitenbach",
        "NPA" : 4226,
        "Canton" : "SO"
      },
      {
        "Commune" : "Bremblens",
        "NPA" : 1121,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bremgarten AG",
        "NPA" : 5620,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bremgarten b. Bern",
        "NPA" : 3047,
        "Canton" : "BE"
      },
      {
        "Commune" : "Brenles",
        "NPA" : 1683,
        "Canton" : "VD"
      },
      {
        "Commune" : "Breno",
        "NPA" : 6937,
        "Canton" : "TI"
      },
      {
        "Commune" : "Brent",
        "NPA" : 1817,
        "Canton" : "VD"
      },
      {
        "Commune" : "Brenzikofen",
        "NPA" : 3671,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bressaucourt",
        "NPA" : 2904,
        "Canton" : "JU"
      },
      {
        "Commune" : "Bretigny-sur-Morrens",
        "NPA" : 1053,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bretonnières",
        "NPA" : 1329,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bretzwil",
        "NPA" : 4207,
        "Canton" : "BL"
      },
      {
        "Commune" : "Brienz BE",
        "NPA" : 3855,
        "Canton" : "BE"
      },
      {
        "Commune" : "Brienz/Brinzauls GR",
        "NPA" : 7084,
        "Canton" : "GR"
      },
      {
        "Commune" : "Brienzersee",
        "NPA" : 9999,
        "Canton" : "BE"
      },
      {
        "Commune" : "Brienzwiler",
        "NPA" : 3856,
        "Canton" : "BE"
      },
      {
        "Commune" : "Brig",
        "NPA" : 3900,
        "Canton" : "VS"
      },
      {
        "Commune" : "Brigerbad",
        "NPA" : 3900,
        "Canton" : "VS"
      },
      {
        "Commune" : "Brignon (Nendaz)",
        "NPA" : 1996,
        "Canton" : "VS"
      },
      {
        "Commune" : "Brione (Verzasca)",
        "NPA" : 6634,
        "Canton" : "TI"
      },
      {
        "Commune" : "Brione sopra Minusio",
        "NPA" : 6645,
        "Canton" : "TI"
      },
      {
        "Commune" : "Brislach",
        "NPA" : 4225,
        "Canton" : "BL"
      },
      {
        "Commune" : "Brissago",
        "NPA" : 6614,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bristen",
        "NPA" : 6475,
        "Canton" : "UR"
      },
      {
        "Commune" : "Brittern",
        "NPA" : 4588,
        "Canton" : "SO"
      },
      {
        "Commune" : "Brittnau",
        "NPA" : 4805,
        "Canton" : "AG"
      },
      {
        "Commune" : "Broc",
        "NPA" : 1636,
        "Canton" : "FR"
      },
      {
        "Commune" : "Broglio",
        "NPA" : 6693,
        "Canton" : "TI"
      },
      {
        "Commune" : "Bronschhofen",
        "NPA" : 9552,
        "Canton" : "SG"
      },
      {
        "Commune" : "Brontallo",
        "NPA" : 6692,
        "Canton" : "TI"
      },
      {
        "Commune" : "Brot-Dessous",
        "NPA" : 2149,
        "Canton" : "NE"
      },
      {
        "Commune" : "Brot-Plamboz",
        "NPA" : 2318,
        "Canton" : "NE"
      },
      {
        "Commune" : "Bruderholz",
        "NPA" : 4101,
        "Canton" : "BL"
      },
      {
        "Commune" : "Brugg AG",
        "NPA" : 5200,
        "Canton" : "AG"
      },
      {
        "Commune" : "Brunegg",
        "NPA" : 5505,
        "Canton" : "AG"
      },
      {
        "Commune" : "Brunnadern",
        "NPA" : 9125,
        "Canton" : "SG"
      },
      {
        "Commune" : "Brunnen",
        "NPA" : 6440,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Brunnenthal",
        "NPA" : 3307,
        "Canton" : "SO"
      },
      {
        "Commune" : "Brusino Arsizio",
        "NPA" : 6827,
        "Canton" : "TI"
      },
      {
        "Commune" : "Brusio",
        "NPA" : 7743,
        "Canton" : "GR"
      },
      {
        "Commune" : "Bruson",
        "NPA" : 1934,
        "Canton" : "VS"
      },
      {
        "Commune" : "Bruzella",
        "NPA" : 6837,
        "Canton" : "TI"
      },
      {
        "Commune" : "Brè sopra Lugano",
        "NPA" : 6979,
        "Canton" : "TI"
      },
      {
        "Commune" : "Brügg BE",
        "NPA" : 2555,
        "Canton" : "BE"
      },
      {
        "Commune" : "Brügglen",
        "NPA" : 4582,
        "Canton" : "SO"
      },
      {
        "Commune" : "Brülisau",
        "NPA" : 9058,
        "Canton" : "AI"
      },
      {
        "Commune" : "Brünig",
        "NPA" : 3860,
        "Canton" : "BE"
      },
      {
        "Commune" : "Brünisried",
        "NPA" : 1719,
        "Canton" : "FR"
      },
      {
        "Commune" : "Brüttelen",
        "NPA" : 3237,
        "Canton" : "BE"
      },
      {
        "Commune" : "Brütten",
        "NPA" : 8311,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Brüttisellen",
        "NPA" : 8306,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bubendorf",
        "NPA" : 4416,
        "Canton" : "BL"
      },
      {
        "Commune" : "Bubikon",
        "NPA" : 8608,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Buch SH",
        "NPA" : 8263,
        "Canton" : "SH"
      },
      {
        "Commune" : "Buch am Irchel",
        "NPA" : 8414,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Buch b. Frauenfeld",
        "NPA" : 8524,
        "Canton" : "TG"
      },
      {
        "Commune" : "Buch b. Kümmertshausen",
        "NPA" : 8586,
        "Canton" : "TG"
      },
      {
        "Commune" : "Buch b. Märwil",
        "NPA" : 9562,
        "Canton" : "TG"
      },
      {
        "Commune" : "Buchackern",
        "NPA" : 8586,
        "Canton" : "TG"
      },
      {
        "Commune" : "Buchberg",
        "NPA" : 8454,
        "Canton" : "SH"
      },
      {
        "Commune" : "Buchen BE",
        "NPA" : 3623,
        "Canton" : "BE"
      },
      {
        "Commune" : "Buchen im Prättigau",
        "NPA" : 7223,
        "Canton" : "GR"
      },
      {
        "Commune" : "Buchillon",
        "NPA" : 1164,
        "Canton" : "VD"
      },
      {
        "Commune" : "Buchrain",
        "NPA" : 6033,
        "Canton" : "LU"
      },
      {
        "Commune" : "Buchs AG",
        "NPA" : 5033,
        "Canton" : "AG"
      },
      {
        "Commune" : "Buchs LU",
        "NPA" : 6211,
        "Canton" : "LU"
      },
      {
        "Commune" : "Buchs SG",
        "NPA" : 9470,
        "Canton" : "SG"
      },
      {
        "Commune" : "Buchs ZH",
        "NPA" : 8107,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Buckten",
        "NPA" : 4446,
        "Canton" : "BL"
      },
      {
        "Commune" : "Buhwil",
        "NPA" : 9215,
        "Canton" : "TG"
      },
      {
        "Commune" : "Buix",
        "NPA" : 2925,
        "Canton" : "JU"
      },
      {
        "Commune" : "Bulle",
        "NPA" : 1630,
        "Canton" : "FR"
      },
      {
        "Commune" : "Bullet",
        "NPA" : 1453,
        "Canton" : "VD"
      },
      {
        "Commune" : "Buochs",
        "NPA" : 6374,
        "Canton" : "NW"
      },
      {
        "Commune" : "Buonas",
        "NPA" : 6343,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Bure",
        "NPA" : 2915,
        "Canton" : "JU"
      },
      {
        "Commune" : "Burg AG",
        "NPA" : 5736,
        "Canton" : "AG"
      },
      {
        "Commune" : "Burg im Leimental",
        "NPA" : 4117,
        "Canton" : "BL"
      },
      {
        "Commune" : "Burgdorf",
        "NPA" : 3400,
        "Canton" : "BE"
      },
      {
        "Commune" : "Burgistein",
        "NPA" : 3664,
        "Canton" : "BE"
      },
      {
        "Commune" : "Burglauenen",
        "NPA" : 3816,
        "Canton" : "BE"
      },
      {
        "Commune" : "Burgäschi",
        "NPA" : 4556,
        "Canton" : "SO"
      },
      {
        "Commune" : "Bursinel",
        "NPA" : 1195,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bursins",
        "NPA" : 1183,
        "Canton" : "VD"
      },
      {
        "Commune" : "Burtigny",
        "NPA" : 1268,
        "Canton" : "VD"
      },
      {
        "Commune" : "Buseno",
        "NPA" : 6542,
        "Canton" : "GR"
      },
      {
        "Commune" : "Bussigny",
        "NPA" : 1030,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bussigny-sur-Oron",
        "NPA" : 1608,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bussnang",
        "NPA" : 9565,
        "Canton" : "TG"
      },
      {
        "Commune" : "Busswil BE",
        "NPA" : 3292,
        "Canton" : "BE"
      },
      {
        "Commune" : "Busswil TG",
        "NPA" : 8371,
        "Canton" : "TG"
      },
      {
        "Commune" : "Busswil b. Melchnau",
        "NPA" : 4917,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bussy FR",
        "NPA" : 1541,
        "Canton" : "FR"
      },
      {
        "Commune" : "Bussy-Chardonney",
        "NPA" : 1136,
        "Canton" : "VD"
      },
      {
        "Commune" : "Bussy-sur-Moudon",
        "NPA" : 1514,
        "Canton" : "VD"
      },
      {
        "Commune" : "Buttes",
        "NPA" : 2115,
        "Canton" : "NE"
      },
      {
        "Commune" : "Buttikon SZ",
        "NPA" : 8863,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Buttisholz",
        "NPA" : 6018,
        "Canton" : "LU"
      },
      {
        "Commune" : "Buttwil",
        "NPA" : 5632,
        "Canton" : "AG"
      },
      {
        "Commune" : "Buus",
        "NPA" : 4463,
        "Canton" : "BL"
      },
      {
        "Commune" : "Bäch SZ",
        "NPA" : 8806,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Bächli (Hemberg)",
        "NPA" : 9633,
        "Canton" : "SG"
      },
      {
        "Commune" : "Bänk (Dägerlen)",
        "NPA" : 8471,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bärau",
        "NPA" : 3552,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bäretswil",
        "NPA" : 8344,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bäriswil BE",
        "NPA" : 3323,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bärschwil",
        "NPA" : 4252,
        "Canton" : "SO"
      },
      {
        "Commune" : "Bätterkinden",
        "NPA" : 3315,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bättwil",
        "NPA" : 4112,
        "Canton" : "SO"
      },
      {
        "Commune" : "Bévilard",
        "NPA" : 2735,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bôle",
        "NPA" : 2014,
        "Canton" : "NE"
      },
      {
        "Commune" : "Böbikon",
        "NPA" : 5334,
        "Canton" : "AG"
      },
      {
        "Commune" : "Böckten",
        "NPA" : 4461,
        "Canton" : "BL"
      },
      {
        "Commune" : "Bönigen b. Interlaken",
        "NPA" : 3806,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bösingen",
        "NPA" : 3178,
        "Canton" : "FR"
      },
      {
        "Commune" : "Böttstein",
        "NPA" : 5315,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bözberg",
        "NPA" : 5225,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bözen",
        "NPA" : 5076,
        "Canton" : "AG"
      },
      {
        "Commune" : "Büchslen",
        "NPA" : 3215,
        "Canton" : "FR"
      },
      {
        "Commune" : "Büetigen",
        "NPA" : 3263,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bühl b. Aarberg",
        "NPA" : 3274,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bühler",
        "NPA" : 9055,
        "Canton" : "AR"
      },
      {
        "Commune" : "Bülach",
        "NPA" : 8180,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Bünzen",
        "NPA" : 5624,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bürchen",
        "NPA" : 3935,
        "Canton" : "VS"
      },
      {
        "Commune" : "Büren NW",
        "NPA" : 6382,
        "Canton" : "NW"
      },
      {
        "Commune" : "Büren SO",
        "NPA" : 4413,
        "Canton" : "SO"
      },
      {
        "Commune" : "Büren an der Aare",
        "NPA" : 3294,
        "Canton" : "BE"
      },
      {
        "Commune" : "Büren zum Hof",
        "NPA" : 3313,
        "Canton" : "BE"
      },
      {
        "Commune" : "Bürgenstock",
        "NPA" : 6363,
        "Canton" : "NW"
      },
      {
        "Commune" : "Bürglen OW",
        "NPA" : 6078,
        "Canton" : "OW"
      },
      {
        "Commune" : "Bürglen TG",
        "NPA" : 8575,
        "Canton" : "TG"
      },
      {
        "Commune" : "Bürglen UR",
        "NPA" : 6463,
        "Canton" : "UR"
      },
      {
        "Commune" : "Büriswilen",
        "NPA" : 9442,
        "Canton" : "AI"
      },
      {
        "Commune" : "Büron",
        "NPA" : 6233,
        "Canton" : "LU"
      },
      {
        "Commune" : "Büsserach",
        "NPA" : 4227,
        "Canton" : "SO"
      },
      {
        "Commune" : "Bütschwil",
        "NPA" : 9606,
        "Canton" : "SG"
      },
      {
        "Commune" : "Büttenhardt",
        "NPA" : 8236,
        "Canton" : "SH"
      },
      {
        "Commune" : "Büttikon AG",
        "NPA" : 5619,
        "Canton" : "AG"
      },
      {
        "Commune" : "Bützberg",
        "NPA" : 4922,
        "Canton" : "BE"
      },
      {
        "Commune" : "Cabbio",
        "NPA" : 6838,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cademario",
        "NPA" : 6936,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cadempino",
        "NPA" : 6814,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cadenazzo",
        "NPA" : 6593,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cadro",
        "NPA" : 6965,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cagiallo",
        "NPA" : 6955,
        "Canton" : "TI"
      },
      {
        "Commune" : "Calfreisen",
        "NPA" : 7027,
        "Canton" : "GR"
      },
      {
        "Commune" : "Calonico",
        "NPA" : 6746,
        "Canton" : "TI"
      },
      {
        "Commune" : "Calpiogna",
        "NPA" : 6760,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cama",
        "NPA" : 6557,
        "Canton" : "GR"
      },
      {
        "Commune" : "Camedo",
        "NPA" : 6659,
        "Canton" : "TI"
      },
      {
        "Commune" : "Camignolo",
        "NPA" : 6803,
        "Canton" : "TI"
      },
      {
        "Commune" : "Camischolas",
        "NPA" : 7187,
        "Canton" : "GR"
      },
      {
        "Commune" : "Camorino",
        "NPA" : 6528,
        "Canton" : "TI"
      },
      {
        "Commune" : "Campascio",
        "NPA" : 7748,
        "Canton" : "GR"
      },
      {
        "Commune" : "Campello",
        "NPA" : 6760,
        "Canton" : "TI"
      },
      {
        "Commune" : "Camperio",
        "NPA" : 6718,
        "Canton" : "TI"
      },
      {
        "Commune" : "Campo (Blenio)",
        "NPA" : 6720,
        "Canton" : "TI"
      },
      {
        "Commune" : "Campo (Vallemaggia)",
        "NPA" : 6684,
        "Canton" : "TI"
      },
      {
        "Commune" : "Campocologno",
        "NPA" : 7744,
        "Canton" : "GR"
      },
      {
        "Commune" : "Campora",
        "NPA" : 6875,
        "Canton" : "TI"
      },
      {
        "Commune" : "Campsut-Cröt",
        "NPA" : 7446,
        "Canton" : "GR"
      },
      {
        "Commune" : "Camuns",
        "NPA" : 7113,
        "Canton" : "GR"
      },
      {
        "Commune" : "Caneggio",
        "NPA" : 6837,
        "Canton" : "TI"
      },
      {
        "Commune" : "Canobbio",
        "NPA" : 6952,
        "Canton" : "TI"
      },
      {
        "Commune" : "Capolago",
        "NPA" : 6825,
        "Canton" : "TI"
      },
      {
        "Commune" : "Carabbia",
        "NPA" : 6913,
        "Canton" : "TI"
      },
      {
        "Commune" : "Carabietta",
        "NPA" : 6919,
        "Canton" : "TI"
      },
      {
        "Commune" : "Carena",
        "NPA" : 6584,
        "Canton" : "TI"
      },
      {
        "Commune" : "Carona",
        "NPA" : 6914,
        "Canton" : "TI"
      },
      {
        "Commune" : "Carouge GE",
        "NPA" : 1227,
        "Canton" : "GE"
      },
      {
        "Commune" : "Carrera",
        "NPA" : 7122,
        "Canton" : "GR"
      },
      {
        "Commune" : "Carrouge VD",
        "NPA" : 1084,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cartigny",
        "NPA" : 1236,
        "Canton" : "GE"
      },
      {
        "Commune" : "Carì",
        "NPA" : 6760,
        "Canton" : "TI"
      },
      {
        "Commune" : "Casaccia",
        "NPA" : 7602,
        "Canton" : "GR"
      },
      {
        "Commune" : "Casima",
        "NPA" : 6875,
        "Canton" : "TI"
      },
      {
        "Commune" : "Caslano",
        "NPA" : 6987,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cassina d'Agno",
        "NPA" : 6990,
        "Canton" : "TI"
      },
      {
        "Commune" : "Castagnola",
        "NPA" : 6976,
        "Canton" : "TI"
      },
      {
        "Commune" : "Castaneda",
        "NPA" : 6540,
        "Canton" : "GR"
      },
      {
        "Commune" : "Castasegna",
        "NPA" : 7608,
        "Canton" : "GR"
      },
      {
        "Commune" : "Castel San Pietro",
        "NPA" : 6874,
        "Canton" : "TI"
      },
      {
        "Commune" : "Castelrotto",
        "NPA" : 6980,
        "Canton" : "TI"
      },
      {
        "Commune" : "Castiel",
        "NPA" : 7027,
        "Canton" : "GR"
      },
      {
        "Commune" : "Castione",
        "NPA" : 6532,
        "Canton" : "TI"
      },
      {
        "Commune" : "Castrisch",
        "NPA" : 7126,
        "Canton" : "GR"
      },
      {
        "Commune" : "Castro",
        "NPA" : 6723,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cauco",
        "NPA" : 6546,
        "Canton" : "GR"
      },
      {
        "Commune" : "Caux",
        "NPA" : 1824,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cavagnago",
        "NPA" : 6749,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cavardiras",
        "NPA" : 7182,
        "Canton" : "GR"
      },
      {
        "Commune" : "Cavergno",
        "NPA" : 6690,
        "Canton" : "TI"
      },
      {
        "Commune" : "Caviano",
        "NPA" : 6578,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cavigliano",
        "NPA" : 6654,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cazis",
        "NPA" : 7408,
        "Canton" : "GR"
      },
      {
        "Commune" : "Celerina/Schlarigna",
        "NPA" : 7505,
        "Canton" : "GR"
      },
      {
        "Commune" : "Cerentino",
        "NPA" : 6683,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cerniat FR",
        "NPA" : 1654,
        "Canton" : "FR"
      },
      {
        "Commune" : "Cerniaz VD",
        "NPA" : 1682,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cernier",
        "NPA" : 2053,
        "Canton" : "NE"
      },
      {
        "Commune" : "Certara",
        "NPA" : 6959,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cevio",
        "NPA" : 6675,
        "Canton" : "TI"
      },
      {
        "Commune" : "Chabrey",
        "NPA" : 1589,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chailly-Montreux",
        "NPA" : 1816,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chalais",
        "NPA" : 3966,
        "Canton" : "VS"
      },
      {
        "Commune" : "Cham",
        "NPA" : 6330,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Chamblon",
        "NPA" : 1436,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chambrelien",
        "NPA" : 2019,
        "Canton" : "NE"
      },
      {
        "Commune" : "Chamby",
        "NPA" : 1832,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chambésy",
        "NPA" : 1292,
        "Canton" : "GE"
      },
      {
        "Commune" : "Chamoille (Sembrancher)",
        "NPA" : 1933,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chamoson",
        "NPA" : 1955,
        "Canton" : "VS"
      },
      {
        "Commune" : "Champ-du-Moulin",
        "NPA" : 2149,
        "Canton" : "NE"
      },
      {
        "Commune" : "Champagne",
        "NPA" : 1424,
        "Canton" : "VD"
      },
      {
        "Commune" : "Champex-Lac",
        "NPA" : 1938,
        "Canton" : "VS"
      },
      {
        "Commune" : "Champfèr",
        "NPA" : 7512,
        "Canton" : "GR"
      },
      {
        "Commune" : "Champlan (Grimisuat)",
        "NPA" : 1971,
        "Canton" : "VS"
      },
      {
        "Commune" : "Champoussin",
        "NPA" : 1873,
        "Canton" : "VS"
      },
      {
        "Commune" : "Champoz",
        "NPA" : 2735,
        "Canton" : "BE"
      },
      {
        "Commune" : "Champsec",
        "NPA" : 1947,
        "Canton" : "VS"
      },
      {
        "Commune" : "Champtauroz",
        "NPA" : 1537,
        "Canton" : "VD"
      },
      {
        "Commune" : "Champvent",
        "NPA" : 1443,
        "Canton" : "VD"
      },
      {
        "Commune" : "Champzabé",
        "NPA" : 3976,
        "Canton" : "VS"
      },
      {
        "Commune" : "Champéry",
        "NPA" : 1874,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chancy",
        "NPA" : 1284,
        "Canton" : "GE"
      },
      {
        "Commune" : "Chandolin",
        "NPA" : 3961,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chandolin (Savièse)",
        "NPA" : 1965,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chandon",
        "NPA" : 1773,
        "Canton" : "FR"
      },
      {
        "Commune" : "Chandonne (Liddes)",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chanéaz",
        "NPA" : 1409,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chapelle (Broye)",
        "NPA" : 1534,
        "Canton" : "FR"
      },
      {
        "Commune" : "Chapelle (Glâne)",
        "NPA" : 1608,
        "Canton" : "FR"
      },
      {
        "Commune" : "Chapelle-sur-Moudon",
        "NPA" : 1063,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chardonne",
        "NPA" : 1803,
        "Canton" : "VD"
      },
      {
        "Commune" : "Charmey (Gruyère)",
        "NPA" : 1637,
        "Canton" : "FR"
      },
      {
        "Commune" : "Charmoille",
        "NPA" : 2947,
        "Canton" : "JU"
      },
      {
        "Commune" : "Charrat",
        "NPA" : 1906,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chaumont",
        "NPA" : 2067,
        "Canton" : "NE"
      },
      {
        "Commune" : "Chavannes-de-Bogis",
        "NPA" : 1279,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chavannes-des-Bois",
        "NPA" : 1290,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chavannes-le-Chêne",
        "NPA" : 1464,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chavannes-le-Veyron",
        "NPA" : 1148,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chavannes-les-Forts",
        "NPA" : 1676,
        "Canton" : "FR"
      },
      {
        "Commune" : "Chavannes-près-Renens",
        "NPA" : 1022,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chavannes-sous-Orsonnens",
        "NPA" : 1694,
        "Canton" : "FR"
      },
      {
        "Commune" : "Chavannes-sur-Moudon",
        "NPA" : 1512,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chavornay",
        "NPA" : 1373,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cheiry",
        "NPA" : 1529,
        "Canton" : "FR"
      },
      {
        "Commune" : "Chemin",
        "NPA" : 1927,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chenaux",
        "NPA" : 1091,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chermignon",
        "NPA" : 3971,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chermignon-d'en-Bas",
        "NPA" : 3971,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chernex",
        "NPA" : 1822,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chesalles-sur-Moudon",
        "NPA" : 1683,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chesalles-sur-Oron",
        "NPA" : 1608,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cheseaux-Noréaz",
        "NPA" : 1400,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cheseaux-sur-Lausanne",
        "NPA" : 1033,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chesières",
        "NPA" : 1885,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chessel",
        "NPA" : 1846,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chevenez",
        "NPA" : 2906,
        "Canton" : "JU"
      },
      {
        "Commune" : "Chevilly",
        "NPA" : 1316,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chevroux",
        "NPA" : 1545,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chexbres",
        "NPA" : 1071,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cheyres",
        "NPA" : 1468,
        "Canton" : "FR"
      },
      {
        "Commune" : "Chez Petit (Liddes)",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chez-le-Bart",
        "NPA" : 2025,
        "Canton" : "NE"
      },
      {
        "Commune" : "Chiasso",
        "NPA" : 6830,
        "Canton" : "TI"
      },
      {
        "Commune" : "Chiggiogna",
        "NPA" : 6764,
        "Canton" : "TI"
      },
      {
        "Commune" : "Chigny",
        "NPA" : 1134,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chippis",
        "NPA" : 3965,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chironico",
        "NPA" : 6747,
        "Canton" : "TI"
      },
      {
        "Commune" : "Choulex",
        "NPA" : 1244,
        "Canton" : "GE"
      },
      {
        "Commune" : "Choëx",
        "NPA" : 1871,
        "Canton" : "VS"
      },
      {
        "Commune" : "Chur",
        "NPA" : 7000,
        "Canton" : "GR"
      },
      {
        "Commune" : "Churwalden",
        "NPA" : 7075,
        "Canton" : "GR"
      },
      {
        "Commune" : "Châbles FR",
        "NPA" : 1474,
        "Canton" : "FR"
      },
      {
        "Commune" : "Château-d'Oex",
        "NPA" : 1660,
        "Canton" : "VD"
      },
      {
        "Commune" : "Châtel-St-Denis",
        "NPA" : 1618,
        "Canton" : "FR"
      },
      {
        "Commune" : "Châtel-sur-Montsalvens",
        "NPA" : 1653,
        "Canton" : "FR"
      },
      {
        "Commune" : "Châtelaine",
        "NPA" : 1219,
        "Canton" : "GE"
      },
      {
        "Commune" : "Châtelat",
        "NPA" : 2715,
        "Canton" : "BE"
      },
      {
        "Commune" : "Châtillens",
        "NPA" : 1610,
        "Canton" : "VD"
      },
      {
        "Commune" : "Châtillon FR",
        "NPA" : 1473,
        "Canton" : "FR"
      },
      {
        "Commune" : "Châtillon JU",
        "NPA" : 2843,
        "Canton" : "JU"
      },
      {
        "Commune" : "Châtonnaye",
        "NPA" : 1553,
        "Canton" : "FR"
      },
      {
        "Commune" : "Chénens",
        "NPA" : 1744,
        "Canton" : "FR"
      },
      {
        "Commune" : "Chéserex",
        "NPA" : 1275,
        "Canton" : "VD"
      },
      {
        "Commune" : "Chésopelloz",
        "NPA" : 1720,
        "Canton" : "FR"
      },
      {
        "Commune" : "Chézard-St-Martin",
        "NPA" : 2054,
        "Canton" : "NE"
      },
      {
        "Commune" : "Chêne-Bougeries",
        "NPA" : 1224,
        "Canton" : "GE"
      },
      {
        "Commune" : "Chêne-Bourg",
        "NPA" : 1225,
        "Canton" : "GE"
      },
      {
        "Commune" : "Chêne-Pâquier",
        "NPA" : 1464,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cimadera",
        "NPA" : 6959,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cimalmotto",
        "NPA" : 6684,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cimo",
        "NPA" : 6992,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cinuos-chel",
        "NPA" : 7526,
        "Canton" : "GR"
      },
      {
        "Commune" : "Clarens",
        "NPA" : 1815,
        "Canton" : "VD"
      },
      {
        "Commune" : "Clarmont",
        "NPA" : 1127,
        "Canton" : "VD"
      },
      {
        "Commune" : "Claro",
        "NPA" : 6702,
        "Canton" : "TI"
      },
      {
        "Commune" : "Clavaleyres",
        "NPA" : 1595,
        "Canton" : "BE"
      },
      {
        "Commune" : "Clugin",
        "NPA" : 7442,
        "Canton" : "GR"
      },
      {
        "Commune" : "Clèbes (Nendaz)",
        "NPA" : 1993,
        "Canton" : "VS"
      },
      {
        "Commune" : "Coeuve",
        "NPA" : 2932,
        "Canton" : "JU"
      },
      {
        "Commune" : "Coffrane",
        "NPA" : 2207,
        "Canton" : "NE"
      },
      {
        "Commune" : "Coglio",
        "NPA" : 6678,
        "Canton" : "TI"
      },
      {
        "Commune" : "Coinsins",
        "NPA" : 1267,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cointrin",
        "NPA" : 1216,
        "Canton" : "GE"
      },
      {
        "Commune" : "Coldrerio",
        "NPA" : 6877,
        "Canton" : "TI"
      },
      {
        "Commune" : "Colla",
        "NPA" : 6951,
        "Canton" : "TI"
      },
      {
        "Commune" : "Collex",
        "NPA" : 1239,
        "Canton" : "GE"
      },
      {
        "Commune" : "Collombey",
        "NPA" : 1868,
        "Canton" : "VS"
      },
      {
        "Commune" : "Collonge-Bellerive",
        "NPA" : 1245,
        "Canton" : "GE"
      },
      {
        "Commune" : "Collonges",
        "NPA" : 1903,
        "Canton" : "VS"
      },
      {
        "Commune" : "Cologny",
        "NPA" : 1223,
        "Canton" : "GE"
      },
      {
        "Commune" : "Colombier NE",
        "NPA" : 2013,
        "Canton" : "NE"
      },
      {
        "Commune" : "Colombier VD",
        "NPA" : 1114,
        "Canton" : "VD"
      },
      {
        "Commune" : "Comano",
        "NPA" : 6949,
        "Canton" : "TI"
      },
      {
        "Commune" : "Combremont-le-Grand",
        "NPA" : 1535,
        "Canton" : "VD"
      },
      {
        "Commune" : "Combremont-le-Petit",
        "NPA" : 1536,
        "Canton" : "VD"
      },
      {
        "Commune" : "Commugny",
        "NPA" : 1291,
        "Canton" : "VD"
      },
      {
        "Commune" : "Comologno",
        "NPA" : 6663,
        "Canton" : "TI"
      },
      {
        "Commune" : "Conches",
        "NPA" : 1231,
        "Canton" : "GE"
      },
      {
        "Commune" : "Concise",
        "NPA" : 1426,
        "Canton" : "VD"
      },
      {
        "Commune" : "Condémines (Nendaz)",
        "NPA" : 1996,
        "Canton" : "VS"
      },
      {
        "Commune" : "Confignon",
        "NPA" : 1232,
        "Canton" : "GE"
      },
      {
        "Commune" : "Constantine",
        "NPA" : 1587,
        "Canton" : "VD"
      },
      {
        "Commune" : "Conters im Prättigau",
        "NPA" : 7241,
        "Canton" : "GR"
      },
      {
        "Commune" : "Conthey",
        "NPA" : 1964,
        "Canton" : "VS"
      },
      {
        "Commune" : "Contone",
        "NPA" : 6594,
        "Canton" : "TI"
      },
      {
        "Commune" : "Contra",
        "NPA" : 6646,
        "Canton" : "TI"
      },
      {
        "Commune" : "Coppet",
        "NPA" : 1296,
        "Canton" : "VD"
      },
      {
        "Commune" : "Corban",
        "NPA" : 2826,
        "Canton" : "JU"
      },
      {
        "Commune" : "Corbeyrier",
        "NPA" : 1856,
        "Canton" : "VD"
      },
      {
        "Commune" : "Corbières",
        "NPA" : 1647,
        "Canton" : "FR"
      },
      {
        "Commune" : "Corcelles BE",
        "NPA" : 2747,
        "Canton" : "BE"
      },
      {
        "Commune" : "Corcelles NE",
        "NPA" : 2035,
        "Canton" : "NE"
      },
      {
        "Commune" : "Corcelles-le-Jorat",
        "NPA" : 1082,
        "Canton" : "VD"
      },
      {
        "Commune" : "Corcelles-près-Concise",
        "NPA" : 1426,
        "Canton" : "VD"
      },
      {
        "Commune" : "Corcelles-près-Payerne",
        "NPA" : 1562,
        "Canton" : "VD"
      },
      {
        "Commune" : "Corcelles-sur-Chavornay",
        "NPA" : 1374,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cordast",
        "NPA" : 1792,
        "Canton" : "FR"
      },
      {
        "Commune" : "Corgémont",
        "NPA" : 2606,
        "Canton" : "BE"
      },
      {
        "Commune" : "Corin-de-la-Crête",
        "NPA" : 3960,
        "Canton" : "VS"
      },
      {
        "Commune" : "Corippo",
        "NPA" : 6631,
        "Canton" : "TI"
      },
      {
        "Commune" : "Corjolens",
        "NPA" : 1754,
        "Canton" : "FR"
      },
      {
        "Commune" : "Cormagens",
        "NPA" : 1782,
        "Canton" : "FR"
      },
      {
        "Commune" : "Corminboeuf",
        "NPA" : 1720,
        "Canton" : "FR"
      },
      {
        "Commune" : "Cormondrèche",
        "NPA" : 2036,
        "Canton" : "NE"
      },
      {
        "Commune" : "Cormoret",
        "NPA" : 2612,
        "Canton" : "BE"
      },
      {
        "Commune" : "Cormérod",
        "NPA" : 1721,
        "Canton" : "FR"
      },
      {
        "Commune" : "Cornaux NE",
        "NPA" : 2087,
        "Canton" : "NE"
      },
      {
        "Commune" : "Cornol",
        "NPA" : 2952,
        "Canton" : "JU"
      },
      {
        "Commune" : "Corpataux-Magnedens",
        "NPA" : 1727,
        "Canton" : "FR"
      },
      {
        "Commune" : "Correvon",
        "NPA" : 1410,
        "Canton" : "VD"
      },
      {
        "Commune" : "Corseaux",
        "NPA" : 1802,
        "Canton" : "VD"
      },
      {
        "Commune" : "Corserey",
        "NPA" : 1747,
        "Canton" : "FR"
      },
      {
        "Commune" : "Corsier GE",
        "NPA" : 1246,
        "Canton" : "GE"
      },
      {
        "Commune" : "Corsier-sur-Vevey",
        "NPA" : 1804,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cortaillod",
        "NPA" : 2016,
        "Canton" : "NE"
      },
      {
        "Commune" : "Corteglia",
        "NPA" : 6873,
        "Canton" : "TI"
      },
      {
        "Commune" : "Corticiasca",
        "NPA" : 6958,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cortébert",
        "NPA" : 2607,
        "Canton" : "BE"
      },
      {
        "Commune" : "Corzoneso",
        "NPA" : 6722,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cossonay-Ville",
        "NPA" : 1304,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cottens FR",
        "NPA" : 1741,
        "Canton" : "FR"
      },
      {
        "Commune" : "Cottens VD",
        "NPA" : 1116,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cotterd",
        "NPA" : 1585,
        "Canton" : "VD"
      },
      {
        "Commune" : "Courcelon",
        "NPA" : 2823,
        "Canton" : "JU"
      },
      {
        "Commune" : "Courchapoix",
        "NPA" : 2825,
        "Canton" : "JU"
      },
      {
        "Commune" : "Courchavon",
        "NPA" : 2922,
        "Canton" : "JU"
      },
      {
        "Commune" : "Courfaivre",
        "NPA" : 2853,
        "Canton" : "JU"
      },
      {
        "Commune" : "Courgenay",
        "NPA" : 2950,
        "Canton" : "JU"
      },
      {
        "Commune" : "Courgevaux",
        "NPA" : 1796,
        "Canton" : "FR"
      },
      {
        "Commune" : "Courlevon",
        "NPA" : 1795,
        "Canton" : "FR"
      },
      {
        "Commune" : "Cournillens",
        "NPA" : 1721,
        "Canton" : "FR"
      },
      {
        "Commune" : "Courrendlin",
        "NPA" : 2830,
        "Canton" : "JU"
      },
      {
        "Commune" : "Courroux",
        "NPA" : 2822,
        "Canton" : "JU"
      },
      {
        "Commune" : "Court",
        "NPA" : 2738,
        "Canton" : "BE"
      },
      {
        "Commune" : "Courtaman",
        "NPA" : 1791,
        "Canton" : "FR"
      },
      {
        "Commune" : "Courtedoux",
        "NPA" : 2905,
        "Canton" : "JU"
      },
      {
        "Commune" : "Courtelary",
        "NPA" : 2608,
        "Canton" : "BE"
      },
      {
        "Commune" : "Courtemautruy",
        "NPA" : 2950,
        "Canton" : "JU"
      },
      {
        "Commune" : "Courtemaîche",
        "NPA" : 2923,
        "Canton" : "JU"
      },
      {
        "Commune" : "Courtepin",
        "NPA" : 1784,
        "Canton" : "FR"
      },
      {
        "Commune" : "Courtion",
        "NPA" : 1721,
        "Canton" : "FR"
      },
      {
        "Commune" : "Courtételle",
        "NPA" : 2852,
        "Canton" : "JU"
      },
      {
        "Commune" : "Cousset",
        "NPA" : 1774,
        "Canton" : "FR"
      },
      {
        "Commune" : "Couvet",
        "NPA" : 2108,
        "Canton" : "NE"
      },
      {
        "Commune" : "Cozzo",
        "NPA" : 6951,
        "Canton" : "TI"
      },
      {
        "Commune" : "Crana",
        "NPA" : 6611,
        "Canton" : "TI"
      },
      {
        "Commune" : "Crans-Montana",
        "NPA" : 3963,
        "Canton" : "VS"
      },
      {
        "Commune" : "Crans-près-Céligny",
        "NPA" : 1299,
        "Canton" : "VD"
      },
      {
        "Commune" : "Crassier",
        "NPA" : 1263,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cremin",
        "NPA" : 1526,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cresciano",
        "NPA" : 6705,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cressier FR",
        "NPA" : 1785,
        "Canton" : "FR"
      },
      {
        "Commune" : "Cressier NE",
        "NPA" : 2088,
        "Canton" : "NE"
      },
      {
        "Commune" : "Cresta (Avers)",
        "NPA" : 7447,
        "Canton" : "GR"
      },
      {
        "Commune" : "Cries (Vollèges)",
        "NPA" : 1941,
        "Canton" : "VS"
      },
      {
        "Commune" : "Crissier",
        "NPA" : 1023,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cronay",
        "NPA" : 1406,
        "Canton" : "VD"
      },
      {
        "Commune" : "Croy",
        "NPA" : 1322,
        "Canton" : "VD"
      },
      {
        "Commune" : "Crusch",
        "NPA" : 7554,
        "Canton" : "GR"
      },
      {
        "Commune" : "Crémines",
        "NPA" : 2746,
        "Canton" : "BE"
      },
      {
        "Commune" : "Crésuz",
        "NPA" : 1653,
        "Canton" : "FR"
      },
      {
        "Commune" : "Crête-à-l'Oeil (Les Agettes)",
        "NPA" : 1992,
        "Canton" : "VS"
      },
      {
        "Commune" : "Cuarnens",
        "NPA" : 1148,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cuarny",
        "NPA" : 1404,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cudrefin",
        "NPA" : 1588,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cugnasco",
        "NPA" : 6516,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cugy FR",
        "NPA" : 1482,
        "Canton" : "FR"
      },
      {
        "Commune" : "Cugy VD",
        "NPA" : 1053,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cully",
        "NPA" : 1096,
        "Canton" : "VD"
      },
      {
        "Commune" : "Cumbel",
        "NPA" : 7142,
        "Canton" : "GR"
      },
      {
        "Commune" : "Cumpadials",
        "NPA" : 7176,
        "Canton" : "GR"
      },
      {
        "Commune" : "Cunter",
        "NPA" : 7452,
        "Canton" : "GR"
      },
      {
        "Commune" : "Curaglia",
        "NPA" : 7184,
        "Canton" : "GR"
      },
      {
        "Commune" : "Cureggia",
        "NPA" : 6963,
        "Canton" : "TI"
      },
      {
        "Commune" : "Cureglia",
        "NPA" : 6944,
        "Canton" : "TI"
      },
      {
        "Commune" : "Curio",
        "NPA" : 6986,
        "Canton" : "TI"
      },
      {
        "Commune" : "Curtilles",
        "NPA" : 1521,
        "Canton" : "VD"
      },
      {
        "Commune" : "Curtina",
        "NPA" : 6959,
        "Canton" : "TI"
      },
      {
        "Commune" : "Céligny",
        "NPA" : 1298,
        "Canton" : "GE"
      },
      {
        "Commune" : "Dachsen",
        "NPA" : 8447,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Dagmersellen",
        "NPA" : 6252,
        "Canton" : "LU"
      },
      {
        "Commune" : "Daillens",
        "NPA" : 1306,
        "Canton" : "VD"
      },
      {
        "Commune" : "Daillon",
        "NPA" : 1976,
        "Canton" : "VS"
      },
      {
        "Commune" : "Daiwil",
        "NPA" : 6126,
        "Canton" : "LU"
      },
      {
        "Commune" : "Dalin",
        "NPA" : 7424,
        "Canton" : "GR"
      },
      {
        "Commune" : "Dallenwil",
        "NPA" : 6383,
        "Canton" : "NW"
      },
      {
        "Commune" : "Dalpe",
        "NPA" : 6774,
        "Canton" : "TI"
      },
      {
        "Commune" : "Damphreux",
        "NPA" : 2933,
        "Canton" : "JU"
      },
      {
        "Commune" : "Damvant",
        "NPA" : 2914,
        "Canton" : "JU"
      },
      {
        "Commune" : "Dangio",
        "NPA" : 6717,
        "Canton" : "TI"
      },
      {
        "Commune" : "Danis",
        "NPA" : 7163,
        "Canton" : "GR"
      },
      {
        "Commune" : "Dardagny",
        "NPA" : 1283,
        "Canton" : "GE"
      },
      {
        "Commune" : "Dardin",
        "NPA" : 7164,
        "Canton" : "GR"
      },
      {
        "Commune" : "Davesco-Soragno",
        "NPA" : 6964,
        "Canton" : "TI"
      },
      {
        "Commune" : "Davos Clavadel",
        "NPA" : 7272,
        "Canton" : "GR"
      },
      {
        "Commune" : "Davos Dorf",
        "NPA" : 7260,
        "Canton" : "GR"
      },
      {
        "Commune" : "Davos Frauenkirch",
        "NPA" : 7276,
        "Canton" : "GR"
      },
      {
        "Commune" : "Davos Glaris",
        "NPA" : 7277,
        "Canton" : "GR"
      },
      {
        "Commune" : "Davos Monstein",
        "NPA" : 7278,
        "Canton" : "GR"
      },
      {
        "Commune" : "Davos Platz",
        "NPA" : 7270,
        "Canton" : "GR"
      },
      {
        "Commune" : "Davos Wiesen",
        "NPA" : 7494,
        "Canton" : "GR"
      },
      {
        "Commune" : "Davos Wolfgang",
        "NPA" : 7265,
        "Canton" : "GR"
      },
      {
        "Commune" : "Degen",
        "NPA" : 7145,
        "Canton" : "GR"
      },
      {
        "Commune" : "Degersheim",
        "NPA" : 9113,
        "Canton" : "SG"
      },
      {
        "Commune" : "Deisswil b. Münchenbuchsee",
        "NPA" : 3053,
        "Canton" : "BE"
      },
      {
        "Commune" : "Deitingen",
        "NPA" : 4543,
        "Canton" : "SO"
      },
      {
        "Commune" : "Delley",
        "NPA" : 1567,
        "Canton" : "FR"
      },
      {
        "Commune" : "Delémont",
        "NPA" : 2800,
        "Canton" : "JU"
      },
      {
        "Commune" : "Denens",
        "NPA" : 1135,
        "Canton" : "VD"
      },
      {
        "Commune" : "Denezy",
        "NPA" : 1410,
        "Canton" : "VD"
      },
      {
        "Commune" : "Denges",
        "NPA" : 1026,
        "Canton" : "VD"
      },
      {
        "Commune" : "Densbüren",
        "NPA" : 5026,
        "Canton" : "AG"
      },
      {
        "Commune" : "Derendingen",
        "NPA" : 4552,
        "Canton" : "SO"
      },
      {
        "Commune" : "Detligen",
        "NPA" : 3036,
        "Canton" : "BE"
      },
      {
        "Commune" : "Dettighofen",
        "NPA" : 8505,
        "Canton" : "TG"
      },
      {
        "Commune" : "Dettighofen (Lengwil)",
        "NPA" : 8574,
        "Canton" : "TG"
      },
      {
        "Commune" : "Develier",
        "NPA" : 2802,
        "Canton" : "JU"
      },
      {
        "Commune" : "Dicken",
        "NPA" : 9115,
        "Canton" : "SG"
      },
      {
        "Commune" : "Diegten",
        "NPA" : 4457,
        "Canton" : "BL"
      },
      {
        "Commune" : "Dielsdorf",
        "NPA" : 8157,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Diemerswil",
        "NPA" : 3053,
        "Canton" : "BE"
      },
      {
        "Commune" : "Diemtigen",
        "NPA" : 3754,
        "Canton" : "BE"
      },
      {
        "Commune" : "Diepflingen",
        "NPA" : 4442,
        "Canton" : "BL"
      },
      {
        "Commune" : "Diepoldsau",
        "NPA" : 9444,
        "Canton" : "SG"
      },
      {
        "Commune" : "Dierikon",
        "NPA" : 6036,
        "Canton" : "LU"
      },
      {
        "Commune" : "Diesbach GL",
        "NPA" : 8777,
        "Canton" : "GL"
      },
      {
        "Commune" : "Diessbach b. Büren",
        "NPA" : 3264,
        "Canton" : "BE"
      },
      {
        "Commune" : "Diesse",
        "NPA" : 2517,
        "Canton" : "BE"
      },
      {
        "Commune" : "Diessenhofen",
        "NPA" : 8253,
        "Canton" : "TG"
      },
      {
        "Commune" : "Dieterswil",
        "NPA" : 3256,
        "Canton" : "BE"
      },
      {
        "Commune" : "Dietfurt",
        "NPA" : 9615,
        "Canton" : "SG"
      },
      {
        "Commune" : "Dietikon",
        "NPA" : 8953,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Dietlikon",
        "NPA" : 8305,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Dietschwil",
        "NPA" : 9533,
        "Canton" : "SG"
      },
      {
        "Commune" : "Dietwil",
        "NPA" : 6042,
        "Canton" : "AG"
      },
      {
        "Commune" : "Dinhard",
        "NPA" : 8474,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Dino",
        "NPA" : 6967,
        "Canton" : "TI"
      },
      {
        "Commune" : "Dintikon",
        "NPA" : 5606,
        "Canton" : "AG"
      },
      {
        "Commune" : "Diolly (Savièse)",
        "NPA" : 1965,
        "Canton" : "VS"
      },
      {
        "Commune" : "Disentis/Mustér",
        "NPA" : 7180,
        "Canton" : "GR"
      },
      {
        "Commune" : "Dittingen",
        "NPA" : 4243,
        "Canton" : "BL"
      },
      {
        "Commune" : "Dizy",
        "NPA" : 1304,
        "Canton" : "VD"
      },
      {
        "Commune" : "Domat/Ems",
        "NPA" : 7013,
        "Canton" : "GR"
      },
      {
        "Commune" : "Dombresson",
        "NPA" : 2056,
        "Canton" : "NE"
      },
      {
        "Commune" : "Domdidier",
        "NPA" : 1564,
        "Canton" : "FR"
      },
      {
        "Commune" : "Dommartin",
        "NPA" : 1041,
        "Canton" : "VD"
      },
      {
        "Commune" : "Dompierre FR",
        "NPA" : 1563,
        "Canton" : "FR"
      },
      {
        "Commune" : "Dompierre VD",
        "NPA" : 1682,
        "Canton" : "VD"
      },
      {
        "Commune" : "Donat",
        "NPA" : 7433,
        "Canton" : "GR"
      },
      {
        "Commune" : "Donatyre",
        "NPA" : 1580,
        "Canton" : "VD"
      },
      {
        "Commune" : "Dongio",
        "NPA" : 6715,
        "Canton" : "TI"
      },
      {
        "Commune" : "Donneloye",
        "NPA" : 1407,
        "Canton" : "VD"
      },
      {
        "Commune" : "Donzhausen",
        "NPA" : 8583,
        "Canton" : "TG"
      },
      {
        "Commune" : "Doppleschwand",
        "NPA" : 6112,
        "Canton" : "LU"
      },
      {
        "Commune" : "Dorf",
        "NPA" : 8458,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Dornach",
        "NPA" : 4143,
        "Canton" : "SO"
      },
      {
        "Commune" : "Dorénaz",
        "NPA" : 1905,
        "Canton" : "VS"
      },
      {
        "Commune" : "Dotnacht",
        "NPA" : 8566,
        "Canton" : "TG"
      },
      {
        "Commune" : "Dottikon",
        "NPA" : 5605,
        "Canton" : "AG"
      },
      {
        "Commune" : "Dotzigen",
        "NPA" : 3293,
        "Canton" : "BE"
      },
      {
        "Commune" : "Dozwil",
        "NPA" : 8582,
        "Canton" : "TG"
      },
      {
        "Commune" : "Dranse (Liddes)",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Dreien",
        "NPA" : 9612,
        "Canton" : "SG"
      },
      {
        "Commune" : "Drône (Savièse)",
        "NPA" : 1965,
        "Canton" : "VS"
      },
      {
        "Commune" : "Duggingen",
        "NPA" : 4202,
        "Canton" : "BL"
      },
      {
        "Commune" : "Dugny (Leytron)",
        "NPA" : 1912,
        "Canton" : "VS"
      },
      {
        "Commune" : "Duillier",
        "NPA" : 1266,
        "Canton" : "VD"
      },
      {
        "Commune" : "Dulliken",
        "NPA" : 4657,
        "Canton" : "SO"
      },
      {
        "Commune" : "Dully",
        "NPA" : 1195,
        "Canton" : "VD"
      },
      {
        "Commune" : "Dussnang",
        "NPA" : 8374,
        "Canton" : "TG"
      },
      {
        "Commune" : "Duvin",
        "NPA" : 7112,
        "Canton" : "GR"
      },
      {
        "Commune" : "Dägerlen",
        "NPA" : 8471,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Dällikon",
        "NPA" : 8108,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Däniken SO",
        "NPA" : 4658,
        "Canton" : "SO"
      },
      {
        "Commune" : "Dänikon ZH",
        "NPA" : 8114,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Därligen",
        "NPA" : 3707,
        "Canton" : "BE"
      },
      {
        "Commune" : "Därstetten",
        "NPA" : 3763,
        "Canton" : "BE"
      },
      {
        "Commune" : "Dättlikon",
        "NPA" : 8421,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Dättwil AG",
        "NPA" : 5405,
        "Canton" : "AG"
      },
      {
        "Commune" : "Démoret",
        "NPA" : 1415,
        "Canton" : "VD"
      },
      {
        "Commune" : "Dörflingen",
        "NPA" : 8239,
        "Canton" : "SH"
      },
      {
        "Commune" : "Döttingen",
        "NPA" : 5312,
        "Canton" : "AG"
      },
      {
        "Commune" : "Dübendorf",
        "NPA" : 8600,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Düdingen",
        "NPA" : 3186,
        "Canton" : "FR"
      },
      {
        "Commune" : "Dürnten",
        "NPA" : 8635,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Dürrenroth",
        "NPA" : 3465,
        "Canton" : "BE"
      },
      {
        "Commune" : "Dürrenäsch",
        "NPA" : 5724,
        "Canton" : "AG"
      },
      {
        "Commune" : "Ebersecken",
        "NPA" : 6245,
        "Canton" : "LU"
      },
      {
        "Commune" : "Ebersol",
        "NPA" : 9122,
        "Canton" : "SG"
      },
      {
        "Commune" : "Ebertswil",
        "NPA" : 8925,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ebikon",
        "NPA" : 6030,
        "Canton" : "LU"
      },
      {
        "Commune" : "Ebmatingen",
        "NPA" : 8123,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ebnat-Kappel",
        "NPA" : 9642,
        "Canton" : "SG"
      },
      {
        "Commune" : "Ebnet",
        "NPA" : 6163,
        "Canton" : "LU"
      },
      {
        "Commune" : "Echallens",
        "NPA" : 1040,
        "Canton" : "VD"
      },
      {
        "Commune" : "Echandens",
        "NPA" : 1026,
        "Canton" : "VD"
      },
      {
        "Commune" : "Echarlens",
        "NPA" : 1646,
        "Canton" : "FR"
      },
      {
        "Commune" : "Echichens",
        "NPA" : 1112,
        "Canton" : "VD"
      },
      {
        "Commune" : "Eclagnens",
        "NPA" : 1376,
        "Canton" : "VD"
      },
      {
        "Commune" : "Eclépens",
        "NPA" : 1312,
        "Canton" : "VD"
      },
      {
        "Commune" : "Ecoteaux",
        "NPA" : 1612,
        "Canton" : "VD"
      },
      {
        "Commune" : "Ecublens FR",
        "NPA" : 1673,
        "Canton" : "FR"
      },
      {
        "Commune" : "Ecublens VD",
        "NPA" : 1024,
        "Canton" : "VD"
      },
      {
        "Commune" : "Ecuvillens",
        "NPA" : 1730,
        "Canton" : "FR"
      },
      {
        "Commune" : "Ederswiler",
        "NPA" : 2813,
        "Canton" : "JU"
      },
      {
        "Commune" : "Edlibach",
        "NPA" : 6313,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Effingen",
        "NPA" : 5078,
        "Canton" : "AG"
      },
      {
        "Commune" : "Effretikon",
        "NPA" : 8307,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Egerkingen",
        "NPA" : 4622,
        "Canton" : "SO"
      },
      {
        "Commune" : "Egg (Flawil)",
        "NPA" : 9231,
        "Canton" : "SG"
      },
      {
        "Commune" : "Egg SZ",
        "NPA" : 8847,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Egg b. Zürich",
        "NPA" : 8132,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Eggenwil",
        "NPA" : 5445,
        "Canton" : "AG"
      },
      {
        "Commune" : "Eggerberg",
        "NPA" : 3939,
        "Canton" : "VS"
      },
      {
        "Commune" : "Eggersriet",
        "NPA" : 9034,
        "Canton" : "SG"
      },
      {
        "Commune" : "Eggiwil",
        "NPA" : 3537,
        "Canton" : "BE"
      },
      {
        "Commune" : "Eglisau",
        "NPA" : 8193,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Egliswil",
        "NPA" : 5704,
        "Canton" : "AG"
      },
      {
        "Commune" : "Egnach",
        "NPA" : 9322,
        "Canton" : "TG"
      },
      {
        "Commune" : "Egolzwil",
        "NPA" : 6243,
        "Canton" : "LU"
      },
      {
        "Commune" : "Ehrendingen",
        "NPA" : 5420,
        "Canton" : "AG"
      },
      {
        "Commune" : "Eich",
        "NPA" : 6205,
        "Canton" : "LU"
      },
      {
        "Commune" : "Eichberg",
        "NPA" : 9453,
        "Canton" : "SG"
      },
      {
        "Commune" : "Eigenthal",
        "NPA" : 6013,
        "Canton" : "LU"
      },
      {
        "Commune" : "Eigergletscher",
        "NPA" : 3823,
        "Canton" : "BE"
      },
      {
        "Commune" : "Eiken",
        "NPA" : 5074,
        "Canton" : "AG"
      },
      {
        "Commune" : "Einigen",
        "NPA" : 3646,
        "Canton" : "BE"
      },
      {
        "Commune" : "Einsiedeln",
        "NPA" : 8840,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Eischoll",
        "NPA" : 3943,
        "Canton" : "VS"
      },
      {
        "Commune" : "Eison (St-Martin)",
        "NPA" : 1969,
        "Canton" : "VS"
      },
      {
        "Commune" : "Eisten",
        "NPA" : 3922,
        "Canton" : "VS"
      },
      {
        "Commune" : "Elfingen",
        "NPA" : 5077,
        "Canton" : "AG"
      },
      {
        "Commune" : "Elgg",
        "NPA" : 8353,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ellighausen",
        "NPA" : 8566,
        "Canton" : "TG"
      },
      {
        "Commune" : "Ellikon am Rhein",
        "NPA" : 8464,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ellikon an der Thur",
        "NPA" : 8548,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Elm",
        "NPA" : 8767,
        "Canton" : "GL"
      },
      {
        "Commune" : "Elsau",
        "NPA" : 8352,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Embd",
        "NPA" : 3926,
        "Canton" : "VS"
      },
      {
        "Commune" : "Embrach",
        "NPA" : 8424,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Emdthal",
        "NPA" : 3711,
        "Canton" : "BE"
      },
      {
        "Commune" : "Emmen",
        "NPA" : 6032,
        "Canton" : "LU"
      },
      {
        "Commune" : "Emmenbrücke",
        "NPA" : 6020,
        "Canton" : "LU"
      },
      {
        "Commune" : "Emmenmatt",
        "NPA" : 3543,
        "Canton" : "BE"
      },
      {
        "Commune" : "Emmetten",
        "NPA" : 6376,
        "Canton" : "NW"
      },
      {
        "Commune" : "Endingen",
        "NPA" : 5304,
        "Canton" : "AG"
      },
      {
        "Commune" : "Engelberg",
        "NPA" : 6390,
        "Canton" : "OW"
      },
      {
        "Commune" : "Engelburg",
        "NPA" : 9032,
        "Canton" : "SG"
      },
      {
        "Commune" : "Enges",
        "NPA" : 2073,
        "Canton" : "NE"
      },
      {
        "Commune" : "Enggistein",
        "NPA" : 3077,
        "Canton" : "BE"
      },
      {
        "Commune" : "Engi",
        "NPA" : 8765,
        "Canton" : "GL"
      },
      {
        "Commune" : "Engishofen",
        "NPA" : 8586,
        "Canton" : "TG"
      },
      {
        "Commune" : "Englisberg",
        "NPA" : 3086,
        "Canton" : "BE"
      },
      {
        "Commune" : "Engollon",
        "NPA" : 2063,
        "Canton" : "NE"
      },
      {
        "Commune" : "Engwang",
        "NPA" : 8556,
        "Canton" : "TG"
      },
      {
        "Commune" : "Engwilen",
        "NPA" : 8564,
        "Canton" : "TG"
      },
      {
        "Commune" : "Ennenda",
        "NPA" : 8755,
        "Canton" : "GL"
      },
      {
        "Commune" : "Ennetaach",
        "NPA" : 8586,
        "Canton" : "TG"
      },
      {
        "Commune" : "Ennetbaden",
        "NPA" : 5408,
        "Canton" : "AG"
      },
      {
        "Commune" : "Ennetbühl",
        "NPA" : 9651,
        "Canton" : "SG"
      },
      {
        "Commune" : "Ennetbürgen",
        "NPA" : 6373,
        "Canton" : "NW"
      },
      {
        "Commune" : "Ennetmoos",
        "NPA" : 6372,
        "Canton" : "NW"
      },
      {
        "Commune" : "Enney",
        "NPA" : 1667,
        "Canton" : "FR"
      },
      {
        "Commune" : "Entlebuch",
        "NPA" : 6162,
        "Canton" : "LU"
      },
      {
        "Commune" : "Epagny",
        "NPA" : 1663,
        "Canton" : "FR"
      },
      {
        "Commune" : "Epalinges",
        "NPA" : 1066,
        "Canton" : "VD"
      },
      {
        "Commune" : "Epautheyres",
        "NPA" : 1417,
        "Canton" : "VD"
      },
      {
        "Commune" : "Epauvillers",
        "NPA" : 2885,
        "Canton" : "JU"
      },
      {
        "Commune" : "Ependes FR",
        "NPA" : 1731,
        "Canton" : "FR"
      },
      {
        "Commune" : "Ependes VD",
        "NPA" : 1434,
        "Canton" : "VD"
      },
      {
        "Commune" : "Epesses",
        "NPA" : 1098,
        "Canton" : "VD"
      },
      {
        "Commune" : "Epiquerez",
        "NPA" : 2886,
        "Canton" : "JU"
      },
      {
        "Commune" : "Eppenberg",
        "NPA" : 5012,
        "Canton" : "SO"
      },
      {
        "Commune" : "Epsach",
        "NPA" : 3272,
        "Canton" : "BE"
      },
      {
        "Commune" : "Eptingen",
        "NPA" : 4458,
        "Canton" : "BL"
      },
      {
        "Commune" : "Erde",
        "NPA" : 1976,
        "Canton" : "VS"
      },
      {
        "Commune" : "Ergisch",
        "NPA" : 3947,
        "Canton" : "VS"
      },
      {
        "Commune" : "Eriswil",
        "NPA" : 4952,
        "Canton" : "BE"
      },
      {
        "Commune" : "Eriz",
        "NPA" : 3619,
        "Canton" : "BE"
      },
      {
        "Commune" : "Erlach",
        "NPA" : 3235,
        "Canton" : "BE"
      },
      {
        "Commune" : "Erlen",
        "NPA" : 8586,
        "Canton" : "TG"
      },
      {
        "Commune" : "Erlenbach ZH",
        "NPA" : 8703,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Erlenbach im Simmental",
        "NPA" : 3762,
        "Canton" : "BE"
      },
      {
        "Commune" : "Erlinsbach",
        "NPA" : 5018,
        "Canton" : "AG"
      },
      {
        "Commune" : "Erlinsbach SO",
        "NPA" : 5015,
        "Canton" : "SO"
      },
      {
        "Commune" : "Ermatingen",
        "NPA" : 8272,
        "Canton" : "TG"
      },
      {
        "Commune" : "Ermensee",
        "NPA" : 6294,
        "Canton" : "LU"
      },
      {
        "Commune" : "Ermenswil",
        "NPA" : 8734,
        "Canton" : "SG"
      },
      {
        "Commune" : "Ernen",
        "NPA" : 3995,
        "Canton" : "VS"
      },
      {
        "Commune" : "Ernetschwil",
        "NPA" : 8725,
        "Canton" : "SG"
      },
      {
        "Commune" : "Erschmatt",
        "NPA" : 3957,
        "Canton" : "VS"
      },
      {
        "Commune" : "Erschwil",
        "NPA" : 4228,
        "Canton" : "SO"
      },
      {
        "Commune" : "Ersigen",
        "NPA" : 3423,
        "Canton" : "BE"
      },
      {
        "Commune" : "Erstfeld",
        "NPA" : 6472,
        "Canton" : "UR"
      },
      {
        "Commune" : "Eschen",
        "NPA" : 9492,
        "Canton" : "LI"
      },
      {
        "Commune" : "Eschenbach LU",
        "NPA" : 6274,
        "Canton" : "LU"
      },
      {
        "Commune" : "Eschenbach SG",
        "NPA" : 8733,
        "Canton" : "SG"
      },
      {
        "Commune" : "Eschenz",
        "NPA" : 8264,
        "Canton" : "TG"
      },
      {
        "Commune" : "Eschert",
        "NPA" : 2743,
        "Canton" : "BE"
      },
      {
        "Commune" : "Eschikofen",
        "NPA" : 8553,
        "Canton" : "TG"
      },
      {
        "Commune" : "Eschlikon TG",
        "NPA" : 8360,
        "Canton" : "TG"
      },
      {
        "Commune" : "Escholzmatt",
        "NPA" : 6182,
        "Canton" : "LU"
      },
      {
        "Commune" : "Esmonts",
        "NPA" : 1670,
        "Canton" : "FR"
      },
      {
        "Commune" : "Essert FR",
        "NPA" : 1724,
        "Canton" : "FR"
      },
      {
        "Commune" : "Essert-Pittet",
        "NPA" : 1435,
        "Canton" : "VD"
      },
      {
        "Commune" : "Essert-sous-Champvent",
        "NPA" : 1443,
        "Canton" : "VD"
      },
      {
        "Commune" : "Essertes",
        "NPA" : 1078,
        "Canton" : "VD"
      },
      {
        "Commune" : "Essertines-sur-Rolle",
        "NPA" : 1186,
        "Canton" : "VD"
      },
      {
        "Commune" : "Essertines-sur-Yverdon",
        "NPA" : 1417,
        "Canton" : "VD"
      },
      {
        "Commune" : "Esslingen",
        "NPA" : 8133,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Estavannens",
        "NPA" : 1665,
        "Canton" : "FR"
      },
      {
        "Commune" : "Estavayer-le-Gibloux",
        "NPA" : 1695,
        "Canton" : "FR"
      },
      {
        "Commune" : "Estavayer-le-Lac",
        "NPA" : 1470,
        "Canton" : "FR"
      },
      {
        "Commune" : "Estévenens",
        "NPA" : 1687,
        "Canton" : "FR"
      },
      {
        "Commune" : "Etagnières",
        "NPA" : 1037,
        "Canton" : "VD"
      },
      {
        "Commune" : "Etoy",
        "NPA" : 1163,
        "Canton" : "VD"
      },
      {
        "Commune" : "Ettenhausen TG",
        "NPA" : 8356,
        "Canton" : "TG"
      },
      {
        "Commune" : "Ettingen",
        "NPA" : 4107,
        "Canton" : "BL"
      },
      {
        "Commune" : "Ettiswil",
        "NPA" : 6218,
        "Canton" : "LU"
      },
      {
        "Commune" : "Etzelkofen",
        "NPA" : 3306,
        "Canton" : "BE"
      },
      {
        "Commune" : "Etzgen",
        "NPA" : 5275,
        "Canton" : "AG"
      },
      {
        "Commune" : "Etziken",
        "NPA" : 4554,
        "Canton" : "SO"
      },
      {
        "Commune" : "Etzwilen",
        "NPA" : 8259,
        "Canton" : "TG"
      },
      {
        "Commune" : "Euseigne",
        "NPA" : 1982,
        "Canton" : "VS"
      },
      {
        "Commune" : "Euthal",
        "NPA" : 8844,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Evilard",
        "NPA" : 2533,
        "Canton" : "BE"
      },
      {
        "Commune" : "Evionnaz",
        "NPA" : 1902,
        "Canton" : "VS"
      },
      {
        "Commune" : "Evolène",
        "NPA" : 1983,
        "Canton" : "VS"
      },
      {
        "Commune" : "Eyholz",
        "NPA" : 3930,
        "Canton" : "VS"
      },
      {
        "Commune" : "Eysins",
        "NPA" : 1262,
        "Canton" : "VD"
      },
      {
        "Commune" : "Fahrni b. Thun",
        "NPA" : 3617,
        "Canton" : "BE"
      },
      {
        "Commune" : "Fahrwangen",
        "NPA" : 5615,
        "Canton" : "AG"
      },
      {
        "Commune" : "Fahrweid",
        "NPA" : 8951,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Fahy",
        "NPA" : 2916,
        "Canton" : "JU"
      },
      {
        "Commune" : "Faido",
        "NPA" : 6760,
        "Canton" : "TI"
      },
      {
        "Commune" : "Fajauna",
        "NPA" : 7226,
        "Canton" : "GR"
      },
      {
        "Commune" : "Falera",
        "NPA" : 7153,
        "Canton" : "GR"
      },
      {
        "Commune" : "Fanas",
        "NPA" : 7215,
        "Canton" : "GR"
      },
      {
        "Commune" : "Fankhaus (Trub)",
        "NPA" : 3557,
        "Canton" : "BE"
      },
      {
        "Commune" : "Faoug",
        "NPA" : 1595,
        "Canton" : "VD"
      },
      {
        "Commune" : "Farden",
        "NPA" : 7433,
        "Canton" : "GR"
      },
      {
        "Commune" : "Farnern",
        "NPA" : 4539,
        "Canton" : "BE"
      },
      {
        "Commune" : "Farvagny",
        "NPA" : 1726,
        "Canton" : "FR"
      },
      {
        "Commune" : "Farvagny-le-Petit",
        "NPA" : 1726,
        "Canton" : "FR"
      },
      {
        "Commune" : "Faulensee",
        "NPA" : 3705,
        "Canton" : "BE"
      },
      {
        "Commune" : "Fehraltorf",
        "NPA" : 8320,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Fehren",
        "NPA" : 4232,
        "Canton" : "SO"
      },
      {
        "Commune" : "Felben-Wellhausen",
        "NPA" : 8552,
        "Canton" : "TG"
      },
      {
        "Commune" : "Feldbach",
        "NPA" : 8714,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Feldbrunnen",
        "NPA" : 4532,
        "Canton" : "SO"
      },
      {
        "Commune" : "Feldis/Veulden",
        "NPA" : 7404,
        "Canton" : "GR"
      },
      {
        "Commune" : "Felsberg",
        "NPA" : 7012,
        "Canton" : "GR"
      },
      {
        "Commune" : "Fenalet-sur-Bex",
        "NPA" : 1880,
        "Canton" : "VD"
      },
      {
        "Commune" : "Fenil-sur-Corsier",
        "NPA" : 1809,
        "Canton" : "VD"
      },
      {
        "Commune" : "Fenin",
        "NPA" : 2063,
        "Canton" : "NE"
      },
      {
        "Commune" : "Fenkrieden",
        "NPA" : 5645,
        "Canton" : "AG"
      },
      {
        "Commune" : "Ferden",
        "NPA" : 3916,
        "Canton" : "VS"
      },
      {
        "Commune" : "Ferenbalm",
        "NPA" : 3206,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ferlens VD",
        "NPA" : 1076,
        "Canton" : "VD"
      },
      {
        "Commune" : "Ferpicloz",
        "NPA" : 1724,
        "Canton" : "FR"
      },
      {
        "Commune" : "Ferreyres",
        "NPA" : 1313,
        "Canton" : "VD"
      },
      {
        "Commune" : "Fescoggia",
        "NPA" : 6938,
        "Canton" : "TI"
      },
      {
        "Commune" : "Feuerthalen",
        "NPA" : 8245,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Feusisberg",
        "NPA" : 8835,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Feutersoey",
        "NPA" : 3784,
        "Canton" : "BE"
      },
      {
        "Commune" : "Fex",
        "NPA" : 7514,
        "Canton" : "GR"
      },
      {
        "Commune" : "Fey",
        "NPA" : 1044,
        "Canton" : "VD"
      },
      {
        "Commune" : "Fey (Nendaz)",
        "NPA" : 1996,
        "Canton" : "VS"
      },
      {
        "Commune" : "Fiaugères",
        "NPA" : 1609,
        "Canton" : "FR"
      },
      {
        "Commune" : "Fidaz",
        "NPA" : 7019,
        "Canton" : "GR"
      },
      {
        "Commune" : "Fideris",
        "NPA" : 7235,
        "Canton" : "GR"
      },
      {
        "Commune" : "Fiesch",
        "NPA" : 3984,
        "Canton" : "VS"
      },
      {
        "Commune" : "Fieschertal",
        "NPA" : 3984,
        "Canton" : "VS"
      },
      {
        "Commune" : "Fiez",
        "NPA" : 1420,
        "Canton" : "VD"
      },
      {
        "Commune" : "Figino",
        "NPA" : 6918,
        "Canton" : "TI"
      },
      {
        "Commune" : "Filet",
        "NPA" : 3983,
        "Canton" : "VS"
      },
      {
        "Commune" : "Filisur",
        "NPA" : 7477,
        "Canton" : "GR"
      },
      {
        "Commune" : "Filzbach",
        "NPA" : 8757,
        "Canton" : "GL"
      },
      {
        "Commune" : "Finhaut",
        "NPA" : 1925,
        "Canton" : "VS"
      },
      {
        "Commune" : "Finsterhennen",
        "NPA" : 2577,
        "Canton" : "BE"
      },
      {
        "Commune" : "Finstersee",
        "NPA" : 6313,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Finsterwald b. Entlebuch",
        "NPA" : 6162,
        "Canton" : "LU"
      },
      {
        "Commune" : "Fionnay",
        "NPA" : 1948,
        "Canton" : "VS"
      },
      {
        "Commune" : "Fischbach LU",
        "NPA" : 6145,
        "Canton" : "LU"
      },
      {
        "Commune" : "Fischbach-Göslikon",
        "NPA" : 5525,
        "Canton" : "AG"
      },
      {
        "Commune" : "Fischenthal",
        "NPA" : 8497,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Fischingen",
        "NPA" : 8376,
        "Canton" : "TG"
      },
      {
        "Commune" : "Fisibach",
        "NPA" : 5467,
        "Canton" : "AG"
      },
      {
        "Commune" : "Fislisbach",
        "NPA" : 5442,
        "Canton" : "AG"
      },
      {
        "Commune" : "Flaach",
        "NPA" : 8416,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Flamatt",
        "NPA" : 3175,
        "Canton" : "FR"
      },
      {
        "Commune" : "Flanthey",
        "NPA" : 3978,
        "Canton" : "VS"
      },
      {
        "Commune" : "Flawil",
        "NPA" : 9230,
        "Canton" : "SG"
      },
      {
        "Commune" : "Flendruz",
        "NPA" : 1659,
        "Canton" : "VD"
      },
      {
        "Commune" : "Flerden",
        "NPA" : 7426,
        "Canton" : "GR"
      },
      {
        "Commune" : "Fleurier",
        "NPA" : 2114,
        "Canton" : "NE"
      },
      {
        "Commune" : "Flims Dorf",
        "NPA" : 7017,
        "Canton" : "GR"
      },
      {
        "Commune" : "Flims Waldhaus",
        "NPA" : 7018,
        "Canton" : "GR"
      },
      {
        "Commune" : "Flond",
        "NPA" : 7137,
        "Canton" : "GR"
      },
      {
        "Commune" : "Flumenthal",
        "NPA" : 4534,
        "Canton" : "SO"
      },
      {
        "Commune" : "Flums",
        "NPA" : 8890,
        "Canton" : "SG"
      },
      {
        "Commune" : "Flums Hochwiese",
        "NPA" : 8893,
        "Canton" : "SG"
      },
      {
        "Commune" : "Flumserberg Bergheim",
        "NPA" : 8896,
        "Canton" : "SG"
      },
      {
        "Commune" : "Flumserberg Portels",
        "NPA" : 8895,
        "Canton" : "SG"
      },
      {
        "Commune" : "Flumserberg Saxli",
        "NPA" : 8894,
        "Canton" : "SG"
      },
      {
        "Commune" : "Flumserberg Tannenbodenalp",
        "NPA" : 8898,
        "Canton" : "SG"
      },
      {
        "Commune" : "Flumserberg Tannenheim",
        "NPA" : 8897,
        "Canton" : "SG"
      },
      {
        "Commune" : "Flurlingen",
        "NPA" : 8247,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Fläsch",
        "NPA" : 7306,
        "Canton" : "GR"
      },
      {
        "Commune" : "Flüelen",
        "NPA" : 6454,
        "Canton" : "UR"
      },
      {
        "Commune" : "Flüeli-Ranft",
        "NPA" : 6073,
        "Canton" : "OW"
      },
      {
        "Commune" : "Flüh",
        "NPA" : 4112,
        "Canton" : "SO"
      },
      {
        "Commune" : "Flühli LU",
        "NPA" : 6173,
        "Canton" : "LU"
      },
      {
        "Commune" : "Font",
        "NPA" : 1473,
        "Canton" : "FR"
      },
      {
        "Commune" : "Fontaine Dessous (Liddes)",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Fontaine Dessus (Liddes)",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Fontainemelon",
        "NPA" : 2052,
        "Canton" : "NE"
      },
      {
        "Commune" : "Fontaines NE",
        "NPA" : 2046,
        "Canton" : "NE"
      },
      {
        "Commune" : "Fontaines-sur-Grandson",
        "NPA" : 1421,
        "Canton" : "VD"
      },
      {
        "Commune" : "Fontanezier",
        "NPA" : 1423,
        "Canton" : "VD"
      },
      {
        "Commune" : "Fontannen b. Wolhusen",
        "NPA" : 6110,
        "Canton" : "LU"
      },
      {
        "Commune" : "Fontenais",
        "NPA" : 2902,
        "Canton" : "JU"
      },
      {
        "Commune" : "Fontnas",
        "NPA" : 9476,
        "Canton" : "SG"
      },
      {
        "Commune" : "Forch",
        "NPA" : 8127,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Forel (Lavaux)",
        "NPA" : 1072,
        "Canton" : "VD"
      },
      {
        "Commune" : "Forel FR",
        "NPA" : 1475,
        "Canton" : "FR"
      },
      {
        "Commune" : "Forel-sur-Lucens",
        "NPA" : 1526,
        "Canton" : "VD"
      },
      {
        "Commune" : "Formangueires",
        "NPA" : 1782,
        "Canton" : "FR"
      },
      {
        "Commune" : "Fornet-Dessous",
        "NPA" : 2717,
        "Canton" : "BE"
      },
      {
        "Commune" : "Fornet-Dessus",
        "NPA" : 2718,
        "Canton" : "JU"
      },
      {
        "Commune" : "Fornex (Liddes)",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Forst b. Längenbühl",
        "NPA" : 3636,
        "Canton" : "BE"
      },
      {
        "Commune" : "Fortunau (Ayent)",
        "NPA" : 1966,
        "Canton" : "VS"
      },
      {
        "Commune" : "Founex",
        "NPA" : 1297,
        "Canton" : "VD"
      },
      {
        "Commune" : "Frasco",
        "NPA" : 6636,
        "Canton" : "TI"
      },
      {
        "Commune" : "Frasnacht",
        "NPA" : 9320,
        "Canton" : "TG"
      },
      {
        "Commune" : "Frasses",
        "NPA" : 1483,
        "Canton" : "FR"
      },
      {
        "Commune" : "Fraubrunnen",
        "NPA" : 3312,
        "Canton" : "BE"
      },
      {
        "Commune" : "Frauenfeld",
        "NPA" : 8500,
        "Canton" : "TG"
      },
      {
        "Commune" : "Frauenkappelen",
        "NPA" : 3202,
        "Canton" : "BE"
      },
      {
        "Commune" : "Fregiécourt",
        "NPA" : 2953,
        "Canton" : "JU"
      },
      {
        "Commune" : "Freidorf TG",
        "NPA" : 9306,
        "Canton" : "TG"
      },
      {
        "Commune" : "Freienbach",
        "NPA" : 8807,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Freienstein",
        "NPA" : 8427,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Freienwil",
        "NPA" : 5423,
        "Canton" : "AG"
      },
      {
        "Commune" : "Freimettigen",
        "NPA" : 3510,
        "Canton" : "BE"
      },
      {
        "Commune" : "Frenières-sur-Bex",
        "NPA" : 1880,
        "Canton" : "VD"
      },
      {
        "Commune" : "Frenkendorf",
        "NPA" : 4402,
        "Canton" : "BL"
      },
      {
        "Commune" : "Fresens",
        "NPA" : 2027,
        "Canton" : "NE"
      },
      {
        "Commune" : "Fretereules",
        "NPA" : 2149,
        "Canton" : "NE"
      },
      {
        "Commune" : "Freudwil",
        "NPA" : 8615,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Fribourg",
        "NPA" : 1700,
        "Canton" : "FR"
      },
      {
        "Commune" : "Frick",
        "NPA" : 5070,
        "Canton" : "AG"
      },
      {
        "Commune" : "Frieswil",
        "NPA" : 3035,
        "Canton" : "BE"
      },
      {
        "Commune" : "Friltschen",
        "NPA" : 9504,
        "Canton" : "TG"
      },
      {
        "Commune" : "Frinvillier",
        "NPA" : 2535,
        "Canton" : "BE"
      },
      {
        "Commune" : "Froideville",
        "NPA" : 1055,
        "Canton" : "VD"
      },
      {
        "Commune" : "Fruthwilen",
        "NPA" : 8269,
        "Canton" : "TG"
      },
      {
        "Commune" : "Frutigen",
        "NPA" : 3714,
        "Canton" : "BE"
      },
      {
        "Commune" : "Fräschels",
        "NPA" : 3284,
        "Canton" : "FR"
      },
      {
        "Commune" : "Frümsen",
        "NPA" : 9467,
        "Canton" : "SG"
      },
      {
        "Commune" : "Ftan",
        "NPA" : 7551,
        "Canton" : "GR"
      },
      {
        "Commune" : "Fuldera",
        "NPA" : 7533,
        "Canton" : "GR"
      },
      {
        "Commune" : "Fulenbach",
        "NPA" : 4629,
        "Canton" : "SO"
      },
      {
        "Commune" : "Full-Reuenthal",
        "NPA" : 5324,
        "Canton" : "AG"
      },
      {
        "Commune" : "Fully",
        "NPA" : 1926,
        "Canton" : "VS"
      },
      {
        "Commune" : "Furna",
        "NPA" : 7232,
        "Canton" : "GR"
      },
      {
        "Commune" : "Fusio",
        "NPA" : 6696,
        "Canton" : "TI"
      },
      {
        "Commune" : "Fällanden",
        "NPA" : 8117,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Féchy",
        "NPA" : 1173,
        "Canton" : "VD"
      },
      {
        "Commune" : "Fétigny",
        "NPA" : 1532,
        "Canton" : "FR"
      },
      {
        "Commune" : "Füllinsdorf",
        "NPA" : 4414,
        "Canton" : "BL"
      },
      {
        "Commune" : "Fürigen",
        "NPA" : 6363,
        "Canton" : "NW"
      },
      {
        "Commune" : "Fürstenau",
        "NPA" : 7414,
        "Canton" : "GR"
      },
      {
        "Commune" : "Fürstenaubruck",
        "NPA" : 7413,
        "Canton" : "GR"
      },
      {
        "Commune" : "Gabi (Simplon)",
        "NPA" : 3907,
        "Canton" : "VS"
      },
      {
        "Commune" : "Gachnang",
        "NPA" : 8547,
        "Canton" : "TG"
      },
      {
        "Commune" : "Gadenstätt",
        "NPA" : 7244,
        "Canton" : "GR"
      },
      {
        "Commune" : "Gadmen",
        "NPA" : 3863,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gais",
        "NPA" : 9056,
        "Canton" : "AR"
      },
      {
        "Commune" : "Galgenen",
        "NPA" : 8854,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Galmiz",
        "NPA" : 3285,
        "Canton" : "FR"
      },
      {
        "Commune" : "Gals",
        "NPA" : 3238,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gammen",
        "NPA" : 3206,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gampel",
        "NPA" : 3945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Gampelen",
        "NPA" : 3236,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gamprin-Bendern",
        "NPA" : 9487,
        "Canton" : "LI"
      },
      {
        "Commune" : "Gams",
        "NPA" : 9473,
        "Canton" : "SG"
      },
      {
        "Commune" : "Gamsen",
        "NPA" : 3900,
        "Canton" : "VS"
      },
      {
        "Commune" : "Gandria",
        "NPA" : 6978,
        "Canton" : "TI"
      },
      {
        "Commune" : "Gansingen",
        "NPA" : 5272,
        "Canton" : "AG"
      },
      {
        "Commune" : "Ganterschwil",
        "NPA" : 9608,
        "Canton" : "SG"
      },
      {
        "Commune" : "Gasel",
        "NPA" : 3144,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gattikon",
        "NPA" : 8136,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Gebenstorf",
        "NPA" : 5412,
        "Canton" : "AG"
      },
      {
        "Commune" : "Gebertingen",
        "NPA" : 8725,
        "Canton" : "SG"
      },
      {
        "Commune" : "Geiss",
        "NPA" : 6123,
        "Canton" : "LU"
      },
      {
        "Commune" : "Gelfingen",
        "NPA" : 6284,
        "Canton" : "LU"
      },
      {
        "Commune" : "Gelterfingen",
        "NPA" : 3126,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gelterkinden",
        "NPA" : 4460,
        "Canton" : "BL"
      },
      {
        "Commune" : "Geltwil",
        "NPA" : 5637,
        "Canton" : "AG"
      },
      {
        "Commune" : "Gempen",
        "NPA" : 4145,
        "Canton" : "SO"
      },
      {
        "Commune" : "Gempenach",
        "NPA" : 3215,
        "Canton" : "FR"
      },
      {
        "Commune" : "Genestrerio",
        "NPA" : 6852,
        "Canton" : "TI"
      },
      {
        "Commune" : "Genolier",
        "NPA" : 1272,
        "Canton" : "VD"
      },
      {
        "Commune" : "Genthod",
        "NPA" : 1294,
        "Canton" : "GE"
      },
      {
        "Commune" : "Gentilino",
        "NPA" : 6925,
        "Canton" : "TI"
      },
      {
        "Commune" : "Genève",
        "NPA" : 1202,
        "Canton" : "GE"
      },
      {
        "Commune" : "Genève",
        "NPA" : 1204,
        "Canton" : "GE"
      },
      {
        "Commune" : "Genève",
        "NPA" : 1207,
        "Canton" : "GE"
      },
      {
        "Commune" : "Genève",
        "NPA" : 1206,
        "Canton" : "GE"
      },
      {
        "Commune" : "Genève",
        "NPA" : 1208,
        "Canton" : "GE"
      },
      {
        "Commune" : "Genève",
        "NPA" : 1205,
        "Canton" : "GE"
      },
      {
        "Commune" : "Genève",
        "NPA" : 1201,
        "Canton" : "GE"
      },
      {
        "Commune" : "Genève",
        "NPA" : 1203,
        "Canton" : "GE"
      },
      {
        "Commune" : "Genève",
        "NPA" : 1209,
        "Canton" : "GE"
      },
      {
        "Commune" : "Genève",
        "NPA" : 1215,
        "Canton" : "GE"
      },
      {
        "Commune" : "Gerlafingen",
        "NPA" : 4563,
        "Canton" : "SO"
      },
      {
        "Commune" : "Gerlikon",
        "NPA" : 8500,
        "Canton" : "TG"
      },
      {
        "Commune" : "Geroldswil",
        "NPA" : 8954,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Gerolfingen",
        "NPA" : 2575,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gerra (Gambarogno)",
        "NPA" : 6576,
        "Canton" : "TI"
      },
      {
        "Commune" : "Gerra (Verzasca)",
        "NPA" : 6635,
        "Canton" : "TI"
      },
      {
        "Commune" : "Gersau",
        "NPA" : 6442,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Gerzensee",
        "NPA" : 3115,
        "Canton" : "BE"
      },
      {
        "Commune" : "Geschinen",
        "NPA" : 3985,
        "Canton" : "VS"
      },
      {
        "Commune" : "Gettnau",
        "NPA" : 6142,
        "Canton" : "LU"
      },
      {
        "Commune" : "Geuensee",
        "NPA" : 6232,
        "Canton" : "LU"
      },
      {
        "Commune" : "Ghirone",
        "NPA" : 6720,
        "Canton" : "TI"
      },
      {
        "Commune" : "Gibswil",
        "NPA" : 8498,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Giebenach",
        "NPA" : 4304,
        "Canton" : "BL"
      },
      {
        "Commune" : "Giez",
        "NPA" : 1429,
        "Canton" : "VD"
      },
      {
        "Commune" : "Giffers",
        "NPA" : 1735,
        "Canton" : "FR"
      },
      {
        "Commune" : "Gillarens",
        "NPA" : 1673,
        "Canton" : "FR"
      },
      {
        "Commune" : "Gilly",
        "NPA" : 1182,
        "Canton" : "VD"
      },
      {
        "Commune" : "Gimel",
        "NPA" : 1188,
        "Canton" : "VD"
      },
      {
        "Commune" : "Gimmelwald",
        "NPA" : 3826,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gingins",
        "NPA" : 1276,
        "Canton" : "VD"
      },
      {
        "Commune" : "Giornico",
        "NPA" : 6745,
        "Canton" : "TI"
      },
      {
        "Commune" : "Gipf-Oberfrick",
        "NPA" : 5073,
        "Canton" : "AG"
      },
      {
        "Commune" : "Gisikon",
        "NPA" : 6038,
        "Canton" : "LU"
      },
      {
        "Commune" : "Giswil",
        "NPA" : 6074,
        "Canton" : "OW"
      },
      {
        "Commune" : "Giubiasco",
        "NPA" : 6512,
        "Canton" : "TI"
      },
      {
        "Commune" : "Giumaglio",
        "NPA" : 6678,
        "Canton" : "TI"
      },
      {
        "Commune" : "Givisiez",
        "NPA" : 1762,
        "Canton" : "FR"
      },
      {
        "Commune" : "Givrins",
        "NPA" : 1271,
        "Canton" : "VD"
      },
      {
        "Commune" : "Gland",
        "NPA" : 1196,
        "Canton" : "VD"
      },
      {
        "Commune" : "Glarus",
        "NPA" : 8750,
        "Canton" : "GL"
      },
      {
        "Commune" : "Glashütten",
        "NPA" : 4856,
        "Canton" : "AG"
      },
      {
        "Commune" : "Glaspass",
        "NPA" : 7428,
        "Canton" : "GR"
      },
      {
        "Commune" : "Glattbrugg",
        "NPA" : 8152,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Glattfelden",
        "NPA" : 8192,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Glattpark (Opfikon)",
        "NPA" : 8152,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Gletterens",
        "NPA" : 1544,
        "Canton" : "FR"
      },
      {
        "Commune" : "Glion",
        "NPA" : 1823,
        "Canton" : "VD"
      },
      {
        "Commune" : "Glis",
        "NPA" : 3902,
        "Canton" : "VS"
      },
      {
        "Commune" : "Glovelier",
        "NPA" : 2855,
        "Canton" : "JU"
      },
      {
        "Commune" : "Gluringen",
        "NPA" : 3998,
        "Canton" : "VS"
      },
      {
        "Commune" : "Gnosca",
        "NPA" : 6525,
        "Canton" : "TI"
      },
      {
        "Commune" : "Gockhausen",
        "NPA" : 8044,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Gohl",
        "NPA" : 3553,
        "Canton" : "BE"
      },
      {
        "Commune" : "Golaten",
        "NPA" : 3207,
        "Canton" : "BE"
      },
      {
        "Commune" : "Goldach",
        "NPA" : 9403,
        "Canton" : "SG"
      },
      {
        "Commune" : "Goldau",
        "NPA" : 6410,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Goldingen",
        "NPA" : 8638,
        "Canton" : "SG"
      },
      {
        "Commune" : "Goldiwil (Thun)",
        "NPA" : 3624,
        "Canton" : "BE"
      },
      {
        "Commune" : "Goldswil b. Interlaken",
        "NPA" : 3805,
        "Canton" : "BE"
      },
      {
        "Commune" : "Golino",
        "NPA" : 6656,
        "Canton" : "TI"
      },
      {
        "Commune" : "Gollion",
        "NPA" : 1124,
        "Canton" : "VD"
      },
      {
        "Commune" : "Gommiswald",
        "NPA" : 8737,
        "Canton" : "SG"
      },
      {
        "Commune" : "Gondiswil",
        "NPA" : 4955,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gondo",
        "NPA" : 3907,
        "Canton" : "VS"
      },
      {
        "Commune" : "Gonten",
        "NPA" : 9108,
        "Canton" : "AI"
      },
      {
        "Commune" : "Gontenbad",
        "NPA" : 9108,
        "Canton" : "AI"
      },
      {
        "Commune" : "Gontenschwil",
        "NPA" : 5728,
        "Canton" : "AG"
      },
      {
        "Commune" : "Goppenstein",
        "NPA" : 3917,
        "Canton" : "VS"
      },
      {
        "Commune" : "Goppisberg",
        "NPA" : 3983,
        "Canton" : "VS"
      },
      {
        "Commune" : "Gordevio",
        "NPA" : 6672,
        "Canton" : "TI"
      },
      {
        "Commune" : "Gordola",
        "NPA" : 6596,
        "Canton" : "TI"
      },
      {
        "Commune" : "Gorduno",
        "NPA" : 6518,
        "Canton" : "TI"
      },
      {
        "Commune" : "Gorgier",
        "NPA" : 2023,
        "Canton" : "NE"
      },
      {
        "Commune" : "Gossau SG",
        "NPA" : 9200,
        "Canton" : "SG"
      },
      {
        "Commune" : "Gossau ZH",
        "NPA" : 8625,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Gossens",
        "NPA" : 1407,
        "Canton" : "VD"
      },
      {
        "Commune" : "Gossliwil",
        "NPA" : 4579,
        "Canton" : "SO"
      },
      {
        "Commune" : "Gottlieben",
        "NPA" : 8274,
        "Canton" : "TG"
      },
      {
        "Commune" : "Goumoens-la-Ville",
        "NPA" : 1376,
        "Canton" : "VD"
      },
      {
        "Commune" : "Goumoens-le-Jux",
        "NPA" : 1376,
        "Canton" : "VD"
      },
      {
        "Commune" : "Goumois",
        "NPA" : 2354,
        "Canton" : "JU"
      },
      {
        "Commune" : "Graben",
        "NPA" : 3376,
        "Canton" : "BE"
      },
      {
        "Commune" : "Grabs",
        "NPA" : 9472,
        "Canton" : "SG"
      },
      {
        "Commune" : "Grabserberg",
        "NPA" : 9472,
        "Canton" : "SG"
      },
      {
        "Commune" : "Grafenort",
        "NPA" : 6388,
        "Canton" : "OW"
      },
      {
        "Commune" : "Grafenried",
        "NPA" : 3308,
        "Canton" : "BE"
      },
      {
        "Commune" : "Grafstal",
        "NPA" : 8310,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Graltshausen",
        "NPA" : 8572,
        "Canton" : "TG"
      },
      {
        "Commune" : "Grancia",
        "NPA" : 6916,
        "Canton" : "TI"
      },
      {
        "Commune" : "Grancy",
        "NPA" : 1117,
        "Canton" : "VD"
      },
      {
        "Commune" : "Grand-Lancy",
        "NPA" : 1212,
        "Canton" : "GE"
      },
      {
        "Commune" : "Grandcour",
        "NPA" : 1543,
        "Canton" : "VD"
      },
      {
        "Commune" : "Grandevent",
        "NPA" : 1421,
        "Canton" : "VD"
      },
      {
        "Commune" : "Grandfontaine",
        "NPA" : 2908,
        "Canton" : "JU"
      },
      {
        "Commune" : "Grandsivaz",
        "NPA" : 1775,
        "Canton" : "FR"
      },
      {
        "Commune" : "Grandson",
        "NPA" : 1422,
        "Canton" : "VD"
      },
      {
        "Commune" : "Grandval",
        "NPA" : 2745,
        "Canton" : "BE"
      },
      {
        "Commune" : "Grandvaux",
        "NPA" : 1091,
        "Canton" : "VD"
      },
      {
        "Commune" : "Grandvillard",
        "NPA" : 1666,
        "Canton" : "FR"
      },
      {
        "Commune" : "Granges (Veveyse)",
        "NPA" : 1614,
        "Canton" : "FR"
      },
      {
        "Commune" : "Granges VS",
        "NPA" : 3977,
        "Canton" : "VS"
      },
      {
        "Commune" : "Granges-Paccot",
        "NPA" : 1763,
        "Canton" : "FR"
      },
      {
        "Commune" : "Granges-de-Vesin",
        "NPA" : 1484,
        "Canton" : "FR"
      },
      {
        "Commune" : "Granges-près-Marnand",
        "NPA" : 1523,
        "Canton" : "VD"
      },
      {
        "Commune" : "Grangettes-près-Romont",
        "NPA" : 1686,
        "Canton" : "FR"
      },
      {
        "Commune" : "Granois (Savièse)",
        "NPA" : 1965,
        "Canton" : "VS"
      },
      {
        "Commune" : "Grasswil",
        "NPA" : 3365,
        "Canton" : "BE"
      },
      {
        "Commune" : "Grattavache",
        "NPA" : 1624,
        "Canton" : "FR"
      },
      {
        "Commune" : "Gravesano",
        "NPA" : 6929,
        "Canton" : "TI"
      },
      {
        "Commune" : "Greich",
        "NPA" : 3983,
        "Canton" : "VS"
      },
      {
        "Commune" : "Greifensee",
        "NPA" : 8606,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Grellingen",
        "NPA" : 4203,
        "Canton" : "BL"
      },
      {
        "Commune" : "Grenchen",
        "NPA" : 2540,
        "Canton" : "SO"
      },
      {
        "Commune" : "Greng",
        "NPA" : 3280,
        "Canton" : "FR"
      },
      {
        "Commune" : "Grengiols",
        "NPA" : 3993,
        "Canton" : "VS"
      },
      {
        "Commune" : "Grenilles",
        "NPA" : 1726,
        "Canton" : "FR"
      },
      {
        "Commune" : "Grens",
        "NPA" : 1274,
        "Canton" : "VD"
      },
      {
        "Commune" : "Greppen",
        "NPA" : 6404,
        "Canton" : "LU"
      },
      {
        "Commune" : "Gresso",
        "NPA" : 6611,
        "Canton" : "TI"
      },
      {
        "Commune" : "Gressy",
        "NPA" : 1432,
        "Canton" : "VD"
      },
      {
        "Commune" : "Gretschins",
        "NPA" : 9479,
        "Canton" : "SG"
      },
      {
        "Commune" : "Gretzenbach",
        "NPA" : 5014,
        "Canton" : "SO"
      },
      {
        "Commune" : "Grimentz",
        "NPA" : 3961,
        "Canton" : "VS"
      },
      {
        "Commune" : "Grimisuat",
        "NPA" : 1971,
        "Canton" : "VS"
      },
      {
        "Commune" : "Grindel",
        "NPA" : 4247,
        "Canton" : "SO"
      },
      {
        "Commune" : "Grindelwald",
        "NPA" : 3818,
        "Canton" : "BE"
      },
      {
        "Commune" : "Grolley",
        "NPA" : 1772,
        "Canton" : "FR"
      },
      {
        "Commune" : "Grono",
        "NPA" : 6537,
        "Canton" : "GR"
      },
      {
        "Commune" : "Gross",
        "NPA" : 8841,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Grossaffoltern",
        "NPA" : 3257,
        "Canton" : "BE"
      },
      {
        "Commune" : "Grossdietwil",
        "NPA" : 6146,
        "Canton" : "LU"
      },
      {
        "Commune" : "Grosshöchstetten",
        "NPA" : 3506,
        "Canton" : "BE"
      },
      {
        "Commune" : "Grosswangen",
        "NPA" : 6022,
        "Canton" : "LU"
      },
      {
        "Commune" : "Grub AR",
        "NPA" : 9035,
        "Canton" : "AR"
      },
      {
        "Commune" : "Grub SG",
        "NPA" : 9036,
        "Canton" : "SG"
      },
      {
        "Commune" : "Gruben",
        "NPA" : 3946,
        "Canton" : "VS"
      },
      {
        "Commune" : "Grugnay (Chamoson)",
        "NPA" : 1955,
        "Canton" : "VS"
      },
      {
        "Commune" : "Grund b. Gstaad",
        "NPA" : 3783,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gruyères",
        "NPA" : 1663,
        "Canton" : "FR"
      },
      {
        "Commune" : "Gryon",
        "NPA" : 1882,
        "Canton" : "VD"
      },
      {
        "Commune" : "Grächen",
        "NPA" : 3925,
        "Canton" : "VS"
      },
      {
        "Commune" : "Gränichen",
        "NPA" : 5722,
        "Canton" : "AG"
      },
      {
        "Commune" : "Gräslikon",
        "NPA" : 8415,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Grône",
        "NPA" : 3979,
        "Canton" : "VS"
      },
      {
        "Commune" : "Grünen",
        "NPA" : 3455,
        "Canton" : "BE"
      },
      {
        "Commune" : "Grünenmatt",
        "NPA" : 3452,
        "Canton" : "BE"
      },
      {
        "Commune" : "Grüningen",
        "NPA" : 8627,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Grüsch",
        "NPA" : 7214,
        "Canton" : "GR"
      },
      {
        "Commune" : "Grüt (Gossau ZH)",
        "NPA" : 8624,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Gstaad",
        "NPA" : 3780,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gsteig b. Gstaad",
        "NPA" : 3785,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gsteigwiler",
        "NPA" : 3814,
        "Canton" : "BE"
      },
      {
        "Commune" : "Guarda",
        "NPA" : 7545,
        "Canton" : "GR"
      },
      {
        "Commune" : "Gudo",
        "NPA" : 6515,
        "Canton" : "TI"
      },
      {
        "Commune" : "Guggisberg",
        "NPA" : 3158,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gumefens",
        "NPA" : 1643,
        "Canton" : "FR"
      },
      {
        "Commune" : "Gundetswil",
        "NPA" : 8543,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Guntalingen",
        "NPA" : 8468,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Gunten",
        "NPA" : 3654,
        "Canton" : "BE"
      },
      {
        "Commune" : "Guntershausen b. Aadorf",
        "NPA" : 8357,
        "Canton" : "TG"
      },
      {
        "Commune" : "Guntershausen b. Berg",
        "NPA" : 8572,
        "Canton" : "TG"
      },
      {
        "Commune" : "Gunterswilen",
        "NPA" : 8564,
        "Canton" : "TG"
      },
      {
        "Commune" : "Guntmadingen",
        "NPA" : 8223,
        "Canton" : "SH"
      },
      {
        "Commune" : "Gunzgen",
        "NPA" : 4617,
        "Canton" : "SO"
      },
      {
        "Commune" : "Gunzwil",
        "NPA" : 6222,
        "Canton" : "LU"
      },
      {
        "Commune" : "Gurbrü",
        "NPA" : 3208,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gurmels",
        "NPA" : 3212,
        "Canton" : "FR"
      },
      {
        "Commune" : "Gurtnellen",
        "NPA" : 6482,
        "Canton" : "UR"
      },
      {
        "Commune" : "Gurzelen",
        "NPA" : 3663,
        "Canton" : "BE"
      },
      {
        "Commune" : "Guschelmuth",
        "NPA" : 1792,
        "Canton" : "FR"
      },
      {
        "Commune" : "Gutenburg",
        "NPA" : 4932,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gutenswil",
        "NPA" : 8605,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Guttannen",
        "NPA" : 3864,
        "Canton" : "BE"
      },
      {
        "Commune" : "Guttet-Feschel",
        "NPA" : 3956,
        "Canton" : "VS"
      },
      {
        "Commune" : "Gwatt (Thun)",
        "NPA" : 3645,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gy",
        "NPA" : 1251,
        "Canton" : "GE"
      },
      {
        "Commune" : "Gysenstein",
        "NPA" : 3503,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gächlingen",
        "NPA" : 8214,
        "Canton" : "SH"
      },
      {
        "Commune" : "Gächliwil",
        "NPA" : 4584,
        "Canton" : "SO"
      },
      {
        "Commune" : "Gähwil",
        "NPA" : 9534,
        "Canton" : "SG"
      },
      {
        "Commune" : "Gänsbrunnen",
        "NPA" : 4716,
        "Canton" : "SO"
      },
      {
        "Commune" : "Göschenen",
        "NPA" : 6487,
        "Canton" : "UR"
      },
      {
        "Commune" : "Götighofen",
        "NPA" : 8583,
        "Canton" : "TG"
      },
      {
        "Commune" : "Gümligen",
        "NPA" : 3073,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gümmenen",
        "NPA" : 3205,
        "Canton" : "BE"
      },
      {
        "Commune" : "Gündisau",
        "NPA" : 8322,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Gündlischwand",
        "NPA" : 3815,
        "Canton" : "BE"
      },
      {
        "Commune" : "Günsberg",
        "NPA" : 4524,
        "Canton" : "SO"
      },
      {
        "Commune" : "Güttingen",
        "NPA" : 8594,
        "Canton" : "TG"
      },
      {
        "Commune" : "Haag (Rheintal)",
        "NPA" : 9469,
        "Canton" : "SG"
      },
      {
        "Commune" : "Habkern",
        "NPA" : 3804,
        "Canton" : "BE"
      },
      {
        "Commune" : "Habsburg",
        "NPA" : 5245,
        "Canton" : "AG"
      },
      {
        "Commune" : "Hagenbuch ZH",
        "NPA" : 8523,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hagendorn",
        "NPA" : 6332,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Hagenwil b. Amriswil",
        "NPA" : 8580,
        "Canton" : "TG"
      },
      {
        "Commune" : "Hagneck",
        "NPA" : 2575,
        "Canton" : "BE"
      },
      {
        "Commune" : "Halden",
        "NPA" : 9223,
        "Canton" : "TG"
      },
      {
        "Commune" : "Haldenstein",
        "NPA" : 7023,
        "Canton" : "GR"
      },
      {
        "Commune" : "Haldi b. Schattdorf",
        "NPA" : 6469,
        "Canton" : "UR"
      },
      {
        "Commune" : "Hallau",
        "NPA" : 8215,
        "Canton" : "SH"
      },
      {
        "Commune" : "Hallwil",
        "NPA" : 5705,
        "Canton" : "AG"
      },
      {
        "Commune" : "Halten",
        "NPA" : 4566,
        "Canton" : "SO"
      },
      {
        "Commune" : "Happerswil",
        "NPA" : 8585,
        "Canton" : "TG"
      },
      {
        "Commune" : "Harenwilen",
        "NPA" : 8553,
        "Canton" : "TG"
      },
      {
        "Commune" : "Hasle LU",
        "NPA" : 6166,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hasle b. Burgdorf",
        "NPA" : 3415,
        "Canton" : "BE"
      },
      {
        "Commune" : "Haslen AI",
        "NPA" : 9054,
        "Canton" : "AI"
      },
      {
        "Commune" : "Haslen GL",
        "NPA" : 8773,
        "Canton" : "GL"
      },
      {
        "Commune" : "Hasliberg Goldern",
        "NPA" : 6085,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hasliberg Hohfluh",
        "NPA" : 6083,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hasliberg Reuti",
        "NPA" : 6086,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hasliberg Wasserwendi",
        "NPA" : 6084,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hattenhausen",
        "NPA" : 8564,
        "Canton" : "TG"
      },
      {
        "Commune" : "Hauenstein",
        "NPA" : 4633,
        "Canton" : "SO"
      },
      {
        "Commune" : "Hauptikon",
        "NPA" : 8926,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hauptwil",
        "NPA" : 9213,
        "Canton" : "TG"
      },
      {
        "Commune" : "Hausen AG",
        "NPA" : 5212,
        "Canton" : "AG"
      },
      {
        "Commune" : "Hausen am Albis",
        "NPA" : 8915,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Haute-Nendaz",
        "NPA" : 1997,
        "Canton" : "VS"
      },
      {
        "Commune" : "Hauterive NE",
        "NPA" : 2068,
        "Canton" : "NE"
      },
      {
        "Commune" : "Hauteville",
        "NPA" : 1648,
        "Canton" : "FR"
      },
      {
        "Commune" : "Hedingen",
        "NPA" : 8908,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Heerbrugg",
        "NPA" : 9435,
        "Canton" : "SG"
      },
      {
        "Commune" : "Hefenhausen",
        "NPA" : 8564,
        "Canton" : "TG"
      },
      {
        "Commune" : "Hefenhofen",
        "NPA" : 8580,
        "Canton" : "TG"
      },
      {
        "Commune" : "Heiden",
        "NPA" : 9410,
        "Canton" : "AR"
      },
      {
        "Commune" : "Heiligenschwendi",
        "NPA" : 3625,
        "Canton" : "BE"
      },
      {
        "Commune" : "Heiligkreuz (Mels)",
        "NPA" : 8888,
        "Canton" : "SG"
      },
      {
        "Commune" : "Heimberg",
        "NPA" : 3627,
        "Canton" : "BE"
      },
      {
        "Commune" : "Heimenhausen",
        "NPA" : 3373,
        "Canton" : "BE"
      },
      {
        "Commune" : "Heimenschwand",
        "NPA" : 3615,
        "Canton" : "BE"
      },
      {
        "Commune" : "Heimisbach",
        "NPA" : 3453,
        "Canton" : "BE"
      },
      {
        "Commune" : "Heimiswil",
        "NPA" : 3412,
        "Canton" : "BE"
      },
      {
        "Commune" : "Heinrichswil",
        "NPA" : 4558,
        "Canton" : "SO"
      },
      {
        "Commune" : "Heitenried",
        "NPA" : 1714,
        "Canton" : "FR"
      },
      {
        "Commune" : "Heldswil",
        "NPA" : 9216,
        "Canton" : "TG"
      },
      {
        "Commune" : "Helgisried-Rohrbach",
        "NPA" : 3155,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hellbühl",
        "NPA" : 6016,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hellikon",
        "NPA" : 4316,
        "Canton" : "AG"
      },
      {
        "Commune" : "Hellsau",
        "NPA" : 3429,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hemberg",
        "NPA" : 9633,
        "Canton" : "SG"
      },
      {
        "Commune" : "Hemishofen",
        "NPA" : 8261,
        "Canton" : "SH"
      },
      {
        "Commune" : "Hemmental",
        "NPA" : 8231,
        "Canton" : "SH"
      },
      {
        "Commune" : "Hemmiken",
        "NPA" : 4465,
        "Canton" : "BL"
      },
      {
        "Commune" : "Henau",
        "NPA" : 9247,
        "Canton" : "SG"
      },
      {
        "Commune" : "Hendschiken",
        "NPA" : 5604,
        "Canton" : "AG"
      },
      {
        "Commune" : "Henggart",
        "NPA" : 8444,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hennens",
        "NPA" : 1681,
        "Canton" : "FR"
      },
      {
        "Commune" : "Henniez",
        "NPA" : 1525,
        "Canton" : "VD"
      },
      {
        "Commune" : "Herbetswil",
        "NPA" : 4715,
        "Canton" : "SO"
      },
      {
        "Commune" : "Herbligen",
        "NPA" : 3671,
        "Canton" : "BE"
      },
      {
        "Commune" : "Herbriggen",
        "NPA" : 3927,
        "Canton" : "VS"
      },
      {
        "Commune" : "Herdern",
        "NPA" : 8535,
        "Canton" : "TG"
      },
      {
        "Commune" : "Hergiswil NW",
        "NPA" : 6052,
        "Canton" : "NW"
      },
      {
        "Commune" : "Hergiswil b. Willisau",
        "NPA" : 6133,
        "Canton" : "LU"
      },
      {
        "Commune" : "Herisau",
        "NPA" : 9100,
        "Canton" : "AR"
      },
      {
        "Commune" : "Herlisberg",
        "NPA" : 6028,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hermance",
        "NPA" : 1248,
        "Canton" : "GE"
      },
      {
        "Commune" : "Hermenches",
        "NPA" : 1513,
        "Canton" : "VD"
      },
      {
        "Commune" : "Hermetschwil-Staffeln",
        "NPA" : 5626,
        "Canton" : "AG"
      },
      {
        "Commune" : "Hermiswil",
        "NPA" : 3475,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hermrigen",
        "NPA" : 3274,
        "Canton" : "BE"
      },
      {
        "Commune" : "Herrenhof",
        "NPA" : 8585,
        "Canton" : "TG"
      },
      {
        "Commune" : "Herrenschwanden",
        "NPA" : 3037,
        "Canton" : "BE"
      },
      {
        "Commune" : "Herrliberg",
        "NPA" : 8704,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hersberg",
        "NPA" : 4423,
        "Canton" : "BL"
      },
      {
        "Commune" : "Hersiwil",
        "NPA" : 4558,
        "Canton" : "SO"
      },
      {
        "Commune" : "Hertenstein AG",
        "NPA" : 5415,
        "Canton" : "AG"
      },
      {
        "Commune" : "Herznach",
        "NPA" : 5027,
        "Canton" : "AG"
      },
      {
        "Commune" : "Herzogenbuchsee",
        "NPA" : 3360,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hessigkofen",
        "NPA" : 4577,
        "Canton" : "SO"
      },
      {
        "Commune" : "Hettenschwil",
        "NPA" : 5317,
        "Canton" : "AG"
      },
      {
        "Commune" : "Hettiswil b. Hindelbank",
        "NPA" : 3325,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hettlingen",
        "NPA" : 8442,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hildisrieden",
        "NPA" : 6024,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hilfikon",
        "NPA" : 5613,
        "Canton" : "AG"
      },
      {
        "Commune" : "Hilterfingen",
        "NPA" : 3652,
        "Canton" : "BE"
      },
      {
        "Commune" : "Himmelried",
        "NPA" : 4204,
        "Canton" : "SO"
      },
      {
        "Commune" : "Hindelbank",
        "NPA" : 3324,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hinteregg",
        "NPA" : 8132,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hinterforst",
        "NPA" : 9452,
        "Canton" : "SG"
      },
      {
        "Commune" : "Hinterfultigen",
        "NPA" : 3089,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hinterkappelen",
        "NPA" : 3032,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hintermoos",
        "NPA" : 6260,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hinterrhein",
        "NPA" : 7438,
        "Canton" : "GR"
      },
      {
        "Commune" : "Hinwil",
        "NPA" : 8340,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hirschthal",
        "NPA" : 5042,
        "Canton" : "AG"
      },
      {
        "Commune" : "Hirzel",
        "NPA" : 8816,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hittnau",
        "NPA" : 8335,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hitzkirch",
        "NPA" : 6285,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hochdorf",
        "NPA" : 6280,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hochfelden",
        "NPA" : 8182,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hochwald",
        "NPA" : 4146,
        "Canton" : "SO"
      },
      {
        "Commune" : "Hofen SH",
        "NPA" : 8242,
        "Canton" : "SH"
      },
      {
        "Commune" : "Hoffeld",
        "NPA" : 9114,
        "Canton" : "SG"
      },
      {
        "Commune" : "Hofstatt",
        "NPA" : 6154,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hofstetten SO",
        "NPA" : 4114,
        "Canton" : "SO"
      },
      {
        "Commune" : "Hofstetten ZH",
        "NPA" : 8354,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hofstetten b. Brienz",
        "NPA" : 3858,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hohenrain",
        "NPA" : 6276,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hohentannen",
        "NPA" : 9216,
        "Canton" : "TG"
      },
      {
        "Commune" : "Hohtenn",
        "NPA" : 3949,
        "Canton" : "VS"
      },
      {
        "Commune" : "Holderbank AG",
        "NPA" : 5113,
        "Canton" : "AG"
      },
      {
        "Commune" : "Holderbank SO",
        "NPA" : 4718,
        "Canton" : "SO"
      },
      {
        "Commune" : "Holzhäusern ZG",
        "NPA" : 6343,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Holziken",
        "NPA" : 5043,
        "Canton" : "AG"
      },
      {
        "Commune" : "Homberg b. Thun",
        "NPA" : 3622,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hombrechtikon",
        "NPA" : 8634,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Homburg",
        "NPA" : 8508,
        "Canton" : "TG"
      },
      {
        "Commune" : "Honau",
        "NPA" : 6038,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hondrich",
        "NPA" : 3702,
        "Canton" : "BE"
      },
      {
        "Commune" : "Horboden",
        "NPA" : 3755,
        "Canton" : "BE"
      },
      {
        "Commune" : "Horgen",
        "NPA" : 8810,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Horgenberg",
        "NPA" : 8815,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Horn",
        "NPA" : 9326,
        "Canton" : "TG"
      },
      {
        "Commune" : "Hornussen",
        "NPA" : 5075,
        "Canton" : "AG"
      },
      {
        "Commune" : "Horrenbach",
        "NPA" : 3623,
        "Canton" : "BE"
      },
      {
        "Commune" : "Horriwil",
        "NPA" : 4557,
        "Canton" : "SO"
      },
      {
        "Commune" : "Horw",
        "NPA" : 6048,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hosenruck",
        "NPA" : 9515,
        "Canton" : "TG"
      },
      {
        "Commune" : "Hospental",
        "NPA" : 6493,
        "Canton" : "UR"
      },
      {
        "Commune" : "Hottwil",
        "NPA" : 5277,
        "Canton" : "AG"
      },
      {
        "Commune" : "Hubersdorf",
        "NPA" : 4535,
        "Canton" : "SO"
      },
      {
        "Commune" : "Hugelshofen",
        "NPA" : 8565,
        "Canton" : "TG"
      },
      {
        "Commune" : "Humlikon",
        "NPA" : 8457,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hundwil",
        "NPA" : 9064,
        "Canton" : "AR"
      },
      {
        "Commune" : "Hunzenschwil",
        "NPA" : 5502,
        "Canton" : "AG"
      },
      {
        "Commune" : "Hurden",
        "NPA" : 8640,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Huttwil",
        "NPA" : 4950,
        "Canton" : "BE"
      },
      {
        "Commune" : "Huémoz",
        "NPA" : 1884,
        "Canton" : "VD"
      },
      {
        "Commune" : "Häfelfingen",
        "NPA" : 4445,
        "Canton" : "BL"
      },
      {
        "Commune" : "Hägendorf",
        "NPA" : 4614,
        "Canton" : "SO"
      },
      {
        "Commune" : "Häggenschwil",
        "NPA" : 9312,
        "Canton" : "SG"
      },
      {
        "Commune" : "Hägglingen",
        "NPA" : 5607,
        "Canton" : "AG"
      },
      {
        "Commune" : "Hämikon",
        "NPA" : 6289,
        "Canton" : "LU"
      },
      {
        "Commune" : "Härkingen",
        "NPA" : 4624,
        "Canton" : "SO"
      },
      {
        "Commune" : "Hätzingen",
        "NPA" : 8775,
        "Canton" : "GL"
      },
      {
        "Commune" : "Häusernmoos im Emmental",
        "NPA" : 3463,
        "Canton" : "BE"
      },
      {
        "Commune" : "Häuslenen",
        "NPA" : 8522,
        "Canton" : "TG"
      },
      {
        "Commune" : "Häutligen",
        "NPA" : 3510,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hérémence",
        "NPA" : 1987,
        "Canton" : "VS"
      },
      {
        "Commune" : "Höchstetten",
        "NPA" : 3429,
        "Canton" : "BE"
      },
      {
        "Commune" : "Höfen b. Thun",
        "NPA" : 3631,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hölstein",
        "NPA" : 4434,
        "Canton" : "BL"
      },
      {
        "Commune" : "Hörhausen",
        "NPA" : 8507,
        "Canton" : "TG"
      },
      {
        "Commune" : "Höri",
        "NPA" : 8181,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hünenberg",
        "NPA" : 6331,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Hünenberg See",
        "NPA" : 6333,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Hünibach",
        "NPA" : 3626,
        "Canton" : "BE"
      },
      {
        "Commune" : "Hüniken",
        "NPA" : 4554,
        "Canton" : "SO"
      },
      {
        "Commune" : "Hünikon (Neftenbach)",
        "NPA" : 8412,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hüntwangen",
        "NPA" : 8194,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hüswil",
        "NPA" : 6152,
        "Canton" : "LU"
      },
      {
        "Commune" : "Hütten",
        "NPA" : 8825,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hüttikon",
        "NPA" : 8115,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Hüttlingen",
        "NPA" : 8553,
        "Canton" : "TG"
      },
      {
        "Commune" : "Hüttwilen",
        "NPA" : 8536,
        "Canton" : "TG"
      },
      {
        "Commune" : "Ibach",
        "NPA" : 6438,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Ichertswil",
        "NPA" : 4571,
        "Canton" : "SO"
      },
      {
        "Commune" : "Icogne",
        "NPA" : 1977,
        "Canton" : "VS"
      },
      {
        "Commune" : "Iffwil",
        "NPA" : 3305,
        "Canton" : "BE"
      },
      {
        "Commune" : "Igis",
        "NPA" : 7206,
        "Canton" : "GR"
      },
      {
        "Commune" : "Ilanz",
        "NPA" : 7130,
        "Canton" : "GR"
      },
      {
        "Commune" : "Illgau",
        "NPA" : 6434,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Illhart",
        "NPA" : 8556,
        "Canton" : "TG"
      },
      {
        "Commune" : "Illighausen",
        "NPA" : 8574,
        "Canton" : "TG"
      },
      {
        "Commune" : "Illnau",
        "NPA" : 8308,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Im Fang",
        "NPA" : 1656,
        "Canton" : "FR"
      },
      {
        "Commune" : "Immensee",
        "NPA" : 6405,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Indemini",
        "NPA" : 6571,
        "Canton" : "TI"
      },
      {
        "Commune" : "Inden",
        "NPA" : 3953,
        "Canton" : "VS"
      },
      {
        "Commune" : "Inkwil",
        "NPA" : 3375,
        "Canton" : "BE"
      },
      {
        "Commune" : "Innerberg",
        "NPA" : 3044,
        "Canton" : "BE"
      },
      {
        "Commune" : "Innereriz",
        "NPA" : 3619,
        "Canton" : "BE"
      },
      {
        "Commune" : "Innerferrera",
        "NPA" : 7445,
        "Canton" : "GR"
      },
      {
        "Commune" : "Innerthal",
        "NPA" : 8858,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Innertkirchen",
        "NPA" : 3862,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ins",
        "NPA" : 3232,
        "Canton" : "BE"
      },
      {
        "Commune" : "Insone",
        "NPA" : 6951,
        "Canton" : "TI"
      },
      {
        "Commune" : "Interlaken",
        "NPA" : 3800,
        "Canton" : "BE"
      },
      {
        "Commune" : "Intragna",
        "NPA" : 6655,
        "Canton" : "TI"
      },
      {
        "Commune" : "Intschi",
        "NPA" : 6476,
        "Canton" : "UR"
      },
      {
        "Commune" : "Inwil",
        "NPA" : 6034,
        "Canton" : "LU"
      },
      {
        "Commune" : "Ipsach",
        "NPA" : 2563,
        "Canton" : "BE"
      },
      {
        "Commune" : "Iragna",
        "NPA" : 6707,
        "Canton" : "TI"
      },
      {
        "Commune" : "Iseltwald",
        "NPA" : 3807,
        "Canton" : "BE"
      },
      {
        "Commune" : "Isenfluh",
        "NPA" : 3822,
        "Canton" : "BE"
      },
      {
        "Commune" : "Isenthal",
        "NPA" : 6461,
        "Canton" : "UR"
      },
      {
        "Commune" : "Iseo",
        "NPA" : 6993,
        "Canton" : "TI"
      },
      {
        "Commune" : "Islikon",
        "NPA" : 8546,
        "Canton" : "TG"
      },
      {
        "Commune" : "Islisberg",
        "NPA" : 8905,
        "Canton" : "AG"
      },
      {
        "Commune" : "Isole di Brissago",
        "NPA" : 6614,
        "Canton" : "TI"
      },
      {
        "Commune" : "Isone",
        "NPA" : 6810,
        "Canton" : "TI"
      },
      {
        "Commune" : "Istighofen",
        "NPA" : 8575,
        "Canton" : "TG"
      },
      {
        "Commune" : "Isérables",
        "NPA" : 1914,
        "Canton" : "VS"
      },
      {
        "Commune" : "Itingen",
        "NPA" : 4452,
        "Canton" : "BL"
      },
      {
        "Commune" : "Ittenthal",
        "NPA" : 5083,
        "Canton" : "AG"
      },
      {
        "Commune" : "Ittigen",
        "NPA" : 3063,
        "Canton" : "BE"
      },
      {
        "Commune" : "Jaberg",
        "NPA" : 3629,
        "Canton" : "BE"
      },
      {
        "Commune" : "Jakobsbad",
        "NPA" : 9108,
        "Canton" : "AI"
      },
      {
        "Commune" : "Jaun",
        "NPA" : 1656,
        "Canton" : "FR"
      },
      {
        "Commune" : "Jegenstorf",
        "NPA" : 3303,
        "Canton" : "BE"
      },
      {
        "Commune" : "Jenaz",
        "NPA" : 7233,
        "Canton" : "GR"
      },
      {
        "Commune" : "Jenins",
        "NPA" : 7307,
        "Canton" : "GR"
      },
      {
        "Commune" : "Jens",
        "NPA" : 2565,
        "Canton" : "BE"
      },
      {
        "Commune" : "Jeuss",
        "NPA" : 1793,
        "Canton" : "FR"
      },
      {
        "Commune" : "Jona",
        "NPA" : 8645,
        "Canton" : "SG"
      },
      {
        "Commune" : "Jonen",
        "NPA" : 8916,
        "Canton" : "AG"
      },
      {
        "Commune" : "Jongny",
        "NPA" : 1805,
        "Canton" : "VD"
      },
      {
        "Commune" : "Jonschwil",
        "NPA" : 9243,
        "Canton" : "SG"
      },
      {
        "Commune" : "Jouxtens-Mézery",
        "NPA" : 1008,
        "Canton" : "VD"
      },
      {
        "Commune" : "Juf",
        "NPA" : 7448,
        "Canton" : "GR"
      },
      {
        "Commune" : "Jungfraujoch",
        "NPA" : 3801,
        "Canton" : "VS"
      },
      {
        "Commune" : "Juriens",
        "NPA" : 1326,
        "Canton" : "VD"
      },
      {
        "Commune" : "Jussy",
        "NPA" : 1254,
        "Canton" : "GE"
      },
      {
        "Commune" : "Kaiseraugst",
        "NPA" : 4303,
        "Canton" : "AG"
      },
      {
        "Commune" : "Kaiserstuhl AG",
        "NPA" : 5466,
        "Canton" : "AG"
      },
      {
        "Commune" : "Kaisten",
        "NPA" : 5082,
        "Canton" : "AG"
      },
      {
        "Commune" : "Kallern",
        "NPA" : 5625,
        "Canton" : "AG"
      },
      {
        "Commune" : "Kallnach",
        "NPA" : 3283,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kalpetran",
        "NPA" : 3922,
        "Canton" : "VS"
      },
      {
        "Commune" : "Kaltacker",
        "NPA" : 3413,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kaltbach",
        "NPA" : 6212,
        "Canton" : "LU"
      },
      {
        "Commune" : "Kaltbrunn",
        "NPA" : 8722,
        "Canton" : "SG"
      },
      {
        "Commune" : "Kaltenbach",
        "NPA" : 8259,
        "Canton" : "TG"
      },
      {
        "Commune" : "Kammersrohr",
        "NPA" : 4535,
        "Canton" : "SO"
      },
      {
        "Commune" : "Kandergrund",
        "NPA" : 3716,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kandersteg",
        "NPA" : 3718,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kappel SO",
        "NPA" : 4616,
        "Canton" : "SO"
      },
      {
        "Commune" : "Kappel am Albis",
        "NPA" : 8926,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Kappelen",
        "NPA" : 3273,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kastanienbaum",
        "NPA" : 6047,
        "Canton" : "LU"
      },
      {
        "Commune" : "Kaufdorf",
        "NPA" : 3126,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kefikon TG",
        "NPA" : 8546,
        "Canton" : "TG"
      },
      {
        "Commune" : "Kefikon ZH",
        "NPA" : 8543,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Kehrsatz",
        "NPA" : 3122,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kehrsiten",
        "NPA" : 6365,
        "Canton" : "NW"
      },
      {
        "Commune" : "Kemptthal",
        "NPA" : 8310,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Kernenried",
        "NPA" : 3309,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kerns",
        "NPA" : 6064,
        "Canton" : "OW"
      },
      {
        "Commune" : "Kerzers",
        "NPA" : 3210,
        "Canton" : "FR"
      },
      {
        "Commune" : "Kesswil",
        "NPA" : 8593,
        "Canton" : "TG"
      },
      {
        "Commune" : "Kestenholz",
        "NPA" : 4703,
        "Canton" : "SO"
      },
      {
        "Commune" : "Kienberg",
        "NPA" : 4468,
        "Canton" : "SO"
      },
      {
        "Commune" : "Kiental",
        "NPA" : 3723,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kiesen",
        "NPA" : 3629,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kilchberg BL",
        "NPA" : 4496,
        "Canton" : "BL"
      },
      {
        "Commune" : "Kilchberg ZH",
        "NPA" : 8802,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Killwangen",
        "NPA" : 8956,
        "Canton" : "AG"
      },
      {
        "Commune" : "Kippel",
        "NPA" : 3917,
        "Canton" : "VS"
      },
      {
        "Commune" : "Kirchberg BE",
        "NPA" : 3422,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kirchberg SG",
        "NPA" : 9533,
        "Canton" : "SG"
      },
      {
        "Commune" : "Kirchdorf AG",
        "NPA" : 5416,
        "Canton" : "AG"
      },
      {
        "Commune" : "Kirchdorf BE",
        "NPA" : 3116,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kirchenthurnen",
        "NPA" : 3128,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kirchleerau",
        "NPA" : 5054,
        "Canton" : "AG"
      },
      {
        "Commune" : "Kirchlindach",
        "NPA" : 3038,
        "Canton" : "BE"
      },
      {
        "Commune" : "Klarsreuti",
        "NPA" : 8585,
        "Canton" : "TG"
      },
      {
        "Commune" : "Kleinandelfingen",
        "NPA" : 8451,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Kleinbösingen",
        "NPA" : 3213,
        "Canton" : "FR"
      },
      {
        "Commune" : "Kleindietwil",
        "NPA" : 4936,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kleindöttingen",
        "NPA" : 5314,
        "Canton" : "AG"
      },
      {
        "Commune" : "Kleine Scheidegg",
        "NPA" : 3823,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kleingurmels",
        "NPA" : 3212,
        "Canton" : "FR"
      },
      {
        "Commune" : "Kleinlützel",
        "NPA" : 4245,
        "Canton" : "SO"
      },
      {
        "Commune" : "Kleinwangen",
        "NPA" : 6277,
        "Canton" : "LU"
      },
      {
        "Commune" : "Klingnau",
        "NPA" : 5313,
        "Canton" : "AG"
      },
      {
        "Commune" : "Kloster Fahr",
        "NPA" : 8109,
        "Canton" : "AG"
      },
      {
        "Commune" : "Klosters",
        "NPA" : 7250,
        "Canton" : "GR"
      },
      {
        "Commune" : "Klosters Dorf",
        "NPA" : 7252,
        "Canton" : "GR"
      },
      {
        "Commune" : "Kloten",
        "NPA" : 8302,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Klöntal",
        "NPA" : 8750,
        "Canton" : "GL"
      },
      {
        "Commune" : "Knoblisbühl",
        "NPA" : 8881,
        "Canton" : "SG"
      },
      {
        "Commune" : "Knonau",
        "NPA" : 8934,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Knutwil",
        "NPA" : 6213,
        "Canton" : "LU"
      },
      {
        "Commune" : "Koblenz",
        "NPA" : 5322,
        "Canton" : "AG"
      },
      {
        "Commune" : "Kollbrunn",
        "NPA" : 8483,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Konolfingen",
        "NPA" : 3510,
        "Canton" : "BE"
      },
      {
        "Commune" : "Koppigen",
        "NPA" : 3425,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kottwil",
        "NPA" : 6217,
        "Canton" : "LU"
      },
      {
        "Commune" : "Kradolf",
        "NPA" : 9214,
        "Canton" : "TG"
      },
      {
        "Commune" : "Krattigen",
        "NPA" : 3704,
        "Canton" : "BE"
      },
      {
        "Commune" : "Krauchthal",
        "NPA" : 3326,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kreuzlingen",
        "NPA" : 8280,
        "Canton" : "TG"
      },
      {
        "Commune" : "Kriechenwil",
        "NPA" : 3179,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kriegstetten",
        "NPA" : 4566,
        "Canton" : "SO"
      },
      {
        "Commune" : "Kriens",
        "NPA" : 6010,
        "Canton" : "OW"
      },
      {
        "Commune" : "Kriens",
        "NPA" : 6010,
        "Canton" : "LU"
      },
      {
        "Commune" : "Kriessern",
        "NPA" : 9451,
        "Canton" : "SG"
      },
      {
        "Commune" : "Krinau",
        "NPA" : 9622,
        "Canton" : "SG"
      },
      {
        "Commune" : "Krummenau",
        "NPA" : 9643,
        "Canton" : "SG"
      },
      {
        "Commune" : "Kräiligen",
        "NPA" : 3315,
        "Canton" : "BE"
      },
      {
        "Commune" : "Kulmerau",
        "NPA" : 6234,
        "Canton" : "LU"
      },
      {
        "Commune" : "Kyburg",
        "NPA" : 8314,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Kyburg-Buchegg",
        "NPA" : 4586,
        "Canton" : "SO"
      },
      {
        "Commune" : "Kägiswil",
        "NPA" : 6056,
        "Canton" : "OW"
      },
      {
        "Commune" : "Känerkinden",
        "NPA" : 4447,
        "Canton" : "BL"
      },
      {
        "Commune" : "Kölliken",
        "NPA" : 5742,
        "Canton" : "AG"
      },
      {
        "Commune" : "Köniz",
        "NPA" : 3098,
        "Canton" : "BE"
      },
      {
        "Commune" : "Küblis",
        "NPA" : 7240,
        "Canton" : "GR"
      },
      {
        "Commune" : "Kümmertshausen",
        "NPA" : 8586,
        "Canton" : "TG"
      },
      {
        "Commune" : "Künten",
        "NPA" : 5444,
        "Canton" : "AG"
      },
      {
        "Commune" : "Küsnacht ZH",
        "NPA" : 8700,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Küssnacht am Rigi",
        "NPA" : 6403,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Küttigen",
        "NPA" : 5024,
        "Canton" : "AG"
      },
      {
        "Commune" : "Küttigkofen",
        "NPA" : 4581,
        "Canton" : "SO"
      },
      {
        "Commune" : "L'Abbaye",
        "NPA" : 1344,
        "Canton" : "VD"
      },
      {
        "Commune" : "L'Abergement",
        "NPA" : 1355,
        "Canton" : "VD"
      },
      {
        "Commune" : "L'Auberson",
        "NPA" : 1454,
        "Canton" : "VD"
      },
      {
        "Commune" : "L'Etivaz",
        "NPA" : 1660,
        "Canton" : "VD"
      },
      {
        "Commune" : "L'Isle",
        "NPA" : 1148,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Brévine",
        "NPA" : 2406,
        "Canton" : "NE"
      },
      {
        "Commune" : "La Chaux (Cossonay)",
        "NPA" : 1308,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Chaux-de-Fonds",
        "NPA" : 2300,
        "Canton" : "NE"
      },
      {
        "Commune" : "La Chaux-des-Breuleux",
        "NPA" : 2345,
        "Canton" : "JU"
      },
      {
        "Commune" : "La Chaux-du-Milieu",
        "NPA" : 2405,
        "Canton" : "NE"
      },
      {
        "Commune" : "La Châtagne",
        "NPA" : 2406,
        "Canton" : "NE"
      },
      {
        "Commune" : "La Cibourg",
        "NPA" : 2300,
        "Canton" : "NE"
      },
      {
        "Commune" : "La Cibourg",
        "NPA" : 2333,
        "Canton" : "BE"
      },
      {
        "Commune" : "La Cibourg",
        "NPA" : 2616,
        "Canton" : "BE"
      },
      {
        "Commune" : "La Comballaz",
        "NPA" : 1862,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Conversion",
        "NPA" : 1093,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Corbaz",
        "NPA" : 1782,
        "Canton" : "FR"
      },
      {
        "Commune" : "La Coudre",
        "NPA" : 1148,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Croix (Lutry)",
        "NPA" : 1090,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Croix-de-Rozon",
        "NPA" : 1257,
        "Canton" : "GE"
      },
      {
        "Commune" : "La Cure",
        "NPA" : 1265,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Côte-aux-Fées",
        "NPA" : 2117,
        "Canton" : "NE"
      },
      {
        "Commune" : "La Ferrière",
        "NPA" : 2333,
        "Canton" : "BE"
      },
      {
        "Commune" : "La Forclaz VD",
        "NPA" : 1866,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Forclaz VS",
        "NPA" : 1985,
        "Canton" : "VS"
      },
      {
        "Commune" : "La Fouly VS",
        "NPA" : 1944,
        "Canton" : "VS"
      },
      {
        "Commune" : "La Garde (Sembrancher)",
        "NPA" : 1933,
        "Canton" : "VS"
      },
      {
        "Commune" : "La Heutte",
        "NPA" : 2604,
        "Canton" : "BE"
      },
      {
        "Commune" : "La Joux FR",
        "NPA" : 1697,
        "Canton" : "FR"
      },
      {
        "Commune" : "La Lécherette",
        "NPA" : 1660,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Magne",
        "NPA" : 1687,
        "Canton" : "FR"
      },
      {
        "Commune" : "La Muraz (Savièse)",
        "NPA" : 1965,
        "Canton" : "VS"
      },
      {
        "Commune" : "La Neirigue",
        "NPA" : 1686,
        "Canton" : "FR"
      },
      {
        "Commune" : "La Neuveville",
        "NPA" : 2520,
        "Canton" : "BE"
      },
      {
        "Commune" : "La Place (Ayent)",
        "NPA" : 1966,
        "Canton" : "VS"
      },
      {
        "Commune" : "La Plaine",
        "NPA" : 1283,
        "Canton" : "GE"
      },
      {
        "Commune" : "La Praz",
        "NPA" : 1148,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Punt-Chamues-ch",
        "NPA" : 7522,
        "Canton" : "GR"
      },
      {
        "Commune" : "La Rippe",
        "NPA" : 1278,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Roche FR",
        "NPA" : 1634,
        "Canton" : "FR"
      },
      {
        "Commune" : "La Russille",
        "NPA" : 1356,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Rösa",
        "NPA" : 7742,
        "Canton" : "GR"
      },
      {
        "Commune" : "La Sage",
        "NPA" : 1985,
        "Canton" : "VS"
      },
      {
        "Commune" : "La Sagne (Ste-Croix)",
        "NPA" : 1450,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Sagne NE",
        "NPA" : 2314,
        "Canton" : "NE"
      },
      {
        "Commune" : "La Sarraz",
        "NPA" : 1315,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Tanne",
        "NPA" : 2720,
        "Canton" : "BE"
      },
      {
        "Commune" : "La Tine",
        "NPA" : 1658,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Tour VS",
        "NPA" : 1984,
        "Canton" : "VS"
      },
      {
        "Commune" : "La Tour-de-Peilz",
        "NPA" : 1814,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Tour-de-Trême",
        "NPA" : 1635,
        "Canton" : "FR"
      },
      {
        "Commune" : "La Tzoumaz",
        "NPA" : 1918,
        "Canton" : "VS"
      },
      {
        "Commune" : "La Vernaz (Les Agettes)",
        "NPA" : 1992,
        "Canton" : "VS"
      },
      {
        "Commune" : "La Verrerie",
        "NPA" : 1624,
        "Canton" : "FR"
      },
      {
        "Commune" : "La Vraconnaz",
        "NPA" : 1454,
        "Canton" : "VD"
      },
      {
        "Commune" : "La Vue-des-Alpes",
        "NPA" : 2052,
        "Canton" : "NE"
      },
      {
        "Commune" : "Laax GR",
        "NPA" : 7031,
        "Canton" : "GR"
      },
      {
        "Commune" : "Laax GR 2",
        "NPA" : 7032,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lachen SZ",
        "NPA" : 8853,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Laconnex",
        "NPA" : 1287,
        "Canton" : "GE"
      },
      {
        "Commune" : "Ladir",
        "NPA" : 7155,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lajoux JU",
        "NPA" : 2718,
        "Canton" : "JU"
      },
      {
        "Commune" : "Lalden",
        "NPA" : 3931,
        "Canton" : "VS"
      },
      {
        "Commune" : "Lamboing",
        "NPA" : 2516,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lamone",
        "NPA" : 6814,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lampenberg",
        "NPA" : 4432,
        "Canton" : "BL"
      },
      {
        "Commune" : "Lamperswil TG",
        "NPA" : 8556,
        "Canton" : "TG"
      },
      {
        "Commune" : "Landiswil",
        "NPA" : 3434,
        "Canton" : "BE"
      },
      {
        "Commune" : "Landquart",
        "NPA" : 7302,
        "Canton" : "GR"
      },
      {
        "Commune" : "Landschlacht",
        "NPA" : 8597,
        "Canton" : "TG"
      },
      {
        "Commune" : "Langenbruck",
        "NPA" : 4438,
        "Canton" : "BL"
      },
      {
        "Commune" : "Langendorf",
        "NPA" : 4513,
        "Canton" : "SO"
      },
      {
        "Commune" : "Langenthal",
        "NPA" : 4900,
        "Canton" : "BE"
      },
      {
        "Commune" : "Langnau am Albis",
        "NPA" : 8135,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Langnau b. Reiden",
        "NPA" : 6262,
        "Canton" : "LU"
      },
      {
        "Commune" : "Langnau im Emmental",
        "NPA" : 3550,
        "Canton" : "BE"
      },
      {
        "Commune" : "Langrickenbach",
        "NPA" : 8585,
        "Canton" : "TG"
      },
      {
        "Commune" : "Langwies",
        "NPA" : 7057,
        "Canton" : "GR"
      },
      {
        "Commune" : "Langwiesen",
        "NPA" : 8246,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Lanna",
        "NPA" : 1983,
        "Canton" : "VS"
      },
      {
        "Commune" : "Lanterswil",
        "NPA" : 9503,
        "Canton" : "TG"
      },
      {
        "Commune" : "Lantsch/Lenz",
        "NPA" : 7083,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lanzenhäusern",
        "NPA" : 3148,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lanzenneunforn",
        "NPA" : 8506,
        "Canton" : "TG"
      },
      {
        "Commune" : "Largario",
        "NPA" : 6724,
        "Canton" : "TI"
      },
      {
        "Commune" : "Latsch",
        "NPA" : 7484,
        "Canton" : "GR"
      },
      {
        "Commune" : "Latterbach",
        "NPA" : 3758,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lauenen b. Gstaad",
        "NPA" : 3782,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lauerz",
        "NPA" : 6424,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Laufen",
        "NPA" : 4242,
        "Canton" : "BL"
      },
      {
        "Commune" : "Laufenburg",
        "NPA" : 5080,
        "Canton" : "AG"
      },
      {
        "Commune" : "Laupen BE",
        "NPA" : 3177,
        "Canton" : "BE"
      },
      {
        "Commune" : "Laupen ZH",
        "NPA" : 8637,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Laupersdorf",
        "NPA" : 4712,
        "Canton" : "SO"
      },
      {
        "Commune" : "Lauperswil",
        "NPA" : 3438,
        "Canton" : "BE"
      },
      {
        "Commune" : "Laura",
        "NPA" : 6549,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lausanne",
        "NPA" : 1006,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne",
        "NPA" : 1015,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne",
        "NPA" : 1003,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne",
        "NPA" : 1005,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne",
        "NPA" : 1011,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne",
        "NPA" : 1012,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne",
        "NPA" : 1010,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne",
        "NPA" : 1004,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne",
        "NPA" : 1007,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne",
        "NPA" : 1018,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne 25",
        "NPA" : 1000,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne 26",
        "NPA" : 1000,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausanne 27",
        "NPA" : 1000,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lausen",
        "NPA" : 4415,
        "Canton" : "BL"
      },
      {
        "Commune" : "Lauterbrunnen",
        "NPA" : 3822,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lauwil",
        "NPA" : 4426,
        "Canton" : "BL"
      },
      {
        "Commune" : "Lavertezzo",
        "NPA" : 6633,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lavey-Village",
        "NPA" : 1892,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lavey-les-Bains",
        "NPA" : 1892,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lavigny",
        "NPA" : 1175,
        "Canton" : "VD"
      },
      {
        "Commune" : "Lavin",
        "NPA" : 7543,
        "Canton" : "GR"
      },
      {
        "Commune" : "Lavorgo",
        "NPA" : 6746,
        "Canton" : "TI"
      },
      {
        "Commune" : "Lax",
        "NPA" : 3994,
        "Canton" : "VS"
      },
      {
        "Commune" : "Le Brassus",
        "NPA" : 1348,
        "Canton" : "VD"
      },
      {
        "Commune" : "Le Brouillet",
        "NPA" : 2406,
        "Canton" : "NE"
      },
      {
        "Commune" : "Le Bry",
        "NPA" : 1645,
        "Canton" : "FR"
      },
      {
        "Commune" : "Le Bémont JU",
        "NPA" : 2360,
        "Canton" : "JU"
      },
      {
        "Commune" : "Le Cerneux-Péquignot",
        "NPA" : 2414,
        "Canton" : "NE"
      },
      {
        "Commune" : "Le Cerneux-Veusil",
        "NPA" : 2345,
        "Canton" : "BE"
      },
      {
        "Commune" : "Le Châble VS",
        "NPA" : 1934,
        "Canton" : "VS"
      },
      {
        "Commune" : "Le Château-de-Ste-Croix",
        "NPA" : 1450,
        "Canton" : "VD"
      },
      {
        "Commune" : "Le Châtelard VS",
        "NPA" : 1925,
        "Canton" : "VS"
      },
      {
        "Commune" : "Le Châtelard-près-Romont",
        "NPA" : 1689,
        "Canton" : "FR"
      },
      {
        "Commune" : "Le Crêt-du-Locle",
        "NPA" : 2322,
        "Canton" : "NE"
      },
      {
        "Commune" : "Le Crêt-près-Semsales",
        "NPA" : 1611,
        "Canton" : "FR"
      },
      {
        "Commune" : "Le Fuet",
        "NPA" : 2712,
        "Canton" : "BE"
      },
      {
        "Commune" : "Le Grand-Saconnex",
        "NPA" : 1218,
        "Canton" : "GE"
      },
      {
        "Commune" : "Le Landeron",
        "NPA" : 2525,
        "Canton" : "NE"
      },
      {
        "Commune" : "Le Lieu",
        "NPA" : 1345,
        "Canton" : "VD"
      },
      {
        "Commune" : "Le Lignon",
        "NPA" : 1219,
        "Canton" : "GE"
      },
      {
        "Commune" : "Le Locle",
        "NPA" : 2400,
        "Canton" : ""
      },
      {
        "Commune" : "Le Locle",
        "NPA" : 2400,
        "Canton" : "NE"
      },
      {
        "Commune" : "Le Mont-Pèlerin",
        "NPA" : 1801,
        "Canton" : "VD"
      },
      {
        "Commune" : "Le Mont-sur-Lausanne",
        "NPA" : 1052,
        "Canton" : "VD"
      },
      {
        "Commune" : "Le Mouret",
        "NPA" : 1724,
        "Canton" : "FR"
      },
      {
        "Commune" : "Le Noirmont",
        "NPA" : 2340,
        "Canton" : "JU"
      },
      {
        "Commune" : "Le Pont",
        "NPA" : 1342,
        "Canton" : "VD"
      },
      {
        "Commune" : "Le Prese",
        "NPA" : 7746,
        "Canton" : "GR"
      },
      {
        "Commune" : "Le Prédame",
        "NPA" : 2714,
        "Canton" : "JU"
      },
      {
        "Commune" : "Le Prévoux",
        "NPA" : 2400,
        "Canton" : "NE"
      },
      {
        "Commune" : "Le Pâquier NE",
        "NPA" : 2058,
        "Canton" : "NE"
      },
      {
        "Commune" : "Le Pâquier-Montbarry",
        "NPA" : 1661,
        "Canton" : "FR"
      },
      {
        "Commune" : "Le Sentier",
        "NPA" : 1347,
        "Canton" : "VD"
      },
      {
        "Commune" : "Le Solliat",
        "NPA" : 1347,
        "Canton" : "VD"
      },
      {
        "Commune" : "Le Séchey",
        "NPA" : 1345,
        "Canton" : "VD"
      },
      {
        "Commune" : "Le Sépey",
        "NPA" : 1863,
        "Canton" : "VD"
      },
      {
        "Commune" : "Le Trétien",
        "NPA" : 1923,
        "Canton" : "VS"
      },
      {
        "Commune" : "Le Vaud",
        "NPA" : 1261,
        "Canton" : "VD"
      },
      {
        "Commune" : "Leggia",
        "NPA" : 6556,
        "Canton" : "GR"
      },
      {
        "Commune" : "Leibstadt",
        "NPA" : 5325,
        "Canton" : "AG"
      },
      {
        "Commune" : "Leimbach AG",
        "NPA" : 5733,
        "Canton" : "AG"
      },
      {
        "Commune" : "Leimbach TG",
        "NPA" : 8584,
        "Canton" : "TG"
      },
      {
        "Commune" : "Leimiswil",
        "NPA" : 4935,
        "Canton" : "BE"
      },
      {
        "Commune" : "Leissigen",
        "NPA" : 3706,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lenggenwil",
        "NPA" : 9525,
        "Canton" : "SG"
      },
      {
        "Commune" : "Lengnau AG",
        "NPA" : 5426,
        "Canton" : "AG"
      },
      {
        "Commune" : "Lengnau BE",
        "NPA" : 2543,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lengwil",
        "NPA" : 8574,
        "Canton" : "TG"
      },
      {
        "Commune" : "Lenk im Simmental",
        "NPA" : 3775,
        "Canton" : "BE"
      },
      {
        "Commune" : "Lens",
        "NPA" : 1978,
        "Canton" : "VS"
      },
      {
        "Commune" : "Lentigny",
        "NPA" : 1745,
        "Canton" : "FR"
      },
      {
        "Commune" : "Lenzburg",
        "NPA" : 5600,
        "Canton" : "AG"
      },
      {
        "Commune" : "Lenzerheide/Lai",
        "NPA" : 7078,
        "Canton" : "GR"
      },
      {
        "Commune" : "Leontica",
        "NPA" : 6716,
        "Canton" : "TI"
      },
      {
        "Commune" : "Les Acacias",
        "NPA" : 1227,
        "Canton" : "GE"
      },
      {
        "Commune" : "Les Agettes",
        "NPA" : 1992,
        "Canton" : "VS"
      },
      {
        "Commune" : "Les Avanchets",
        "NPA" : 1220,
        "Canton" : "GE"
      },
      {
        "Commune" : "Les Avants",
        "NPA" : 1833,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Bayards",
        "NPA" : 2127,
        "Canton" : "NE"
      },
      {
        "Commune" : "Les Bioux",
        "NPA" : 1346,
        "Canton" : "VD"
      },
      {
        "Commune" : "Les Bois",
        "NPA" : 2336,
        "Canton" : "JU"
      },
      {
        "Commune" : "Les Brenets",
        "NPA" : 2416,
        "Canton" : "NE"
      },
      {
        "Commune" : "Les Breuleux",
        "NPA" : 2345,
        "Canton" : "JU"
      },
      {
        "Commune" : "Les Charbonnières",
        "NPA" : 1343,
        "Canton" : "VD"
      },
      {
        "Commune" : "Surrein",
        "NPA" : 7173,
        "Canton" : "GR"
      },
      {
        "Commune" : "Sursee",
        "NPA" : 6210,
        "Canton" : "LU"
      },
      {
        "Commune" : "Susch",
        "NPA" : 7542,
        "Canton" : "GR"
      },
      {
        "Commune" : "Suscévaz",
        "NPA" : 1437,
        "Canton" : "VD"
      },
      {
        "Commune" : "Susten",
        "NPA" : 3952,
        "Canton" : "VS"
      },
      {
        "Commune" : "Sutz",
        "NPA" : 2572,
        "Canton" : "BE"
      },
      {
        "Commune" : "Syens",
        "NPA" : 1510,
        "Canton" : "VD"
      },
      {
        "Commune" : "Sâles (Gruyère)",
        "NPA" : 1625,
        "Canton" : "FR"
      },
      {
        "Commune" : "Säriswil",
        "NPA" : 3049,
        "Canton" : "BE"
      },
      {
        "Commune" : "Sédeilles",
        "NPA" : 1554,
        "Canton" : "VD"
      },
      {
        "Commune" : "Sévaz",
        "NPA" : 1541,
        "Canton" : "FR"
      },
      {
        "Commune" : "Sévery",
        "NPA" : 1141,
        "Canton" : "VD"
      },
      {
        "Commune" : "Sörenberg",
        "NPA" : 6174,
        "Canton" : "LU"
      },
      {
        "Commune" : "Süderen",
        "NPA" : 3618,
        "Canton" : "BE"
      },
      {
        "Commune" : "Sünikon",
        "NPA" : 8162,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Tafers",
        "NPA" : 1712,
        "Canton" : "FR"
      },
      {
        "Commune" : "Tagelswangen",
        "NPA" : 8317,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Tamins",
        "NPA" : 7015,
        "Canton" : "GR"
      },
      {
        "Commune" : "Tann",
        "NPA" : 8632,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Tannay",
        "NPA" : 1295,
        "Canton" : "VD"
      },
      {
        "Commune" : "Tarasp",
        "NPA" : 7553,
        "Canton" : "GR"
      },
      {
        "Commune" : "Tartar",
        "NPA" : 7422,
        "Canton" : "GR"
      },
      {
        "Commune" : "Tartegnin",
        "NPA" : 1180,
        "Canton" : "VD"
      },
      {
        "Commune" : "Tatroz",
        "NPA" : 1617,
        "Canton" : "FR"
      },
      {
        "Commune" : "Tavanasa",
        "NPA" : 7162,
        "Canton" : "GR"
      },
      {
        "Commune" : "Tavannes",
        "NPA" : 2710,
        "Canton" : "BE"
      },
      {
        "Commune" : "Taverne",
        "NPA" : 6807,
        "Canton" : "TI"
      },
      {
        "Commune" : "Tecknau",
        "NPA" : 4492,
        "Canton" : "BL"
      },
      {
        "Commune" : "Tegerfelden",
        "NPA" : 5306,
        "Canton" : "AG"
      },
      {
        "Commune" : "Tegna",
        "NPA" : 6652,
        "Canton" : "TI"
      },
      {
        "Commune" : "Tenero",
        "NPA" : 6598,
        "Canton" : "TI"
      },
      {
        "Commune" : "Tenna",
        "NPA" : 7106,
        "Canton" : "GR"
      },
      {
        "Commune" : "Tenniken",
        "NPA" : 4456,
        "Canton" : "BL"
      },
      {
        "Commune" : "Tennwil",
        "NPA" : 5617,
        "Canton" : "AG"
      },
      {
        "Commune" : "Tentlingen",
        "NPA" : 1734,
        "Canton" : "FR"
      },
      {
        "Commune" : "Termen",
        "NPA" : 3912,
        "Canton" : "VS"
      },
      {
        "Commune" : "Termine",
        "NPA" : 6998,
        "Canton" : "TI"
      },
      {
        "Commune" : "Territet",
        "NPA" : 1820,
        "Canton" : "VD"
      },
      {
        "Commune" : "Tersnaus",
        "NPA" : 7116,
        "Canton" : "GR"
      },
      {
        "Commune" : "Tesserete",
        "NPA" : 6950,
        "Canton" : "TI"
      },
      {
        "Commune" : "Teufen AR",
        "NPA" : 9053,
        "Canton" : "AR"
      },
      {
        "Commune" : "Teufen ZH",
        "NPA" : 8428,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Teufenthal AG",
        "NPA" : 5723,
        "Canton" : "AG"
      },
      {
        "Commune" : "Teuffenthal b. Thun",
        "NPA" : 3623,
        "Canton" : "BE"
      },
      {
        "Commune" : "Thal",
        "NPA" : 9425,
        "Canton" : "SG"
      },
      {
        "Commune" : "Thalheim AG",
        "NPA" : 5112,
        "Canton" : "AG"
      },
      {
        "Commune" : "Thalheim an der Thur",
        "NPA" : 8478,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Thalkirch",
        "NPA" : 7109,
        "Canton" : "GR"
      },
      {
        "Commune" : "Thalwil",
        "NPA" : 8800,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Thayngen",
        "NPA" : 8240,
        "Canton" : "SH"
      },
      {
        "Commune" : "Theilingen",
        "NPA" : 8484,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Therwil",
        "NPA" : 4106,
        "Canton" : "BL"
      },
      {
        "Commune" : "Thielle",
        "NPA" : 2075,
        "Canton" : "NE"
      },
      {
        "Commune" : "Thierachern",
        "NPA" : 3634,
        "Canton" : "BE"
      },
      {
        "Commune" : "Thierrens",
        "NPA" : 1410,
        "Canton" : "VD"
      },
      {
        "Commune" : "Thun",
        "NPA" : 3600,
        "Canton" : "BE"
      },
      {
        "Commune" : "Thun",
        "NPA" : 3604,
        "Canton" : "BE"
      },
      {
        "Commune" : "Thun",
        "NPA" : 3608,
        "Canton" : "BE"
      },
      {
        "Commune" : "Thun",
        "NPA" : 3603,
        "Canton" : "BE"
      },
      {
        "Commune" : "Thundorf",
        "NPA" : 8512,
        "Canton" : "TG"
      },
      {
        "Commune" : "Thunersee",
        "NPA" : 9999,
        "Canton" : "BE"
      },
      {
        "Commune" : "Thunstetten",
        "NPA" : 4922,
        "Canton" : "BE"
      },
      {
        "Commune" : "Thusis",
        "NPA" : 7430,
        "Canton" : "GR"
      },
      {
        "Commune" : "Thyon",
        "NPA" : 1988,
        "Canton" : "VS"
      },
      {
        "Commune" : "Thônex",
        "NPA" : 1226,
        "Canton" : "GE"
      },
      {
        "Commune" : "Thörigen",
        "NPA" : 3367,
        "Canton" : "BE"
      },
      {
        "Commune" : "Thörishaus",
        "NPA" : 3174,
        "Canton" : "BE"
      },
      {
        "Commune" : "Thürnen",
        "NPA" : 4441,
        "Canton" : "BL"
      },
      {
        "Commune" : "Tiefencastel",
        "NPA" : 7450,
        "Canton" : "GR"
      },
      {
        "Commune" : "Tinizong",
        "NPA" : 7453,
        "Canton" : "GR"
      },
      {
        "Commune" : "Titterten",
        "NPA" : 4425,
        "Canton" : "BL"
      },
      {
        "Commune" : "Tobel",
        "NPA" : 9555,
        "Canton" : "TG"
      },
      {
        "Commune" : "Toffen",
        "NPA" : 3125,
        "Canton" : "BE"
      },
      {
        "Commune" : "Tolochenaz",
        "NPA" : 1131,
        "Canton" : "VD"
      },
      {
        "Commune" : "Torgon",
        "NPA" : 1899,
        "Canton" : "VS"
      },
      {
        "Commune" : "Torny-le-Grand",
        "NPA" : 1748,
        "Canton" : "FR"
      },
      {
        "Commune" : "Torre",
        "NPA" : 6717,
        "Canton" : "TI"
      },
      {
        "Commune" : "Torricella",
        "NPA" : 6808,
        "Canton" : "TI"
      },
      {
        "Commune" : "Trachselwald",
        "NPA" : 3456,
        "Canton" : "BE"
      },
      {
        "Commune" : "Trachslau",
        "NPA" : 8840,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Tramelan",
        "NPA" : 2720,
        "Canton" : "BE"
      },
      {
        "Commune" : "Trans",
        "NPA" : 7407,
        "Canton" : "GR"
      },
      {
        "Commune" : "Trasadingen",
        "NPA" : 8219,
        "Canton" : "SH"
      },
      {
        "Commune" : "Travers",
        "NPA" : 2105,
        "Canton" : "NE"
      },
      {
        "Commune" : "Treiten",
        "NPA" : 3226,
        "Canton" : "BE"
      },
      {
        "Commune" : "Tremona",
        "NPA" : 6865,
        "Canton" : "TI"
      },
      {
        "Commune" : "Trey",
        "NPA" : 1552,
        "Canton" : "VD"
      },
      {
        "Commune" : "Treycovagnes",
        "NPA" : 1436,
        "Canton" : "VD"
      },
      {
        "Commune" : "Treyfayes",
        "NPA" : 1626,
        "Canton" : "FR"
      },
      {
        "Commune" : "Treytorrens (Payerne)",
        "NPA" : 1538,
        "Canton" : "VD"
      },
      {
        "Commune" : "Treyvaux",
        "NPA" : 1733,
        "Canton" : "FR"
      },
      {
        "Commune" : "Triboltingen",
        "NPA" : 8273,
        "Canton" : "TG"
      },
      {
        "Commune" : "Triengen",
        "NPA" : 6234,
        "Canton" : "LU"
      },
      {
        "Commune" : "Trient",
        "NPA" : 1929,
        "Canton" : "VS"
      },
      {
        "Commune" : "Triesen",
        "NPA" : 9495,
        "Canton" : "LI"
      },
      {
        "Commune" : "Triesenberg",
        "NPA" : 9497,
        "Canton" : "LI"
      },
      {
        "Commune" : "Trimbach",
        "NPA" : 4632,
        "Canton" : "SO"
      },
      {
        "Commune" : "Trimmis",
        "NPA" : 7203,
        "Canton" : "GR"
      },
      {
        "Commune" : "Trimstein",
        "NPA" : 3083,
        "Canton" : "BE"
      },
      {
        "Commune" : "Trin",
        "NPA" : 7014,
        "Canton" : "GR"
      },
      {
        "Commune" : "Trin Mulin",
        "NPA" : 7016,
        "Canton" : "GR"
      },
      {
        "Commune" : "Trogen",
        "NPA" : 9043,
        "Canton" : "AR"
      },
      {
        "Commune" : "Trogne (St-Martin)",
        "NPA" : 1969,
        "Canton" : "VS"
      },
      {
        "Commune" : "Troinex",
        "NPA" : 1256,
        "Canton" : "GE"
      },
      {
        "Commune" : "Troistorrents",
        "NPA" : 1872,
        "Canton" : "VS"
      },
      {
        "Commune" : "Trub",
        "NPA" : 3556,
        "Canton" : "BE"
      },
      {
        "Commune" : "Trubschachen",
        "NPA" : 3555,
        "Canton" : "BE"
      },
      {
        "Commune" : "Trun",
        "NPA" : 7166,
        "Canton" : "GR"
      },
      {
        "Commune" : "Truttikon",
        "NPA" : 8467,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Trélex",
        "NPA" : 1270,
        "Canton" : "VD"
      },
      {
        "Commune" : "Trübbach",
        "NPA" : 9477,
        "Canton" : "SG"
      },
      {
        "Commune" : "Trüllikon",
        "NPA" : 8466,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Tschappina",
        "NPA" : 7428,
        "Canton" : "GR"
      },
      {
        "Commune" : "Tscheppach",
        "NPA" : 4576,
        "Canton" : "SO"
      },
      {
        "Commune" : "Tscherlach",
        "NPA" : 8881,
        "Canton" : "SG"
      },
      {
        "Commune" : "Tschiertschen",
        "NPA" : 7064,
        "Canton" : "GR"
      },
      {
        "Commune" : "Tschierv",
        "NPA" : 7532,
        "Canton" : "GR"
      },
      {
        "Commune" : "Tschingel ob Gunten",
        "NPA" : 3656,
        "Canton" : "BE"
      },
      {
        "Commune" : "Tschlin",
        "NPA" : 7559,
        "Canton" : "GR"
      },
      {
        "Commune" : "Tschugg",
        "NPA" : 3233,
        "Canton" : "BE"
      },
      {
        "Commune" : "Tuggen",
        "NPA" : 8856,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Tumegl/Tomils",
        "NPA" : 7418,
        "Canton" : "GR"
      },
      {
        "Commune" : "Turbach",
        "NPA" : 3781,
        "Canton" : "BE"
      },
      {
        "Commune" : "Turbenthal",
        "NPA" : 8488,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Turgi",
        "NPA" : 5300,
        "Canton" : "AG"
      },
      {
        "Commune" : "Turin (Salins)",
        "NPA" : 1991,
        "Canton" : "VS"
      },
      {
        "Commune" : "Turtmann",
        "NPA" : 3946,
        "Canton" : "VS"
      },
      {
        "Commune" : "Tuttwil",
        "NPA" : 9546,
        "Canton" : "TG"
      },
      {
        "Commune" : "Twann",
        "NPA" : 2513,
        "Canton" : "BE"
      },
      {
        "Commune" : "Tägerig",
        "NPA" : 5522,
        "Canton" : "AG"
      },
      {
        "Commune" : "Tägerschen",
        "NPA" : 9554,
        "Canton" : "TG"
      },
      {
        "Commune" : "Tägertschi",
        "NPA" : 3111,
        "Canton" : "BE"
      },
      {
        "Commune" : "Tägerwilen",
        "NPA" : 8274,
        "Canton" : "TG"
      },
      {
        "Commune" : "Täsch",
        "NPA" : 3929,
        "Canton" : "VS"
      },
      {
        "Commune" : "Täuffelen",
        "NPA" : 2575,
        "Canton" : "BE"
      },
      {
        "Commune" : "Törbel",
        "NPA" : 3923,
        "Canton" : "VS"
      },
      {
        "Commune" : "Tübach",
        "NPA" : 9327,
        "Canton" : "SG"
      },
      {
        "Commune" : "Tüscherz-Alfermée",
        "NPA" : 2512,
        "Canton" : "BE"
      },
      {
        "Commune" : "Udligenswil",
        "NPA" : 6044,
        "Canton" : "LU"
      },
      {
        "Commune" : "Ueberstorf",
        "NPA" : 3182,
        "Canton" : "FR"
      },
      {
        "Commune" : "Uebeschi",
        "NPA" : 3635,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ueken",
        "NPA" : 5028,
        "Canton" : "AG"
      },
      {
        "Commune" : "Uerikon",
        "NPA" : 8713,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Uerkheim",
        "NPA" : 4813,
        "Canton" : "AG"
      },
      {
        "Commune" : "Uerschhausen",
        "NPA" : 8537,
        "Canton" : "TG"
      },
      {
        "Commune" : "Uerzlikon",
        "NPA" : 8926,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Uesslingen",
        "NPA" : 8524,
        "Canton" : "TG"
      },
      {
        "Commune" : "Uetendorf",
        "NPA" : 3661,
        "Canton" : "BE"
      },
      {
        "Commune" : "Uetikon am See",
        "NPA" : 8707,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Uetliberg",
        "NPA" : 8143,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Uetliburg SG",
        "NPA" : 8738,
        "Canton" : "SG"
      },
      {
        "Commune" : "Uettligen",
        "NPA" : 3043,
        "Canton" : "BE"
      },
      {
        "Commune" : "Uezwil",
        "NPA" : 5619,
        "Canton" : "AG"
      },
      {
        "Commune" : "Uffikon",
        "NPA" : 6253,
        "Canton" : "LU"
      },
      {
        "Commune" : "Ufhusen",
        "NPA" : 6153,
        "Canton" : "LU"
      },
      {
        "Commune" : "Uhwiesen",
        "NPA" : 8248,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Uitikon Waldegg",
        "NPA" : 8142,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Ulisbach",
        "NPA" : 9631,
        "Canton" : "SG"
      },
      {
        "Commune" : "Ulmiz",
        "NPA" : 3214,
        "Canton" : "FR"
      },
      {
        "Commune" : "Ulrichen",
        "NPA" : 3988,
        "Canton" : "VS"
      },
      {
        "Commune" : "Umiken",
        "NPA" : 5222,
        "Canton" : "AG"
      },
      {
        "Commune" : "Undervelier",
        "NPA" : 2863,
        "Canton" : "JU"
      },
      {
        "Commune" : "Unterbach BE",
        "NPA" : 3857,
        "Canton" : "BE"
      },
      {
        "Commune" : "Unterbäch VS",
        "NPA" : 3944,
        "Canton" : "VS"
      },
      {
        "Commune" : "Untereggen",
        "NPA" : 9033,
        "Canton" : "SG"
      },
      {
        "Commune" : "Unterems",
        "NPA" : 3948,
        "Canton" : "VS"
      },
      {
        "Commune" : "Unterendingen",
        "NPA" : 5305,
        "Canton" : "AG"
      },
      {
        "Commune" : "Unterengstringen",
        "NPA" : 8103,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Unterentfelden",
        "NPA" : 5035,
        "Canton" : "AG"
      },
      {
        "Commune" : "Unteriberg",
        "NPA" : 8842,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Unterkulm",
        "NPA" : 5726,
        "Canton" : "AG"
      },
      {
        "Commune" : "Unterlangenegg",
        "NPA" : 3614,
        "Canton" : "BE"
      },
      {
        "Commune" : "Unterlunkhofen",
        "NPA" : 8918,
        "Canton" : "AG"
      },
      {
        "Commune" : "Unterramsern",
        "NPA" : 4588,
        "Canton" : "SO"
      },
      {
        "Commune" : "Unterrindal",
        "NPA" : 9604,
        "Canton" : "SG"
      },
      {
        "Commune" : "Unterschächen",
        "NPA" : 6465,
        "Canton" : "UR"
      },
      {
        "Commune" : "Unterseen",
        "NPA" : 3800,
        "Canton" : "BE"
      },
      {
        "Commune" : "Untersiggenthal",
        "NPA" : 5417,
        "Canton" : "AG"
      },
      {
        "Commune" : "Unterstammheim",
        "NPA" : 8476,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Untersteckholz",
        "NPA" : 4916,
        "Canton" : "BE"
      },
      {
        "Commune" : "Unterterzen",
        "NPA" : 8882,
        "Canton" : "SG"
      },
      {
        "Commune" : "Untervaz",
        "NPA" : 7204,
        "Canton" : "GR"
      },
      {
        "Commune" : "Untervaz Bahnhof",
        "NPA" : 7201,
        "Canton" : "GR"
      },
      {
        "Commune" : "Unterwasser",
        "NPA" : 9657,
        "Canton" : "SG"
      },
      {
        "Commune" : "Unterägeri",
        "NPA" : 6314,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Uors (Lumnezia)",
        "NPA" : 7114,
        "Canton" : "GR"
      },
      {
        "Commune" : "Urdorf",
        "NPA" : 8902,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Urmein",
        "NPA" : 7427,
        "Canton" : "GR"
      },
      {
        "Commune" : "Urnerboden",
        "NPA" : 8751,
        "Canton" : "UR"
      },
      {
        "Commune" : "Urnäsch",
        "NPA" : 9107,
        "Canton" : "AR"
      },
      {
        "Commune" : "Ursenbach",
        "NPA" : 4937,
        "Canton" : "BE"
      },
      {
        "Commune" : "Ursins",
        "NPA" : 1412,
        "Canton" : "VD"
      },
      {
        "Commune" : "Urswil",
        "NPA" : 6280,
        "Canton" : "LU"
      },
      {
        "Commune" : "Ursy",
        "NPA" : 1670,
        "Canton" : "FR"
      },
      {
        "Commune" : "Urtenen-Schönbühl",
        "NPA" : 3322,
        "Canton" : "BE"
      },
      {
        "Commune" : "Uster",
        "NPA" : 8610,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Uttigen",
        "NPA" : 3628,
        "Canton" : "BE"
      },
      {
        "Commune" : "Uttwil",
        "NPA" : 8592,
        "Canton" : "TG"
      },
      {
        "Commune" : "Utzenstorf",
        "NPA" : 3427,
        "Canton" : "BE"
      },
      {
        "Commune" : "Utzigen",
        "NPA" : 3068,
        "Canton" : "BE"
      },
      {
        "Commune" : "Uvrier",
        "NPA" : 1958,
        "Canton" : "VS"
      },
      {
        "Commune" : "Uznach",
        "NPA" : 8730,
        "Canton" : "SG"
      },
      {
        "Commune" : "Uzwil",
        "NPA" : 9240,
        "Canton" : "SG"
      },
      {
        "Commune" : "Vacallo",
        "NPA" : 6833,
        "Canton" : "TI"
      },
      {
        "Commune" : "Vadura",
        "NPA" : 7314,
        "Canton" : "SG"
      },
      {
        "Commune" : "Vaduz",
        "NPA" : 9490,
        "Canton" : "LI"
      },
      {
        "Commune" : "Vaglio",
        "NPA" : 6947,
        "Canton" : "TI"
      },
      {
        "Commune" : "Vairano",
        "NPA" : 6575,
        "Canton" : "TI"
      },
      {
        "Commune" : "Val-d'Illiez",
        "NPA" : 1873,
        "Canton" : "VS"
      },
      {
        "Commune" : "Valangin",
        "NPA" : 2042,
        "Canton" : "NE"
      },
      {
        "Commune" : "Valbella",
        "NPA" : 7077,
        "Canton" : "GR"
      },
      {
        "Commune" : "Valchava",
        "NPA" : 7535,
        "Canton" : "GR"
      },
      {
        "Commune" : "Valendas",
        "NPA" : 7122,
        "Canton" : "GR"
      },
      {
        "Commune" : "Valens",
        "NPA" : 7317,
        "Canton" : "SG"
      },
      {
        "Commune" : "Valeyres-sous-Montagny",
        "NPA" : 1441,
        "Canton" : "VD"
      },
      {
        "Commune" : "Valeyres-sous-Rances",
        "NPA" : 1358,
        "Canton" : "VD"
      },
      {
        "Commune" : "Valeyres-sous-Ursins",
        "NPA" : 1412,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vallamand",
        "NPA" : 1586,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vallon",
        "NPA" : 1565,
        "Canton" : "FR"
      },
      {
        "Commune" : "Vallorbe",
        "NPA" : 1337,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vals",
        "NPA" : 7132,
        "Canton" : "GR"
      },
      {
        "Commune" : "Valzeina",
        "NPA" : 7213,
        "Canton" : "GR"
      },
      {
        "Commune" : "Vandoeuvres",
        "NPA" : 1253,
        "Canton" : "GE"
      },
      {
        "Commune" : "Varen",
        "NPA" : 3953,
        "Canton" : "VS"
      },
      {
        "Commune" : "Varenzo",
        "NPA" : 6777,
        "Canton" : "TI"
      },
      {
        "Commune" : "Vasön",
        "NPA" : 7317,
        "Canton" : "SG"
      },
      {
        "Commune" : "Vattiz",
        "NPA" : 7146,
        "Canton" : "GR"
      },
      {
        "Commune" : "Vauderens",
        "NPA" : 1675,
        "Canton" : "FR"
      },
      {
        "Commune" : "Vauffelin",
        "NPA" : 2537,
        "Canton" : "BE"
      },
      {
        "Commune" : "Vaugondry",
        "NPA" : 1423,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vaulion",
        "NPA" : 1325,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vaulruz",
        "NPA" : 1627,
        "Canton" : "FR"
      },
      {
        "Commune" : "Vaumarcus",
        "NPA" : 2028,
        "Canton" : "NE"
      },
      {
        "Commune" : "Vaux-sur-Morges",
        "NPA" : 1126,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vaz/Obervaz",
        "NPA" : 7082,
        "Canton" : "GR"
      },
      {
        "Commune" : "Vella",
        "NPA" : 7144,
        "Canton" : "GR"
      },
      {
        "Commune" : "Vellerat",
        "NPA" : 2830,
        "Canton" : "JU"
      },
      {
        "Commune" : "Veltheim AG",
        "NPA" : 5106,
        "Canton" : "AG"
      },
      {
        "Commune" : "Vendlincourt",
        "NPA" : 2943,
        "Canton" : "JU"
      },
      {
        "Commune" : "Vens (Sembrancher)",
        "NPA" : 1933,
        "Canton" : "VS"
      },
      {
        "Commune" : "Venthône",
        "NPA" : 3973,
        "Canton" : "VS"
      },
      {
        "Commune" : "Verbier",
        "NPA" : 1936,
        "Canton" : "VS"
      },
      {
        "Commune" : "Vercorin",
        "NPA" : 3967,
        "Canton" : "VS"
      },
      {
        "Commune" : "Verdabbio",
        "NPA" : 6538,
        "Canton" : "GR"
      },
      {
        "Commune" : "Verdasio",
        "NPA" : 6655,
        "Canton" : "TI"
      },
      {
        "Commune" : "Vergeletto",
        "NPA" : 6664,
        "Canton" : "TI"
      },
      {
        "Commune" : "Vermes",
        "NPA" : 2829,
        "Canton" : "JU"
      },
      {
        "Commune" : "Vernamiège",
        "NPA" : 1961,
        "Canton" : "VS"
      },
      {
        "Commune" : "Vernate",
        "NPA" : 6992,
        "Canton" : "TI"
      },
      {
        "Commune" : "Vernayaz",
        "NPA" : 1904,
        "Canton" : "VS"
      },
      {
        "Commune" : "Vernier",
        "NPA" : 1214,
        "Canton" : "GE"
      },
      {
        "Commune" : "Vers-chez-Perrin",
        "NPA" : 1551,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vers-l'Eglise",
        "NPA" : 1864,
        "Canton" : "VD"
      },
      {
        "Commune" : "Versam",
        "NPA" : 7104,
        "Canton" : "GR"
      },
      {
        "Commune" : "Verscio",
        "NPA" : 6653,
        "Canton" : "TI"
      },
      {
        "Commune" : "Versegères",
        "NPA" : 1947,
        "Canton" : "VS"
      },
      {
        "Commune" : "Versoix",
        "NPA" : 1290,
        "Canton" : "GE"
      },
      {
        "Commune" : "Vesin",
        "NPA" : 1483,
        "Canton" : "FR"
      },
      {
        "Commune" : "Vessy",
        "NPA" : 1234,
        "Canton" : "GE"
      },
      {
        "Commune" : "Vevey",
        "NPA" : 1800,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vex",
        "NPA" : 1981,
        "Canton" : "VS"
      },
      {
        "Commune" : "Veyras",
        "NPA" : 3968,
        "Canton" : "VS"
      },
      {
        "Commune" : "Veyrier",
        "NPA" : 1255,
        "Canton" : "GE"
      },
      {
        "Commune" : "Veysonnaz",
        "NPA" : 1993,
        "Canton" : "VS"
      },
      {
        "Commune" : "Veytaux",
        "NPA" : 1820,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vezia",
        "NPA" : 6943,
        "Canton" : "TI"
      },
      {
        "Commune" : "Vezio",
        "NPA" : 6938,
        "Canton" : "TI"
      },
      {
        "Commune" : "Viano",
        "NPA" : 7747,
        "Canton" : "GR"
      },
      {
        "Commune" : "Vich",
        "NPA" : 1267,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vichères (Liddes)",
        "NPA" : 1945,
        "Canton" : "VS"
      },
      {
        "Commune" : "Vico Morcote",
        "NPA" : 6921,
        "Canton" : "TI"
      },
      {
        "Commune" : "Vicosoprano",
        "NPA" : 7603,
        "Canton" : "GR"
      },
      {
        "Commune" : "Vicques",
        "NPA" : 2824,
        "Canton" : "JU"
      },
      {
        "Commune" : "Vielbringen b. Worb",
        "NPA" : 3075,
        "Canton" : "BE"
      },
      {
        "Commune" : "Viganello",
        "NPA" : 6962,
        "Canton" : "TI"
      },
      {
        "Commune" : "Vignogn",
        "NPA" : 7147,
        "Canton" : "GR"
      },
      {
        "Commune" : "Vilars NE",
        "NPA" : 2063,
        "Canton" : "NE"
      },
      {
        "Commune" : "Villa (Ayent)",
        "NPA" : 1966,
        "Canton" : "VS"
      },
      {
        "Commune" : "Villa (Evolène)",
        "NPA" : 1985,
        "Canton" : "VS"
      },
      {
        "Commune" : "Villa Bedretto",
        "NPA" : 6781,
        "Canton" : "TI"
      },
      {
        "Commune" : "Villa Luganese",
        "NPA" : 6966,
        "Canton" : "TI"
      },
      {
        "Commune" : "Villaraboud",
        "NPA" : 1679,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villarbeney",
        "NPA" : 1652,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villard-sur-Chamby",
        "NPA" : 1832,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villarepos",
        "NPA" : 1583,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villargiroud",
        "NPA" : 1694,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villariaz",
        "NPA" : 1685,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villarimboud",
        "NPA" : 1691,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villarlod",
        "NPA" : 1695,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villars-Bozon",
        "NPA" : 1148,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-Bramard",
        "NPA" : 1682,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-Burquin",
        "NPA" : 1423,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-Epeney",
        "NPA" : 1404,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-Mendraz",
        "NPA" : 1061,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-Ste-Croix",
        "NPA" : 1029,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-Tiercelin",
        "NPA" : 1058,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-le-Comte",
        "NPA" : 1515,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-le-Grand",
        "NPA" : 1584,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-le-Terroir",
        "NPA" : 1040,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-sous-Champvent",
        "NPA" : 1443,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-sous-Mont",
        "NPA" : 1666,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villars-sous-Yens",
        "NPA" : 1168,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villars-sur-Fontenais",
        "NPA" : 2903,
        "Canton" : "JU"
      },
      {
        "Commune" : "Villars-sur-Glâne",
        "NPA" : 1752,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villars-sur-Ollon",
        "NPA" : 1884,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villarsel-le-Gibloux",
        "NPA" : 1695,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villarsel-sur-Marly",
        "NPA" : 1723,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villarsiviriaux",
        "NPA" : 1694,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villarvolard",
        "NPA" : 1651,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villarzel",
        "NPA" : 1555,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villaz-St-Pierre",
        "NPA" : 1690,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villeneuve FR",
        "NPA" : 1527,
        "Canton" : "FR"
      },
      {
        "Commune" : "Villeneuve VD",
        "NPA" : 1844,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villeret",
        "NPA" : 2613,
        "Canton" : "BE"
      },
      {
        "Commune" : "Villette (Lavaux)",
        "NPA" : 1096,
        "Canton" : "VD"
      },
      {
        "Commune" : "Villiers",
        "NPA" : 2057,
        "Canton" : "NE"
      },
      {
        "Commune" : "Villigen",
        "NPA" : 5234,
        "Canton" : "AG"
      },
      {
        "Commune" : "Villmergen",
        "NPA" : 5612,
        "Canton" : "AG"
      },
      {
        "Commune" : "Villnachern",
        "NPA" : 5213,
        "Canton" : "AG"
      },
      {
        "Commune" : "Vilters",
        "NPA" : 7324,
        "Canton" : "SG"
      },
      {
        "Commune" : "Vinelz",
        "NPA" : 3234,
        "Canton" : "BE"
      },
      {
        "Commune" : "Vinzel",
        "NPA" : 1184,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vionnaz",
        "NPA" : 1895,
        "Canton" : "VS"
      },
      {
        "Commune" : "Vira (Gambarogno)",
        "NPA" : 6574,
        "Canton" : "TI"
      },
      {
        "Commune" : "Visp",
        "NPA" : 3930,
        "Canton" : "VS"
      },
      {
        "Commune" : "Visperterminen",
        "NPA" : 3932,
        "Canton" : "VS"
      },
      {
        "Commune" : "Vissoie",
        "NPA" : 3961,
        "Canton" : "VS"
      },
      {
        "Commune" : "Vitznau",
        "NPA" : 6354,
        "Canton" : "LU"
      },
      {
        "Commune" : "Vnà",
        "NPA" : 7557,
        "Canton" : "GR"
      },
      {
        "Commune" : "Vogelsang AG",
        "NPA" : 5412,
        "Canton" : "AG"
      },
      {
        "Commune" : "Vogorno",
        "NPA" : 6632,
        "Canton" : "TI"
      },
      {
        "Commune" : "Volken",
        "NPA" : 8459,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Volketswil",
        "NPA" : 8604,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Vollèges",
        "NPA" : 1941,
        "Canton" : "VS"
      },
      {
        "Commune" : "Vordemwald",
        "NPA" : 4803,
        "Canton" : "AG"
      },
      {
        "Commune" : "Vorderthal",
        "NPA" : 8857,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Vouvry",
        "NPA" : 1896,
        "Canton" : "VS"
      },
      {
        "Commune" : "Vrin",
        "NPA" : 7149,
        "Canton" : "GR"
      },
      {
        "Commune" : "Vuadens",
        "NPA" : 1628,
        "Canton" : "FR"
      },
      {
        "Commune" : "Vuarmarens",
        "NPA" : 1674,
        "Canton" : "FR"
      },
      {
        "Commune" : "Vuarrens",
        "NPA" : 1418,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vucherens",
        "NPA" : 1509,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vufflens-la-Ville",
        "NPA" : 1302,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vufflens-le-Château",
        "NPA" : 1134,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vugelles-La Mothe",
        "NPA" : 1431,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vuibroye",
        "NPA" : 1610,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vuippens",
        "NPA" : 1633,
        "Canton" : "FR"
      },
      {
        "Commune" : "Vuissens",
        "NPA" : 1486,
        "Canton" : "FR"
      },
      {
        "Commune" : "Vuisternens-devant-Romont",
        "NPA" : 1687,
        "Canton" : "FR"
      },
      {
        "Commune" : "Vuisternens-en-Ogoz",
        "NPA" : 1696,
        "Canton" : "FR"
      },
      {
        "Commune" : "Vuiteboeuf",
        "NPA" : 1445,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vulliens",
        "NPA" : 1085,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vullierens",
        "NPA" : 1115,
        "Canton" : "VD"
      },
      {
        "Commune" : "Vulpera",
        "NPA" : 7552,
        "Canton" : "GR"
      },
      {
        "Commune" : "Vättis",
        "NPA" : 7315,
        "Canton" : "SG"
      },
      {
        "Commune" : "Vérossaz",
        "NPA" : 1891,
        "Canton" : "VS"
      },
      {
        "Commune" : "Vésenaz",
        "NPA" : 1222,
        "Canton" : "GE"
      },
      {
        "Commune" : "Vétroz",
        "NPA" : 1963,
        "Canton" : "VS"
      },
      {
        "Commune" : "Wabern",
        "NPA" : 3084,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wagen",
        "NPA" : 8646,
        "Canton" : "SG"
      },
      {
        "Commune" : "Wagenhausen",
        "NPA" : 8259,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wagerswil",
        "NPA" : 8564,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wahlen b. Laufen",
        "NPA" : 4246,
        "Canton" : "BL"
      },
      {
        "Commune" : "Wahlendorf",
        "NPA" : 3046,
        "Canton" : "BE"
      },
      {
        "Commune" : "Walchwil",
        "NPA" : 6318,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Wald AR",
        "NPA" : 9044,
        "Canton" : "AR"
      },
      {
        "Commune" : "Wald ZH",
        "NPA" : 8636,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Walde AG",
        "NPA" : 5046,
        "Canton" : "AG"
      },
      {
        "Commune" : "Walde SG",
        "NPA" : 8727,
        "Canton" : "SG"
      },
      {
        "Commune" : "Waldenburg",
        "NPA" : 4437,
        "Canton" : "BL"
      },
      {
        "Commune" : "Waldhäusern AG",
        "NPA" : 5624,
        "Canton" : "AG"
      },
      {
        "Commune" : "Waldkirch",
        "NPA" : 9205,
        "Canton" : "SG"
      },
      {
        "Commune" : "Waldstatt",
        "NPA" : 9104,
        "Canton" : "AR"
      },
      {
        "Commune" : "Walenstadt",
        "NPA" : 8880,
        "Canton" : "SG"
      },
      {
        "Commune" : "Walenstadtberg",
        "NPA" : 8881,
        "Canton" : "SG"
      },
      {
        "Commune" : "Walkringen",
        "NPA" : 3512,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wallbach",
        "NPA" : 4323,
        "Canton" : "AG"
      },
      {
        "Commune" : "Wallenbuch",
        "NPA" : 3206,
        "Canton" : "FR"
      },
      {
        "Commune" : "Wallenried",
        "NPA" : 1784,
        "Canton" : "FR"
      },
      {
        "Commune" : "Wallenwil",
        "NPA" : 8360,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wallisellen",
        "NPA" : 8304,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Walliswil b. Niederbipp",
        "NPA" : 3380,
        "Canton" : "BE"
      },
      {
        "Commune" : "Walliswil b. Wangen",
        "NPA" : 3377,
        "Canton" : "BE"
      },
      {
        "Commune" : "Walperswil",
        "NPA" : 3272,
        "Canton" : "BE"
      },
      {
        "Commune" : "Waltalingen",
        "NPA" : 8468,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Waltensburg/Vuorz",
        "NPA" : 7158,
        "Canton" : "GR"
      },
      {
        "Commune" : "Waltenschwil",
        "NPA" : 5622,
        "Canton" : "AG"
      },
      {
        "Commune" : "Walterswil BE",
        "NPA" : 4942,
        "Canton" : "BE"
      },
      {
        "Commune" : "Walterswil SO",
        "NPA" : 5746,
        "Canton" : "SO"
      },
      {
        "Commune" : "Walzenhausen",
        "NPA" : 9428,
        "Canton" : "AR"
      },
      {
        "Commune" : "Wangen SZ",
        "NPA" : 8855,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Wangen an der Aare",
        "NPA" : 3380,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wangen b. Dübendorf",
        "NPA" : 8602,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wangen b. Olten",
        "NPA" : 4612,
        "Canton" : "SO"
      },
      {
        "Commune" : "Wangenried",
        "NPA" : 3374,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wangs",
        "NPA" : 7323,
        "Canton" : "SG"
      },
      {
        "Commune" : "Wanzwil",
        "NPA" : 3372,
        "Canton" : "BE"
      },
      {
        "Commune" : "Warth",
        "NPA" : 8532,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wasen im Emmental",
        "NPA" : 3457,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wassen UR",
        "NPA" : 6484,
        "Canton" : "UR"
      },
      {
        "Commune" : "Wasserauen",
        "NPA" : 9057,
        "Canton" : "AI"
      },
      {
        "Commune" : "Wasterkingen",
        "NPA" : 8195,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Watt",
        "NPA" : 8105,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wattenwil",
        "NPA" : 3665,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wattwil",
        "NPA" : 9630,
        "Canton" : "SG"
      },
      {
        "Commune" : "Wauwil",
        "NPA" : 6242,
        "Canton" : "LU"
      },
      {
        "Commune" : "Wavre",
        "NPA" : 2075,
        "Canton" : "NE"
      },
      {
        "Commune" : "Weesen",
        "NPA" : 8872,
        "Canton" : "SG"
      },
      {
        "Commune" : "Wegenstetten",
        "NPA" : 4317,
        "Canton" : "AG"
      },
      {
        "Commune" : "Weggis",
        "NPA" : 6353,
        "Canton" : "LU"
      },
      {
        "Commune" : "Weiach",
        "NPA" : 8187,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Weier im Emmental",
        "NPA" : 3462,
        "Canton" : "BE"
      },
      {
        "Commune" : "Weinfelden",
        "NPA" : 8570,
        "Canton" : "TG"
      },
      {
        "Commune" : "Weingarten-Kalthäusern",
        "NPA" : 9508,
        "Canton" : "TG"
      },
      {
        "Commune" : "Weiningen TG",
        "NPA" : 8532,
        "Canton" : "TG"
      },
      {
        "Commune" : "Weiningen ZH",
        "NPA" : 8104,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Weissbad",
        "NPA" : 9057,
        "Canton" : "AI"
      },
      {
        "Commune" : "Weissenburg",
        "NPA" : 3764,
        "Canton" : "BE"
      },
      {
        "Commune" : "Weissenstein b. Solothurn",
        "NPA" : 4515,
        "Canton" : "SO"
      },
      {
        "Commune" : "Weisslingen",
        "NPA" : 8484,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Weisstannen",
        "NPA" : 7326,
        "Canton" : "SG"
      },
      {
        "Commune" : "Weite",
        "NPA" : 9476,
        "Canton" : "SG"
      },
      {
        "Commune" : "Welschenrohr",
        "NPA" : 4716,
        "Canton" : "SO"
      },
      {
        "Commune" : "Wengen",
        "NPA" : 3823,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wengi b. Büren",
        "NPA" : 3251,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wengi b. Frutigen",
        "NPA" : 3714,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wenslingen",
        "NPA" : 4493,
        "Canton" : "BL"
      },
      {
        "Commune" : "Werdenberg",
        "NPA" : 9470,
        "Canton" : "SG"
      },
      {
        "Commune" : "Wergenstein",
        "NPA" : 7433,
        "Canton" : "GR"
      },
      {
        "Commune" : "Wermatswil",
        "NPA" : 8615,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wernetshausen",
        "NPA" : 8342,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Werthenstein",
        "NPA" : 6106,
        "Canton" : "LU"
      },
      {
        "Commune" : "Wettingen",
        "NPA" : 5430,
        "Canton" : "AG"
      },
      {
        "Commune" : "Wettswil",
        "NPA" : 8907,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wetzikon TG",
        "NPA" : 8512,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wetzikon ZH",
        "NPA" : 8620,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wetzikon ZH",
        "NPA" : 8623,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wichtrach",
        "NPA" : 3114,
        "Canton" : "BE"
      },
      {
        "Commune" : "Widen",
        "NPA" : 8967,
        "Canton" : "AG"
      },
      {
        "Commune" : "Widnau",
        "NPA" : 9443,
        "Canton" : "SG"
      },
      {
        "Commune" : "Wiedlisbach",
        "NPA" : 4537,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wienacht-Tobel",
        "NPA" : 9405,
        "Canton" : "AR"
      },
      {
        "Commune" : "Wiesenberg",
        "NPA" : 6383,
        "Canton" : "NW"
      },
      {
        "Commune" : "Wiesendangen",
        "NPA" : 8542,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wiezikon b. Sirnach",
        "NPA" : 8372,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wiggen",
        "NPA" : 6192,
        "Canton" : "LU"
      },
      {
        "Commune" : "Wiggiswil",
        "NPA" : 3053,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wigoltingen",
        "NPA" : 8556,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wikon",
        "NPA" : 4806,
        "Canton" : "LU"
      },
      {
        "Commune" : "Wil AG",
        "NPA" : 5276,
        "Canton" : "AG"
      },
      {
        "Commune" : "Wil SG",
        "NPA" : 9500,
        "Canton" : "SG"
      },
      {
        "Commune" : "Wil ZH",
        "NPA" : 8196,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wila",
        "NPA" : 8492,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wilchingen",
        "NPA" : 8217,
        "Canton" : "SH"
      },
      {
        "Commune" : "Wildberg",
        "NPA" : 8489,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wildegg",
        "NPA" : 5103,
        "Canton" : "AG"
      },
      {
        "Commune" : "Wildensbuch",
        "NPA" : 8465,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wilderswil",
        "NPA" : 3812,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wildhaus",
        "NPA" : 9658,
        "Canton" : "SG"
      },
      {
        "Commune" : "Wilen (Gottshaus)",
        "NPA" : 9225,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wilen (Sarnen)",
        "NPA" : 6062,
        "Canton" : "OW"
      },
      {
        "Commune" : "Wilen b. Neunforn",
        "NPA" : 8525,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wilen b. Wil",
        "NPA" : 9535,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wilen b. Wollerau",
        "NPA" : 8832,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Wiler (Lötschen)",
        "NPA" : 3918,
        "Canton" : "VS"
      },
      {
        "Commune" : "Wiler b. Seedorf",
        "NPA" : 3266,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wiler b. Utzenstorf",
        "NPA" : 3428,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wileroltigen",
        "NPA" : 3207,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wiliberg",
        "NPA" : 5058,
        "Canton" : "AG"
      },
      {
        "Commune" : "Wilihof",
        "NPA" : 6236,
        "Canton" : "LU"
      },
      {
        "Commune" : "Willadingen",
        "NPA" : 3425,
        "Canton" : "BE"
      },
      {
        "Commune" : "Willerzell",
        "NPA" : 8846,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Willisau",
        "NPA" : 6130,
        "Canton" : "LU"
      },
      {
        "Commune" : "Willisdorf",
        "NPA" : 8253,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wimmis",
        "NPA" : 3752,
        "Canton" : "BE"
      },
      {
        "Commune" : "Winden",
        "NPA" : 9315,
        "Canton" : "TG"
      },
      {
        "Commune" : "Windisch",
        "NPA" : 5210,
        "Canton" : "AG"
      },
      {
        "Commune" : "Windlach",
        "NPA" : 8175,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Winikon",
        "NPA" : 6235,
        "Canton" : "LU"
      },
      {
        "Commune" : "Winistorf",
        "NPA" : 4558,
        "Canton" : "SO"
      },
      {
        "Commune" : "Winkel",
        "NPA" : 8185,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Winterberg ZH",
        "NPA" : 8312,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wintersingen",
        "NPA" : 4451,
        "Canton" : "BL"
      },
      {
        "Commune" : "Winterthur",
        "NPA" : 8409,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Winterthur",
        "NPA" : 8405,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Winterthur",
        "NPA" : 8400,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Winterthur",
        "NPA" : 8408,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Winterthur",
        "NPA" : 8404,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Winterthur",
        "NPA" : 8406,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Winznau",
        "NPA" : 4652,
        "Canton" : "SO"
      },
      {
        "Commune" : "Wirzweli",
        "NPA" : 6383,
        "Canton" : "NW"
      },
      {
        "Commune" : "Wisen SO",
        "NPA" : 4634,
        "Canton" : "SO"
      },
      {
        "Commune" : "Wislikofen",
        "NPA" : 5463,
        "Canton" : "AG"
      },
      {
        "Commune" : "Wittenbach",
        "NPA" : 9300,
        "Canton" : "SG"
      },
      {
        "Commune" : "Wittenwil",
        "NPA" : 9547,
        "Canton" : "TG"
      },
      {
        "Commune" : "Witterswil",
        "NPA" : 4108,
        "Canton" : "SO"
      },
      {
        "Commune" : "Wittinsburg",
        "NPA" : 4443,
        "Canton" : "BL"
      },
      {
        "Commune" : "Wittnau",
        "NPA" : 5064,
        "Canton" : "AG"
      },
      {
        "Commune" : "Wittwil",
        "NPA" : 5053,
        "Canton" : "AG"
      },
      {
        "Commune" : "Wohlen AG",
        "NPA" : 5610,
        "Canton" : "AG"
      },
      {
        "Commune" : "Wohlen b. Bern",
        "NPA" : 3033,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wohlenschwil",
        "NPA" : 5512,
        "Canton" : "AG"
      },
      {
        "Commune" : "Wolfenschiessen",
        "NPA" : 6386,
        "Canton" : "NW"
      },
      {
        "Commune" : "Wolfertswil",
        "NPA" : 9116,
        "Canton" : "SG"
      },
      {
        "Commune" : "Wolfhalden",
        "NPA" : 9427,
        "Canton" : "AR"
      },
      {
        "Commune" : "Wolfhausen",
        "NPA" : 8633,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wolfisberg",
        "NPA" : 4704,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wolfwil",
        "NPA" : 4628,
        "Canton" : "SO"
      },
      {
        "Commune" : "Wolhusen",
        "NPA" : 6110,
        "Canton" : "LU"
      },
      {
        "Commune" : "Wollerau",
        "NPA" : 8832,
        "Canton" : "SZ"
      },
      {
        "Commune" : "Worb",
        "NPA" : 3076,
        "Canton" : "BE"
      },
      {
        "Commune" : "Worben",
        "NPA" : 3252,
        "Canton" : "BE"
      },
      {
        "Commune" : "Worblaufen",
        "NPA" : 3048,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wuppenau",
        "NPA" : 9514,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wynau",
        "NPA" : 4923,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wynigen",
        "NPA" : 3472,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wyssachen",
        "NPA" : 4954,
        "Canton" : "BE"
      },
      {
        "Commune" : "Wädenswil",
        "NPA" : 8820,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Wäldi",
        "NPA" : 8564,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wängi",
        "NPA" : 9545,
        "Canton" : "TG"
      },
      {
        "Commune" : "Wölflinswil",
        "NPA" : 5063,
        "Canton" : "AG"
      },
      {
        "Commune" : "Wöschnau",
        "NPA" : 5012,
        "Canton" : "SO"
      },
      {
        "Commune" : "Wünnewil",
        "NPA" : 3184,
        "Canton" : "FR"
      },
      {
        "Commune" : "Würenlingen",
        "NPA" : 5303,
        "Canton" : "AG"
      },
      {
        "Commune" : "Würenlos",
        "NPA" : 5436,
        "Canton" : "AG"
      },
      {
        "Commune" : "Yens",
        "NPA" : 1169,
        "Canton" : "VD"
      },
      {
        "Commune" : "Yverdon-les-Bains",
        "NPA" : 1400,
        "Canton" : "VD"
      },
      {
        "Commune" : "Yvonand",
        "NPA" : 1462,
        "Canton" : "VD"
      },
      {
        "Commune" : "Yvorne",
        "NPA" : 1853,
        "Canton" : "VD"
      },
      {
        "Commune" : "Zauggenried",
        "NPA" : 3309,
        "Canton" : "BE"
      },
      {
        "Commune" : "Zeglingen",
        "NPA" : 4495,
        "Canton" : "BL"
      },
      {
        "Commune" : "Zeihen",
        "NPA" : 5079,
        "Canton" : "AG"
      },
      {
        "Commune" : "Zeiningen",
        "NPA" : 4314,
        "Canton" : "AG"
      },
      {
        "Commune" : "Zell LU",
        "NPA" : 6144,
        "Canton" : "LU"
      },
      {
        "Commune" : "Zell ZH",
        "NPA" : 8487,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zeneggen",
        "NPA" : 3934,
        "Canton" : "VS"
      },
      {
        "Commune" : "Zermatt",
        "NPA" : 3920,
        "Canton" : "VS"
      },
      {
        "Commune" : "Zernez",
        "NPA" : 7530,
        "Canton" : "GR"
      },
      {
        "Commune" : "Zetzwil",
        "NPA" : 5732,
        "Canton" : "AG"
      },
      {
        "Commune" : "Zezikon",
        "NPA" : 9556,
        "Canton" : "TG"
      },
      {
        "Commune" : "Ziefen",
        "NPA" : 4417,
        "Canton" : "BL"
      },
      {
        "Commune" : "Ziegelbrücke",
        "NPA" : 8866,
        "Canton" : "GL"
      },
      {
        "Commune" : "Zielebach",
        "NPA" : 4564,
        "Canton" : "BE"
      },
      {
        "Commune" : "Zignau",
        "NPA" : 7167,
        "Canton" : "GR"
      },
      {
        "Commune" : "Zihlschlacht",
        "NPA" : 8588,
        "Canton" : "TG"
      },
      {
        "Commune" : "Zillis",
        "NPA" : 7432,
        "Canton" : "GR"
      },
      {
        "Commune" : "Zimmerwald",
        "NPA" : 3086,
        "Canton" : "BE"
      },
      {
        "Commune" : "Zinal",
        "NPA" : 3961,
        "Canton" : "VS"
      },
      {
        "Commune" : "Zizers",
        "NPA" : 7205,
        "Canton" : "GR"
      },
      {
        "Commune" : "Zofingen",
        "NPA" : 4800,
        "Canton" : "AG"
      },
      {
        "Commune" : "Zollbrück",
        "NPA" : 3436,
        "Canton" : "BE"
      },
      {
        "Commune" : "Zollikerberg",
        "NPA" : 8125,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zollikofen",
        "NPA" : 3052,
        "Canton" : "BE"
      },
      {
        "Commune" : "Zollikon",
        "NPA" : 8702,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zuben",
        "NPA" : 8585,
        "Canton" : "TG"
      },
      {
        "Commune" : "Zuchwil",
        "NPA" : 4528,
        "Canton" : "SO"
      },
      {
        "Commune" : "Zuckenriet",
        "NPA" : 9526,
        "Canton" : "SG"
      },
      {
        "Commune" : "Zufikon",
        "NPA" : 5621,
        "Canton" : "AG"
      },
      {
        "Commune" : "Zug",
        "NPA" : 6300,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Zugerberg",
        "NPA" : 6300,
        "Canton" : "ZG"
      },
      {
        "Commune" : "Zullwil",
        "NPA" : 4234,
        "Canton" : "SO"
      },
      {
        "Commune" : "Zumholz",
        "NPA" : 1719,
        "Canton" : "FR"
      },
      {
        "Commune" : "Zumikon",
        "NPA" : 8126,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zunzgen",
        "NPA" : 4455,
        "Canton" : "BL"
      },
      {
        "Commune" : "Zuoz",
        "NPA" : 7524,
        "Canton" : "GR"
      },
      {
        "Commune" : "Zuzgen",
        "NPA" : 4315,
        "Canton" : "AG"
      },
      {
        "Commune" : "Zuzwil BE",
        "NPA" : 3303,
        "Canton" : "BE"
      },
      {
        "Commune" : "Zuzwil SG",
        "NPA" : 9524,
        "Canton" : "SG"
      },
      {
        "Commune" : "Zweidlen",
        "NPA" : 8192,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zweilütschinen",
        "NPA" : 3815,
        "Canton" : "BE"
      },
      {
        "Commune" : "Zweisimmen",
        "NPA" : 3770,
        "Canton" : "BE"
      },
      {
        "Commune" : "Zwieselberg",
        "NPA" : 3645,
        "Canton" : "BE"
      },
      {
        "Commune" : "Zwillikon",
        "NPA" : 8909,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zwingen",
        "NPA" : 4222,
        "Canton" : "BL"
      },
      {
        "Commune" : "Zwischenflüh",
        "NPA" : 3756,
        "Canton" : "BE"
      },
      {
        "Commune" : "Zäziwil",
        "NPA" : 3532,
        "Canton" : "BE"
      },
      {
        "Commune" : "Zénauva",
        "NPA" : 1724,
        "Canton" : "FR"
      },
      {
        "Commune" : "Züberwangen",
        "NPA" : 9523,
        "Canton" : "SG"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8057,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8038,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8052,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8037,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8008,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8004,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8055,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8002,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8050,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8005,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8048,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8053,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8049,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8003,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8045,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8006,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8046,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8064,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8001,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8051,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8032,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8044,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8047,
        "Canton" : "ZH"
      },
      {
        "Commune" : "Zürich",
        "NPA" : 8041,
        "Canton" : "ZH"
    });

}, function(){
  console.log('finished populating geodatas');
});