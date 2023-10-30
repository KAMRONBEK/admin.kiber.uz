import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const barChartOptions = {
    chart: {
        type: 'bar',
        height: 365,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '45%',
            borderRadius: 4
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Действовать', 'Договор', 'Фактура', 'Расширение прав и возможностей', 'Накладная', 'Акт проверки', 'Документ'],
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        show: false
    },
    grid: {
        show: false
    }
};

// ==============================|| MONTHLY BAR CHART ||============================== //

const MonthlyBarChart = () => {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const info = theme.palette.info.light;

    const [documents, setSeries] = useState([]);

    const [options, setOptions] = useState(barChartOptions);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://kiber.uz/api/admin/documents-statistics');
            const data = await response.json();
            setSeries([
                {
                    data: [
                        data.act.sent + data.act.summary + data.act.received,
                        data.contract.sent + data.contract.summary + data.contract.received,
                        data.factura.sent + data.factura.summary + data.factura.received,
                        data.empowerment.sent + data.empowerment.summary + data.empowerment.received,
                        data.waybill.sent + data.waybill.received + data.waybill.summary,
                        data.verificationAct.sent + data.verificationAct.received + data.verificationAct.summary,
                        data.document.sent + data.document.received + data.document.summary
                    ]
                }
            ]);
        };
        fetchData();
    }, []);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [info],
            xaxis: {
                labels: {
                    style: {
                        colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
                    }
                }
            },
            tooltip: {
                theme: 'light'
            }
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [primary, info, secondary]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={documents} type="bar" height={365} />
        </div>
    );
};

export default MonthlyBarChart;
