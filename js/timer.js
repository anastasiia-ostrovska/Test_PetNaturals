const getDurationInSeconds = ({ hours, minutes, seconds }) => {
  return hours * 3600 + minutes * 60 + seconds;
};
const getDurationObject = (duration) => {
  let hours = Math.floor(duration / 3600);
  let minutes = Math.floor((duration % 3600) / 60);
  let seconds = Math.floor(duration % 60);

  return { hours, minutes, seconds };
};
const formatDurationObject = ({ hours, minutes, seconds }) => {
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return { hours, minutes, seconds };
};
const showDuration = (timerElement, duration) => {
  const durationObject = getDurationObject(duration);
  const formattedDurationObject = formatDurationObject(durationObject);
  const {hours, minutes, seconds} = formattedDurationObject

  timerElement.innerHTML = `${hours}:${minutes}:${seconds}`;
};
const startCountdownTimer = (timerElement, duration) => {
  let count = duration;
  const timer = setInterval(() => {
    count--;
    showDuration(timerElement, count);
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
const duration = getDurationInSeconds(initialDurationObject);
showDuration(timerElement, duration);
startCountdownTimer(timerElement, duration);