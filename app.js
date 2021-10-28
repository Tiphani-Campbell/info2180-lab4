window.onload = () => {
    var searchbttn = document.getElementById("search");
    var httpRequest;

    searchbttn.addEventListener('click', (e)=>{
        e.preventDefault();

        httpRequest=new XMLHttpRequest();
        
        var url = "superheroes.php";
        httpRequest.onreadystatechange = loadSuperhero;
        httpRequest.open('GET', url);
        httpRequest.send();

    });//end button action listener
    
    var loadSuperhero = function (){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                var response = httpRequest.responseText;
                alert(response);
            }else{
                alert('There was a problem with the request.');
            }
        }
    }
};