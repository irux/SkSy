import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class Globals{

    private globalSuffix : string = "/apiv1"

    public todoEndpoint : string = this.globalSuffix + "/todo"

}