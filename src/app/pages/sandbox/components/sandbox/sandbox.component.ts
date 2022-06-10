// Libraries Imports
import { Component } from '@angular/core';

// Project Imports
import { productMock, dropdownOptionsMock } from 'src/app/core/mocks';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent {
  public productMock = productMock;
  public dropdownOptionsMock = dropdownOptionsMock;
}
