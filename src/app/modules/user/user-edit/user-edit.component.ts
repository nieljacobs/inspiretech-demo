import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CalendarValue, ECalendarValue, IDatePickerConfig } from 'ng2-date-picker';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  isLoading: boolean = false;
  errorMessage: string = '';
  user: User;
  form: FormGroup;

  dobRequired: boolean = true;
  dobMin: string = '10-06-1980';
  dobMax: string = '10-12-1990';

  dateConfig: IDatePickerConfig = {
    format: 'DD-MM-YYYY',
    showTwentyFourHours: true,
    firstDayOfWeek: 'mo',
    returnedValueType: ECalendarValue.String,
    disableKeypress: true
  };

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        let userId = +(params['id']);
        this.getUser(userId);
      }
    )
  }

  onDobChange(value: CalendarValue): void {

    if(!value) return;

    console.log(value);
  }

  getUser(id: number): void {

    this.errorMessage = '';

    this.userService.getUsers().subscribe({
      next: (users: User[]) => {

        this.user = users.find(u => u.id === id);
        this.isLoading = false;

        if(!this.user) {
          this.errorMessage = `User with id: ${id} not found.`;
          return;
        }

        this.createForm();

      },
      error: err => {
        this.errorMessage = err;
        this.isLoading = false;
      }
    })
  }

  createForm(): void {

    this.form = this.fb.group({
      name: [ this.user.name, [Validators.required]],
      dob: [ '28-02-2022', Validators.required ],
      username: [this.user.username, Validators.required],
      email: [this.user.email, [Validators.email, Validators.required]],
      phone: [this.user.phone, [Validators.required]],
      website: [this.user.website],

      addressSuite: [this.user.address.suite, [Validators.required]],
      addressStreet: [this.user.address.street, [Validators.required]],
      addressCity: [this.user.address.city, [Validators.required]],
      addressZipCode: [this.user.address.zipcode, [Validators.required]],

      addressGeoLat: [this.user.address.geo.lat],
      addressGeoLon: [this.user.address.geo.lng],

      companyName: [this.user.address.geo.lng],
      companyCatchPhrase: [this.user.address.geo.lng],
      companyBs: [this.user.address.geo.lng]

    });
  }

  saveChanges(): void {

    //usually I would do a validation check here but seeing as it's
    //not part of the spec I won't implement it.

    console.log('VALID:', this.form.valid);

    let dob = this.form.get('dob').value;
    console.log('dob: ', dob);

    console.log(this.form);
    this.updateUser();
    //console.log(this.user);
    //Submit to service

  }

  updateUser(): void {

    this.user.name = this.form.get('name').value;
    this.user.email = this.form.get('email').value;

    //etc
  }

}
