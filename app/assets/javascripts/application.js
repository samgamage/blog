// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .
document.addEventListener("turbolinks:load", function() {
  tinymce.remove();
  tinymce.init({ 
  	height: '800',
  	selector:'textarea#post_body',
  	menubar: false,
    branding: false,
    statusbar: false,
    resize: false,
  	plugins: [
	    "advlist autolink lists link image charmap print preview anchor textcolor",
	    "searchreplace visualblocks code fullscreen",
	    "insertdatetime media table contextmenu paste code help"],
  	toolbar: "insert | undo redo |  formatselect | bold italic  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat ",
  	content_css: [
	    "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
	    "//www.tinymce.com/css/codepen.min.css"]
});
})
