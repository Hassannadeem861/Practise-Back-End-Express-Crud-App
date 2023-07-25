
const postContainer = document.getElementById("postContainer");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {

    event.preventDefault()
    let title = document.querySelector("#title").value;
    let text = document.querySelector("#text").value;

    axios.post('api/v1/post', {

       // https://fantastic-bee-tweed-jacket.cyclic.app/api/v1/post

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

        document.querySelector("#formContainer").style.display = "none";
        createPostBtn.style.display = "block";
    })


window.addEventListener("load", () => {
    axios.get('api/v1/posts')

    //https://fantastic-bee-tweed-jacket.cyclic.app/api/v1/posts

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
        .delete(`api/v1/post/${id}`)
        //https://fantastic-bee-tweed-jacket.cyclic.app/api/v1/post
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

    let editFormDiv = document.querySelector("#editFormDiv");
    editFormDiv.style.display = "block"
    let editForm = document.querySelector("#editForm");
    let editFormTitle = document.querySelector("#editFormTitle");
    let editFormText = document.querySelector("#editFormText");
    editFormTitle.value = title
    editFormText.value = text

    const editFormFun = (event) => {

        event.preventDefault();

        axios
            .put(`api/v1/post/${id}`, {

                //https://fantastic-bee-tweed-jacket.cyclic.app/api/v1/post

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

        editForm.removeEventListener("submit", editFormFunc);
    };
  
    editForm.addEventListener("submit", editFormFunc);
  };

   
const cross = document.querySelector("#cross");
cross.addEventListener("click", () => {
    const editFormDiv = document.querySelector("#editFormDiv");
    editFormDiv.style.display = "none";
});

const createPostBtn = document.querySelector("#createPostBtn");
createPostBtn.addEventListener("click", () => {
  document.querySelector("#formContainer").style.display = "block";
  createPostBtn.style.display = "none";
});









//Chatgpt code

// const postContainer = document.getElementById("postContainer");
// const form = document.getElementById("form");

// form.addEventListener("submit", (event) => {

//     event.preventDefault();
//     let title = document.querySelector("#title").value;
//     let text = document.querySelector("#text").value;

//     // Ek POST request bhejte hain axios ke through
//     axios.post('api/v1/post', {

//        // Yahan pe post data title aur text ke saath bhejte hain
//         title: title,
//         text: text
//     })
//         .then(function (response) {
//             console.log(response.data);
//             // Form ko reset karke, success message dikhate hain
//             form.reset();
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'response.data',
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         })
//         .catch(function (error) {
//             console.log(error);
//             // Agar koi error aaye toh error message dikhate hain
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Error',
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         });

//     // Form submit ke baad form ko hide karke, ek "Create Post" button show karte hain
//     document.querySelector("#formContainer").style.display = "none";
//     createPostBtn.style.display = "block";
// });


// // Window load hone par, axios ke zariye GET request bhejte hain
// window.addEventListener("load", () => {
//     axios.get('api/v1/posts')

//     // Yahan pe server se sabhi posts ko retrieve karke dikhate hain
//     .then(function (response) {
//         const data = response.data;

//         data.forEach((ele) => {
//             // Har ek post ko alag div mein display karte hain
//             const post = document.createElement("div");
//             post.classList.add("post");

//             const title = document.createElement("div");
//             title.classList.add("title");
//             title.innerText = ele.title;

//             const text = document.createElement("div");
//             text.classList.add("text");
//             text.innerText = ele.text;

//             const btnDiv = document.createElement("div");
//             btnDiv.classList.add("btnDiv");

//             // Delete aur Edit buttons ko har post ke sath attach karte hain
//             const deleteButton = document.createElement("button");
//             deleteButton.classList.add("button");
//             deleteButton.innerText = "Delete";

//             const editButton = document.createElement("button");
//             editButton.classList.add("button");
//             editButton.innerText = "Edit";

//             btnDiv.appendChild(deleteButton);
//             btnDiv.appendChild(editButton);
//             post.appendChild(title);
//             post.appendChild(text);
//             post.appendChild(btnDiv);
//             postContainer.appendChild(post);

//             // Delete aur Edit buttons ke listeners ko assign karte hain
//             deleteButton.addEventListener("click", () => deletePostFun(ele.id));
//             editButton.addEventListener("click", () => editPostFun(ele.id, ele.title, ele.text));

//             console.log(ele);
//         })
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// });


// const deletePostData = (id) => {

//     // DELETE request bhejte hain axios ke through
//     axios.delete(`api/v1/post/${id}`)
//         .then(function (response) {
//             // Delete success hone par success message dikhate hain
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'response.data',
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         })
//         .catch(function (error) {
//             console.log(error);
//             // Delete mein error aaye toh error message dikhate hain
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Error',
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         });
// };


// const editPostFun = (id, title, text) => {

//     // Post ko edit karne ke liye editFormDiv ko display karte hain
//     let editFormDiv = document.querySelector("#editFormDiv");
//     editFormDiv.style.display = "block";

//     let editForm = document.querySelector("#editForm");
//     let editFormTitle = document.querySelector("#editFormTitle");
//     let editFormText = document.querySelector("#editFormText");

//     // EditForm mein post ke title aur text ko set karte hain
//     editFormTitle.value = title;
//     editFormText.value = text;

//     const editFormFunc = (event) => {

//         event.preventDefault();

//         // Edit ke liye PUT request bhejte hain axios ke through
//         axios.put(`api/v1/post/${id}`, {
//             title: editFormTitle.value,
//             text: editFormText.value,
//         })
//         .then(function (response) {
//             // Edit success hone par success message dikhate hain
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'response.data',
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         })
//         .catch(function (error) {
//             console.log(error);
//             // Edit mein error aaye toh error message dikhate hain
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Error',
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         });

//         // Form submit hone ke baad form reset karte hain aur editFormDiv ko hide karte hain
//         editForm.reset();
//         editFormDiv.style.display = "none";

//         // Listener ko remove karte hain, taaki dobara submit na ho
//         editForm.removeEventListener("submit", editFormFunc);
//     };
  
//     // EditForm ke submit event pe listener ko add karte hain
//     editForm.addEventListener("submit", editFormFunc);
// };

// // Cross button pe click hone par editFormDiv ko hide karte hain
// const cross = document.querySelector("#cross");
// cross.addEventListener("click", () => {
//     const editFormDiv = document.querySelector("#editFormDiv");
//     editFormDiv.style.display = "none";
// });

// // Create Post button pe click hone par formContainer ko display karte hain aur createPostBtn ko hide karte hain
// const createPostBtn = document.querySelector("#createPostBtn");
// createPostBtn.addEventListener("click", () => {
//   document.querySelector("#formContainer").style.display = "block";
//   createPostBtn.style.display = "none";
// });

























