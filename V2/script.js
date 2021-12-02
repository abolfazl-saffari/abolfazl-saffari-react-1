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

let staffs = []

let lName = document.getElementsByClassName('lName')[0]
let fName = document.getElementsByClassName('fName')[0]
let cName = document.getElementsByClassName('cName')[0]
let phone = document.getElementsByClassName('phone')[0]
let wEmail = document.getElementsByClassName('wEmail')[0]
let pEmail = document.getElementsByClassName('pEmail')[0]

function addStaff(staff) {
    let valid = lName.value === '' || fName.value === '' || cName.value === '' || phone.value === '' || wEmail.value === '' || pEmail.value === ''
    if (valid) {
        alert('please fill all inputs')
    } else {
        staff = {
            lastName: `${lName.value}`,
            firstName: `${fName.value}`,
            companyName: `${cName.value}`,
            phone: `${phone.value}`,
            workEmail: `${wEmail.value}`,
            personalEmail: `${pEmail.value}`
        }
        staffs.push(staff);
        resetValue()
        renderTable();
    }
}

function resetValue() {
    lName.value = ''
    fName.value = ''
    cName.value = ''
    phone.value = ''
    wEmail.value = ''
    pEmail.value = ''
}

function removeStaff(lastName) {
    staffs = staffs.filter(function (staff) {
        return staff.id !== lastName
    });
    renderTable();
}

function updateStaff(id, newStaff) {
    staffs = staffs.map(function (staff) {
        return staff.id !== id ? newStaff : staff
    });
    renderTable();
}

function renderTable() {
    let valid = lName.value === '' || fName.value === '' || cName.value === '' || phone.value === '' || wEmail.value === '' || pEmail.value === ''
    if (valid) {

        let tbody = document.getElementsByTagName('tbody')[0]
        let row = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let td7 = document.createElement('td')
        let button01 = document.createElement("button")
        button01.innerHTML = 'edit'
        let button02 = document.createElement('button')
        button02.innerHTML = 'remove'
        function rowRemover(){
            row.remove()
        }
        button02.addEventListener('click',function(){
            row.remove()
        })
        // حواست به lastName باشه

        staffs.forEach(function (staff) {
            td1.innerHTML = staff.lastName
            td2.innerHTML = staff.firstName
            td3.innerHTML = staff.companyName
            td4.innerHTML = staff.phone
            td5.innerHTML = staff.workEmail
            td6.innerHTML = staff.personalEmail
        })
        td7.append(button01, button02)
        row.append(td1, td2, td3, td4, td5, td6, td7)
        tbody.appendChild(row)
    }
}
