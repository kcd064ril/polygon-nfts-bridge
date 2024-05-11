const fs = require('fs');
const path = require('path');

const info = path.join(__dirname, 'info');
if (!fs.existsSync(info)) {
    fs.mkdirSync(info);
}

console.log(__dirname);

for (let i = 1; i <= 5; i++) {
    const json = {
      name: `Luxury Car #${i}`,
      description: `Image of Luxury Cars #${i}`,
      image: `https://gateway.pinata.cloud/ipfs/QmemRZ5xyrzW1Tjxu9YTECTfUH1E6uEiaB75NpGig65rLE/cars${i}.jpg`,
    };

    fs.writeFileSync(path.join(info, String(i)), JSON.stringify(json));
}
console.log("Cars NFT info generated successfully ")