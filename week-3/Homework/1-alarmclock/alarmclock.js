function setAlarm() {
  let timeInput = document.getElementById("alarmSet").value;
  let min = Math.floor(timeInput / 60);
  let sec = Math.floor(timeInput - min * 60);
  let timeRemaining = timeInput;

  let counterIntervals = setInterval(() => {
    if (timeInput > 0) {
      timer(timeInput);
    }
  }, 1000);

  let timer = (time) => {
    if (timeRemaining > 0) {
      document.body.style.backgroundColor = "rgba(0,255,0,.1)";

      let minP = min;
      let secP = sec;

      if (min < 10) {
        minP = `0${min}`;
      }
      if (sec < 10) {
        secP = `0${sec}`;
      }

      let message = `Time Remaining: ${minP}:${secP}`;
      document.getElementById("timeRemaining").innerHTML = message;

      if (sec > 0) {
        sec--;
      } else {
        min--;
        sec = 59;
      }

      timeRemaining--;
    } else {
      playAlarm();
      document.body.style.backgroundColor = "rgba(255,0,0,.1)";
      document.getElementById("timeRemaining").innerHTML =
        "Time Remaining: 00:00";
      clearInterval(counterIntervals);
    }

    let cleaningButtons = () => {
      document.querySelectorAll(".addedElement").forEach((obj) => {
        obj.remove();
      });
    };

    let restartingAll = () => {
      document.body.style.backgroundColor = "white";
      document.getElementById("timeRemaining").innerHTML =
        "Time Remaining: 00:00";
      document.getElementById("alarmSet").value = "";
      document.getElementById("set").style.display = "inline-block";
      clearInterval(counterIntervals);
      cleaningButtons();
      pauseAlarm();
    };

    cleaningButtons();
    document.getElementById("set").style.display = "none";

    let pauseButton = document.createElement("button");
    pauseButton.id = "pause";
    pauseButton.type = "button";
    pauseButton.className = "addedElement btn btn-primary";
    pauseButton.innerHTML = "Pause";

    let buttonBox = document.getElementById("set").parentElement;
    buttonBox.appendChild(pauseButton);

    document.getElementById("pause").addEventListener("click", () => {
      clearInterval(counterIntervals);
      cleaningButtons();

      let resumeButton = document.createElement("button");
      resumeButton.id = "resume";
      resumeButton.type = "button";
      resumeButton.className = "addedElement btn btn-primary";
      resumeButton.innerHTML = "Resume";
      buttonBox.appendChild(resumeButton);

      document.getElementById("resume").addEventListener("click", () => {
        cleaningButtons();
        counterIntervals = setInterval(() => {
          timer(timeRemaining);
        }, 1000);
        buttonBox.appendChild(pauseButton);
      });
    });

    document.getElementById("stop").addEventListener("click", () => {
      restartingAll();
    });
  };
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
