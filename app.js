(function () {
  const $ = (id) => document.getElementById(id);
  const store = {
    get() { try { return JSON.parse(localStorage.getItem("shayari-demo") || "{}"); } catch (e) { return {}; } },
    set(v) { localStorage.setItem("shayari-demo", JSON.stringify(v)); },
    clear() { localStorage.removeItem("shayari-demo"); }
  };

  let state = store.get();
  let currentMood = null;
  let lastIdx = -1;

  function hourCheckin() {
    const h = new Date().getHours();
    if (h >= 23 || h < 5) return CHECKINS.lateNight;
    if (h >= 5 && h < 12) return CHECKINS.morning;
    if (h >= 12 && h < 17) return CHECKINS.afternoon;
    return CHECKINS.evening;
  }

  function show(id) {
    ["onboarding", "home", "poem"].forEach((s) => $(s).classList.toggle("hidden", s !== id));
  }

  function greet() {
    const visits = state.visits || 0;
    const name = state.name;
    let g = "Hello, " + name + ".";
    if (visits > 1) g = "Welcome back, " + name + ". I remembered you.";
    $("greeting").textContent = g;
    let c = hourCheckin();
    if (state.lastMood && visits > 1) {
      c += " Last time you were feeling " + SHAYARI[state.lastMood].label + ".";
    }
    $("checkin").textContent = c;
  }

  function buildMoods() {
    const wrap = $("moods");
    wrap.innerHTML = "";
    Object.keys(SHAYARI).forEach((k) => {
      const b = document.createElement("button");
      b.innerHTML = SHAYARI[k].label + '<span class="en">' + SHAYARI[k].hint + "</span>";
      b.onclick = () => pickMood(k);
      wrap.appendChild(b);
    });
  }

  function pickMood(k) {
    currentMood = k;
    state.lastMood = k;
    store.set(state);
    renderPoem(true);
    show("poem");
  }

  function renderPoem() {
    const arr = SHAYARI[currentMood].lines;
    let i;
    do { i = Math.floor(Math.random() * arr.length); } while (arr.length > 1 && i === lastIdx);
    lastIdx = i;
    const p = arr[i];
    $("poemMood").textContent = SHAYARI[currentMood].label + " - for " + state.name;
    $("line1").textContent = p.l1;
    $("line2").textContent = p.l2;
    $("note").textContent = p.note;
    state.poemCount = (state.poemCount || 0) + 1;
    store.set(state);
    $("memoryNote").textContent =
      "She remembers (only in this browser): " + state.name + " - visit " + state.visits +
      " - " + state.poemCount + " poems shared - last mood: " + SHAYARI[state.lastMood].label + ".";
  }

  $("startBtn").onclick = () => {
    const name = $("nameInput").value.trim();
    if (!name) { $("nameInput").focus(); return; }
    state.name = name;
    state.visits = 1;
    store.set(state);
    greet(); show("home");
  };
  $("nameInput").addEventListener("keydown", (e) => { if (e.key === "Enter") $("startBtn").click(); });
  $("moreBtn").onclick = () => renderPoem();
  $("moodBtn").onclick = () => { greet(); show("home"); };
  $("wipeBtn").onclick = () => { store.clear(); state = {}; location.reload(); };

  buildMoods();
  if (state.name) {
    state.visits = (state.visits || 0) + 1;
    store.set(state);
    greet(); show("home");
  } else {
    show("onboarding");
  }
})();
