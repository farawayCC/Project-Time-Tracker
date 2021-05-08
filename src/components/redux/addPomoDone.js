import { createSlice } from "@reduxjs/toolkit";

export const pomoState = createSlice({
    name: 'pomoList',
    initialState: {
        value: [
            0
        ]
    },
    reducers: {
        addPomoDone: (state, index) => {
            state.value[index.payload] += 1
        },
        addNewProjectPomo: state => {
            state.value.push(0)
        },
        setNull : (state, index) => {
            state.value[index.payload] = 0
        }
    }
})
export const { addPomoDone, addNewProjectPomo,setNull } = pomoState.actions

export const pomoList = state => state.pomoList.value

export default pomoState.reducer