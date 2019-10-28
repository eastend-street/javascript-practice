async function asyncGetQuote() {
  try {
    const quote = await getQuote();
    console.log(quote);
  } catch (err) {
    console.log(err);
  }
}

const age = 30;
let older;

age < 20 ? (older = false) : (older = true);

const greeting = (firstName, lastName) => {
  return `Hi, ${firstName} ${lastName}`;
};

