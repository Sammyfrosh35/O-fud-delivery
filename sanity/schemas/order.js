export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            Options: {
                maxLength: 40
            }
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
            Options: {
                maxLength: 15
            }
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            Options: {
                maxLength: 100
            }
        },
        {
            name: 'method',
            title: 'Method',
            type: 'number',
        },
        {
            name: 'total',
            title: 'Total',
            type: 'number',
        },
        {
            name: 'status',
            title: 'Status',
            type: 'number',
        },
    ]
    

    

  
}
