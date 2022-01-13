import React from "react";
import { IPopupOptionalProps } from "../../../components/MapComponent/common/Popup/popup.type";
import { IPopupMarkerProps } from "./PopupMarker.type";
import LocationUser from "./LocationUser/LocationUser";
import CustomDivider from "../../../components/CustomDivider/CustomDivider";
import { List, Typography } from "@mui/material";
import { TypographyVariantEnum } from "../../../utils/enum/typography.variant.enum";

const defaultProps: IPopupOptionalProps = {
    setSelectedPopupData: undefined
}

const PopupMarker = ({
    data,
    setSelectedPopupData
}: IPopupMarkerProps) => {

    return (
       <>
        <Typography variant={TypographyVariantEnum.h4} color="secondary">{data.city}</Typography>
        <Typography variant={TypographyVariantEnum.h5}>{data.postalCode}</Typography>
        <CustomDivider />
        <List>
        {data.locations.map(location => <LocationUser key={location.id} data={location} setSelectedPopupData={setSelectedPopupData} />)}
        </List>
       </>
    );
};

PopupMarker.defaultProps = defaultProps;

export default PopupMarker;