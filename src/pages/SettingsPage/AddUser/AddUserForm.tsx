import { Button, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { IAddUserProps, ICreateUser } from "./addUser.types";

const AddUserForm = ({createUser, closeModal}:IAddUserProps) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [speciality, setSpeciality] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const validateForm = () => {
        if(username !== '' && email !== '' && gender !== '' && speciality !== '' && firstName !== '' && lastName !== ''){
            if(password === confirmPassword && password !==''){
                const user: ICreateUser = {
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    password: password,
                    email: email,
                    gender: gender,
                    speciality: speciality
                }
                createUser(user)
            }
        }
    }

    return(
        <>
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={5}>
                <TextField id="firstName" label="Prénom" variant="standard" value={firstName} onChange={(event) => {setFirstName(event.target.value)}} />
            </Grid>
            <Grid item xs={5}>
                <TextField id="lastName" label="Nom" variant="standard" value={lastName} onChange={(event) => {setLastName(event.target.value)}} />
            </Grid>
            <Grid item xs={12}>
                <TextField id="username" label="Nom d'utilisateur" variant="standard" sx={{width:"75%", marginLeft:6}} value={username} onChange={(event) => {setUsername(event.target.value)}} />
            </Grid>
            <Grid item xs={12}>
                <TextField id="email" label="Mail" variant="standard" value={email} sx={{width:"75%", marginLeft:6}} onChange={(event) => {setEmail(event.target.value)}} />
            </Grid>
            <Grid item xs={5}>
                <InputLabel id="gender">Genre</InputLabel>
                <Select
                    labelId="gender"
                    id="gender-select"
                    value={gender}
                    label="Genre"
                    onChange={(event) => {setGender(event.target.value)}}
                    sx={{width:150}}
                >
                    <MenuItem value={"Male"}>Homme</MenuItem>
                    <MenuItem value={"Female"}>Femme</MenuItem>
                    <MenuItem value={"Other"}>Autre</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={5}>
                <InputLabel id="speciality">Spécialité</InputLabel>
                <Select
                    labelId="speciality"
                    id="speciality-select"
                    value={speciality}
                    label="Spécilité"
                    onChange={(event) => {setSpeciality(event.target.value)}}
                    sx={{width:150}}
                >
                    <MenuItem value={"IG"}>IG</MenuItem>
                    <MenuItem value={"GBA"}>GBA</MenuItem>
                    <MenuItem value={"MAT"}>MAT</MenuItem>
                    <MenuItem value={"MEA"}>MEA</MenuItem>
                    <MenuItem value={"STE"}>STE</MenuItem>
                    <MenuItem value={"MI"}>MI</MenuItem>
                    <MenuItem value={"SE"}>SE</MenuItem>
                    <MenuItem value={"DO"}>DO</MenuItem>
                    <MenuItem value={"MSI"}>MSI</MenuItem>
                    <MenuItem value={"EGC"}>EGC</MenuItem>
                    <MenuItem value={"PeiP"}>PeiP</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={5}>
                <TextField id="password" label="Mot de passe" variant="standard" type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} />
            </Grid>
            <Grid item xs={5}>
                <TextField id="confirmPassword" label="Confirmez le mot de passe" variant="standard" type="password" value={confirmPassword} onChange={(event) => {setConfirmPassword(event.target.value)}} />
            </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{margin:2}}>
            <Button onClick={closeModal} sx={{marginRight:3}}>Annuler</Button>
            <Button onClick={validateForm} color="success">Ajouter</Button>
        </Grid>
        </>
    )
} 

export default AddUserForm;