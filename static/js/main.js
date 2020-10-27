(() => {
    const projects = [
        {
            title: 'Web Design',
            projects:[ 
                 {
                    title: 'Joboffer',
                    descr: 'Een ludieker manier om te leren werken met css',
                    href: './webdes/01-joboffer'
                },
                {
                    title: 'Thriven',
                    descr: 'Promotiepagina voor een app om te leren werken met flexbox',
                    href: './webdes/02-thrive'
                },
               {
                    title: 'Thriven 2',
                    descr: 'Verdere uitwerking van opdracht 2',
                    href: './webdes/03-thriven'
                },
            ]
        },
        {
            title: 'Web Programming',
            projects:[ 
                {
                    title: 'Festival',
                    descr: 'Een literal object uitlezen en weergeven in DOM',
                    href: './webpgm/01-festival'
                },
                {
                    title: 'Basic JS met DOM',
                    descr: 'Een literal object uitlezen en weergeven in DOM en details laden in overlay',
                    href: './webpgm/02-basic-js-dom'
                },
                {
                    title: 'Tronald Dump',
                    descr: 'Leren omgaan met API\'s via XMLHttpRequest',
                    href: 'https://git.lennertderyck.be/tweets-of-the-dumbest-living-thing/'
                },
                {
                    title: 'The meal database',
                    descr: 'Leren omgaan met API\'s via fetch en deze combineren',
                    href: 'https://git.ahs.lennertderyck.be/1920-webpgm2-recipes-api/'
                }, 
                {
                    title: 'Parkings Gent',
                    descr: 'Data consumeren vanuit API met async await',
                    href: './webpgm/03-parkings'
                }, 
                {
                    title: 'Quiz',
                    descr: 'Examenwerkstuk – maakt gebruik van Open Trivia api',
                    href: 'https://webpgm2-exam.netlify.com/'
                }, 
                {
                    title: 'Website opleiding Programmeren',
                    descr: 'Een concept voor een website omtrent onze opleiding',
                    href: 'https://git.ahs.lennertderyck.be/case1-pgm-website-pgm-lenndery/#/'
                }, 
                
            ]
        },
        {
            title: 'UI / UX',
            projects:[ 
                {
                    title: 'Curriculum vitae',
                    descr: 'Leren gebruik maken van Adobe XD en uitvoeren in HTML & CSS',
                    href: './uiux/01-cv'
                },
                {
                    title: 'Paralax',
                    descr: 'Gebruik maken van Javascript om paralax effect toe te voegen',
                    href: './uiux/03-paralax'
                },
                {
                    title: 'Crowdfunding Lowki',
                    descr: 'Verdere uitwerking B007C4MP 2o2o project Lowki',
                    href: 'https://pgmgent-1920-students.github.io/1920-uiux2-crowdfunding-pgm-lenndery/'
                },
            ]
        },
        {
            title: '@WORK',
            projects:[ 
                {
                    title: 'Case 1 Arne Quinze',
                    descr: 'Het namaken van arnequinze.com',
                    href: 'https://git.ahs.lennertderyck.be/1920-atwork-1/'
                },
                {
                    title: 'Case 2 Matthias Talloen',
                    descr: 'Het namaken van https://matthiastalloen.be/',
                    href: 'https://git.ahs.lennertderyck.be/1920-atwork-2/'
                },
                {
                    title: 'Case 3 Establis',
                    descr: 'Het namaken van https://establis.eu/ met 11ty',
                    href: 'https://atwork1-case-3-derycklennert.netlify.com/'
                },
            ]
        },
        {
            title: 'Applied Information Technology',
            projects:[
                {
                    title: 'Taptoe (Adobe XD)',
                    descr: 'Jeugdlokalen eenvoudig huren en verhuren',
                    href: 'https://xd.adobe.com/view/7148ffd0-d77d-43e7-95c7-02dbc1e23a31-241b/?fullscreen'
                }
            ]
        },
        {
            title: 'Andere projecten',
            projects:[
                {
                    title: 'copy.paste.ninja',
                    descr: 'Verzameling van veelgebruikte code snippets, handig bij het coderen',
                    href: 'https://copy.paste.ninja'
                }
            ]
        }
    ]

    const app = {
        initialize() {
            console.log('\n' + `%cmain.js ${arguments.callee.name}() running! \n` + ' ', 'color: #00d400; font-weight: bold');
            console.log(`%c${arguments.callee.name}() ran`, 'font-weight: bold');

            const tofill = document.getElementById('projects');
            this.body = document.querySelector('body');
            this.nav = document.querySelector('#nav');

            let menuStr = '';
            projects.forEach((course) => {
                menuStr += `
                    <a href="#${course.title.replace(' ', '').toLowerCase()}">${course.title}</a>
                `
            })


            let tempStr = '';
            projects.forEach((course) => {
                tempStr += `
                    <h2 class="course-title" id="${course.title.replace(' ', '').toLowerCase()}">${course.title}</h2>
                    <hr>
                    ${this.generateProjects(course.projects)}
                `
            })

            tofill.innerHTML = tempStr;
            nav.innerHTML = menuStr;

            replaceElement('currentYear', new Date().getFullYear())
        },

        generateProjects(projectsArray) {
            console.log(`%c${arguments.callee.name}() ran`, 'font-weight: bold');

            let tempStr = '';
            projectsArray.forEach((project, index) => {
                tempStr += `
                    <article data-id="${index}">
                        <div>
                            <h3>${++index} – ${project.title}</h3>
                            <p>${project.descr}</p>
                        </div>
                        <div>
                            <a class="project-url" href="${project.href}" data-collapse-trigger="collapseProjectFrame" target="projectFrame">Bezoeken</a>
                        </div>
                    </article>
                `
            });
            return tempStr;
        },

        generateProjectFrame(input) {
            console.log(`frame should be showed`)
        }
    }

    app.initialize(); // Initialize app – execute
})()

function replaceElement(element, content) {
    element = document.querySelectorAll(`[data-replace="${element}"]`);
    element.forEach((el) => {
        el.outerHTML = content;
    })
}

function fillElement(element, content) {
    element = document.querySelectorAll(`[data-fill="${element}"]`);
    element.forEach((el) => {
        el.innerHTML = content;
    })
}
