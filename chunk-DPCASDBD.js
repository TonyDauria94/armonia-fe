import{a as Z,b as $,d as C,e as M,g as I,h as T,i as ne,j as ie,l as re}from"./chunk-5Y3IWQ6G.js";import{a as B,b as G}from"./chunk-DRSJTJCL.js";import{b as W,c as z,d as H,e as U,f as q,g as Q,i as K,j as Y,k as J,l as X}from"./chunk-5DPFKH6S.js";import{a as j}from"./chunk-OG6MBMVL.js";import{$ as O,C as S,I as P,J as v,K as _,P as E,Q as i,R as r,S as A,W as b,Y as c,_ as p,aa as F,ba as L,ea as l,fa as u,ga as g,ha as R,ia as k,ja as y,ka as w,l as f,m as h,n as x,sa as V,wa as D,y as a,za as N}from"./chunk-L57TT7WO.js";var oe=["fileInput"];function ae(s,n){if(s&1&&(i(0,"div",18),l(1),r()),s&2){let t=p();a(),u(t.saveError)}}function le(s,n){if(s&1&&(i(0,"div",27),l(1),r()),s&2){let t=p();a(),R(" ",t.i18n.translate("trackEditor.parseError"),": ",t.parseError," ")}}function se(s,n){if(s&1&&(i(0,"pre",7),l(1),r()),s&2){let t=p();a(),u(t.text)}}function de(s,n){if(s&1){let t=b();i(0,"app-song-preview",30),c("printRequested",function(o){h(t);let m=p();return x(m.printPreviewPdf(o))}),r()}if(s&2){let t=p();E("song",t.parsedSong)("sections",t.previewSections)("metadataGroups",t.previewMetadata)("links",t.previewLinks)("showPrintAction",!0)}}function ce(s,n){if(s&1&&(i(0,"div",40),l(1),r()),s&2){let t=p(2);a(),u(t.exampleCopyMessage)}}function me(s,n){if(s&1){let t=b();i(0,"div",31),c("click",function(){h(t);let o=p();return x(o.closeExample())}),i(1,"div",32),c("click",function(o){return o.stopPropagation()}),i(2,"div",33)(3,"h5",34),l(4),r(),i(5,"button",35),c("click",function(){h(t);let o=p();return x(o.closeExample())}),r()(),i(6,"p",36),l(7),r(),A(8,"textarea",37),i(9,"div",38)(10,"button",39),c("click",function(){h(t);let o=p();return x(o.copyExample())}),l(11),r(),i(12,"button",12),c("click",function(){h(t);let o=p();return x(o.closeExample())}),l(13),r()(),v(14,ce,2,1,"div",40),r()()}if(s&2){let t=p();a(4),g(" ",t.i18n.translate("trackEditor.exampleTitle")," "),a(),P("aria-label",t.i18n.translate("trackEditor.closeExample")),a(2),u(t.i18n.translate("trackEditor.exampleIntro")),a(),E("value",t.exampleSongText),a(3),g(" ",t.i18n.translate("trackEditor.copyExample")," "),a(2),g(" ",t.i18n.translate("trackEditor.closeExample")," "),a(),_(t.exampleCopyMessage?14:-1)}}var te=`---
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
`,pe=te,ee=class s{i18n=f(N);router=f(D);preferences=f(j);trackFiles=f(G);fileInput;text="";notation=this.preferences.preferredNotation();parsedSong=null;previewMetadata=[];previewLinks=[];previewSections=[];parseError=null;saveError=null;exampleDialogOpen=!1;exampleCopyMessage=null;parseTimer=null;debounceMs=250;get exampleSongText(){return this.i18n.language()==="it"?te:pe}ngOnInit(){let n=this.trackFiles.currentDocument();n&&(this.text=n.sourceText,this.notation=this.preferences.resolveNotation(n.song.meta.notationDefault),this.doParse())}onSubmit(){this.saveMarkdown()}saveMarkdown(){if(this.clearParseTimer(),this.doParse(),!this.parsedSong||this.parseError||this.text.trim().length===0){this.saveError=this.i18n.translate("trackEditor.saveInvalid");return}this.saveError=null,this.downloadTextFile(this.text.trimEnd()+`
`,C(this.parsedSong),"text/markdown")}onTextChanged(n){this.text=n,this.saveError=null,this.clearParseTimer(),this.parseTimer=setTimeout(()=>this.doParse(),this.debounceMs)}openFileBrowser(){this.fileInput?.nativeElement.click()}async onFileSelected(n){let t=n.target,e=t.files?.[0];if(e)try{let o=await this.readFileText(e);this.loadSourceText(o)}catch{this.saveError=this.i18n.translate("trackEditor.readError")}finally{t.value=""}}loadSourceText(n){this.clearParseTimer(),this.saveError=null,this.text=n,this.doParse()}doParse(){try{let n=B(this.text||"",{notation:this.notation});this.parsedSong=n,this.previewMetadata=I(n,this.notation),this.previewLinks=T(n),this.previewSections=M(n,this.notation),this.parseError=null}catch(n){this.resetPreviewState(),this.parseError=n instanceof Error?n.message:String(n)}}onNotationChanged(n){this.notation=n||"it",this.saveError=null,this.clearParseTimer(),this.doParse()}clear(){this.text="",this.resetPreviewState(),this.parseError=null,this.saveError=null,this.clearParseTimer()}openExample(){this.exampleCopyMessage=null,this.exampleDialogOpen=!0}closeExample(){this.exampleDialogOpen=!1,this.exampleCopyMessage=null}async copyExample(){await navigator.clipboard.writeText(this.exampleSongText),this.exampleCopyMessage=this.i18n.translate("trackEditor.exampleCopied")}printPreviewPdf(n){this.parsedSong&&Z(n)}openInPlayer(){if(this.clearParseTimer(),this.doParse(),!this.parsedSong||this.parseError||this.text.trim().length===0){this.saveError=this.i18n.translate("trackEditor.saveInvalid");return}this.saveError=null,this.trackFiles.setSourceText(this.text),this.router.navigateByUrl("/track-play")}downloadTextFile(n,t,e){let o=new Blob([n],{type:e}),m=URL.createObjectURL(o),d=document.createElement("a");d.href=m,d.download=t,d.click(),URL.revokeObjectURL(m)}readFileText(n){return new Promise((t,e)=>{let o=new FileReader;o.addEventListener("load",()=>t(String(o.result||""))),o.addEventListener("error",()=>e(o.error)),o.readAsText(n)})}ngOnDestroy(){this.clearParseTimer()}resetPreviewState(){this.parsedSong=null,this.previewMetadata=[],this.previewLinks=[],this.previewSections=[]}clearParseTimer(){this.parseTimer&&(clearTimeout(this.parseTimer),this.parseTimer=null)}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=S({type:s,selectors:[["app-track-editor"]],viewQuery:function(t,e){if(t&1&&O(oe,5),t&2){let o;F(o=L())&&(e.fileInput=o.first)}},decls:48,vars:16,consts:[["fileInput",""],[1,"container-fluid","track-editor-page"],["type","file","accept",".md,.txt,text/markdown,text/plain",1,"d-none",3,"change"],[1,"row"],[1,"col-md-5","mb-3","mb-md-0"],[1,"card","h-100"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],[1,"card-body"],[1,"editor-form",3,"ngSubmit"],[1,"editor-actions"],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["for","bigtext",1,"form-label"],["id","bigtext","name","text","rows","22",1,"form-control","editor-textarea",3,"ngModelChange","ngModel","placeholder"],[1,"export-section"],[1,"d-flex","flex-wrap","gap-2"],["type","submit",1,"btn","btn-primary"],[1,"text-danger","mt-2"],[1,"col-md-7"],[1,"card-header","d-flex","justify-content-between","align-items-center","gap-2"],[1,"d-flex","align-items-center","gap-2"],["for","notation",1,"mb-0"],["id","notation","name","notation",1,"form-select","form-select-sm","w-auto",3,"ngModelChange","ngModel"],["value","it"],["value","en"],[1,"card-body","overflow-auto"],[1,"text-danger","mb-2"],[3,"song","sections","metadataGroups","links","showPrintAction"],["role","presentation",1,"example-dialog-backdrop"],[3,"printRequested","song","sections","metadataGroups","links","showPrintAction"],["role","presentation",1,"example-dialog-backdrop",3,"click"],["role","dialog","aria-modal","true","aria-labelledby","example-dialog-title",1,"example-dialog",3,"click"],[1,"example-dialog-header"],["id","example-dialog-title",1,"mb-0"],["type","button",1,"btn-close",3,"click"],[1,"example-dialog-copy","mb-3"],["readonly","","rows","18",1,"form-control","example-textarea",3,"value"],[1,"example-dialog-actions"],["type","button",1,"btn","btn-primary",3,"click"],[1,"text-success","mt-2"]],template:function(t,e){if(t&1){let o=b();i(0,"div",1)(1,"input",2,0),c("change",function(d){return e.onFileSelected(d)}),r(),i(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h5",7),l(8),r()(),i(9,"div",8)(10,"form",9),c("ngSubmit",function(){return e.saveMarkdown()}),i(11,"div",10)(12,"button",11),c("click",function(){return e.openFileBrowser()}),l(13),r(),i(14,"button",11),c("click",function(){return e.openExample()}),l(15),r(),i(16,"button",12),c("click",function(){return e.clear()}),l(17),r()(),i(18,"label",13),l(19),r(),i(20,"textarea",14),w("ngModelChange",function(d){return h(o),y(e.text,d)||(e.text=d),x(d)}),c("ngModelChange",function(d){return e.onTextChanged(d)}),r(),i(21,"div",15)(22,"h6"),l(23),r(),i(24,"div",16)(25,"button",17),l(26),r(),i(27,"button",11),c("click",function(){return e.openInPlayer()}),l(28),r()()(),v(29,ae,2,1,"div",18),r()()()(),i(30,"div",19)(31,"div",5)(32,"div",20)(33,"span"),l(34),r(),i(35,"div",21)(36,"label",22),l(37),r(),i(38,"select",23),w("ngModelChange",function(d){return h(o),y(e.notation,d)||(e.notation=d),x(d)}),c("ngModelChange",function(d){return e.onNotationChanged(d)}),i(39,"option",24),l(40,"ITA"),r(),i(41,"option",25),l(42,"INT"),r()()()(),i(43,"div",26),v(44,le,2,2,"div",27)(45,se,2,1,"pre",7)(46,de,1,5,"app-song-preview",28),r()()()(),v(47,me,15,7,"div",29),r()}t&2&&(a(8),u(e.i18n.translate("trackEditor.editor")),a(5),g(" ",e.i18n.translate("trackEditor.openFile")," "),a(2),g(" ",e.i18n.translate("trackEditor.loadExample")," "),a(2),g(" ",e.i18n.translate("trackEditor.clear")," "),a(2),u(e.i18n.translate("trackEditor.text")),a(),k("ngModel",e.text),E("placeholder",e.i18n.translate("trackEditor.placeholder")),a(3),u(e.i18n.translate("trackEditor.export")),a(3),g(" ",e.i18n.translate("trackEditor.saveMarkdown")," "),a(2),g(" ",e.i18n.translate("trackEditor.openInPlayer")," "),a(),_(e.saveError?29:-1),a(5),u(e.i18n.translate("trackEditor.preview")),a(3),u(e.i18n.translate("trackEditor.notation")),a(),k("ngModel",e.notation),a(6),_(e.parseError?44:e.parsedSong?46:45),a(3),_(e.exampleDialogOpen?47:-1))},dependencies:[V,X,Q,Y,J,W,K,z,H,q,U,$],styles:[".track-editor-page[_ngcontent-%COMP%]{position:relative;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;width:100vw;padding-top:1rem;box-sizing:border-box;padding-left:1rem;padding-right:1rem;max-width:none;min-height:100%;display:flex;flex-direction:column}.track-editor-page[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{flex:1 1 auto}.track-editor-page[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%], .track-editor-page[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%]{display:flex;flex-direction:column}.card[_ngcontent-%COMP%]{box-shadow:0 .125rem .25rem #00000013;display:flex;flex-direction:column}.card.h-100[_ngcontent-%COMP%]{flex:1 1 auto}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{flex:1 1 auto;overflow:auto}.editor-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100%}.editor-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1rem}pre[_ngcontent-%COMP%]{white-space:pre-wrap}textarea.form-control[_ngcontent-%COMP%]{font-family:monospace;font-size:.95rem;min-height:420px}.editor-textarea[_ngcontent-%COMP%]{flex:1 1 auto}.export-section[_ngcontent-%COMP%]{border-top:1px solid var(--bs-border-color);margin-top:1rem;padding-top:1rem}.export-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:var(--bs-secondary-color);font-size:.8rem;font-weight:700;letter-spacing:0;margin-bottom:.75rem;text-transform:uppercase}.example-dialog-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1050;display:flex;align-items:center;justify-content:center;padding:1rem;background:#00000073}.example-dialog[_ngcontent-%COMP%]{width:min(760px,100%);max-height:min(760px,100%);overflow:auto;padding:1rem;border-radius:.5rem;background:var(--bs-body-bg);box-shadow:0 .5rem 1.5rem #0003}.example-dialog-header[_ngcontent-%COMP%], .example-dialog-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.75rem}.example-dialog-header[_ngcontent-%COMP%]{margin-bottom:.75rem}.example-dialog-actions[_ngcontent-%COMP%]{justify-content:flex-start;flex-wrap:wrap;margin-top:1rem}.example-dialog-copy[_ngcontent-%COMP%]{color:var(--bs-secondary-color)}.example-textarea.form-control[_ngcontent-%COMP%]{min-height:320px;resize:vertical}"]})};export{ee as TrackEditorComponent,ne as buildPreviewLine,C as buildSongMarkdownFileName,I as buildSongMetadata,M as buildSongPreview,T as buildSongPreviewLinks,pe as englishExampleSongText,ie as formatKey,re as getKeyAccidentalStyle,te as italianExampleSongText};
