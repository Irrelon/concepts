var app = app || {};

app.lokijs= (function(self){
    
    var nb = 5;
    var db;
    var budgets;
    
    self.init = function(){
      self.btnLoadDatabase = document.getElementById('load-database');
      self.btnDisplayData = document.getElementById('display-data');
      self.btnClearData = document.getElementById('clear-data');
      db = new loki('lokidb');
      budgets = db.addCollection('budgets');
      
      app.lokijs.Events.init();
    };
    
    self.loadJsonFiles = function(){
      console.time("Reading json data");
      $.getJSON("../data/others/objects1000.json", function(data) {
        budgets.insert(data);
        console.log('Row inserted Successfully');
        console.timeEnd("Reading json data");
        console.timeEnd("Importing data on the database");
      });
    };
    
    self.displayItemsList = function(){
      budgets.data.forEach(function(item) {
        var node = document.createElement("li");
        var accountInfo = item.year;
        item.accounts.forEach(function(account){
          accountInfo += " " + account.name +" "+ account.value;
        });
        
        node.appendChild(document.createTextNode(accountInfo));
        document.getElementById('items').appendChild(node);
      });
      console.timeEnd("Reading and display data");
    };
    
    self.clearData = function(){
     $('#items').empty();
    };
    
    function loadRandomDocuments(nb){
      for (i = 0; i < nb; i++){
        budgets.insert(
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
          );
      }
    }
    
    function getRandomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    return self;
})(app.lokijs || {});

app.lokijs.Events = (function(self){
    
    self.init = function(){
        app.lokijs.btnLoadDatabase.onclick = clkLoadDatabase;
        app.lokijs.btnDisplayData.onclick = clkDisplayData;
        app.lokijs.btnClearData.onclick =  clkClearData;
    };

    function clkLoadDatabase(){
      console.time("Importing data on the database");
      app.lokijs.loadJsonFiles();
    }
    
    function clkDisplayData(){
      console.time("Reading and display data");
      app.lokijs.displayItemsList();
    }
    
    function clkClearData(){
      app.lokijs.clearData();
    }

    return self;
})(app.lokijs.Events || {});


app.lokijs.init();