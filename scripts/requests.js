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

//    Fetch API

const fetchBtn = document.querySelector('.apiBtn');
const apiUrl = 'https://dog.ceo/api/breeds/image/random';
const dataSet = document.querySelector('.apiData');
let apiImg = document.createElement('img');

function getData() {
 
    fetch(apiUrl).
      then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Data not found');
          }
          else if (response.status === 500) {
            throw new Error('Server Error');
          } else {
            throw new Error('Network response was not ok')
          }
        }
        return response.json();
      })
      .then(data => {
        let jsonData = new Object(data);
        apiImg.setAttribute('src', jsonData.message);
        apiImg.setAttribute('width', '100%');
        dataSet.appendChild(apiImg);
      })
      .catch(error => {
        console.error('Error: ', error);
      });
      
  fetchBtn.textContent = 'Change pictures';
}
fetchBtn.addEventListener('click', getData);