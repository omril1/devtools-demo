//@ts-check

/** @type {import('express').RequestHandler} */
const restApi = async (req, res) => {
  res.json([
    { username: 'Tomasa28'           , ip: '203.128.44.119' , email: 'Royce58@hotmail.com'          },
    { username: 'August.Abernathy76' , ip: '121.129.62.203' , email: 'Assunta21@yahoo.com'          },
    { username: 'Kelsi_Gusikowski'   , ip: '83.166.122.97'  , email: 'Nina_Pagac87@hotmail.com'     },
    { username: 'Bette.Pfannerstill' , ip: '216.61.44.7'    , email: 'Jackson_Larkin40@hotmail.com' },
    { username: 'Marcia_Douglas45'   , ip: '153.255.140.126', email: 'Arnaldo.Funk@gmail.com'       },
    { username: 'Leonard.Goldner'    , ip: '131.249.154.211', email: 'Lee3@yahoo.com'               },
    { username: 'Lukas.Abernathy'    , ip: '152.226.242.241', email: 'Emiliano89@hotmail.com'       },
  ]);
};

module.exports = restApi;
