/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '../../portfolio/img/hello_bordeaux_home.png',
		title: 'Hello Bordeaux',
		skills: ['php', 'Scss', 'JavaScript'],
		descripcion:
			'Projet de fin de formation DWWM | \nHello Bordeaux est un site destiné aux personnes nouvellement installées à Bordeaux qui cherchent à faire des activités dans un cadre accueillant et sécurisé ! Les utilisateurs peuvent se créer un compte pour s\'inscrire aux sorties proposées par les administrateurs. \nLe site est toujours en cours d\'amélioration.',
		demoURL: 'https://vimeo.com/1057568258/ec9ea49fd7',
		repoURL: 'https://github.com/sophie-rud/Projet-dwwm-Hello-Bordeaux',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '../../portfolio/img/expoArt_home.png',
		// imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
		title: 'ExpoArt [en cours]',
		skills: ['php', 'CSS', 'JavaScript'],
		descripcion:
			"Projet conceptuel en groupe [En cours] \nExpoArt est un projet réalisé en groupe, ayant pour but de mettre en contact des artistes et des exposants. \nL'objectif de ce prototype est de manipuler les langages appris en formation, de découvrir et de mettre en place des fonctionnalités variées et de faire l'expérience d'un projet web réalisé avec d'autres développeurs.",
		demoURL: null,
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '../../portfolio/img/one-piece.jpg',
		title: 'One Piece',
		skills: ['Html', 'CSS'],
		descripcion:
			"Intégration d'une page web statique en HTML et CSS, réalisée lors de ma formation DMMW. Mise en page responsive sur l'univers One Piece.",
		demoURL: 'https://sophie-rud.github.io/One-Piece-Static-Page/',
		repoURL: 'https://github.com/sophie-rud/One-Piece-Static-Page',
		anim: 'fade-right',
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Html: 'skill-icons:html',
	Php: 'vscode-icons:file-type-php2',
	php: 'devicon:php',
	Scss: 'devicon:sass'
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
