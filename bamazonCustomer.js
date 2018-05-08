var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    insecureAuth: true,

    user: 'root',

    password: '',
    database: 'bamazon'
});

connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId);
    customer();
    // connection.end();
  });

function customer(){
    connection.query("SELECT * FROM products", function(err, res) {
        console.group("Available Products:");
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].product_name + " ($" + res[i].price + ") id: " + res[i].item_id);
        }
        console.groupEnd();
        console.log("\n");
        inquirer.prompt([{
            name: "item_id",
            type: "input",
            message: "What is the id of the product you want to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
        },
        {
            name: "units",
            type: "input",
            message: "How many do you want?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }])
        .then(function(answer) {
            //console.log(typeof parseInt(answer.item_id))
            //console.log(typeof res[1].item_id);

            let chosenId;
            for (var i = 0; i < res.length; i++) {
                if (res[i].item_id === parseInt(answer.item_id)) {
                    chosenId = res[i];
                }
            };
            if (chosenId.stock_qunatity >= parseInt(answer.units)){
                var newQuantity = chosenId.stock_qunatity - parseInt(answer.units);
                var purchaseTotal = parseInt(answer.units) * chosenId.price;
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                      {
                        stock_qunatity: newQuantity
                      },
                      {
                        item_id: chosenId.item_id
                      }
                    ],
                    function(error) {
                      if (error) throw err;
                      console.log(`\nTotal cost of purchase: $${purchaseTotal}`);
                    }
                );
            }
            else {
                if (chosenId.stock_qunatity>0){
                    console.log(`Insufficient quantity - we can only fullfill orders of ${chosenId.stock_qunatity} or less at this time.`) 
                }
                else {
                    console.log('Out of Stock')
                }
            }
        });
    })
};