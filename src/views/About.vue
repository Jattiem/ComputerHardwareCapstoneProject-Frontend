<template>
    <Navbar/>
    <section id="about" class="about vh-100">
        <h2>About</h2>
        <p class="par">A personal computer game (PC game) is a video game that is played on a personal computer rather than on a console. The game is controlled using PC input devices such as the keyboard, mouse, joystick, etc. PC games can be played with or without an Internet connection, and have been available since the introduction of personal computers. A large number of games are available for the PC platform.</p>
    </section>
    </template>
    <script>
    import Navbar from '@/components/Navbar.vue';
    export default {
        components: { Navbar }
    }
    </script>
    <style scoped>
    .page-link{
      color: rgba(0, 0, 0, 0.795);
    }
    section{
      background: linear-gradient(   red, blue);
    }
    h2{
        padding-top: 150px;
    }
    p{
        border: 1px solid gray;
        border-radius: 20px;
        margin-left: 150px;
        margin-right: 150px;
        display: flex;
        font-size: larger;
        justify-content: center;
        padding: 30px;
        border-radius: 10px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    }
 
    </style>