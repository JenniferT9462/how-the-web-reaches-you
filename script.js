 const steps = [
      "Two computers: <strong>yours</strong>, and a <strong>server</strong> somewhere else that has the page.",
      "You type an address and press Enter. Your browser sends a message: <strong>please send me this page</strong>.",
      "The server sends back <strong>files</strong>. Not a picture of the page, just text files.",
      "<strong>HTML</strong> is <em>what's on the page</em>: the nouns.",
      "<strong>CSS</strong> is <em>how it looks</em>: the adjectives.",
      "<strong>JavaScript</strong> is <em>what it does</em>: the verbs. Click the button!",
      "For your Week 1 page, the server is <strong>GitHub</strong>. <code>git push</code> put your files there."
    ];

    const el = (id) => document.getElementById(id);
    let step = 0;

    function show() {
      el("server-files").classList.toggle("show", step >= 0);
      el("request").classList.toggle("go", step === 1);
      el("files").classList.toggle("go", step === 2);
      el("b-html").classList.toggle("show", step >= 3);
      el("b-text").classList.toggle("show", step >= 3);
      el("built").classList.toggle("styled", step >= 4);
      el("b-js").classList.toggle("show", step >= 5);
      el("server-sub").textContent = step >= 6 ? "GitHub Pages" : "A computer somewhere else";
      el("caption").innerHTML = steps[step];
      el("count").textContent = (step + 1) + " / " + steps.length;
      el("back").disabled = step === 0;
      el("next").disabled = step === steps.length - 1;
    }

    el("next").addEventListener("click", () => { if (step < steps.length - 1) { step++; show(); } });
    el("back").addEventListener("click", () => { if (step > 0) { step--; show(); } });
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") el("next").click();
      if (e.key === "ArrowLeft") el("back").click();
    });
    el("b-js").addEventListener("click", () => alert("Hi! JavaScript made this happen."));

    show();
