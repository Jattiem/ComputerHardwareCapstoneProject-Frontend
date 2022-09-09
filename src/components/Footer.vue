<template>
    <footer id="footer" class="bg-dark fixed-bottom">
        <div class="container">
          <div class="rounded-social-buttons">
                    <a class="social-button facebook" href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook"></i></a>
                    <a class="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i class="bi bi-linkedin"></i></a>
                    <a class="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="bi bi-youtube"></i></a>
                    <a class="social-button github" href="https://github.com/Jattiem/ComputerHardwareCapstoneProject-Frontend" target="_blank"><i class="bi bi-github"></i></a>
                </div>
            <hr>
            <div class="pb-2 copyright">
                Copyright © 2022 All Rights Reserved by Yaseen Jattiem
            </div>
        </div>
    </footer>
    </template>
    
    <script>
    export default {
    }
    </script>
    
    <style scoped>
footer{
  border-top: 2px solid blue;
  width: 100%;
  bottom: 0;
}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
}

.svg-inline--fa {
  vertical-align: -0.200em;
}

.rounded-social-buttons {
  text-align: center;
  padding-top: 10px;
  /* padding-bottom: -11px; */
  margin-bottom: -11px;
}

.rounded-social-buttons .social-button {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 3.110rem;
  height: 3.110rem;
  border: 0.125rem solid transparent;
  padding: 0;
  text-decoration: none;
  text-align: center;
  color: #fefefe;
  font-size: 1.5625rem;
  font-weight: normal;
  line-height: 2em;
  border-radius: 1.6875rem;
  transition: all 0.5s ease;
  margin-right: 0.40rem;
  margin-bottom: 0.25rem;
}

.rounded-social-buttons .social-button:hover, .rounded-social-buttons .social-button:focus {
  -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
          transform: rotate(360deg);
}

.rounded-social-buttons .fa-twitter, .fa-facebook-f, .fa-linkedin, .fa-youtube, .fa-instagram {
  font-size: 25px;
}

.rounded-social-buttons .social-button.facebook {
  background: #3b5998;
}

.rounded-social-buttons .social-button.facebook:hover, .rounded-social-buttons .social-button.facebook:focus {
  color: #3b5998;
  background: #fefefe;
  border-color: #3b5998;
}

.rounded-social-buttons .social-button.linkedin {
  background: #007bb5;
}

.rounded-social-buttons .social-button.linkedin:hover, .rounded-social-buttons .social-button.linkedin:focus {
  color: #007bb5;
  background: #fefefe;
  border-color: #007bb5;
}

.rounded-social-buttons .social-button.youtube {
  background: #bb0000;
}

.rounded-social-buttons .social-button.youtube:hover, .rounded-social-buttons .social-button.youtube:focus {
  color: #bb0000;
  background: #fefefe;
  border-color: #bb0000;
}

.rounded-social-buttons .social-button.github {
  background: rgb(27, 22, 22);
}

.rounded-social-buttons .social-button.github:hover, .rounded-social-buttons .social-button.github:focus {
  color: rgb(43, 39, 39);
  background: #fefefe;
  border-color: rgb(43, 39, 39);
}

    #footer{
        width: 100%;
        bottom: 0;
    }
    hr{
      color: white;
    }
.copyright{
  color: white;
}
    </style>