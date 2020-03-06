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
                    title: 'Tronald Dump API',
                    descr: 'Leren omgaan met API\'s via XMLHttpRequest',
                    href: 'https://git.lennertderyck.be/tweets-of-the-dumbest-living-thing/'
                },
                {
                    title: 'The meal database',
                    descr: 'Leren omgaan met API\'s via fetch en deze combineren',
                    href: 'https://git.ahs.lennertderyck.be/recipes-api/'
                }, 
                {
                    title: 'Parkings Gent',
                    descr: 'Data consumeren vanuit API met async await',
                    href: 'https://git.ahs.lennertderyck.be/recipes-api/'
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
                    href: 'https://pgmgent-1920-students.github.io/crowdfunding-pgm-lenndery/'
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
                    href: 'https://pgmgent-1920-students.github.io/case-3-establis-pgm-lenndery/'
                },
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