import { Deserializable } from './deserializable.model';

export class CompanyWorker implements Deserializable {
  public id: number;
  public name: string;
  public email: string;
  public companyName: string;
  public image: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
