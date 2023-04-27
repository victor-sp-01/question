const root  = document.getElementById( 'root' )
const rechazo = document.querySelector( '.button__UZjPt' )
const aceptar = document.querySelector( '.button__1Exq7' )



const random =(target)=>{
    const top = Math.floor( Math.random()*root.clientHeight )
    const left = Math.floor( Math.random()*root.clientWidth )

    const hTarget = target.clientHeight
    const wTarget = target.clientWidth

    
    const _top = top + hTarget > root.clientHeight ? top - hTarget : top
    const _left = left + wTarget > root.clientWidth ? left - wTarget : left 
 
    target.style.position = 'fixed'
    target.style.top = `${ _top }px`
    target.style.left = `${ _left }px`
}

rechazo.addEventListener( 'mouseover', ({ target })=>{
    random(target)
} ) 

rechazo.addEventListener( 'touchstart', ({ target })=>{
    random(target)
} )



aceptar.addEventListener( 'click', e =>{
    alert( 'Cariño, Tambien te quiero mucho y ya sabia que si queria...' )
})
 