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

    // var ctx = document.getElementById("myChart");
    // var myChart = new Chart(ctx, {
    //   type: 'line',
    //   data: {
    //     datasets: [{
    //       label: 'Scatter Dataset',
    //       data: [{
    //         x: -10,
    //         y: 0
    //       }, {
    //         x: 0,
    //         y: 10
    //       }, {
    //         x: 10,
    //         y: 5
    //       }]
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       xAxes: [{
    //         type: 'linear',
    //         position: 'bottom'
    //       }]
    //     }
    //   }
    // });
    // var element = document.querySelector('.chart');
    // new EasyPieChart(element, {
    //   // your options goes here
    // });

    $('#navTabs a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
      $('#navTabs a').removeClass('active');
      $(this).addClass('active');
    });

    // User toggle button

    $('.kl-user-btn').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $('.kl-user-list').slideToggle();
    });


    // Url buttons (BEHAVIOR & TARGETING RULES)

    $('.kl-settings-title').on('click', function () {

      $(this).toggleClass('closed')
        .siblings('.kl-settings-content').stop(true).slideToggle();

    });

    $('.kl-settings-content-block__add').on('click', function () {

      $('.kl-settings-content-url-block').stop(true).slideToggle();

    });

    $('.kl-settings-drop-block button').on('click', function () {

      $(this)
        .toggleClass('active')
          .siblings('.kl-settings-drop-down-block')
            .stop(true).slideToggle();

    });

    $('.kl-settings-drop-down-block label').on('click', function () {

      $(this).parents('.kl-settings-drop-block')
        .find('.kl-settings-drop-input').val($(this).find('input').val())
          .siblings('.kl-settings-drop-down-block').stop(true).slideUp()
            .siblings('.kl-settings-drop-button').removeClass('active')
              .find('.kl-settings-drop-button-name').text($(this).find('span').text());

    });

    $('.kl-settings-content-label').on('click', function () {

      $(this).toggleClass('active')
        .siblings('.kl-settings-content-label-block').stop(true).slideToggle();

    });


    // Testing popup functions

    $('.kl-create-test-btn').on('click', function () {
        $('.kl-headerCust').addClass('modal-opened');
        $('.kl-create-test-menu-wrap').show();
    });

    $('.kl-create-test-menu-wrap').on('click', function (e) {
        if (!$(e.target).closest('.kl-create-test-menu').length) {
            $('.kl-headerCust').removeClass('modal-opened');
            $('.kl-create-test-menu-wrap').hide();
        }
        e.stopPropagation();
    });


    // kl-start-test-btn

    $('body').on('click', '.kl-start-test-btn', function () {
       $(this).toggleClass('active');
    });


  }

  setContent(page) {
    this.$scope.currentPage = page;
  }
}
