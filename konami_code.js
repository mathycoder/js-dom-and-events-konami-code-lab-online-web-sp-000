const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    if (code[index] === parseInt(e.detail)) {
      // console.log(e.which, "Correct!")
      index +=1
      if (index === code.length) {
        alert("KONAMI CODE!")
        index = 0
      }

    } else {
        index = 0;
        // console.log(e.which, "Starting over!")
    }
  })
}
