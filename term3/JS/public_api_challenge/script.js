let getCoinNames = () => {
    let names = []

    axios.get("https://api.coingecko.com/api/v3/coins/list")
        .then(response => response.data)
        .then(result => {
            let ul = document.createElement('ul');
            let li = document.createElement('li');

            result.map(coin => li.textContent = coin.name)
        

            document.body.appendChild(ul).appendChild(li)
        })
        .catch(error => console.log(error))
}


document.getElementById("button").addEventListener('click', getCoinNames)