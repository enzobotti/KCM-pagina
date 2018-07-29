// VALIDACION DE FORMULARIO DE CONTACTO

var nameInputNode = $('#nombre')
var emailInputNode = $('#email')
var phoneInputNode = $('#telefono')
var companyInputNode = $('#empresa')
var commentsInputNode = $('#mensaje')
var submitButtonNode = $('#enviar')

var nameLabelNode = $('name-label')

nameInputNode.one('blur', validateEmtpyField)
emailInputNode.one('blur', validateEmailField)
commentsInputNode.one('blur', validateEmtpyField)




function validateEmtpyField (event) {
  var inputNode = $(this)

  var errorText = ''
  inputNode.next().remove()

  if (!inputNode.val()) {
    errorText = 'Campo '+ inputNode[0].name + ' requerido'
  }

  if (errorText) {
    inputNode.addClass('is-invalid')
    inputNode.removeClass('is-valid')

    var parentNode = inputNode.parent()

    parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
  } else {
    inputNode.addClass('is-valid')
    inputNode.removeClass('is-invalid')
  }

  if (event.type === 'blur') {
    inputNode.on('input', validateEmtpyField)
  }

  validateButton()
}

  function validateEmailField (event) {
    var inputNode = $(this)

    var errorText = ''

    inputNode.next().remove()

    var value = inputNode.val()

    if (!value) {
      errorText = errorText + 'Campo e-mail requerido '
    } else {
      if (value.indexOf('@') === -1) {
        errorText = errorText + 'Debe contener arroba (@) '
      }
      if (value.indexOf('.') === -1) {
        errorText = errorText + 'Debe contener punto (.) '
      }
    }

    if (errorText) {
      inputNode.addClass('is-invalid')
      inputNode.removeClass('is-valid')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
    } else {
      inputNode.addClass('is-valid')
      inputNode.removeClass('is-invalid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmailField)
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


