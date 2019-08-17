body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('achievement.gif');
            background-repeat: no-repeat;
            /*height: 100vh;*/
            height: 100%;
            background-size: cover;
            background-position: center;
        }

        table 
        {
            border-collapse: collapse;
        }

        table, td, th {
          border: 5px solid darkkhaki;
        }

        h2{
            color:lightgrey;
        }

        #divEdu {
            width: 50%;
            /*border: 5px solid darkkhaki;*/
            margin-bottom: 50px;
            margin-left: 25%;
        }

        #divIntro {
            text-align: center;
            padding-top: 200px;
        }

        tr,td,th {
            color: lightcyan;
        }

        .topnav {
            overflow: hidden;
            background-color: E9E8E8;
        }

            .topnav a {
                float: left;
                display: block;
                color: #f2f2f2;
                text-align: center;
                padding: 14px 9px;
                text-decoration: none;
                font-size: 15px;
                font-family: cursive;
            }

                .topnav a:hover {
                    background-color: #ddd;
                    color: black;
                }

                .topnav a.active {
                    background-color: #4CAF50;
                    color: white;
                }

            .topnav .icon {
                display: none;
            }

        @media screen and (max-width: 600px) {
            .topnav a:not(:first-child) {
                display: none;
                height: 100%;
            }

            .topnav a.icon {
                float: right;
                display: block;
            }
        }

        @media screen and (max-width: 600px) {
            .topnav.responsive {
                position: relative;
                height: 100%;
            }

                .topnav.responsive .icon {
                    position: absolute;
                    right: 0;
                    top: 0;
                }

                .topnav.responsive a {
                    float: none;
                    display: block;
                    text-align: left;
                }
        }

        body {
            padding: 40px;
        }

        /* Animation */

        @keyframes fadeInUp {
            from {
                transform: translate3d(0,40px,0);
            }

            to {
                transform: translate3d(0,0,0);
                opacity: 1;
            }
        }

        @-webkit-keyframes fadeInUp {
            from {
                transform: translate3d(0,40px,0);
            }

            to {
                transform: translate3d(0,0,0);
                opacity: 1;
            }
        }

        .animated {
            animation-duration: 5s;
            animation-fill-mode: both;
            -webkit-animation-duration: 5s;
            -webkit-animation-fill-mode: both;
        }

        .animatedFadeInUp {
            opacity: 0;
        }

        .fadeInUp {
            opacity: 0;
            animation-name: fadeInUp;
            -webkit-animation-name: fadeInUp;
        }
        img{
            height: 30px;
    width: auto;
    vertical-align: middle;
    border-style: none;
        }