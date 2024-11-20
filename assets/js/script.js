
const events_api = "https://api.calendly.com/event_types";
const event_title = document.querySelector('#event-title');
const event_desc = document.querySelector('#event-desc');
const event_marker = document.querySelector('#event-marker');

const eventt = document.querySelector('.event');
const load = document.querySelector('#load');

const events_data = {
  active: true,
  organization: 'https://api.calendly.com/organizations/9ee72142-22bf-4912-b045-c2f96a5df124'
}
const token = 'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjg0MzI2MTYyLCJqdGkiOiIyYTY4ZjVjZC1jN2U1LTRlYzMtOTQ0YS1kYjQ4MmU1MTY5NzQiLCJ1c2VyX3V1aWQiOiI1YjA1NjNjOS00MjEyLTQ0N2MtYWY3MC1iOTQ3NjExNDVlNDAifQ.Az4Rmsf--sWohGvW8WkyEPTfzG1bXHyxafrXcUmfAO-Mw1CQYgwL2xjxSlMq3P0WLW53QBXdYWq7ezHsNH8hdw';
const events_url = `${events_api}?${new URLSearchParams(events_data)}`;

function fetchEvents() {
  fetch(events_url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(data => {
    
      load.classList.add('d-none');
      eventt.classList.remove('d-none');
      let events_data = data?.collection[0];
      event_title.innerHTML = events_data.name;
      event_desc.innerHTML = events_data.description_plain;

  });
}

// Calling API Directly
function Start() {
  Calendly.initPopupWidget({url: 'https://calendly.com/brs-studio/30min'});
}

function setTheme(theme) {
  document.documentElement.style.setProperty('--primary-color', theme);
  localStorage.setItem('cc-theme', theme);
}

setTheme(localStorage.getItem('cc-theme') || '#1A4B84');
fetchEvents();
eventt.onclick = Start;
