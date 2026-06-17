let color = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

const changecolor = () => {
    let d = document.getElementById("dis");
    let rn = "#";
    let c = document.getElementById("color");

    for(let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        rn += color[index];
    }

    c.innerHTML = rn;
    d.style.backgroundColor = rn;
}