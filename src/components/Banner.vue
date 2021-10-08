<template>
    <div class="banner">
        <div class="content">
            <div class="banner-sale">
                <div class="banner-sale__title">
                    <img :src="sale" alt="">
                    <p>Скидка 50%</p>
                </div>
                <p id="subtitle-top" class="banner-sale__subtitle">На первое посещение компьютерного клуба</p>
                <p class="banner-sale__subtitle">А также каждые выходные персональные скидки!</p>
            </div>
            <div class="calendar">
                <div class="calendar-top">
                    <p>ПН</p>
                    <p>ВТ</p>
                    <p>СР</p>
                    <p>ЧТ</p>
                    <p>ПТ</p>
                    <p class="calendar-top__sale">СБ</p>
                    <p class="calendar-top__sale">ВС</p>
                </div>
                <div id="line-1" class="calendar-line vertical"></div>
                <div id="line-2" class="calendar-line vertical"></div>
                <div id="line-3" class="calendar-line vertical"></div>
                <div id="line-4" class="calendar-line vertical"></div>
                <div id="line-5" class="calendar-line vertical"></div>
                <div id="line-6" class="calendar-line vertical"></div>
                <div id="line-7" class="calendar-line horisontal"></div>
                <div id="line-8" class="calendar-line horisontal"></div>
                <div id="line-9" class="calendar-line horisontal"></div>
                <div id="line-10" class="calendar-line horisontal"></div>
                <div class="calendar-cage">
                    <p v-for="i in 31">{{i}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import banner from '../assets/banner.png'
    import sale from '../assets/sale.svg'


    export default {
        name: 'Banner',
        data(){
            return{
                banner, sale
            }
        }
    }
</script>

