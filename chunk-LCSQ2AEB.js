import{b as w}from"./chunk-G43Y7VCY.js";import{b}from"./chunk-RCSRS2KU.js";import{d as m}from"./chunk-44BUIEOO.js";import{b as R}from"./chunk-42WDN6UD.js";import{G as y,L as p}from"./chunk-576AHHUB.js";import{a as f,b as E}from"./chunk-IK44ALKY.js";var h=class extends Error{constructor(){super("The slug of a saved song cannot be changed."),this.name="SongSlugChangeError"}},T=class d{database=p(R);async saveUserSong(t,e="it"){let s=this.mapCmdForStorage(t,e),r=s.slug,n=r?await this.getUserSongIdBySlug(r):null;if(r&&n!==null)return await this.writeUserSong(n,this.withSlug(s,r)),{source:"user",id:n};let o=r?this.withSlug(s,r):await this.withGeneratedSlug(s);return this.insertUserSong(o)}async createUserSong(t,e="it"){let s=this.mapCmdForStorage(t,e),r=s.slug?this.withSlug(s,s.slug):await this.withGeneratedSlug(s);return this.insertUserSong(r)}async importUserSong(t,e,s="it"){return{source:"user",id:await this.database.withUserTransaction(n=>this.importUserSongInTransaction(n,t,e,s))}}async importUserSongInTransaction(t,e,s,r="it"){let n=this.mapImportedSong(e,s,r);return this.insertUserSongInTransaction(t,n)}async upsertImportedUserSongInTransaction(t,e,s,r="it"){let n=this.mapImportedSong(e,s,r),o=await t.query("SELECT id FROM song WHERE slug = ?;",[n.slug]);if(!o.length)return{id:await this.insertUserSongInTransaction(t,n),created:!0};let a=Number(o[0].id);return await this.writeUserSongInTransaction(t,a,n),{id:a,created:!1}}mapImportedSong(t,e,s){let r=t.trim().toLowerCase();if(!r||r!==t.trim())throw new Error("An imported song requires a valid lowercase slug.");let n=this.mapCmdForStorage(e,s);if(n.slug&&n.slug!==r)throw new Error("The imported song slug does not match its CMD metadata.");return this.withSlug(n,r)}async insertUserSong(t){return{source:"user",id:await this.database.withUserTransaction(s=>this.insertUserSongInTransaction(s,t))}}async insertUserSongInTransaction(t,e){let r=(await t.run(`
          INSERT INTO song (
            slug, title, subtitle, author, key_root, key_quality, draft, cmd, search_text
          )
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,[e.slug,e.title,e.subtitle,e.author,e.keyRoot,e.keyQuality,e.draft,e.cmd,e.searchText])).lastId;if(!r)throw new Error("Unable to identify the saved song.");return await this.writeSongRelations(t,r,e),r}async updateUserSong(t,e,s="it"){let r=this.mapCmdForStorage(e,s),n=await this.getUserSongSlugById(t);if(n===null)throw new Error(`User song ${t} does not exist.`);if(r.slug&&r.slug!==n)throw new h;await this.writeUserSong(t,this.withSlug(r,n))}async writeUserSong(t,e){await this.database.withUserTransaction(async s=>{await this.writeUserSongInTransaction(s,t,e)})}async writeUserSongInTransaction(t,e,s){if((await t.run(`
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
      `,[s.slug,s.title,s.subtitle,s.author,s.keyRoot,s.keyQuality,s.draft,s.cmd,s.searchText,e])).changes<1)throw new Error(`User song ${e} does not exist.`);await t.run("DELETE FROM song_tag WHERE song_id = ?;",[e]),await t.run("DELETE FROM song_link WHERE song_id = ?;",[e]),await this.writeSongRelations(t,e,s),await this.removeUnusedRelations(t)}async deleteUserSong(t){await this.database.withUserTransaction(async e=>{if(await e.run("DELETE FROM song_favorite WHERE song_source = 'user' AND song_slug = (SELECT slug FROM song WHERE id = ?);",[t]),await e.run("DELETE FROM songbook_song WHERE song_source = 'user' AND song_slug = (SELECT slug FROM song WHERE id = ?);",[t]),(await e.run("DELETE FROM song WHERE id = ?;",[t])).changes<1)throw new Error(`User song ${t} does not exist.`);await this.removeUnusedRelations(e)})}async getSong(t){let e=await this.database.query(t.source,this.songSelect("WHERE id = ?"),[t.id]);return e.length?this.toStoredSong(t.source,e[0]):null}async getUserSongBySlug(t){return this.getSongBySlug("user",t)}async getSongBySlug(t,e){let s=e.trim().toLowerCase();if(!s)return null;let r=await this.database.query(t,this.songSelect("WHERE slug = ?"),[s]);return r.length?this.toStoredSong(t,r[0]):null}async getUserSongIdBySlug(t){let e=await this.database.query("user","SELECT id FROM song WHERE slug = ?;",[t]);return e.length?Number(e[0].id):null}async getUserSongSlugById(t){let e=await this.database.query("user","SELECT slug FROM song WHERE id = ?;",[t]);return e.length?String(e[0].slug):null}async withGeneratedSlug(t,e){let s=this.buildGeneratedSlug(t.author,t.title);if(!await this.slugBelongsToAnotherSong(s,e))return this.withSlug(t,s);for(let r=0;r<100;r+=1){let n=`${s}-${this.randomFourDigitSuffix()}`;if(!await this.slugBelongsToAnotherSong(n,e))return this.withSlug(t,n)}throw new Error("Unable to generate an available song slug.")}buildGeneratedSlug(t,e){return w([t,e])}randomFourDigitSuffix(){return String(Math.floor(Math.random()*9e3)+1e3)}async slugBelongsToAnotherSong(t,e){let s=e===void 0?"SELECT id FROM song WHERE slug = ?;":"SELECT id FROM song WHERE slug = ? AND id <> ?;",r=e===void 0?[t]:[t,e];return(await this.database.query("user",s,r)).length>0}async searchSongsPage(t,e){let{offset:s,limit:r}=this.validatePage(e),n=t.query.trim(),o=this.normalizeTagGroups(t.tagGroups),a=this.normalizeReferences(t.references);if(a&&a.official.length===0&&a.user.length===0)return{songs:[],hasMore:!1};let g=s+r+1,l,i;if(!n)[l,i]=await Promise.all([this.listSource("official",g,o,a?.official),this.listSource("user",g,o,a?.user)]);else{let c=await this.database.openDatabases();[l,i]=await Promise.all([this.searchSource("official",n,c.supportsFts5,g,o,a?.official),this.searchSource("user",n,c.supportsFts5,g,o,a?.user)])}let u=this.sortSongs([...l,...i]);return{songs:u.slice(s,s+r),hasMore:u.length>s+r}}async countSongsByTags(t){let e=m(t),s=Object.fromEntries(e.map(a=>[a,0]));if(e.length===0)return s;let n=`
      SELECT tag_name, count(DISTINCT song_id) AS song_count
      FROM song_tag
      WHERE tag_name IN (${e.map(()=>"?").join(", ")})
      GROUP BY tag_name
    `,o=await Promise.all(["official","user"].map(a=>this.database.query(a,n,e)));for(let a of o.flat()){let g=String(a.tag_name);Object.hasOwn(s,g)&&(s[g]+=Number(a.song_count))}return s}async searchUserSongSummariesPage(t,e){let{offset:s,limit:r}=this.validatePage(e),n=t.trim(),o=r+1,a=n?await this.searchUserSummaries(n,o,s):await this.listUserSummaries(o,s);return{songs:a.slice(0,r).map(g=>this.toSongSummary("user",g)),hasMore:a.length>r}}async searchSongSummariesPage(t,e){let{offset:s,limit:r}=this.validatePage(e),n=t.trim(),o=s+r+1,a=n?(await this.database.openDatabases()).supportsFts5:!1,g=await Promise.all(["official","user"].map(async i=>({source:i,rows:n?await this.searchSourceSummaries(i,n,a,o,0):await this.listSourceSummaries(i,o,0)}))),l=this.sortSongs(g.flatMap(({source:i,rows:u})=>u.map(c=>this.toSongSummary(i,c))));return{songs:l.slice(s,s+r),hasMore:l.length>s+r}}async searchSongbookSongs(t,e){let s=e.trim(),r=new Map([["official",[]],["user",[]]]);for(let i of t.sections)for(let u of i.songs){let c=r.get(u.song.source);c.includes(u.song.slug)||c.push(u.song.slug)}let n=s?(await this.database.openDatabases()).supportsFts5:!1,[o,a]=await Promise.all([this.searchReferencedSource("official",r.get("official"),s,n),this.searchReferencedSource("user",r.get("user"),s,n)]),g=[...o,...a],l=new Map(g.map(i=>[`${i.source}:${i.slug}`,i]));return t.sections.flatMap(i=>i.songs.map(u=>{let c=l.get(`${u.song.source}:${u.song.slug}`);return c?{sectionId:i.id,number:u.number,song:c}:null}).filter(u=>u!==null))}async searchSongbookSongsPage(t,e,s){let{offset:r,limit:n}=this.validatePage(s),o=await this.searchSongbookSongs(t,e);return{entries:o.slice(r,r+n),hasMore:o.length>r+n}}async searchSource(t,e,s,r,n=[],o){if(o?.length===0)return[];let a=this.toLikePattern(e),g=r===void 0?[]:[r],l=n.flat(),i=o===void 0?[void 0]:this.chunkValues(o),u=(await Promise.all(i.map(S=>s?this.database.query(t,this.ftsQuery(n,r!==void 0,S),[this.toFtsQuery(e),...S??[],...l,...g]):this.database.query(t,this.fallbackQuery(n,r!==void 0,S),[a,a,a,a,...S??[],...l,...g])))).flat(),c=this.sortSongs(u.map(S=>this.toStoredSong(t,S)));return r===void 0?c:c.slice(0,r)}async listSource(t,e,s=[],r){if(r?.length===0)return[];let n=this.tagFilterClause(s),o=r===void 0?[void 0]:this.chunkValues(r),a=(await Promise.all(o.map(l=>{let i=this.slugFilterClause(l),u=!!(n||i);return this.database.query(t,this.songSelect(`${u?`WHERE 1 = 1
${i}
${n}`:""}
              ORDER BY title COLLATE NOCASE, id${e===void 0?"":`
LIMIT ?`}`),[...l??[],...s.flat(),...e===void 0?[]:[e]])}))).flat(),g=this.sortSongs(a.map(l=>this.toStoredSong(t,l)));return e===void 0?g:g.slice(0,e)}async searchUserSummaries(t,e,s){let r=(await this.database.openDatabases()).supportsFts5;return this.searchSourceSummaries("user",t,r,e,s)}async searchSourceSummaries(t,e,s,r,n){if(s)return this.database.query(t,this.songSummaryFtsQuery(),[this.toFtsQuery(e),r,n]);let o=this.toLikePattern(e);return this.database.query(t,this.songSummaryFallbackQuery(),[o,o,o,o,r,n])}async listUserSummaries(t,e){return this.listSourceSummaries("user",t,e)}async listSourceSummaries(t,e,s){return this.database.query(t,`${this.songSummarySelect()}
${this.songSummaryOrder()}`,[e,s])}sortSongs(t){return t.sort((e,s)=>e.title.localeCompare(s.title,void 0,{sensitivity:"base"})||e.source.localeCompare(s.source)||e.id-s.id)}mapCmdForStorage(t,e){let s=b(t,{notation:e}),r=s.meta.title.trim();if(!r)throw new Error("A song title is required before saving.");return{cmd:t,title:r,subtitle:s.meta.subtitle?.trim()||null,author:s.meta.author?.trim()||null,slug:s.meta.slug?.trim().toLowerCase()||null,keyRoot:s.meta.key.root,keyQuality:s.meta.key.quality,draft:s.meta.draft?1:0,searchText:this.buildSearchText(s),tags:m(s.meta.tags??[]),links:this.distinctLinks(s.meta.links??[])}}withSlug(t,e){return E(f({},t),{slug:e})}buildSearchText(t){return t.sections.flatMap(e=>e.lines).map(e=>e.lyrics?.trim()).filter(e=>!!e).join(`
`)}distinctText(t){return[...new Map(t.map(e=>e.trim()).filter(Boolean).map(e=>[e.toLowerCase(),e])).values()]}distinctLinks(t){return[...new Map(t.map(e=>[`${e.type.toLowerCase()}:${e.url}`,e])).values()]}async writeSongRelations(t,e,s){for(let r of s.tags)await t.run("INSERT OR IGNORE INTO tag(name) VALUES (?);",[r]),await t.run("INSERT INTO song_tag(song_id, tag_name) VALUES (?, ?);",[e,r]);for(let r of s.links)await t.run("INSERT INTO song_link(song_id, type, url) VALUES (?, ?, ?);",[e,r.type.toLowerCase(),r.url])}async removeUnusedRelations(t){await t.run("DELETE FROM tag WHERE name NOT IN (SELECT tag_name FROM song_tag);")}async searchReferencedSource(t,e,s,r){if(!e.length)return[];let n=[];for(let o=0;o<e.length;o+=400){let a=e.slice(o,o+400),g=a.map(()=>"?").join(", "),l=[...a],i=`WHERE song_view.slug IN (${g})`;if(s&&r)i=`
          JOIN song_search ss ON ss.rowid = song_view.id
          WHERE song_view.slug IN (${g})
            AND song_search MATCH ?
        `,l.push(this.toFtsQuery(s));else if(s){let u=this.toLikePattern(s);i=`
          WHERE song_view.slug IN (${g})
            AND (
              song_view.title LIKE ? ESCAPE '\\' COLLATE NOCASE
              OR coalesce(song_view.author, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
              OR coalesce(song_view.subtitle, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
              OR song_view.search_text LIKE ? ESCAPE '\\' COLLATE NOCASE
            )
        `,l.push(u,u,u,u)}n.push(...await this.database.query(t,this.songSelect(i),l))}return n.map(o=>this.toStoredSong(t,o))}ftsQuery(t,e=!1,s){return this.songSelect(`
      JOIN song_search ss ON ss.rowid = song_view.id
      WHERE song_search MATCH ?
      ${this.slugFilterClause(s)}
      ${this.tagFilterClause(t)}
      ORDER BY song_view.title COLLATE NOCASE, song_view.id
      ${e?"LIMIT ?":""}
    `)}fallbackQuery(t,e=!1,s){return this.songSelect(`
      WHERE (
        song_view.title LIKE ? ESCAPE '\\' COLLATE NOCASE
        OR coalesce(song_view.author, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
        OR coalesce(song_view.subtitle, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
        OR song_view.search_text LIKE ? ESCAPE '\\' COLLATE NOCASE
      )
      ${this.slugFilterClause(s)}
      ${this.tagFilterClause(t)}
      ORDER BY song_view.title COLLATE NOCASE, song_view.id
      ${e?"LIMIT ?":""}
    `)}tagFilterClause(t){return t.map((e,s)=>`AND EXISTS (
          SELECT 1
          FROM song_tag search_tag_${s}
          WHERE search_tag_${s}.song_id = song_view.id
            AND search_tag_${s}.tag_name IN (${e.map(()=>"?").join(", ")})
        )`).join(`
`)}slugFilterClause(t){return t?.length?`AND song_view.slug IN (${t.map(()=>"?").join(", ")})`:""}chunkValues(t){let e=[];for(let s=0;s<t.length;s+=400)e.push(t.slice(s,s+400));return e}normalizeTagGroups(t){return(t??[]).map(e=>m(e)).filter(e=>e.length>0)}normalizeReferences(t){if(t===void 0)return;let e={official:[],user:[]},s=new Set;for(let r of t){let n=r.slug.trim().toLowerCase(),o=`${r.source}:${n}`;!n||s.has(o)||(s.add(o),e[r.source].push(n))}return e}songSummaryFtsQuery(){return`${this.songSummarySelect(`
      JOIN song_search ss ON ss.rowid = song.id
      WHERE song_search MATCH ?
    `)}
    ${this.songSummaryOrder()}`}songSummaryFallbackQuery(){return`${this.songSummarySelect(`
      WHERE song.title LIKE ? ESCAPE '\\' COLLATE NOCASE
         OR coalesce(song.author, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
         OR coalesce(song.subtitle, '') LIKE ? ESCAPE '\\' COLLATE NOCASE
         OR song.search_text LIKE ? ESCAPE '\\' COLLATE NOCASE
    `)}
    ${this.songSummaryOrder()}`}songSummarySelect(t=""){return`
      SELECT song.id, song.slug, song.title, song.subtitle, song.author
      FROM song
      ${t}
    `}songSummaryOrder(){return"ORDER BY song.title COLLATE NOCASE, song.id LIMIT ? OFFSET ?"}songSelect(t){return`
      SELECT song_view.id, song_view.slug, song_view.title, song_view.subtitle,
             song_view.author, song_view.key_root, song_view.key_quality, song_view.draft,
             song_view.cmd, song_view.search_text, song_view.tags, song_view.links
      FROM song_view
      ${t}
    `}toLikePattern(t){return`%${t.replace(/[\\%_]/g,"\\$&")}%`}toFtsQuery(t){return t.split(/\s+/).filter(Boolean).map(e=>`"${e.replace(/"/g,'""')}"*`).join(" AND ")}validatePage(t){if(!Number.isInteger(t.offset)||t.offset<0||!Number.isInteger(t.limit)||t.limit<1)throw new Error("A valid search page is required.");return t}toStoredSong(t,e){return{source:t,id:Number(e.id),slug:String(e.slug),title:String(e.title),subtitle:typeof e.subtitle=="string"?e.subtitle:null,author:typeof e.author=="string"?e.author:null,keyRoot:Number(e.key_root),keyQuality:String(e.key_quality),draft:Number(e.draft)===1,cmd:String(e.cmd),searchText:String(e.search_text),tags:this.readJsonArray(e.tags),links:this.readJsonArray(e.links)}}toSongSummary(t,e){return{source:t,id:Number(e.id),slug:String(e.slug),title:String(e.title),subtitle:typeof e.subtitle=="string"?e.subtitle:null,author:typeof e.author=="string"?e.author:null}}readJsonArray(t){if(Array.isArray(t))return t;if(typeof t!="string")return[];try{let e=JSON.parse(t);return Array.isArray(e)?e:[]}catch{return[]}}static \u0275fac=function(e){return new(e||d)};static \u0275prov=y({token:d,factory:d.\u0275fac,providedIn:"root"})};export{h as a,T as b};
