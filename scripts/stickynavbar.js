var header, navbar, mobile_nav, mobile_nav_btn; // page elements
var progress = 0;  // integers
var mobile_nav_open = false;

window.addEventListener("load", function()
{
	// get the variables and update the navbar when the page finishes loading
	header = document.getElementById("HeaderSection");
	navbar = document.getElementById("navbar");
	mobile_nav = document.getElementById("mobilenavitems");
	mobile_nav_btn = document.getElementById("mobilenav_btn")

	update_navbar();
});


document.addEventListener('scroll', function()
{
	// update nav bar when the user is scrolling
	update_navbar();
});

window.addEventListener('resize', function()
{
	if (window.innerWidth <= 990 && mobile_nav_open)
		toggle_mobile_nav();
});


function update_navbar() // make navbar fixed to top of the page after it is scrolled to
{
	if (header == undefined)
		return;
	
	progress = window.scrollY/(header.clientHeight-navbar.clientHeight);  // (0 to 1) - % of the header scrolled through

	navbar.style.opacity = progress;

	if (progress >= 1)
		navbar.classList.add("sticky-navbar");
	else
		navbar.classList.remove("sticky-navbar");
}

function toggle_mobile_nav()
{
	if (mobile_nav_open)
	{
		mobile_nav_open = false;
		mobile_nav.style.display = "none";
		document.body.classList.remove("stop-scrolling");
		mobile_nav_btn.src = "images/icons/menu.png";
		return;
	}

	mobile_nav_open = true;
	mobile_nav.style.display = "block";
	document.body.classList.add("stop-scrolling");
	mobile_nav_btn.src = "images/icons/close.png";
	if (window.scrollY < header.clientHeight - navbar.clientHeight)
		window.scrollTo(0, header.clientHeight - navbar.clientHeight);
}