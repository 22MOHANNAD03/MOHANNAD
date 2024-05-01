const wordList = [
    // https://2009-2017.state.gov/misc/list/index.htm
    // 180 COUNTRIES
    // A
    {
        word: "afghanistan",
        hint: "1 word start with 'a' end with 'n'"
    },
    {
        word: "albania",
        hint: "1 word start with 'a' end with 'a'"
    },
    {
        word: "algeria",
        hint: "1 word start with 'a' end with 'a'"
    },
    {
        word: "andorra",
        hint: "1 word start with 'a' end with 'a'"
    },
    {
        word: "angola",
        hint: "1 word start with 'a' end with 'a'"
    },
    {
        word: "azerbaijan",
        hint: "1 word start with 'a' end with 'n'"
    },
    {
        word: "argentina",
        hint: "1 word start with 'a' end with 'a'"
    },
    {
        word: "armenia",
        hint: "1 word start with 'a' end with 'a'"
    },
    {
        word: "aruba",
        hint: "1 word start with 'a' end with 'a'"
    },
    {
        word: "australia",
        hint: "1 word start with 'a' end with 'a'"
    },
    {
        word: "austria",
        hint: "1 word start with 'a' end with 'a'"
    },
    // B
    {
        word: "botswana",
        hint: "1 word start with 'b' end with 'a'"
    },
    {
        word: "bahrain",
        hint: "1 word start with 'b' end with 'n'"
    },
    {
        word: "bangladesh",
        hint: "1 word start with 'b' end with 'h'"
    },
    {
        word: "barbados",
        hint: "1 word start with 'b' end with 's'"
    },
    {
        word: "belarus",
        hint: "1 word start with 'b' end with 's'"
    },
    {
        word: "belgium",
        hint: "1 word start with 'b' end with 'm'"
    },
    {
        word: "belize",
        hint: "1 word start with 'b' end with 'e'"
    },
    {
        word: "benin",
        hint: "1 word start with 'b' end with 'n'"
    },
    {
        word: "bhutan",
        hint: "1 word start with 'b' end with 'n'"
    },
    {
        word: "bolivia",
        hint: "1 word start with 'b' end with 'a'"
    },
    {
        word: "brazil",
        hint: "1 word start with 'b' end with 'l'"
    },
    {
        word: "brunei",
        hint: "1 word start with 'b' end with 'i'"
    },
    {
        word: "bulgaria",
        hint: "1 word start with 'b' end with 'a'"
    },
    {
        word: "burma",
        hint: "1 word start with 'b' end with 'a'"
    },
    {
        word: "burundi",
        hint: "1 word start with 'b' end with 'i'"
    },
    // C
    {
        word: "cambodia",
        hint: "1 word start with 'c' end with 'a'"
    },
    {
        word: "cameroon",
        hint: "1 word start with 'c' end with 'n'"
    },
    {
        word: "canada",
        hint: "1 word start with 'c' end with 'a'"
    },
    {
        word: "chad",
        hint: "1 word start with 'c' end with 'd'"
    },
    {
        word: "chile",
        hint: "1 word start with 'c' end with 'e'"
    },
    {
        word: "china",
        hint: "1 word start with 'c' end with 'a'"
    },
    {
        word: "colombia",
        hint: "1 word start with 'c' end with 'a'"
    },
    {
        word: "comoros",
        hint: "1 word start with 'c' end with 's'"
    },
    {
        word: "croatia",
        hint: "1 word start with 'c' end with 'a'"
    },
    {
        word: "cuba",
        hint: "1 word start with 'c' end with 'a'"
    },
    {
        word: "curacao",
        hint: "1 word start with 'c' end with 'o'"
    },
    {
        word: "cyprus",
        hint: "1 word start with 'c' end with 's'"
    },
    {
        word: "czechia",
        hint: "1 word start with 'c' end with 'a'"
    },
    // D
    {
        word: "denmark",
        hint: "1 word start with 'd' end with 'k'"
    },
    {
        word: "djibouti",
        hint: "1 word start with 'd' end with 'i'"
    },
    {
        word: "dominica",
        hint: "1 word start with 'd' end with 'a'"
    },
    {
        word: "dominicanrepublic",
        hint: "2 word start with 'd' end with 'c'"
    },
    // E
    {
        word: "ecuador",
        hint: "1 word start with 'e' end with 'r'"
    },
    {
        word: "egypt",
        hint: "1 word start with 'e' end with 't'"
    },
    {
        word: "eritrea",
        hint: "1 word start with 'e' end with 'a'"
    },
    {
        word: "estonia",
        hint: "1 word start with 'e' end with 'a'"
    },
    {
        word: "ethiopia",
        hint: "1 word start with 'e' end with 'a'"
    },
    // F
    {
        word: "fiji",
        hint: "1 word start with 'f' end with 'i'"
    },
    {
        word: "finland",
        hint: "1 word start with 'f' end with 'd'"
    },
    {
        word: "france",
        hint: "1 word start with 'f' end with 'e'"
    },
    // G
    {
        word: "gabon",
        hint: "1 word start with 'g' end with 'n'"
    },
    {
        word: "georgia",
        hint: "1 word start with 'g' end with 'a'"
    },
    {
        word: "germany",
        hint: "1 word start with 'g' end with 'y'"
    },
    {
        word: "ghana",
        hint: "1 word start with 'g' end with 'a'"
    },
    {
        word: "greece",
        hint: "1 word start with 'g' end with 'e'"
    },
    {
        word: "grenada",
        hint: "1 word start with 'g' end with 'a'"
    },
    {
        word: "guatemala",
        hint: "1 word start with 'g' end with 'a'"
    },
    {
        word: "guinea",
        hint: "1 word start with 'g' end with 'a'"
    },
    {
        word: "guyana",
        hint: "1 word start with 'g' end with 'a'"
    },
    // H
    {
        word: "haiti",
        hint: "1 word start with 'h' end with 'i'"
    },
    {
        word: "honduras",
        hint: "1 word start with 'h' end with 's'"
    },
    {
        word: "hongkong",
        hint: "2 word start with 'h' end with 'g'"
    },
    {
        word: "hungary",
        hint: "1 word start with 'h' end with 'y'"
    },
    // I
    {
        word: "iceland",
        hint: "1 word start with 'i' end with 'd'"
    },
    {
        word: "india",
        hint: "1 word start with 'i' end with 'a'"
    },
    {
        word: "indonesia",
        hint: "1 word start with 'i' end with 'a'"
    },
    {
        word: "iran",
        hint: "1 word start with 'i' end with 'n'"
    },
    {
        word: "iraq",
        hint: "1 word start with 'i' end with 'q'"
    },
    {
        word: "ireland",
        hint: "1 word start with 'i' end with 'd'"
    },
    {
        word: "israel",
        hint: "1 word start with 'i' end with 'l'"
    },
    {
        word: "italy",
        hint: "1 word start with 'i' end with 'y'"
    },
    // J
    {
        word: "jamaica",
        hint: "1 word start with 'j' end with 'a'"
    },
    {
        word: "japan",
        hint: "1 word start with 'j' end with 'n'"
    },
    {
        word: "jordan",
        hint: "1 word start with 'j' end with 'n'"
    },
    // K
    {
        word: "kazakhstan",
        hint: "1 word start with 'k' end with 'n'"
    },
    {
        word: "kenya",
        hint: "1 word start with 'k' end with 'a'"
    },
    {
        word: "kiribati",
        hint: "1 word start with 'k' end with 'i'"
    },
    {
        word: "kosovo",
        hint: "1 word start with 'k' end with 'o'"
    },
    {
        word: "kuwait",
        hint: "1 word start with 'k' end with 't'"
    },
    {
        word: "kyrgyzstan",
        hint: "1 word start with 'k' end with 'n'"
    },
    // L
    {
        word: "laos",
        hint: "1 word start with 'l' end with 's'"
    },
    {
        word: "latvia",
        hint: "1 word start with 'l' end with 'a'"
    },
    {
        word: "lebanon",
        hint: "1 word start with 'l' end with 'n'"
    },
    {
        word: "lesotho",
        hint: "1 word start with 'l' end with 'o'"
    },
    {
        word: "liberia",
        hint: "1 word start with 'l' end with 'a'"
    },
    {
        word: "libya",
        hint: "1 word start with 'l' end with 'a'"
    },
    {
        word: "liechtenstein",
        hint: "1 word start with 'l' end with 'n'"
    },
    {
        word: "lithuania",
        hint: "1 word start with 'l' end with 'a'"
    },
    {
        word: "luxembourg",
        hint: "1 word start with 'l' end with 'g'"
    },
    // M
    {
        word: "macau",
        hint: "1 word start with 'm' end with 'u'"
    },
    {
        word: "macedonia",
        hint: "1 word start with 'm' end with 'a'"
    },
    {
        word: "madagascar",
        hint: "1 word start with 'm' end with 'r'"
    },
    {
        word: "malawi",
        hint: "1 word start with 'm' end with 'i'"
    },
    {
        word: "malaysia",
        hint: "1 word start with 'm' end with 'a'"
    },
    {
        word: "maldives",
        hint: "1 word start with 'm' end with 's'"
    },
    {
        word: "mali",
        hint: "1 word start with 'm' end with 'i'"
    },
    {
        word: "malta",
        hint: "1 word start with 'm' end with 'a'"
    },
    {
        word: "marshallislands",
        hint: "2 word start with 'm' end with 's'"
    },
    {
        word: "mauritania",
        hint: "1 word start with 'm' end with 'a'"
    },
    {
        word: "mauritius",
        hint: "1 word start with 'm' end with 's'"
    },
    {
        word: "mexico",
        hint: "1 word start with 'm' end with 'o'"
    },
    {
        word: "micronesia",
        hint: "1 word start with 'm' end with 'a'"
    },
    {
        word: "moldova",
        hint: "1 word start with 'm' end with 'a'"
    },
    {
        word: "monaco",
        hint: "1 word start with 'm' end with 'o'"
    },
    {
        word: "mongolia",
        hint: "1 word start with 'm' end with 'a'"
    },
    {
        word: "montenegro",
        hint: "1 word start with 'm' end with 'o'"
    },
    {
        word: "morocco",
        hint: "1 word start with 'm' end with 'o'"
    },
    {
        word: "mozambique",
        hint: "1 word start with 'm' end with 'e'"
    },
    // N
    {
        word: "namibia",
        hint: "1 word start with 'n' end with 'a'"
    },
    {
        word: "nauru",
        hint: "1 word start with 'n' end with 'u'"
    },
    {
        word: "nepal",
        hint: "1 word start with 'n' end with 'l'"
    },
    {
        word: "netherlands",
        hint: "1 word start with 'n' end with 's'"
    },
    {
        word: "newzealand",
        hint: "2 word start with 'n' end with 'd'"
    },
    {
        word: "nicaragua",
        hint: "1 word start with 'n' end with 'a'"
    },
    {
        word: "niger",
        hint: "1 word start with 'n' end with 'r'"
    },
    {
        word: "nigeria",
        hint: "1 word start with 'n' end with 'a'"
    },
    {
        word: "northkorea",
        hint: "2 word start with 'n' end with 'a'"
    },
    {
        word: "norway",
        hint: "1 word start with 'n' end with 'y'"
    },
    // O
    {
        word: "oman",
        hint: "1 word start with 'o' end with 'n'"
    },
    // P
    {
        word: "pakistan",
        hint: "1 word start with 'p' end with 'n'"
    },
    {
        word: "palau",
        hint: "1 word start with 'p' end with 'u'"
    },
    {
        word: "palestinianterritories",
        hint: "2 word start with 'p' end with 's'"
    },
    {
        word: "panama",
        hint: "1 word start with 'p' end with 'a'"
    },
    {
        word: "papuanewguinea",
        hint: "3 word start with 'p' end with 'a'"
    },
    {
        word: "paraguay",
        hint: "1 word start with 'p' end with 'y'"
    },
    {
        word: "peru",
        hint: "1 word start with 'p' end with 'u'"
    },
    {
        word: "philippines",
        hint: "1 word start with 'p' end with 's'"
    },
    {
        word: "poland",
        hint: "1 word start with 'p' end with 'd'"
    },
    {
        word: "portugal",
        hint: "1 word start with 'p' end with 'l'"
    },
    // Q
    {
        word: "qatar",
        hint: "1 word start with 'q' end with 'r'"
    },
    // R
    {
        word: "romania",
        hint: "1 word start with 'r' end with 'a'"
    },
    {
        word: "russia",
        hint: "1 word start with 'r' end with 'a'"
    },
    {
        word: "rwanda",
        hint: "1 word start with 'r' end with 'a'"
    },
    // S
    {
        word: "saintlucia",
        hint: "2 word start with 's' end with 'a'"
    },
    {
        word: "samoa",
        hint: "1 word start with 's' end with 'a'"
    },
    {
        word: "sanmarino",
        hint: "2 word start with 's' end with 'o'"
    },
    {
        word: "saudiarabia",
        hint: "2 word start with 's' end with 'a'"
    },
    {
        word: "senegal",
        hint: "1 word start with 's' end with 'l'"
    },
    {
        word: "serbia",
        hint: "1 word start with 's' end with 'a'"
    },
    {
        word: "seychelles",
        hint: "1 word start with 's' end with 's'"
    },
    {
        word: "sierraleone",
        hint: "2 word start with 's' end with 'e'"
    },
    {
        word: "singapore",
        hint: "1 word start with 's' end with 'e'"
    },
    {
        word: "sintmaarten",
        hint: "2 word start with 's' end with 'n'"
    },
    {
        word: "slovakia",
        hint: "1 word start with 's' end with 'a'"
    },
    {
        word: "slovenia",
        hint: "1 word start with 's' end with 'a'"
    },
    {
        word: "solomonislands",
        hint: "2 word start with 's' end with 's'"
    },
    {
        word: "somalia",
        hint: "1 word start with 's' end with 'a'"
    },
    {
        word: "southafrica",
        hint: "2 word start with 's' end with 'a'"
    },
    {
        word: "southkorea",
        hint: "2 word start with 's' end with 'a'"
    },
    {
        word: "southsudan",
        hint: "2 word start with 's' end with 'n'"
    },
    {
        word: "spain",
        hint: "1 word start with 's' end with 'n'"
    },
    {
        word: "srilanka",
        hint: "2 word start with 's' end with 'a'"
    },
    {
        word: "sudan",
        hint: "1 word start with 's' end with 'n'"
    },
    {
        word: "suriname",
        hint: "1 word start with 's' end with 'e'"
    },
    {
        word: "swaziland",
        hint: "1 word start with 's' end with 'd'"
    },
    {
        word: "sweden",
        hint: "1 word start with 's' end with 'n'"
    },
    {
        word: "switzerland",
        hint: "1 word start with 's' end with 'd'"
    },
    {
        word: "syria",
        hint: "1 word start with 's' end with 'a'"
    },
    // T
    {
        word: "taiwan",
        hint: "1 word start with 't' end with 'n'"
    },
    {
        word: "tajikistan",
        hint: "1 word start with 't' end with 'n'"
    },
    {
        word: "tanzania",
        hint: "1 word start with 't' end with 'a'"
    },
    {
        word: "thailand",
        hint: "1 word start with 't' end with 'd'"
    },
    {
        word: "togo",
        hint: "1 word start with 't' end with 'o'"
    },
    {
        word: "tonga",
        hint: "1 word start with 't' end with 'a'"
    },
    {
        word: "tunisia",
        hint: "1 word start with 't' end with 'a'"
    },
    {
        word: "turkey",
        hint: "1 word start with 't' end with 'y'"
    },
    {
        word: "turkmenistan",
        hint: "1 word start with 't' end with 'n'"
    },
    {
        word: "tuvalu",
        hint: "1 word start with 't' end with 'u'"
    },
    // U
    {
        word: "uganda",
        hint: "1 word start with 'u' end with 'a'"
    },
    {
        word: "ukraine",
        hint: "1 word start with 'u' end with 'e'"
    },
    {
        word: "unitedarabemirates",
        hint: "3 word start with 'u' end with 's'"
    },
    {
        word: "unitedkingdom",
        hint: "2 word start with 'u' end with 'm'"
    },
    {
        word: "uruguay",
        hint: "1 word start with 'u' end with 'y'"
    },
    {
        word: "uzbekistan",
        hint: "1 word start with 'u' end with 'n'"
    },
    // V
    {
        word: "vanuatu",
        hint: "1 word start with 'v' end with 'u'"
    },
    {
        word: "venezuela",
        hint: "1 word start with 'v' end with 'a'"

    },
    {
        word: "vietnam",
        hint: "1 word start with 'v' end with 'm'"
    },
    // W there is no country with 'W'
    // X there is no country with 'X'
    // Y
    {
        word: "yemen",
        hint: "1 word start with 'y' end with 'n'"
    },
    // Z
    {
        word: "zambia",
        hint: "1 word start with 'z' end with 'a'"
    },
    {
        word: "zimbabwe",
        hint: "1 word start with 'z' end with 'e'"
    },
    // END.
]