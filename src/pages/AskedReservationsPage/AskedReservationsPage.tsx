import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AskedReservation from "../../components/Reservation/AskedReservation";
import { askedReservationFetch } from "../../thunks/ReservationThunk";
import Fade from "../../components/Transitions/Fade/Fade";
import CenteredLayout from "../../components/Layout/CenteredLayout/CenteredLayout";
import { Box, Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { IReservation } from "../../components/Reservation/reservation.type";

const AskedReservationsPage = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(askedReservationFetch())
    }, [dispatch])

    const today = new Date()

    const [filters, setFilters] = useState(false)

    const [acceptedChecked, setAcceptedChecked] = useState(true);
    const [waitingChecked, setWaitingChecked] = useState(true);
    const [refusedChecked, setRefusedChecked] = useState(true);

    const handleAcceptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptedChecked(event.target.checked);
    };

    const handleWaitingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWaitingChecked(event.target.checked);
    };

    const handleRefusedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRefusedChecked(event.target.checked);
    };

    const filterComponent = () => {
        if(filters){
            return(
                <>
                    <Grid container justifyContent="flex-start" spacing={2}>
                        <Grid item xs={3}>
                             Acceptées <Checkbox color="success" checked={acceptedChecked} onChange={handleAcceptChange}></Checkbox>
                        </Grid>
                        <Grid item xs={3}>
                            En attente <Checkbox color="primary" checked={waitingChecked} onChange={handleWaitingChange}></Checkbox>
                        </Grid>
                        <Grid item xs={3}>
                            Refusées <Checkbox color="error" checked={refusedChecked} onChange={handleRefusedChange}></Checkbox>
                        </Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={12}> 
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <LocationCityIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
                                <TextField id="postCodeFilter" label="Rechercher par code postal" variant="standard" value={postCodeFilter} onChange={handlePostCodeChange}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{marginTop: 3}}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                            label="Rechercher par date"
                            inputFormat="dd/MM/yyyy"
                            value={dateFilter}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} />}
                            />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <CustomDivider spacing={5} />
                </>
            );
        } else {
            return(<></>)
        }
    }

    const [dateFilter, setDateFilter] = useState<Date | null>(null);
    const [postCodeFilter, setPostCodeFilter] = useState<string | null>(null);

    const handleDateChange = (newValue: Date | null) => {
        setDateFilter(newValue);
    };

    const handlePostCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value === "" || event.target.value.match(/[a-zA-Z*]/)){
            setPostCodeFilter(null)
        } else {
            setPostCodeFilter(event.target.value)
        }
    }


    const reservations = useAppSelector((state) => state.reservationReducer.askedReservations);

    function isNull(list:(JSX.Element | null | undefined)[]):boolean {
        let res = true;
        for(let i in list) {
            if(list[i] !== null){
                res = false;
            }
        }

        return res;
    }

    const reservationsToDisplay = ():(JSX.Element | null | undefined)[] => {
        return (
            reservations.map((reservation) => {
                if(new Date(reservation.date) >= new Date(today.getFullYear(), today.getMonth(),today.getDate()-1)){
                    if(filters){
                        if(dateFilter&& postCodeFilter){
                            if((reservation.postalCode.toString().match(new RegExp(postCodeFilter+".[0-9]*"))?.toString().length === 5 || reservation.postalCode.toString() === postCodeFilter) && new Date(reservation.date) === dateFilter){
                                if((reservation.accepted === 1 && acceptedChecked) || (reservation.accepted === 0 && waitingChecked) || (reservation.accepted === -1 && refusedChecked)){
                                    return <AskedReservation reservation={reservation} key={reservation.id}></AskedReservation>
                                }
                                else {
                                    return null
                                }
                            }
                        } else if (dateFilter){
                            if(new Date(reservation.date) === dateFilter){
                                if((reservation.accepted === 1 && acceptedChecked) || (reservation.accepted === 0 && waitingChecked) || (reservation.accepted === -1 && refusedChecked)){
                                    return <AskedReservation reservation={reservation} key={reservation.id}></AskedReservation>
                                }
                                else {
                                    return null
                                }
                            }
                        } else if (postCodeFilter){
                            if(reservation.postalCode.toString().match(new RegExp(postCodeFilter+".[0-9]*"))?.toString().length === 5 || reservation.postalCode.toString() === postCodeFilter){
                                if((reservation.accepted === 1 && acceptedChecked) || (reservation.accepted === 0 && waitingChecked) || (reservation.accepted === -1 && refusedChecked)){
                                    return <AskedReservation reservation={reservation} key={reservation.id}></AskedReservation>
                                }
                                else {
                                    return null
                                }
                            }
                        } else {
                            if((reservation.accepted === 1 && acceptedChecked) || (reservation.accepted === 0 && waitingChecked) || (reservation.accepted === -1 && refusedChecked)){
                                return <AskedReservation reservation={reservation} key={reservation.id}></AskedReservation>
                            }
                            else {
                                return null
                            }
                        }
                    } else {
                        return <AskedReservation reservation={reservation} key={reservation.id}></AskedReservation>
                    }
                } else {
                    return null;
                }
            })
        )
    }

    const reservationsPassed = ():(JSX.Element | null | undefined)[] => {
        return(
            reservations.map((reservation) => {
            if(new Date(reservation.date) < new Date() && reservation.accepted === 1){
                if(filters){
                    if(acceptedChecked){
                        if(dateFilter && postCodeFilter){
                            if((reservation.postalCode.toString().match(new RegExp(postCodeFilter+".[0-9]*"))?.toString().length === 5 || reservation.postalCode.toString() === postCodeFilter) && new Date(reservation.date) === dateFilter){
                                return <AskedReservation reservation={reservation} key={reservation.id} disabled={true}></AskedReservation>
                            }
                        } else if (dateFilter){
                            if(new Date(reservation.date) === dateFilter){
                                return <AskedReservation reservation={reservation} key={reservation.id} disabled={true}></AskedReservation>
                            }
                        } else if (postCodeFilter){
                            if(reservation.postalCode.toString().match(new RegExp(postCodeFilter+".[0-9]*"))?.toString().length === 5 || reservation.postalCode.toString() === postCodeFilter){
                                return <AskedReservation reservation={reservation} key={reservation.id} disabled={true}></AskedReservation>
                            }
                        } else {
                            return <AskedReservation reservation={reservation} key={reservation.id} disabled={true}></AskedReservation>
                        }
                    } else {
                        return null;
                    }
                } else {
                    return <AskedReservation reservation={reservation} key={reservation.id} disabled={true}></AskedReservation>
                }
            } else {
                return null;
            }
        })
        )
    }

    return(
        <>
                <CenteredLayout>
                    <Typography variant={TypographyVariantEnum.h3}> Vos demandes de reservations : </Typography>
                    <Grid container justifyContent="flex-end">
                        <Grid item xs={1}>
                            <Button onClick={() => {setFilters(!filters)}}>Filtres</Button>
                        </Grid>
                    </Grid>
                    <CustomDivider spacingDown={5} />
                    <Fade show={filters} children={filterComponent()}/>
                    <>
                        {isNull(reservationsToDisplay())? <Typography variant="h5" sx={{margin:5}}>Aucune reservation en cours !</Typography>:reservationsToDisplay()}
                    </>
                    <Typography variant={TypographyVariantEnum.h4}> Vos demandes passées : </Typography>
                    <CustomDivider spacing={5} />
                    <>
                        {isNull(reservationsPassed())? <Typography variant="h5" sx={{margin:5}}>Aucune reservation passée !</Typography>:reservationsPassed()}
                    </>
                </CenteredLayout>
        </>
    )
}

export default AskedReservationsPage;

