export class TemplateController {
  constructor($scope) {
    'ngInject';
    this.$scope = $scope;
    $('[data-toggle="tooltip"]').tooltip();
    $scope.currentPage = 'behavior';
    this.offerOn = false;
    this.leftBlock = false;
    this.fullwidth = false;
    this.topPositionOfBar = false;
    this.fullwidth = false;
    this.leftBarVisible = false;
    this.rightPositionBar = false;
    this.needRight = false;


    // User toggle button

    $('.kl-user-btn').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $('.kl-user-list').slideToggle();
    });


    // Url buttons (BEHAVIOR & TARGETING RULES)

    $('body')

      .on('click', '.kl-settings-title', function () {

        $(this).toggleClass('closed')
          .siblings('.kl-settings-content').stop(true).slideToggle();

      })

      .on('click', '.kl-settings-content-block__add', function () {

        $('.kl-settings-content-url-block').stop(true).slideToggle();

      })

      .on('click', '.kl-settings-drop-block button', function () {
        $(this)
          .toggleClass('active')
            .siblings('.kl-settings-drop-down-block')
              .stop(true).slideToggle();
      })

      .on('click', '.kl-settings-drop-down-block label', function () {
        $(this).parents('.kl-settings-drop-block')
          .find('.kl-settings-drop-input').val($(this).find('input').val())
            .siblings('.kl-settings-drop-down-block').stop(true).slideUp()
              .siblings('.kl-settings-drop-button').removeClass('active')
                .find('.kl-settings-drop-button-name').text($(this).find('span').text());
      })

      .on('click', '.kl-settings-content-label', function () {
        $(this).toggleClass('active')
          .siblings('.kl-settings-content-label-block').stop(true).slideToggle();
      })




  }

  setContent(page) {
    this.$scope.currentPage = page;
  }
}
