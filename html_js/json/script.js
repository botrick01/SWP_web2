let data = [
    {firstname: "John", lastname: "Doe", points: 50},
    {firstname: "Paul", lastname: "Müller", points: 60},
    {firstname: "Max", lastname: "Mustermann", points: 70},
];

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(element.firstname);
}

function loadPeople() {
    let html = "";
    data.forEach(element => {
        html += "<div>" + element.firstname + " " + element.lastname + "</div>";
    });

    document.getElementById("content").innerHTML = html;
}
loadPeople();