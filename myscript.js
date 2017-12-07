// <script>
// 	function visitPage(){
// 		window.location = 'http://www.google.com';
// 	}

// </script>
// <button onclick="visitPage();">visitPage</button>

// <script>
//     function visitPage(){
//         window.location='http://www.example.com';
//     }
//     <button onclick="visitPage();">Visit Page Now </button>
// </script>
#demo{
	width: 200px;
}

<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
</script>