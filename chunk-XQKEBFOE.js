import{a as X,b as Z,d as C,e as M,g as I,h as T,i as te,j as ne,l as ie}from"./chunk-M54KORDH.js";import{a as G,b as W,c as z,d as H,e as U,f as q,g as Q,h as K,i as Y,j as J}from"./chunk-A3Q4A6OM.js";import{a as j,b as B}from"./chunk-ZGA7PMM5.js";import{$ as F,C as S,I as P,J as f,K as v,O as E,P as i,Q as o,R as A,V as b,X as m,Z as p,_ as O,aa as L,da as l,ea as u,fa as g,ga as R,ha as k,ia as y,ja as w,l as _,m as h,n as x,qa as V,ua as D,xa as N,y as a}from"./chunk-O65IK57A.js";var oe=["fileInput"];function re(s,n){if(s&1&&(i(0,"div",18),l(1),o()),s&2){let t=p();a(),u(t.saveError)}}function ae(s,n){if(s&1&&(i(0,"div",27),l(1),o()),s&2){let t=p();a(),R(" ",t.i18n.translate("trackEditor.parseError"),": ",t.parseError," ")}}function le(s,n){if(s&1&&(i(0,"pre",7),l(1),o()),s&2){let t=p();a(),u(t.text)}}function se(s,n){if(s&1){let t=b();i(0,"app-song-preview",30),m("printRequested",function(r){h(t);let c=p();return x(c.printPreviewPdf(r))}),o()}if(s&2){let t=p();E("song",t.parsedSong)("sections",t.previewSections)("metadataGroups",t.previewMetadata)("links",t.previewLinks)("showPrintAction",!0)}}function de(s,n){if(s&1&&(i(0,"div",40),l(1),o()),s&2){let t=p(2);a(),u(t.exampleCopyMessage)}}function me(s,n){if(s&1){let t=b();i(0,"div",31),m("click",function(){h(t);let r=p();return x(r.closeExample())}),i(1,"div",32),m("click",function(r){return r.stopPropagation()}),i(2,"div",33)(3,"h5",34),l(4),o(),i(5,"button",35),m("click",function(){h(t);let r=p();return x(r.closeExample())}),o()(),i(6,"p",36),l(7),o(),A(8,"textarea",37),i(9,"div",38)(10,"button",39),m("click",function(){h(t);let r=p();return x(r.copyExample())}),l(11),o(),i(12,"button",12),m("click",function(){h(t);let r=p();return x(r.closeExample())}),l(13),o()(),f(14,de,2,1,"div",40),o()()}if(s&2){let t=p();a(4),g(" ",t.i18n.translate("trackEditor.exampleTitle")," "),a(),P("aria-label",t.i18n.translate("trackEditor.closeExample")),a(2),u(t.i18n.translate("trackEditor.exampleIntro")),a(),E("value",t.exampleSongText),a(3),g(" ",t.i18n.translate("trackEditor.copyExample")," "),a(2),g(" ",t.i18n.translate("trackEditor.closeExample")," "),a(),v(t.exampleCopyMessage?14:-1)}}var ee=`---
title: Numb
artist: Linkin Park
author_short_name: Linkin Park
number: 1
slug: linkin_park_numb
key: FA#m
tempo: 110
capo: 0
transposition: 0
draft: false
tags: rock, alternative
links: youtube=https://example.com/numb-video, spotify=https://example.com/numb-spotify, pdf=https://example.com/numb.pdf, audio=https://example.com/numb-audio
notationDefault: it
---

## Intro

[FA#m] [RE] [LA] [MI] 
[FA#m] [RE] [LA] [MI]

## Verse 1

[FA#m] I'm tired of being what you [RE]want me to be
[LA]Feeling so faithless lost [MI]under the surface
[FA#m]Don't know what you're ex[RE]pecting of me
Put [LA]under the pressure of [MI]walking in your [RE7+]shoes
(Caught in the undertone just [MI]caught in the undertone)
Every [FA#m]step I take is a[LA]nother mist[RE]ake to you
(Caught in the undertone just [MI]caught in the undertone)

## Chorus

[FA#m]I've become so [RE]numb I can't feel you t[LA]here
I've become so [MI]tired so much more [FA#m]aware
I've becoming [RE]this all I want to [LA]do
Is be more like [MI]me and be less like [FA#m]you

## Verse 2

Can't you see that you're sm[RE]othering me
[LA]Holding too tightly af[MI]raid to lose cont[FA#m]rol
Cause everything that you [RE]thought I would be
Has [LA]fallen apart r[MI]ight in front of [RE7+]you
(Caught in the undertone just [MI]caught in the undertone)
Every [FA#m]step that I take is an[LA]other mistake to [RE]you
(Caught in the undertone just [MI]caught in the undertone)
And every [FA#m]second I waste is more than [LA]I can take

## Chorus

[FA#m]I've become so [RE]numb I can't feel you t[LA]here
I've become so [MI]tired so much more [FA#m]aware
I've becoming [RE]this all I want to [LA]do
Is be more like [MI]me and be less like [RE7+]you

## Bridge

And I k[MI]now
I may[FA#m]end [MI/SOL#]up f[LA]ail[DO#m]ing t[RE]oo
But I kn[MI]ow
You were [DO#]just like me with someone disappointed in you

## Final Chorus

[FA#m]I've become so [RE]numb I can't feel you t[LA]here
I've become so [MI]tired so much more [FA#m]aware
I've becoming [RE]this all I want to [LA]do
Is be more like [MI]me and be less like [FA#m]you
I've become so [RE]numb I can't feel you [LA]there
(Tired of being what you w[MI]ant me to be)
[FA#m]I've become so [RE]numb I can't feel you [LA]there
(Tired of being what you w[MI]ant me to be)

## Outro

[FA#m] [RE] [LA] [MI]
`,ce=ee,$=class s{i18n=_(N);router=_(D);trackFiles=_(B);fileInput;text="";notation="it";parsedSong=null;previewMetadata=[];previewLinks=[];previewSections=[];parseError=null;saveError=null;exampleDialogOpen=!1;exampleCopyMessage=null;parseTimer=null;debounceMs=250;get exampleSongText(){return this.i18n.language()==="it"?ee:ce}ngOnInit(){let n=this.trackFiles.currentDocument();n&&(this.text=n.sourceText,this.notation=n.song.meta.notationDefault==="en"||n.song.meta.notationDefault==="it"?n.song.meta.notationDefault:this.notation,this.doParse())}onSubmit(){this.saveMarkdown()}saveMarkdown(){if(this.clearParseTimer(),this.doParse(),!this.parsedSong||this.parseError||this.text.trim().length===0){this.saveError=this.i18n.translate("trackEditor.saveInvalid");return}this.saveError=null,this.downloadTextFile(this.text.trimEnd()+`
`,C(this.parsedSong),"text/markdown")}onTextChanged(n){this.text=n,this.saveError=null,this.clearParseTimer(),this.parseTimer=setTimeout(()=>this.doParse(),this.debounceMs)}openFileBrowser(){this.fileInput?.nativeElement.click()}async onFileSelected(n){let t=n.target,e=t.files?.[0];if(e)try{let r=await this.readFileText(e);this.loadSourceText(r)}catch{this.saveError=this.i18n.translate("trackEditor.readError")}finally{t.value=""}}loadSourceText(n){this.clearParseTimer(),this.saveError=null,this.text=n,this.doParse()}doParse(){try{let n=j(this.text||"",{notation:this.notation});this.parsedSong=n,this.previewMetadata=I(n,this.notation),this.previewLinks=T(n),this.previewSections=M(n,this.notation),this.parseError=null}catch(n){this.resetPreviewState(),this.parseError=n instanceof Error?n.message:String(n)}}onNotationChanged(n){this.notation=n||"it",this.saveError=null,this.clearParseTimer(),this.doParse()}clear(){this.text="",this.resetPreviewState(),this.parseError=null,this.saveError=null,this.clearParseTimer()}openExample(){this.exampleCopyMessage=null,this.exampleDialogOpen=!0}closeExample(){this.exampleDialogOpen=!1,this.exampleCopyMessage=null}async copyExample(){await navigator.clipboard.writeText(this.exampleSongText),this.exampleCopyMessage=this.i18n.translate("trackEditor.exampleCopied")}printPreviewPdf(n){this.parsedSong&&X(n)}openInPlayer(){if(this.clearParseTimer(),this.doParse(),!this.parsedSong||this.parseError||this.text.trim().length===0){this.saveError=this.i18n.translate("trackEditor.saveInvalid");return}this.saveError=null,this.trackFiles.setSourceText(this.text),this.router.navigateByUrl("/track-play")}downloadTextFile(n,t,e){let r=new Blob([n],{type:e}),c=URL.createObjectURL(r),d=document.createElement("a");d.href=c,d.download=t,d.click(),URL.revokeObjectURL(c)}readFileText(n){return new Promise((t,e)=>{let r=new FileReader;r.addEventListener("load",()=>t(String(r.result||""))),r.addEventListener("error",()=>e(r.error)),r.readAsText(n)})}ngOnDestroy(){this.clearParseTimer()}resetPreviewState(){this.parsedSong=null,this.previewMetadata=[],this.previewLinks=[],this.previewSections=[]}clearParseTimer(){this.parseTimer&&(clearTimeout(this.parseTimer),this.parseTimer=null)}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=S({type:s,selectors:[["app-track-editor"]],viewQuery:function(t,e){if(t&1&&O(oe,5),t&2){let r;F(r=L())&&(e.fileInput=r.first)}},decls:48,vars:16,consts:[["fileInput",""],[1,"container-fluid","track-editor-page"],["type","file","accept",".md,.txt,text/markdown,text/plain",1,"d-none",3,"change"],[1,"row"],[1,"col-md-5","mb-3","mb-md-0"],[1,"card","h-100"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],[1,"card-body"],[1,"editor-form",3,"ngSubmit"],[1,"editor-actions"],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["for","bigtext",1,"form-label"],["id","bigtext","name","text","rows","22",1,"form-control","editor-textarea",3,"ngModelChange","ngModel","placeholder"],[1,"export-section"],[1,"d-flex","flex-wrap","gap-2"],["type","submit",1,"btn","btn-primary"],[1,"text-danger","mt-2"],[1,"col-md-7"],[1,"card-header","d-flex","justify-content-between","align-items-center","gap-2"],[1,"d-flex","align-items-center","gap-2"],["for","notation",1,"mb-0"],["id","notation","name","notation",1,"form-select","form-select-sm","w-auto",3,"ngModelChange","ngModel"],["value","it"],["value","en"],[1,"card-body","overflow-auto"],[1,"text-danger","mb-2"],[3,"song","sections","metadataGroups","links","showPrintAction"],["role","presentation",1,"example-dialog-backdrop"],[3,"printRequested","song","sections","metadataGroups","links","showPrintAction"],["role","presentation",1,"example-dialog-backdrop",3,"click"],["role","dialog","aria-modal","true","aria-labelledby","example-dialog-title",1,"example-dialog",3,"click"],[1,"example-dialog-header"],["id","example-dialog-title",1,"mb-0"],["type","button",1,"btn-close",3,"click"],[1,"example-dialog-copy","mb-3"],["readonly","","rows","18",1,"form-control","example-textarea",3,"value"],[1,"example-dialog-actions"],["type","button",1,"btn","btn-primary",3,"click"],[1,"text-success","mt-2"]],template:function(t,e){if(t&1){let r=b();i(0,"div",1)(1,"input",2,0),m("change",function(d){return e.onFileSelected(d)}),o(),i(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h5",7),l(8),o()(),i(9,"div",8)(10,"form",9),m("ngSubmit",function(){return e.saveMarkdown()}),i(11,"div",10)(12,"button",11),m("click",function(){return e.openFileBrowser()}),l(13),o(),i(14,"button",11),m("click",function(){return e.openExample()}),l(15),o(),i(16,"button",12),m("click",function(){return e.clear()}),l(17),o()(),i(18,"label",13),l(19),o(),i(20,"textarea",14),w("ngModelChange",function(d){return h(r),y(e.text,d)||(e.text=d),x(d)}),m("ngModelChange",function(d){return e.onTextChanged(d)}),o(),i(21,"div",15)(22,"h6"),l(23),o(),i(24,"div",16)(25,"button",17),l(26),o(),i(27,"button",11),m("click",function(){return e.openInPlayer()}),l(28),o()()(),f(29,re,2,1,"div",18),o()()()(),i(30,"div",19)(31,"div",5)(32,"div",20)(33,"span"),l(34),o(),i(35,"div",21)(36,"label",22),l(37),o(),i(38,"select",23),w("ngModelChange",function(d){return h(r),y(e.notation,d)||(e.notation=d),x(d)}),m("ngModelChange",function(d){return e.onNotationChanged(d)}),i(39,"option",24),l(40,"ITA"),o(),i(41,"option",25),l(42,"INT"),o()()()(),i(43,"div",26),f(44,ae,2,2,"div",27)(45,le,2,1,"pre",7)(46,se,1,5,"app-song-preview",28),o()()()(),f(47,me,15,7,"div",29),o()}t&2&&(a(8),u(e.i18n.translate("trackEditor.editor")),a(5),g(" ",e.i18n.translate("trackEditor.openFile")," "),a(2),g(" ",e.i18n.translate("trackEditor.loadExample")," "),a(2),g(" ",e.i18n.translate("trackEditor.clear")," "),a(2),u(e.i18n.translate("trackEditor.text")),a(),k("ngModel",e.text),E("placeholder",e.i18n.translate("trackEditor.placeholder")),a(3),u(e.i18n.translate("trackEditor.export")),a(3),g(" ",e.i18n.translate("trackEditor.saveMarkdown")," "),a(2),g(" ",e.i18n.translate("trackEditor.openInPlayer")," "),a(),v(e.saveError?29:-1),a(5),u(e.i18n.translate("trackEditor.preview")),a(3),u(e.i18n.translate("trackEditor.notation")),a(),k("ngModel",e.notation),a(6),v(e.parseError?44:e.parsedSong?46:45),a(3),v(e.exampleDialogOpen?47:-1))},dependencies:[V,J,q,K,Y,G,Q,W,z,U,H,Z],styles:[".track-editor-page[_ngcontent-%COMP%]{position:relative;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;width:100vw;padding-top:1rem;box-sizing:border-box;padding-left:1rem;padding-right:1rem;max-width:none;min-height:100%;display:flex;flex-direction:column}.track-editor-page[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{flex:1 1 auto}.track-editor-page[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%], .track-editor-page[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%]{display:flex;flex-direction:column}.card[_ngcontent-%COMP%]{box-shadow:0 .125rem .25rem #00000013;display:flex;flex-direction:column}.card.h-100[_ngcontent-%COMP%]{flex:1 1 auto}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{flex:1 1 auto;overflow:auto}.editor-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100%}.editor-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1rem}pre[_ngcontent-%COMP%]{white-space:pre-wrap}textarea.form-control[_ngcontent-%COMP%]{font-family:monospace;font-size:.95rem;min-height:420px}.editor-textarea[_ngcontent-%COMP%]{flex:1 1 auto}.export-section[_ngcontent-%COMP%]{border-top:1px solid var(--bs-border-color);margin-top:1rem;padding-top:1rem}.export-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:var(--bs-secondary-color);font-size:.8rem;font-weight:700;letter-spacing:0;margin-bottom:.75rem;text-transform:uppercase}.example-dialog-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1050;display:flex;align-items:center;justify-content:center;padding:1rem;background:#00000073}.example-dialog[_ngcontent-%COMP%]{width:min(760px,100%);max-height:min(760px,100%);overflow:auto;padding:1rem;border-radius:.5rem;background:var(--bs-body-bg);box-shadow:0 .5rem 1.5rem #0003}.example-dialog-header[_ngcontent-%COMP%], .example-dialog-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.75rem}.example-dialog-header[_ngcontent-%COMP%]{margin-bottom:.75rem}.example-dialog-actions[_ngcontent-%COMP%]{justify-content:flex-start;flex-wrap:wrap;margin-top:1rem}.example-dialog-copy[_ngcontent-%COMP%]{color:var(--bs-secondary-color)}.example-textarea.form-control[_ngcontent-%COMP%]{min-height:320px;resize:vertical}"]})};export{$ as TrackEditorComponent,te as buildPreviewLine,C as buildSongMarkdownFileName,I as buildSongMetadata,M as buildSongPreview,T as buildSongPreviewLinks,ce as englishExampleSongText,ne as formatKey,ie as getKeyAccidentalStyle,ee as italianExampleSongText};
