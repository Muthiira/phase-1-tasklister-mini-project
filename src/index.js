document.addEventListener("DOMContentLoaded", () => {
  // your code here
 //console.log('After dom loaded')
 document.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault()
  handleToDo(e.target.new_task.value)
 })
})

//the task added by the user should appear in the dom..append
function handleToDo(todo){
  let li = document.createElement('li')
  li.textContent = todo
  document.querySelector("#tasks").appendChild(li)
  //console.log(p)
}
