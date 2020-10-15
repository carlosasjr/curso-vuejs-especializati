import homeComponent from '../components/home/homeComponent'
import productComponent from '../components/products/productComponent'
import productCreateComponent from '../components/products/productCreateComponent'

export default [ 
    {path: '/', component: homeComponent, name:'home'},
    {path: '/products', component: productComponent, name:'products'},
    {path: '/products/create', component: productCreateComponent, name:'productsCreate'},
    {path: '/products/:id/edit', component: productCreateComponent, name:'productsEdit', props: true},
]