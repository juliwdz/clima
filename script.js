document.querySelector('.busca').addEventListener('submit', (event) => {
    event.preventDefault()

    let input = document.querySelector('#searchInput').value
    if(input !== ""){
        showMarning("Carregando...")

        let url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
    }else{

    }
});

function showMarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}