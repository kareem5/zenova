(function ($) {

	"use strict";

	if (typeof $.fn.owlCarousel !== "undefined" && $(".owl-carousel").length) {
		$(".owl-carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			pagination: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 2
				}
			}
		});
	}


	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		if (!box) {
			box = 120;
		}
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});

	// Window Resize Mobile Menu Fix
	mobileNav();


	// ScrollReveal: desktop only — avoids competing with zinova-reveal / IO on mobile (scroll jank)
	var mqSrDesktop = window.matchMedia("(min-width: 992px)");
	var mqSrMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
	if (typeof scrollReveal !== "undefined" && mqSrDesktop.matches && !mqSrMotion.matches) {
		window.sr = new scrollReveal();
	}


	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .zinova-nav-middle').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var targetHash = this.hash;
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var width = $(window).width();
				if (width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .zinova-nav-middle').slideUp(200);
				}
				$('html,body').animate({
					scrollTop: (target.offset().top)
				}, 700, 'swing', function () {
					window.location.hash = targetHash;
				});
				return false;
			}
		}
	});

	$(document).ready(function () {
		$('a[href^="#welcome"]').addClass('active');

		//smoothscroll
		$('.menu-item').on('click', function (e) {
			e.preventDefault();
			var athis = this;
			var target = this.hash,
				menu = target;
			var $target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
				window.location.hash = target;
				$('.menu-item').removeClass('active');
				$(athis).addClass('active');
			});
		});

		$(window).scroll(function (event) {
			var scrollPos = $(document).scrollTop() + 80;

			if (scrollPos === 0) {
				$('a[href^="#welcome"]').addClass('active');
				return;
			}
			$('.menu-item').not('[href=""]').not('[href="javascript:;"]').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));

				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('.menu-item').removeClass("active");
					currLink.addClass("active");
				} else {
					currLink.removeClass("active");
				}
			});
		})
	});

	const Accordion = {
		settings: {
			// Expand the first item by default
			first_expanded: false,
			// Allow items to be toggled independently
			toggle: false
		},

		openAccordion: function (toggle, content) {
			if (content.children.length) {
				toggle.classList.add("is-open");
				let final_height = Math.floor(content.children[0].offsetHeight);
				content.style.height = final_height + "px";
			}
		},

		closeAccordion: function (toggle, content) {
			toggle.classList.remove("is-open");
			content.style.height = 0;
		},

		init: function (el) {
			const _this = this;

			// Override default settings with classes
			let is_first_expanded = _this.settings.first_expanded;
			if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
			let is_toggle = _this.settings.toggle;
			if (el.classList.contains("is-toggle")) is_toggle = true;

			// Loop through the accordion's sections and set up the click behavior
			const sections = el.getElementsByClassName("accordion");
			const all_toggles = el.getElementsByClassName("accordion-head");
			const all_contents = el.getElementsByClassName("accordion-body");
			for (let i = 0; i < sections.length; i++) {
				const section = sections[i];
				const toggle = all_toggles[i];
				const content = all_contents[i];

				// Click behavior
				toggle.addEventListener("click", function (e) {
					if (!is_toggle) {
						// Hide all content areas first
						for (let a = 0; a < all_contents.length; a++) {
							_this.closeAccordion(all_toggles[a], all_contents[a]);
						}

						// Expand the clicked item
						_this.openAccordion(toggle, content);
					} else {
						// Toggle the clicked item
						if (toggle.classList.contains("is-open")) {
							_this.closeAccordion(toggle, content);
						} else {
							_this.openAccordion(toggle, content);
						}
					}
				});

				// Expand the first item
				if (i === 0 && is_first_expanded) {
					_this.openAccordion(toggle, content);
				}
			}
		}
	};

	(function () {
		// Initiate all instances on the page
		const accordions = document.getElementsByClassName("accordions");
		for (let i = 0; i < accordions.length; i++) {
			Accordion.init(accordions[i]);
		}
	})();



	// Home seperator
	if ($.fn.imgfix && $('.home-seperator').length) {
		$('.home-seperator .left-item, .home-seperator .right-item').imgfix();
	}


	// Home number counterup
	if ($.fn.counterUp && $('.count-item').length) {
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}


	// Page loading animation
	$(window).on('load', function () {
		if ($('.cover').length) {
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function () {
			setTimeout(function () {
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function () {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);

(function () {
	"use strict";
	try {
		var nodes = document.querySelectorAll(".zinova-reveal");
		var mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
		var mqMobile = window.matchMedia("(max-width: 991px)");
		var useMobileLite = mqMobile.matches || window.innerWidth <= 991;

		if (mqReduce.matches) {
			document.documentElement.classList.add("zinova-reduced-motion");
			for (var r = 0; r < nodes.length; r++) {
				nodes[r].classList.add("is-visible");
			}
			return;
		}

		if (useMobileLite) {
			document.documentElement.classList.add("zinova-mobile-lite-motion");
			for (var m = 0; m < nodes.length; m++) {
				nodes[m].classList.add("is-visible");
			}
			return;
		}

		if (!nodes.length) {
			return;
		}
		if (typeof IntersectionObserver === "undefined") {
			for (var k = 0; k < nodes.length; k++) {
				nodes[k].classList.add("is-visible");
			}
			return;
		}
		var io = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						io.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
		);
		for (var i = 0; i < nodes.length; i++) {
			io.observe(nodes[i]);
		}
	} catch (e) {
		var fallback = document.querySelectorAll(".zinova-reveal");
		for (var j = 0; j < fallback.length; j++) {
			fallback[j].classList.add("is-visible");
		}
	}
})();