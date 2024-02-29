const getDurationInSeconds = ({ hours, minutes, seconds }) => {
  return hours * 3600 + minutes * 60 + seconds;
};
const getDurationObject = (duration) => {
  let hours = Math.floor(duration / 3600);
  let minutes = Math.floor((duration % 3600) / 60);
  let seconds = Math.floor(duration % 60);

  return {hours, minutes,  seconds}
}
const formatDurationObject = ({ hours, minutes, seconds }) => {
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return { hours, minutes, seconds };
};
const showDuration = (timerElement, { hours, minutes, seconds }) => {
  timerElement.innerHTML = `${hours}:${minutes}:${seconds}`;
};
const startCountdownTimer = (timerElement, duration) => {
  let count = duration;
  const timer = setInterval(()=> {
    count--;
    const durationObject = getDurationObject(count);
    const formattedDurationObject = formatDurationObject(durationObject);
    showDuration(timerElement, formattedDurationObject);
    // console.log(count);
    if (count === 0) {
      clearInterval(timer);
    }
  }, 1000);
};

const timerElement = document.querySelector('#order-form .timer');
const initialDurationObject = {
  hours: 2,
  minutes: 0,
  seconds: 0
};
const formattedDurationObject = formatDurationObject(initialDurationObject);
showDuration(timerElement, formattedDurationObject);

const duration = getDurationInSeconds(initialDurationObject);
startCountdownTimer(timerElement ,duration);