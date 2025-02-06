import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ICompliance = {
    bvnData: {
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        bvn: '',
        gender: '',
        email: '',
        phoneNumber: ''
    }
};


const ComplianceSlice = createSlice({
    name: 'compliance',
    initialState,
    reducers: {
        updateBvnData: (state, action: PayloadAction<ICompliance['bvnData']>) => {
            state.bvnData = action.payload;
        }
    }
});

export const { updateBvnData } = ComplianceSlice.actions;

export default ComplianceSlice;