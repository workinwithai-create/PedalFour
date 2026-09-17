const CDN = "https://cdn.jsdelivr.net/gh/workinwithai-create/PreEight@main/public/samples";
const STEPS = 16;
const HOLD = 4;
const TURN = 4;
const TOTAL = HOLD + TURN;

const recipes = [
  { id: "bass-pedal", name: "Bass pedal", blurb: "Upright holds the tonic root for all four. Chords move above it. Resolve on the next section downbeat." },
  { id: "pad-drone", name: "Pad drone", blurb: "Violin (or soft piano cluster) sustains a common tone. Harmony walks under the drone." },
  { id: "fifth-anchor", name: "Fifth anchor", blurb: "Bass sits on the fifth of the key. Creates dominant tension without a full V chord every bar." },
  { id: "octave-root", name: "Octave root", blurb: "Bass doubles the root in octaves, long notes. Pocket stays thin so the pedal is the story." },
  { id: "kit-thin-pedal", name: "Kit thin + pedal", blurb: "Hats only + sustained bass root. Space and the pedal do the work. Full kit returns on 9." },
  { id: "nylon-static", name: "Nylon static", blurb: "Nylon holds one voicing shape while bass and piano outline moving chords above the same root." },
  { id: "trumpet-hold", name: "Trumpet hold", blurb: "Lead sits on a long note (3 or 5 of the key) while harmony shifts. Short release on bar 8." },
  { id: "double-pedal", name: "Double pedal", blurb: "Bass root + violin common tone together. Maximum lean. Next section must resolve or it will feel unfinished." },
  { id: "half-then-full", name: "Half then full", blurb: "Bars 5–6 pedal only. Bars 7–8 add one chair back. Door opens without dumping energy." },
  { id: "stop-pedal", name: "Stop then pedal", blurb: "Bar 5 is air until beat 3. Then the pedal lands and holds through 8. The return hits harder." }
];

function bar(symbol, piano, guitar, bass) {
  return { symbol, piano, guitar, bass };
}

const grooves = [
  {
    id: "amber",
    name: "Amber Walk",
    bpm: 98,
    key: "A minor",
    pedalRoot: 33,
    hold: [
      bar("Am", [45, 48, 52, 57], [45, 52, 57], 33),
      bar("F", [41, 45, 48, 53], [41, 48, 53], 41),
      bar("C", [48, 52, 55, 60], [48, 52, 55], 36),
      bar("G", [43, 47, 50, 55], [43, 47, 50], 31)
    ],
    turn: [
      bar("F", [41, 45, 48, 53], [41, 48, 53], 33),
      bar("G", [43, 47, 50, 55], [43, 47, 50], 33),
      bar("Am", [45, 48, 52, 57], [45, 52, 57], 33),
      bar("E7", [40, 44, 47, 52], [40, 47, 50], 33)
    ]
  },
  {
    id: "porch",
    name: "Porch Climb",
    bpm: 86,
    key: "E major",
    pedalRoot: 28,
    hold: [
      bar("E", [40, 44, 47, 52], [40, 47, 52], 28),
      bar("B", [35, 39, 42, 47], [35, 42, 47], 23),
      bar("C#m", [44, 47, 51, 56], [44, 51, 56], 32),
      bar("A", [33, 37, 40, 45], [33, 40, 45], 33)
    ],
    turn: [
      bar("A", [33, 37, 40, 45], [33, 40, 45], 28),
      bar("B", [35, 39, 42, 47], [35, 42, 47], 28),
      bar("E", [40, 44, 47, 52], [40, 47, 52], 28),
      bar("B", [35, 39, 42, 47], [35, 42, 47], 28)
    ]
  },
  {
    id: "fold",
    name: "Fold Radio",
    bpm: 104,
    key: "D minor",
    pedalRoot: 26,
    hold: [
      bar("Dm", [38, 41, 45, 50], [38, 45, 50], 26),
      bar("Bb", [34, 38, 41, 46], [34, 41, 46], 34),
      bar("F", [41, 45, 48, 53], [41, 48, 53], 29),
      bar("C", [36, 40, 43, 48], [36, 43, 48], 24)
    ],
    turn: [
      bar("Bb", [34, 38, 41, 46], [34, 41, 46], 26),
      bar("C", [36, 40, 43, 48], [36, 43, 48], 26),
      bar("Dm", [38, 41, 45, 50], [38, 45, 50], 26),
      bar("A7", [33, 37, 40, 43], [33, 40, 43], 26)
    ]
  },
  {
    id: "stair",
    name: "Stair House",
    bpm: 112,
    key: "G major",
    pedalRoot: 31,
    hold: [
      bar("G", [43, 47, 50, 55], [43, 50, 55], 31),
      bar("Em", [40, 43, 47, 52], [40, 47, 52], 28),
      bar("C", [36, 40, 43, 48], [36, 43, 48], 24),
      bar("D", [38, 42, 45, 50], [38, 45, 50], 26)
    ],
    turn: [
      bar("C", [36, 40, 43, 48], [36, 43, 48], 31),
      bar("D", [38, 42, 45, 50], [38, 45, 50], 31),
      bar("G", [43, 47, 50, 55], [43, 50, 55], 31),
      bar("D", [38, 42, 45, 50], [38, 45, 50], 31)
    ]
  },
  {
    id: "carbon",
    name: "Carbon Verse",
    bpm: 92,
    key: "C minor",
    pedalRoot: 24,
    hold: [
      bar("Cm", [36, 39, 43, 48], [36, 43, 48], 24),
      bar("Ab", [32, 36, 39, 44], [32, 39, 44], 32),
      bar("Eb", [39, 43, 46, 51], [39, 46, 51], 27),
      bar("Bb", [34, 38, 41, 46], [34, 41, 46], 34)
    ],
    turn: [
      bar("Ab", [32, 36, 39, 44], [32, 39, 44], 24),
      bar("Bb", [34, 38, 41, 46], [34, 41, 46], 24),
      bar("Cm", [36, 39, 43, 48], [36, 43, 48], 24),
      bar("G7", [31, 35, 38, 43], [31, 38, 41], 24)
    ]
  }
];

const state = {
  groove: grooves[0],
  recipe: recipes[0],
  playing: false,
  bar: -1,
  buffers: {},
  ctx: null
};

let timer = null;

function zone(i) {
  return i < HOLD ? "hold" : "turn";
}

function chordAt(i) {
  const g = state.groove;
  return i < HOLD ? g.hold[i] : g.turn[i - HOLD];
}

async function load() {
  const status = document.getElementById("status");
  status.textContent = "Loading live chairs…";
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    state.ctx = ctx;
    const names = ["piano", "bass", "guitar", "trumpet", "violin", "kick", "snare", "hat", "ride"];
    await Promise.all(
      names.map(async (n) => {
        const url = `${CDN}/${n}.mp3`;
        const res = await fetch(url);
        const buf = await res.arrayBuffer();
        state.buffers[n] = await ctx.decodeAudioData(buf);
      })
    );
    status.textContent = "Chairs seated. Live FluidR3 only. Audio stays in the tab.";
  } catch (e) {
    status.textContent = "Sample load failed — check CDN. Still works for punch list.";
    console.error(e);
  }
}

function playNote(name, midi, when, dur = 0.4, gain = 0.35) {
  if (!state.ctx || !state.buffers[name]) return;
  const src = state.ctx.createBufferSource();
  src.buffer = state.buffers[name];
  const g = state.ctx.createGain();
  g.gain.value = gain;
  const rate = Math.pow(2, (midi - 60) / 12);
  src.playbackRate.value = rate;
  src.connect(g);
  g.connect(state.ctx.destination);
  src.start(when);
  src.stop(when + dur);
}

function scheduleBar(barIndex, when, stepDur) {
  const ch = chordAt(barIndex);
  const z = zone(barIndex);
  const r = state.recipe.id;
  const isPedal = z === "turn";
  const root = state.groove.pedalRoot;

  const thin = isPedal && (r === "kit-thin-pedal" || r === "stop-pedal");
  const kickOn = !thin || barIndex >= 6;
  for (let s = 0; s < STEPS; s++) {
    const t = when + s * stepDur;
    if (s % 4 === 0 && kickOn) playNote("kick", 36, t, 0.25, 0.5);
    if (s % 4 === 2 && !thin) playNote("snare", 38, t, 0.2, 0.4);
    if (thin ? s % 4 === 0 : s % 4 === 0) playNote("hat", 42, t, 0.12, thin ? 0.12 : 0.18);
  }

  if (isPedal) {
    const pedalMidi = r === "fifth-anchor" ? root + 7 : root;
    if (r === "stop-pedal" && barIndex === 4) {
      playNote("bass", pedalMidi, when + 8 * stepDur, 1.6, 0.48);
    } else if (r === "half-then-full" && barIndex < 6) {
      playNote("bass", pedalMidi, when, 1.5, 0.45);
    } else if (r === "octave-root") {
      playNote("bass", pedalMidi, when, 1.6, 0.42);
      playNote("bass", pedalMidi + 12, when, 1.6, 0.28);
    } else {
      playNote("bass", pedalMidi, when, 1.7, 0.48);
      playNote("bass", pedalMidi, when + 8 * stepDur, 0.9, 0.4);
    }
  } else if (ch.bass != null) {
    playNote("bass", ch.bass, when, 0.9, 0.42);
    playNote("bass", ch.bass, when + 8 * stepDur, 0.7, 0.38);
  }

  if (ch.piano) {
    const quiet = isPedal && (r === "kit-thin-pedal" || r === "pad-drone");
    ch.piano.forEach((m, i) => {
      const t = when + (i % 2) * 2 * stepDur;
      playNote("piano", m, t, 0.55, quiet ? 0.18 : 0.28);
    });
  }

  if (ch.guitar) {
    if (isPedal && r === "nylon-static") {
      const shape = state.groove.turn[0].guitar || ch.guitar;
      shape.forEach((m, i) => {
        playNote("guitar", m, when + i * 4 * stepDur, 0.7, 0.26);
      });
    } else {
      ch.guitar.forEach((m, i) => {
        playNote("guitar", m, when + i * 3 * stepDur, 0.5, 0.3);
      });
    }
  }

  if (isPedal) {
    if (r === "pad-drone" || r === "double-pedal") {
      const holdNote = ch.piano ? ch.piano[1] : 60;
      playNote("violin", holdNote, when, 1.6, 0.2);
    }
    if (r === "trumpet-hold") {
      const holdNote = ch.piano ? ch.piano[2] : 64;
      playNote("trumpet", holdNote, when, barIndex === 7 ? 0.9 : 1.5, 0.28);
    }
  }
}

function stop() {
  state.playing = false;
  state.bar = -1;
  if (timer) clearTimeout(timer);
  timer = null;
  paintBars();
}

function play(mode) {
  if (!state.ctx) return;
  if (state.ctx.state === "suspended") state.ctx.resume();
  stop();
  state.playing = true;
  const stepDur = 60 / state.groove.bpm / 4;
  let startBar = 0;
  let endBar = TOTAL;
  if (mode === "loop") {
    startBar = 0;
    endBar = HOLD;
  } else if (mode === "eight") {
    startBar = HOLD;
    endBar = TOTAL;
  }
  let barIndex = startBar;
  const ctx = state.ctx;
  const tick = () => {
    if (!state.playing) return;
    if (barIndex >= endBar) {
      if (mode === "loop") barIndex = startBar;
      else {
        stop();
        return;
      }
    }
    state.bar = barIndex;
    paintBars();
    scheduleBar(barIndex, ctx.currentTime + 0.02, stepDur);
    barIndex += 1;
    timer = setTimeout(tick, STEPS * stepDur * 1000);
  };
  tick();
}

function punch() {
  const g = state.groove;
  const r = state.recipe;
  return `PedalFour punch list\n${g.name} · ${g.bpm} BPM · ${g.key} · ${r.name}\n\nThe problem: generators move the root with every chord so the track never leans. Session players plant a pedal under four bars of moving harmony so tension builds and the next section can resolve.\nThe move: ${r.blurb}\n\nPocket (bars 1–4)\n${g.hold.map((b, i) => `  ${i + 1}. ${b.symbol}`).join("\n")}\n\nPedal (bars 5–8) — ${r.name}\n${g.turn.map((b, i) => `  ${i + 5}. ${b.symbol}  (pedal root held)`).join("\n")}\n\nLive chairs only — FluidR3 piano, upright, nylon, kit, trumpet, violin. Audio never leaves the tab.\nDistinct from BreakFour, LiftTwo, TagFour, TurnFour, PreEight, AfterHook, EndEight, LastHook, CallFour, ModEight, CongaFour, RhodesEight.\nDrop the idea on the four bars before the section that needs to land. Do not keep the root walking.`;
}

function paintGrooves() {
  const el = document.getElementById("grooves");
  el.innerHTML = "";
  grooves.forEach((g) => {
    const b = document.createElement("button");
    b.className = "card" + (state.groove.id === g.id ? " on" : "");
    b.innerHTML = `<b>${g.name}</b><span>${g.bpm} BPM · ${g.key}</span>`;
    b.onclick = () => {
      state.groove = g;
      render();
    };
    el.appendChild(b);
  });
}

function paintRecipes() {
  const el = document.getElementById("recipes");
  el.innerHTML = "";
  recipes.forEach((r) => {
    const b = document.createElement("button");
    b.className = "card" + (state.recipe.id === r.id ? " on" : "");
    b.innerHTML = `<b>${r.name}</b><span>${r.blurb}</span>`;
    b.onclick = () => {
      state.recipe = r;
      render();
    };
    el.appendChild(b);
  });
}

function paintBars() {
  const el = document.getElementById("bars");
  el.innerHTML = "";
  for (let i = 0; i < TOTAL; i++) {
    const ch = chordAt(i);
    const z = zone(i);
    const d = document.createElement("div");
    d.className = "bar " + z + (state.playing && state.bar === i ? " active" : "");
    const label = z === "hold" ? "P" : "Ped";
    d.innerHTML = `<div class="n">${i + 1} · ${label}</div><div class="c">${ch.symbol}</div>`;
    el.appendChild(d);
  }
}

function render() {
  paintGrooves();
  paintRecipes();
  paintBars();
  document.getElementById("punch").textContent = punch();
}

document.getElementById("playA").onclick = () => play("loop");
document.getElementById("playB").onclick = () => play("cut");
document.getElementById("play8").onclick = () => play("eight");
document.getElementById("stop").onclick = stop;
document.getElementById("copy").onclick = () => navigator.clipboard.writeText(punch());

render();
load();
