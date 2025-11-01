<template>
    <div class="container mt-5 col-md-4">
        <h3>iniciar Seson</h3>
        <input v-model ="usuario" class="form-control mb-2" placeholder="Usuario" />
        <input v-model ="clave" type="password" class="form-control mb-2" placeholder="Contraseña" />
        <button class="btn btn-primary w-100" @click="login">Entrar</button>
        <p v-if="error" class="text-danger mt-2">{{ error }}</p>
    </div> 
</template>

<script>
export default{
    data(){
        return {usuario: '', clave: '', error: ''}
    },
    methods: {
        login() {
            const users = [
                {user: 'admin', pass: '1234'},
                {user: 'jerson', pass: '5678'}
            ]
            const valido = users.find(u => u.user ===  this.usuario && u.pass === this.clave)
            if (valido) {
                localStorage.setItem('logueado', 'true')
                this.$router.push('/dashboard/productos')
            }else {
                this.error = 'Credenciales Incorrectas'
            }
        }
    }
}
</script>