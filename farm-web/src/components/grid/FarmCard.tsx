import * as React from 'react';
import Box from '@mui/material/Box';
import {Farm} from "../../reducers/EntityTypes";
import {Paper, styled, TextField, Typography} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: 40,
    lineHeight: '60px',
    maxWidth: '130px'
}));

const Card = (props: {label:String, value:String|number}) => {
    const {label, value} = props
    return (
        <Item elevation={4} style={{padding: "4px"}}>
            <div>
                <Typography variant="caption" component="h2">
                    {label}
                </Typography>
                <Typography variant="body2" component="h2">
                    {value}
                </Typography>
            </div>
        </Item>
    );
}
const FarmCard = (props: {farmData:Farm}) => {
    const {farmData} = props
    return (
        <Box
            sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr 1fr' },
                gap: 2,
            }}
        >
            <Card label={"ID"} value={farmData.id} />
            <Card label={"Name"} value={farmData.name} />
            <Card label={"Address"} value={farmData.address} />
            <Card label={"City"} value={farmData.city} />
            <Card label={"State"} value={farmData.state} />
            <Card label={"Postal Code"} value={farmData.postalCode} />
            <Card label={"Total Animals"} value={farmData.totalAnimal} />
        </Box>
    );
}

export default FarmCard;