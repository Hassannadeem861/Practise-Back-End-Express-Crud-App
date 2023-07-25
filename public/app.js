
// const postContainer = document.getElementById("postContainer");
// const form = document.getElementById("form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let title = document.querySelector("#title").value;
//     let text = document.querySelector("#text").value;

//     axios.post('/api/v1/posts', {
//         title: title,
//         text: text
//     })
//     .then(function (response) {
//         console.log(response.data);
//         form.reset();
//         Swal.fire({
//             position: 'top-end',
//             icon: 'success',
//             title: 'Post successfully banaya gaya!',
//             showConfirmButton: false,
//             timer: 1500
//         });
//     })
//     .catch(function (error) {
//         console.log(error);
//         Swal.fire({
//             position: 'top-end',
//             icon: 'error',
//             title: 'Post banane mein koi galti hui!',
//             showConfirmButton: false,
//             timer: 1500
//         });
//     });
// });

// window.addEventListener("load", () => {
//     axios.get('/api/v1/posts')
//     .then(function (response) {
//         // Jawab hasil karne ka kaam yahan par karen
//         const data = response.data;
//         data.forEach((ele) => {
            
//             const post = document.createElement("div");
//                 post.classList.add("post");

//                 const title = document.createElement("div");
//                 title.classList.add("title");
//                 title.innerText = ele.title

//                 const text = document.createElement("div");
//                 text.classList.add("text");
//                 text.innerText = ele.text

//                 const btnDiv = document.createElement("div");
//                 btnDiv.classList.add("btnDiv");

//                 const deleteButton = document.createElement("button");
//                 deleteButton.classList.add("button");
//                 deleteButton.innerText = "Delete"

//                 const editButton = document.createElement("button");
//                 editButton.classList.add("button")
//                 editButton.innerText = "Edit"

//                 btnDiv.appendChild(deleteButton)
//                 btnDiv.appendChild(editButton)
//                 post.appendChild(title)
//                 post.appendChild(text)
//                 post.appendChild(btnDiv)
//                 postContainer.appendChild(post)

//                 deleteButton.addEventListener("click", () => deletePostFun(ele.id));

//                 editButton.addEventListener("click", () =>

//                     editPostFun(ele.id, ele.title, ele.text)

//                 );
//                 console.log(ele);

//                 // });

// //                 // console.log(response.data);
//         });
//     })
//     .catch(function (error) {
//         console.log(error);
//         Swal.fire({
//             position: 'top-end',
//             icon: 'error',
//             title: 'Post hasil karne mein koi galti hui!',
//             showConfirmButton: false,
//             timer: 1500
//         });
//     });
// });


// const deletePostData = (id) => {

//     axios
//         .delete(`${id}`)
//         .then(function (response) {
//             //   alert(response.data);
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'response.data',
//                 showConfirmButton: false,
//                 timer: 1500
//             })
//         })
//         .catch(function (error) {
//             console.log(error);
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Error',
//                 showConfirmButton: false,
//                 timer: 1500
//             })

//         });
// };


// const editPostFun = (id, title, text) => {

//     let editFormDiv = document.querySelector("editFormDiv");
//     editFormDiv.style.display = "block"
//     let editForm = document.querySelector("editForm");
//     let editFormTitle = document.querySelector("editFormTitle");
//     let editFormText = document.querySelector("editFormText");
//     editFormTitle.value = title
//     editFormText.value = text

//     editForm.addEventListener("submit", (event) => {

//         event.preventDefault();

//         axios
//             .put(`${id}`, {
//                 title: editFormTitle.value,
//                 text: editFormText.value,
//             })
//             .then(function (response) {
//                 // alert(response.data);
//                 Swal.fire({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: 'response.data',
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//             })
//             .catch(function (error) {
//                 console.log(error);
//                 Swal.fire({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: 'Error',
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//             });
//         editForm.reset();
//         editFormDiv.style.display = "none";

//     })
// }

// const cross = document.querySelector("#cross");
// cross.addEventListener("click", () => {
//     const editFormDiv = document.querySelector("#editFormDiv");
//     editFormDiv.style.display = "none";
// });













const postContainer = document.getElementById("postContainer");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {

    event.preventDefault()
    let title = document.querySelector("#title").value;
    let text = document.querySelector("#text").value;

    axios.post('', {

        title: title,
        text: text
    })
        .then(function (response) {
            console.log(response.data);
            form.reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'response.data',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(function (error) {
            console.log(error);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Error',
                showConfirmButton: false,
                timer: 1500
            })
        });

})

window.addEventListener("load", () => {
    axios.get('')

        .then(function (response) {

            //handle success
            const data = response.data

            data.forEach((ele) => {

                const post = document.createElement("div");
                post.classList.add("post");

                const title = document.createElement("div");
                title.classList.add("title");
                title.innerText = ele.title

                const text = document.createElement("div");
                text.classList.add("text");
                text.innerText = ele.text

                const btnDiv = document.createElement("div");
                btnDiv.classList.add("btnDiv");

                const deleteButton = document.createElement("button");
                deleteButton.classList.add("button");
                deleteButton.innerText = "Delete"

                const editButton = document.createElement("button");
                editButton.classList.add("button")
                editButton.innerText = "Edit"

                btnDiv.appendChild(deleteButton)
                btnDiv.appendChild(editButton)
                post.appendChild(title)
                post.appendChild(text)
                post.appendChild(btnDiv)
                postContainer.appendChild(post)

                deleteButton.addEventListener("click", () => deletePostFun(ele.id));

                editButton.addEventListener("click", () =>

                    editPostFun(ele.id, ele.title, ele.text)

                );
                console.log(ele);

                // });

                // console.log(response.data);
            })
        })
        .catch(function (error) {
            console.log(error);
        });
});


const deletePostData = (id) => {

    axios
        .delete(`${id}`)
        .then(function (response) {
            //   alert(response.data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'response.data',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(function (error) {
            console.log(error);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Error',
                showConfirmButton: false,
                timer: 1500
            })

        });
};


const editPostFun = (id, title, text) => {

    let editFormDiv = document.querySelector("editFormDiv");
    editFormDiv.style.display = "block"
    let editForm = document.querySelector("editForm");
    let editFormTitle = document.querySelector("editFormTitle");
    let editFormText = document.querySelector("editFormText");
    editFormTitle.value = title
    editFormText.value = text

    editForm.addEventListener("submit", (event) => {

        event.preventDefault();

        axios
            .put(`${id}`, {
                title: editFormTitle.value,
                text: editFormText.value,
            })
            .then(function (response) {
                // alert(response.data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'response.data',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Error',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
        editForm.reset();
        editFormDiv.style.display = "none";

    })
}

const cross = document.querySelector("#cross");
cross.addEventListener("click", () => {
    const editFormDiv = document.querySelector("#editFormDiv");
    editFormDiv.style.display = "none";
});


















































































// window.createPost = function () {

//     let postTitle = document.querySelector("#postTitle").value
//     let postText = document.querySelector("#postText").value

// }
//  // baseUrl/api/v1/post
//  axios.post(`/api/v1/post`, {
//     title: postTitle,
//     text: postText
// })
//     .then(function (response) {
//         console.log(response.data);
//         document.querySelector("#result").innerHTML = response.data;
//         getAllPost();
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error.data);
//         document.querySelector("#result").innerHTML = "error in post submission"
//     })

//     window.getAllPost = function () {


//         // baseUrl/api/v1/post
//         axios.get(`/api/v1/posts`)
//             .then(function (response) {
//                 console.log(response.data);

//                 document.querySelector("#posts").innerHTML = JSON.stringify(response.data);
//             })
//             .catch(function (error) {
//                 // handle error
//                 console.log(error.data);
//                 document.querySelector("#result").innerHTML = "error in post submission"
//             })
//     }




///CHATGPT CODE
//Zaruri nahi hai ke code mein problem hai, lekin mujhe aapko batadu ke kuch masla hai. Yeh code sahi kar ke neeche diya gaya hai:
//Ab aap createPost() function ko call karenge, toh yeh title aur text ko POST request ke zariye bhejega jo postTitle aur postText variables se liye gaye hain. getAllPost() function POST request ke .then() block ke andar call hota hai, jisse ek naya post banane ke baad sabhi posts ko wapas se retrieve karega.

// window.createPost = function () {
//     let postTitle = document.querySelector("#postTitle").value;
//     let postText = document.querySelector("#postText").value;

//     // baseUrl/api/v1/post
//     axios.post(`/api/v1/post`, {
//         title: postTitle,
//         text: postText
//     })
//     .then(function (response) {
//         console.log(response.data);
//         document.querySelector("#result").innerHTML = response.data;
//         getAllPost();
//     })
//     .catch(function (error) {
//         // masla handle karein
//         console.log(error.data);
//         document.querySelector("#result").innerHTML = "post submit karne mein masla hai";
//     });
// };

// window.getAllPost = function () {
//     // baseUrl/api/v1/posts
//     axios.get(`/api/v1/posts`)
//     .then(function (response) {
//         console.log(response.data);
//         document.querySelector("#posts").innerHTML = JSON.stringify(response.data);
//     })
//     .catch(function (error) {
//         // masla handle karein
//         console.log(error.data);
//         document.querySelector("#result").innerHTML = "post submit karne mein masla hai";
//     });
// };

