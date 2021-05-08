import { createSlice } from "@reduxjs/toolkit";

export const cardState = createSlice({
    name: 'cardList',
    initialState: {
        cardList: [{
            projectArr: 'Name of your Project ',
        },
        ]
    },
    reducers: {
        newCardName: (state, projectArr1) => {
            state.cardList.push({
                projectArr: projectArr1.payload,
            })
        },
        newCardPomo: (state, projectPomos1) =>{
            state.cardList[state.cardList.length].projectPomos = projectPomos1
        }
    }
})
export const { newCardName, newCardPomo } = cardState.actions

export const cardList = state => state.cardList.cardList

export default cardState.reducer