const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');

const dbFile = 'ecommerce.db';
const db = new sqlite3.Database(dbFile);
const app = express();
app.use(cors());

db.serialize( () => {
	db.run('CREATE TABLE items (id_items INTEGER PRIMARY KEY AUTOINCREMENT,id_types INTEGER,produits VARCHAR(50), prix INTEGER, url VARCHAR(50), FOREIGN KEY (id_types) REFERENCES typesofproducts (id_types))');
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 1,"appleA",200,"img/AppleA.png");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 1,"samsungA",300,"img/SamsungA.png");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 1,"nokiaA",500,"img/NokiaA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 1,"lgA",400,"img/LGA.png");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 2,"samsungB",500,"img/SamsungB.png");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 2,"lgB",600,"img/LGB.png");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 2,"philipsA",700,"img/PhilipsA.png");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 2,"panasonicA",650,"img/PanasonicA.png");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 3,"canonA",500,"img/CanonA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 3,"sonyA",800,"img/SonyA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 3,"fujifilmA",700,"img/FujifilmA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 3,"nikonA",650,"img/NikonA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 4,"hpA",200,"img/HPA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 4,"samsungC",100,"img/SamsungC.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 4,"canonB",200,"img/CanonB.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 4,"epsonA",150,"img/EpsonA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 5,"appleB",500,"img/AppleB.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 5,"samsungD",600,"img/SamsungD.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 5,"huaweiA",700,"img/HuaweiA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 5,"asusA",650,"img/AsusA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 6,"boseA",300,"img/BozeA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 6,"razerA",200,"img/RazerA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 6,"sennheiserA",100,"img/SennheiserA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 6,"sonyB",150,"img/SonyB.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 7,"asusB",500,"img/AsusB.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 7,"acerA",600,"img/AcerA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 7,"hpB",700,"img/HPB.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 7,"lenovoA",650,"img/LenovoA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 8,"toshibaA",200,"img/ToshibaA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 8,"maxtorA",250,"img/MaxtorA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 8,"samsungE",200,"img/SamsungE.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 8,"crucialA",150,"img/CrucialA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 9,"sandiskA",20,"img/SandiskA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 9,"emtecA",25,"img/EmtecA.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 9,"sonyC",20,"img/SonyC.jpg");
	db.run('INSERT INTO items (id_types,produits,prix,url) VALUES (?, ?, ?, ?)', 9,"kingstonA",15,"img/KingstonA.jpg");

	db.run('CREATE TABLE typesofproducts (id_types INTEGER PRIMARY KEY AUTOINCREMENT, types VARCHAR(50))');
	db.run('INSERT INTO typesofproducts(types) VALUES (?)',"téléphone");
	db.run('INSERT INTO typesofproducts(types) VALUES (?)',"tv");
	db.run('INSERT INTO typesofproducts(types) VALUES (?)',"appareil photo");
    db.run('INSERT INTO typesofproducts(types) VALUES (?)',"imprimante");
    db.run('INSERT INTO typesofproducts(types) VALUES (?)',"tablette");
    db.run('INSERT INTO typesofproducts(types) VALUES (?)',"casque");
    db.run('INSERT INTO typesofproducts(types) VALUES (?)',"ordinateur");
    db.run('INSERT INTO typesofproducts(types) VALUES (?)',"disque dur");
    db.run('INSERT INTO typesofproducts(types) VALUES (?)',"clé usb");

    db.run('CREATE TABLE clients (id_clients INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(256), prénom VARCHAR(256),adresse VARCHAR(256), téléphone INTEGER)');
    db.run('INSERT INTO clients(nom, prénom ,adresse, téléphone) VALUES (?, ?, ?, ?)', "dupont","jean", "allée des joncquilles", 0618623593);
    db.run('INSERT INTO clients(nom, prénom ,adresse, téléphone) VALUES (?, ?, ?, ?)', "malouf","ibrahim", "allée des tulipes", 0652365868);
    db.run('INSERT INTO clients(nom, prénom ,adresse, téléphone) VALUES (?, ?, ?, ?)', "carré","isabelle", "allée des bégonias", 0758694230);
    db.run('INSERT INTO clients(nom, prénom ,adresse, téléphone) VALUES (?, ?, ?, ?)', "dujardin","jean", "allée de la sarabande", 0614268530);
    db.run('INSERT INTO clients(nom, prénom ,adresse, téléphone) VALUES (?, ?, ?, ?)', "calment","jeanne", "allée des escarpins", 0969853025);

    db.run('CREATE TABLE association (id_clients INTEGER, id_items INTEGER, FOREIGN KEY (id_clients) REFERENCES clients (id_clients), FOREIGN KEY (id_items) REFERENCES items(id_items))');
    db.run('INSERT INTO association (id_clients, id_items) VALUES (?, ?)',1,1);
    db.run('INSERT INTO association (id_clients, id_items) VALUES (?, ?)',1,3);
    db.run('INSERT INTO association (id_clients, id_items) VALUES (?, ?)',1,15);
    db.run('INSERT INTO association (id_clients, id_items) VALUES (?, ?)',2,12);
    db.run('INSERT INTO association (id_clients, id_items) VALUES (?, ?)',3,13);
    db.run('INSERT INTO association (id_clients, id_items) VALUES (?, ?)',3,27);
    db.run('INSERT INTO association (id_clients, id_items) VALUES (?, ?)',4,18);
    db.run('INSERT INTO association (id_clients, id_items) VALUES (?, ?)',4,21);
    db.run('INSERT INTO association (id_clients, id_items) VALUES (?, ?)',4,34);
    db.run('INSERT INTO association (id_clients, id_items) VALUES (?, ?)',5,9);
    db.run('INSERT INTO association (id_clients, id_items) VALUES (?, ?)',5,23);
    db.run('INSERT INTO association (id_clients, id_items) VALUES(?, ?)',5,32);
});

app.get('/',function (req,res) {
   db.all('select*from items NATURAL JOIN typesofproducts', function (error, data){
     res.send(data);
   });
});
app.listen(3000,function (){
	console.log('STARTING...');
});