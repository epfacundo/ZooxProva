export class Cidade {
    _id: string;
    nome: string;
    estadoId: string;
    criadoEm: string;
    alteradoEm: string;

    public constructor(init?: Partial<Cidade>) {
      Object.assign(this, init);
  }
  }
  