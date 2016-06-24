
var bio = {
	"name": "Luis Almeida",
	"role": "Student",
	"contacts": {
		"location" : "Lisboa",
		"mobile": "967483022",
		"email": "luissequeira16@gmail.com",
		"github": "lsalmeida",
		"twitter": "sekuiya"
	},
	"welcomeMessage": "The world can be a better place, and I can make it happen!",
	"skills": ["Java", "Javascript", "Web Developer", "Video Games", "And much more...!"],
	"bioPic": "images/photo.jpg"
}

var education = {
	"schools" : [
	{
		"name" : "Pinheiro e Rosa",
		"location" : "Faro, Portugal",
		"majors" : [],
		"degree" : "Ciências e Tecnologia",
		"dates" : "2009",
		"url" : "http://www.aeprosa.pt/"
	},
	{
		"name" : "ISEL",
		"location" : "Lisboa",
		"majors" : [],
		"degree" : "Computer Science",
		"dates" : "2017",
		"url" : "https://www.isel.pt/"
	}
	],
	"onlineCourse" : [
	{
		"title": "JavaSrcipt Syntax",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://classroom.udacity.com/courses/ud804"
	}
	]
}

var work = {
	"jobs" : [
	{
		"employer" : "Estalagem Sequeira",
		"title" : "Recepcionist",
		"location" : "S. Brás de Alportel",
		"dates" : "2014",
		"description" : "Receive guests, take care of check in and check out"
	}
	]
}

var projects = {
	"projects" : [
	{
		"title" : "Metro App",
		"dates" : "2015",
		"description" : "Create an app to ease traveling in Lisbon's metro",
		"images" : ["images/metro/1.png","images/metro/2.png"]
	}
	]
}

bio.display = function () {

	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);
	
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	
	var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(formattedBiopic);
	
	var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedMsg);
	
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	
		if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
		
		}
	}
}

education.display = function () {
	
	for (school in education.schools) {
		
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedName = formattedName.replace("#",education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);
		
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		
		for (var i = 0; i < education.schools[school].majors.length; i++) {

			var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[school].majors[i]);
			$(".education-entry:last").append(formattedMajor);
		
		}
		
		if (education.schools[school].majors.length < 1) $(".education-entry:last").append("<br>");
		
	}
	
	if (education.onlineCourse.length > 0) $("#education").append(HTMLonlineClasses);
	
	for (course in education.onlineCourse) {
		
		$("#education").append(HTMLschoolStart);
		
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourse[course].title);
		var formattedTitle = formattedTitle.replace("#",education.onlineCourse[course].url);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourse[course].school);
		$(".education-entry:last").append(formattedTitle + formattedSchool);
		
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourse[course].dates);
		$(".education-entry:last").append(formattedDates);
		
		var formattedURL = HTMLonlineURL.replace(/%data%/gi,education.onlineCourse[course].url);
		$(".education-entry:last").append(formattedURL);
		
	}
	
}
	
work.display = function () {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
}


projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0 ) $(".project-entry:last").append(HTMLprojectImageStart );
		
		for (img in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace(/%data%/gi,projects.projects[project].images[img]);
			$(".project-image:last").append(formattedImage);
		}
	}
}


//Call to Display functions
bio.display();
education.display();
work.display();
projects.display();


//Substituido por mouseover em cima do nome.
/*$("#main").append(internationalizeButton);*/

function inName(name) {
	var div = name.trim().split(" ");
	
	var firstName  = div[0].charAt(0).toUpperCase() + div[0].substring(1).toLowerCase();
	var lastName = div[1].toUpperCase();
	var finalName = firstName + " " + lastName;
	
	return finalName;
}

$("#mapDiv").append(googleMap);

/*
This is empty on purpose! Your code to build the resume will go here.
 */