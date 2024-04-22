window.addEventListener("load", function () {

    const _count = this.document.getElementById('count');
    const _progress = this.document.getElementById("progress");
    const _question = this.document.getElementById("question");
    const _vaiant_a = this.document.getElementById("vaiant_a");
    const _vaiant_b = this.document.getElementById("vaiant_b");
    const _vaiant_c = this.document.getElementById("vaiant_c");

    const level = "level_1";

    let questions = [..._questions_[level]];
    let variants = [..._variants_[level]];

    let _score_ = 0;
    let index = 0;
    let count = questions.length;
    let status = true;


    Start();
    Events();
    RunGame();

    function Start() {
        _count.innerText = index + 1;
        _progress.max = count;
        _progress.value = index + 1;
    }

    function Events() {
        [_vaiant_a, _vaiant_b, _vaiant_c].forEach(function (variant) {
            variant.addEventListener('click', function () {
                if (status) {
                    status = false;
                    this.classList.add("select");
                    const select = this.innerText.trim();
                    const { success, score } = variants[index];
                    setTimeout(() => {
                        Control(select, success, score);
                        this.classList.remove("select");
                    }, 2000);
                }
            });
        });
    }

    function Control(select, success, score = 0) {

        if (select != success) EndGame();
        else {
            _score_ += score;
            index++;
            if (index >= count) EndGame();
            else {
                status = true;
                RunGame();
                Start();
            }
        }
    }

    function EndGame() {
        localStorage.setItem("_score_", _score_);
        localStorage.setItem("level", level);
        window.open("end.html", "_parent");
    }

    function RunGame() {
        const { question, A, B, C } = questions[index];
        _question.innerText = question;
        _vaiant_a.innerText = A;
        _vaiant_b.innerText = B;
        _vaiant_c.innerText = C;
    }

});
