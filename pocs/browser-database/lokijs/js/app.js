var app = app || {};

app.lokijs= (function(self){
    
    var nb = 5;
    var db;
    var budgets;
    
    self.init = function(){
      db = new loki('lokidb');
      budgets = db.addCollection('budgets');
      
      loadRandomDocuments(nb);
      displayItemsList();
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
    
    function displayItemsList(){
      budgets.data.forEach(function(item) {
        var node = document.createElement("li");
        var accountInfo = item.year;
        item.accounts.forEach(function(account){
          accountInfo += " " + account.name +" "+ account.value;
        });
        
        node.appendChild(document.createTextNode(accountInfo));
        document.getElementById('items').appendChild(node);
      });
    }
    
    function getRandomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    return self;
})(app.lokijs || {});

app.lokijs.init();
