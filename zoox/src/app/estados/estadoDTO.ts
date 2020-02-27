export class EstadoDTO {
    _id: string;
    nome: string;
    abreviacao: string;
    criadoEm: Date;
    alteradoEm: Date;

    public constructor(init?: Partial<EstadoDTO>) {
          Object.assign(this, init);
      }
      
    }