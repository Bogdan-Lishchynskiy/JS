while (true) {

    var name = prompt("Enter your name:", 'Petro');
    var time = prompt("Enter the current time:", '17:00');
    var city = prompt("Enter your city:", 'Pystomutu');

    var regExp_Name_City = /\D/;

    if (!regExp_Name_City.test(name) || !regExp_Name_City.test(city)) {
        alert("Your input is not valid! Try again)");
    } else {
        alert(name + ' has a meeting ' + ' today at ' + time + ' somewhere in ' + city);
        break;
    }
}