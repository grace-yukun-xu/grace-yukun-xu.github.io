
# Academic CV

Github Pages multi language template for academic personal websites which supports both RTL and LTR directions.

This template support the kinds of content that academics have: **publications**, **research**, **jobs**, **contact**, and a **dynamically-generated CV**.\
Fork [this repository](https://github.com/simamojtahedi/Academic-cv), modify the configuration and files, and have your own site for free by publishing this code on [GitHub pages](https://pages.github.com/) or any other domain.

## Authors

- [@simamojtahedi](https://github.com/simamojtahedi)


## Demo

Here you can check Demo online: 
[Demo](https://simamojtahedi-academic-cv.netlify.app/)

![academic_cv](https://github.com/simamojtahedi/simamojtahedi/assets/64223524/3b0a48fc-a5aa-4ff2-b6cb-3fc88e3d3b00)


## Getting started
This is the instruction written by Grace Xu at University at Buffalo.

*Note: _ChatGPT does know most of the things, if you ever run into a problem that I didn’t mention. The only thing it struggles a little is knowing which section has the right code, so I focused mainly on where everything is located at. For code assistance, you can usually just copy&paste the section of the code and ask AI how to change this code. Do inform it that you are writing in a js file (I think the coding language is JavaScript?). _

Creating Github account
- https://github.com/
- Should be able to just log in with your gmail account
- Make sure that your account name is what you want for the domain name
    - Eg. My account name is “grace-yukun-xu”, and my personal website is “https://grace-yukun-xu.github.io/“
 
Duplicating the files
<img width="1382" height="658" alt="ec8f45be-9b25-4d25-a6b1-bf0acca0b8e3" src="https://github.com/user-attachments/assets/359bd784-09ca-4b4a-ac9a-f63d259890b7" />
- Click “fork” and change the repository name to “[your account name].github.io”
    - Make sure you type out the whole name, or the link to your personal website will be super long and have a lot of “/“

Changing the code
- Tabs/navigation
    - Currently, the website has 5 tabs: “home”, “publications”, “research”, “jobs”, “cv”
    - To change anything on the navigation bar, navigate to “data” folder and to the “navbar.js” file
        - To change how the tab shows out, go to the “lang” folder and into the “en.js” file (lines 1-9). Change the word in “”, after the “:”
    - If you want to get ride of any of the tabs, put a “//“ in front of all the lines in that chunk (the chunks can be specified by {}; eg., CV goes from lines 39-43; refer to lines 33-38 for example. I got rid of the “Contact” tab that way)
    - If you want to add a tab, copy a chunk (whichever format you want to use) and paste it somewhere in lines 11 to 53. There should also be a “,” after each {} chunk
        - Also, go back to the “data” folder and to the “global.js” file. Add your tab name into the {} for “const navbarLinks = {}”. The tab name is the name (italicized) that you put in this line “active: navbarLinks.jobs ? true : false,”
    - If you want to change the order of the tabs in the navigation bar, go back to the “data” folder and to the “global.js” file. Change the order in the “const navbarLinks = {}”. Make sure there’s always a “,” behind each item
    - I current have two tabs under construction (research statement and teaching statement). You can delete them or use this as a way to keep your ideas. Whichever works for you. 
        - If you want to use these two tabs, you would need to: (1) add the link to your statements in the “navbar.js” file; (2) go back to the “data” folder and to the “global.js” file. Change lines 8 and/or 9 (depend on which tab, if not both) and the “false” phrase into “true”. “False” means it would not show on the tab. 
- Home page
    - To change the links that the icons are linked to, go to the “data” folder” and into the “global.js” file. Scroll down to lines 12 - 32. Change the links accordingly. The “xxxTitle” variables are for the “Contact” tab, which I eliminated from the navigation bar. If you want to have a Contact tab, make sure to fill these out. Only the icons with links provided will show up in Home page. 
    - To change the content on “Home” page:
        - These are located in the “lang” folder and into the “en.js” file (lines 11 to 31). If you want a second language, change the things in the “fa.js” file. I have not looked at those code yet, but I’m open to help if you ended up wanting to make another set of website pages with a second language. To reopen the language-switch button, you would have to make edits in the “utils” folder and into the “navbar.html” (AND it uses a different coding language)
        - For the rest of the “home” page content and the other pages (i.e. Publication, Research, Jobs), the code remain the same format and are all in “lang” folder > “en.js” file. I’ll just briefly go over where the chunks are located and the different kinds of format that you might think about using:
            - Home page: lines 11-31
            - Publications page: lines 33-116
            - Research page: lines 118-131
            - Jobs page: lines 133-158
            - Formats
                - For most of the code, you have a pair of <> in front of your paragraph/line of text and a pair of <> after. There are also some lines that just use “”. These are two different systems with the same purpose: that this paragraph/line/word is not code, and you want this to appear as it is on the website. Make sure you always have an ending marker, and don’t use them interchangeably. 
                - <img width="511" height="258" alt="75590172-5ee9-4df5-8e1e-f8561a6c943f" src="https://github.com/user-attachments/assets/d2ae0912-6605-4763-acbc-40348a56d385" />

- CV page
    - Currently, the “CV” button automatically directs people to a pdf document named “cv_july.pdf”.
    - To change it:
        - You can upload your CV as a pdf or word document to the folder “files”. Name it however you want it to show on the link (eg. My current link for my cv is “https://grace-yukun-xu.github.io/files/cv_july.pdf” 
        - Navigate to “data” folder and to the “navbar.js” file
        - Go to line 42 “url: "../files/cv_july.pdf”,”
        - Change “cv_july.pdf” to your file name
        - If you want to upload another document as another tab, but keep the format (as in once you click on the tab, you get directed to a specific file): Change the “”CV”” in line 41 into whatever tab you want (eg. “Resume”, “Statement”, etc.). Make sure to have the quotations, or it wouldn’t work. Then, upload the files you want to link it to and redo the whole process
- If you want to put notes on the document and not have it disrupt the website
    - For the “.js” files, put “//“ and whatever notes you want after the double dash (eg., “// This is confusing…”)
- To publish the website:
    - Now that you’ve come all the way and your website is ready (or you’re like me and you first publish the website just to see how the code comes out)
    - Go to this project’s main page (the link would likely be https://github.com/[your account name]/[your account name]/.github.io/tree/main (insert your account name in [])
    - Click on “settings”
    - Find “pages” under “Code and automation”
    - Find “Branch” under “Build and deployment”
    - Change “none” to “main”, and the folder behind should be selected as “/(root)”
    - Click “Save” and refresh the page
    - It should now have a box saying “Your site is live at [link]”. If not, you should still be able to access if at “[your account name].github.io”
