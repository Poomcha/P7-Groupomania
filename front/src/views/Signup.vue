<template>
    <div class="login">
        <label id="email-label" for="email">Email : </label>
        <input id="email-input" type="text" v-model="email"/>
        <p>{{ email }}</p>
        <label id="pwd-label" for="password">Password : </label>
        <input id="pwd-input" type="text" v-model="password"/>
        <p>{{ password }}</p>
        <label id="pwd-confirmation-label" for="pwd-confirmation-id">Confirm Password : </label>
        <input id="pwd-confirmation-input" type="text">
        <button id="submit-login" @click="signupUser(email, password)">Submit</button>
    </div>
</template>

<script>
// import {  mapActions } from "vuex";
export default {
    name: 'Signup',
    data: () => {
        return {
            email: '',
            password: ''
        }
    },
    computed: {}, 
    methods: {
        // ...mapActions({signupUser: 'signupUser'})
        signupUser(email, password) {
            // console.log(email + ' ' + password);
            fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        }).then(() =>
            console.log(
            'User signed up, email : ' + email + ', password : ' + password
            )
        );
        }
    }
}
</script>