import {RootState} from '../store';

const getToken = (state:RootState) => state.auth.token;
const getName = (state:RootState) => state.auth.user.name;

export default { getToken, getName };
