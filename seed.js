const connectDatabase = require('./backend/config/database.js');
const User = require('./backend/models/userModel'); // Adjust the path to your User model

const seedUser = async () => {
    try {
        await connectDatabase();

        let newUser = await User.findOne({ email: "annadmin@example.com" });
        if (!newUser) {
            newUser = await User.create({
                name: "Ann",
                email: "annadmin@example.com",
                gender: "female",
                password: "securePassword123",
                role: "admin",
                avatar: {
                    public_id: "123",
                    url: "sampleurl",
                },
            });
        }

        console.log("User created successfully:", newUser);
        process.exit();
    } catch (error) {
        console.error("Error creating user:", error);
        process.exit(1);
    }
};

seedUser();
