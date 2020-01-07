(() => {
    const projects = [
        {
            title: 'Web Design',
            projects:[ 
                 {
                    title: 'Joboffer',
                    descr: 'Een ludieker manier om te leren werken met css',
                    href: '/webdes/01-joboffer'
                },
                {
                    title: 'Thriven',
                    descr: 'Promotiepagina voor een app om te leren werken met flexbox',
                    href: '/webdes/02-thrive'
                },
               {
                    title: 'Thriven 2',
                    descr: 'Verdere uitwerking van opdracht 2',
                    href: '/webdes/03-thriven'
                },
            ]
        },
        {
            title: 'Web Programming',
            projects:[ 
                {
                    title: 'Festival',
                    descr: 'Een literal object uitlezen en weergeven in DOM',
                    href: '/webpgm/01-festival'
                },
                {
                    title: 'Basic JS met DOM',
                    descr: 'Een literal object uitlezen en weergeven in DOM en details laden in overlay',
                    href: '/webpgm/02-basic-js-dom'
                },
            ]
        },
        {
            title: 'UI / UX',
            projects:[ 
                {
                    title: 'Curriculum vitae',
                    descr: 'Leren gebruik maken van Adobe XD en uitvoeren in HTML & CSS',
                    href: '/uiux/01-cv'
                },
                {
                    title: 'Paralax',
                    descr: 'Gebruik maken van Javascript om paralax effect toe te voegen',
                    href: '/uiux/02-paralax'
                },
            ]
        },
        {
            title: '@WORK',
            projects:[ 
                {
                    title: 'Case 1 Arne Quinze',
                    descr: 'Het namaken van arnequinze.com',
                    href: '/at-work/01-case-1/index.html'
                },
                {
                    title: 'Case 2 Matthias Talloen',
                    descr: 'Het namaken van https://matthiastalloen.be/',
                    href: '/at-work/02-case-2'
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
                            <a class="project-url" href=".${project.href}" data-collapse-trigger="collapseProjectFrame" target="projectFrame">Bezoeken</a>
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
