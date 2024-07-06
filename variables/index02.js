// Rules : Aturan dalam membuat variabel

// 1. Tidak dapat mengandung spasi

var firstname = "Max"
console.log(firstname)

var myaddress = "Dutch"
console.log(myaddress)

// 2. Hanya dapat diawali oleh huruf, underscore, dan dollar sign

var phonenumber
var _age
var $quality

var firstname, midlename, lastname

// salah
// var 1heart
// var 7days
// var !warnings

// 3. Hanya dapat terdiri dari huruf, angka, underscore, dan dollar sign

var totalbill, my_b1rthday, $cloud9

// Bersifat case-sensitive (membedakan huruf kecil dan huruf besar)

var nextday = "lower case"

var Nextday = "upper case"

// Case Style

// camelCase 
// Selalu diawali huruf kecil
// Huruf pertama pada kata kedua dan seterusnya menggunakan huruf kapital

var myNumber

var ourLastNight

// snake_case

// Selalu menggunakan huruf kecil
// Setiap kata akan dihubungkan oleh underscore
var my_number

var our_last_night