import * as homeReducer from '../features/home/reducer';
import * as loginReducer from '../features/login/reducer';

export default Object.assign(
    {},
    loginReducer,
    homeReducer,  
);