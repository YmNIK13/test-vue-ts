// @link https://github.com/jquense/yup#api

import * as yup from 'yup'

export const userSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().min(18).required()
})

export type UserForm = yup.InferType<typeof userSchema>