(() => {
    const projects = [
        {
            title: 'Web Design',
            projects:[ 
                {
                    title: 'Thrive',
                    descr: 'Promotiepagina voor een app om te leren werken met flexbox',
                    href: '/webdes/02-thrive'
                },
                {
                    title: 'Joboffer',
                    descr: 'Een ludieker manier om te leren werken met css',
                    href: '/webdes/01-joboffer'
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
        }
    ]

    const app = {
        initialize() {
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
                    <h3 class="course-title" id="${course.title.replace(' ', '').toLowerCase()}">${course.title}</h3>
                    <hr>
                    ${this.generateProjects(course.projects)}
                `
            })

            tofill.innerHTML = tempStr;
            nav.innerHTML = menuStr;
        },

        generateProjects(projectsArray) {
            let tempStr = '';
            projectsArray.forEach((project) => {
                tempStr += `
                    <article>
                    <div>
                        <h3>${project.title}</h3>
                        <p>${project.descr}</p>
                    </div>
                    <div>
                        <a href="https://git.ahs.lennertderyck.be/aj-1920/${project.href}" target="_blank">Bezoeken</a>
                    </div>
                    </article>
                `
            });
            return tempStr;
        }
    }

    app.initialize(); // Initialize app – execute
})()