import IState from './IState.js';
export default class OutOfServiceState extends IState 
{
  enter(context, payload) 
  {
    context.meta = { reason: payload?.reason || 'maintenance' };
  }
  exit(spot) 
  {
  console.log('Saliendo de OutOfService');
  }
  repair(context) 
  {
    context.changeState(context.states.available);
  }
  toString() 
  { 
    return 'OutOfService'; 
  }
  
}
