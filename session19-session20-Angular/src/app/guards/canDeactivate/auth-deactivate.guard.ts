import { CanDeactivateFn } from '@angular/router';

export const authDeactivateGuard: CanDeactivateFn<unknown> = (component : any, currentRoute, currentState, nextState) => {
  console.log(component)
  console.log(currentRoute)

  if(component?.loginForm?.dirty && component.isSubmitted == false){
    const cnfirm = confirm('are you sure you want leave before saving the changes ?')
    if(cnfirm){
      return true
    }
    else return false
  }


  return true;
};
