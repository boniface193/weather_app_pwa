if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {

    }).catch(error => {
        document.getElementById("alert").innerHTML = `
        <div class="alert alert-warning w-50 text-center">${error}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
        </div>`
    })
}