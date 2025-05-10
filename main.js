const showHideBtns = document.querySelectorAll('.content .qustion button');
showHideBtns.forEach(showHideBtn => {
  showHideBtn.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.parentElement.lastElementChild.classList.toggle('show');
  })
})