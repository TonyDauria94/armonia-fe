import{e as C}from"./chunk-AGKBOW4F.js";import{h as _}from"./chunk-T5MGSZUI.js";import{Da as f,L as b,La as y,Pa as h,Qa as d,Ra as g,Sa as v,Ta as n,Ua as t,bb as u,jb as a,kb as o,lb as p,na as x,ra as e}from"./chunk-3OSYFETV.js";import{a as m,b as c}from"./chunk-IK44ALKY.js";var F=(s,l)=>l.id;function M(s,l){if(s&1&&(n(0,"a",6)(1,"code"),a(2),t(),a(3),t()),s&2){let r=l.$implicit,i=u();v("href","#"+r.id,x),e(2),o(r.extension),e(),p(" ",i.i18n.translate(r.titleKey)," ")}}function S(s,l){if(s&1&&(n(0,"li"),a(1),t()),s&2){let r=l.$implicit,i=u();e(),o(i.i18n.translate(r))}}function O(s,l){if(s&1&&(n(0,"li"),a(1),t()),s&2){let r=l.$implicit,i=u(2);e(),o(i.i18n.translate(r))}}function D(s,l){if(s&1&&(n(0,"section",9)(1,"h2")(2,"code"),a(3),t(),a(4),t(),n(5,"p"),a(6),t(),n(7,"div",10)(8,"strong"),a(9),t(),n(10,"span"),a(11),t()(),n(12,"h3"),a(13),t(),n(14,"pre")(15,"code"),a(16),t()(),n(17,"h3")(18,"code"),a(19,"manifest.json"),t()(),n(20,"pre")(21,"code"),a(22),t()(),n(23,"h3")(24,"code"),a(25),t()(),n(26,"pre")(27,"code"),a(28),t()(),n(29,"h3"),a(30),t(),n(31,"ul"),d(32,O,2,1,"li",null,h),t()()),s&2){let r=l.$implicit,i=u();v("id",r.id),e(3),o(r.extension),e(),p(" ",i.i18n.translate(r.titleKey)," "),e(2),o(i.i18n.translate(r.purposeKey)),e(3),o(i.i18n.translate("archiveFormatsDetail.importBehaviorTitle")),e(2),o(i.i18n.translate(r.importKey)),e(2),o(i.i18n.translate("archiveFormatsDetail.structureTitle")),e(3),o(r.tree),e(6),o(r.manifest),e(3),o(r.documentTitle),e(3),o(r.document),e(2),o(i.i18n.translate("archiveFormatsDetail.formatNotesTitle")),e(2),g(r.notes)}}var P=class s{i18n=b(_);commonRules=["archiveFormatsDetail.ruleZip","archiveFormatsDetail.ruleManifest","archiveFormatsDetail.rulePaths","archiveFormatsDetail.ruleSlug","archiveFormatsDetail.ruleReferences","archiveFormatsDetail.ruleOfficial","archiveFormatsDetail.ruleSetlist","archiveFormatsDetail.ruleJson"];get formats(){return this.i18n.language()==="it"?this.italianFormats:this.englishFormats}italianFormats=[{id:"arb",extension:".arb",titleKey:"archiveFormatsDetail.arbTitle",purposeKey:"archiveFormatsDetail.arbPurpose",importKey:"archiveFormatsDetail.arbImport",tree:`armonia-backup-2026-06-16.arb
+-- manifest.json
+-- library/
|   +-- astro-del-ciel.cmd.md
|   +-- tu-sei.cmd.md
+-- songbooks/
    +-- canti-di-natale/
    |   +-- songbook.json
    +-- domenica-sera/
        +-- songbook.json`,manifest:`{
  "format": "armonia-archive",
  "version": 2,
  "scope": "full",
  "exportedAt": "2026-06-16T20:30:00.000Z"
}`,documentTitle:"songbooks/canti-di-natale/songbook.json",document:`{
  "name": "Canti di Natale",
  "sections": [
    {
      "position": 1,
      "name": "Ingresso",
      "letter": "A",
      "songs": [
        {
          "number": 1,
          "source": "user",
          "slug": "astro-del-ciel"
        },
        {
          "number": 2,
          "source": "official",
          "slug": "tu-scendi-dalle-stelle"
        }
      ]
    }
  ]
}`,notes:["archiveFormatsDetail.arbNoteScope","archiveFormatsDetail.arbNoteLibrary","archiveFormatsDetail.arbNoteSongbooks"]},{id:"arl",extension:".arl",titleKey:"archiveFormatsDetail.arlTitle",purposeKey:"archiveFormatsDetail.arlPurpose",importKey:"archiveFormatsDetail.arlImport",tree:`armonia-library-2026-06-16.arl
+-- manifest.json
+-- library/
    +-- astro-del-ciel.cmd.md
    +-- tu-sei.cmd.md`,manifest:`{
  "format": "armonia-archive",
  "version": 2,
  "scope": "library",
  "exportedAt": "2026-06-16T20:30:00.000Z"
}`,documentTitle:"library/astro-del-ciel.cmd.md",document:`---
title: Astro del ciel
slug: astro-del-ciel
key: C
---

## Strofa
[C]Astro del ciel`,notes:["archiveFormatsDetail.arlNoteScope","archiveFormatsDetail.arlNoteNoSongbooks","archiveFormatsDetail.arlNoteOverwrite"]},{id:"asb",extension:".asb",titleKey:"archiveFormatsDetail.asbTitle",purposeKey:"archiveFormatsDetail.asbPurpose",importKey:"archiveFormatsDetail.asbImport",tree:`armonia-songbook-canti-di-natale-2026-06-16.asb
+-- manifest.json
+-- library/
|   +-- astro-del-ciel.cmd.md
+-- songbooks/
    +-- canti-di-natale/
        +-- songbook.json`,manifest:`{
  "format": "armonia-archive",
  "version": 2,
  "scope": "songbook",
  "exportedAt": "2026-06-16T20:30:00.000Z"
}`,documentTitle:"songbooks/canti-di-natale/songbook.json",document:`{
  "name": "Canti di Natale",
  "sections": [
    {
      "position": 1,
      "name": "Ingresso",
      "letter": "A",
      "songs": [
        {
          "number": 1,
          "source": "user",
          "slug": "astro-del-ciel"
        }
      ]
    }
  ]
}`,notes:["archiveFormatsDetail.asbNoteScope","archiveFormatsDetail.asbNoteSingleSongbook","archiveFormatsDetail.asbNoteLibrary"]},{id:"asl",extension:".asl",titleKey:"archiveFormatsDetail.aslTitle",purposeKey:"archiveFormatsDetail.aslPurpose",importKey:"archiveFormatsDetail.aslImport",tree:`veglia-di-natale.asl
+-- manifest.json
+-- library/
|   +-- astro-del-ciel.cmd.md
|   +-- tu-sei.cmd.md
+-- setlist/
    +-- setlist.json`,manifest:`{
  "format": "armonia-archive",
  "version": 2,
  "scope": "setlist",
  "exportedAt": "2026-06-16T20:30:00.000Z"
}`,documentTitle:"setlist/setlist.json",document:`{
  "title": "Veglia di Natale",
  "items": [
    {
      "id": "item-1",
      "title": "Astro del ciel",
      "songSlug": "astro-del-ciel",
      "settings": {
        "transposition": 0,
        "textSizeStep": 0,
        "autoScrollDurationSeconds": 150
      }
    }
  ]
}`,notes:["archiveFormatsDetail.aslNoteManifest","archiveFormatsDetail.aslNoteSongSlug","archiveFormatsDetail.aslNoteDuplicates"]}];englishFormats=[c(m({},this.italianFormats[0]),{tree:`armonia-backup-2026-06-16.arb
+-- manifest.json
+-- library/
|   +-- silent-night.cmd.md
|   +-- you-are.cmd.md
+-- songbooks/
    +-- christmas-songs/
    |   +-- songbook.json
    +-- sunday-evening/
        +-- songbook.json`,documentTitle:"songbooks/christmas-songs/songbook.json",document:`{
  "name": "Christmas songs",
  "sections": [
    {
      "position": 1,
      "name": "Entrance",
      "letter": "A",
      "songs": [
        {
          "number": 1,
          "source": "user",
          "slug": "silent-night"
        },
        {
          "number": 2,
          "source": "official",
          "slug": "o-come-all-ye-faithful"
        }
      ]
    }
  ]
}`}),c(m({},this.italianFormats[1]),{tree:`armonia-library-2026-06-16.arl
+-- manifest.json
+-- library/
    +-- silent-night.cmd.md
    +-- you-are.cmd.md`,documentTitle:"library/silent-night.cmd.md",document:`---
title: Silent Night
slug: silent-night
key: C
---

## Verse
[C]Silent night`}),c(m({},this.italianFormats[2]),{tree:`armonia-songbook-christmas-songs-2026-06-16.asb
+-- manifest.json
+-- library/
|   +-- silent-night.cmd.md
+-- songbooks/
    +-- christmas-songs/
        +-- songbook.json`,documentTitle:"songbooks/christmas-songs/songbook.json",document:`{
  "name": "Christmas songs",
  "sections": [
    {
      "position": 1,
      "name": "Entrance",
      "letter": "A",
      "songs": [
        {
          "number": 1,
          "source": "user",
          "slug": "silent-night"
        }
      ]
    }
  ]
}`}),c(m({},this.italianFormats[3]),{tree:`christmas-vigil.asl
+-- manifest.json
+-- library/
|   +-- silent-night.cmd.md
|   +-- you-are.cmd.md
+-- setlist/
    +-- setlist.json`,documentTitle:"setlist/setlist.json",document:`{
  "title": "Christmas vigil",
  "items": [
    {
      "id": "item-1",
      "title": "Silent Night",
      "songSlug": "silent-night",
      "settings": {
        "transposition": 0,
        "textSizeStep": 0,
        "autoScrollDurationSeconds": 150
      }
    }
  ]
}`})];static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["app-archive-formats-guide"]],decls:27,vars:8,consts:[[1,"archive-guide-page"],[1,"archive-guide-header"],["routerLink","/guide",1,"btn","btn-sm","btn-outline-secondary"],[1,"archive-guide-layout"],[1,"archive-guide-index"],["href","#common-rules"],[3,"href"],[1,"archive-guide-content"],["id","common-rules",1,"archive-guide-section"],[1,"archive-guide-section",3,"id"],[1,"archive-guide-summary"]],template:function(r,i){r&1&&(n(0,"article",0)(1,"header",1)(2,"a",2),a(3),t(),n(4,"h1"),a(5),t(),n(6,"p"),a(7),t()(),n(8,"div",3)(9,"nav",4)(10,"h2"),a(11),t(),n(12,"a",5),a(13),t(),d(14,M,4,3,"a",6,F),t(),n(16,"div",7)(17,"section",8)(18,"h2"),a(19),t(),n(20,"p"),a(21),t(),n(22,"ul"),d(23,S,2,1,"li",null,h),t()(),d(25,D,34,12,"section",9,F),t()()()),r&2&&(e(3),p(" ",i.i18n.translate("archiveFormatsDetail.backGuide")," "),e(2),o(i.i18n.translate("archiveFormatsDetail.title")),e(2),o(i.i18n.translate("archiveFormatsDetail.intro")),e(2),y("aria-label",i.i18n.translate("archiveFormatsDetail.indexTitle")),e(2),o(i.i18n.translate("archiveFormatsDetail.indexTitle")),e(2),o(i.i18n.translate("archiveFormatsDetail.commonRulesTitle")),e(),g(i.formats),e(5),o(i.i18n.translate("archiveFormatsDetail.commonRulesTitle")),e(2),o(i.i18n.translate("archiveFormatsDetail.commonRulesIntro")),e(2),g(i.commonRules),e(2),g(i.formats))},dependencies:[C],styles:[".archive-guide-page[_ngcontent-%COMP%]{margin:0 auto;max-width:var(--app-page-max-width);min-width:0;padding:2rem 1rem;width:100%}.archive-guide-header[_ngcontent-%COMP%]{border-bottom:1px solid var(--bs-border-color);margin-bottom:1.5rem;padding-bottom:1.25rem}.archive-guide-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;font-weight:750;margin:1.25rem 0 .5rem}.archive-guide-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .archive-guide-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .archive-guide-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .archive-guide-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--bs-secondary-color);line-height:1.65}.archive-guide-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .archive-guide-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.archive-guide-index[_ngcontent-%COMP%]{background:var(--bs-tertiary-bg);border:1px solid var(--bs-border-color);border-radius:var(--bs-border-radius);display:flex;flex-direction:column;gap:.65rem;margin-bottom:2rem;padding:1rem}.archive-guide-index[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1rem;margin:0 0 .15rem}.archive-guide-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--bs-primary);text-decoration:none}.archive-guide-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .archive-guide-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{text-decoration:underline}.archive-guide-content[_ngcontent-%COMP%]{min-width:0}.archive-guide-section[_ngcontent-%COMP%]{border-bottom:1px solid var(--bs-border-color);margin-bottom:2rem;padding:0 0 2rem;scroll-margin-top:1rem}.archive-guide-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;margin:0 0 .75rem}.archive-guide-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:700;margin:1.75rem 0 .5rem}.archive-guide-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.75rem 0 0;padding-left:1.25rem}.archive-guide-summary[_ngcontent-%COMP%]{border-left:3px solid var(--bs-primary);margin-top:1rem;padding-left:.9rem}.archive-guide-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .archive-guide-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.archive-guide-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-bottom:.25rem}.archive-guide-page[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:var(--bs-body-color)}.archive-guide-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--bs-tertiary-bg);border:1px solid var(--bs-border-color);border-radius:var(--bs-border-radius);font-size:.9rem;line-height:1.55;margin:.75rem 0 0;overflow-x:auto;padding:.9rem 1rem}@media(min-width:900px){.archive-guide-layout[_ngcontent-%COMP%]{align-items:start;display:grid;gap:2.25rem;grid-template-columns:13rem minmax(0,1fr)}.archive-guide-index[_ngcontent-%COMP%]{margin-bottom:0;position:sticky;top:1.25rem}}@media(max-width:899.98px){.archive-guide-index[_ngcontent-%COMP%]{text-align:center}}@media(max-width:576px){.archive-guide-page[_ngcontent-%COMP%]{padding:1.5rem .75rem}.archive-guide-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.65rem}}"]})};export{P as ArchiveFormatsGuideComponent};
