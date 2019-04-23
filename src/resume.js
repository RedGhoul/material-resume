angular
  .module("Resume", ["ngMaterial"])

  .component("resume", {
    transclude: true,
    template: `<div class="resume">
    <section class="main" ng-transclude></section>
  </div>`
  })

  .component("resumeHeading", {
    controllerAs: "r",
    transclude: true,
    bindings: {
      firstName: "@",
      lastName: "@",
      website: "@",
      phone: "@",
      email: "@",
      github: "@",
      linkedin: "@"
    },
    template: `<div class="header">
    <div class="page-title-container">
      <h1 class="page-title page-title-first">{{r.firstName}}</h1>
      <h1 class="page-title page-title-last">{{r.lastName}}</h1>
      <div class="container">
        <div class="row">
          <a ng-if="r.email" class="md-subhead page-subhead" ng-href="mailto:{{r.email}}" target="_blank">
            {{r.email}}
          </a> | 
          <span ng-if="r.phone" class="md-subhead page-subhead">
            {{r.phone}}
          </span> |
          <a class="md-subhead page-subhead">
          13599 Cobra Dr, Herndon, VA 20171
          </a>
        <div>
      
      </div>
      
    </div>
    <hr/>
    <div class="header-icons">
      <a ng-if="r.website" class="md-subhead page-subhead" ng-href="https://www.{{r.website}}" target="_blank">
        https://www.{{r.website}}
      </a>|
      <a ng-if="r.github" class="md-subhead page-subhead" ng-href="https://github.com/{{r.github}}" target="_blank">
        https://github.com/{{r.github}}
      </a>|
      <a ng-if="r.linkedin" class="md-subhead page-subhead" ng-href="https://www.linkedin.com/in/avaneesa" target="_blank">
        https://linkedin.com/in/{{r.linkedin}}
      </a>
    </div>
  </div>
  <ng-transclude></ng-transclude>`
  })

  .component("resumeBody", {
    transclude: true,
    template: `<div layout="row" ng-transclude></div>`
  })

  .component("resumeColumn", {
    transclude: true,
    template: `<div ng-transclude></div>`
  })

  .component("sidebarCategory", {
    controllerAs: "r",
    bindings: {
      name: "@"
    },
    transclude: true,
    template: `<div flex="" class="category-row">
    <div class="category">
      <h5 class="category-row-title">{{r.name}}</h5>
      <ng-transclude></ng-transclude>
    </div>
  </div>`
  })

  .component("category", {
    controllerAs: "r",
    bindings: {
      name: "@"
    },
    transclude: true,
    template: `<div flex="" class="category-row">
    <h4 class="category-row-title">{{r.name}}</h4>
    <ng-transclude></ng-transclude>
  </div>`
  })

  .component("categoryItem", {
    controllerAs: "r",
    bindings: {
      title: "@",
      subtitle: "@"
    },
    transclude: true,
    template: `<div class="category">
    <h5 class="category-title md-body-2">{{r.title}}</h5>&nbsp;
    <h5 class="category-subtitle md-caption">{{r.subtitle}}</h5>
    <ul class="category-bullets" ng-transclude></ul>
  </div>`
  });