const form = document.querySelector('form');
const task_input = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
task_input.value = '';

// form.addEventListener('submit', runEvent);
// task_input.addEventListener('keydown', runEvent);
// task_input.addEventListener('keyup', runEvent);
// task_input.addEventListener('keypress', runEvent);
task_input.addEventListener('focus', runEvent);
task_input.addEventListener('blur', runEvent);
task_input.addEventListener('cut', runEvent);
task_input.addEventListener('paste', runEvent);
task_input.addEventListener('input', runEvent);
select.addEventListener('change', runEvent);
function runEvent(e){
    console.log(`Event type: ${e.type}`);
    select.value === '2' ? console.log('true') : console.log('false');
    // console.log(e.target.value)
    // heading.innerText = e.target.value;
    // console.log(task_input.value);
    // e.preventDefault();
}