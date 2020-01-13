// start app2
/*##region */

var app2 = new Vue({
    el: '#app02',
    data: {
        datas: "oi",
        arrayData: []
    },

    methods: {

    }
})


// end app2

// -------------------------------------------------//-----------------------------

//star app3
Vue.component('my-component', {
    template: `<div> Home Page criada como componet </div> `
})
const Home = {
    //usando component ao passar objto.
    template: `<my-component></my-component>`
}
const About = {
        template: `<div> About Page <div/>`
    }
    //lista com objetos que tem a configuração da rota
const routes = [
        { path: '/home', component: Home },
        { path: '/about', component: About }

    ]
    //iniciar o roteador criando uma variavel para armazenar  o roteador
const router = new VueRouter({ routes })

var app3 = new Vue({
    el: '#app03',
    router,
    data: {
        datas3: "sou a var datas3"
    },
    methods: {}
})



//and app3

// -------------------------------------------------//-----------------------------