const apiKey = "e826d054-2a7d-4dd9-92bb-283ae83ceef5";

function displayComments(){
axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)

.then((result) => {
  let arrComments = result.data;
  console.log(arrComments);

  let commentsDisplay = document.querySelector(".comments__display");
  commentsDisplay.innerHTML = "";

    arrComments.sort(function(x, y){
    return y.timestamp - x.timestamp;
})

  arrComments.forEach((element) => {
    const formattedDate = new Date(element.timestamp).toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });

    let itemEl = document.createElement("div");
    itemEl.classList.add("item");

    let itemImgContainerEl = document.createElement("div");
    itemImgContainerEl.classList.add("item__image-container");
    itemEl.appendChild(itemImgContainerEl);

    let itemTextEl = document.createElement("div");
    itemTextEl.classList.add("item__text");
    itemEl.appendChild(itemTextEl);

    let itemHeaderEl = document.createElement("div");
    itemHeaderEl.classList.add("item__header");
    itemTextEl.appendChild(itemHeaderEl);

    let itemNameEl = document.createElement("div");
    itemNameEl.classList.add("item__name");
    itemNameEl.innerText = element.name;
    itemHeaderEl.appendChild(itemNameEl);

    let itemDateEl = document.createElement("div");
    itemDateEl.classList.add("item__date");
    itemDateEl.innerText = formattedDate;
    itemHeaderEl.appendChild(itemDateEl);

    let itemBodyEl = document.createElement("div");
    itemBodyEl.classList.add("item__body");
    itemBodyEl.innerText = element.comment;
    itemTextEl.appendChild(itemBodyEl);

    commentsDisplay.appendChild(itemEl);
  });
})
.catch((error) => {
  console.error(error);
})
}

displayComments();

const form = document.querySelector(".form-inputs");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  commentObj = {
    name: e.target.name.value,
    comment: e.target.comment.value,
  };
  e.target.name.value = "";
  e.target.comment.value = "";

  const headers = {
    'Content-Type': 'application/json'
  }

  axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`,commentObj, {
    headers: headers
  })
  .then((result) => {
    console.log(result);
    displayComments();
  })
  .catch((error) => {
    console.error(error);
  })
});

