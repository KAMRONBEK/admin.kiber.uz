import { useEffect, useState } from 'react';

// material-ui
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { Delete, ModeEdit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'name',
        align: 'center',
        disablePadding: false,
        label: 'Имя'
    },
    {
        id: 'price',
        align: 'center',
        disablePadding: false,
        label: 'Цена'
    },
    {
        id: 'description',
        align: 'center',
        disablePadding: true,
        label: 'Описание'
    },
    {
        id: 'limit',
        align: 'center',
        disablePadding: false,
        label: 'Лимит'
    },
    {
        id: 'edit',
        align: 'center',
        disablePadding: false,
        label: 'Редактировать/Удалить'
    }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

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

export default function TarifTable() {
    const [tableData, setTableData] = useState([]);
    const navigate = useNavigate();
    const handleDelete = async (id) => {
        const response = await fetch(`https://kiber.uz/api/admin/tariff/delete/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            const response = await fetch('https://kiber.uz/api/admin/tariff/list');
            const data = await response.json();
            setTableData(data);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://kiber.uz/api/admin/tariff/list');
            const data = await response.json();
            setTableData(data.data);
        };

        fetchData();
    }, []);
    return (
        <Box>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' }
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    sx={{
                        '& .MuiTableCell-root:first-child': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-child': {
                            pr: 3
                        }
                    }}
                >
                    <OrderTableHead />
                    <TableBody>
                        {tableData.map((row, index) => {
                            return (
                                <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={row.id}>
                                    <TableCell component="th" id={row.id} scope="row" align="center">
                                        {row.name.uz}
                                    </TableCell>
                                    <TableCell component="th" id={row.id} scope="row" align="center">
                                        {row.price}
                                    </TableCell>
                                    <TableCell align="center">{row.description.uz}</TableCell>
                                    <TableCell align="center">{row.limit}</TableCell>
                                    <TableCell align="center" sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                        <Button variant="contained" onClick={() => navigate(`${row.id}`)}>
                                            <ModeEdit />
                                        </Button>
                                        <Button variant="contained" color="error" onClick={(e) => handleDelete(row.id)}>
                                            <Delete />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
