async function makeServerTimingCall() {
  const response = await fetch('./serverTiming');
  const text = await response.text();
  return text;
}

async function makeRestApiCall() {
  const response = await fetch('./restApi');
  console.log(await response.json());
}
