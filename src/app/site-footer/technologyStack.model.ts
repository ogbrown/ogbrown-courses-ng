export class TechnologyStack {
  public stackName: string;
  public baseTechnology: string;
  public serverTechnology: string;
  public type: string;

  constructor(stackName: string, baseTechnology: string, serverTechnology: string, type: string) {
    this.stackName = stackName;
    this.baseTechnology = baseTechnology;
    this.serverTechnology = serverTechnology;
    this.type = type;

  }
}
