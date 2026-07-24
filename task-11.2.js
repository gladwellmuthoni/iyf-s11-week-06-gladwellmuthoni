// 1. Refactored getUserData
function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "John" });
            } else {
                reject("Invalid user ID");
            }
        }, 1000);
    });
}

// 2. Refactored getUserPosts
function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId) {
                resolve([
                    { id: 101, title: "Post 1" },
                    { id: 102, title: "Post 2" }
                ]);
            } else {
                reject("User ID required to fetch posts");
            }
        }, 1000);
    });
}

// 3. Refactored getPostComments
function getPostComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (postId) {
                resolve([
                    { id: 1, text: "Great post!" },
                    { id: 2, text: "Thanks for sharing" }
                ]);
            } else {
                reject("Post ID required to fetch comments");
            }
        }, 1000);
    });
}