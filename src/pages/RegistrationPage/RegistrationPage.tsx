import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import CenteredLayout from "../../components/Layout/CenteredLayout/CenteredLayout";
import { notificationActions } from "../../slices/NotificationSlice";
import { SUCCESS_CREATE_MESSAGE, SUCCESS_DELETE_MESSAGE } from "../../thunks/LocationsThunk";
import { fetchUserThunk, validateUser } from "../../thunks/UserThunk";
import { SeverityEnum } from "../../utils/enum/severity.enum";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";
import AddLocation from "../SettingsPage/AddLocation/AddLocation";
import Locations from "../SettingsPage/Locations/Locations";

const RegistrationPage = () => {

    const dispatch = useAppDispatch();
    const { decodedToken, isAuth } = useAppSelector((state) => state.loginReducer);
    const { message } = useAppSelector((state) => state.locationsReducer);

    const getUserData = useCallback(() => dispatch(fetchUserThunk(decodedToken.sub)), [decodedToken, dispatch]);
    
    useEffect(() => {
        if (decodedToken) {
            getUserData();
        }
    }, [dispatch, decodedToken, getUserData]);

    // On location creation, retrieve user data in order to update the location list
    useEffect(() => {
        if (message === SUCCESS_CREATE_MESSAGE || message === SUCCESS_DELETE_MESSAGE) {
            getUserData();
        }
    }, [getUserData, message]);

    const [gender, setGender] = useState({
        manChecked: false,
        womanChecked: false,
        otherChecked: false
    })

    const {manChecked, womanChecked,otherChecked} = gender

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        gender.manChecked = false;
        gender.womanChecked = false;
        gender.otherChecked = false;

        setGender({
            ...gender,
            [event.target.name]: event.target.checked,
          });
      };

      const validateAccount = () => {
          if(gender.manChecked || gender.womanChecked || gender.otherChecked){
              let genderToReturn = gender.manChecked? 
                  'Male':gender.womanChecked? 'Female':'Other'; 
  
              dispatch(validateUser(decodedToken.sub,genderToReturn))
              
          } else {
              dispatch(notificationActions.showNotification({message: 'Le genre ne peut pas être vide', severity: SeverityEnum.error}))
          }
      }

    return(
        <>
            
                <Typography variant={TypographyVariantEnum.h4} sx={{marginTop:5, marginBottom:5}}>
                    Bienvenue sur le site PolyCovoit
                </Typography>
                <Typography variant={TypographyVariantEnum.h6} sx={{marginTop:5, marginBottom:5}}>
                    Pour votre première connection veuillez rentrer les informations suivantes
                </Typography>
                <CustomDivider spacing={4}/>
                <Grid container spacing={1} sx={{marginBottom: 4, marginTop:4}}>
                    <Grid item xs={3}>
                        <Typography variant={TypographyVariantEnum.h6}>Votre genre </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <FormControl >    
                            <FormGroup row>    
                                <FormControlLabel 
                                    value="H"
                                    control={<Checkbox checked={manChecked} onChange={handleChange} name="manChecked"/>}
                                    label="Homme"
                                    labelPlacement="end"
                                />
                                <FormControlLabel 
                                        value="F"
                                        control={<Checkbox checked={womanChecked} onChange={handleChange} name="womanChecked"/>}
                                        label="Femme"
                                        labelPlacement="end"
                                />
                                <FormControlLabel 
                                        value="A"
                                        control={<Checkbox checked={otherChecked} onChange={handleChange} name="otherChecked"/>}
                                        label="Autre"
                                        labelPlacement="end"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <AddLocation />
            
                <Locations />
                <CustomDivider spacing={4}/>
                <Button color="success" onClick={validateAccount}> Valider mon compte </Button>
        </>
    )
}

export default RegistrationPage;