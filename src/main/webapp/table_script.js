// function edit_row(no) {
//     document.getElementById("edit_button" + no).style.display = "none";
//     document.getElementById("save_button" + no).style.display = "block";
//
//     var title = document.getElementById("title_row" + no);
//     var genre = document.getElementById("genre_row" + no);
//     var rating = document.getElementById("rating_row" + no);
//
//     var title_data = name.innerHTML;
//     var genre_data = country.innerHTML;
//     var rating_data = age.innerHTML;
//
//     name.innerHTML = "<input type='text' id='title_text" + no + "' value='" + name_data + "'>";
//     country.innerHTML = "<input type='text' id='genre_text" + no + "' value='" + genre_data + "'>";
//     age.innerHTML = "<input type='text' id='rating_text" + no + "' value='" + rating_data + "'>";
// }
//
// function save_row(no) {
//     var title_val = document.getElementById("title_text" + no).value;
//     var genre_val = document.getElementById("genre_text" + no).value;
//     var rating_val = document.getElementById("rating_text" + no).value;
//
//     document.getElementById("title_row" + no).innerHTML = title_val;
//     document.getElementById("genre_row" + no).innerHTML = genre_val;
//     document.getElementById("rating_row" + no).innerHTML = rating_val;
//
//     document.getElementById("edit_button" + no).style.display = "block";
//     document.getElementById("save_button" + no).style.display = "none";
// }

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var title = document.getElementById("title").value;
    var genre = document.getElementById("genre").value;
    var rating = document.getElementById("rating").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='title_row" + table_len + "'>" + title + "</td><td id='genre_row" + table_len + "'>" + genre + "</td><td id='rating_row" + table_len + "'>" + rating + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("title").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("rating").value = "";
}

function getHttp(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false ); // false for synchronous request
  xmlHttp.send( null );
  //document.getElementById("output").innerHTML =  xmlHttp.responseText;
  console.log(xmlHttp.responseText);
  console.log("getting http");

  return xmlHttp.responseText;

}

function listAllMovies() {
console.log("listing movies")
 populateTable(getHttp('http://localhost:8081/Movie/api/movie/getAllMovies'));

}

function populateTable(jsonT) {
  console.log("1");
  //var jsonTest = [{"id":1,"title":"Movie1","genre":"genre1","rating":"1234"},{"id":2,"title":"Movie2","genre":"genre2","rating":"1235"},{"id":3,"title":"Movie3","genre":"genre3","rating":"1236"}];
  var jsonTest = jsonT;
  console.log("2");
  //var myObj;
  console.log(jsonTest);
  // myObj = JSON.parse(jsonTest[0]);
  //console.log(myObj);
  //console.log(myObj);
  var table = document.getElementById("data_table");
  for (x in jsonTest) {
    var title = jsonTest[x].title;
    var genre = jsonTest[x].genre;
    var rating = jsonTest[x].rating;
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='title_row" + table_len + "'>" + title + "</td><td id='genre_row" + table_len + "'>" + genre + "</td><td id='rating_row" + table_len + "'>" + rating + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

  }
}
