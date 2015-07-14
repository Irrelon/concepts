//browser database (local)
var db = new PouchDB('databasePouch');

loadRandomDocument(500);

readDocuments();

function readDocuments(){
  console.log("start reading");
    db.allDocs({include_docs: true}, function(err, doc){
        console.log(doc);
        doc.rows.forEach(function(item) {
          var node = document.createElement("li");
          console.log(item);
          var accountInfo = item.id;
          item.doc.accounts.forEach(function(account){
            accountInfo += " " + account.name +" "+ account.value;
          });
          
          node.appendChild(document.createTextNode(accountInfo));
          document.getElementById('items').appendChild(node);
        });
    });
}

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadRandomDocument(numberOfDocuments){
  for (i = 0; i < numberOfDocuments; i++){
    var doc =
        {
          "_id": i.toString(),
          "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":getRandomInt(-2000,10000)},
                {"name":"Ordentliche Einnahmen", "value":getRandomInt(-2000,10000)},
                {"name":"Ordentliche Ausgaben", "value":getRandomInt(-2000,10000)},
                {"name":"Finanzierungsergebnis", "value":getRandomInt(-2000,10000)},
                {"name":"Ausserordentliche Einnahmen", "value":getRandomInt(-2000,10000)},
                {"name":"Ausserordentliche Ausgaben", "value":getRandomInt(-2000,10000)}
            ]
        };
    db.put(doc);
  }
}

function loadDocuments(){
    
    //Adding document
    db.bulkDocs([ 
        {
            "_id": "2004",
            "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":-1656},
                {"name":"Ordentliche Einnahmen", "value":48629},
                {"name":"Ordentliche Ausgaben", "value":50285},
                {"name":"Finanzierungsergebnis", "value":-2777},
                {"name":"Ausserordentliche Einnahmen", "value":0},
                {"name":"Ausserordentliche Ausgaben", "value":1121}
            ]
        },{
            "_id": "2005",
            "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":-121},
                {"name":"Ordentliche Einnahmen", "value":51282},
                {"name":"Ordentliche Ausgaben", "value":51403},
                {"name":"Finanzierungsergebnis", "value":8267},
                {"name":"Ausserordentliche Einnahmen", "value":8267},
                {"name":"Ausserordentliche Ausgaben", "value":0}
            ]
        },{
            "_id": "2006",
            "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":2534},
                {"name":"Ordentliche Einnahmen", "value":54911},
                {"name":"Ordentliche Ausgaben", "value":52377},
                {"name":"Finanzierungsergebnis", "value":5738},
                {"name":"Ausserordentliche Einnahmen", "value":3203},
                {"name":"Ausserordentliche Ausgaben", "value":0}
            ]
        },{
            "_id": "2007",
            "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":4127},
                {"name":"Ordentliche Einnahmen", "value":58092},
                {"name":"Ordentliche Ausgaben", "value":53965},
                {"name":"Finanzierungsergebnis", "value":-2157},
                {"name":"Ausserordentliche Einnahmen", "value":754},
                {"name":"Ausserordentliche Ausgaben", "value":7038}
            ]
        },{
            "_id": "2008",
            "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":7297},
                {"name":"Ordentliche Einnahmen", "value":63894},
                {"name":"Ordentliche Ausgaben", "value":56598},
                {"name":"Finanzierungsergebnis", "value":-3561},
                {"name":"Ausserordentliche Einnahmen", "value":283},
                {"name":"Ausserordentliche Ausgaben", "value":11141}
            ]
        },{
            "_id": "2009",
            "year": 2009,
            "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":2721},
                {"name":"Ordentliche Einnahmen", "value":60949},
                {"name":"Ordentliche Ausgaben", "value":58228},
                {"name":"Finanzierungsergebnis", "value":9745},
                {"name":"Ausserordentliche Einnahmen", "value":7024},
                {"name":"Ausserordentliche Ausgaben", "value":0}
            ]
        },{
            "_id": "2010",
            "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":3568},
                {"name":"Ordentliche Einnahmen", "value":62833},
                {"name":"Ordentliche Ausgaben", "value":59266},
                {"name":"Finanzierungsergebnis", "value":3140},
                {"name":"Ausserordentliche Einnahmen", "value":0},
                {"name":"Ausserordentliche Ausgaben", "value":427}
            ]
        },{
            "_id": "2011",
            "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":1912},
                {"name":"Ordentliche Einnahmen", "value":64245},
                {"name":"Ordentliche Ausgaben", "value":62333},
                {"name":"Finanzierungsergebnis", "value":205},
                {"name":"Ausserordentliche Einnahmen", "value":290},
                {"name":"Ausserordentliche Ausgaben", "value":1998}
            ]
        },{
            "_id": "2012",
            "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":1262},
                {"name":"Ordentliche Einnahmen", "value":62997},
                {"name":"Ordentliche Ausgaben", "value":61736},
                {"name":"Finanzierungsergebnis", "value":2000},
                {"name":"Ausserordentliche Einnahmen", "value":738},
                {"name":"Ausserordentliche Ausgaben", "value":0}
            ]
        },{
            "_id": "2013",
            "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":1332},
                {"name":"Ordentliche Einnahmen", "value":65032},
                {"name":"Ordentliche Ausgaben", "value":63700},
                {"name":"Finanzierungsergebnis", "value":2638},
                {"name":"Ausserordentliche Einnahmen", "value":1306},
                {"name":"Ausserordentliche Ausgaben", "value":0}
            ]
        },{
            "_id": "2014",
            "accounts": [
                {"name":"Ordentliches Finanzierungsergebnis", "value":-124},
                {"name":"Ordentliche Einnahmen", "value":63876},
                {"name":"Ordentliche Ausgaben", "value":64000},
                {"name":"Finanzierungsergebnis", "value":89},
                {"name":"Ausserordentliche Einnahmen", "value":213},
                {"name":"Ausserordentliche Ausgaben", "value":0}
            ]
        }
    ]);
}