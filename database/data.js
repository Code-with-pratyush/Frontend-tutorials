//inserting data into database
use pratyushkart
db.items.insertMany([{name:"Samsung" , price : 23000  , rating : 4.5, quantity: 1 , sold: 98},{name:"Vivo" , price : 20000  , rating : 4.0, quantity: 2 , sold: 100}, {name:"Moto" , price : 15000  , rating : 3.5, quantity: 1 , sold: 50}, {name:"Realme" , price : 18000  , rating : 3.9, quantity: 1 , sold: 200}])
//searching foe datat in mongo db
db.items.find({rating:3.5})
db.items.find({rating:3.5})
db.items,find({rating: {$gte:3.5}})
db.items.find({rating:{$gt:3.5}})

