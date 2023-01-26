function link(lien, label) {
	document.write('<div class="menu-item"><a class="menu-link py-2" href="'+lien+'"><span class="menu-title">'+label+'</span></a></div>');
}

function links(title) {
	document.write('<div data-kt-menu-trigger="click" class="menu-item menu-accordion">');
	document.write('<span class="menu-link py-2">');
	document.write('<span class="menu-title">'+title+'</span>');
	document.write('<span class="menu-arrow"></span>');
	document.write('</span>');
	document.write('<div class="menu-sub menu-sub-accordion">');

	/* LIEN */
	document.write('<div class="menu-item">');
	document.write('<a class="menu-link py-2" href="https://owasp.org" target="_blank">');
	document.write('<span class="menu-bullet">');
	document.write('<span class="bullet bullet-dot"></span>');
	document.write('</span>');
	document.write('<span class="menu-title">OWASP</span>');
	document.write('</a>');
	document.write('</div>');
	/* / LIEN */

	/* LIEN */
	document.write('<div class="menu-item">');
	document.write('<a class="menu-link py-2" href="https://owasp.org/www-project-juice-shop/" target="_blank">');
	document.write('<span class="menu-bullet">');
	document.write('<span class="bullet bullet-dot"></span>');
	document.write('</span>');
	document.write('<span class="menu-title">OWASP Juice Shop</span>');
	document.write('</a>');
	document.write('</div>');
	/* / LIEN */

	/* LIEN */
	document.write('<div class="menu-item">');
	document.write('<a class="menu-link py-2" href="https://github.com/amirouchef" target="_blank">');
	document.write('<span class="menu-bullet">');
	document.write('<span class="bullet bullet-dot"></span>');
	document.write('</span>');
	document.write('<span class="menu-title">GitHub Prof</span>');
	document.write('</a>');
	document.write('</div>');
	/* / LIEN */

	/* LIEN */
	document.write('<div class="menu-item">');
	document.write('<a class="menu-link py-2" href="https://www.cve.org/" target="_blank">');
	document.write('<span class="menu-bullet">');
	document.write('<span class="bullet bullet-dot"></span>');
	document.write('</span>');
	document.write('<span class="menu-title">CVE</span>');
	document.write('</a>');
	document.write('</div>');
	/* / LIEN */

	/* LIEN */
	document.write('<div class="menu-item">');
	document.write('<a class="menu-link py-2" href="https://www.exploit-db.com/" target="_blank">');
	document.write('<span class="menu-bullet">');
	document.write('<span class="bullet bullet-dot"></span>');
	document.write('</span>');
	document.write('<span class="menu-title">Exploit Database</span>');
	document.write('</a>');
	document.write('</div>');
	/* / LIEN */

	/* LIEN */
	document.write('<div class="menu-item">');
	document.write('<a class="menu-link py-2" href="https://www.criminalip.io/" target="_blank">');
	document.write('<span class="menu-bullet">');
	document.write('<span class="bullet bullet-dot"></span>');
	document.write('</span>');
	document.write('<span class="menu-title">Criminal IP</span>');
	document.write('</a>');
	document.write('</div>');
	/* / LIEN */

	/* LIEN */
	document.write('<div class="menu-item">');
	document.write('<a class="menu-link py-2" href="https://nmap.org/nsedoc/scripts/" target="_blank">');
	document.write('<span class="menu-bullet">');
	document.write('<span class="bullet bullet-dot"></span>');
	document.write('</span>');
	document.write('<span class="menu-title">NMAP.ORG</span>');
	document.write('</a>');
	document.write('</div>');
	/* / LIEN */

	document.write('</div>');
	document.write('</div>');

}

function getCssFile(fileName) {
	document.write('<link rel="stylesheet" type="text/css" href="assets/css/'+fileName+'">');
}

function getJsFile(fileName) {
	document.write('<script src="assets/js/'+fileName+'"></script>');
}

/* getHeader() */
function getHeader(titleTuto, descriptionTuto) {
	let title = "KaliLinux | Documentation";
	let docVersion = "3.0.0";
	let titleMenu = "Menu de navigation";
	let linkBg = "assets/img/bg.png";

	document.write('<!DOCTYPE html>');
	document.write('<html lang="fr" data-theme="dark" data-lt-installed="true">');
	document.write('<head>');
	document.write('<title>'+title+'</title>');
	document.write('<meta charset="utf-8">');
	document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
	document.write('<meta http-equiv="X-UA-Compatible" content="ie=edge">');
	document.write('<link rel="shortcut icon" href="assets/img/logo.ico">');
	document.write('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700">');
	getCssFile("prismjs.css");
	getCssFile("plugins.css");
	getCssFile("style.css");
	document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">');
	document.write('<link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.2.1/css/all.css">');
	getCssFile("scroll.animate.css");
	getCssFile("hovereffect.css");
	getCssFile("nextbutton.css");
	getJsFile("scroll.animate.js");
	document.write('<script src="https://use.fortawesome.com/349cfdf6.js"></script>');
	document.write('</head>');
	document.write('<body>');

	document.write('<div class="d-flex flex-column flex-root">');
	document.write('<div class="docs-page d-flex flex-row flex-column-fluid">');
	document.write('<div id="kt_docs_aside" class="docs-aside" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:\'200px\', \'300px\': \'250px\'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_docs_aside_toggle" style="background-color: #002334;">');
	document.write('<div class="d-flex justify-content-center mt-5">');
	document.write('<div class="flex-column-auto h-75px mt-5 justify-content-center" id="kt_docs_aside_logo">');
	document.write('<a href="index.html">');
	document.write('<img alt="Logo" src="assets/img/logo2.png" width="180" class="img-fluid">');
	document.write('</a>');
	document.write('</div>');
	document.write('</div>');
	document.write('<div class="d-flex justify-content-center mt-10">');
	document.write('<div class="flex-column-auto h-75px mt-5 justify-content-center" id="kt_docs_aside_logo">');
	document.write('<h1 class="d-flex align-items-center text-dark my-1 fs-3">Documentation <div class="badge fw-semibold fs-4 px-2 ms-2 bg-body text-dark shadow-sm">v'+docVersion+'</div></h1>');
	document.write('</div>');
	document.write('</div>');
	document.write('<div class="docs-aside-menu flex-column-fluid">');
	document.write('<div class="hover-scroll-overlay-y mb-5 mt-lg-0 mb-lg-5 pe-lg-n2 me-lg-2" id="kt_docs_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_docs_aside_logo, #kt_docs_aside_select, #kt_docs_aside_footer" data-kt-scroll-wrappers="#kt_docs_aside_menu" data-kt-scroll-offset="10px" style="height: 737px;">');
	document.write('<div class="menu menu-column menu-title-gray-800 menu-arrow-gray-500 menu-state-primary fw-semibold" id="#kt_docs_aside_menu" data-kt-menu="true">');
	document.write('<div class="menu-item">');
	document.write('<h4 class="menu-content text-muted mb-0 fs-7 text-uppercase">'+titleMenu+'</h4>');
	document.write('</div>');

	/* LIENS MENU DE NAVIGATION */
	link('index.html', 'Introduction');
	link('telechargement-de-l-iso.html', 'Téléchargement de l\'ISO');
	link('creation-de-la-machine-virtuelle.html', 'Création de la machine virtuelle');
	link('installation-de-kali.html', 'Installation de Kali');
	link('tp-villain.html', 'TP Villain');
	link('tp-cloudflare.html', 'TP Cloudflare');
	link('tp-nmap.html', 'TP nmap');
	link('commandes.html', 'Commandes');
	link('installations.html', 'Installations');
	link('droits-fichiers.html', 'Droits fichiers');
	/* / LIENS MENU DE NAVIGATION */
	
	links("Liens"); // Sous-Menu "Liens"

	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('<div class="docs-wrapper d-flex flex-column flex-row-fluid" id="kt_docs_wrapper" style="background-image: url('+linkBg+'); background-position: center center; background-repeat: no-repeat; background-attachment: fixed; background-size: cover;">');
	document.write('<div id="kt_docs_header" class="docs-header align-items-stretch">');
	document.write('<div class="container">');
	document.write('<div class="d-flex d-lg-none align-items-stretch justify-content-between h-75px">');
	document.write('<div class="d-flex align-items-center d-lg-none ms-n2 me-1" title="Show aside menu">');
	document.write('<div class="btn btn-icon btn-flex btn-color-primary" id="kt_docs_aside_toggle">');
	document.write('<span class="svg-icon svg-icon-1 mt-1">');
	document.write('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">');
	document.write('<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor"></path>');
	document.write('<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor"></path>');
	document.write('</svg>');
	document.write('</span>');
	document.write('</div>');
	document.write('</div>');
	document.write('<div class="d-flex d-lg-none align-items-center flex-grow-1 flex-lg-grow-0 me-3 me-lg-15">');
	document.write('<a href="index.html">');
	document.write('<img alt="Logo" src="assets/img/logo.png" class="h-25px">');
	document.write('</a>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');

	document.write('<div class="docs-content d-flex flex-column flex-column-fluid" id="kt_docs_content">');
	document.write('<div class="container d-flex flex-column flex-lg-row" id="kt_docs_content_container">');
	document.write('<div class="card card-docs flex-row-fluid" style="background-color: transparent;">');
	document.write('<div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">');
	document.write('<div class="px-md-10 pt-md-10 pb-md-5">');
	document.write('<div class="text-center">');
	document.write('<div class="row d-flex justify-content-center mb-10">');
	document.write('<div class="col-md-auto">');
	document.write('<div class="alert alert-primary reveal-1 border-light">');
	document.write('<h1 class="fw-bold mb-8 display-6">');
	document.write('<span class="d-inline-block position-relative ms-2">');
	document.write('<span class="d-inline-block mb-2">'+titleTuto+'</span>');
	document.write('<span class="d-inline-block position-absolute h-8px bottom-0 end-0 start-0 bg-success translate rounded"></span>');
	document.write('</span>');
	document.write('</h1>');
	document.write('<div class="fw-semibold fs-2 text-gray-500">');
	document.write('<span class="fw-bold text-gray-900">');
	document.write(descriptionTuto);
	document.write('</span>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');

	document.write('<div class="row g-0">');

}
/* / getHeader() */

/* getFooter() */
function getFooter() {
	let year = "2023";
	let portfolioUrl = "javascript:void(0)";
	let author = "Tom Bruaire";

	document.write('</div>');

	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');

	/* FOOTER */
	document.write('<div class="py-4 d-flex flex-lg-column py-6" id="kt_footer">');
	document.write('<div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">');
	document.write('<div class="text-dark order-2 order-md-1">');
	document.write('<span class="fw-semibold me-1" style="color: #FFFFFF;">'+year+' ©</span>');
	document.write('<a href="'+portfolioUrl+'" target="_blank" class="text-gray-800 text-hover-primary">'+author+'</a>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	/* / FOOTER */

	document.write('</div>');
	document.write('</div>');
	document.write('</div>');

	/* SCROLLTOP BUTTON */
	document.write('<div class="scrolltop me-5" data-kt-scrolltop="true">');
	document.write('<span class="svg-icon">');
	document.write('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">');
	document.write('<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="white" />');
	document.write('<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="white" />');
	document.write('</svg>');
	document.write('</span>');
	document.write('</div>');
	/* / SCROLLTOP BUTTON */

	/* JS FILES */
	getJsFile("plugins.js");
	getJsFile("scripts.js");
	getJsFile("documentation.js");
	getJsFile("prismjs.js");
	getJsFile("active.js");
	/* / JS FILES */

	/* JQUERY LINK */
	document.write('<script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>');
	/* / JQUERY LINK */

	document.write('</body>');
	document.write('</html>');
}
/* / getFooter() */

/* code() */
function code(classC, style, value) {
	document.write('<code class="'+classC+'" style="'+style+'">');
	document.write(value);
	document.write('</code>');
}
/* / code() */

/* getRow() */
function getRow(mb, revealN, number1, number2, text1, text2, linkForImg, img) {
	document.write('<div class="row d-flex justify-content-center reveal">');
	document.write('<div class="col-md-auto '+mb+' select">');
	document.write('<div class="alert alert-primary reveal-'+revealN+' border-light">');
	document.write('<p style="color: #FFFFFF;">');
	if (number2 != null) {
		document.write('<i class="bi bi-'+number1+'-circle me-1" style="font-size: 30px; color: #FFFFFF;"></i>');
		document.write('<i class="bi bi-'+number2+'-circle me-2" style="font-size: 30px; color: #FFFFFF;"></i>');
	} else {
		if (number1 != null) {
			document.write('<i class="bi bi-'+number1+'-circle me-2" style="font-size: 30px; color: #FFFFFF;"></i>');
		}
	}
	document.write('<span class="ms-2" style="font-size: 30px;">');
	document.write(text1);
	document.write('</span>');
	document.write('</p>');
	if (text2 != null) {
		document.write('<p style="color: #FFFFFF;">');
		document.write(text2);
		document.write('</p>');
	}
	document.write('<div class="row d-flex justify-content-center">');
	document.write('<div class="col-auto">');
	if (linkForImg != null) {
		document.write('<a href="'+linkForImg+'" target="_blank">');
	}
	document.write('<img src="assets/img/'+img+'" class="img-fluid rounded" alt="">');
	if (linkForImg != null) {
		document.write('</a>');
	}
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
}
/* / getRow */

/* info() */
function info(mb, alertColor, revealN, libelle) {
	document.write('<div class="row d-flex justify-content-center reveal">');
	document.write('<div class="col-md-auto '+mb+'">');
	document.write('<div class="alert '+alertColor+' reveal-'+revealN+' border-light" style="color: #FFFFFF;">');
	document.write('<h3 style="color: #FFFFFF;">');
	document.write(libelle);
	document.write('</h3>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
}
/* / info() */

/* nextButton() */
function nextButton(sizePx, revealN, page, libelle) {
	document.write('<style type="text/css">.btn-hover {width: '+sizePx+'px;}</style>');
	document.write('<div class="row d-flex justify-content-center reveal">');
	document.write('<div class="col-md-auto select">');
	document.write('<div class="d-flex justify-content-center">');
	document.write('<div class="next-button reveal-'+revealN+'">');
	document.write('<a href="'+page+'">');
	document.write('<button class="btn-hover color">');
	document.write(libelle);
	document.write('</button>');
	document.write('</a>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
}
/* / nextButton() */

/* comment() */
function comment(mb, alertColor, revealN, libelle) {
	document.write('<div class="row d-flex reveal">');
	document.write('<div class="col-md-auto '+mb+'">');
	document.write('<div class="alert '+alertColor+' reveal-'+revealN+' border-light" style="color: #FFFFFF;">');
	document.write('<h3 style="color: #FFFFFF;">');
	document.write(libelle);
	document.write('</h3>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
}
/* / comment() */

/* command() */
function command(revealN, title, mode, code) {
	document.write('<div class="col-md-12 mb-10 select reveal">');
	document.write('<div class="alert alert-primary border-light p-10 mx-md-5 h-md-100 reveal-'+revealN+'">');
	document.write('<div class="row d-flex justify-content-center">');
	document.write('<div class="col-auto">');
	document.write('<div class="alert alert-primary" style="color: #FFFFFF;">');
	document.write('<h3 class="text-center">');
	document.write(title);
	document.write('</h3>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('<div class="mt-5">');
	document.write('<div class="fs-4">');
	document.write('<div class="highlight">');
	document.write('<div class="text-start">');
	if (mode == "user") {
		document.write('<div class="text-start"><span class="text-gray-700"><font color="#6B8E23">( </font><font color="#00BFFF"><b>user@kali</b></font><font color="#6B8E23"> )-[</font> <font color="white"><b>~</b></font> <font color="#6B8E23">]</font></span></div>');
	} else if (mode == "admin") {
		document.write('<div class="text-start"><span class="text-gray-700"><font color="#00BFFF">(</font><font color="red"><b> root@kali</b></font><font color="#00BFFF"> )-[</font> <font color="white"><b>/home/user</b></font> <font color="#00BFFF">]</font></span></div>');
	}
	document.write('</div>');
	document.write('<button class="highlight-copy btn" data-bs-toggle="tooltip">copier</button>');
	document.write('<div class="highlight-code">');
	document.write('<pre class="language-bash mt-2"><code class="language-bash fs-4">'+code+'</code></pre>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
}
/* / command() */

/* result() */
function result(mb, alertColor, revealN, libelle) {
	document.write('<div class="row d-flex justify-content-center reveal">');
	document.write('<div class="col-md-auto '+mb+'">');
	document.write('<div class="alert '+alertColor+' reveal-'+revealN+' border-light" style="color: #FFFFFF;">');
	document.write('<h3 style="color: #FFFFFF;">');
	document.write(libelle);
	document.write('</h3>');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
}
/* / result() */	

/* example() */
function example(mb, alertColor, revealN, url) {
	document.write('<div class="row d-flex justify-content-center reveal">');
	document.write('<div class="col-md-12 '+mb+'">');
	document.write('<div class="alert '+alertColor+' reveal-'+revealN+' border-light" style="color: #FFFFFF;">');

	document.write('<div class="highlight">');
	document.write('<div class="text-start fs-4"><span class="text-gray-700"><font color="#00BFFF">(</font><font color="red"><b> root@kali</b></font><font color="#00BFFF"> )-[</font> <font color="white"><b>/home/user</b></font> <font color="#00BFFF">]</font></span></div>');
	document.write('<button class="highlight-copy btn" data-bs-toggle="tooltip">copier</button>');
	document.write('<div class="highlight-code">');
	document.write('<pre class="language-bash mt-2"><code class="language-bash fs-4">'+url+'</code></pre>');
	document.write('</div>');
	document.write('</div>');

	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
}
/* / example() */		

/* generateChmod() */
function generateChmod() {
	let n1 = document.getElementById("n1");
	let n2 = document.getElementById("n2");
	let n3 = document.getElementById("n3");
	let file = document.getElementById("fichier");
	document.write('<div class="highlight">');
	document.write('<button class="highlight-copy btn" data-bs-toggle="tooltip">copier</button>');
	document.write('<div class="highlight-code">');
	document.write('<pre class="language-bash mt-2">');
	document.write('<code class="language-bash fs-4">');
	document.write('chmod '+n1+n2+n3+' '+file+'');
	document.write('</code>');
	document.write('</pre>');
	document.write('</div>');
	document.write('</div>');
}
/* / generateChmod() */
