import React from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "multipart/form-data;" +
            "boundary=<calculated when request is sent>",
    },

})
export const presentationApi = {

    createPresentation(formData) {
        return instance.post('api/presentations/store', formData)
    },
    getPresentation(currentPage) {
        return instance.get(`api/presentations/pages/${currentPage}`)
    },
    fetchPresentation(secret_key) {
        return instance.get(`api/presentations/slug/${secret_key}`)
    },
    login(data){
        return instance.post('api/login',data)
    },
authGoogle(){
        debugger
        return instance.get('api/auth/protected')
}
}
