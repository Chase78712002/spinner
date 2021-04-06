const animation = ['\r|  ', '\r/  ', '\r-  ', '\r\\  '];
let time = 0;
let loop = 0;
while(loop <= 3) {
  for (const symbol of animation) {
    setTimeout(() => {
      process.stdout.write(symbol);
    }, time += 200);
  }
  loop ++;
};
setTimeout(() => {console.log();}, time);

