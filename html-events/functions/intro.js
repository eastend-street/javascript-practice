const handleClick = () => {
  console.log("Clicked!");
};

const handleFormClick = e => {
  e.preventDefault();

  const target = e.target;
  // console.log(target);

  const tagName = e.target;
  // console.log(tagName.tagName);

  const inputValue = document.getElementById("nameInput").value;
  console.log(inputValue);

  let newLine = document.createElement("li");
  newLine.textContent = inputValue;

  let list = document.getElementById("nameList");
  list.appendChild(newLine);
};

const handleInputChange = () => {
  console.log("Changed");
};

const handleInputFocus = () => {
  console.log("Focused");
}
const handleInputBlur = () => {
  console.log("Blurred");
}

const handleOnMouseOver= () => {
  console.log("Mouse overed");
}

const handleOnMouseOut= () => {
  console.log("Mouse out");
}