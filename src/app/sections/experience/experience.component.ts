import { Component } from '@angular/core';

interface Experiencia {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  // TODO: completa o corrige tu experiencia real
  experiencia: Experiencia[] = [
    {
      cargo: 'Desarrollador Front End',
      empresa: 'Vapp Chile Spa',
      periodo: 'Enero/2025 - Abril/2026',
      descripcion:
        'Desarrollo de aplicaciones web y APIs, colaborando en el diseño de interfaces y la integración de servicios backend.',
    },
  ];
}
