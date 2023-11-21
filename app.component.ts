import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AggregateRowModel,
  Column,
  GridComponent,
  ResizeService,
} from '@syncfusion/ej2-angular-grids';

const mockDataSourceA: Object[] = [
  {
    locationClientId: 2085,
    locationName: 'Walthamstow',
    date: '02/11/2023',
    orderPlaced: '16:49',
    ticketNumber: 3,
    customerDetails: 'TA',
    orderTaker: 'Scott',
    reason: 'stadf',
    discountPerc: '16.67%',
    preDiscount: 2.7,
    discount: 0.45,
    postDiscount: 2.25,
  },
  {
    locationClientId: 2544,
    locationName: 'East Dulwich',
    date: '02/11/2023',
    orderPlaced: '17:27',
    ticketNumber: 4,
    customerDetails: 'THE CUSTOMER',
    orderTaker: 'Mattia',
    reason: 'NHS 25',
    discountPerc: '0.46%',
    preDiscount: 162,
    discount: 0.75,
    postDiscount: 161.25,
  },
  {
    locationClientId: 2633,
    locationName: 'Crofton Park',
    date: '02/11/2023',
    orderPlaced: '18:23',
    ticketNumber: 13,
    customerDetails: 'THE CUSTOMER',
    orderTaker: 'Greg',
    reason: 'staff',
    discountPerc: '5.26%',
    preDiscount: 9.5,
    discount: 0.5,
    postDiscount: 9,
  },
];

const mockDataSourceB: Object[] = [
  {
    locationClientId: 2544,
    locationName: 'East Dulwich',
    date: '02/11/2023',
    orderPlaced: '18:40',
    ticketNumber: 20,
    customerDetails: 'THE CUSTOMER',
    orderTaker: 'Mattia',
    reason: 'PUB 50',
    discountPerc: '4.35%',
    preDiscount: 11.5,
    discount: 0.5,
    postDiscount: 11,
  },
  {
    locationClientId: 2085,
    locationName: 'Walthamstow',
    date: '02/11/2023',
    orderPlaced: '18:06',
    ticketNumber: 20,
    customerDetails: 'THE CUSTOMER',
    orderTaker: 'Scott',
    reason: 'Other',
    discountPerc: '0.37%',
    preDiscount: 244,
    discount: 0.9,
    postDiscount: 243.1,
  },
  {
    locationClientId: 1954,
    locationName: 'Blackstock Road',
    date: '02/11/2023',
    orderPlaced: '18:08',
    ticketNumber: 21,
    customerDetails: 'THE CUSTOMER',
    orderTaker: 'Marco C',
    discountPerc: '35.50%',
    preDiscount: 42.25,
    discount: 15,
    postDiscount: 27.25,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ResizeService],
})
export class AppComponent {
  @ViewChild('grid') public grid: GridComponent;
  public data: Object[] = [];
  public columnList: Column[] = this.getReportColumns() as Column[];
  public aggregateColumns: AggregateRowModel[] = this.getAggregateColumns();

  private _toggle: boolean;

  ngOnInit(): void {
    this.setData();
  }

  dataBound(args) {
    this.grid.autoFitColumns(); // autofit all the columns
  }

  public setData(): void {
    this._toggle = !this._toggle;
    this.data = this._toggle ? mockDataSourceA : mockDataSourceB;
  }

  /**
   * Gets the list of columns for this report.
   */
  private getReportColumns(): Partial<Column>[] {
    return [
      {
        field: 'locationClientId',
        headerText: 'Location ID',
        textAlign: 'Left',
        width: 125,
      },
      {
        field: 'locationName',
        format: 'text',
        headerText: 'Location Name',
        textAlign: 'Left',
        width: 200,
      },
      {
        field: 'date',
        format: 'text',
        headerText: 'Date',
        textAlign: 'Left',
        width: 110,
      },
      {
        field: 'orderPlaced',
        format: 'text',
        headerText: 'Order Placed',
        textAlign: 'Left',
        width: 110,
      },
      {
        field: 'ticketNumber',
        headerText: 'Ticket No.',
        textAlign: 'Left',
        width: 110,
      },
      {
        field: 'customerDetails',
        format: 'text',
        headerText: 'Customer Details',
        textAlign: 'Left',
        width: 200,
      },
      {
        field: 'orderTaker',
        format: 'text',
        headerText: 'Order Taker',
        textAlign: 'Left',
        width: 125,
      },
      {
        field: 'reason',
        format: 'text',
        headerText: 'Reason',
        textAlign: 'Left',
        width: 125,
      },
      {
        field: 'discountPerc',
        format: 'P2',
        headerText: 'Discount %',
        textAlign: 'Right',
        width: 110,
      },
      {
        field: 'preDiscount',
        format: 'N2',
        headerText: 'Pre-Discount',
        textAlign: 'Right',
        width: 110,
      },
      {
        field: 'discount',
        format: 'N2',
        headerText: 'Discount',
        textAlign: 'Right',
        width: 110,
      },
      {
        field: 'postDiscount',
        format: 'N2',
        headerText: 'Post-Discount',
        textAlign: 'Right',
        width: 110,
      },
    ];
  }

  /**
   * returns Aggregate Columns.
   */
  private getAggregateColumns(): AggregateRowModel[] {
    return [
      {
        columns: [
          {
            type: 'Sum',
            field: 'preDiscount',
            format: 'N2',
            footerTemplate: 'Total: ${Sum}',
          },
          {
            type: 'Sum',
            field: 'discount',
            format: 'N2',
            footerTemplate: 'Total: ${Sum}',
          },
          {
            type: 'Sum',
            field: 'postDiscount',
            format: 'N2',
            footerTemplate: 'Total: ${Sum}',
          },
        ],
      },
    ];
  }

  actionComplete(args) {}
  tooltip(args) {}
  onClickName(args) {}
  onClickCustomerNo(args) {}
}
