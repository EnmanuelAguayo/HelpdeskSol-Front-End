function alerts(title, icon, text, confirmButtonText, redirect){
  if(redirect == ""){
    Swal.fire({
      title: title,
      icon: icon,
      text: text,
      confirmButtonText: confirmButtonText,
      allowOutsideClick: false
    })
  }else{
    Swal.fire({
      title: title,
      icon: icon,
      text: text,
      confirmButtonText: confirmButtonText,
      allowOutsideClick: false
    }).then((result) => {
      if(result.isConfirmed){
        window.location = redirect;
      }
    })
  }
}
