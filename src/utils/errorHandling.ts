import { ThunkDispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { notificationActions } from "../slices/NotificationSlice";
import { SeverityEnum } from "./enum/severity.enum";

const BAD_REQUEST = "Mauvaise requête, verifiez les paramètres que vous avez rentré !"
const UNAUTHORIZED = "Vous n'êtes pas autorisés à aller ici !"
const NOT_FOUND = "La page que vous cherchez n'existe pas !"

const SERVER_ERROR = "Désolé, une erreur serveur est survenue, reessayez plus tard"

const UNKNOWN_ERROR = "Désolé, une erreur inconnue est survenue"

const errorMessage = (error: AxiosError) => {
    if(error && error.response){
        if(error.response.status === 400){
            return error.response.status + " | " + BAD_REQUEST
        } else if (error.response.status === 401 || error.response.status === 403){
            return error.response.status + " | " + UNAUTHORIZED
        } else if (error.response.status === 404){
            return error.response.status + " | " + NOT_FOUND
        } else if (error.response.status >= 500){
            return error.response.status + " | " + SERVER_ERROR
        } else {
            return error.response.status + " | " + UNKNOWN_ERROR
        }
    } else {
        return UNKNOWN_ERROR
    }
}

export const errorHandler = (error:AxiosError, dispatch: any) => {
    let message = errorMessage(error)

    console.log(message)

    dispatch(notificationActions.showNotification({message: message, severity: SeverityEnum.error}))
}