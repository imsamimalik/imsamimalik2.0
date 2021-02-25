import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*, :after, :before {
    box-sizing: border-box;
	margin: 0;
	padding: 0;
}

:root {
	--e-global-color-primary: #6ec1e4;
    --e-global-color-secondary: #54595f;
    --e-global-color-text: #7a7a7a;
    --e-global-color-accent: #61ce70;
    --e-global-typography-primary-font-family: "Roboto";
    --e-global-typography-primary-font-weight: 600;
    --e-global-typography-secondary-font-family: "Roboto Slab";
    --e-global-typography-secondary-font-weight: 400;
    --e-global-typography-text-font-family: "Roboto";
    --e-global-typography-text-font-weight: 400;
    --e-global-typography-accent-font-family: "Roboto";
    --e-global-typography-accent-font-weight: 500;
	    --page-title-display: block;
		--blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}

body {
    color: #cacace;
    font-size: 13px;
    line-height: 1.7;
    font-family: "Poppins",sans-serif;
    font-weight: 400;
    letter-spacing: .25px;
    font-smooth: subpixel-antialiased;
}

img {
    vertical-align: middle;
    border-style: none;
}

.mb-10 {
	margin-bottom: 10px;
}

body, a, .art-table, .art-link, .art-preloader .art-preloader-content .art-preloader-load .progressbar-text, .art-info-bar .art-header .art-avatar .art-lamp-light .art-available-lamp:after, .art-info-bar .art-lang-skills .art-lang-skills-item .art-cirkle-progress .progressbar-text, .art-info-bar .art-hard-skills .art-hard-skills-item .art-line-progress .progressbar-text, .art-info-bar .art-knowledge-list li, .art-info-bar .art-ls-social a, .art-menu-bar nav .main-menu .menu-item a, .art-menu-bar nav .main-menu .menu-item.current-menu-item .sub-menu .menu-item a, .art-menu-bar nav .main-menu .menu-item.current-menu-parent .sub-menu .menu-item a, .art-contact-form label, .art-pagination span.dots, .footer, .art-filter a, .wp-block-categories-list li, .wp-block-archives-list li, .widget.widget_nav_menu ul li, .widget.widget_pages ul li, .widget_categories ul li, .comment-info, .art-blog-card .art-project-category {
	    color: #8c8c8e;
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

h1, h2, h3, h4, h5, h6, .art-banner .art-banner-overlay .art-banner-title h1, .content-sidebar .widget-title {
    color: #fff;
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

 }

#app {
	width: auto;
    height: auto;
    overflow: visible;
	padding: 15px;
    background: #191923;
	position: relative;
}

#app:after {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 15px;
    background: #191923;
    z-index: 9999;
}

.mobile-Topbar {
	position: fixed;
    z-index: 99;
    width: 100%;
    height: 70px;
    background: #20202a;
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    padding: 0 30px;
    display: none;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}


.art-preloader {
    margin: 15px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto!important;
    height: auto!important;
    background: #20202a;
    z-index: 999999;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.art-preloader .art-preloader-content {
    margin-bottom: 15px;
    text-align: center;
}

.art-preloader .art-preloader-content .art-preloader-load {
    margin-top: 5px;
    width: 200px;
}

.art-preloader .art-preloader-content .art-preloader-load .progressbar-text {
    position: relative;
    font-size: 14px;
    font-weight: 400 !important;
    color: #cacace !important;
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

@media (max-width: 1032px) {
	.mobile-Topbar {

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

	}
	.art-preloader {
    margin: 0;
    width: 100vw;
    height: 100vh;
}
}



@keyframes pulse{
	0%{
		-webkit-transform:scale(.6);
		transform:scale(.6);
		opacity:1;
	}
	100%{
		-webkit-transform:scale(1);
		transform:scale(1);
		opacity:0
	}
};
`;
