import $ from 'jquery'
import 'select2'

$(function () {
  $('.js-searchable').select2({
    dropdownAutoWidth: true,
    theme: 'bootstrap4'
  });
});