<template>
    <div class="order">
        <div class="content">
            <form id="order-form" action="">
                <label for="date">Выберите дату:</label>
                <input id="date" name="session_date" type="date">
                <label for="time">Выберите время:</label>
                <input id="time" name="session_time" type="time">
                <label for="how-time">Какое количество времени Вы хотите у нас провести? (ч)</label>
                <input id="how-time" name="session_count" type="number">
                <button @click="tickets">Забронировать</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Order",
        methods:{
            tickets(e){
                    let form = document.querySelector('#order-form')
                    form.onsubmit = async (e) => {
                        e.preventDefault();
                        let formData = new FormData(form)
                        let response = await fetch('http://computers-api.loc:8080/api/tickets', {
                            method: 'POST',
                            body: formData
                        });
                        window.location.pathname = '/main'
                    }
                }

        }
    }
</script>

<style scoped>

</style>