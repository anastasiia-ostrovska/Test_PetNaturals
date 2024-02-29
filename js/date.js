const getDateObject = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return { day, month, year };
};
const formatDateObject = ({ day, month, year }) => {
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  return { day, month, year };
};
const showDate = ({ dayEl, monthEl, yearEl },{day, month, year}) => {
  dayEl.innerHTML = day;
  monthEl.innerHTML = month;
  yearEl.innerHTML = year;
};

const date = new Date();
const dateObject = getDateObject(date);
const formattedDateObject = formatDateObject(dateObject);
const dateContainers = {
  dayEl: document.querySelector('#order-form .day'),
  monthEl: document.querySelector('#order-form .month'),
  yearEl: document.querySelector('#order-form .year'),
};

showDate(dateContainers, formattedDateObject);


