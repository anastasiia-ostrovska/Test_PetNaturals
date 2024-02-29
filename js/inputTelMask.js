const telInput = document.querySelector('.tel-input');
const countryCode = '+38(0'

const subscribeOnEvents = (input, code) => {
  input.addEventListener('focus', (event) => {
    const isNoValue = !event.target.value;
    if (isNoValue) event.target.value = code;
  });

  input.addEventListener('blur', (event) => {
    if (event.target.value === code) event.target.value = '';
  });

  input.addEventListener('input', (event) => {
    const valueLength = event.target.value.length;
    const countryCodeModified = valueLength < code.length;
    if(countryCodeModified) event.target.value = code;
  });

  input.addEventListener('input', (event) => {
    let x = event.target.value.replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

    event.target.value = `${code}${x[2]}`
      + ( x[3] ? `)${x[3]}` : '' )
      + ( x[4] ? `-${x[4]}` : '' )
      + ( x[5] ? `-${x[5]}` : '' );
  });
}
subscribeOnEvents(telInput, countryCode);
