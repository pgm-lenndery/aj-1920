(() => {
    'use strict';

    const lineUp = [
        {
            picture: 'images/gestapo-knallmuzik.jpg',
            artist: 'Gestapo Knallmuzik',
            day: 3,
            start: '19:35',
            end: '20:15',
            location: 'Dance Hall'
        },
        {
            picture: 'images/glints.jpg',
            artist: 'Glints',
            day: 3,
            start: '20:45',
            end: '21:25',
            location: 'Dance Hall'
        },
        {
            picture: 'images/bizzey.jpg',
            artist: 'Bizzey Iconic Show',
            day: 3,
            start: '21:55',
            end: '22:45',
            location: 'Dance Hall'
        },
        {
            picture: 'images/heideroosjes.jpg',
            artist: 'Heideroosjes',
            day: 3,
            start: '23:20',
            end: '00:20',
            location: 'Dance Hall'
        },
        {
            picture: 'images/black-box-revelation.jpg',
            artist: 'Black Box Revelation',
            day: 3,
            start: '01:00',
            end: '02:00',
            location: 'Dance Hall'
        },
        {
            picture: 'images/boilerboys.jpg',
            artist: 'The Boilerboys',
            day: 4,
            start: '20:00',
            end: '21:00',
            location: 'Boiler Room'
        }
    ]

    const content = document.getElementById('contentMain');
    const app = {
        initialize() {
            let tempStr = '';
            if (content !== null) {
                lineUp.forEach((event, index) => {
                    console.log(`
                        ${event.artist}\b
                        ${event.day}\b
                        ${event.start}\b
                        ${event.end}\b
                        ${event.location}\b
                    `);

                    tempStr += `
                        <article>
                            <img src="${event.picture}">
                            <div class="card-body">
                                <h3>${event.artist}</h3>
                                <div>${event.location}</div>
                            </div>
                            <div class="card-footer">
                                <div onclick="likeItem('likeN${index}',this)" id="likeN${index}">
                                    <i data-feather="heart"></i>
                                </div>
                                <div>
                                    <small>${returnDay(event.day, 'short')} | </small>
                                    <small>${event.start} – ${event.end}</small>
                                </div>
                            </div>
                        </article>
                    `
                })
                
                content.innerHTML = tempStr;
            }
        }
    }

    app.initialize();
})()

function returnDay(d, type = 'default') {
    if (type == 'default') {
        switch (d) {
            case 0:
                return 'Maandag';
            case 1:
                return 'Dinsdag';
            case 2:
                return 'Woensdag';
            case 3:
                return 'Donderdag';
            case 4:
                return 'Vrijdag';
            case 5:
                return 'Zaterdag';
            case 6:
                return 'Zondag';
        }
    } else if (type == 'short') {
        switch (d) {
            case 0:
                return 'Ma';
            case 1:
                return 'Di';
            case 2:
                return 'Woe';
            case 3:
                return 'Do';
            case 4:
                return 'Vr';
            case 5:
                return 'Za';
            case 6:
                return 'Zo';
        }
    }
}

let liked;

if (liked !== null) {
    liked = localStorage.getItem('lineup-liked').split(',');
    
    function likeItem(id, el) {
        el.classList.toggle('liked')
        liked.push(id);
        localStorage.setItem('lineup-liked', liked);
    }
    
    console.log('local: ' + liked);
    
    liked.forEach(item => {
        // console.log('item: ' + item)
        let elId = document.getElementById(item);
        // console.log(elId)
        elId.classList.toggle('liked');
    });
}




