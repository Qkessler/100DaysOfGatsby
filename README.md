# 100DaysOfGatsby

Considering previous experience learning Python following a similar strategy, I
find that the 100DaysOf* is the best way to get proficient with any new
technology interesting enough! The 100DaysOfGatsby plan that I’m following was
created by the Gatsby team, you can find it here: [[https://www.gatsbyjs.com/blog/tags/100-days-of-gatsby/][100-days-of-gatsby]]

## Day 1: 2021/03/07
  The first day I created the repository and added the first project, starting
  to dabble with routing, using the [[file:../org_files/slip-box/20210314170333-gatsby_file_system_api.org][Gatsby File System API]] and graphql. I find
  that the graphql that was changed by Gatsby is a really interesting concept,
  with the ability to pass filters to the queries.

## Day 2: 2021/03/08
  The second day! I started trying to understand pages in Gatsby. Considering
  that it is the first time that I have touched React, Typescript and Graphql, I
  have a lot of learning to do.

  I understood the amazing way to pass variables to html code, all inside our
  javascript or typescript files! I also added the [[https://github.com/Qkessler/100DaysOfGatsby/blob/main/20210308183755-gatsby_building_blocks.org][Gatsby building blocks note]].

## Day 3: 2021/03/09
  On the third day, I started getting interested on Styling on Gatsby,
  considering that it was recommended to me to start thinking about theming and
  CSS-in-JS frameworks, namely Chakra-ui, Theme-ui and Tailwind CSS. I wrote
  a [[https://github.com/Qkessler/100DaysOfGatsby/blob/main/20210309171436-gatsby_styling.org][note]] on the topic, drawing from the information that I found on
  the [[https://www.gatsbyjs.com/docs/how-to/styling][how-to/styling]] page in the Gatsby documentation.

  I also tried implementing a simple navigation betweeen locations with the file
  system api, but I didn't seem to understand it correctly. More work to do.

## Day 4: 2021/03/10
   On the fourth day, I started working on getting content in the site, starting
   with the Contentful CMS, which was recommended by the Gatsby team for the
   simplicity and ease of mastering the concepts.

   I also added the location pages, but it doesn't really work because I still
   don't understand how to pass the variables to the queries.

## Day 5: 2021/03/11
   I though that it was a good idea to check the =filesystem-api= to make sure
   that I was understanding the queries, just to see if I was doing stuff wrong
   with the Contentful API. Surprise, I was. the filesystem-api made working
   with the =src/= directory a breeze. I added the [[https://github.com/Qkessler/100DaysOfGatsby/blob/main/20210311190230-gatsby_data.org][Gatsby data note.]]

   I tried to set up the locations pages again, with no success.

## Day 6: 2021/03/12
   On day 6, I tried getting some information on fixing the Contenful API, it
   seems that I would never get this working. I looked at =StaticQueries= in the
   Gatsby docs. Still didn't work.


   I added the location page, getting the correct information into a list.

## Day 7: 2021/03/13
   On day 7, I added [[https://github.com/Qkessler/100DaysOfGatsby/blob/main/javascript-gatsby-emacs-configuration.org][Emacs development configuration]] in order to get a working
   react, gatsby and typescript workflow going!

   I also added the [[https://github.com/Qkessler/100DaysOfGatsby/blob/main/20210308181323-gatsby_static_queries.org][Static Queries note]], drawing on the information I had been
   collecting the day before.
   
## Day 8: 2021/03/14
   I added the [[https://github.com/Qkessler/100DaysOfGatsby/blob/main/20210314170333-gatsby_file_system_api.org][Gatsby file system api note]], trying to understand the process
   that Gatsby uses for getting the data to create the pages. The information
   turned out to be amazing, it is the first time that I see technology making
   use of queries from the file name.

   On the same day, I used some of that information to get information out of
   the filesystem-api, getting more pages working. I also found that there was
   no =gatsbyPath= property on graphiql for the ContentfulLocation object, which
   is key to linking to the pages created by the Gatsby file system api.

## Day 9: 2021/03/15
   I added a working proof of concept project, using what I had learned about
   the filesystem api to finally get the location pages working, feels amazing!
   I found that maybe it was a problem with the Contentful starter page,
   creating a new project worked wonders.

## Day 10: 2021/03/17
   As I finished the first task that was assigned by the Gatsby team on the
   100DaysOfGatsby blog post, I turned to the second challenge, which started me
   out on CSS frameworks, namely [[https://chakra-ui.com/docs/getting-started][Chakra-ui]].

   I found that the documentation for installing Chakra-ui is flawed, as there
   are a ton of dependency issues and the directions are a bit confusing.

## Day 11: 2021/03/18
   I worked a bit more on the emacs configuration, I wasn't really happy with
   =js2-mode=, and turned to =lsp-mode=, which is the package that I really use
   for all my programming needs inside of emacs. Here are interesting links:

   - [[https://emacs-lsp.github.io/lsp-mode/][lsp-mode package]].
   - [[https://github.com/theia-ide/typescript-language-server][typescript-language-server]]: useful for a ton of editors, which support json configuration.

   I also tried to get Chakra-ui working, but there was no way to get Gatsby 3.##
   and Chakra together. I found that some issues were created on the Chakra-ui
   repo, pushing for a change of versions or at least supporting both.

## Day 12: 2021/03/19
   On day 12, I added
   the [[https://github.com/Qkessler/100DaysOfGatsby/blob/main/20210319190110-style_guide_design_systems_and_component_libraries.org][Style Guide, Design Systems and Component Libraries note]], which is super
   interesting for understanding the world of styling and website making.

   I also added my web project, which is really the project I will be mostly
   working on, on this 100Daysofgatsby. I tried working with a custom navbar,
   didn't really find it interesting. I need to learn more
   about [[https://www.gatsbyjs.com/docs/conceptual/how-shadowing-works/][Shadowing in Gatsby]].
   
## Day 13: 2021/03/20
   I worked a bit more on the layout, running into a ton of errors, namely
   because Chakra-ui kept giving me war for the dependencies.

   I changed the starter project to the amazing [[https://www.huxiaoxing.com/building-a-website-with-org-mode-files][Xiaoxing's orgajs starter]], which
   is a package that gets the content for the site from org-mode files. I
   configured the options for the starter, getting some changes on the site
   always feels good.

## Day 14: 2021/03/21
   On day 14, I tried to swich from npm to yarn, as I found that yarn was much
   quicker and lighter, considering that I have to create a node_modules folder
   everytime I change machines. Didn't really work, I was running into
   dependency issues and couldn't find helpful information on the documentation.

   I restarted the project once more, considering that I had messed up the
   installation files from all the changes to yarn. I updated some of the work
   from previous days and started working on the header of the blog, trying to
   change the theme of it.

   I also changed the themeSwitcher's place, making it look a lot better in my
   opinion. Couldn't get sticky position working on the navbar using Theme-ui,
   need to inform myself better.

## Day 15: 2021/03/22
   This was more of a relaxed day, I tried to understand the logic behind the
   orgajs, which are the configuration files that I need to pass to headers and
   files in order to make it work. More information was found regarding:

   - Org-mode tags, which translates into tags to the blog posts, really cool.
   - Categories.
   - Closed dates: Orgajs could use the closed date on our published posts, man
     I love org-mode.

## Day 16: 2021/03/23
   I started trying to change the theme-ui colors for the header links, without
   success again, will have to add custom css-in-js to the =Link= tags it seems.

   The 16th day was amazing. I got to attend to a Gatsby cloud performance
   webinar, and added a note on the notes that I had been taking on the
   webinar: [[https://github.com/Qkessler/100DaysOfGatsby/blob/main/enrique-kesslerm-web/performance_webinar_notes.org][performance webinar notes.]]


