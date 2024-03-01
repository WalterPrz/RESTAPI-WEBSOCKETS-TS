const currentTicketLbl =  document.querySelector('span')
const currentTicketBtn =  document.querySelector('button')

async function getLastTicket(){
    const lastTicker =  await fetch('/api/tickets/last').then(resp=>resp.json());
    currentTicketLbl.innerText =lastTicker
}
async function createTicker(){
    const newTicket =  await fetch('/api/tickets',{method: 'POST'}).then(resp=>resp.json())
    currentTicketLbl.innerText = newTicket.number
}

currentTicketBtn.addEventListener('click',createTicker)
getLastTicket()