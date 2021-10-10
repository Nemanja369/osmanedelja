import { showStarlink } from "./index"

const Select = (options, arr) =>{ 
   
    const select = document.createElement('select')

    const defOpt = document.createElement('option')
    defOpt.value = '-1'
    defOpt.selected = true
    defOpt.disabled =  true
    defOpt.hidden = true
    defOpt.textContent = 'Pick version'

    select.append(defOpt)

    options.forEach(option => {
        const opt = document.createElement('option')
        opt.value = option
        opt.textContent = option
        select.append(opt)
    })

    select.addEventListener('change',()=>{
       
        let tmp = arr.filter(el => el.version == select.value)
        console.log(tmp)
       showStarlink(tmp)
    })

    return select
}

export default Select