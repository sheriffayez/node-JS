(function(){


var task = {
controller: "formController",
templateUrl: "inner-template.html"
}

angular
.module("storyApp")
.component("task", task);
})();