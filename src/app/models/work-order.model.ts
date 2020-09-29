import { Deserializable } from './deserializable.model';
import { CompanyWorker } from './worker.model';

export class WorkOrder implements Deserializable {
  public id: string;
  public name: string;
  public description: string;
  public deadline: number; // epoch timestamp
  public workerId: CompanyWorker['id'];
  public worker?: CompanyWorker;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
