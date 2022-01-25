import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsersThunk, reservationsByDateThunk, usersBySpecialityThunk } from "../../thunks/AdminThunk";

import { Box, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";
import BarChartComponent from "../../components/AdminCharts/BarChartComponent";
import PieChartComponent from "../../components/AdminCharts/PieChartComponent";
import CirclePackingChartComponent from "../../components/AdminCharts/CirclePackingChartComponent";
import CenteredLayout from "../../components/Layout/CenteredLayout/CenteredLayout";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import { LoadingButton } from "@mui/lab";


const AdminPage = () => {

    const dispatch = useAppDispatch()

    const today = new Date()

    const getUsers = useCallback(() => dispatch(fetchUsersThunk()), [dispatch]);
    const getUsersBySpeciality = useCallback(() => dispatch(usersBySpecialityThunk()), [dispatch]);
    const getReservationsAfter = useCallback((date) => dispatch(reservationsByDateThunk(date)), [dispatch])

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
        getUsers()
        getUsersBySpeciality()    
        const date = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
        getReservationsAfter(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate())
    }, [getUsers,getUsersBySpeciality])

    const users = useAppSelector((state) => state.adminReducer.users)
    const usersBySpeciality = useAppSelector((state) => state.adminReducer.usersBySpeciality)
    const reservations = useAppSelector((state) => state.adminReducer.reservationsAfterDate)


    const specialityColors = (speciality: string) => {
        switch (speciality) {
            case "IG":
                return  "hsl(306, 92%, 79%)"
            case "GBA":
                return  "hsl(121, 42%, 66%)"
            case "MAT":
                return  "hsl(183, 70%, 56%)"
            case "STE":
                return  "hsl(242, 76%, 33%)"
            case "MEA":
                return  "hsl(286, 83%, 41%)"
            case "MI":
                return  "hsl(0, 48%, 51%)"
            case "EGC":
                return  "hsl(60, 48%, 54%)"
            case "DO":
                return  "hsl(293, 89%, 27%)"
            case "SE":
                return  "hsl(297, 99%, 58%)"
            case "PeiP":
                return  "hsl(255, 7%, 58%)"
            case "MSI":
                return  "hsl(1, 96%, 35%)"
            default:
                return  "hsl(285, 92%, 0%)"
        }
    }

    return (
        <>
            <CenteredLayout>
                <Typography variant={TypographyVariantEnum.h3}>Quleques statistiques</Typography>
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
                <Grid item sx={{marginBottom:5, marginTop:5}}>
                    <Card>
                        {users && 
                            <CardContent>
                                <Typography variant={TypographyVariantEnum.h6}>Nombre total d'utilisateurs</Typography>
                                <Grid container justifyContent="flex-end">
                                    <Typography variant={TypographyVariantEnum.h3} sx={{marginRight:3}}>{users.length}</Typography>
                                </Grid>
                            </CardContent>
                        }
                    </Card>
                </Grid>
                <Grid container xs={12} justifyContent="center">
                    <Card sx={{width: 1016}}>
                    <Grid container sx={{width:"100%", marginTop:3, marginLeft:5}} justifyContent="center">
                            <Typography variant={TypographyVariantEnum.h4}>Nombres de reservations par fillières</Typography>
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
    )
}

export default AdminPage;