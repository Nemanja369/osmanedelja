import {getLaunches, getStarlink} from './service.js'
import Select from './select.js';

const divLaunchList = document.querySelector('.launch-list')

getLaunches().then(res => {
   let launches = res.data
    
  let divCompany = document.createElement('div')
  divCompany.innerHTML = `
  <p><span>Company name:</span>${launches.name}</p>
  <p><span>Foumdation year:</span>${launches.founded}</p>
  <p><span>Address:</span>${launches.headquarters.address}, ${launches.headquarters.city}, ${launches.headquarters.state}</p>
  `
  let header = document.querySelector('#header')
  header.append(divCompany)
console.log(launches);

})
let versions = []
getStarlink().then(res => {
    let starlink = res.data
  
    starlink.forEach(el => {
        if(!versions.includes(el.version)){
            versions.push(el.version)
        }
        
    })
    showStarlink(starlink)

    generateSelect(versions,starlink)
    console.log(starlink)
})

const generateSelect = (arr, satelites)=>{
let divSelect = document.querySelector('#select')
    divSelect.innerHTML = ''
    let select = Select(arr, satelites)
    divSelect.append(select)
}
export const showStarlink = (arr) =>{
    divLaunchList.innerHTML = ''
    arr.forEach(el =>{
        let divSatelite = document.createElement('div')
        let divSateliteName = document.createElement('div')
        let divSateliteVersion = document.createElement('div')
        divSateliteName.textContent = el.spaceTrack.TLE_LINE0
        divSateliteVersion.textContent = el.version
        divSatelite.append(divSateliteName, divSateliteVersion)
        divLaunchList.append(divSatelite)
    })

}

let nextBtn = document.querySelector('#btn-upcoming')

nextBtn.addEventListener('click', ()=>{
    getStarlink().then(res => {
        let launche = res.data
        // let curentDate = new Date(launches[1].spaceTrack.LAUNCH_DATE) > new Date()
        
        // let nextLaunch = launches.filter(launch => new Date(launch.spaceTrack.LAUNCH_DATE) > new Date())
       launche.forEach(el => {
           console.log(el.spaceTrack.LAUNCH_DATE)
       })
        // console.log(nextLaunch)

})
})