import { Pipe, PipeTransform } from '@angular/core';
import { WorkOrder } from 'src/app/models/work-order.model';

@Pipe({
  name: 'filterWorkOrderByName',
})
export class FilterWorkOrderByNamePipe implements PipeTransform {
  transform(workOrders: WorkOrder[], workOrderNameFilter: string): any {
    if (!workOrders || !workOrderNameFilter) {
      return workOrders;
    }

    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return workOrders.filter((workOrder) =>
      workOrder.worker?.name
        .toLocaleLowerCase()
        .includes(workOrderNameFilter.toLocaleLowerCase())
    );
  }
}
