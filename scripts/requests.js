const btn = document.querySelector('.xmlBtn');
function loadCarsList() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "../data/Cars-list.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var xmlDoc = xml.responseXML;
  var table = "<tr><th>Cars</th><th>Year</th><th>Country</th></tr>";
  var x = xmlDoc.getElementsByTagName("Cars");
  console.log(x);
  for (let i = 0; i < x.length; i++) {
    table += "<tr><td>" +
      x[i].getElementsByTagName("Car")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Year")[0].childNodes[0].nodeValue +
      "</td><td>" + x[i].getElementsByTagName("Country")[0].childNodes[0].nodeValue + "</td><tr>"
  }
  document.querySelector('.xml-request-table').innerHTML = table;
}

btn.addEventListener('click', loadCarsList);

//   jQuery & Ajax
$(document).ready(function () {
  $(".ajaxBtn").click(function () {
    $(".ajax-request-text").load("../data/data.txt").css('border', '#000 solid 1px');
  });
});