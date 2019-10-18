const handleClick = () => {
  console.log("Clicked!");
};

const handleFormClick = e => {
  e.preventDefault();

  const target = e.target;
  console.log(target);
  console.log("Clicked!");
};
