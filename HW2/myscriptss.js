
var counter = 0;

function addCard(div)
{
  counter++;
  var node = document.createElement("div");
  node.className = 'card shadow';
  node.id = "card" + toString(counter);

  var linknode = document.createElement("Button");
  linknode.className = 'btn btn-outline-success-sm active';
  linknode.onclick = function() {
    document.getElementById('card' + toString(counter)).remove();
    counter--;
  }


  var textnode = document.createTextNode("Sample Tweet goes here {}.")
  textnode.position = "relative";


  var img = document.createElement("IMG");
  img.style.height = '40px';
  img.style.height = '40px';
  img.src = "./twitter.png";

  linknode.appendChild(img);
  node.appendChild(linknode);
  node.appendChild(textnode);
  document.getElementById(div).appendChild(node);
}
