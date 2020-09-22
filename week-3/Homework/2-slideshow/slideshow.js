// Write your code here
let slidexBox = document.getElementById("slidexBox");
let btn_back = document.getElementById("back");
let btn_forward = document.getElementById("forward");
let div_1 = document.getElementById("img_1");
let div_2 = document.getElementById("img_2");
let div_3 = document.getElementById("img_3");
let speed = 6;
let pxInt = 10;
let margin = -500;
let url_1 = 'url("img/1.jpg")';
let url_2 = 'url("img/2.jpg")';
let url_3 = 'url("img/3.jpg")';
let urls = [url_1, url_2, url_3];

let backFnt = () => {
  let moving = setInterval(() => {
    if (margin < 0) {
      margin += pxInt;
      let mrgPx = `${margin}px`;
      slidexBox.style.marginLeft = mrgPx;
    } else {
      urls.unshift(urls[2]);
      urls.pop();

      div_1.style.backgroundImage = urls[0];
      div_2.style.backgroundImage = urls[1];
      div_3.style.backgroundImage = urls[2];
      clearInterval(moving);
      margin = -500;
      let mrgPx = `${margin}px`;
      slidexBox.style.marginLeft = mrgPx;
      state = false;
    }
  }, speed);
};

let forwardFnt = () => {
  let moving = setInterval(() => {
    if (margin > -1000) {
      margin -= pxInt;
      let mrgPx = `${margin}px`;
      slidexBox.style.marginLeft = mrgPx;
    } else {
      urls.push(urls[0]);
      urls.shift();

      div_1.style.backgroundImage = urls[0];
      div_2.style.backgroundImage = urls[1];
      div_3.style.backgroundImage = urls[2];
      clearInterval(moving);
      margin = -500;
      let mrgPx = `${margin}px`;
      slidexBox.style.marginLeft = mrgPx;
      state = false;
    }
  }, speed);
};

document.getElementById("back").addEventListener("click", () => {
  backFnt();
});

document.getElementById("forward").addEventListener("click", () => {
  forwardFnt();
});

document.getElementById("autoBack").addEventListener("click", () => {
  backFnt();
  let moving = setInterval(() => {
    backFnt();
  }, 3000);
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(moving);
  });
});

document.getElementById("autoForward").addEventListener("click", () => {
  forwardFnt();
  let moving = setInterval(() => {
    forwardFnt();
  }, 3000);
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(moving);
  });
});
