import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    passengerAmount: {},
    flightPort: '',
    flightPortArrive: null,
    passengerInfo: {},
    flightTicket: '',
    passName: [],
    passSurname: [],
    pnrCode: [],
    selectedDate: '',
    returnDate: '',
}

export const configure = createSlice({
    name: 'control',
    initialState,
    reducers: {
        setPassengerAmount: (state, action) => {
            state.passengerAmount = action.payload;
        },
        setFlightPort: (state, action) => {
            state.flightPort = action.payload;
        },
        setFlightPortArrive: (state, action) => {
            state.flightPortArrive = action.payload;
        },
        setSelectedDate: (state, action) => {
            state.selectedDate = action.payload;
        },
        setPassengerInfo: (state, action) => {
            state.passengerInfo = action.payload;
        },
        setFlightTicket: (state, action) => {
            state.flightTicket = action.payload;
        },
        setPassSurname: (state, action) => {
            state.passSurname = action.payload;
        },
        setPnrCode: (state, action) => {
            state.pnrCode = action.payload;
        },
        setPassName: (state, action) => {
            state.passName = action.payload;
        },
        setReturnDate: (state, action) => {
            state.returnDate = action.payload;
        },

    }
})

export const { setPassengerAmount, setFlightPort, setFlightPortArrive, setSelectedDate, setPassengerInfo, setFlightTicket, setPassSurname, setPnrCode, setPassName, setReturnDate } = configure.actions

export default configure.reducer