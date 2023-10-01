let names = [
    {id: 1, name: 'Steven', image: 'https://i.ibb.co/tXqmKKR/1.png', salary: '5000'},
    {id: 2, name: 'Neena', image: 'https://i.ibb.co/yYxK3cq/2.png', salary: '10000'},
    {id: 3, name: 'John', image: 'https://i.ibb.co/SNqFDbB/3.png', salary: '4500'},
    {id: 4, name: 'Rogers', image: 'https://i.ibb.co/WnG0fVZ/4.png', salary: '3400'},
    {id: 5, name: 'Cevin', image: 'https://i.ibb.co/vdQK54J/6.png', salary: '500'},
    {id: 6, name: 'Alshey', image: 'https://i.ibb.co/wSJN6db/5.png', salary: '1210'},
    {id: 7, name: 'Milki', image: 'https://i.ibb.co/JpnDnH5/7.png', salary: '1210'},
    {id: 8, name: 'Polar', image: 'https://i.ibb.co/SnNLhgg/9.png', salary: '1210'},
    {id: 9, name: 'Grindell', image: 'https://i.ibb.co/fGH3RPW/8.png', salary: '1210'},
]

let worker = JSON.parse(localStorage.getItem('worker')) ?? names

const div_root = document.querySelector('#root')
const div_container = document.createElement('div')
div_container.className = 'container'
div_root.append(div_container)


const render = (arr) => {
    div_container.innerText = ''
    arr.forEach(elem =>{
        const div_card = document.createElement('div')
        const image = document.createElement('img')
        const div_inform = document.createElement('div')
        const h2_name = document.createElement('h2')
        const p_salary = document.createElement('p')
        const h5_id = document.createElement('h5')
        const del_btn = document.createElement('button')

        div_card.className = 'card_wrapper'
        image.className = 'card_image'
        image.src = elem.image
        div_inform.className = 'card_inform'
        del_btn.innerText = 'X'
        h2_name.innerText = `Name: ${elem.name}`
        p_salary.innerText = `Salary: ${elem.salary}`
        h5_id.innerText = `User Number: ${elem.id}`

        div_container.append(div_card)
        div_card.append(image, div_inform, del_btn)
        div_inform.append(h2_name, p_salary, h5_id)

        del_btn.addEventListener('dblclick', () => deleteWorkerById(elem.id))
    })
}
render(worker)

function rerender(arr) {
    localStorage.setItem('worker', JSON.stringify(arr))
    div_container.innerHTML = ''
    render(arr)
}

function deleteWorkerById(id) {
    worker = worker.filter(elem => elem.id !== id)
    rerender(worker)
}
render(worker)

const div_form_container = document.createElement('div')
const div_form_add_form = document.createElement('form')
const h2_add = document.createElement('h2')
const input_name = document.createElement('input')
const input_salary = document.createElement('input')
const input_submit = document.createElement('input')

const div_form_update_form = document.createElement('form')
const h2_update = document.createElement('h2')
const input_id_update = document.createElement('input')
const input_name_2 = document.createElement('input')
const input_salary_2 = document.createElement('input')
const input_submit_2 = document.createElement('input')


div_form_container.className = 'form_container'
div_form_add_form.className = 'add_form'
h2_add.innerText = 'Add new worker'

input_id_update.placeholder = 'id'
input_id_update.name = 'id'
input_id_update.type = 'number'

input_name.placeholder = 'name'
input_name.name = 'name'
input_name.type = 'text'

input_salary.placeholder = 'salary'
input_salary.name = 'salary'
input_salary.type = 'number'

input_submit.type = 'submit'
input_submit.innerText = 'Add new worker'


div_form_update_form.className = 'update_form'
h2_update.innerText = 'Update worker'

input_name_2.placeholder = 'name'
input_name_2.name = 'name'
input_name_2.type = 'text'

input_salary_2.placeholder = 'salary'
input_salary_2.name = 'salary'
input_salary_2.type = 'number'

input_submit_2.type = 'submit'
input_submit_2.innerText = 'Update worker'

div_root.append(div_form_container)
div_form_container.append(div_form_add_form)
div_form_container.append(div_form_update_form)
div_form_add_form.append(h2_add, input_name, input_salary, input_submit)
div_form_update_form.append(h2_update, input_id_update, input_name_2, input_salary_2, input_submit_2)

div_form_add_form.addEventListener('submit', (event) => {
    event.preventDefault()
    const {name, salary} = event.target

    const new_worker = {
        id: Date.now(),
        name: name.value,
        image: 'https://picsum.photos/200',
        salary: salary.value
    }
    names.push(new_worker)
    render(names)
})

function updateWorker(id, obj) {
    let findWorker = worker.find(elem => elem.id == id)
    if(findWorker) {
        findWorker.name = obj.name
        findWorker.salary = obj.salary
        rerender(worker)
    } else {
        alert('ID does not exist')
    }
}
render(worker)