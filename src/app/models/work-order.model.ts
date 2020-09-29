import { Deserializable } from './deserializable.model';

export class WorkOrder implements Deserializable {
  public id: string;
  public name: string;
  public description: string;
  public deadline: number;
  public workerId: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
