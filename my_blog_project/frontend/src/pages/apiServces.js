import axios from "axios";

const BASE_URL = "http://localhost:8000/api/posts/";

// Fetch all blogs
export function getBlog() {
    return axios.get(BASE_URL)
        .then(res => res.data)
        .catch(error => console.error("Error fetching blogs:", error));
}

// Fetch a single blog by ID
export function getBlogById(id) {
    return axios.get(`${BASE_URL}${id}/`)
        .then(res => res.data)
        .catch(error => console.error("Error fetching blog by ID:", error));
}

// Add a new blog
export function addBlog(data) {
    return axios.post(BASE_URL, data)
        .then(res => res.data)
        .catch(error => console.error("Error adding new blog:", error));
}

// Update a blog by ID
export function updateBlog(id, data) {
    return axios.put(`${BASE_URL}${id}/`, data)
        .then(res => res.data)
        .catch(error => console.error("Error updating blog:", error));
}

// Delete a blog by ID
export function deleteBlog(id) {
    return axios.delete(`${BASE_URL}${id}/`)
        .then(res => res.data)
        .catch(error => console.error("Error deleting blog:", error));
}
