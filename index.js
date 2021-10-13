import express, { response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import request from 'request';
import {google} from 'googleapis';
import urlParse from 'url-parse';
import axios from 'axios';
import queryParser from 'query-string';

//"119338160533-ffi0ug4fhtr9k9nf17grmdkh1tbkokit.apps.googleusercontent.com"
// "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"


const PORT =  8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/customer1', (req, res) => {
    const oauth2Client = new google.auth.OAuth2(
        // clientID
        "119338160533-ffi0ug4fhtr9k9nf17grmdkh1tbkokit.apps.googleusercontent.com",
        //Secret Channel
        "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",
        // local host
        "http://localhost:8080/fitapi"

    )

    const scopes = ["https://www.googleapis.com/auth/fitness.activity.read profile email openid"]

    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: scopes,
        state: JSON.stringify({
            callbackUrl: req.body.callbackUrl,
            userID: req.body.userid
        })
    })

    request(url, (err, response, body) => {
        console.log("error:", err);
        console.log("statusCodde:", response && response.statusCode);
        res.send({ url });
    })
})


app.listen(PORT, ()=>console.log(`now run on port ${PORT}`));
