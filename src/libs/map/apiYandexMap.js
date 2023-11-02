// function apiYandexMap() {

const LOCATION = { center: [30.338928, 59.943543], zoom: 16 }
const point = {
  coordinates: [30.338928, 59.943543],
  color: '#D4C17F',
  size: '42px',
  icon: 'url(./img/icon/map.svg)',
  title: `<a class="map-logo">
						<img src="./img/icon/logo-black.svg" alt="logo">
					</a><br><br>
					<a href="tel:88121234567" class="header__contact">8 (812) 123-45-67</a>
					<p>Наб. реки Фонтанки 10-15</p>
					<div class='close'>✕</div>`,
  element: icon,
  onClick: () => titleShow(),
}

function icon(props) {
  const circle = document.createElement('div')
  circle.classList.add('icon')
  circle.style.color = props.color
  circle.style.backgroundImage = `url(${props.icon})`
  circle.style.setProperty('--size', props.size)

  if (props.title) {
    const title = document.createElement('div')
    title.innerHTML = props.title
    title.className = 'icon-title'
    circle.appendChild(title)
  }

  return circle
}

function titleShow (props) {
	const title = document.querySelector('.icon-title')
	title.classList.toggle('icon-title--active')
}

window.map = null

main()
async function main() {
  await ymaps3.ready
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapMarker,
    YMapControls,
    YMapDefaultFeaturesLayer,
  } = ymaps3

  const { YMapZoomControl } = await ymaps3.import(
    '@yandex/ymaps3-controls@0.0.1'
  )
  const { YMapDefaultMarker } = await ymaps3.import(
    '@yandex/ymaps3-markers@0.0.1'
  )

  map = new YMap(document.getElementById('map'), { location: LOCATION })

  map.addChild((scheme = new YMapDefaultSchemeLayer()))
  map.addChild(
    new YMapControls({ position: 'right' }).addChild(new YMapZoomControl({}))
  )
  map.addChild(new YMapDefaultFeaturesLayer({ id: 'features' }))

  if (point.element) {
    map.addChild(new YMapMarker(point, point.element(point)))
  } else {
    map.addChild(new YMapDefaultMarker(point))
  }
}

// }

// export default apiYandexMap
