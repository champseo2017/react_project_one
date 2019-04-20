import {combineReducers} from 'redux'

function countAge(state = 0, action){
    switch (action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const initialState = {isLoading:false,isRejected: false, data: null}

function users(state = initialState, action){
    switch (action.type){
        case 'LOAD_USERS_PENDING':
            return{
               isLoading: true,
               data: null
            }
        case 'LOAD_USERS_FULFILLED':
            return{
                isLoading:false,
                data:action.payload
            }
        case 'LOAD_USERS_REJECTED':
            return{
                isRejected: true,
                data:null
            }
        default:
            return state
    }
}

/* 
โหลดข้อมูล Album
ตอนนี้ข้อมูลต่างๆ ของเราล้วนทำผ่าน redux ดังนั้นในการโหลดข้อมูล Album เราก็จะทำผ่าน redux ด้วยเหมือนกันครับ
โดยวิธีการก็จะคล้ายๆ กับหน้าจอ User ครับ
*/
function albums(state = initialState, action){
    switch(action.type){
        case 'LOAD_ALBUMS_PENDING':
            return{
                isLoading: true,
                data:null
            }
        case 'LOAD_ALBUMS_FULFILLED':
            return {
                isLoading: false,
                data:action.payload
            }
        case 'LOAD_ALBUMS_REJECTED':
            return {
                isRejected: true,
                data:null
            }
        default:
            return state
    }
}

/* Load Photo */
function photos(state = initialState, action){
    switch(action.type){
        case 'LOAD_PHOTOS_PENDING':
            return {
                isLoading: true,
                data:null
            }
        case 'LOAD_PHOTOS_FULFILLED':
            return{
                isLoading: false,
                data:action.payload
            }
        case 'LOAD_PHOTOS_REJECTED':
            return {
                isRejected: true,
                data:null
            }
        default:
            return state
    }
}


const reducers = combineReducers({
    counter:countAge,
    users,
    albums,
    photos
})

export default reducers