const clock = document.getElementById('clock')

setInterval(() => {
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString();
    clock.innerHTML = `${date} ${time}`
}, 1000);
