// function apiYandexMap() {
	// initMap();
// }

// export default apiYandexMap

const LOCATION = {center: [30.338928,59.943543], zoom: 16};
// [30.338928,59.943543]
const POINTS = [
  // {coordinates: [30.338928,59.943543]},
  // {
  //   coordinates: [30.6, 59.847],
  //   title: 'Diagram',
  //   color: '#0E4779',
  //   draggable: true,
  //   colors: [
  //     {percentage: 30, color: '#0E4779'},
  //     {percentage: 20, color: '#1E98FF'},
  //     {percentage: 40, color: '#82CDFF'},
  //     {percentage: 10, color: '#ff9f82'}
  //   ],
  //   element: diagram
  // },
  // {
  //   coordinates: [30.338928,59.943543],
  //   color: '#0095b6',
  //   title: 'color <strong>bondi beach water<strong>',
  //   draggable: true
  // },
  // {
  //   coordinates: [30.338928,59.943543],
  //   color: '#735184',
  //   title: '<strong>Silver crimson<strong> color',
  //   draggable: true
  // },
  // {
  //   coordinates: [30.338928,59.943543],
  //   color: '#3caa3c',
  //   title: 'love toad color',
  //   draggable: true,
  //   element: circle
  // },
  // {
  //   coordinates: [30.338928,59.943543],
  //   color: 'yellow',
  //   title: 'color <strong>sun<strong>',
  //   draggable: true,
  //   onClick: () => alert('click')
  // },
  // {
  //   coordinates: [30.338928,59.943543],
  //   title: 'color <strong>red<strong>',
  //   size: '60px',
  //   icon: 'url(./../../../img/icon/map-black.svg)',
  //   draggable: true,
  //   element: icon,
  //   onDoubleClick: () => alert('Double click')
  // },
  // {
  //   coordinates: [30.338928,59.943543],
  //   title: 'the color of <strong>Pacific Ocean<strong>',
  //   color: '#3b5998',
  //   draggable: true,
  //   mapFollowsOnDrag: true
  // },
  // {
  //   coordinates: [30.338928,59.943543],
  //   color: '#477510',
  //   title: 'nose color Donatello',
  //   subtitle: 'Very long but incredibly interesting text',
  //   draggable: true
  // },
  // {
  //   coordinates: [30.338928,59.943543],
  //   color: '#D4C17F',
  //   title: 'this',
  //   subtitle: 'Very long but <br>incredibly interesting text',
  //   draggable: true,
  // },
  {
    coordinates: [30.338928,59.943543],
    title: 'blue color',
    icon: 'url(./../../../img/icon/map-black.svg)',
    // color: '#51aabd',
    radius: '40px',
    draggable: true,
    element: circle,
    onFastClick: () => alert('Fast click')
  }
];

function diagram(props) {
  const div = document.createElement('div');

  const diagram = document.createElement('div');

  diagram.className = 'pie-marker';
  diagram.style.color = props.color;

  const gradient = [];
  let previous = 0;
  for (let i = 0; i < props.colors.length; i += 1) {
    const p = props.colors[i];
    const deg = (360 / 100) * p.percentage;
    gradient.push(`${p.color} ${previous}deg ${previous + deg}deg`);
    previous = previous + deg;
  }

  diagram.style.background = 'conic-gradient(' + gradient.join(', ') + ')';

  const title = document.createElement('div');
  title.innerHTML = props.title;
  title.className = 'pie-marker-title';

  div.appendChild(diagram);
  div.appendChild(title);

  return div;
}

function circle(props) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.color = props.color;
  props.radius && circle.style.setProperty('--radius', props.radius);
  props.icon && circle.style.setProperty('--icon', props.icon);
  circle.title = props.title;
  return circle;
}

function icon(props) {
  const circle = document.createElement('div');
  circle.classList.add('icon');
  circle.style.color = props.color;
  circle.style.backgroundImage = `url(${props.icon})`;
  circle.style.setProperty('--size', props.size);

  if (props.title) {
    const title = document.createElement('div');
    title.innerHTML = props.title;
    title.className = 'icon-title';
    circle.appendChild(title);
  }

  return circle;
}
