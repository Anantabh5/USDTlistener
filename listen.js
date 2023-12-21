const ethers =require('ethers');
const usdtABI = require("./tether.json");

require('dotenv').config();

async function getT(){
    const usdtAddr = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

    const prov = new ethers.WebSocketProvider(
        `wss://eth-mainnet.g.alchemy.com/v2/${process.env.KEY}`
    );

    const contract = new ethers.Contract(usdtAddr, usdtABI, prov);

    contract.on("Transfer", (from, to, value, event)=>{
        let transferEvent ={
            from: from,
            to: to,
            value: value,
            eventData: event,
        }
        console.log(JSON.stringify(transferEvent, null, 4))
    })

}

getT();