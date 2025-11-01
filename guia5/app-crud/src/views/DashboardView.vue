<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="navbar-brand ps-3">Panel</div>
            <ul class="navbar-nav">
                <li class ="nav-item"><router-link to="/productos" class="nav-link">Productos</router-link></li>
                <li class="nav-item"><a @click="logout" class="nav-link">Cerrar Sesion</a></li>
            </ul>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem('logueado')
            this.$router.push('/')
        }
    }
}
</script>