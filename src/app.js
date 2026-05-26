

import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import getResearchers from './researches.js'

const doc = {
    resTable: document.querySelector('#resTable')
}

const researchersTable = await getResearchers()

function render() {
    let rows = ''

    researchersTable.forEach(researcher => {
        let row = `
            <tr>
                <td>${researcher.id}</td>
                <td>${researcher.full_name}</td>
                <td>${researcher.specialization}</td>
                <td>${researcher.affiliation}</td>
                <td>${researcher.experience_years}</td>
            </tr>
        `
        rows += row
    })

    doc.resTable.innerHTML = rows
}

render()
