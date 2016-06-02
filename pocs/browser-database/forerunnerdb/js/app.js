var app = app || {};

app.forerunner= (function(self){
    
    self.btnLoadDatabase = undefined;
    self.btnDisplayData = undefined;
    self.btnClearData = undefined;
    
    var nb = 5;
    var fdb;
    var db;
    var collection;
    
    self.init = function(){
      self.btnLoadDatabase = document.getElementById('load-database');
      self.btnDisplayData = document.getElementById('display-data');
      self.btnClearData = document.getElementById('clear-data');
      app.forerunner.Events.init();
    
      fdb = new ForerunnerDB();
      db = fdb.db('databaseFDB1000');
    };
    
    self.loadJsonFiles = function(){
      console.time("Reading json data");
      $.getJSON("data/objects1000.json", function(data) {
        console.timeEnd("Reading json data");
        db.collection('budget').insert(data);
        console.timeEnd("Importing data on the database");
      });
    };
    
    self.displayItemsList = function(){
      collection = db.collection('budget');
      console.timeEnd("Reading data on database");
      collection.link('#display', '#itemTemplate');
      console.timeEnd("Reading and display data");
    };
    
    self.clearData = function(){
     $('#display').empty();
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
      }
    }
    
    function getRandomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    return self;
})(app.forerunner || {});

app.forerunner.Events = (function(self){
    
    self.init = function(){
        app.forerunner.btnLoadDatabase.onclick = clkLoadDatabase;
        app.forerunner.btnDisplayData.onclick = clkDisplayData;
        app.forerunner.btnClearData.onclick =  clkClearData;
    };

    function clkLoadDatabase(){
      console.time("Importing data on the database");
      app.forerunner.loadJsonFiles();
    }
    
    function clkDisplayData(){
      console.time("Reading and display data");
      console.time("Reading data on database");
      app.forerunner.displayItemsList();
    }
    
    function clkClearData(){
      app.forerunner.clearData();
    }

    return self;
})(app.forerunner.Events || {});


app.forerunner.init();
