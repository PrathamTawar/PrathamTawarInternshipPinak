let cardData = [
    {
        icon:"./assets/emergency-service.png",
        title:"Emergency Plumbing Services", 
        disc:"Our plumbers are ready to go 24/7 for emergencies - including nights, weekends and holidays."
    },

    {
        icon:"./assets/repairing.png",
        title:"Plumbing and Drains", 
        disc:"As the largest plumbing and drain service company, we make thousands of repairs every day."
    },

    {
        icon:"./assets/drop.png",
        title:"Water Damage", 
        disc:"Our teams are equipped with state-of-the-art water extraction and cleanup equipment."
    },

    {
        icon:"./assets/heater.png",
        title:"Water Heaters", 
        disc:"Trust Roto-Rooter for repairs and replacement of gas, electric and tankless water heaters."
    },

]

const allCards =document.querySelector("#allCards")

function displayCards()
{
    allCards.innerHTML = ""
    cardData.forEach(card => {
        allCards.innerHTML += `
                <div class="card relative bg-white flex flex-col items-center px-3 z-0">

                    <div class=" absolute flex items-center justify-center icon p-1 z-50 bg-white">
                        <img src=${card.icon} alt="">
                    </div>

                    <div class=" text-center mt-16 content flex flex-col items-center gap-8">
                        <h3 class="title text-xl font-semibold text-center">${card.title}</h3>
                        <p class="disc">${card.disc}</p>
                        <a class="font-semibold text-purple-900" href="">EXPLORE THIS SERVICE ></a>
                    </div>

                </div>`
    })
}

displayCards()