const express = require('express');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const app = express();
const PORT = 3001;

const url = 'https://api.pinata.cloud/data/testAuthentication'
const apiKey = '943a22605f49d4220dee';
const apiSecret = 'ee0a4a944bddade87da802b4bfbcda38d32d1054474321bf15c13793c8d32a2c';

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(apiKey, apiSecret);

const authentication = () => {


    return axios.
        get(
            url,
            {
                headers: {
                    'pinata_api_key': apiKey,
                    'pinata_secret_api_key': apiSecret
                }
            }

        ).then((response) => {
            console.log('response', response);
        })
        .catch((error) => {
            console.log('error', error)
        })
}
// authentication();


const pinFileToIPFS = (pinataApiKey, pinataSecretApiKey) => {
    const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
    //we gather a local file from the API for this example, but you can gather the file from anywhere
    // let data = new FormData();
    // data.append('file', fs.createReadStream('./flowers.jpg'));
    // const fs = require('fs');

    const readableStreamForFile = fs.createReadStream('./flowers.jpg');
    const options = {
        pinataMetadata: {
            name: 'MyCustomName',
            keyvalues: {
                'key1': 'key 1 stuff',
                'key2': 'key 2 stuff'
            }
        },
        pinataOptions: {
            cidVersion: 0
        }
    };
    console.log('readableStreamForFile', readableStreamForFile)
    pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
        //handle results here
        console.log(result);
    }).catch((err) => {
        //handle error here
        console.log(err);
    })
    // return axios.post(url,
    //     data,
    //     {
    //         headers: {
    //             // 'Content-Type': 'application/json',
    //             'Accept': 'application/json',

    //             'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
    //             'pinata_api_key': apiKey,
    //             'pinata_secret_api_key': apiSecret
    //         },
    //         // responseType: 'json'
    //     }
    // ).then(function (response) {
    //     //handle response here
    //     console.log('response', response.data);
    // }).catch(function (error) {
    //     //handle error here
    //     console.log('error', error);
    // });
}

pinFileToIPFS();
//https://api.pinata.cloud/pinning/pinFileToIPFS
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})