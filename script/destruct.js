//Object destructring

let crypto = {
    name: "Solana",
    symbol: "SOL",
    price: 150,
    marketCap: "50B",
    img: "https://static.vecteezy.com/system/resources/previews/024/093/325/non_2x/solana-sol-glass-crypto-coin-3d-illustration-free-png.png"
}


const {symbol,price,name}=crypto

console.log(`\n\t name : ${name} \n\t symbol : ${symbol} \n\t price :${price }`);

