var popData = {
  // "US": 326474013,// US
  // "GB": 1158,// UK
  // "RU": 158,// Russia
  // "CN": 1388232693,// China
  // "IN": 1342512706,// India
  // "ID": 263510146,// Indonesia
  // "BR": 211243220,// Brazil
  // // 
  "BD":	156600000,//Bangladesh
  "BE":	11200000,//Belgium
  "BF":	16930000,//Burkina Faso
  "BG":	7265000,//Bulgaria
  "BA":	3829000,//Bosnia and Herz.
  "BN":	417784,//Brunei
  "BO":	10670000,//Bolivia
  "JP":	127300000,//Japan
  "BI":	10160000,//Burundi
  "BJ":	10320000,//Benin
  "BT":	753947,//Bhutan
  "JM":	2715000,//Jamaica
  "BW":	2021000,//Botswana
  "BR":	200400000,//Brazil
  "BS":	377374,//Bahamas
  "BY":	9466000,//Belarus
  "BZ":	331900,//Belize
  "RU":	143500000,//Russia
  "RW":	11780000,//Rwanda
  "RS":	7164000,//Serbia
  "TL":	1178000,//Timor-Leste
  "TM":	5240000,//Turkmenistan
  "TJ":	8208000,//Tajikistan
  "RO":	19960000,//Romania
  "GW":	1704000,//Guinea-Bissau
  "GT":	15470000,//Guatemala
  "GR":	11030000,//Greece
  "GQ":	757014,//Eq. Guinea
  "GY":	799613,//Guyana
  "GE":	4477000,//Georgia
  "GB":	64100000,//United Kingdom
  "GA":	1672000,//Gabon
  "GN":	11750000,//Guinea
  "GM":	1849000,//Gambia
  "GL":	56483,//Greenland
  "GH":	25900000,//Ghana
  "OM":	3632000,//Oman
  "TN":	10890000,//Tunisia
  "JO":	6459000 ,//Jordan
  "HR":	4253000 ,//Croatia
  "HT":	10320000,//Haiti
  "HU":	9897000,//Hungary
  "HN":	8098000,//Honduras
  "PR":	3548000,//Puerto Rico
  "PS":	4550000,//Palestine
  "PT":	10460000,//Portugal
  "PY":	6802000,//Paraguay
  "PA":	3864000,//Panama
  "PG":	7321000,//Papua New Guinea
  "PE":	30380000,//Peru
  "PK":	182100000,//Pakistan
  "PH":	98390000,//Philippines
  "PL":	38530000,//Poland
  "ZM":	14540000,//Zambia
  "EH":	513000,//W. Sahara
  "EE":	1325000,//Estonia
  "EG":	82060000,//Egypt
  "ZA":	52980000,//South Africa
  "EC":	15740000,//Ecuador
  "IT":	59830000,//Italy
  "VN":	89710000,//Vietnam
  "SB":	561231,//Solomon Is.
  "ET":	94100000,//Ethiopia
  "SO":	10500000,//Somalia
  "ZW":	14150000,//Zimbabwe
  "ES":	46770000,//Spain
  "ER":	6333000,//Eritrea
  "ME":	621383,//Montenegro
  "MD":	3559000,//Moldova
  "MG":	22920000,//Madagascar
  "MA":	33010000,//Morocco
  "UZ":	30240000,//Uzbekistan
  "MM":	53260000,//Myanmar
  "ML":	15300000,//Mali
  "MN":	2839000,//Mongolia
  "MK":	2107000,//Macedonia
  "MW": 16360000,//Malawi
  "MR":	3890000,//Mauritania
  "UG":	37580000,//Uganda
  "MY":	29720000,//Malaysia
  "MX":	122300000,//Mexico
  "IL":	8059000,//Israel
  "FR":	66030000,//France
  "XS":	4500000,//Somaliland
  "FI":	5439000,//Finland
  "FJ":	881065,//Fiji
  "FK":	2932,//Falkland Is.
  "NI":	6080000,//Nicaragua
  "NL":	16800000,//Netherlands
  "NO":	5084000,//Norway
  "NA":	2303000,//Namibia
  "VU":	252763,//Vanuatu
  "NC":	262000,//New Caledonia
  "NE":	17830000,//Niger
  "NG":	173600000,//Nigeria
  "NZ":	4471000,//New Zealand
  "NP":	27800000,//Nepal
  "XK":	1824000,//Kosovo
  "CI":	20320000,//Côte d'Ivoire
  "CH":	8081000,//Switzerland
  "CO":	47120000,//Colombia
  "CN":	1357000000,//China
  "CM":	22250000,//Cameroon
  "CL":	17620000,//Chile
  "XC":	313626,//N. Cyprus
  "CA":	35160000,//Canada
  "CG":	4662000,//Congo
  "CF":	4616000,//Central African Rep.
  "CD":	67510000,//Dem. Rep. Congo
  "CZ":	10520000,//Czech Rep.
  "CY":	1141000,//Cyprus
  "CR":	4872000,//Costa Rica
  "CU":	11270000,//Cuba
  "SZ":	1250000,//Swaziland
  "SY": 22850000,//Syria
  "KG":	5720000,//Kyrgyzstan
  "KE":	44350000,//Kenya
  "SS":	11300000,//S. Sudan
  "SR":	539276,//Suriname
  "KH":	15140000,//Cambodia
  "SV":	6340000,//El Salvador
  "SK":	5414000,//Slovakia
  "KR":	50220000,//Korea
  "SI":	2060000,//Slovenia
  "KP":	24900000,//Dem. Rep. Korea
  "KW":	3369000,//Kuwait
  "SN":	14130000,//Senegal
  "SL":	6092000,//Sierra Leone
  "KZ":	17040000,//Kazakhstan
  "SA":	28830000,//Saudi Arabia
  "SE":	9593000,//Sweden
  "SD":	37960000,//Sudan
  "DO":	10400000,//Dominican Rep.
  "DJ":	872932,//Djibouti
  "DK":	5614000,//Denmark
  "DE":	80620000,//Germany
  "YE":	24410000,//Yemen
  "DZ":	39210000,//Algeria
  "US":	318900000,//United States
  "UY":	3407000,//Uruguay
  "LB":	4467000,//Lebanon
  "LA":	6770000,//Lao PDR
  "TW":	23520000,//Taiwan
  "TT":	1341000,//Trinidad and Tobago
  "TR":	74930000,//Turkey
  "LK":	20480000,//Sri Lanka
  "LV":	2013000,//Latvia
  "LT":	2956000,//Lithuania
  "LU":	543202,//Luxembourg
  "LR":	4294000,//Liberia
  "LS":	2074000,//Lesotho
  "TH":	67010000,//Thailand
  "TF":	130,//Fr. S. Antarctic Lands
  "TG":	6817000,//Togo
  "TD":	12830000,//Chad
  "LY":	6202000,//Libya
  "AE":	9346000,//United Arab Emirates
  "VE":	30410000,//Venezuela
  "AF":	30550000,//Afghanistan
  "IQ":	33420000,//Iraq
  "IS":	323002,//Iceland
  "IR":	77450000,//Iran
  "AM":	2977000,//Armenia  
  "AL":	2774000,//Albania
  "AO":	21470000,//Angola
  "AR":	41450000,//Argentina
  "AU":	23130000,//Australia
  "AT":	8474000,//Austria
  "IN":	1252000000,//India
  "TZ":	49250000,//Tanzania
  "AZ":	9417000,//Azerbaijan
  "IE":	4595000,//Ireland
  "ID":	249900000,//Indonesia
  "UA":	45490000,//Ukraine
  "QA":	2169000,//Qatar
  "MZ":	25830000,//Mozambique

};



