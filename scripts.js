const bck = document.querySelector(".container");

const randomColor = () => {
    let color = 'rgba(';
    for(let start = 0;start< 3;start++){
        color += Math.floor(Math.random() * 255) + ',';
    }
    return color;
}
