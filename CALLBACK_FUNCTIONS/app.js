const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];

// // Sync way
// function createPost(post) {
//     setTimeout(function () {
//         posts.push(post);
//     }, 2000);
// }
//
// function getPosts() {
//     setTimeout(function () {
//         let output = ``;
//         posts.forEach(function (post){
//             output += `<li>${post.title}`;
//         });
//         document.body.innerHTML = output;
//     })
// }
//
// createPost({title: 'Post three', body: 'This is post three'});
// getPosts();

// Async with callbacks
function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Something went wrong!');
            }
        }, 2000);
    });

}

function getPosts() {
    setTimeout(function () {
        let output = ``;
        posts.forEach(function (post) {
            output += `<li>${post.title}`;
        });
        document.body.innerHTML = output;
    })
}

createPost({title: 'Post three', body: 'This is post three'})
    .then(getPosts)
    .catch(function (error) {
        console.log(error)
    });