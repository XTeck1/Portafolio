import { Component } from '@angular/core';

interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  enlace: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  // TODO: reemplaza con tus proyectos reales (título, descripción, tecnologías y enlace)
  proyectos: Proyecto[] = [
    {
      titulo: 'Proyecto 1',
      descripcion: 'Descripción breve del proyecto.',
      tecnologias: ['Angular', 'TypeScript', 'Node.js'],
      enlace: '#',
    },
  ];
}
