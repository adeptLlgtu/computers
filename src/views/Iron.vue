<template>
    <div class="iron">
        <h2>Оборудование</h2>
        <div class="iron-item">
            <div class="iron-item__info">
                <h3>Монитор MSI</h3>
                <p>тип матрицы: <span>IPS</span></p>
                <p>частота обновления: <span>144 Гц</span></p>
                <p>покрытие экрана: <span>антибликовое, матовое</span></p>
            </div>
            <img :src="monitor" alt="">
        </div>
        <div class="iron-item">
            <div class="iron-item__info">
                <h3>Игровой системный блок</h3>
                <p>ОЗУ: <span>32 Гб</span></p>
                <p>процессор: <span>AMD Ryzen 7 3200</span></p>
                <p>видеокарта: <span>Nvidia 1660 TI 4 Gb</span></p>
                <p>система охлаждения: <span>водяная</span></p>
            </div>
            <img :src="comp" alt="">
        </div>
        <div class="iron-item">
            <div class="iron-item__info">
                <h3>Клавиатура Steelseries</h3>
            </div>
            <img :src="keyboard" alt="">
        </div>
        <div class="iron-item">
            <div class="iron-item__info">
                <h3>Игровая мышь Bloody</h3>
            </div>
            <img id="mouse" :src="mouse" alt="">
        </div>
    </div>
</template>

<script>
    import monitor from '../assets/monitor.png'
    import comp from '../assets/comp.png'
    import keyboard from '../assets/keyboard.png'
    import mouse from '../assets/mouse.png'


    export default {
        name: "iron",
        components: {},
        data(){
            return{
                monitor, comp, keyboard, mouse
            }
        }
    }
</script>

<style scoped>

</style>