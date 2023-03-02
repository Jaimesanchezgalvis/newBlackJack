const miModulo = (() => {
  "use strict";
  let e = [],
    t = ["C", "D", "H", "S"],
    r = ["A", "J", "Q", "K"],
    l = [],
    a = document.querySelector("#btnPedirCarta"),
    n = document.querySelector("#btnDetenerJuego");
  document.querySelector("#btnNuegoJuego");
  let d = document.querySelectorAll(".divcartas"),
    o = document.querySelectorAll("small"),
    s = (t = 2) => {
      (e = i()), (l = []);
      for (let r = 0; r < t; r++) l.push(0);
      o.forEach((e) => (e.innerText = 0)),
        d.forEach((e) => (e.innerHTML = "")),
        (a.disabled = !1),
        (n.disabled = !1);
    },
    i = () => {
      e = [];
      for (let l = 2; l <= 10; l++) for (let a of t) e.push(l + a);
      for (let n of t) for (let d of r) e.push(d + n);
      return _.shuffle(e);
    },
    u = () => {
      if (0 === e.length) throw "No hay cartas en el deck";
      return e.pop();
    },
    c = (e) => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
    },
    $ = (e, t) => ((l[t] = l[t] + c(e)), (o[t].innerText = l[t]), l[t]),
    g = (e, t) => {
      let r = document.createElement("img");
      (r.src = `assets/cartas/${e}.png`),
        r.classList.add("carta"),
        d[t].append(r);
    },
    f = () => {
      let [e, t] = l;
      setTimeout(() => {
        t === e
          ? alert("Nadie gana :(")
          : e > 21
          ? alert("Computadora gana")
          : t > 21
          ? alert("Jugador gana")
          : alert("Computadora gana");
      }, 10);
    },
    h = (e) => {
      let t = 0;
      do {
        let r = u();
        (t = $(r, l.length - 1)), g(r, l.length - 1);
      } while (t < e && e <= 21);
      f();
    };
  return (
    a.addEventListener("click", () => {
      let e = u(),
        t = $(e, 0);
      g(e, 0),
        t > 21
          ? ((a.disabled = !0), (n.disabled = !0), h(t))
          : 21 === t && ((a.disabled = !0), (n.disabled = !0), h(t));
    }),
    n.addEventListener("click", () => {
      (a.disabled = !0), (n.disabled = !0), h(l[0]);
    }),
    { nuevoJuego: s }
  );
})();
