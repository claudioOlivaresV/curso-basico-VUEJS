new Vue({
    el: '#app',

    data () {
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: -10,
            price: 8400,
            color: 'f4f4f4',
            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sabado', value: 10000 },
                { day: 'Domingo', value: 10200 },
            ],
            showPrices: false,
            value: 0
            
            
        }
    },
    //se actualizan automanticamente si alguno de los dos cambian
    computed: {
        title() {
            return `${this.name } - ${this.symbol}`
        },
        converterValue(){
            if(!this.value){
                return 0
            }

            return this.value / this.price

        }
    },
    // ve si existe algun cambio
    watch: {
        showPrices(newVal, oldVal){
            console.log(newVal, oldVal);
        }

    },
    methods: {

        toggleShowPrices(){
            this.color = this.color.split('').reverse().join('')
            this.showPrices = !this.showPrices;

        }

    }
})