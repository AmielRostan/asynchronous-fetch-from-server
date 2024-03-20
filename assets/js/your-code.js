export function getAllDogs() {
    // Your code here
    return fetch('/dogs', {
        method: "GET"
    });
}

export function getDogNumberTwo() {
    // Your code here
    return fetch('/dogs/2', {
        method: "GET"
    });
}

export function postNewDog() {
    // Your code here
    return fetch('/dogs', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams([
            ["name", "Wavy"],
            ["age", 12]
        ])
    });
}

export function postNewDogV2(name, age) {
     // Your code here
     return fetch('/dogs', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams([
            ["name", name],
            ["age", age]
        ])
     });
}

export function deleteDog(id) {
      // Your code here
      return fetch(`/dogs/${id}`, {
        method: "DELETE",
        headers: {
            "AUTH": "ckyut5wau0000jyv5bsrud90y",
            // 'Content-Type': 'application/json'
        },
      }).then(response => {
        if(response){
            window.location.href = '/';
        } else {
            // Si la solicitud falla, lanzar un error
            throw new Error('Failed to delete dog');
        }
      })
      .catch(error => {
        // Manejar errores de red u otros errores
        console.error('Error:', error);
      });
}
