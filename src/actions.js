/* Load Users */
export function loadUsers() {
    return (dispatch) => {
        return dispatch(fetchUsers())
    }
}
function fetchUsers() {
    return {
        type: 'LOAD_USERS',
        payload: fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
    }
}

/* Load Albums */
export function loadAlbums(userID){
    return (dispatch) => {
        return dispatch(fetchAlbums(userID))
    }
}

/* 
สังเกตุว่า function fetchAlbums มีการรับตัวแปรดังนั้นเวลาเรียกใช้ต้องส่งตัวแปรเข้ามาด้วย
และให้ระวังเครื่องหมายตรง fetch มันไม่ใช้ single qoute เพราะเป็นการเชื่อม string 
กับตัวแปรจึงต้องใช้เครื่องหมาย
*/

function fetchAlbums(userID){
    return {
        type:'LOAD_ALBUMS',
        payload:fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
        .then(result => result.json())
    }
}

/* Action Load Photo */

export function loadPhotos(albumID)
{
    return(dispatch) => {
        return dispatch(fetchPhotos(albumID))
    }
}

function fetchPhotos(albumID){
    return{
        type:'LOAD_PHOTOS',
        payload:fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`)
            .then(result => result.json())
    }
}

