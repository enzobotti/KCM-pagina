// VALIDACION DE FORMULARIO DE CONTACTO

var nameInputNode = $('#nombre')
var emailInputNode = $('#email')
var phoneInputNode = $('#telefono')
var companyInputNode = $('#empresa')
var commentsInputNode = $('#mensaje')
var submitButtonNode = $('#enviar')


nameInputNode.one('blur', validateEmtpyField)
emailInputNode.one('blur', validateEmtpyField)
commentsInputNode.one('blur', validateEmtpyField)



function validateEmtpyField (event) {
    var inputNode = $(this)
    var parentNode = inputNode.parent()
  
    if (!inputNode.val()) { 
        $(function () {
            $('[data-toggle="popover"]').popover()
          })
    
        //   parentNode.addClass('is-invalid')
    //   parentNode.removeClass('is-valid')

    } else {
        // parentNode.addClass('is-valid')
        // parentNode.removeClass('is-invalid')
      }   

    if (event.type === 'blur') {
      inputNode.on('input', validateEmtpyField)
    }

    validateButton()
  }

  function validateButton () {
    var validInputNodes = $('.is-valid')

    if (validInputNodes.length === 3) {
      submitButtonNode.attr('disabled', false)
    } else {
      submitButtonNode.attr('disabled', true)
    }
  }

 












//FUNCION LEVANTA DATO DEL FORMULARIO Y LOS MANDA POR MAIL VIA PHP

// submitButtonNode.click(function () {
//   var firstName = firstNameInputNode.val()
//   var email = emailInputNode.val()
//   var comments = commentsInputNode.val()

//   var data = {
//     firstName: firstName,
//     email: email,
//     comments: comments
//   }

//   postData('./simpleEmail.php', data, function (error, data) {
//     if (!error) {
//       window.location.href = 'greetings.html'
//     }
//   })
// })

// function postData (url, data, cbk) {
//   $.ajax({
//     url: url,
//     method: 'POST',
//     data: data
//   })
//     .done(function (data) {
//       cbk(null, data)
//     })
//     .fail(function (error) {
//       cbk(error)
//     })
// }


