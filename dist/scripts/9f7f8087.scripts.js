"use strict";var saveINTEapp=angular.module("saveINTEapp",[]);saveINTEapp.controller("heroGridController",["$scope",function(e){e.heroGrid=$(".hero-grid"),e.heroGrid.masonry({itemSelector:".hero-box",columnWidth:function(e){return e/4},isResizable:!0}),$(window).ready(function(){e.heroGrid.masonry("reload")}),e.photoBoxes=[{title:"Save The Future",caption:"The IDL program is too awesome.",imageUrl:"save-the-future.jpg",type:"photo",priority:2,template:"hero-box-templates/photo.html"},{title:"Back At The Lab",caption:"A Weekend at the familiar AR209 to save the program that helped make us.",imageUrl:"back-at-the-lab.jpg",type:"photo",priority:3,template:"hero-box-templates/photo.html"}],e.textBoxes=[{title:"All The Channels",caption:"We push every one of them.",type:"text",priority:3,template:"hero-box-templates/text.html"},{title:"Back to the lab!",caption:"Saturday morning cartoons!",type:"text",priority:3,template:"hero-box-templates/text.html"},{title:"An Excess of Support",caption:"Almost out of hand.",type:"text",priority:2,template:"hero-box-templates/text.html"},{title:"Top Dog",caption:"High priority content.",type:"text",priority:2,template:"hero-box-templates/text.html"}],e.vineBoxes=[{title:"Glitch Mob",embedUrl:"http://vine.co/v/b55LOA1dgJU/embed/simple",type:"video",priority:5,template:"hero-box-templates/vine.html"}],e.youtubeBoxes=[{title:"Ride Never Stop",embedUrl:"http://www.youtube.com/embed/ydM2YqukXgo",type:"video",priority:1,template:"hero-box-templates/youtube.html"}];var t=[].concat(e.textBoxes).concat(e.photoBoxes).concat(e.vineBoxes).concat(e.youtubeBoxes);e.heroBoxes=t.sort(function(e,t){return parseFloat(e.priority)-parseFloat(t.priority)});var o="eb4d16cccf1b537eb172cd1cbe60b396e5a8c3f15c7b1ef6630ebf39ba33b37f",r="https://api.change.org/v1/petitions/get_id",a={api_key:o,request_url:r};$.ajax({url:r,type:"GET",data:a,success:function(e){console.log(e)},error:function(){console.log("Aw, shucks!")}})}]),saveINTEapp.directive("addMasonry",["$timeout",function(){return{restrict:"A",link:function(e){e.heroGrid.masonry("reload")}}}]);