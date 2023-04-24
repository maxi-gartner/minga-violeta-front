let apiUrl = 'http://localhost:8000/'

if (import.meta.NODE_ENV==='production') {
    apiUrl = import.meta.VITE_API
}

export default apiUrl