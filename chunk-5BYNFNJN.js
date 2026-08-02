import{a as w}from"./chunk-ULG3XL2G.js";import{b}from"./chunk-6ZWTUZHB.js";import{a as y}from"./chunk-KL3B7G5Y.js";import{G as E,L as p}from"./chunk-M5NK3KQN.js";import{a as h,b as m}from"./chunk-IK44ALKY.js";var d=class extends Error{constructor(){super("The slug of a saved song cannot be changed."),this.name="SongSlugChangeError"}},f=class S{database=p(w);async saveUserSong(t,e="it"){let s=this.mapCmdForStorage(t,e),r=s.slug,n=r?await this.getUserSongIdBySlug(r):null;if(r&&n!==null)return await this.writeUserSong(n,this.withSlug(s,r)),{source:"user",id:n};let o=r?this.withSlug(s,r):await this.withGeneratedSlug(s);return this.insertUserSong(o)}async createUserSong(t,e="it"){let s=this.mapCmdForStorage(t,e),r=s.slug?this.withSlug(s,s.slug):await this.withGeneratedSlug(s);return this.insertUserSong(r)}async importUserSong(t,e,s="it"){return{source:"user",id:await this.database.withUserTransaction(n=>this.importUserSongInTransaction(n,t,e,s))}}async importUserSongInTransaction(t,e,s,r="it"){let n=this.mapImportedSong(e,s,r);return this.insertUserSongInTransaction(t,n)}async upsertImportedUserSongInTransaction(t,e,s,r="it"){let n=this.mapImportedSong(e,s,r),o=await t.query("SELECT id FROM song WHERE slug = ?;",[n.slug]);if(!o.length)return{id:await this.insertUserSongInTransaction(t,n),created:!0};let i=Number(o[0].id);return await this.writeUserSongInTransaction(t,i,n),{id:i,created:!1}}mapImportedSong(t,e,s){let r=t.trim().toLowerCase();if(!r||r!==t.trim())throw new Error("An imported song requires a valid lowercase slug.");let n=this.mapCmdForStorage(e,s);if(n.slug&&n.slug!==r)throw new Error("The imported song slug does not match its CMD metadata.");return this.withSlug(n,r)}async insertUserSong(t){return{source:"user",id:await this.database.withUserTransaction(s=>this.insertUserSongInTransaction(s,t))}}async insertUserSongInTransaction(t,e){let r=(await t.run(`
          INSERT INTO song (
            slug, title, subtitle, author, key_root, key_quality, draft, cmd, search_text
          )
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,[e.slug,e.title,e.subtitle,e.author,e.keyRoot,e.keyQuality,e.draft,e.cmd,e.searchText])).lastId;if(!r)throw new Error("Unable to identify the saved song.");return await this.writeSongRelations(t,r,e),r}async updateUserSong(t,e,s="it"){let r=this.mapCmdForStorage(e,s),n=await this.getUserSongSlugById(t);if(n===null)throw new Error(`User song ${t} does not exist.`);if(r.slug&&r.slug!==n)throw new d;await this.writeUserSong(t,this.withSlug(r,n))}async writeUserSong(t,e){await this.database.withUserTransaction(async s=>{await this.writeUserSongInTransaction(s,t,e)})}async writeUserSongInTransaction(t,e,s){if((await t.run(`
        UPDATE song
        SET slug = ?,
            title = ?,
            subtitle = ?,
            author = ?,
            key_root = ?,
            key_quality = ?,
            draft = ?,
            cmd = ?,
            search_text = ?
        WHERE id = ?
      `,[s.slug,s.title,s.subtitle,s.author,s.keyRoot,s.keyQuality,s.draft,s.cmd,s.searchText,e])).changes<1)throw new Error(`User song ${e} does not exist.`);await t.run("DELETE FROM song_tag WHERE song_id = ?;",[e]),await t.run("DELETE FROM song_link WHERE song_id = ?;",[e]),await this.writeSongRelations(t,e,s),await this.removeUnusedRelations(t)}async deleteUserSong(t){await this.database.withUserTransaction(async e=>{if(await e.run("DELETE FROM songbook_song WHERE song_source = 'user' AND song_slug = (SELECT slug FROM song WHERE id = ?);",[t]),(await e.run("DELETE FROM song WHERE id = ?;",[t])).changes<1)throw new Error(`User song ${t} does not exist.`);await this.removeUnusedRelations(e)})}async getSong(t){let e=await this.database.query(t.source,this.songSelect("WHERE id = ?"),[t.id]);return e.length?this.toStoredSong(t.source,e[0]):null}async getUserSongBySlug(t){return this.getSongBySlug("user",t)}async getSongBySlug(t,e){let s=e.trim().toLowerCase();if(!s)return null;let r=await this.database.query(t,this.songSelect("WHERE slug = ?"),[s]);return r.length?this.toStoredSong(t,r[0]):null}async getUserSongIdBySlug(t){let e=await this.database.query("user","SELECT id FROM song WHERE slug = ?;",[t]);return e.length?Number(e[0].id):null}async getUserSongSlugById(t){let e=await this.database.query("user","SELECT slug FROM song WHERE id = ?;",[t]);return e.length?String(e[0].slug):null}async withGeneratedSlug(t,e){let s=this.buildGeneratedSlug(t.author,t.title);if(!await this.slugBelongsToAnotherSong(s,e))return this.withSlug(t,s);for(let r=0;r<100;r+=1){let n=`${s}-${this.randomFourDigitSuffix()}`;if(!await this.slugBelongsToAnotherSong(n,e))return this.withSlug(t,n)}throw new Error("Unable to generate an available song slug.")}buildGeneratedSlug(t,e){return b([t,e])}randomFourDigitSuffix(){return String(Math.floor(Math.random()*9e3)+1e3)}async slugBelongsToAnotherSong(t,e){let s=e===void 0?"SELECT id FROM song WHERE slug = ?;":"SELECT id FROM song WHERE slug = ? AND id <> ?;",r=e===void 0?[t]:[t,e];return(await this.database.query("user",s,r)).length>0}async searchSongsPage(t,e){let{offset:s,limit:r}=this.validatePage(e),n=t.trim(),o=s+r+1,i,u;if(!n)[i,u]=await Promise.all([this.listSource("official",o),this.listSource("user",o)]);else{let a=await this.database.openDatabases();[i,u]=await Promise.all([this.searchSource("official",n,a.supportsFts5,o),this.searchSource("user",n,a.supportsFts5,o)])}let l=this.sortSongs([...i,...u]);return{songs:l.slice(s,s+r),hasMore:l.length>s+r}}async searchUserSongSummariesPage(t,e){let{offset:s,limit:r}=this.validatePage(e),n=t.trim(),o=r+1,i=n?await this.searchUserSummaries(n,o,s):await this.listUserSummaries(o,s);return{songs:i.slice(0,r).map(u=>this.toSongSummary("user",u)),hasMore:i.length>r}}async searchSongbookSongs(t,e){let s=e.trim(),r=new Map([["official",[]],["user",[]]]);for(let a of t.sections)for(let g of a.songs){let c=r.get(g.song.source);c.includes(g.song.slug)||c.push(g.song.slug)}let n=s?(await this.database.openDatabases()).supportsFts5:!1,[o,i]=await Promise.all([this.searchReferencedSource("official",r.get("official"),s,n),this.searchReferencedSource("user",r.get("user"),s,n)]),u=[...o,...i],l=new Map(u.map(a=>[`${a.source}:${a.slug}`,a]));return t.sections.flatMap(a=>a.songs.map(g=>{let c=l.get(`${g.song.source}:${g.song.slug}`);return c?{sectionId:a.id,number:g.number,song:c}:null}).filter(g=>g!==null))}async searchSongbookSongsPage(t,e,s){let{offset:r,limit:n}=this.validatePage(s),o=await this.searchSongbookSongs(t,e);return{entries:o.slice(r,r+n),hasMore:o.length>r+n}}async searchSource(t,e,s,r){let n=this.toLikePattern(e),o=r===void 0?[]:[r];return(s?await this.database.query(t,this.ftsQuery(r!==void 0),[this.toFtsQuery(e),...o]):await this.database.query(t,this.fallbackQuery(r!==void 0),[n,n,n,n,...o])).map(u=>this.toStoredSong(t,u))}async listSource(t,e){return(await this.database.query(t,this.songSelect(`ORDER BY title COLLATE NOCASE, id${e===void 0?"":`
LIMIT ?`}`),e===void 0?[]:[e])).map(r=>this.toStoredSong(t,r))}async searchUserSummaries(t,e,s){if((await this.database.openDatabases()).supportsFts5)return this.database.query("user",this.userSummaryFtsQuery(),[this.toFtsQuery(t),e,s]);let n=this.toLikePattern(t);return this.database.query("user",this.userSummaryFallbackQuery(),[n,n,n,n,e,s])}async listUserSummaries(t,e){return this.database.query("user",`${this.userSummarySelect()}
${this.userSummaryOrder()}`,[t,e])}sortSongs(t){return t.sort((e,s)=>e.title.localeCompare(s.title,void 0,{sensitivity:"base"})||e.source.localeCompare(s.source)||e.id-s.id)}mapCmdForStorage(t,e){let s=y(t,{notation:e}),r=s.meta.title.trim();if(!r)throw new Error("A song title is required before saving.");return{cmd:t,title:r,subtitle:s.meta.subtitle?.trim()||null,author:s.meta.author?.trim()||null,slug:s.meta.slug?.trim().toLowerCase()||null,keyRoot:s.meta.key.root,keyQuality:s.meta.key.quality,draft:s.meta.draft?1:0,searchText:this.buildSearchText(s),tags:this.distinctText(s.meta.tags??[]),links:this.distinctLinks(s.meta.links??[])}}withSlug(t,e){return m(h({},t),{slug:e})}buildSearchText(t){return t.sections.flatMap(e=>e.lines).map(e=>e.lyrics?.trim()).filter(e=>!!e).join(`
`)}distinctText(t){return[...new Map(t.map(e=>e.trim()).filter(Boolean).map(e=>[e.toLowerCase(),e])).values()]}distinctLinks(t){return[...new Map(t.map(e=>[`${e.type.toLowerCase()}:${e.url}`,e])).values()]}async writeSongRelations(t,e,s){for(let r of s.tags)await t.run("INSERT OR IGNORE INTO tag(name) VALUES (?);",[r]),await t.run("INSERT INTO song_tag(song_id, tag_name) VALUES (?, ?);",[e,r]);for(let r of s.links)await t.run("INSERT INTO song_link(song_id, type, url) VALUES (?, ?, ?);",[e,r.type.toLowerCase(),r.url])}async removeUnusedRelations(t){await t.run("DELETE FROM tag WHERE name NOT IN (SELECT tag_name FROM song_tag);")}async searchReferencedSource(t,e,s,r){if(!e.length)return[];let n=[];for(let o=0;o<e.length;o+=400){let i=e.slice(o,o+400),u=i.map(()=>"?").join(", "),l=[...i],a=`WHERE song_view.slug IN (${u})`;if(s&&r)a=`
          JOIN song_search ss ON ss.rowid = song_view.id
          WHERE song_view.slug IN (${u})
            AND song_search MATCH ?
        `,l.push(this.toFtsQuery(s));else if(s){let g=this.toLikePattern(s);a=`
          WHERE song_view.slug IN (${u})
            AND (
              song_view.title LIKE ? ESCAPE '\\' COLLATE NOCASE
              OR coalesce(song_view.author, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
              OR coalesce(song_view.subtitle, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
              OR song_view.search_text LIKE ? ESCAPE '\\' COLLATE NOCASE
            )
        `,l.push(g,g,g,g)}n.push(...await this.database.query(t,this.songSelect(a),l))}return n.map(o=>this.toStoredSong(t,o))}ftsQuery(t=!1){return this.songSelect(`
      JOIN song_search ss ON ss.rowid = song_view.id
      WHERE song_search MATCH ?
      ORDER BY song_view.title COLLATE NOCASE, song_view.id
      ${t?"LIMIT ?":""}
    `)}fallbackQuery(t=!1){return this.songSelect(`
      WHERE song_view.title LIKE ? ESCAPE '\\' COLLATE NOCASE
         OR coalesce(song_view.author, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
         OR coalesce(song_view.subtitle, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
         OR song_view.search_text LIKE ? ESCAPE '\\' COLLATE NOCASE
      ORDER BY song_view.title COLLATE NOCASE, song_view.id
      ${t?"LIMIT ?":""}
    `)}userSummaryFtsQuery(){return`${this.userSummarySelect(`
      JOIN song_search ss ON ss.rowid = song.id
      WHERE song_search MATCH ?
    `)}
    ${this.userSummaryOrder()}`}userSummaryFallbackQuery(){return`${this.userSummarySelect(`
      WHERE song.title LIKE ? ESCAPE '\\' COLLATE NOCASE
         OR coalesce(song.author, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
         OR coalesce(song.subtitle, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
         OR song.search_text LIKE ? ESCAPE '\\' COLLATE NOCASE
    `)}
    ${this.userSummaryOrder()}`}userSummarySelect(t=""){return`
      SELECT song.id, song.slug, song.title, song.subtitle, song.author
      FROM song
      ${t}
    `}userSummaryOrder(){return"ORDER BY song.title COLLATE NOCASE, song.id LIMIT ? OFFSET ?"}songSelect(t){return`
      SELECT song_view.id, song_view.slug, song_view.title, song_view.subtitle,
             song_view.author, song_view.key_root, song_view.key_quality, song_view.draft,
             song_view.cmd, song_view.search_text, song_view.tags, song_view.links
      FROM song_view
      ${t}
    `}toLikePattern(t){return`%${t.replace(/[\\%_]/g,"\\$&")}%`}toFtsQuery(t){return t.split(/\s+/).filter(Boolean).map(e=>`"${e.replace(/"/g,'""')}"*`).join(" AND ")}validatePage(t){if(!Number.isInteger(t.offset)||t.offset<0||!Number.isInteger(t.limit)||t.limit<1)throw new Error("A valid search page is required.");return t}toStoredSong(t,e){return{source:t,id:Number(e.id),slug:String(e.slug),title:String(e.title),subtitle:typeof e.subtitle=="string"?e.subtitle:null,author:typeof e.author=="string"?e.author:null,keyRoot:Number(e.key_root),keyQuality:String(e.key_quality),draft:Number(e.draft)===1,cmd:String(e.cmd),searchText:String(e.search_text),tags:this.readJsonArray(e.tags),links:this.readJsonArray(e.links)}}toSongSummary(t,e){return{source:t,id:Number(e.id),slug:String(e.slug),title:String(e.title),subtitle:typeof e.subtitle=="string"?e.subtitle:null,author:typeof e.author=="string"?e.author:null}}readJsonArray(t){if(Array.isArray(t))return t;if(typeof t!="string")return[];try{let e=JSON.parse(t);return Array.isArray(e)?e:[]}catch{return[]}}static \u0275fac=function(e){return new(e||S)};static \u0275prov=E({token:S,factory:S.\u0275fac,providedIn:"root"})};export{d as a,f as b};
