import ReactDOM from 'react-dom';

export function setPageTransitionFadeOutToHome(context) {
  const elem = ReactDOM.findDOMNode(context);

  window.requestAnimationFrame(function() {
    elem.style.transition = "all 1000ms";
    elem.style.opacity = 0;
  });
  setTimeout(() => {
    window.location = '/';
    context.props.setSelectedCard(null);
    context.props.setOverlayContent(null);
  }, 1000);
}
