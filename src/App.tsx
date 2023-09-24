import styles from './App.module.scss'
import clsx from "clsx"

function App() {
  const indent = new Array(8).fill(<>&nbsp;</>)

  return <div id={styles.mainPage}>
    <div id={styles.pageHeader}>
      <p className={clsx(styles.textStyle_h1, styles.name)}>CLAIRE FOUSSARD</p>
      <p className={clsx(styles.textStyle_h2, styles.jobTitle)}>CURATOR AND GALLERIST</p>
    </div>

    <div id={styles.aboutSection}>
      <div className={styles.headshotContainer}>
        <img src="./headshot.jpg"/>
      </div>
      <div className={clsx(styles.textStyle_body, styles.bodyTextContainer)}>
        <p className={styles.bioText}>Claire Foussard is a New York City based curator, writer, and one of the United States' foremost advocates for contemporary Inuit art. In her three years as the director of a small gallery with locations in Harlem and the East Village, Foussard collaborated with dozens of emerging artists to share their multimedia exhibitions and publications with NYC's next generation of art collectors. She received bachelor's degrees in art history and anthropology from Colgate University in 2018, and in 2022 she received her MA in Art Business from Sotheby's Institute of Art. She has collaborated with Kinngait Studios and the West Baffin Co-operative since her 2017 research and curatorial residency, and she continues to produce significant scholarship and exhibitions highlighting the ingenuity and resilience of Inuit artists in living and working in the Canadian Arctic since the mid-20th century.</p>
        <a href="mailto:thatgirl@clairefousssard.com" target="_blank">thatgirl@clairefoussard.com</a>
      </div>
    </div>

    <p className={clsx(styles.textStyle_h2)} id={styles.projectsHeader}>WORK</p>

    <div className={styles.project} data-project-id="once-a-myth">
      <div className={styles.headerContainer}>
        <div className={clsx(styles.textStyle_h1, styles.title)}>Once a Myth, Becoming Real</div>
        <div className={clsx(styles.textStyle_h2, styles.subTitle)}>Canadian Pavilion at the Gwangju Biennale<br/><br/>LeeKangHa Art Museum<br/><br/>April 7 - July 9, 2023</div>
      </div>
      <div className={styles.imagesContainer}>
        <img src="./once-a-myth/1.png"/>
        <img src="./once-a-myth/2.png"/>
        <img src="./once-a-myth/3.png"/>
        <img src="./once-a-myth/4.png"/>
      </div>
      <div className={clsx(styles.textStyle_body, styles.bodyTextContainer)}>
        <p>
          {indent}For just over six decades, the Inuit community of Kinngait (formerly Cape Dorset) has produced some of the most iconic and celebrated works in Canadian art history. Revered internationally for their unique aesthetic, Kinngait artists have developed, in that mere 62 years, a remarkable sophistication in drawing, printmaking and sculpture. This exhibition is the first of its kind in the Republic of Korea: a pavilion under the banner of Canada featuring the work of artist members of the legendary Kinngait Studios. Showcasing 29 artists and containing more that 90 works, this exhibition presents a cross-section of recent production at Kinngait Studios. 
          <br/><br/>
          {indent}Once a Myth, Becoming Real explores current practices in drawing and sculpture, in an exhibition designed to be as much about contemporary Inuit art as it is an homage to the evolution of the genre. Alongside the more than two dozen practicing artists featured in the exhibition, one standout exception is Kenojuak Ashevak. Arguably the grande dame of Inuit art, she was part of the first wave of creators to populate Kinngait Studios, and now long deceased. A monumental reproduction of her sealskin print entitled Rabbit Eating Seaweed will dominate the museum entrance, and one of her diminutive but very rare serpentinite carvings, entitled Bear, displayed jewel-like, will ground the exhibition in a history of Arctic expression. These works are also intended as a reminder of how influential the foundations of Inuit art remain.
          <br/><br/>
          {indent}Also divergent from the here-and-now focus are 11 Shuvinai Ashoona monochromatic, abstract drawings from the late 1990s. These works contrast with the surrealist aesthetic for which she has become internationally known during the past decade. These contributions by Ashevak and Ashoona are meant to briefly pull the viewer back in time, providing a contextual framework for the larger exhibition collection, were all produced in 2022. 
          <br/><br/>
          {indent}Within the wider trajectory of Western art history, the Kinngait creative community is still in its infancy. Its genesis dates to the time Abstract Expressionists were commanding the New York art scene. Both originated at the same time, but these movements could not be more divergent—or are they? Separated by geography, culturally disconnected, politically dissimilar: from an art historical perspective, it’s hard even to attempt a comparison. The early Inuit experimental works are evidence of unfettered creativity and attempts at fundamental material understanding. At the outset training was self-directed, then driven by intergenerational mentorship, and has always remained outside the conventions of academic or studio training.
          <br/><br/>
          {indent}Imagine a process of pure discovery not only in its early phase but with each successive generation, a community adopting and then fully synthesizing drawing, printmaking and sculpture completely intuitively, without the intervention of academic ideology. This is germane to the understanding of how Inuit art would become so distinct and inimitable. About that comparison: a movement such as abstract Expressionism, as Western (or more to the point, Southern) art movements do, invented things or, more accurately, reinvented things. Inuit art began as a 1950s phenomenon, developing outside the established visual art canon. Yet the early participant artists did seek to develop a visual language that would underpin how they observed and interpreted the world around them, creating a visual record of a largely oral history as well as exploring the pure possibility of aesthetics. Again, some of the same objectives were laid out by their Southern creative colleagues in previous eras. All of this occurred without direct, deliberate or meaningful contact between the two evolutions.
          <br/><br/>
          {indent}Inuit artists took-up mark-making and printmaking in the mid-20th century. Sculpture has a more complex evolution with roots millennia old, but eventually influenced by first contact and beyond. Irrespective of medium and its inception, artists from the Kinngait community have neither formal studio nor art history training; the milieu has been propagated through a system of mentorship, which has sustained practices, and the community, for those six decades. Yet upon reflection, in the aesthetic solutions and predilections of Inuit art, we can see almost inexplicable parallels and comparisons with other global visual arts movements of the time.
          <br/><br/>
          {indent}It is empirical that the artists of Kinngait Studios had almost no concern for that academy of thinking. That isn’t to say this community of artists was entirely disconnected; early in the trajectory of Inuit art, creators travelled with their work to exhibitions and presentations internationally. For instance, Ashevak was well acquainted with her colleagues and stakeholders in many other parts of the world, having been hosted by a litany of royals, dignitaries, patrons and museums.
          <br/><br/>
          {indent}At the same time that artists were travelling outside of the community, Kinngait Studios was playing host to visiting artists, starting as early as the 1960s. Artists working in all manner of media and from every career stage would work in the studios, alongside and in collaboration with their Inuit counterpart. In many ways, that exchange was historically mischaracterized by the international art establishment. Inuit creative expression was celebrated for its exoticism, mysticism and simply because of where it was produced, rather than defined through the lens of contemporary art discourse. That tendency has certainly evolved for the better, as evidenced by this pavilion at the Gwangju Biennale, but that anthropologically skewed thinking does still linger in some pockets of institutional, curatorial and collector thinking. To further clarify, Inuit creative expression cannot be divorced from its geopolitical and socio-historical context, simply because its uniqueness largely results from a sense of place and investment in tradition. For the Inuit art of Kinngait, relationships, history and community are central narratives, which make this an extraordinary genre of visual art.
          <br/><br/>
          {indent}It may seem odd that Canada, as the second-largest landmass on the planet, with cultural capitals like Toronto, Montreal and Vancouver, would be represented at the Gwangju Biennale by an Arctic community of only 1,400 inhabitants. But when you understand Kinngait’s development, the seemingly improbable can make a great deal of sense. Inuit art has been a de facto national identity for decades and literally from its beginnings in the 1950s, was a global diplomatic currency for the Government of Canada. Although a federal effort intedned to foster economy in the nation’s northernmost region, it was almost unpredicted that art-making in Kinngait would become such the prosperous industry that it is today.
          <br/><br/>
          {indent}This exhibition comprises work by living artists but is buttressed by the influences of earlier generations; the past and present share a material commonality, with the artists today continuing to perfect drawing, printmaking and stone sculpture, media that dates back to the earliest Kinngait creators. Subject matter in this show continues to inhabit the traditions of observation and documentation of nature and the land, but also of developments in daily life and imagination inspired by myth.
          <br/><br/>
          {indent}With this exhibition, we acknowledge more than six decades of Inuit art-making, while at the same time celebrating a 60th anniversary of diplomatic relations between Canada and the Republic of Korea. Are the milestones coincidental? Indeed. Are they significant? Of course, and the alignment has more relevance than might immediately appear. One could propose that the function of diplomacy is closely aligned to the values of Inuit art, with both emphasizing a commitment to global conversations. The art of Kinngait is intended to function as a window onto the Inuit world, a visual vocabulary designed to communicate cultural narratives. That messaging inherently speaks to the importance of place, the vital role of storytelling and people-to-people ties, which are deeply cherished in both the Inuit and Korean cultures.
          <br/><br/>
          {indent}In the context of these two anniversaries, we can observe some larger shared themes, like a spirit of innovation, creativity and entrepreneurship. Inuit art and Asia Pacific diplomacy may seem far apart yet are also deeply connected. This exhibition is intended to create a moment in which we can tell the story of one small Arctic community, while providing an occasion for two great nations to celebrate their shared beliefs and mutual goals. The exhibition can help us further understand the many ways in which the intangible can take form, aspirations can write history and sometimes myths can become real.
        </p>
      </div>
    </div>

    <div className={styles.project} data-project-id="just-being-us">
      <div className={styles.headerContainer}>
        <div className={clsx(styles.textStyle_h1, styles.title)}>ᐅᕙᒍ ᑕᐃᑯᐊ, ᑕᑯᐊ ᐅᕙᒍᑐᐃᓇᐃ<br/>Just being Us. Just Us…. and Us..</div>
        <div className={clsx(styles.textStyle_h2, styles.subTitle)}>Featuring Shuvinai Ashoona and Padloo Samayualie, Ningeosiaq Ashoona, Sam Akesuk, Palaya Qiatsuq, Pitseolak Qimirpik, and more from Kinngait Studios<br/><br/>SPRING/BREAK Art Show Booth #29<br/><br/>Feb 15 - 19, 2023</div>
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.portrait}>
          <img src="./just-being-us/3.png"></img>
          <img src="./just-being-us/4.png"></img>
        </div>
        <div className={styles.landscape}>
          <img src="./just-being-us/1.png"></img>
          <img src="./just-being-us/2.png"></img>
        </div>
      </div>
      <div className={clsx(styles.textStyle_body, styles.bodyTextContainer)}>
        <p>
          {indent}Inuit have created remarkably beautiful and innovative hand-crafted objects for more than a millennia, but it has taken the Eurocentric Art World decades (if not centuries) to recognize the work of Inuit artists as “art.” Galleries and institutions committed to the maintenance and glorification of the Western Canon have instead relegated such works to the lesser-revered categories of “artifact,” “craft,” or  “souvenir.” Following a period of forced relocation and acculturation in the mid 1900s, drawing and carving became an essential tool in the preservation of traditional Inuit culture. Through their work, artists visually document the mythologies, histories, and traditions passed down to them from their ancestors, as well as record and make sense of the intense social and cultural upheaval they experienced each day.
          <br/><br/>
          {indent}In spite of challenging circumstances, four generations of Kinngait artists have explored and innovated a totally unique form of image making that simultaneously preserves Inuit cultural knowledge, while also interpreting the influx of alien Western rituals and pop culture symbolism on behalf of their community - drawing upon the past to both record the present and build their desired future. This suite of collaborative drawings by two of Kinngait's brightest women artists, Shuvinai Ashoona and Padloo Samayualie, is an exemplary triumph of contemporary Inuit art. Women in traditional amauti (parkas designed to carry small children in the hood) intermingle with cartoonish ducks, the prefab homes of Kinngait's built environment are fondled by gargantuan tentacles wielding a MacBook. Longtime studiomates, Ashoona and Samayualie embarked on this joint journey in early 2022, and their distinct artistic points of view are apparent in each work: Ashoona's signature real and surreal subjects are here rendered in the painstaking detail for which Samayualie is widely known. This creative collaboration stands as a microcosm of the ongoing intergenerational mentorship and intercultural exchange that has allowed Kinngait Studios to thrive for over sixty years despite the value judgements and misinterpretations coming from the art market. The persistence and ingenuity of artists like Ashoona and Samayualie demand attention and defy expectation. The Inuit Art Renaissance is here - for those willing to see it.
        </p>
      </div>
    </div>

    <div className={styles.project} data-project-id="siku-sila">
      <div className={styles.headerContainer}>
        <div className={clsx(styles.textStyle_h1, styles.title)}>Siku Sila</div>
        <div className={clsx(styles.textStyle_h2, styles.subTitle)}>An exhibition of stone sculptures and paper works created by artists from Kinngait, Nunavut.</div>
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.portrait}>
          <img src="./siku-sila/3.png"></img>
          <img src="./siku-sila/2.png"></img>
        </div>
        <div className={styles.landscape}>
          <img src="./siku-sila/1.png"></img>
          <img src="./siku-sila/4.png"></img>
          <img src="./siku-sila/5.png"></img>
        </div>
      </div>
      <div className={clsx(styles.textStyle_body, styles.bodyTextContainer)}>
        <p>
          {indent}Siku Sila examines the evolving ways visual art has been used to maintain tradition and share Inuit cultural knowledge with the world since the 1980's. The exhibition is a two-part installation, named after a traditional Inuit 'elimination game' that also pays homage to the Kinngait region known as Sikusiila that existed before Inuit settled into communities. In the game, a line is drawn on the ground, designating one side as 'Siku', which translates to 'ice,' and the other side as 'Sila', meaning 'outside air' or 'weather.' The collection features scenes from the arctic landscape, as well as the still lifes and vignettes of intimate moments from inside the artists' homes.
          <br/><br/>
          {indent}Inuk Activist and Curatorial Advisor Oo Aqpik says: “There's a direct correlation between Siku Sila the game, and what the whole world has endured after spending the past year inside. Now, more than ever, we are feeling the distinction between interior and exterior life. This exhibition, and the talented artists featured, mirror this division with deeply personal depictions of 'inside' and 'outside' life. Unlike the English language which has a binary use of 'inside' and 'outside', Inuktitut words carry descriptive information for safe passages. In exploring this collection, viewers will reconsider their relationship to the environment.” 
          <br/><br/>
          {indent}The frst part of the exhibition is a selection of recent works by contemporary Inuit artists including Ooloosie Saila, Nicotye Samayualie, Padloo Samayualie, Ningeosiaq Ashoona, Pitseolak Qimirpik, Palaya Qiatsuq, and Shuvinai Ashoona. The second installment features a selection of prints and drawings dating back to the 1980's by celebrated artists including Pudlo Pudlat, Napachie Pootoogook, Oshutsiak (Oshoochiak) Pudlat, Itee Pootoogook, and Jutai Toonoo, as well as the works of master carvers Pootoogook Jaw and Jamasie Pitseolak.
          <br/><br/>
          {indent}The founding of West Baffin Eskimo Cooperative has transformed artistic production for the Kinngait community of about 1,400 people. For Siku Sila, Aqpik and Foussard curated the works of artists who currently live and create in Kinngait today or have throughout their lifetime, in context of their own community and tradition. Highlights include paper drawings with colored pencil, graphite and ink from Ooloosie Saila, art industry rising star and master of her discipline, an array of prints by Shuvinai Ashoona, featuring characteristic lithographic and etchings inspired by her graphic drawings, paper works by Napachie Pootoogook depicting personal, interior moments from her life lived in a legacy art family, and the pensive and humorous drawings of Jutai Toonoo, which were catalytic for Kinngait's artistic community.
        </p>
      </div>
    </div>

    <div className={styles.project} data-project-id="portraits-of-you">
      <div className={styles.headerContainer}>
        <div className={clsx(styles.textStyle_h1, styles.title)}>Sei Smith: Portraits of you</div>
        <div className={clsx(styles.textStyle_h2, styles.subTitle)}>Sep 19 - Oct 17, 2021</div>
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.landscape}>
          <img src="./portraits-of-you/2.png"/>
        </div>
        <div className={styles.portrait}>
          <img src="./portraits-of-you/1.png"/>
        </div>
      </div>
      <div className={clsx(styles.textStyle_body, styles.bodyTextContainer)}>
        <p>
          {indent}Portraits of You is a series of multi-media paintings that reimagines the viewer's role in the process of making art. Each work is the product of a single conversation, in which Smith asks, “If I were to paint a portrait of you, what would the background look like?”
          <br/><br/>
          {indent}Smith takes notes as his subject describes their ideal portrait background, gathering details and references as the image begins to take shape in his mind. With subjects including Smith's brother, his girlfriend, a favorite musician, an old classmate and her five-year-old son, the resulting compositions are as varied in form and content as the individuals themselves. Smith then obscures each painting with thin layers of tonal acrylic paint, leaving behind only faint outlines and abstracted forms. Finally, Smith encases the works with his signature iridescent film creating a dreamy, reflective effect, like a faded memory of the subject's imagined setting.
          <br/><br/>
          {indent}When viewing these works in person, one begins to question their senses: what at first glance appears decidedly pink quickly fades to a fluorescent blue with only a single side-step. Light bounces off the rippled dichroic film and textured brush strokes of the underlying painting, casting glowing reflections onto the gallery walls. In approaching one of these figureless portraits, the viewer's own shadow appears within the frame, their reflection coming further into focus with each step forward. Portraits of You allows the viewer to literally see themselves in the portraits of eight different people.<br/><br/>
          {indent}Says the artist, “Just as two people can look at the same painting and see different colors depending on where they're standing, our individual backgrounds (social, geographical, economic, etc.) cause us to be aware of, or blind to, aspects of our reality.” In installing each portrait at the eye-level of the subject rather than standard gallery height, Smith intentionally rejects the assumed perspective of Art World hegemony. In his search for an egalitarian art experience, Portraits of You presents a playful celebration of subjectivity. Further underscoring the multitudinous ways in which art - and the world - can be experienced, Smith's accompanying viewing instructions prompt visitors to engage in alternative forms of interaction inspired by his conversation with each subject.
        </p>
      </div>
    </div>

    <footer className={styles.textStyle_body}>website by <a href="https://harryshapiro.com" target="_blank" rel="noopener noreferrer">harry shapiro</a></footer>
  </div>
}

export default App
