import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsersThunk, reservationsByDateThunk, usersBySpecialityThunk, verifyAdminThunk } from "../../thunks/AdminThunk";

import { Box, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";
import BarChartComponent from "../../components/AdminCharts/BarChartComponent";
import PieChartComponent from "../../components/AdminCharts/PieChartComponent";
import CirclePackingChartComponent from "../../components/AdminCharts/CirclePackingChartComponent";
import CenteredLayout from "../../components/Layout/CenteredLayout/CenteredLayout";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import Forbidden from "../../components/Forbidden/Forbidden";
import usePolytechSpecialities from "../../hooks/usePolytechSpecialities";
import { Speciality } from "../../utils/enum/speciality.enum";


const AdminPage = () => {

    const dispatch = useAppDispatch()

    const today = new Date()

    const isAdmin = useAppSelector((state) => state.loginReducer.isAdmin);

    const getUsers = useCallback(() => dispatch(fetchUsersThunk()), [dispatch]);
    const getUsersBySpeciality = useCallback(() => dispatch(usersBySpecialityThunk()), [dispatch]);
    const getReservationsAfter = useCallback((date) => dispatch(reservationsByDateThunk(date)), [dispatch])
    const verifyAdmin = useCallback(() => dispatch(verifyAdminThunk()), [dispatch]) 

    const { retrieveColor, getSpeFromString } = usePolytechSpecialities();

    const [period, setPeriod] = useState('days');

    const handlePeriodChange = (event: SelectChangeEvent) => {
        setPeriod(event.target.value);
        let date: Date
        if(event.target.value === "days") {
            date = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
        } else if (event.target.value === "weeks"){
            date = new Date(today.getFullYear(),today.getMonth() - 2,today.getDate())
        } else{
            date = new Date(today.getFullYear() - 1,today.getMonth(), today.getDate())
        }
        getReservationsAfter(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate())
    }

    useEffect(() => {
        verifyAdmin()
        getUsers()
        getUsersBySpeciality()    
        const date = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
        getReservationsAfter(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate())
    }, [getUsers,getUsersBySpeciality,verifyAdmin,getReservationsAfter])

    const users = useAppSelector((state) => state.adminReducer.users)
    const usersBySpeciality = useAppSelector((state) => state.adminReducer.usersBySpeciality)
    const reservations = useAppSelector((state) => state.adminReducer.reservationsAfterDate)


    const specialityColors = (speciality: string) => {
        const spe : Speciality = getSpeFromString(speciality)!
        return retrieveColor(spe)
    }

    const getNumberByGender = (gender: string) => {
        let res = 0

        for(let user of users!){
            if(user.gender === gender){
                res += 1;
            }
        }

        return res;
    }

    return (
        <>
        {
            isAdmin && 
        <>
            <CenteredLayout>
                <Typography variant={TypographyVariantEnum.h3}>Quelques statistiques</Typography>
                <CustomDivider spacing={5}></CustomDivider>
            </CenteredLayout>
            <Grid container justifyContent="center">
                <Grid container xs={5} justifyContent="flex-end" sx={{marginRight:1}}>
                    <Card sx={{maxWidth: 500}}>
                        <Grid container sx={{width:"100%", marginTop:3}} justifyContent="center">
                            <Typography variant={TypographyVariantEnum.h4}>Utilisateurs par filières</Typography>
                        </Grid>
                        {usersBySpeciality && 
                        <Box sx={{height:500, width:500}}>
                            <PieChartComponent usersBySpeciality={usersBySpeciality} specialityColors={specialityColors}/>
                        </Box>

                        } 
                    </Card>   
                </Grid>           
                <Grid container xs={5} justifyContent="flex-start" sx={{marginLeft:1}}>
                    <Card sx={{maxWidth: 500}}>
                        <Grid container sx={{width:"100%", marginTop:3}} justifyContent="center">
                            <Typography variant={TypographyVariantEnum.h4}>Répartition dans les villes</Typography>
                        </Grid>
                        {users && 
                        <Box sx={{height:500, width:500}}>
                            <CirclePackingChartComponent users={users}/>
                        </Box>
                        }
                    </Card>
                </Grid> 
                
                <Grid container xs={12} justifyContent="center" sx={{marginBottom:3, marginTop:3}}>
                    <Grid item xs={3}>
                        <Card>
                            {users && 
                                <CardContent sx={{marginTop:1}}>
                                    <Typography variant={TypographyVariantEnum.h6}>Nombre total d'utilisateurs</Typography>
                                    <Grid container justifyContent="flex-end">
                                        <Typography variant={TypographyVariantEnum.h3} sx={{marginRight:3}}>{users.length}</Typography>
                                    </Grid>
                                </CardContent>
                            }
                        </Card>
                    </Grid>
                    <Grid item xs={5.35} sx={{marginLeft:2}}>
                        <Card>
                            {users && 
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} sx={{borderRight: '1px solid rgba(0,0,0,0.5)', marginTop:1}}>
                                            <Typography variant={TypographyVariantEnum.h6}>Hommes</Typography>
                                            <Grid container justifyContent="flex-end">
                                                <Typography variant={TypographyVariantEnum.h3} sx={{marginRight:3}}>{getNumberByGender('Male')}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={4} sx={{borderRight: '1px solid rgba(0,0,0,0.5)', marginTop:1}}>
                                            <Typography variant={TypographyVariantEnum.h6}>Femmes</Typography>
                                            <Grid container justifyContent="flex-end">
                                                <Typography variant={TypographyVariantEnum.h3} sx={{marginRight:3}}>{getNumberByGender('Female')}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={4} sx={{marginTop:1}}>
                                            <Typography variant={TypographyVariantEnum.h6}>Autres</Typography>
                                            <Grid container justifyContent="flex-end">
                                                <Typography variant={TypographyVariantEnum.h3} sx={{marginRight:3}}>{getNumberByGender('Other')}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            }
                        </Card>
                    </Grid>
                </Grid>
                    
                
                <Grid container xs={12} justifyContent="center">
                    <Card sx={{width: 1016}}>
                    <Grid container sx={{width:"100%", marginTop:3, marginLeft:5}} justifyContent="center">
                            <Typography variant={TypographyVariantEnum.h4}>Nombres de demandes par fillières</Typography>
                        </Grid>
                        <Grid container justifyContent="flex-start">
                        <Box sx={{ width: 120, marginTop:15, marginLeft:2}}>
                            <FormControl>
                                <InputLabel id="select-period">Periode</InputLabel>
                                <Select
                                labelId="select-period"
                                id="select-period"
                                value={period}
                                label="Periode"
                                onChange={handlePeriodChange}
                                >
                                    <MenuItem value={'days'}>Jours</MenuItem>
                                    <MenuItem value={'weeks'}>Semaines</MenuItem>
                                    <MenuItem value={'months'}>Mois</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        {reservations && 
                        <>
                        <Box sx={{width:850, height:500}}>
                            <BarChartComponent reservations={reservations} period={period} specialityColors={specialityColors}/>
                        </Box>
                        </>
                        }
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            </>
        }
        {isAdmin === false && 
            <>
                <Forbidden/>
            </>
        }
        </>
    )
}

export default AdminPage;