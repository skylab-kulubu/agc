"use strict";

/*if (window.location.protocol != "https:") {
  location.href = location.href.replace("http://", "https://");
}*/

/*const overviewSection = document.querySelector(".overview-section");
const overviewTitle = document.querySelector(".overview-section__title");*/
const decriptionRight = document.querySelectorAll(".description--right");
const decriptionLeft = document.querySelectorAll(".description--left");
const eventSection = document.querySelector(".event-section");
const eventDays = document.querySelector(".event__days");
const eventActivities = document.querySelectorAll(".event-activities");
const container = document.querySelector(".eacikkaynak-section-container");
const informationContainer = document.querySelector(
  ".information-section__container"
);
/*const descriptionGift = document.querySelector(".description--gift");*/

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const revealTitle = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("title--hidden");
  observer.unobserve(entry.target);
};

const revealRight = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("right--hidden");
  observer.unobserve(entry.target);
};

const revealLeft = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("left--hidden");
  observer.unobserve(entry.target);
};

const activeDay = function (id) {
  document
    .querySelectorAll(".event__day")
    .forEach((day) => day.classList.remove("event__day--active"));
  document
    .querySelector(`.event__day[data-id = "${id}"]`)
    .classList.add("event__day--active");
};

const activeEvents = function (tab) {
  eventActivities.forEach((event) =>
    event.classList.remove("active--activity")
  );
  eventActivities.forEach((event) => event.classList.add("hidden--activity"));
  document
    .querySelector(`.event-activities[data-tab = "${tab}"]`)
    .classList.add("active--activity");
};

const revealContainer = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden--container");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

const contObserver = new IntersectionObserver(revealContainer, {
  root: null,
  threshold: 0.15,
});

const titleObserver = new IntersectionObserver(revealTitle, {
  root: null,
  threshold: 0.15,
});

const rightObserver = new IntersectionObserver(revealRight, {
  root: null,
  threshold: 0.15,
});

const leftObserver = new IntersectionObserver(revealLeft, {
  root: null,
  threshold: 0.15,
});

decriptionRight.forEach((right) => {
  rightObserver.observe(right);
});

decriptionLeft.forEach((left) => {
  leftObserver.observe(left);
});

eventDays.addEventListener("click", function (e) {
  //if (e.target.classList.contains("event__day")) {
  //  const { id } = e.target.dataset;
  //  activeDay(id);
  //  activeEvents(id);
  //}

  const clicked = e.target.closest(".event__day");
  if (!clicked) return;
  const { id } = clicked.dataset;
  activeDay(id);
  activeEvents(id);
});

sectionObserver.observe(eventSection);
contObserver.observe(container);
contObserver.observe(informationContainer);
/*titleObserver.observe(overviewTitle);*/
/*titleObserver.observe(descriptionGift);*/
