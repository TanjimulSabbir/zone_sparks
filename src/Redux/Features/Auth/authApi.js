import { apiSlice } from "../Api/apiSlice";


const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data
            })
        })
    })
})

const { useRegisterMutation, useLoginMutation } = authApi;