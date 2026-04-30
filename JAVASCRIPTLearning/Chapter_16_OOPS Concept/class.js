

class APIClient
{
    baseURL;
    constructor(baseURL)
    {
        this.baseURL = baseURL;
    }

    get(path)
    {
        console.log("[Print]: "+this.baseURL+path)
    }
}

let obj = new APIClient("app.vwo.com")
obj.get("/sigin")