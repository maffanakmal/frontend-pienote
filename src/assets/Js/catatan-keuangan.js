export const catatanLinks = [
    {
        id: 1,
        path: "pemasukan",
        text: "Pemasukan",
    },
    {
        id: 2,
        path: "pengeluaran",
        text: "Pengeluaran",
    },
    {
        id: 3,
        path: "laporan",
        text: "Laporan",
    },
];

export const columns = [
    {
        name: 'Tanggal', // Correctly using 'name' for the column header
        selector: row => row.date, // Correctly selecting the 'info' field
    },
    {
        name: 'Keterangan', // Correctly using 'name' for the column header
        selector: row => row.info, // Correctly selecting the 'info' field
    },
    {
        name: 'Nominal', // Correctly using 'name' for the column header
        selector: row => row.nominal, // Correctly selecting the 'nominal' field
    },
];

export const data = [
    {
        id: 1,
        date: '2023-05-24',
        info: 'Transfer dari yuli',
        nominal: '1000', // Assuming 'nominal' should contain some numeric value or description
    },
    {
        id: 2,
        date: '2023-05-24',
        info: 'Purchase of goods',
        nominal: '2000',
    },
    {
        id: 3,
        date: '2023-05-24',
        info: 'Refund received',
        nominal: '1500',
    },
    {
        id: 4,
        date: '2023-05-24',
        info: 'Miscellaneous expenses',
        nominal: '500',
    },
    {
        id: 5,
        date: '2023-05-24',
        info: 'Income from investment',
        nominal: '3000',
    },
];
