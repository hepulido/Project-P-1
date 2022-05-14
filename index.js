document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()
  });

  async function fetchData() {
   const resp = await fetch('https://dog.ceo/api/breeds/list/all')
   const data = await resp.json()
   .catch (error => {
    alert("Error,Connection failed! Please try again!");
    console.log(error.message);
    document.body.append(error.message)
  });
  createElement(data.message)
  }
  
  fetchData()
  
   function createElement(dogsList) {
    document.getElementById("container").innerHTML = `
    <select onchange= contentLoad(this.value) class="select">
    <option>Select breed</option>
    ${Object.keys(dogsList).map(function (dogs){
     return `<option>${dogs}</option>`
    }).join('')}
        </select>
  `
 }
   
  async function contentLoad(dogs){
  const resp = await fetch(`https://dog.ceo/api/breed/${dogs}/images`)
  const data = await resp.json()
  createImage(data.message)
  }
   

  function createImage(image){
    
    document.getElementById("picture").innerHTML = `
  <div onclick="changeColor()"class="picture" style ="background-image: url('${image[0]}')"></div>
   <div class="likes">If you think I'm cute, Click my image! <span >&#x2661;</span></div>
  
    `
  }

  function changeColor(){
    document.getElementById("picture").style.color = "red";
    setTimeout(function(){
      location = ''
    },3000)
  }

  


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



