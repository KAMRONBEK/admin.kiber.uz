import { useEffect, useState } from 'react';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'tin',
        align: 'center',
        disablePadding: false,
        label: 'БАНКА'
    },
    {
        id: 'account',
        align: 'center',
        disablePadding: false,
        label: 'Счет'
    },
    {
        id: 'balance',
        align: 'center',
        disablePadding: true,
        label: 'Баланс'
    },
    {
        id: 'email',
        align: 'center',
        disablePadding: false,
        label: 'Электронная почта'
    },
    {
        id: 'fullName',
        align: 'center',
        disablePadding: false,

        label: 'Полное имя'
    },
    {
        id: 'mfo',
        align: 'center',
        disablePadding: false,
        label: 'МФО'
    },
    {
        id: 'phone',
        align: 'center',
        disablePadding: false,
        label: 'Телефон'
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

export default function OrderTable() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://kiber.uz/api/admin/user/list');
            const { data } = await response.json();
            setTableData(data);
        };

        fetchData();
    }, []);

    const navigate = useNavigate();

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
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    onClick={() => navigate(`${row.tin}`)}
                                >
                                    <TableCell component="th" id={row.id} scope="row" align="center">
                                        -{row.tin === '' ? '-' : row.tin}
                                    </TableCell>
                                    <TableCell component="th" id={row.id} scope="row" align="center">
                                        {row.account === '' ? '-' : row.account}
                                    </TableCell>
                                    <TableCell align="center">{row.balance}</TableCell>
                                    <TableCell align="center">{row.email === '' ? '-' : row.email}</TableCell>
                                    <TableCell align="center">{row.fullName === '' ? '-' : row.fullName}</TableCell>
                                    <TableCell align="center">{row.mfo === '' ? '-' : row.mfo}</TableCell>
                                    <TableCell align="center">{row.phone === '' ? '-' : row.phone}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
