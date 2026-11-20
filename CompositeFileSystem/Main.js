const File = require("./File");
const Folder = require("./Folder");

const computer = new Folder("Computer");
const documents = new Folder("Documents");
const photos = new Folder("Photos");

const resume = new File("resume.pdf");
const homework = new File("homework.docx");

const photo1 = new File("photo1.jpg");
const photo2 = new File("photo2.jpg");

documents.add(resume);
documents.add(homework);

photos.add(photo1);
photos.add(photo2);

const music = new File("music.mp3");

computer.add(documents);
computer.add(photos);
computer.add(music);

console.log("Computer File System:");
computer.show();
