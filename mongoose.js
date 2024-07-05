// 더미데이터 넣기용
import connect from "./connect/connect.js";
import User from "./schemas/user.js";

connect();
const user_inserted = await User.create(
    {
        email: "test@test.com",
        name: "test",
        age: 20,
    },
    {
        email: "test2@test.com",
        name: "test2",
        age: 22,
    }
);

const users = await User.find();
console.log(users);
