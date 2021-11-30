let tbody = document.getElementsByTagName('tbody')[0]
let addRowInput = document.getElementsByClassName('add-inputs')[0]
let showHide = document.getElementsByClassName('showHide')[0]
let confirm = document.getElementsByClassName('confirm')[0]
let addRowFlag = false

function hideAndShow() {
    if (addRowFlag) {
        addRowInput.style.display = 'none'
        addRowFlag = false
        showHide.innerHTML = 'Show'
        confirm.style.display = 'none'
    } else {
        addRowInput.style.display = 'flex'
        addRowFlag = true
        showHide.innerHTML = 'Hide'
        confirm.style.display = 'block'

    }
}

let lNameInput = document.querySelector('.lName')
let fNameInput = document.querySelector('.fName')
let cNameInput = document.querySelector('.cName')
let phoneInput = document.querySelector('.phone')
let wEmailInput = document.querySelector('.wEmail')
let pEmailInput = document.querySelector('.pEmail')

function confirmInput() {
    let lNameInputValue = lNameInput.value
    let fNameInputValue = fNameInput.value
    let cNameInputValue = cNameInput.value
    let phoneInputValue = phoneInput.value
    let wEmailInputValue = wEmailInput.value
    let pEmailInputValue = pEmailInput.value
    let list = (lNameInput.value === '' || fNameInput.value === '' || cNameInput.value === '' || phoneInput.value === '' || wEmailInput.value === '' || pEmailInput.value === '')
    if (!list) {
        hideAndShow()
        let trElem = document.createElement('tr')
        let tdElem01 = document.createElement('td')
        tdElem01.innerHTML = lNameInputValue
        let tdElem02 = document.createElement('td')
        tdElem02.innerHTML = fNameInputValue
        let tdElem03 = document.createElement('td')
        tdElem03.innerHTML = cNameInputValue
        let tdElem04 = document.createElement('td')
        tdElem04.innerHTML = phoneInputValue
        let tdElem05 = document.createElement('td')
        tdElem05.innerHTML = wEmailInputValue
        let tdElem06 = document.createElement('td')
        tdElem06.innerHTML = pEmailInputValue
        let tdElem07 = document.createElement('td')
        let buttonElem01 = document.createElement('button')
        buttonElem01.innerHTML = 'edit'
        buttonElem01.setAttribute('class', 'editButton')
        let buttonElem02 = document.createElement('button')
        buttonElem02.innerHTML = 'remove'
        buttonElem02.setAttribute('class', 'removeButton')
        trElem.append(tdElem01, tdElem02, tdElem03, tdElem04, tdElem05, tdElem06, tdElem07)
        tdElem07.append(buttonElem01, buttonElem02)
        tbody.append(trElem)
        lNameInput.value = ''
        fNameInput.value = ''
        cNameInput.value = ''
        phoneInput.value = ''
        wEmailInput.value = ''
        pEmailInput.value = ''
        // let label01 = document.createElement('label')
        // let input01 = document.createElement('input')
        // input01.setAttribute('type','text')
        // label01.append(input01)
        //
        // let label02 = document.createElement('label')
        // let input02 = document.createElement('input')
        // input02.setAttribute('type','text')
        // label02.append(input02)
        //
        // let label03 = document.createElement('label')
        // let input03 = document.createElement('input')
        // input03.setAttribute('type','text')
        // label03.append(input03)
        //
        // let label04 = document.createElement('label')
        // let input04 = document.createElement('input')
        // input04.setAttribute('type','text')
        // label04.append(input04)
        //
        // let label05 = document.createElement('label')
        // let input05 = document.createElement('input')
        // input05.setAttribute('type','text')
        // label05.append(input05)
        //
        // let label06 = document.createElement('label')
        // let input06 = document.createElement('input')
        // input06.setAttribute('type','text')
        // label06.append(input06)

        buttonElem01.addEventListener('click', function () {
            tdElem01.innerHTML = prompt('lName ?')
            tdElem02.innerHTML = prompt('fName ?')
            tdElem03.innerHTML = prompt('Company Name ?')
            tdElem04.innerHTML = prompt('Phone ?')
            tdElem05.innerHTML = prompt('Work Email ?')
            tdElem06.innerHTML = prompt('Personal Email ?')
        })
        buttonElem02.addEventListener('click', function () {
            trElem.remove()
        })

    } else {
        alert('تمام متغیر ها رو باید کامل کنی !!')
    }
}