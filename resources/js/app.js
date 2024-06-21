import './bootstrap';
import { createApp } from 'vue'
import Navbar from '../components/NavbarComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import SliderComponent from '../components/SliderComponent.vue';
import IntroComponent from '../components/IntroComponent.vue'
import ServicioComponent from '../components/ServicioComponent.vue'
import Mapa from '../components/MapaComponent.vue'
import Footer from '../components/FooterComponent.vue'
import Store from '../components/StoreComponent.vue'
import Contacto from '../components/ContactoComponent.vue'
import Spect from '../components/EspecComponent.vue'
import Prueba from '../components/PruebaComponent.vue'

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import 'bootstrap'; // Importa el JS de Bootstrap

const app = createApp()


app.component('navbar', Navbar)
app.component('headercomponent', HeaderComponent)
app.component('slider', SliderComponent)
app.component('intro', IntroComponent)
app.component('servicio', ServicioComponent)
app.component('mapa', Mapa)
app.component('pie', Footer)
app.component('store', Store)
app.component('contacto', Contacto)
app.component('spec', Spect)
app.component('prueba', Prueba)
app.mount('#app')
