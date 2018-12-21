async function makeServerTimingCall() {
  const response = await fetch('./serverTiming');
  const text = await response.text();
  return text;
}
