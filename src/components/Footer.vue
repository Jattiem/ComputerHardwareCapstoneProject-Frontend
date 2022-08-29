<template>
    <footer id="footer" class="bg-light">
        <div class="container">
            <div class="icons">
                    <i class="bi bi-github"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-pinterest"></i>
            </div>
            <hr>
            <div>
                Copyright © 2022 All Rights Reserved by Monique & Yaseen.
            </div>
        </div>
    </footer>
    </template>
    
    <script>
    export default {
    }
    </script>
    
    <style>
    .icons{
        padding-top: 15px;
        font-size: larger;
    }
    i:hover{
        color: black;
        transition: all 0.3s ease-in-out;
    }
    i{
        padding: 10px;
    }
    #footer{
        width: 100%;
        /* height: 70%; */
        bottom: 0;
        position: fixed;
    }
    </style>