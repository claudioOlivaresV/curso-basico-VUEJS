Vue.component('CoinDetail', {
    // props: ['changePercent', 'title', 'img', 'name', 'price'],
    props: ['coin'],

    data () {
        return {
            showPrices: false,
            value: 0
        }
    },
    created(){
        // ideal para consumir api
        console.log('created component');

    },

    mounted(){
        // ya tengo disponible en el DOM
        console.log('mounted componente');

    },
    methods: {

        toggleShowPrices(){
            this.showPrices = !this.showPrices;
            this.$emit('change-color', 'f4f4f4')

        }

    },
    computed: {
        title() {
            return `${this.coin.name } - ${this.coin.symbol}`
        },
        converterValue(){
            if(!this.value){
                return 0
            }

            return this.value / this.coin.price

        }
    },
    template:
        `<div>
        <img v-on:mouseover="toggleShowPrices" v-on:mouseout="toggleShowPrices" :src="coin.img" :alt="coin.name">
 
        <h1 v-bind:class="coin.changePercent > 0 ? 'green': 'red'">
           {{title}}
           <span v-if="coin.changePercent > 0">👍🏻</span>
           <span v-else>👎🏻</span>
           <!-- <span v-show="coin.changePercent === 0">🧑🏻</span> -->
           <span v-on:click="toggleShowPrices">
            {{showPrices ? 'ocultar': 'ver'}}
        </span>
        

        </h1>
        <input type="number" v-model="value">
        <span>{{converterValue}}</span>
        <slot name="text"></slot>
        <slot name="link"></slot>

        <ul v-show="showPrices">
        <li v-for="(p,i) in coin.pricesWithDays" :key="p.day"
         v-bind:class="{orange: p.value === coin.price, red: p.value < coin.price, green: p.value > coin.price }">
            {{i}}-{{p.day}}-{{p.value}}
        </li>
    </ul>
        </div>`
})

new Vue({
    el: '#app',

    data () {
        return {
            btc: {
                name: 'Bitcoin',
                symbol: 'BTC',
                img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: -10,
                price: 8400,
               
                pricesWithDays: [
                    { day: 'Lunes', value: 8400 },
                    { day: 'Martes', value: 7900 },
                    { day: 'Miercoles', value: 8200 },
                    { day: 'Jueves', value: 9000 },
                    { day: 'Viernes', value: 9400 },
                    { day: 'Sabado', value: 10000 },
                    { day: 'Domingo', value: 10200 },
                ],
            },
            color: 'f4f4f4',
            
            
        }
    },
    created(){
        // ideal para consumir api
        console.log('created');

    },

    mounted(){
        // ya tengo disponible en el DOM
        console.log('mounted');

    },
  
    methods: {

        updateColor (color){
            this.color = color || this.color.split('').reverse().join('')

        }

    }
   
})
