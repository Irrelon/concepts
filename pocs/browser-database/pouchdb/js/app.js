var app = app || {};

app.pouchDB= (function(self){
    
    var nb = 5;
    var db;
    
    self.init = function(){
      db = new PouchDB('databasePouch');
      loadRandomDocuments(nb);
      displayItemsList();
    };
    
    function loadRandomDocuments(nb){
      for (i = 0; i < nb; i++){
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
    
    function displayItemsList(){
      db.allDocs({include_docs: true}, function(err, doc){
        doc.rows.forEach(function(item) {
          var node = document.createElement("li");
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
    
    return self;
})(app.pouchDB || {});

app.pouchDB.init();
