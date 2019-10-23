// 1. GET
fetch("https://api.github.com/repos/eastend-street/codeal/issues")
  .then(res => {
    return res.json();
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));

// 2. POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "10 ways to make your life successful",
    body: "Step1: bla bla bla. Step2: bla bla bla.",
    userId: 90
  })
})
  .then(res => {
    return res.json();
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));

// 3. PUT
fetch("https://jsonplaceholder.typicode.com/posts/8", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(res => {
    return res.json();
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
