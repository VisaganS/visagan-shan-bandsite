const apiKey = "f58c786c-9bdb-45c7-b12d-b6d2098aafd1";

axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
.then((result) => {
console.log(result.data);
});
arrComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    image: {
      url: "",
      alt: "",
    },
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work " +
      "deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    image: {
      url: "",
      alt: "",
    },
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection." +
      " If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    image: {
      url: "",
      alt: "",
    },
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps." +
      " Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function displayComments() {
  let commentsDisplay = document.querySelector(".comments__display");
  commentsDisplay.innerHTML = "";

  arrComments.forEach((element) => {
    let itemEl = document.createElement("div");
    itemEl.classList.add("item");

    let itemImgContainerEl = document.createElement("div");
    itemImgContainerEl.classList.add("item__image-container");
    itemEl.appendChild(itemImgContainerEl);

    if (element.image.url) {
      let itemImageEl = document.createElement("img");
      itemImageEl.setAttribute("src", element.image.url);
      itemImageEl.alt = element.image.alt;
      itemImageEl.classList.add("item__image");
      itemImgContainerEl.appendChild(itemImageEl);
    }

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
    itemDateEl.innerText = element.date;
    itemHeaderEl.appendChild(itemDateEl);

    let itemBodyEl = document.createElement("div");
    itemBodyEl.classList.add("item__body");
    itemBodyEl.innerText = element.comment;
    itemTextEl.appendChild(itemBodyEl);

    commentsDisplay.appendChild(itemEl);
  });
}

displayComments();

const form = document.querySelector(".form-inputs");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  commentObj = {
    name: e.target.name.value,
    date: new Date().toLocaleDateString(),
    comment: e.target.comment.value,
    image: {
      url: "../assets/Images/Mohan-muruge.jpg",
      alt: "profile-pic",
    }
  };
  e.target.name.value = "";
  e.target.comment.value = "";
  arrComments.unshift(commentObj);
  displayComments();
});

