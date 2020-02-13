document.querySelector('#generate-names').addEventListener('click', loadNames);


//
function loadNames(e) {
    e.preventDefault();


    //read value fro the form and read values
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;
    //generate url
    let url = 'https://uinames.com/api/?';
    //read the origin and append to the url
    if (origin !== '') {
        url += `region=${origin}&`;
    }

    if (genre !== '') {
        url += `gender=${genre}&`;
    }
    console.log(url);
    if (amount !== '') {
        url += `amount=${amount}&`;
    }
    //the next step is using ajax 
    //ajax call
    const xhr = new XMLHttpRequest();
    //open connection
    xhr.open('GET', url, true);
    //execute connection
    xhr.onload = function() {
            if (this.status === 200) {
                const names = JSON.parse(this.responseText);
                var html = "<h2>GENERATED NAMES</h2>";
                html += '<ul class="list">';
                names.forEach(function(name) {
                    html += `<li>${name.name}</li>`;
                })

                html += '</ul>';

            }
            document.querySelector('#result').innerHTML = html;
        }
        //send request
    xhr.send();
}