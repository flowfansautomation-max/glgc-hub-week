/* GLGC — Hub & Sunday attendance, week of 27 July 2026.
   reh / sun : a number = submitted (0 is a real reported zero);  null = NOT submitted (defaulter).
   note = reason a report was missing, where the report gave one (shown in the defaulter panels).

   NOTE on Dorcas' Group: rehearsal was reported with different pair groupings than Sunday
   (Keziah's & Claudia's choirs were group-reported at rehearsal but per-pair on Sunday),
   so several pairs legitimately have data on only one side. All reported numbers are preserved:
   rehearsal total 57, Sunday total 108. */
window.GROUPS = [
  {
    id:"hj", name:"HJ's Group",
    rows:[
      {label:"Sarah & Francis/Millicent", reh:5,    sun:13},
      {label:"Johnny & Millicent",        reh:2,    sun:5},
      {label:"Fiifi & Bryana",            reh:7,    sun:9},
      {label:"HJ (Nungua)",               reh:3,    sun:8},
      {label:"Festus",                    reh:null, sun:4,  note:"No rehearsal report"},
      {label:"Kezia & Joycelyn",          reh:5,    sun:9},
      {label:"HJ (FSLOA)",                reh:null, sun:13, note:"Sunday only, no rehearsal"},
      {label:"Janet",                     reh:5,    sun:18},
    ]
  },
  {
    id:"dorcas", name:"Dorcas' Group",
    rows:[
      /* True Love (Dorcas L) — reh 24 · sun 47 */
      {label:"Dorcas & Mary",              reh:12,   sun:23},
      {label:"Cydel & David",              reh:4,    sun:8},
      {label:"Abigail & Abigail",          reh:4,    sun:5},
      {label:"Edwin",                      reh:4,    sun:2},
      {label:"Gifty & Gifty",              reh:null, sun:4,  note:"No rehearsal report"},
      {label:"Lovelace & Jonathan",        reh:null, sun:5,  note:"No rehearsal report"},
      /* Love Is Large (Keziah) — reh 9 · sun 17 */
      {label:"Belinda",                    reh:5,    sun:null, note:"No Sunday report"},
      {label:"Vanessa & Nana Aba",         reh:4,    sun:5},
      {label:"Miracle & Keziah",           reh:null, sun:9,  note:"No per-pair rehearsal count"},
      {label:"Amanda & Christabel",        reh:null, sun:0,  note:"No per-pair rehearsal count"},
      {label:"Grace (Keziah)",             reh:null, sun:3,  note:"No rehearsal report"},
      /* Love Never Fails 1 (Claudia) — reh 19 · sun 28 */
      {label:"Pascaline & Cornelius",      reh:4,    sun:8},
      {label:"Claudia & Esther",           reh:11,   sun:10},
      {label:"Elizabeth & Christiana",     reh:null, sun:5,  note:"No rehearsal count"},
      {label:"Blessing & Angelina",        reh:null, sun:3,  note:"No rehearsal count"},
      {label:"Theresa & Justine",          reh:null, sun:2,  note:"No rehearsal count"},
      {label:"Godfred & Faris",            reh:0,    sun:0},
      {label:"Sarah & Hannah",             reh:2,    sun:null, note:"No Sunday report"},
      {label:"Beatrice & Nancy",           reh:0,    sun:null, note:"No Sunday report"},
      {label:"Blessing Gidimadjor & Solomon", reh:2, sun:null, note:"No Sunday report"},
      /* Love Never Fails 2 (Princess) — sun 11 */
      {label:"Princess & Eva",             reh:null, sun:11, note:"New choir — no rehearsal"},
      /* RJ — reh 2 · sun 5 */
      {label:"Yvonne",                     reh:2,    sun:5},
      {label:"Matthew & Bernard",          reh:null, sun:null, note:"No report (had IAs)"},
      /* Chris D — reh 3 */
      {label:"Grace & Stephen",            reh:3,    sun:null, note:"No Sunday report"},
    ]
  },
  {
    id:"johanna", name:"Johanna's Group",
    rows:[
      {label:"Johanna & Eugene",       reh:6, sun:null, note:"No Sunday report"},
      {label:"Praise & Mercy",         reh:1, sun:null, note:"No Sunday report"},
      {label:"Linda & Esther",         reh:1, sun:null, note:"No Sunday report"},
      {label:"Faustina & Betty",       reh:4, sun:null, note:"No Sunday report"},
      {label:"Honesty & Joanna Shella",reh:8, sun:null, note:"No Sunday report"},
      {label:"Joanita & Eric",         reh:8, sun:37},
      {label:"God So Loved Choir",     reh:3, sun:30},
    ]
  },
  {
    id:"michelle", name:"Michelle's Group",
    rows:[
      {label:"Michelle & Ella", reh:11,   sun:30},
      {label:"Emmanuel",        reh:18,   sun:27},
      {label:"Helen & Morgan",  reh:10,   sun:null, note:"No Sunday report"},
      {label:"Lina & Stephen",  reh:null, sun:8,  note:"No rehearsal reported"},
    ]
  },
];

/* shared helpers ---------------------------------------------------------- */
window.GLGC = {
  sum: function (rows, key) { return rows.reduce(function (a, r) { return a + (r[key] == null ? 0 : r[key]); }, 0); },
  defaulters: function (rows, key) { return rows.filter(function (r) { return r[key] == null; }); },
  has: function (rows, key) { return rows.some(function (r) { return r[key] != null; }); },
};
