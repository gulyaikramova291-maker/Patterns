const Document = require("./Document");
const DocumentFactory = require("./DocumentFactory");

const original = new Document(
  1,
  "my first document",
  "hello world",
  "Guli",
  ["JavaScript", "Prototype"]
);  


const factory = new DocumentFactory(original);


const copy1 = factory.cloneDocument();
const copy2 = factory.cloneDocument();


copy1.id = 2;
copy1.title = "Document One";
copy1.content = "This is first copy";
copy1.tags.push("React");


copy2.id = 3;
copy2.title = "Document Two";
copy2.content = "This is second copy";
copy2.tags.push("Node.js");


console.log("ORIGINAL DOCUMENT:");
console.log(original);

console.log("FIRST COPY:");
console.log(copy1);

console.log("SECOND COPY:");
console.log(copy2);

console.log("Are tags arrays the same?");
console.log(original.tags === copy1.tags);
console.log(original.tags === copy2.tags);
