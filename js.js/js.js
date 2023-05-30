const app = new Vue ({
    el: contenedorCards,
    data: {
        cardHover: false,
        imagenes: [
            {href: "https://agusvlopez.github.io/Blur---maquillajes/" , src: "img/proyectos/blur_maquillajes.png" , titulo: "Sitio Web de Maquillajes", sub: "Html Css Bootstrap Responsive", enable: true},
            {href: "https://agusvlopez.github.io/nintendo/" , src: "img/proyectos/nintendo.png" , titulo: "One Page de Nintendo", sub: "Html Css Responsive", enable: true},
            {href: "https://agustina783405.invisionapp.com/console/share/Q4B5UNHY9KW/977181096" , src: "img/proyectos/yoga.png" , titulo: "Prototipo Ecommerce de cursos de Yoga", sub: "Prototipo Wireframing Adobe Illustrator UX/UI", enable: true},
            {href: "https://agusvlopez.github.io/disk-list/" , src: "img/proyectos/disk-list.png" , titulo: "Lista de discos con Js", sub: "Javascript Html Css", enable: true},
            {href: "https://api-weather-theta.vercel.app/" , src: "img/proyectos/api.jpg" , titulo: "Consulta del clima con API", sub: "Javascript Html Css API", enable: true},
        ],
    },
    
})