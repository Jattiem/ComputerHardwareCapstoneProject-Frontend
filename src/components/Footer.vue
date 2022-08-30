<template>
    <footer id="footer" class="bg-light">
        <div class="container">
            <ul class="wrapper">
  <li class="icon facebook">
    <span class="tooltip">Facebook</span>
    <span><i class="bi bi-facebook"></i></span>
  </li>
  <li class="icon instagram">
    <span class="tooltip">Instagram</span>
    <span> <i class="bi bi-instagram"></i></span>
  </li>
  <li class="icon github">
    <span class="tooltip">Github</span>
    <span> <i class="bi bi-github"></i></span>
  </li>
  <li class="icon youtube">
    <span class="tooltip">Youtube</span>
    <span><i class="bi bi-youtube"></i></span>
  </li>
</ul>
            <hr>
            <div class="pb-2">
                Copyright © 2022 All Rights Reserved by Yaseen Jattiem
            </div>
        </div>
    </footer>
    </template>
    
    <script>
    export default {
    }
    </script>
    
    <style>
.wrapper {
  display: inline-flex;
  list-style: none;
  margin-bottom: -7px;
}

.wrapper .icon {
  position: relative;
  background: #ffffff;
  border-radius: 50%;
  padding: 10px;
  margin: 10px;  
  margin-top: 20px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background: #1877F2;
  color: #ffffff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background: #1DA1F2;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background: #E4405F;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background: #333333;
  color: #ffffff;
}

.wrapper .youtube:hover,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip::before {
  background: #CD201F;
  color: #ffffff;
}

    /* .icons{
        padding-top: 15px;
        font-size: larger;
    }
    i:hover{
        color: black;
        transition: all 0.3s ease-in-out;
    }
    i{
        padding: 10px;
    } */
    #footer{
        width: 100%;
        bottom: 0;
        position: fixed;
    }
    </style>