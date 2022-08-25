var currentslide, slideshow_leftbtn, slideshow_rightbtn, slideshow_photos, slideshow_leftcard, slideshow_centercard, slideshow_rightcard, autoslide;

document.addEventListener("DOMContentLoaded", function(event) // wait for the webpage to finish loading
{ 
	autoslide = true;

	slideshow_leftbtn = document.getElementById("slideshow_leftbtn");
	slideshow_rightbtn = document.getElementById("slideshow_rightbtn");
	slideshow_leftcard = document.getElementById("leftcard");
	slideshow_centercard = document.getElementById("centercard");
	slideshow_rightcard = document.getElementById("rightcard");

	slideshow_photos = ["url('images/slideshow/image0.jpeg')",
						"url('images/slideshow/image1.jpeg')",
						"url('images/slideshow/image2.jpeg')",
						"url('images/slideshow/image3.jpeg')",
						"url('images/slideshow/image4.jpeg')",
						"url('images/slideshow/image5.jpeg')",
						"url('images/slideshow/image6.jpeg')",
						"url('images/slideshow/image7.jpeg')",
						"url('images/slideshow/image8.jpeg')",
						"url('images/slideshow/image9.jpeg')",
						"url('images/slideshow/image10.jpeg')",
						"url('images/slideshow/image11.jpeg')",
						"url('images/slideshow/image12.jpeg')",
						"url('images/slideshow/image13.jpeg')"]; //findimages(); <-- implement when site is on server provider

	currentslide = slideshow_photos.length - 1;

	carousel();
});


function findimages()
{
	let foundall = false;
	let imgCount = 0;
	let images = [];

	for (let currentImg = 0; currentImg <= imgCount; currentImg++)
	{
		let img = document.createElement('img');
		let imgurl = "url('images/slideshow/image" + imgCount + ".jpeg')"
		img.src = imgurl;
		console.log("found " + imgurl)
		img.onload = function(e)
		{
			images.push(imgurl);https://drive.google.com/drive/folders/1FaAX1urlKGQs9zWtsplUQfLwuLj9mV24?usp=sharing
			imgCount++;
			;
		};

		document.body.appendChild(img);
		img.remove();
	}

	return images;
}


var slideshow_timeouts = [];

function carousel(autoslide = true, increment = 1)
{
	currentslide = arrayrange(currentslide + increment, 0, slideshow_photos.length);

	slideshow_leftcard.classList.remove('slideshowanimation_leftright');
	slideshow_centercard.classList.remove('slideshowanimation_center');
	slideshow_rightcard.classList.remove('slideshowanimation_leftright');

	slideshow_leftcard.style.backgroundImage = slideshow_photos[arrayrange(currentslide + 1, 0, slideshow_photos.length)] + ", " + slideshow_photos[arrayrange(currentslide + 2, 0, slideshow_photos.length)];
	slideshow_centercard.style.backgroundImage = slideshow_photos[currentslide] + ", " + slideshow_photos[arrayrange(currentslide + 1, 0, slideshow_photos.length)];
	slideshow_rightcard.style.backgroundImage = slideshow_photos[arrayrange(currentslide - 1, 0, slideshow_photos.length)] + ", " + slideshow_photos[currentslide];

	if (autoslide)
	{
		slideshow_timeouts.push(setTimeout(function() {
			slideshow_leftcard.classList.add('slideshowanimation_leftright');
			slideshow_centercard.classList.add('slideshowanimation_center');
			slideshow_rightcard.classList.add('slideshowanimation_leftright');
		}, 2500));
		slideshow_timeouts.push(setTimeout(carousel, 3500));
	}
	else
	{
		for (let timeout = 0; timeout < slideshow_timeouts.length; timeout++) {
			clearTimeout(slideshow_timeouts[timeout]);
		}
		slideshow_timeouts = [];
		slideshow_timeouts.push(setTimeout(function() {
			carousel();
		}, 20000));
	}
}


function arrayrange(current, min, max)
{
	if (current > max - 1)
		current = current - max;
	else if (current < min)
		current = current + max;

	return current;
}

