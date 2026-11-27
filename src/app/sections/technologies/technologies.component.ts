import { Component } from '@angular/core';

interface IconInfo {
  /** Texto visible en el tooltip y como texto alternativo de la imagen. */
  nombre: string;
  /** Ruta del SVG, relativa a `public/`. */
  archivo: string;
}

/**
 * Iconos de la sección: logos a color de cada marca, tomados de la paleta
 * **Devicon** (dependencia `devicon`), variante `-original` de cada icono.
 *
 * Para actualizarlos, copiar el SVG desde el paquete a `public/icons/`:
 * `node_modules/devicon/icons/<n>/<n>-original.svg`  →  `public/icons/<n>.svg`
 *
 * Notas sobre los assets:
 * - `mysql.svg` lleva el fill recoloreado a `#4479A1` (azul oficial de MySQL)
 *   porque el `#00618A` original no llega a 3:1 de contraste sobre las
 *   tarjetas oscuras.
 * - `springboot.svg` viene de **simple-icons** (`node_modules/simple-icons/
 *   icons/springboot.svg`), no de Devicon, porque Devicon solo publica
 *   `spring` (la hoja del framework). Se le inyecta `fill="#6DB33F"`, el
 *   verde oficial de Spring.
 */
@Component({
  selector: 'app-technologies',
  standalone: true,
  templateUrl: './technologies.component.html',
})
export class TechnologiesComponent {
  tecnologiasFrontend: IconInfo[] = [
    { nombre: 'Angular', archivo: 'icons/angular.svg' },
    { nombre: 'Vue.js', archivo: 'icons/vuejs.svg' },
    { nombre: 'TypeScript', archivo: 'icons/typescript.svg' },
    { nombre: 'Tailwind CSS', archivo: 'icons/tailwindcss.svg' },
    { nombre: 'HTML5', archivo: 'icons/html5.svg' },
    { nombre: 'CSS', archivo: 'icons/css3.svg' },
    { nombre: 'JavaScript', archivo: 'icons/javascript.svg' },
  ];

  tecnologiasBackend: IconInfo[] = [
    { nombre: 'Node.js', archivo: 'icons/nodejs.svg' },
    { nombre: 'Spring Boot', archivo: 'icons/springboot.svg' },
    { nombre: 'Python', archivo: 'icons/python.svg' },
    { nombre: 'MySQL', archivo: 'icons/mysql.svg' },
  ];

  tecnologiasHerramientas: IconInfo[] = [
    { nombre: 'Git', archivo: 'icons/git.svg' },
    { nombre: 'Jira', archivo: 'icons/jira.svg' },
  ];
}
