
var btntranslate = document.querySelector("#btntranslate");
var inputtext = document.querySelector("#textarea1")
var outputtext = document.querySelector("#output")
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function errorhandler(error) {
    alert("An error occured with server")
    console.log("error occured:"+error)
}

function translate() {
  
    var api = url + "?" +"text="+ inputtext.value;

    //This is API call 
    // fetch(api).then(response=>response.json()).then(json=> console.log(json)); 
    
    fetch(api).
    then(response=>response.json()).
    then(json=> {
        var translatedtext = json.contents.translated;
        outputtext.innerText= translatedtext }).
    catch(errorhandler)
}

btntranslate.addEventListener("click", translate)