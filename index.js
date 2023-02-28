const clickable = document.getElementById('foot');
const moveable = document.getElementById('hidden');
const navBar = document.getElementById('nav')

clickable.addEventListener('click', () => {
    // alert('hello world')
    moveable.style.animationName = "shift";
    setTimeout(() => {
        navBar.style.opacity = '1'; 
        // moveable.style.animationName = 'move-right'
    }, 500);
    // document.getElementById('fa1').style.animationName = "shift1";
    // document.getElementById('fa2').style.animationName = "shift1";
    // document.getElementById('fa3').style.animationName = "shift1";

})

document.getElementById('about').addEventListener('click', ()=>{
    console.log('about element has been clicked!');
    document.getElementById('aboutDiv').style.animationName = "push";
});

document.getElementById('fa-close').addEventListener('click', ()=>{
    document.getElementById('aboutDiv').style.animationName = "pull";
});