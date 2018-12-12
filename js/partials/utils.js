export let utils = {
  delegation: function (eventTarget, className, parent) {
    while (eventTarget != parent) {
      if (eventTarget.classList.contains(className)) {
        return eventTarget;
      }
      eventTarget = eventTarget.parentNode;
    }
  }
}
