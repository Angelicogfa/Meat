import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
 
    canDeactivate(component: OrderComponent, 
        currentRoute: ActivatedRouteSnapshot,
         currentState: RouterStateSnapshot, 
         nextState?: RouterStateSnapshot): boolean {
            if(!component.IsOrderCompleted()){
                return window.confirm('Deseja deistir da compra');
            }
            else{
                return true;
            }
    }
}