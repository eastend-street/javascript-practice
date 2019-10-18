const map = new Map();
map
  .set("key1", "student1")
  .set(2, 40)
  .set("isHere", true);
console.log("map", map);

console.log(map.get(2));
console.log(map.has("isHere"));
console.log(map.size);

const map2 = new Map([
  ["Canada", "Toronto"],
  ["Japan", "Tokyo"],
  ["England", "London"]
]);

for(let country of map2.keys()){
  console.log("country", country);
}

for(let city of map2.values()){
  console.log("city", city);
}

for (let item of map2){
  console.log(item);
}