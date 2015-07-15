var app = app || {};

app.forerunner= (function(self){
    
    var nb = 5;
    var fdb;
    var db;
    var collection;
    
    self.init = function(){
      fdb = new ForerunnerDB();
      db = fdb.db('databaseFDB');
      loadRandomDocuments(nb);
      displayItemsList();
    };
    
    function loadRandomDocuments(nb){
      for (i = 0; i < nb; i++){
        db.collection('budget').insert([
            {
              "year": i,
              "accounts": [
                    {"name":"Ordentliches Finanzierungsergebnis", "value":getRandomInt(-2000,10000)},
                    {"name":"Ordentliche Einnahmen", "value":getRandomInt(-2000,10000)},
                    {"name":"Ordentliche Ausgaben", "value":getRandomInt(-2000,10000)},
                    {"name":"Finanzierungsergebnis", "value":getRandomInt(-2000,10000)},
                    {"name":"Ausserordentliche Einnahmen", "value":getRandomInt(-2000,10000)},
                    {"name":"Ausserordentliche Ausgaben", "value":getRandomInt(-2000,10000)}
                ]
            }
          ]);
          db.collection('budget').save();
      }
    }
    
    function displayItemsList(){
      collection = db.collection('budget');
      collection.link('#display', '#itemTemplate');
    }
    
    function getRandomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    return self;
})(app.forerunner || {});

app.forerunner.init();
