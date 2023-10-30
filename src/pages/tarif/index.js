import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import MainCard from 'components/MainCard';
import TarifTable from 'pages/dashboard/TarifTable';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
const Tarif = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Тарифы</Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={(e) => {
                                navigate('create');
                            }}
                        >
                            Создать тариф
                        </Button>
                    </Grid>
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <TarifTable />
                </MainCard>
            </Grid>
        </div>
    );
};

export default Tarif;
