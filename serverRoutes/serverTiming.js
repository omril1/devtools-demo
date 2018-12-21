//@ts-check
const MAGIC_NUMBER = 20;

function getRandomServerTimingHeader() {
  // Shameless copy-paste-modify from Paul Irish
  // https://gist.github.com/paulirish/a76ac17fc211b019e538c09d8d827691
  return {
    'Server-Timing': `
      sql-1;desc="MySQL lookup Server";dur=${randomTiming()},
      sql-2;dur=${randomTiming()};desc="MySQL shard Server #1",
        fs;dur=${randomTiming()};desc="FileSystem",
        cache;dur=${randomTiming()};desc="Cache",
      other;dur=${randomTiming()};desc="Database Write",
      other;dur=${randomTiming()};desc="Database Read",
      cpu;dur=${randomTiming()};desc="Total CPU",
      logging;dur=${randomTiming()/1000},
    `.replace(/\n/g, ''),
  };
}

function randomTiming() {
  return Math.random() * MAGIC_NUMBER + 1.5;
}

/** @type {import('express').RequestHandler} */
const serverTimingHandler = async (req, res) => {
  await sleep(MAGIC_NUMBER);
  res.header(getRandomServerTimingHeader());
  res.send('Hello World!');
};

module.exports = serverTimingHandler;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
