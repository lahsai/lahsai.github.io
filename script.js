function dquery(query) {
    return document.querySelector(query)
}

function switchIndicator(n, e) {
    try {
        dquery(".selected-indicator").classList.remove("selected-indicator")
        e.classList.add("selected-indicator")
    } catch (e) {}
    dquery("#img_variable").src = dquery("#img_"+n).src
    dquery("#title_variable").innerHTML = dquery("#title_"+n).innerHTML
    dquery("#blurb_variable").innerHTML = dquery("#blurb_"+n).innerHTML
}

function dcreate(selector, classname=null) {
    const e = document.createElement(selector)
    if (classname) {
      e.className = classname
    }
    return e
  }