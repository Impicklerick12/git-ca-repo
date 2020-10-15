// import { USER_TOKEN } from "./key";

// const URL = "http://api.football-data.org/v2/matches?status='LIVE'"

// axios
//     .get(URL)
//     .then()
//     .catch(error => console.log(error))
document.querySelector('button').addEventListener('click', getFootballData)

function getFootballData() {
    console.log("Starting request");

    $.ajax({
        headers: { 'X-Auth-Token': "4599dca9f5264dd5bf06692787db4627" },
        url: "https://api.football-data.org/v2/competitions/",
        dataType: 'json',
        type: 'GET',
        }).done(function(response) {
        // do something with the response, e.g. isolate the id of a linked resource   
        console.log(response);
        });
}