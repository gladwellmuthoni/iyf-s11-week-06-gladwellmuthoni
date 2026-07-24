// The "Callback Hell" nightmare rewritten cleanly using async/await
async function fetchUserFlow() {
    try {
        // 1. Fetch user data
        const user = await getUserData(1);
        console.log("User:", user);

        // 2. Fetch posts using the user's ID
        const posts = await getUserPosts(user.id);
        console.log("Posts:", posts);

        // 3. Fetch comments using the first post's ID
        const comments = await getPostComments(posts[0].id);
        console.log("Comments:", comments);

        return comments;
    } catch (error) {
        // Handles errors from any step in the flow gracefully
        console.error("An error occurred during the async flow:", error);
    }
}

// Execute the function
fetchUserFlow();