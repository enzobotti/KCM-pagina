// JS INDEX

// Scroll Function CONOCENOS
$(document).ready(function() {
	var conocenosButtonNode = $('#conocenosButton');

	conocenosButtonNode.click(scrolling);

	function scrolling() {
		$('html, body').animate(
			{
				scrollTop: $('#conocenosSection').offset().top - 100
			},
			1000
		);
	}

	// Scroll Function CONTACTO
	var contactoButtonNode = $('#contactoButton');

	contactoButtonNode.click(scrollingContacto);

	function scrollingContacto() {
		$('html, body').animate(
			{
				scrollTop: $('#contactoSection').offset().top - 80
			},
			1000
		);
	}

	// JS SERVICIOS

	//Scroll Function DISEÑO GRAFICO
	var diseñoButtonNode = $('#diseñoButton');

	diseñoButtonNode.click(scrollingDiseño);

	function scrollingDiseño() {
		$('html, body').animate(
			{
				scrollTop: $('#diseñoSection').offset().top - 120 
			},
			1000
		);
	}

	//Scroll Function DESARROLLO WEB
	var desarrolloButtonNode = $('#desarrolloButton');

	desarrolloButtonNode.click(scrollingDesarrollo);

	function scrollingDesarrollo() {
		$('html, body').animate(
			{
				scrollTop: $('#desarrolloSection').offset().top - 130
			},
			1000
		);
	}

	//Scroll Function COMMUNITY MANAGEMENT
	var communityButtonNode = $('#communityButton');

	communityButtonNode.click(scrollingommunity);

	function scrollingommunity() {
		$('html, body').animate(
			{
				scrollTop: $('#communitySection').offset().top - 80
			},
			1000
		);
	}

	//Scroll Function VIDEO Y FOTOGRAFIA
	var videoButtonNode = $('#videoButton');

	videoButtonNode.click(scrollingVideo);

	function scrollingVideo() {
		$('html, body').animate(
			{
				scrollTop: $('#videoSection').offset().top - 80
			},
			1000
		);
	}
});
