import { Deserializable } from './deserializable.model';
import { CompanyWorker } from './worker.model';

export class WorkOrder implements Deserializable {
  public id: string;
  public name: string;
  public description: string;
  public deadline: number;
  public workerId: CompanyWorker['id'];

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
