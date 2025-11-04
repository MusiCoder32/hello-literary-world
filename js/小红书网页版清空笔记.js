function del() {
    dom = document.querySelector('.control.data-del')
    dom.click()
    setTimeout(() => {
        confirmBtn = document.querySelector('.confirm-btn')
        confirmBtn.click()
        setTimeout(del,)
    }, 1500)
}