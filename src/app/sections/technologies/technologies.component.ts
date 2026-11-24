import { Component } from '@angular/core';
import { SafeHtmlPipe } from '../../safe-html.pipe';
import {
  siAngular,
  siReact,
  siVuedotjs,
  siTypescript,
  siTailwindcss,
  siHtml5,
  siCss,
  siJavascript,
  siNodedotjs,
  siPython,
  siMysql,
  siGit,
} from 'simple-icons';

interface IconInfo {
  nombre: string;
  svg: string;
  color: string;
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './technologies.component.html',
})
export class TechnologiesComponent {
  tecnologiasFrontend: IconInfo[] = [
    { nombre: siAngular.title, svg: siAngular.svg, color: siAngular.hex },
    { nombre: siReact.title, svg: siReact.svg, color: siReact.hex },
    { nombre: siVuedotjs.title, svg: siVuedotjs.svg, color: siVuedotjs.hex },
    { nombre: siTypescript.title, svg: siTypescript.svg, color: siTypescript.hex },
    { nombre: siTailwindcss.title, svg: siTailwindcss.svg, color: siTailwindcss.hex },
    { nombre: siHtml5.title, svg: siHtml5.svg, color: siHtml5.hex },
    { nombre: siCss.title, svg: siCss.svg, color: siCss.hex },
    { nombre: siJavascript.title, svg: siJavascript.svg, color: siJavascript.hex },
  ];

  tecnologiasBackend: IconInfo[] = [
    { nombre: siNodedotjs.title, svg: siNodedotjs.svg, color: siNodedotjs.hex },
    { nombre: siPython.title, svg: siPython.svg, color: siPython.hex },
    { nombre: siMysql.title, svg: siMysql.svg, color: siMysql.hex },
    { nombre: siGit.title, svg: siGit.svg, color: siGit.hex },
  ];
}
