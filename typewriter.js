
const sentence = "hello there from lighthouse labs \n";


let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer) // <= 1s delay to make it noticeable. Can dial it down later.
  timer += 50;
}


// const words = sentence.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     setTimeout(function(){
//       console.log(words[i]);
//   }, (i + 1) * 1000)
//   }  