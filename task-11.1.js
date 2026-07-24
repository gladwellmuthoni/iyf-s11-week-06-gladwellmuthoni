function loadUser(userId, callback) {
    // Simulate 1.5 second database lookup (1500ms)
    setTimeout(() => {
        const user = {
            id: userId,
            name: "Alex",
            role: "Developer"
        };
        // Call callback with the user object
        callback(user);
    }, 1500);
}

// Example usage:
loadUser(42, function(user) {
    console.log("User loaded successfully:", user);
});