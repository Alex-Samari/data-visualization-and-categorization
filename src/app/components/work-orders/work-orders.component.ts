import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { WorkOrder } from 'src/app/models/work-order.model';
import { WorkOrderService } from 'src/app/services/api/work-order.service';
import { WorkerService } from 'src/app/services/api/worker.service';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss'],
})
export class WorkOrdersComponent implements OnInit, AfterViewInit {
  workOrders: WorkOrder[] = [];
  nameInput = new FormControl('');

  sortByEarliestdate$ = new BehaviorSubject<boolean>(true);
  currentSortValue = true;
  filterByNameValue = null;

  sortWorkOrdersByDeadline(array) {
    return array.sort((a, b) => {
      const x = a.deadline;
      const y = b.deadline;
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  constructor(
    private workOrderService: WorkOrderService,
    private workerService: WorkerService
  ) {}

  ngOnInit(): void {
    this.workOrderService.getWorkOrders().subscribe((workOrders) => {
      this.workOrders = this.sortWorkOrdersByDeadline(workOrders);

      workOrders.forEach((workOrder: WorkOrder) => {
        this.workerService
          .getWorkerById(workOrder.workerId)
          .subscribe((worker) => {
            workOrder.worker = worker;
          });
      });
    });
  }

  ngAfterViewInit(): void {
    this.sortByEarliestdate$.subscribe((value) => {
      if (value !== this.currentSortValue) {
        this.currentSortValue = value;
        this.workOrders.reverse();
      }
    });
  }
}
