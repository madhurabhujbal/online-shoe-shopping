const {MongoClient} = require("mongodb");

async function main() {
    const uri = "mongodb+srv://madhura:mongodbAtlasPassword@goldenshoefreecluster.m5u7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
}

