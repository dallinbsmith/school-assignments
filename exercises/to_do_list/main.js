function axiosStuff() {
    axios.get("https://api.vschool.io/dallin/todo").then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                document.getElementById("todoh1").innerHTML += "<h2>" + response.data[i].title + "</h2>"
            };
        }

    )
};


axiosStuff();


function newToDo() {
    let inputboxvar = (document.getElementById("newtodobox").value);
    let inputboxvar1 = (document.getElementById("newtododescription").value);
    const newThing = {
        title: inputboxvar,
        description: inputboxvar1
    };
    axios.post("https://api.vschool.io/dallin/todo", newThing).then(function (response) {
        console.log(response);

    })
};
