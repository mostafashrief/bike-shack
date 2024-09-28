class CountDownTimer extends HTMLElement {
  constructor() {
    super();
    // Grab required elements
    this.countDownElement = document.querySelector(".countdown-timer");
    
    this.daysElement = document.querySelector(".days");
    this.hoursElement = document.querySelector(".hours");
    this.minutesElement = document.querySelector(".minutes");
    this.secondsElement = document.querySelector(".seconds");

    // Set Date
    this.endDateString = this.countDownElement.dataset.endDate;
    
    this.endDate = new Date(this.endDateString).getTime();
    

    // Start timer
    this.interval = setInterval(this.handleTick.bind(this), 1000);
  }

  handleTick() {
    // Logic and update elements
    let currentTime = new Date().getTime();
    let timeLeft = this.endDate - currentTime;

    if (timeLeft <= 0) {
      clearInterval(this.interval);
      this.updateTimer(0, 0, 0, 0);
      return;
    }

   let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    this.daysElement.innerHTML = days + "d";
    this.hoursElement.innerHTML = hours + "h";
    this.minutesElement.innerHTML = minutes + "m";
    this.secondsElement.innerHTML = seconds + "s";
  }
  
}
customElements.define("countdown-timer", CountDownTimer);