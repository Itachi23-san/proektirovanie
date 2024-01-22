function result(){
IP = document.getElementById('IP').value;
var regexpv4 = /\b((\d\.|\d\d\.|1\d\d\.|2[0-4]\d\.|25[0-5]\.){3}(\d|\d\d|1\d\d|2[0-4]\d|25[0-5]))\b/g;
var regexpv6 = /\b((\d{4}:|[A-F]\d{3}:|[A-F]{2}\d{2}:|[A-F]{3}\d:|[A-F]{4}:|[A-F]\d[A-F]\d:|[A-F]\d[A-F]{2}:|\d[A-F]{3}:|\d\d[A-F]{2}:|\d{3}[A-F]:|\d[A-F]\d{2}:|\d[A-F]{2}\d:|\d[A-F]{3}:|\d[A-F]\d[A-F]:|\d{2}[A-F]{2}:|[A-F]\d{2}[A-F]:){7}\d{4}|[A-F]\d{3}|[A-F]{2}\d{2}|[A-F]{3}\d|[A-F]{4}|[A-F]\d[A-F]\d|[A-F]\d[A-F]{2}|\d[A-F]{3}|\d\d[A-F]{2}|\d{3}[A-F]|\d[A-F]\d{2}|\d[A-F]{2}\d|\d[A-F]{3}|\d[A-F]\d[A-F]|\d{2}[A-F]{2}|[A-F]\d{2}[A-F])\b/gi;
var IPv6 = IP.match(regexpv6);
var IPv4 = IP.match(regexpv4);

if(IPv4){
    document.write('Это IPv4: ' + IPv4);
} else if(IPv6){
    document.write('Это IPv6: ' + IPv6.join(':'));
} else{
    document.write("IP Фигня")
}

}
