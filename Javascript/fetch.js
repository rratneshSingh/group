function getFetch(url) {
    return new Promise(function(resolve, reject){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(xhttp.responseText);
                } else {
                    reject('Error');
                }
            } else {
                reject('Error');
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    })
}

getFetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    console.log(response);
}).catch(function(er){
    console.log('Something went wrong');
})