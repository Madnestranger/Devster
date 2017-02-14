export class MainController {
  constructor($http, $timeout, $scope, api) {
    'ngInject';
    this.$http = $http;
    this.$timeout = $timeout;
    this.api = api;
    this.$scope = $scope;
    this.error = {};
    this.descending = 'ascending';
    this.searchParam = '';
    this.orderParam = 'name';
    var clipboard = new Clipboard('.btn');

    function getLocation(that) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition.bind(that));
      }
    }

    function showPosition(position) {
      this.currentCoordinates = {};
      this.currentCoordinates.lon = position.coords.longitude;
      this.currentCoordinates.lat = position.coords.latitude;
    }

    getLocation(this);
    this.getUsers();
    this.clearUser();
  }

  changeSort() {
    if (this.orderParam.indexOf('-') == -1) {
      this.orderParam = '-' + this.orderParam;
    } else {
      this.orderParam = this.orderParam.substring(1, this.orderParam.length);
    }
  }

  handleUserClick(user, index) {
    this.newUser = user;
    this.newUser.orderIndex = index;
  }

  handleAddUserClick() {
    this.clearUser();
  }

  deleteUser() {
    this.users.splice(this.newUser.orderIndex, 1);
  }

  toRadians(val) {
    return parseFloat(val) * Math.PI / 180;
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371e3; // metres
    var φ1 = this.toRadians(lat1);
    var φ2 = this.toRadians(lat2);
    var Δφ = this.toRadians(lat2 - lat1);
    var Δλ = this.toRadians(lon2 - lon1);

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (R * c) / 1000;
  }

  addUser(user) {
    if (this.users.find(x => x.username == user.username)) {
      this.error.username = true;
      return;
    } else {
      this.error.username = false;
    }
    if (this.users.find(x => x.email == user.email)) {
      this.error.email = true;
      return;
    } else {
      this.error.email = false;
    }
    if (this.users.find(x => x.company.name == user.company.name)) {
      this.error.companyName = true;
      return;
    } else {
      this.error.companyName = false;
    }
    user.id = this.users[this.users.length - 1].id + 1;
    this.users.push(user);
    $("#addUserModal").modal("hide");
    this.clearUser();
  }

  clearUser() {
    this.newUser = {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      company: {}
    }
  }

  getUsers() {
    this.api
      .get(`users`)
      .then(response => {
        this.users = response.data;
        this.loaded = true;
        this.$timeout(() => {
          this.loaded = false;
        }, 2000);
      })
  }
}
