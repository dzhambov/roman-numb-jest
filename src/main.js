import { romanSplit } from './../src/romanLogic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



  $(document).ready(function(){
    $('#romanForm').submit(function(event){
      event.preventDefault();
      var input = $('#romanInput').val();
      console.log(romanSplit(input));
      $('#output').text(input +' as a Roman Numeral is ' + romanSplit(input));
    })
  });
