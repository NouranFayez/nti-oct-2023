const { MongoClient, ObjectId } = require("mongodb")
const dbUrl = "mongodb://127.0.0.1:27017"
const dbName = "oct2023"
const allData = [
    {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
    {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14"
    }
    ]
const client = new MongoClient(dbUrl);

async function runner(){
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection("photos")
    // const res = await db.collection("data").insertOne({name:"omar", age:10})
    // const res = await db.collection("photos").insertMany(allData)
    // const res = await collection.find().toArray()
    // const res = await collection.find({name:"marwa"}).toArray()
    //$lt $gt $lte $gte $eq $ne $nin
    // const res = await collection.find({id: {$mod:[5,0]}}).toArray()
    // const res = await collection.findOne({_id: new ObjectId("652683850049fafb3a9dfafd")})
    // const res = await collection.deleteOne({id:5})
    // const res= await collection.deleteMany()
    const res = await collection.updateOne({id:5}, {$set:{ x:15 }})
    console.log(res)
    const res1 = await collection.findOne({id:5})
    console.log(res1)    
    client.close()
}
runner()