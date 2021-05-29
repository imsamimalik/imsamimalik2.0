import { createGlobalStyle } from "styled-components";
import bgImg from "../Assets/images/bg.jpg";
export const GlobalStyle = createGlobalStyle`

*, :after, :before {
    box-sizing: border-box;
	margin: 0;
	padding: 0;
}


html{
    --gray: #cacace;
    --yellow: #ffc107;
    --text-dark-primary: #fff;
    --dark-black-background: #20202a;
    --text-dark: #20202a;
    --main: var(--yellow);
    --dark-white: #fafafc;
    --dark-global-text:#8c8c8e;
    --dark-black: #1e1e28;
    --black: #000;
    --white:#fff;
    --stroke: #191923;
    --dark-lamp-green:#4caf50;
    --bg1: #252532fa;
    --bg2: #23232dfa;
    --cardbg1: #2d2d3a;
    --cardbg2: #2b2b35;
    --bbg1: #1e1e28ed;
    --bbg2: #1e1e28f5;
    --bbg3: #1e1e28fc;
    --bbg4: #1e1e28;

    }


@media (prefers-color-scheme: light) {


html{

    --gray: #5c5c6f;
    --yellow: #ffc107;
    --red: #f44336;
    --text-dark-primary: #1e1e28;
    --dark-black-background: #F4F4F6;
    --text-dark: #f4f4f6;
    --main: var(--red);
    --dark-white: #1e1e28;
    --dark-global-text:#8c8c8e;
    --dark-black: transparent;
    --black: #000;
    --white:#fff;
    --stroke: #c0c0ca;
    --dark-lamp-green:#4caf50;
    --bg1: #fff;
    --bg2: #fff;
    --cardbg1: #fff;
    --cardbg2: #fffffff2;
    --bbg1: #f0f0f6ed;
    --bbg2: #f0f0f6f5;
    --bbg3: #f0f0f6fc;
    --bbg4: #f0f0f6;

    }

}


html.dark{

    --gray: #5c5c6f;
    --yellow: #ffc107;
    --red: #f44336;
    --text-dark-primary: #1e1e28;
    --dark-black-background: #F4F4F6;
    --text-dark: #f4f4f6;
    --main: var(--red);
    --dark-white: #1e1e28;
    --dark-global-text:#8c8c8e;
    --dark-black: transparent;
    --black: #000;
    --white:#fff;
    --stroke: #c0c0ca;
    --dark-lamp-green:#4caf50;
    --bg1: #fff;
    --bg2: #fff;
    --cardbg1: #fff;
    --cardbg2: #fffffff2;
    --bbg1: #f0f0f6ed;
    --bbg2: #f0f0f6f5;
    --bbg3: #f0f0f6fc;
    --bbg4: #f0f0f6;

    }



body {
    color: var(--grey);
    font-size: 13px;
    line-height: 1.7;
    font-family: "Poppins",sans-serif;
    font-weight: 400;
    letter-spacing: .25px;
    font-smooth: subpixel-antialiased;
}

* {
    font-family: "Poppins" ,sans-serif;
}

.p-30-0 {
    padding-top: 30px;
    padding-bottom: 0;
}

@media (max-width: 1400px) {

	.p-lg-30-0 {
		padding-top: 30px;
		padding-bottom: 0;
	}
}


img {
    border-style: none;
}

.mobile {
	position:relative;
	margin-bottom:20px;
	z-index: 998;

	@media(min-width:990px) {
		display:none;
	}
}

a {
	text-decoration: none;
}

.btn.btn-md {
    height: 45px;
    font-size: 12px;
    padding: 0 35px;
    line-height: 45px;
    cursor: pointer;
}

input:focus,textarea:focus {
    outline: none;
}

span.form-control-wrap:focus-within + label {
	background-color:var(--main);
	color: var(--text-dark);
}
span.form-control-wrap textarea:focus {
	border-color:var(--main);
}

.btn {
	    text-transform: uppercase;
    box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    color: var(--text-dark);
    background: var(--main);
    letter-spacing: 1.5px;
    font-weight: 600;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    border: none;
    transition: .4s ease-in-out;
}


.menubar-btn:hover {
	
span, span::before,span::after {
        background: var( --dark-white) !important;
}
}

.swiper-container {
	overflow:visible !important;
	padding-bottom: 20px;
}


.mb-10 {
	margin-bottom: 10px;
}

.mb-15 {
    margin-bottom: 15px;
}

.mb-25 {
    margin-bottom: 25px;
}
.lg-text {
    font-size: 16px;
}
.code {
    color: var( --dark-white); 
	i {
    font-style: normal;
    color: var(--main);
	}
	* {
		font-family: monospace;
	}

}
.react-typewriter-text-wrap {
    display: inline-block;
}

.switch-wrapper {
  position: relative;
}

.switch-wrapper > div {
  position: absolute;
}
a.selected {
	font-weight:600;
	    color:var( --dark-white);
}

body, a, .table, .link, .preloader .preloader-content .preloader-load .progressbar-text, .info-bar .header .avatar .lamp-light .available-lamp:after, .info-bar .lang-skills .lang-skills-item .cirkle-progress .progressbar-text, .info-bar .progressbar-text, .info-bar .knowledge-list li, .info-bar .ls-social a, .menu-bar nav .main-menu .menu-item a, .menu-bar nav .main-menu .menu-item.current-menu-item .sub-menu .menu-item a, .menu-bar nav .main-menu .menu-item.current-menu-parent .sub-menu .menu-item a, .contact-form label, .pagination span.dots, .footer, .filter a{
	    color: var(--dark-global-text);
}

.link.active {
	color:var(--dark-white) !important;
}

.p-15-15 {
    padding-top: 15px;
    padding-bottom: 15px;
}

.p-30-15 {
    padding-top: 30px;
    padding-bottom: 15px;
}

.root::-webkit-scrollbar {
    display: none;
}

h1, h2, h3, h4, h5, h6, .content-sidebar .widget-title {
    color: var(--text-dark-primary);
}
h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0;
    font-family: "Poppins",sans-serif;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
}

h5 {
    font-size: 14px;
    font-weight: 600;
}

h4 {
    font-size: 17px;
    font-weight: 600;
}

h6 {
    font-size: 13px;
    font-weight: 400;
}

.p-15-0 {
    padding-top: 15px;
    padding-bottom: 0;
}

.p-15-15 {
    padding-top: 15px;
    padding-bottom: 15px;
}

.p-30-0{
	padding-top: 30px;
    padding-bottom: 0px;
}
.meter {
    transition: stroke-dashoffset 1000ms ease-in-out; 
	transition-delay:800ms;

 }
 .meter1 {
    transition: stroke-dashoffset 1000ms ease-in-out; 

 }

 .hide {
display: none;
 }

 .animated {
	transition: all 500ms ease-in-out;
 }


#app {
	width: auto;
    height: auto;
    overflow: visible;
	padding: 15px;
    background: var(--dark-black-background);
	position: relative;
}

#app:after {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 15px;
    background: var(--dark-black-background);
    z-index: 9999;
}

.mobile-Topbar {
	position: fixed;
    z-index: 99;
    width: 100%;
    height: 70px;
    background: var(--text-dark);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    padding: 0 30px;
    display: none;
    z-index: 999;
    justify-content: space-between;
    align-items: center;
}


.preloader {
    margin: 15px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto!important;
    height: auto!important;
    background: var(--text-dark);
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.preloader .preloader-content {
    margin-bottom: 15px;
    text-align: center;
}

.preloader .preloader-content .preloader-load {
    margin-top: 5px;
    width: 200px;
}

.preloader .preloader-content .preloader-load .progressbar-text {
    position: relative;
    font-size: 14px;
    font-weight: 400 !important;
    color: var(--gray) !important;
    height: 300px;
    line-height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 0;
    margin: 0;
    transform: translate(-50%,-50%);
    color: #555;
}

#app .app-wrapper {

	max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    background: var(--dark-black);
    background-size: cover;
    width: 100%;
	height: auto;
    overflow: visible;
    overflow-x: hidden;
    position: relative;
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%)

}

#app .app-wrapper .app-container {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
}

#app .app-wrapper .app-container:before {
    content: '';
    position: fixed;
    right: 0;
    top: 0;
    width: 15px;
    height: 100%;
    z-index: 9999;
    background: var(--dark-black-background);
}

a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
}



.menubar-btn.mActive {

position: absolute;
   		left: 0;
}

.menubar.mActive .current-page {
    opacity: 0;
}


        .menubar-btn.mActive span {
            transform: rotate(45deg);

            :before {
                transform: translate(0px, 5px) rotate(-90deg);
            }

            :after {
                transform: translate(0px, -5px) rotate(-90deg);
            }
        }

.menubar a {
    display: none;
    visibility: hidden;
    opacity: 0;
}

.app-content {
    padding-left: 290px;
	height: auto;
	position: relative;
    overflow: hidden;
    width: 100vw;
	min-height: 100vh;
    padding-right: 80px;
    transition: .55s ease-in-out;
}

@media(min-width:990px) {
	.app-content.mActive {
    transform: translateX(-150px);

}
}

.app-content .curtain {
	background: rgba(30,30,40,.88);
    position: absolute;
    z-index: 999;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0;
    transition: .55s ease-in-out;
}


.app-content .curtain.mActive {

	pointer-events: all;
    opacity: .7;

}

.app-content .top-bg {
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 0;
    background-position: center;
    height: 400px;
    background-size: cover;
	background-image:url(${bgImg});
}

.top-bg .bg-overlay{

	position: relative;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(180deg,var(--bbg1) 0%,var(--bbg2) 70%,var(--bbg3) 80%,var(--bbg4) 100%);

}

.footer {
    width: 100%;
    padding: 20px 30px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(159deg ,var(--cardbg1) 0%,var(--cardbg2) 100%);
    box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    font-size: 12px;
    color: var(--gray);
    transition: .55s ease-in-out;
    z-index: 9;
}

@media (max-width: 1032px) {
	#app {
	    padding: 0;
	}
	.mobile-Topbar {
    display: flex;

	}
	.preloader {
    margin: 0;
    width: 100vw;
    height: 100vh;
	}
	.app-wrapper {

    height: auto;

	}
	
	#app:after {
		display: none;
	}

	#app .app-wrapper .app-container {
    width: 100%;
	}
	#app .app-wrapper .app-container:before {
    display: none;
    
	}
	.app-content {
	padding-left: 0;
	position: relative;
    padding-right: 0;
    padding-top: 70px;
	}
	.footer {
		flex-direction: column;
	}
	.code {
		display: flex;
    	flex-direction: column;
		height: 100px;
	}
}



@keyframes pulse{
	0%{
		transform:scale(.6);
		opacity:1;
	}
	100%{
		transform:scale(1);
		opacity:0
	}
};

::-webkit-scrollbar {
    width: 10px;
    height: 5px;
}
::-webkit-scrollbar-thumb {
    background: var(--main);
}
::-webkit-scrollbar-thumb {
    border-radius: 20px;
}
::-webkit-scrollbar-track {
    background: var( --black);
}
:root {
    scrollbar-color: var(--main) var(--black) !important;
    scrollbar-width: thin !important;
}
`;
