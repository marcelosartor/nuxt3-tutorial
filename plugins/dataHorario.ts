
export default defineNuxtPlugin(({vueApp})=>{
  vueApp.directive('data-horario',{
    mounted(el,binding){
      const dataFormatada = new Date(el.innerText)
      el.innerHTML = formataData(dataFormatada,binding.value)
    }
  })
})

const formataData = (date: Date, type:string = '') => {
  switch (type) {
    case 'dd/mm/yyyy': return date.toLocaleDateString('pr-BR')
    case 'hh:mm': return date.toLocaleTimeString('pr-BR')
    default: return date.toLocaleString('pr-BR')
  }
}