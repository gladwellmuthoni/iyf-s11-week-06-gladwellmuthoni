// Assuming getUserData(userId) is already defined and returns a Promise

// 1. Initiate multiple independent promise requests simultaneously
const userIds = [1, 2, 3];
const userPromises = userIds.map(id => getUserData(id));

// 2. Use Promise.all to fetch them all at once and wait for completion
Promise.all(userPromises)
    .then(users => {
        // 3. Display them all together once every request has resolved
        console.log("All users fetched successfully:", users);
        
        users.forEach(user => {
            console.log(`- ID: ${user.id}, Name: ${user.name}`);
        });
    })
    .catch(error => {
        console.error("Failed to fetch one or more users:", error);
    });