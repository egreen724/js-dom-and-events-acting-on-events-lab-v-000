function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const inputs = document.getElementsByTagName("input")
  return inputs[0].value

  // inputs[1].addEventListener('click', function(event) {
  //   return inputs[0].value
  // })
}

function addNewElementAsLi() {
  // const ul = document.getElementsByClassName('employee-list')
  const li = document.createElement('li')
  const text = document.createTextNode(retrieveEmployeeInformation())
  li.innerHtml = retrieveEmployeeInformation();

  document.getElementsByClassName('employee-list').appendChild(li)
}

function addNewLiOnClick() {

}

function clearEmployeeListOnLinkClick() {

}
