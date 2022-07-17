window.addEventListener('DOMContentLoaded', ()=>{
    console.log('dom is fully loaded, but maybe waiting on images & css files')
})

window.addEventListener('load', ()=>{
    console.log('everything is fully loaded')
})

window.onload = function() {
  console.log('everything is completely loaded')
};