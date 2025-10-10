document.querySelector('.busca').addEventListener('submit', async(event) => {
    event.preventDefault()

    let input = document.querySelector('#searchInput').value
    if(input !== ""){
        showMarning("Carregando...")

        let results = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=002c5cac1cde234823d120c72042abaf &units=metrics&lang=pt_br');
        let json = await results.json();

        if(json.cod ==200){
            showInfo(({
                name:json.name,
                country:json.sys.country,
                temp:json.main.temp,
                tempIcon:json.weather[0].icon,
                tempSpeed: json.wind.speed,
                windAngle:json.wind.deg
            }))

        }else{
            showMarning("Não encontramos essa localização...")
        }
    }else{

    }
})

function showMarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}

function showInfo(json) {
    showMarning("")
    document.querySelector('.resultado').style.display = 'block'
    document.querySelector('.titulo').innerHTML = '${json.name}, ${json.country}'
    document.querySelector('.tempinfo').innerHTML = '${json.temp}<sup>º</sup>'
    document.querySelector('.ventoInfo').innerHTML = '${json.windSpeed}<span>Km/h</span>'
   
    document.querySelector('.temp img').setAttribute

}