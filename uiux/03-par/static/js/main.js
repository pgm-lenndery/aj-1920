(() => {
    const db = {
        actors: [
            {
                img: '../images/characters/arthur.jpg',
                actor: 'Michael Caine',
                role: 'Arthur - Chester King',
                about: 'Chester King, also known by his codename Arthur, was the head of the Kingsman agency from an unknown point in time prior to 1997 until 2014'
            },
            {
                img: '../images/characters/eggsey.jpg',
                actor: 'Taron Egerton',
                role: 'Eggsy',
                about: 'Before joining the Kingsman agency, Eggsy was a rough street kid who frequently got into trouble.'
            },
            {
                img: '../images/characters/gallahad.jpg',
                actor: 'Colin Firth',
                role: 'Galahad - Harry Hart',
                about: 'Wanted to become a lepidopterist, but instead chose to become an officer in the British Army. After serving for some time, he was recruited into Kingsman.'
            },
            {
                img: '../images/characters/valentine.jpg',
                actor: 'Samuel L. Jackson',
                role: 'Richmond Valentine',
                about: 'Richmond Valentine was a well-known philanthropist and billionaire, concerned with the environmental problems.'
            },
            {
                img: '../images/characters/gazelle.jpg',
                actor: 'Sofia Boutella',
                role: 'Gazelle',
                about: 'Gazelle was the personal assistant and right-hand man to billionaire Richmond Valentine who\'s lower legs were replaced with blades'
            },
        ]
    }

    const app = {
        initialize() {
            console.log('\n' + `%c[service] main.js ${arguments.callee.name}() running! \n` + ' ', 'color: #00d400; font-weight: bold');
            console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');

            this.cached();
            this.controlTrailer();
            document.querySelector("body > main > section:nth-child(4) > div > div > div").innerHTML = this.generateCast()

            document.onmousemove=function(e){
                let xPos = e.clientX, yPos = e.clientY;
                let xFactor = (window.innerWidth/2 - xPos) / (window.innerWidth/10), yFactor = (window.innerHeight/2 - yPos) / (window.innerHeight/5);
                const multiply = 6 * -1
                
                const el = {
                    pre: document.querySelector('[data-section="hero"] .container h2[data-label="hero-title-pre"]'),
                    agent: document.querySelector('[data-section="hero"] img'),
                    after: document.querySelector('[data-section="hero"] [data-label="hero-title-after"]')
                }

                el.pre.style.transform = `translate(${xFactor * multiply}px, ${yFactor * multiply}px)`;
                el.agent.style.transform = `translate(${xFactor * (multiply/2)}px, ${yFactor * (multiply/2)}px)`;
                el.after.style.transform = `translate(${xFactor * multiply}px, ${yFactor * multiply}px)`;
                console.log(`mouse pos x: ${xFactor}, y: ${yFactor}`)
            };
        },

        cached() {
            console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');

            this.videoArray = document.querySelectorAll('video[data-controlled]')
            console.log(this.videoArray)

            this.video = {
                wrapper: document.querySelector('.video-wrapper'),
                el: document.querySelector('[data-controlled="trailer1"]'),
                play: document.querySelector('[data-video-control="play"]')
            }
            // console.log(this.video.el);
        },

        controlTrailer() {
            // PAUSE / PLAY VIDEO
            this.video.wrapper.addEventListener('click', () => {
                console.log('video clicked')
                if (this.video.el.paused == true) {
                    this.video.wrapper.classList.add('playing');
                    this.video.wrapper.classList.remove('paused');
                    this.video.el.play();
                    this.video.el.setAttribute('controls', '');
                } else {
                    this.video.wrapper.classList.add('paused');
                    this.video.wrapper.classList.remove('playing');
                    this.video.el.pause();
                    this.video.el.removeAttribute('controls');
                }
            })
        },

        generateCast() {
            tempStr = '';
            db.actors.forEach((r, index) => {
                tempStr += `
                    <div class="flex-grid-item" data-label="actor">
                        <img src="${r.img.replace('../','./static/')}" width="100%" heigt="200px">
                        <h3 class="text-center"><strong>${r.role}</strong></h3>
                        <small class="text-center">${r.actor}</small>
                    </div>
                `
            });
            return tempStr
        }
    }

    app.initialize();
})()