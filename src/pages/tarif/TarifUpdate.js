import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, TextField, TextareaAutosize, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
const TarifUpdate = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState('');
    const [limit, setLimit] = useState(0);
    const navigate = useNavigate();
    const { idTarif } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://kiber.uz/api/admin/tariff/detail/${idTarif}`);
            const data = await response.json();
            setName(data.name.uz);
            setPrice(data.price);
            setDescription(data.description.uz);
            setLimit(data.limit);
        };
        fetchData();
    }, []);
    const handleSubmit = async (e) => {
        const body = {
            name: {
                en: name,
                uz: name
            },
            description: {
                en: description,
                uz: description
            },
            price: parseFloat(price),
            limit: Number(limit)
        };
        e.preventDefault();
        const response = await fetch(`https://kiber.uz/api/admin/tariff/update/${idTarif}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(JSON.stringify(body));

        if (response.ok) {
            navigate(-1);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <Stack p={4} py={10} sx={{ border: '1px solid gray', width: '60%', margin: 'auto', gap: '1rem' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h3">Изменить тариф</Typography>
                </Box>
                <Stack direction="row" justifyContent="center" gap="1rem">
                    <TextField label="Имя" value={name} onChange={(e) => setName(e.target.value)} sx={{ width: '250px' }} required />
                    <TextField
                        type="number"
                        label="Цена"
                        sx={{ width: '250px' }}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </Stack>
                <Stack direction="row" justifyContent="center">
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Description"
                        style={{ width: 516, height: 200, padding: 10, fontFamily: 'inherit' }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Stack>
                <Stack direction="row" justifyContent="center" gap="1rem">
                    <TextField
                        type="number"
                        label="Лимит"
                        value={limit}
                        onChange={(e) => setLimit(e.target.value)}
                        sx={{ width: '300px' }}
                        required
                    />
                </Stack>
                <Stack direction="row" justifyContent="center">
                    <Button type="submit" variant="contained" size="large">
                        Изменять
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
};

export default TarifUpdate;
