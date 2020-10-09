import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'
import Page404Component from './components/Page404Component'


export default [
    {path: '/', component: HomeComponent, name: 'home'},    
    {path: '/products', component: ProductsComponent, name: 'products'},
    {path: '/tasks', component: TasksComponent, name: 'tasks'},
    {path: '/task/:id', component: TasksComponent, name: 'task', props: true},
    
    //redirecionamento
    {path: '/produto', redirect: 'products'},

    //Page not found
    {path: '*', component: Page404Component},

]