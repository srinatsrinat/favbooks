import Axios from "axios"

const SaveBook = (book) => {
    Axios.post('/api/save', {book})
    .then(res => res)
    window.alert('Added to favorites')
}

export default SaveBook;