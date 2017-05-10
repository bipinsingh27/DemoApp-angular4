"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var posts_service_1 = require("../services/posts.service");
var userComponent = (function () {
    function userComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.fisrtName = 'Roshan';
        this.lastName = 'kshirsagar';
        this.address = {
            street: 'College Road',
            city: 'Nashik',
            state: 'MH'
        };
        this.cources = ["MCA", "BCS", "HSC", "SSC"];
        this.showCourse = false;
        // Calling service here view 
        this.postsService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    // for showing and hidding course
    userComponent.prototype.toggleCourse = function () {
        if (this.showCourse == true) {
            this.showCourse = false;
        }
        else {
            this.showCourse = true;
        }
    };
    // adding new course
    userComponent.prototype.addNewCourse = function (newCourse) {
        this.cources.push(newCourse);
    };
    userComponent.prototype.deleteCourse = function (i) {
        this.cources.splice(i, 1);
    };
    return userComponent;
}());
userComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: "user.components.html",
        providers: [posts_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], userComponent);
exports.userComponent = userComponent;
//# sourceMappingURL=user.component.js.map