fetch("https://api.github.com/repos/eastend-street/portfolio/issues")
  .then(res => {
    return res.json();
  })
  .then(result => {
    createCards(result);
  })
  .catch(err => console.log(err));

const createCards = issues => {
  for (let i = 0; i < issues.length; i++) {
    createCard(issues[i]);
  }
};

const createCard = issue => {
  const card = document.createElement("div");
  card.className = "card w-50 mt-2";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = issue.title;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = issue.state;
  cardBody.appendChild(cardText);

  document.getElementById("container").appendChild(card);
};