export default {
    startDate: new Date(),
    frequency: 'Monthly',
    numberOfIterations: 12,
    scopes: [
        {
            id:'001',
            name:'Plan'
        },
        {
            id:'002',
            name: 'Actual'
        },
        {
            id: '003',
            name: 'Forecast'
        }
        ],
    items: [
        {
            id:'101',
            name:'Lab 1'
        },
        {
            id:'102',
            name: 'Lab 2'
        },
        {
            id: '103',
            name: 'Lab 3'
        },
        {
            id:'104',
            name:'Lab 4'
        },
        {
            id:'105',
            name: 'Lab 5'
        },
        {
            id: '106',
            name: 'Lab 6'
        },
        {
            id:'107',
            name:'Lab 7'
        },
        {
            id:'108',
            name: 'Lab 8'
        },
        {
            id: '109',
            name: 'Lab 9'
        },
        {
            id: '110',
            name: 'Lab 10'
        }
        ],
    iterations: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [
        {
            scope: '001',
            item: '101',
            iteration: 0,
            value: 10
        },
        {
            scope: 0,
            item: 0,
            iteration: 1,
            value: 15
        }
    ]
};
