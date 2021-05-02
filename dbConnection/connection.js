const {MongoClient} = require("mongodb");

async function main() {
    const uri = "mongodb+srv://madhura:mongodbAtlasPassword@goldenshoefreecluster.m5u7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    async function listDatabases(client) {
        dbList = await client.db().admin().listDatabases();
        console.log("Databases: ");
        dbList.databases.forEach(db => console.log(` - ${db.name}`));
    }

    try {
        await client.connect();
        console.log("connection to db established");
        await listDatabases(client);
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


