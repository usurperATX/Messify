const db = require("./config/db");

async function testDB() {
    try {
        const [records] = await db.query("SELECT * FROM student");
        console.log("✅ Database Query Result:", records);
    } catch (error) {
        console.error("🚨 Database Error:", error);
    }
}

testDB();
