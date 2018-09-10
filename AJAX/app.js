document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create XHR Object
    const xhr = new XMLHttpRequest();
    // Open
    xhr.open('GET', 'data.txt', true);
    // Optional - User for spinners/loaders
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState);
    };

    xhr.onload = function () {
        if (this.status === 200) {
           document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }

        /*  readyState values

        0: request not initialized
        1: server connection established
        2: request received
        3: processing request
        4: request finished and response is ready

         */
    };
    xhr.onerror = function () {
        console.log('Request error.');
    }
    xhr.send();
}

// xhr.onreadystatechange = function () {
//     console.log('READYSTATE', xhr.readyState);
//     if (this.status === 200 && this.readyState === 4) {
//         console.log(this.responseText);
//     }
// };
