export class TemplateController {
  constructor($scope) {
    'ngInject';
    this.$scope = $scope;
    $('[data-toggle="tooltip"]').tooltip();
    $scope.currentPage = 'appearance';
    this.offerOn = false;
    this.leftBlock = false;
    this.fullwidth = false;
    this.topPositionOfBar = false;
    this.fullwidth = false;
    this.leftBarVisible = false;
    this.rightPositionBar = false;
    this.needRight = false;
  }

  setContent(page) {
    this.$scope.currentPage = page;
  }
}
