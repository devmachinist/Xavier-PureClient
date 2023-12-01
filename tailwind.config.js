
module.exports = {
    content: ["./Pages/*.{xavier,js,cs}", "./Pages/**/*.{xavier,js,cs}", "./Live/js/*.js","./Pages/Shared/*.{html,js,xavier,cs}","./Live/*.html",
'./node_modules/tw-elements/dist/js/**/*.js','c:/x/source/repos/Xavier.React/ClientApp/src/components/*.js','./Xavier.Templates/Templates/**/*.{xavier,js,cs}'],// or 'media' or 'class'
    theme: {
            fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
              keyframes: {
		      wiggle:{
			      '0%, 100%' : {transform: 'rotate(-3deg)'},
	                       '50%' : { transform: 'rotate(3deg)'}
		      },
		      fadein:{
		      		'0%':{opacity: '0%'},
			      '100%':{opacity: '100%'}

		      }
	      },
	      animation: {
		      wiggle: 'wiggle 1s ease-in-out forwards',
		      fadein: 'fadein 1s ease-in-out forwards',
		      fadeout: 'fadein 1s ease-in-out reverse'
	      },
		transitionProperty: {
	            'height': 'height'
	},
	

    colors: {
            white: '#fff',
                sky: '#19c939',
        pencil: {
            50: "#ffff64",
            100: "#ffff5a",
            200: "#fff750",
            300: "#ffed46",
            400: "#ffe33c",
            500: "#ffd932",
            600: "#f5cf28",
            700: "#ebc51e",
            800: "#e1bb14",
            900: "#d7b10a"
        },
            yellow: {
                50: '#fffff2',
                100: '#ffffe6',
                200: '#feffbf',
                300: '#fdff99',
                400: '#fcff4d',
                500: '#fbff00',
                600: '#e2e600',
                700: '#bcbf00',
                800: '#979900',
                900: '#7b7d00'
            },
            emerald: {
                50: '#f4fdf9',
                100: '#e8faf3',
                200: '#c6f3e1',
                300: '#a3eccf',
                400: '#5fdeab',
                500: '#1ad087',
                600: '#17bb7a',
                700: '#149c65',
                800: '#107d51',
                900: '#0d6642'
                },
            lime: {
                50: '#fbfff2',
                100: '#f7ffe6',
                200: '#ecffbf',
                300: '#e1ff99',
                400: '#caff4d',
                500: '#b3ff00',
                600: '#a1e600',
                700: '#86bf00',
                800: '#6b9900',
                900: '#587d00'
                },
            brandgray: {
                50: '#f6f6f7',
                100: '#ececee',
                200: '#d0d0d5',
                300: '#b4b4bb',
                400: '#7c7c88',
                500: '#444455',
                600: '#3d3d4d',
                700: '#333340',
                800: '#292933',
                900: '#21212a'
                },
            bonjour: {
                50: '#fefefe',
                100: '#fcfcfd',
                200: '#f8f8f9',
                300: '#f4f4f6',
                400: '#ecebef',
                500: '#e4e3e8',
                600: '#cdccd1',
                700: '#abaaae',
                800: '#89888b',
                900: '#706f72'
            },
            blue: {
                50: '#f6f2ff',
                100: '#ece6ff',
                200: '#d0bfff',
                300: '#b499ff',
                400: '#7c4dff',
                500: '#4400ff',
                600: '#3d00e6',
                700: '#3300bf',
                800: '#290099',
                900: '#21007d'
            },
            aquamarine: {
                50: '#f9fffc',
                100: '#f3fffa',
                200: '#e1fff2',
                300: '#cfffeb',
                400: '#acffdb',
                500: '#88ffcc',
                600: '#7ae6b8',
                700: '#66bf99',
                800: '#52997a',
                900: '#437d64'
            },
            azure: {
                50: '#f7f9ff',
                100: '#eef3ff',
                200: '#d5e1ff',
                300: '#bbcfff',
                400: '#88acff',
                500: '#5588ff',
                600: '#4d7ae6',
                700: '#4066bf',
                800: '#335299',
                900: '#2a437d'
            },
            pictonblue: {
                50: '#f3fcff',
                100: '#e7faff',
                200: '#c4f2ff',
                300: '#a0ebff',
                400: '#58dbff',
                500: '#11ccff',
                600: '#0fb8e6',
                700: '#0d99bf',
                800: '#0a7a99',
                900: '#08647d'
            },
            redribbon: {
                50: '#fff4f6',
                100: '#ffe9ec',
                200: '#ffc8d0',
                300: '#ffa7b4',
                400: '#ff647c',
                500: '#ff2244',
                600: '#e61f3d',
                700: '#bf1a33',
                800: '#991429',
                900: '#7d1121'
            },
            vermilion: {
                50: '#fff6f2',
                100: '#ffece6',
                200: '#ffd0bf',
                300: '#ffb499',
                400: '#ff7c4d',
                500: '#ff4400',
                600: '#e63d00',
                700: '#bf3300',
                800: '#992900',
                900: '#7d2100'
            },


        },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    variants: {

        extend: {
            height: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
            width: ['responsive', 'hover', 'focus', 'group-hover'],
            ringWidth: ['focus', 'hover', 'active'],
            ringColor: ['focus', 'hover', 'active'],
            backgroundColor: ["active"],
            display: ["hover", "focus", "active", "group-focus", "group-hover"],
            animation: ["responsive", "hover", "focus"]
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}