<template>
    <div class="order">
        <div class="content">
            <form action="">
                <label for="date">Выберите дату:</label>
                <input id="date" type="date">
                <label for="time">Выберите время:</label>
                <input id="time" type="time">
                <label for="how-time">Какое количество времени Вы хотите у нас провести? (ч)</label>
                <input id="how-time" type="number">
                <button>Забронировать</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Order"
    }
</script>

<style scoped>

</style>