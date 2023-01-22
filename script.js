const form = document.querySelector('#form-habits');
const projectSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExists = projectSetup.dayExists(today);

    if (dayExists) {
        alert("Dia já incluso!");
        return
    }
    projectSetup.addDay(today);
}

function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(projectSetup.data))
  }
  
  const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
  projectSetup.setData(data)
  projectSetup.load()