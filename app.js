function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  function reset() {
    var i=div2.children.length;
    while (div2.children != null){
      div1.appendChild(div2.children[div2.children.length-1]);
    }
  }