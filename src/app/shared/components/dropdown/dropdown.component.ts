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

  @Input()
  set selected(value: IDropdownOption | string | undefined) {
    if (typeof value === 'string') {
      this._selected = this.options?.find((option) => option.name === value)!;
    } else if (value) {
      this._selected = value;
    }
  }

  get selected(): IDropdownOption {
    return this._selected;
  }

  private _selected!: IDropdownOption;

  public ngOnInit(): void {
    const defaultOption = this.options?.find((option) => option.default);

    if (!this.selected && defaultOption) {
      this.selected = defaultOption;
    }
  }

  public onOption(option: IDropdownOption) {
    this.selected = option;
    this.onSelect.emit(option);
  }
}
