let mainDiv = document.getElementsByClassName("main")[0];
let mainP = document.getElementsByClassName("myp")[0]




async function motor(name) 
{
  let response = await fetch(`http://localhost:3000/data`);
  let data = await response.json()
  return data;
}

motor().then(data => {
    
   data.map(no=>{
        let text = document.createTextNode(no.name)
        mainDiv.appendChild(text)
        
        console.log(no.name)
    })
    //let student = JSON.parse(data);
    console.log(data[0].name)
    }); 

//mainP.innerHTML = "data"