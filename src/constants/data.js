import images from "./images"

const data = {
    user: {
        name: 'Diego',
        img: images.avt
    },
    summary: [
        {
            title: 'Ventas',
            subtitle: 'Total de ventas este mes',
            value: '$1.000',
            percent: 70
        },
        {
            title: 'Usuarios',
            subtitle: 'Total usuarios registrados en el sistema',
            value: '$678',
            percent: 38
        },       
        {
            title: 'Productos',
            subtitle: 'Total de productos disponibles',
            value: '2345',
            percent: 55
        },
        {
            title: 'Categorias',
            subtitle: 'Total de categorias',
            value: '3000',
            percent: 38
        }
    ],
    //Barra derecha consolidados
    overall: [
        {
            value: '10',
            title: 'Usuarios'
        },
        {
            value: '30',
            title: 'Productos'
        },
        {
            value: '5',
            title: 'Categorías'
        }
    ]
}

export default data