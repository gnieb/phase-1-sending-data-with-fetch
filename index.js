
const userData = {
    name: "Steve",
    email: "steve@steve.com",
}
const configObject = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
    body: JSON.stringify(userData)
}
function submitData () {
   return fetch(`"http://localhost:3000/users${id}`, configObject)
    .then(resp => resp.json())
    .then (data =>  {
       const newId = data.id;
       const li = document.createElement('li');
       const body = document.querySelector('body');
        li.textContent = newId
        body.appendChild(li)
    })
    .catch( (error) => {
        const errorMessage = error.message;
        const li = document.createElement('li');
        const body = document.querySelector('body');
        li.textContent = errorMessage
        body.appendChild(li)
      });
}


