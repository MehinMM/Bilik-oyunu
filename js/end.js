window.addEventListener("load", function () {

    const _stars = this.document.getElementById('stars');
    const _score = this.document.getElementById("score");
    const _next = this.document.getElementById("next");
    const _again = this.document.getElementById("again");

    
    const level = this.localStorage.getItem("leve")

    _score.innerText = this.localStorage.getItem("_score_");




    _next.addEventListener("click", function(){});
    _again.addEventListener("click", function(){});

});
