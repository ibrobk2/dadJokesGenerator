// document.querySelector('.btn').addEventListener('click', function(){
//     // e.preventDefault();
//     // quote.getData();
//     alert("Hello");
//   });



 var btnEl = document.getElementById('btn');
    let myHeaders = new Headers({
        "X-Api-Key": "iV2PkfpXLxJ/VZJ0l3hbQA==1Ael2tp2y82hu6mY"
      });
      
      const apikey = myHeaders.get('X-Api-Key');
      
    var quote = {
        async getData() {
          try {
            const response = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", {
              headers: {
                "X-Api-Key": apikey
              }
            });
            const data = await response.json();
            // console.log(data);
         
            document.getElementById('joke').innerText = data[0].joke;
            // document.getElementById('joke').innerText = "You Guy";
           
          } catch (error) {
            console.log("Sorry there is an Error " + error);
          }
        }
      };
// function displayData(){
//     quote.getData()
// }
//       btnEl.addEventListener('click', displayData);
  
  
  