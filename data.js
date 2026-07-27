/* GLGC — Hub & Sunday attendance, week of 27 July 2026.
   Arranged to the official choir groupings (group → governor/choir → pairs).
   reh / sun : a number = submitted (0 is a real reported zero);  null = NOT submitted (defaulter).
   gov  = governor / choir the pair sits under.   note = why a report is missing. */
window.GROUPS = [
  {
    id:"hj", name:"HJ's Group",
    rows:[
      /* HJ — Everlasting Love Choir */
      {label:"Sarah & Francis",   gov:"HJ · Everlasting Love", reh:5,    sun:13},
      {label:"Johnny & Millicent",gov:"HJ · Everlasting Love", reh:2,    sun:5},
      {label:"Fiifi & Bryana",    gov:"HJ · Everlasting Love", reh:7,    sun:9},
      {label:"HJ (Nungua)",       gov:"HJ · Everlasting Love", reh:3,    sun:8},
      {label:"Festus (Ayorkowui)",gov:"HJ · Everlasting Love", reh:null, sun:4,  note:"No rehearsal report"},
      {label:"Kezia & Joycelyn",  gov:"HJ · Everlasting Love", reh:5,    sun:9},
      {label:"HJ (FSLOA)",        gov:"HJ · Everlasting Love", reh:null, sun:13, note:"Sunday only, no rehearsal"},
      /* Janet — Love is Large */
      {label:"Janet (Tesano)",    gov:"Janet · Love is Large", reh:5,    sun:18},
      {label:"Aunty Christie (Kasoa)", gov:"Janet · Love is Large", reh:null, sun:null, note:"Not yet reported"},
      {label:"Grace (Mempeasem)", gov:"Janet · Love is Large", reh:3,    sun:null, note:"No Sunday report"},
    ]
  },
  {
    id:"dorcas", name:"Dorcas' Group",
    rows:[
      /* Dorcas — True Love Choir */
      {label:"Dorcas & Mary",     gov:"Dorcas · True Love", reh:12,   sun:23},
      {label:"Cydel & David",     gov:"Dorcas · True Love", reh:4,    sun:8},
      {label:"Abigail & Abigail", gov:"Dorcas · True Love", reh:4,    sun:5},
      {label:"Edwin",             gov:"Dorcas · True Love", reh:4,    sun:2},
      {label:"Gifty",             gov:"Dorcas · True Love", reh:null, sun:4,  note:"No rehearsal report"},
      {label:"Lovelace & Jonathan",gov:"Dorcas · True Love", reh:null, sun:5,  note:"No rehearsal report"},
      /* Keziah — Love is Kind */
      {label:"Belinda",           gov:"Keziah · Love is Kind", reh:5,    sun:null, note:"No Sunday report"},
      {label:"Vanessa & Nana Aba",gov:"Keziah · Love is Kind", reh:4,    sun:5},
      {label:"Miracle & Keziah",  gov:"Keziah · Love is Kind", reh:null, sun:9,  note:"No per-pair rehearsal count"},
      {label:"Amanda & Christabel",gov:"Keziah · Love is Kind", reh:null, sun:0,  note:"No per-pair rehearsal count"},
      {label:"Grace (Keziah)",    gov:"Keziah · Love is Kind", reh:null, sun:3,  note:"No rehearsal report"},
      /* Claudia — Love Never Fails */
      {label:"Pascaline & Cornelius", gov:"Claudia · Love Never Fails", reh:4,    sun:8},
      {label:"Claudia & Esther",  gov:"Claudia · Love Never Fails", reh:11,   sun:10},
      {label:"Elizabeth & Christiana", gov:"Claudia · Love Never Fails", reh:null, sun:5, note:"No rehearsal count"},
      {label:"Juliana & Theresa", gov:"Claudia · Love Never Fails", reh:null, sun:2, note:"No rehearsal count"},
      {label:"Angelina & Blessing", gov:"Claudia · Love Never Fails", reh:null, sun:3, note:"No rehearsal count"},
      {label:"Faris & Godfred",   gov:"Claudia · Love Never Fails", reh:0,    sun:0},
      {label:"Sarah & Hannah",    gov:"Claudia · Love Never Fails", reh:2,    sun:null, note:"No Sunday report"},
      {label:"Beatrice & Nancy",  gov:"Claudia · Love Never Fails", reh:0,    sun:null, note:"No Sunday report"},
      {label:"Blessing & Solomon",gov:"Claudia · Love Never Fails", reh:2,    sun:null, note:"No Sunday report"},
      /* Princess — Love Never Fails */
      {label:"Princess",          gov:"Princess · Love Never Fails", reh:null, sun:11, note:"No rehearsal report"},
      /* RJ — Love Never Fails */
      {label:"Yvonne",            gov:"RJ · Love Never Fails", reh:2,    sun:5},
      {label:"Matthew & Bernard", gov:"RJ · Love Never Fails", reh:null, sun:null, note:"No report (had IAs)"},
      /* Helen — Abundant Love 2 */
      {label:"Helen & Morgan",    gov:"Helen · Abundant Love 2", reh:10,   sun:20},
    ]
  },
  {
    id:"johanna", name:"Johanna's Group",
    rows:[
      /* Johanna — Steadfast Love */
      {label:"Johanna & Eugene",  gov:"Johanna · Steadfast Love", reh:6, sun:null, note:"No Sunday report"},
      {label:"Praise & Mercy",    gov:"Johanna · Steadfast Love", reh:1, sun:null, note:"No Sunday report"},
      {label:"Linda & Esther",    gov:"Johanna · Steadfast Love", reh:1, sun:null, note:"No Sunday report"},
      {label:"Faustina & Betty",  gov:"Johanna · Steadfast Love", reh:4, sun:null, note:"No Sunday report"},
      /* Joanita — Steadfast Love & God so Loved */
      {label:"Joanita & Eric",    gov:"Joanita · Steadfast Love", reh:8, sun:37},
      {label:"Princess & Prince / Sumaila & Micheal", gov:"Joanita · God so Loved", reh:3, sun:30, note:"God so Loved — reported jointly"},
      /* Stephanie — God so Loved */
      {label:"Stephanie & Francis", gov:"Stephanie · God so Loved", reh:null, sun:null, note:"Not yet reported"},
      {label:"Paulina & Sylvester", gov:"Stephanie · God so Loved", reh:null, sun:null, note:"Not yet reported"},
      /* Aseda — Perfect Love */
      {label:"Honesty & Joanna",  gov:"Aseda · Perfect Love", reh:8, sun:null, note:"No Sunday report"},
      {label:"Mina & Aseda",      gov:"Aseda · Perfect Love", reh:null, sun:null, note:"Not yet reported"},
      {label:"Magdalene & Zita",  gov:"Aseda · Perfect Love", reh:null, sun:null, note:"Not yet reported"},
      {label:"Sharlly & Khaled",  gov:"Aseda · Perfect Love", reh:null, sun:null, note:"Not yet reported"},
      /* Rejoice & Davidina — Peace & Love (pairs unconfirmed in the roster) */
      {label:"Rejoice & Davidina (pairs TBC)", gov:"Rejoice & Davidina · Peace & Love", reh:null, sun:null, note:"Pairs to be confirmed"},
    ]
  },
  {
    id:"michelle", name:"Michelle's Group",
    rows:[
      /* Michelle — Abundant Love 1 */
      {label:"Michelle & Ella",   gov:"Michelle · Abundant Love 1", reh:11,   sun:30},
      {label:"Lina & Stephen",    gov:"Michelle · Abundant Love 1", reh:null, sun:8,  note:"No rehearsal reported"},
      /* Emmanuel — Peace & Love */
      {label:"Emmanuel",          gov:"Emmanuel · Peace & Love", reh:18, sun:27},
    ]
  },
];

/* shared helpers ---------------------------------------------------------- */
window.GLGC = {
  sum: function (rows, key) { return rows.reduce(function (a, r) { return a + (r[key] == null ? 0 : r[key]); }, 0); },
  defaulters: function (rows, key) { return rows.filter(function (r) { return r[key] == null; }); },
  has: function (rows, key) { return rows.some(function (r) { return r[key] != null; }); },
  // distinct governors/choirs in a group, in first-seen order, with pair counts
  choirs: function (rows) { var o=[], seen={}; rows.forEach(function(r){ var g=r.gov||'—'; if(!(g in seen)){seen[g]=0;o.push(g);} seen[g]++; }); return o.map(function(g){return {gov:g, n:seen[g]};}); },
};
