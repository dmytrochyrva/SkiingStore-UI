// Libraries Imports
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Project Imports
import { IDropdownOption } from 'src/app/core/models';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() options!: IDropdownOption[];
  @Output() onSelect = new EventEmitter();

  public selected!: IDropdownOption;

  public ngOnInit(): void {
    const defaultOption = this.options?.find((option) => option.default);

    if (defaultOption) {
      this.selected = defaultOption;
    }
  }

  public onOption(option: IDropdownOption) {
    this.selected = option;
    this.onSelect.emit(option);
  }
}
