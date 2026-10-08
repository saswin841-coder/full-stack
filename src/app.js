const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb+srv://saswin841_db_user:JrACtqGMsUuwpCvY@cluster0.kxci8ph.mongodb.net");

async function main() {
    try {
        await client.connect();

        const db = client.db("LibraryDB");
        const members = db.collection("members");

     
        const newMember = {
            memberId: "M101",
            name: "Aswin",
            email: "aswin@gmail.com",
            phone: "9876543210",
            department: "AI&DS",
            membershipType: "Regular"
        };

        await members.insertOne(newMember);
        console.log("Member inserted successfully");

       
        await members.updateOne(
            { memberId: "M101" },
            { $set: { membershipType: "Premium" } }
        );

        console.log("Membership type updated successfully");

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

main();