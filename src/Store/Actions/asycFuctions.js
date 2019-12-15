import axios from 'axios';

export const updateSettings = (val)=>{
    
    axios.get("https://jsonplaceholder.typicode.com/users/1")
    .then((data)=>{
        console.log(data);
        return {type:"UPDATE_SETTINGS", value: val.newPassword}
    })
    .catch((error)=>{
        console.log(error);
    });
    return {type:"UPDATE_SETTINGS", value: val.newPassword};
};