var app = app || {};

app.pouchDB = (function(self){
    self.btnLoadDatabase = undefined;
    self.btnDisplayData = undefined;
    self.btnClearData = undefined;
    
    var nb = 5;
    var db;
    
    self.init = function(){
      self.btnLoadDatabase = document.getElementById('load-database');
      self.btnDisplayData = document.getElementById('display-data');
      self.btnClearData = document.getElementById('clear-data');
      app.pouchDB.Events.init();
      
      db = new PouchDB('pouchdb');
    };
    
    self.loadJsonFiles = function(){
      console.time("Reading json data");
      $.getJSON("../data/pouchdb/objects1000.json", function(data) {
        db.bulkDocs(data).then(function (result) {
            console.log('Row inserted Successfully');
            console.timeEnd("Reading json data");
            console.timeEnd("Importing data on the database");
        }).catch(function (err) {
            console.log('Unable to insert into DB. Error: ' + err.name + ' - ' + err.message);
        }); 
      });
    };
    
    self.displayItemsList = function(){
      db.allDocs({include_docs: true}, function(err, doc){
        console.timeEnd("Reading data on database");
        doc.rows.forEach(function(item) {
          var node = document.createElement("li");
          var accountInfo = item.id;
          item.doc.accounts.forEach(function(account){
            accountInfo += " " + account.name +" "+ account.value;
          });
          
          node.appendChild(document.createTextNode(accountInfo));
          document.getElementById('items').appendChild(node);
        });
        console.timeEnd("Reading and display data");
      });
    };
    
    self.clearData = function(){
     $('#items').empty();
    };
    
    function getRandomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
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
    
    return self;
})(app.pouchDB || {});


app.pouchDB.Events = (function(self){
    
    self.init = function(){
        app.pouchDB.btnLoadDatabase.onclick = clkLoadDatabase;
        app.pouchDB.btnDisplayData.onclick = clkDisplayData;
        app.pouchDB.btnClearData.onclick =  clkClearData;
    };

    function clkLoadDatabase(){
      console.time("Importing data on the database");
      app.pouchDB.loadJsonFiles();
    }
    
    function clkDisplayData(){
      console.time("Reading and display data");
      console.time("Reading data on database");
      app.pouchDB.displayItemsList();
    }
    
    function clkClearData(){
      app.pouchDB.clearData();
    }

    return self;
})(app.pouchDB.Events || {});

app.pouchDB.init();
