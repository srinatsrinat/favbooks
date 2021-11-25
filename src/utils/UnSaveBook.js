import Axios from "axios"

const UnSaveBook = (book) => {
    Axios.post('/api/unsave', {book})
    .then(res => res)
    window.alert("Removed from favorites")
    window.location.reload()
}

export default UnSaveBook;