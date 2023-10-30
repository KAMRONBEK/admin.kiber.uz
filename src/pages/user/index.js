import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Grid,
    TextField,
    MenuItem
} from '@mui/material';
import MainCard from 'components/MainCard';
import SalesColumnChart from 'pages/dashboard/SalesColumnChart';

const headCells = [
    {
        id: 'act',
        align: 'center',
        disablePadding: false,
        label: 'Действовать'
    },
    {
        id: 'invoice',
        align: 'center',
        disablePadding: true,
        label: 'Счет'
    },
    {
        id: 'contract',
        align: 'center',
        disablePadding: false,
        label: 'Договор'
    },
    {
        id: 'empowerment',
        align: 'center',
        disablePadding: false,
        label: 'Расширение прав и возможностей'
    }
];

const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

function OrderTableHead() {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id} align={headCell.align} padding={headCell.disablePadding ? 'none' : 'normal'}>
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const User = () => {
    const { id } = useParams();
    const [dataDoc, setDataDoc] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://kiber.uz/api/admin/documents-statistics/${id}`);
            const data = await response.json();
            console.log({ data });
            setDataDoc(data);
        };
        fetchData();
    }, []);
    console.log({ dataDoc });
    return (
        <Box>
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Сведения о пользователе</Typography>
                    </Grid>
                </Grid>
                <MainCard sx={{ mt: 1.75 }}>
                    <Stack spacing={1.5} sx={{ mb: -12 }}>
                        <Typography variant="h6" color="secondary">
                            Общие документы
                        </Typography>
                        <Typography variant="h4">8</Typography>
                    </Stack>
                    {dataDoc && <SalesColumnChart data={dataDoc} />}
                </MainCard>
            </Grid>
        </Box>
    );
};

export default User;
