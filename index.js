const app = "I don't do much.";

const token = 'da69607e4e80950fac9306049bffad8393ae01e8 '
fetch('https://api.github.com/user/repos').
  then(res => res.json()).
  then(json => console.log(json))