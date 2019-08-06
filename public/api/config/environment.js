/*
this module is responsible for checking the environment:
 wither it [development,production or testing]
and then setup the port and database url
*/

/*
check if the process has allready environment type [production,tetsing] or
set it to development by defaults
*/
const environment = (process.env.PORT) ? 'production' : 'development';
console.log(`node is working as ${environment}`)

if (environment == 'production') {
    //TODO change the url for database
    process.env.DB_URL = 'mongodb://mechanic:mechanic0924952329@ds131323.mlab.com:31323/mechanic';
}

else if (environment == 'development') {
    process.env.DB_URL = "mongodb://localhost:27017/StudantHousing";
    process.env.PORT = 3000;
}

else {
    process.env.DB_URL = "mongodb://localhost:27017/TestStudantHousing";
    process.env.PORT = 3000;
}

module.export = environment;