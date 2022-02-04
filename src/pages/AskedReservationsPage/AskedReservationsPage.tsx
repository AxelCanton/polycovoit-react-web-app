import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AskedReservation from "../../components/Reservation/AskedReservation";
import { askedReservationFetch } from "../../thunks/ReservationThunk";
import CenteredLayout from "../../components/Layout/CenteredLayout/CenteredLayout";
import { Button, Checkbox, Grid, Stack, TextField, Typography } from "@mui/material";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocationSearchInput from "../../components/SearchInput/LocationSearchInput/LocationSearchInput";
import Collapse from "../../components/Transitions/Collapse/Collapse";
import { IReservation } from "../../components/Reservation/reservation.type";
import Fade from "../../components/Transitions/Fade/Fade";

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
            return(
                <>
                    <Stack justifyContent="flex-start" spacing={4}>
                        <Grid container justifyContent="space-evenly">
                            <Grid item xs={4}>
                                Acceptées <Checkbox color="success" checked={acceptedChecked} onChange={handleAcceptChange}></Checkbox>
                            </Grid>
                            <Grid item xs={4}>
                                En attente <Checkbox color="primary" checked={waitingChecked} onChange={handleWaitingChange}></Checkbox>
                            </Grid>
                            <Grid item xs={4}>
                                Refusées <Checkbox color="error" checked={refusedChecked} onChange={handleRefusedChange}></Checkbox>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-start">
                        <Grid item xs={5}> 
                            <LocationSearchInput label="Ville" postalCodeOnly onInputChange={handlePostCodeChange}/>
                        </Grid>
                        <Grid xs={3}></Grid>
                        <Grid item xs={4}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                            label="Rechercher par date"
                            inputFormat="dd/MM/yyyy"
                            value={dateFilter}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} sx={{ width: 'auto' }} />}
                            />
                            </LocalizationProvider>
                        </Grid>
                        </Grid>
                    </Stack>
                    <CustomDivider spacing={5} />
                </>
            );
    }

    const [dateFilter, setDateFilter] = useState<Date | null>(null);
    const [postCodeFilter, setPostCodeFilter] = useState<string>("");

    const handleDateChange = (newValue: Date | null) => {
        setDateFilter(newValue);
    };

    const handlePostCodeChange = (value: string) => {
        setPostCodeFilter(value);
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
        const dateCond = (reservation: IReservation) => {
            const date = new Date(reservation.date);
            return dateFilter !== null && date.getDate() === dateFilter.getDate() && date.getMonth() === dateFilter.getMonth() && date.getFullYear() === dateFilter.getFullYear();
        }
        const postalCodeCond = (reservation: IReservation) => postCodeFilter !== "" && (reservation.postalCode.toString().match(new RegExp(`${postCodeFilter}[0-9]*`, 'g')) !== null);
        const statusCond = (reservation: IReservation) => (reservation.accepted === 1 && acceptedChecked) || (reservation.accepted === 0 && waitingChecked) || (reservation.accepted === -1 && refusedChecked)
        const mainCond = (reservation: IReservation) =>
            new Date(reservation.date) >= new Date(today.getFullYear(), today.getMonth(),today.getDate()-1) && (!filters || (
                (!dateFilter || dateCond(reservation)) &&
                (!postCodeFilter || postalCodeCond(reservation)) &&
                statusCond(reservation)));
        return reservations.map((reservation) => mainCond(reservation) ? <AskedReservation reservation={reservation} key={reservation.id}></AskedReservation> : null);
            
    }

    const reservationsPassed = ():(JSX.Element | null | undefined)[] => {
        return(
            reservations.map((reservation) => {
            if(new Date(reservation.date) < new Date(today.getTime() - 24 * 60 * 60 * 1000) && reservation.accepted === 1){
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
        <Fade>
                <CenteredLayout>
                    <Typography variant={TypographyVariantEnum.h3}> Vos demandes de contact </Typography>
                    <Grid container justifyContent="flex-end">
                        <Grid item xs={1}>
                            <Button onClick={() => {setFilters(!filters)}}>Filtres</Button>
                        </Grid>
                    </Grid>
                    <CustomDivider spacingDown={5} />
                    <Collapse show={filters}>
                        {filterComponent()}
                    </Collapse>
                    <>
                        {isNull(reservationsToDisplay())? <Typography variant="h5" sx={{margin:5}}>Aucune demande en cours !</Typography>:reservationsToDisplay()}
                    </>
                    <Typography variant={TypographyVariantEnum.h4}> Vos demandes passées </Typography>
                    <CustomDivider spacing={5} />
                    <>
                        {isNull(reservationsPassed())? <Typography variant="h5" sx={{margin:5}}>Aucune demande passée !</Typography>:reservationsPassed()}
                    </>
                </CenteredLayout>
        </Fade>
    )
}

export default AskedReservationsPage;

