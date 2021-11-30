let staffs = [
    {id: 1, lastName: '', firstName: '', companyName: '', phone: 0, workEmail: '', personalEmail: ''},
    {id: 2, lastName: '', firstName: '', companyName: '', phone: 0, workEmail: '', personalEmail: ''},
    {id: 3, lastName: '', firstName: '', companyName: '', phone: 0, workEmail: '', personalEmail: ''}
]

function addStaff(staff) {
    staffs.push(staff);
    renderTable();
}

function removeStaff(id) {
    staffs = staffs.filter(function (staff) {
        return staff.id !== id
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
    const table = document.getElementById('table')
    let tbody = document.getElementsByTagName('tbody')
    tbody.innerHtml =''

    staffs.forEach(function (staff) {
        tbody.appendChild(
            `
        <tr>
            <td>${staffs.id}</td>
            <td>${staffs.lastName}</td>
            <td>${staffs.firstName}</td>
            <td>${staffs.companyName}</td>
            <td>${staffs.phone}</td>
            <td>${staffs.workEmail}</td>
            <td>${staffs.personalEmail}</td>
        </tr>
            `
        )
    })
}