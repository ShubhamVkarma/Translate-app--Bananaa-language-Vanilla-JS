
var btntranslate = document.querySelector("#btntranslate");
var inputtext = document.querySelector("#textarea1")
var outputtext = document.querySelector("#output")
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function translate() {
    var api = url + "?" +"text="+ inputtext.value;
    fetch(api).then(response=>response.json()).then(json=> console.log(json));

    fetch(api).then(response=>response.json()).then(json=> outputtext.innerHTML= json.contents.translated );
}

btntranslate.addEventListener("click", translate)