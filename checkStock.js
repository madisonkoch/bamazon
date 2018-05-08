var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    insecureAuth: true,

    user: 'root',

    password: '',
    database: 'bamazon'
});

connection.query("SELECT * FROM products", function(err, res) {
    console.group("Available Stock:");
        console.log("id    (stock) product name");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id+"\t("+ res[i].stock_qunatity + ")\t" + res[i].product_name);
    }
    console.groupEnd();
});