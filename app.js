window.onload = () => {
    var searchbttn = document.getElementById("search");
    var httpRequest;

    searchbttn.addEventListener('click', (e)=>{
        e.preventDefault();

        httpRequest=new XMLHttpRequest();
        
        var input = document.getElementById("txt").value;
        var url = "superheroes.php" + "?query=" + input;
        httpRequest.onreadystatechange = loadSuperhero;
        httpRequest.open('GET', url);
        httpRequest.send();

    });//end button action listener
    
    var loadSuperhero = function (){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                var response = httpRequest.responseText;
                var result = document.getElementById("result");
                result.setAttribute("id","result");
                result.innerHTML=response;
            }else{
                alert('There was a problem with the request.');
            }
        }
    }
};