import { createSlice } from '@reduxjs/toolkit';

const railwaySlice = createSlice({
    name: 'railway',
    initialState: {
        formValue: {
            date: [],
            location: {
                departue: '',
                arrival: ''
            }
        },
        departureDate: '',
        arrivalDate: '',
        formDate: [],
        formLocation: {
            departue: '',
            arrival: ''
        }
    },
    reducers: {
        addFormDate(state, actions) {
            state.formDate = actions.payload
        },
        addDepartureDate(state, actions) {
            state.departureDate = actions.payload
           console.log(state.departureDate)
        },
        addArrivalDate(state, actions) {
            state.arrivalDate = actions.payload
        },
        addFormLocation(state, actions) {
            state.formLocation = actions.payload

        },
        addFormTicketValue(state, actions) {
            state.formValue = actions.payload
            console.log(state.formValue)
        }
    }
})

export const {
    addFormTicketValue,
    addFormDate,
    addFormLocation,
    addDepartureDate,
    addArrivalDate 
} = railwaySlice.actions
export default railwaySlice.reducer