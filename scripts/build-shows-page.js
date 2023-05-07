let arrShows = [
    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },
    {
        date: 'Tues Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    },
    {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA'
    }
];


function displayShows(){
    let showsDisplay = document.querySelector(".shows__display");

    arrShows.forEach(element =>{
    let showsItemEl = document.createElement('div');
    showsItemEl.classList.add('shows__item');

    let showsHeadingEl = document.createElement('div');
    showsHeadingEl.classList.add('shows__heading');
    showsHeadingEl.innerHTML = "DATE";
    showsItemEl.appendChild(showsHeadingEl);

    let showsInfoEl = document.createElement('div');
    showsInfoEl.classList.add('shows__info--bold');
    showsInfoEl.innerText = element.date;
    showsItemEl.appendChild(showsInfoEl);

    showsHeadingEl = document.createElement('div');
    showsHeadingEl.classList.add('shows__heading');
    showsHeadingEl.innerHTML = "VENUE";
    showsItemEl.appendChild(showsHeadingEl);

    showsInfoEl = document.createElement('div');
    showsInfoEl.classList.add('shows__info');
    showsInfoEl.innerText = element.venue;
    showsItemEl.appendChild(showsInfoEl);

    showsHeadingEl = document.createElement('div');
    showsHeadingEl.classList.add('shows__heading');
    showsHeadingEl.innerHTML = "LOCATION";
    showsItemEl.appendChild(showsHeadingEl);

    showsInfoEl = document.createElement('div');
    showsInfoEl.classList.add('shows__info');
    showsInfoEl.innerText = element.location;
    showsItemEl.appendChild(showsInfoEl);
    
    let showsButtonEl = document.createElement('button');
    showsButtonEl.classList.add('shows__button');
    showsButtonEl.innerText = "BUY TICKETS";
    showsItemEl.appendChild(showsButtonEl);

    showsDisplay.appendChild(showsItemEl);
    });
}

displayShows();