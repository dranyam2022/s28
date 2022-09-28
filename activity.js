//3. Insert a single room (insertOne method) in the rooms collections with the details provided.

db.room.insert({
    name: "single",
    accomodates: 2,
    price: 1000,
    description: "A simple room with all the basic necessities",
    rooms_available: 10,
    isAvailable: false
})

//4. Insert multiple rooms(insertMany method) in the rooms collection with the details provided.

db.room.insertMany([
    {
        name: "double",
        accomodates: 3,
        price: 2000,
        description: "A room fit for a small family going on a vacation",
        rooms_available: 5,
        isAvailable: false
    },
    {
        name: "queen",
        accomodates: 4,
        price: 4000,
        description: "A room with a queen sized bed perfect for a simple getaway",
        rooms_available: 15,
        isAvailable: false
    }
])

//5. Use the find method to search for a room with the name double.

db.room.find({ name: "double" })

//6. Use the updateOne method to update the queen room and set the available rooms to 0.

db.room.updateOne(
    {
        name: "queen"
    },
    {
        $set: {
            rooms_available: 0
        }
    }
)

//7. Use the deleteMany method to delete all rooms that have 0 rooms available.

db.room.deleteMany({
    rooms_available: 0
})