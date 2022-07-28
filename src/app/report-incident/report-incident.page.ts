/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-report-incident',
  templateUrl: './report-incident.page.html',
  styleUrls: ['./report-incident.page.scss'],
})
export class ReportIncidentPage implements OnInit {

  hideForSV = 'false';

  fileToUpload: File = null;
  fileToUpload1: File = null;
  fileToUpload2: File = null;
  filesForm;

  cordinates: any;

  hideHeading = 'true';

  // eslint-disable-next-line @typescript-eslint/naming-convention
  Forced_Displacement = 'Forced displacement';
  denied = 'false';
  forced = 'false';
  exposure = 'false';
  loss = 'false';
  cultural = 'false';
  torture = 'false';
  freedom = 'false';
  water = 'false';
  labour = 'false';
  child = 'false';
  violence = 'false';
  smuggling = 'false';
  murder = 'false';
  backButtton = 'flase';

  otherOption1 = 'false';
  otherKind1 = 'false';
  murderOption1 = 'false';
  locationName1 = 'false';
  locationName2 = 'false';

  contactInfo = 'false';

  whatTranspired = 'false';
  onHome = 'false';

  gotoLocation1 = 'false';
  backtoLocation1 = 'false';
  backtoHome = 'false';
  gotowhatTranspired = 'false';
  backtowhatTranspired = 'false';
  contactInfoBtn = 'false';

  victimDiv = 'false';
  pepDiv = 'false';
  locationDiv = 'false';

  gotoVictimBtn = 'false';
  backtoVicBtn = 'false';
  gotoPepBtn = 'false';
  backtoPerp = 'false';

  imagesArray = [];
  audiosArray = [];
  videosArray = [];

  involves_company = 'false';

  backtoHomeFun() {
    this.backtoHome = 'false';
    this.gotoLocation1 = 'false';
    this.locationName1 = 'false';
    this.onHome = 'false';
    this.gotoVictimBtn = 'false';
    this.locationDiv = 'false';
    this.hideHeading = 'true';
  }

  gotoLocation1Fun() {
    this.gotoLocation1 = 'true';
    this.backtoHome = 'true';
    this.locationName1 = 'false';
    this.gotoVictimBtn = 'true';
    this.onHome = 'true';
    this.locationDiv = 'true';
    this.hideHeading = 'false';
    // this.gotoLocation1 = "false";
  }

  gotoVictimFun(id) {

    if (id === 'Sexual violence') {
      this.whatTranspired = 'true';
      this.locationName1 = 'false';
      // this.backtoLocation1 = 'false';
      this.backtoHome = 'false';
      this.contactInfoBtn = 'true';
      this.gotoLocation1 = 'true';
      this.backtowhatTranspired = 'false';
      this.backtoVicBtn = 'false';
      // this.backtoPerp = 'true';
      this.backtoLocation1 = 'true';
      this.pepDiv = 'false';
      this.locationDiv = 'false';
      this.gotoVictimBtn = 'false';
      this.backtoPerp = 'false';
    } else {
      this.locationName1 = 'false';
      this.locationDiv = 'false';
      this.victimDiv = 'true';
      // this.gotoLocation1 = "false";
      this.gotoVictimBtn = 'false';
      this.gotoPepBtn = 'true';
      this.backtoHome = 'false';
      this.backtoLocation1 = 'true';
      this.gotoLocation1 = 'true';
      // this.backtoLocation1 = "false";
    }
  }

  backtoVicFun(id) {
    if (id === 'Loss of land or economic assets') {

      this.pepDiv = 'false';
      this.backtoVicBtn = 'false';
      this.backtoLocation1 = 'true';
      this.gotoVictimBtn = 'false';
      this.whatTranspired = 'false';
      this.victimDiv = 'true';
      this.gotoPepBtn = 'true';
      this.locationName1 = 'false';
      this.backtoVicBtn = 'false';
      this.contactInfoBtn = 'false';
      this.contactInfo = 'false';

    }
    else if (id === 'Desecration of cultural heritage including graves') {
      this.pepDiv = 'false';
      this.backtoVicBtn = 'false';
      this.backtoLocation1 = 'true';
      this.gotoVictimBtn = 'false';
      this.victimDiv = 'true';
      this.gotoPepBtn = 'true';
      this.locationName1 = 'false';
      this.backtoVicBtn = 'false';
    }

    else if (id === 'Torture, intimidation and harassment' || 'Restricted freedom of movement') {
      this.pepDiv = 'false';
      this.backtoVicBtn = 'false';
      this.backtoLocation1 = 'true';
      this.gotoVictimBtn = 'false';
      this.victimDiv = 'true';
      this.gotoPepBtn = 'true';
      this.locationName1 = 'false';
      this.backtoVicBtn = 'false';
    }

    else {
      this.pepDiv = 'false';
      this.backtoVicBtn = 'false';
      this.backtoLocation1 = 'true';
      this.gotoVictimBtn = 'false';
      this.victimDiv = 'false';
      this.gotoPepBtn = 'true';
      this.locationName1 = 'false';
      this.backtoVicBtn = 'false';
    }
  }

  backtoPerpFun() {
    this.contactInfoBtn = 'false';
    this.locationName1 = 'true';
    this.whatTranspired = 'false';
    this.pepDiv = 'true';
    this.backtoVicBtn = 'true';
    this.backtoPerp = 'false';
  }

  gotoPepFun(id) {
    if (id === 'Loss of land or economic assets') {
      this.contactInfo = 'false';
      this.whatTranspired = 'true';
      this.backtoLocation1 = 'false';
      this.gotoPepBtn = 'false';
      this.contactInfoBtn = 'true';
      this.backtowhatTranspired = 'false';
      this.backtoPerp = 'false';
      this.victimDiv = 'false';
      this.backtoVicBtn = 'true';

    }

    else {
      this.victimDiv = 'false';
      this.pepDiv = 'true';
      this.backtoVicBtn = 'true';
      this.backtoLocation1 = 'false';
      this.gotoPepBtn = 'false';
      this.locationName1 = 'true';
    }
  }

  gotoWhatTrans(id) {
    if (id === 'Loss of land or economic assets') {
      this.whatTranspired = 'true';
      this.locationName1 = 'false';
      this.backtoLocation1 = 'false';
      this.backtoHome = 'false';
      this.contactInfoBtn = 'true';
      this.gotoLocation1 = 'true';
      this.backtowhatTranspired = 'false';
      this.backtoVicBtn = 'true';
      this.backtoPerp = 'false';
      this.pepDiv = 'false';
      this.victimDiv = 'false';
    } else {
      this.whatTranspired = 'true';
      this.locationName1 = 'false';
      this.backtoLocation1 = 'false';
      this.backtoHome = 'false';
      this.contactInfoBtn = 'true';
      this.gotoLocation1 = 'true';
      this.backtowhatTranspired = 'false';
      this.backtoVicBtn = 'false';
      this.backtoPerp = 'true';
      this.pepDiv = 'false';
    }


  }

  backtowhatTrans(id) {

    if (id === 'Sexual violence') {
      this.backtoPerp = 'false';
      this.backtoLocation1 = 'true';
      this.backtoHome = 'false';
      this.contactInfoBtn = 'true';
      this.contactInfo = 'false';
      this.whatTranspired = 'true';
      this.backtowhatTranspired = 'false';

    } else if (id === 'Loss of land or economic assets') {
      this.contactInfo = 'false';
      this.whatTranspired = 'true';
      this.backtowhatTranspired = 'false';
      this.backtoPerp = 'false';
      this.backtoHome = 'false';
      this.contactInfoBtn = 'true';
      this.backtoVicBtn = 'true';
    }

    else {
      this.contactInfo = 'false';
      this.whatTranspired = 'true';
      this.backtowhatTranspired = 'false';
      this.backtoPerp = 'true';
      this.backtoHome = 'false';
      this.contactInfoBtn = 'true';
    }
  }

  backtoLocation1Fun() {
    this.contactInfoBtn = 'false';
    this.contactInfo = 'false';
    this.whatTranspired = 'false';
    this.backtoLocation1 = 'false';
    this.backtoHome = 'true';
    this.gotoVictimBtn = 'true';
    this.victimDiv = 'false';
    this.locationDiv = 'true';
    this.gotoLocation1 = 'true';
    this.gotoPepBtn = 'false';
  }


  gotoContactInfo(id) {
    if (id === 'Loss of land or economic assets') {
      this.contactInfo = 'true';
      this.whatTranspired = 'false';
      this.backtoLocation1 = 'false';
      this.contactInfoBtn = 'false';
      this.backtowhatTranspired = 'true';
      this.backtoPerp = 'false';
      this.backtoVicBtn = 'false';
    }

    else {
      this.contactInfo = 'true';
      this.whatTranspired = 'false';
      this.backtoLocation1 = 'false';
      this.contactInfoBtn = 'false';
      this.backtowhatTranspired = 'true';
      this.backtoPerp = 'false';
    }

  }

  ivCompany(states) {
    // console.log("status leo man");
    console.log('status', states);
    if (states === 'Mining company security guards') {
      this.involves_company = 'true';
    } else {
      this.involves_company = 'false';
    }
  }

  company = {
    owners: '',
    when_it_started_operating: 0,
    description: '',
    name: '',
    location: ''
  };

  provinces = [
    {
      name: 'Bulawayo Province',
    },
    {
      name: 'Harare Province',
    },
    {
      name: 'Manicaland Province',
    },
    {
      name: 'Mashonaland Central Province',
    },
    {
      name: 'Mashonaland East Province',
    },
    {
      name: 'Mashonaland West Province',
    },
    {
      name: 'Masvingo Province',
    },
    {
      name: 'Matabeleland North Province',
    },
    {
      name: 'Matabeleland South Province',
    },
    {
      name: 'Midlands Province'
    }
  ];

  district = [];

  bulawayoProvince = [
    { name: 'Bulawayo' },
  ];

  harareProvince = [
    { name: 'Harare' },
  ];

  manicaProvince = [
    { name: 'Buhera' }, { name: 'Chimanimani' }, { name: 'Chipinge' }, { name: 'Makoni' },
    { name: 'Mutare' }, { name: 'Mutasa' }, { name: 'Nyanga' },
  ];

  mashonaEastProvince = [
    { name: 'Chikomba' }, { name: 'Goromonzi' }, { name: 'Marondera' }, { name: 'Mudzi' },
    { name: 'Murehwa' }, { name: 'Mutoko' }, { name: 'Seke' }, { name: 'Uzumba-Maramba-Pfungwe' }, { name: 'Wedza' },
  ];

  mashonaCentralProvince = [
    { name: 'Bindura' }, { name: 'Guruve' }, { name: 'Mazowe' }, { name: 'Mbire' }, { name: 'Mount Darwin' },
    { name: 'Muzarabani' }, { name: 'Rushinga' }, { name: 'Shamva' },
  ];

  mashonaWestProvince = [
    { name: 'Chegutu' }, { name: 'Hurungwe' }, { name: 'Kariba' }, { name: 'Makonde' }, { name: 'Sanyati' },
    { name: 'Zvimba' }, { name: 'Kadoma' }, { name: 'Mhondoro-Ngezi' },
  ];

  masvingoProvince = [
    { name: 'Bikita' }, { name: 'Chiredzi' }, { name: 'Chivi' }, { name: 'Gutu' }, { name: 'Masvingo' },
    { name: 'Mwenezi' }, { name: 'Zaka' },
  ];

  midlandsProvince = [
    { name: 'Chirumhanzu' }, { name: 'Gokwe North' }, { name: 'Gokwe South' }, { name: 'Gweru' },
    { name: 'Kwekwe' }, { name: 'Mberengwa' }, { name: 'Shurugwi' }, { name: 'Zvishavane' },
  ];

  mathnorthProvince = [
    { name: 'Binga' }, { name: 'Bubi' }, { name: 'Hwange' }, { name: 'Lupane' }, { name: 'Nkayi' },
    { name: 'Tsholotsho' }, { name: 'Umguza' },
  ];

  matsouthProvince = [
    { name: 'Beitbridge' }, { name: 'Bulilima' }, { name: 'Gwanda' }, { name: 'Insiza' }, { name: 'Mangwe' },
    { name: 'Matobo' }, { name: 'Umzingwane' },
  ];

  allProvince = [
    { name: 'Bulawayo' }, { name: 'Harare' },
    { name: 'Buhera' }, { name: 'Chimanimani' }, { name: 'Chipinge' }, { name: 'Makoni' },
    { name: 'Mutare' }, { name: 'Mutasa' }, { name: 'Nyanga' },
    { name: 'Chikomba' }, { name: 'Goromonzi' }, { name: 'Marondera' }, { name: 'Mudzi' },
    { name: 'Murehwa' }, { name: 'Mutoko' }, { name: 'Seke' }, { name: 'Uzumba-Maramba-Pfungwe' }, { name: 'Wedza' },
    { name: 'Bindura' }, { name: 'Guruve' }, { name: 'Mazowe' }, { name: 'Mbire' }, { name: 'Mount Darwin' },
    { name: 'Muzarabani' }, { name: 'Rushinga' }, { name: 'Shamva' },
    { name: 'Chegutu' }, { name: 'Hurungwe' }, { name: 'Kariba' }, { name: 'Makonde' }, { name: 'Sanyati' },
    { name: 'Zvimba' }, { name: 'Kadoma' }, { name: 'Mhondoro-Ngezi' },
    { name: 'Bikita' }, { name: 'Chiredzi' }, { name: 'Chivi' }, { name: 'Gutu' }, { name: 'Masvingo' },
    { name: 'Mwenezi' }, { name: 'Zaka' },
    { name: 'Chirumhanzu' }, { name: 'Gokwe North' }, { name: 'Gokwe South' }, { name: 'Gweru' },
    { name: 'Kwekwe' }, { name: 'Mberengwa' }, { name: 'Shurugwi' }, { name: 'Zvishavane' },
    { name: 'Binga' }, { name: 'Bubi' }, { name: 'Hwange' }, { name: 'Lupane' }, { name: 'Nkayi' },
    { name: 'Tsholotsho' }, { name: 'Umguza' },
    { name: 'Beitbridge' }, { name: 'Bulilima' }, { name: 'Gwanda' }, { name: 'Insiza' }, { name: 'Mangwe' },
    { name: 'Matobo' }, { name: 'Umzingwane' },
  ];

  loading: any;

  latitude: any;
  longitude: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) {
    this.getLocation();
    this.filesForm = this.formBuilder.group({
      type: '',
      name: '',
      file: '',
    });
  }

  textOnlyValidation(event: any) {
    // event = event.target.value;
    const pattern = /^[a-zA-Z, ]+$/g;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log('position', position);
  }

  switchProvince(province: string) {
    switch (province) {
      case 'Bulawayo Province':
        this.district = this.bulawayoProvince;
        break;
      case 'Harare Province':
        this.district = this.harareProvince;
        break;
      case 'Manicaland Province':
        this.district = this.manicaProvince;
        break;
      case 'Mashonaland Central Province':
        this.district = this.mashonaCentralProvince;
        break;
      case 'Mashonaland East Province':
        this.district = this.mashonaEastProvince;
        break;
      case 'Mashonaland West Province':
        this.district = this.mashonaWestProvince;
        break;
      case 'Masvingo Province':
        this.district = this.masvingoProvince;
        break;

      case 'Matabeleland North Province':
        this.district = this.mathnorthProvince;
        break;

      case 'Matabeleland South Province':
        this.district = this.matsouthProvince;
        break;

      case 'Midlands Province':
        this.district = this.midlandsProvince;
        break;
      default:
        this.district = this.allProvince;
    }
  }

  new_case = {
    date_reported: new Date(),
    type_of_violation: '',

    // Forced Displacement
    fd_how_many_removed: '',
    fd_alternative_place: '',
    fd_alternative_place_description: '',

    //Exposure to pollutants
    ep_what_kind: '',
    ep_type: '',
    ep_source: '',
    ep_source_description: '',
    ep_num_people_exposed: '',
    ep_who_is_responsible: '',

    // Loss of land or economic assets
    ll_assests_lost: '',
    ll_who_is_responsible: '',
    ll_families_affected: '',

    // Desecration of cultural heritage including graves
    dc_what_kind: '',
    dc_other_kind: '',
    dc_how_many_graves: '',
    dc_who_desecrated_them: '',

    // Torture, intimidation and harassment
    ti_type: '',
    ti_other: '',
    ti_age: '',
    ti_groups_affected: '',
    ti_who_did_this: '',
    ti_company_involved: '',
    ti_the_reason: '',

    // Reduced freedom of movement
    rf_company_involved: '',
    rf_age: '',
    rf_victim: '',
    rf_perpetrator: '',

    // Limited access to water
    la_company_involved: '',
    la_victim: '',
    la_age: '',

    // Forced and unpaid labour
    fu_company_involved: '',
    fu_victim: '',
    fu_age: '',

    // Child labour
    cl_company_involved: '',
    cl_number_of_children: '',
    cl_gender: '',
    cl_nature_of_work: '',

    // Evidence of smuggling
    es_which_resource: '',
    es_who_is_smuggling: '',
    es_company_involved: '',

    // Sexual violence
    sv_affected_people: '',
    sv_type: '',
    sv_company_involved: '',
    sv_who_did_this: '',

    // Murder or killings
    mk_groups_of_persons: '',
    mk_number_of_people: '',
    mk_how_they_died: '',
    mk_murder_other: '',
    mk_age: '',
    mk_company_involved: '',

    what_happened: '',

    reporter_phone: null,
    reporter_address: '',
    reporter_email: '',

    // location
    name_of_area: '',
    village: '',
    chief: '',
    ward_name: '',
    district: '',
    province: '',
    location: '',
    latitude: '',
    longitude: '',

    collection_vp: {},
    media_files: {},
  };

  saveClosureRawMaterials() {
    this.loading = true;
    const uploadData = new FormData();

    if (this.fileToUpload) {
      uploadData.append('type', 'image');
      uploadData.append('name', this.fileToUpload.name);
      uploadData.append('file', this.fileToUpload, this.fileToUpload.name);
      this.fileToUpload = null;
    }
    if (this.fileToUpload == null) {

    }

    if (this.fileToUpload1) {
      uploadData.append('type', 'audio');
      uploadData.append('name', this.fileToUpload1.name);
      uploadData.append('file', this.fileToUpload1, this.fileToUpload1.name);
      this.fileToUpload1 = null;
    }
    if (this.fileToUpload1 == null) {

    }

    if (this.fileToUpload2) {
      uploadData.append('type', 'video');
      uploadData.append('name', this.fileToUpload2.name);
      uploadData.append('file', this.fileToUpload2, this.fileToUpload2.name);
      this.fileToUpload2 = null;
    }
    if (this.fileToUpload2 == null) {

    }

    this.apiService.portPostData3('reportcase/add_files/', uploadData).subscribe(
      (data) => {
        this.loading = false;
        this.apiService.alertMsg('Success!', 'file uploaded', 'Your file has been uploaded successfully, you can upload more');
        console.log('data', data);
        if (data.type === 'audio') {
          this.audiosArray.push(data);
        }

        if (data.type === 'video') {
          this.videosArray.push(data);
        }

        if (data.type === 'image') {
          this.imagesArray.push(data);
        }

        // this.toastr.success('Success', 'Quality analysis saved successfully');
      },
      (err) => {
        this.loading = false;
        this.apiService.alertMsg('Failed!', 'file not uploaded', 'Your file has not been uploaded, please try again');
        console.log('err', err);
        // this.toastr.error('Error', 'Please fill up all the fields');
      }
    );
  }

  removeAudio(index) {
    this.audiosArray.splice(index, 1);
  }

  removeVideo(index) {
    this.videosArray.splice(index, 1);
  }

  removeImage(index) {
    this.imagesArray.splice(index, 1);
  }

  onFileChange(event) {
    this.fileToUpload = event.target.files[0];
    this.saveClosureRawMaterials();
  }

  onFileChange1(event) {
    this.fileToUpload1 = event.target.files[0];
    this.saveClosureRawMaterials();
  }

  onFileChange2(event) {
    this.fileToUpload2 = event.target.files[0];
    this.saveClosureRawMaterials();
  }


  victim_ = {
    victim_name: '',
    victim_description: '',
    victim_description_other: '',
    victim_contact: '',
    victim_age: '',
    victim_gender: ''
  };

  company_ = {
    company_name: '',
    company_location: '',
    company_description: ''
  };

  perpetrator = {
    description_of_perpetrator: '',
    description_of_perpetrator_other: '',
    perpetrator_age: '',
    perpetrator_gender: '',
    perpetrator_name: ''
  };

  victimsArray = [];
  perpetratorArray = [];
  companyArray = [];

  pickedV: any;

  violationType(event) {
    this.pickedV = event;
    console.log('event', event);
    if (event === 'Forced displacement') {
      this.forced = 'true';
    } else {
      this.forced = 'false';
    }
    // Denied access to social services like Health facilities, School, Markets place
    if (event === 'Denied access to social services like Health facilities, School, Markets place') {
      this.denied = 'true';
    } else {
      this.denied = 'false';
    }
    //
    if (event === 'Exposure to pollutants') {
      this.exposure = 'true';
    } else {
      this.exposure = 'false';
    }
    // Loss of land or economic assets
    if (event === 'Loss of land or economic assets') {
      this.loss = 'true';
    } else {
      this.loss = 'false';
    }
    // Desecration of cultural heritage including graves
    if (event === 'Desecration of cultural heritage including graves') {
      this.cultural = 'true';
    } else {
      this.cultural = 'false';
    }
    // Torture, intimidation and harassment
    if (event === 'Torture, intimidation and harassment') {
      this.torture = 'true';
    } else {
      this.torture = 'false';
    }
    // Reduced freedom of movement
    if (event === 'Restricted freedom of movement') {
      this.freedom = 'true';
    } else {
      this.freedom = 'false';
    }
    // Limited access to water
    if (event === 'Limited access to water') {
      this.water = 'true';
    } else {
      this.water = 'false';
    }
    //Forced and unpaid labour
    if (event === 'Forced and unpaid labour') {
      this.labour = 'true';
    } else {
      this.labour = 'false';
    }
    // Child labour
    if (event === 'Child labour') {
      this.child = 'true';
    } else {
      this.child = 'false';
    }
    //Evidence of smuggling
    if (event === 'Evidence of smuggling') {
      this.smuggling = 'true';
    } else {
      this.smuggling = 'false';
    }
    //Sexual violence
    if (event === 'Sexual violence') {
      this.violence = 'true';
      this.hideForSV = 'true';
    } else {
      this.violence = 'false';
    }
    // Murder or killings
    if (event === 'Murder or killings') {
      this.murder = 'true';
    } else {
      this.murder = 'false';
    }
  }

  handleCompanyChange() {
    const element = {
      company_name: this.company_.company_name,
      location: this.company_.company_location,
      description: this.company_.company_description,
    };
    this.companyArray.push(element);
    console.log('companyArray', this.companyArray);
  }

  handleVictimsChange() {
    const element = {
      victim_name: this.victim_.victim_name,
      victim_contact: this.victim_.victim_contact,
      victim_age: this.victim_.victim_age,
      victim_gender: this.victim_.victim_gender,
      victim_description: this.victim_.victim_description
    };
    this.victimsArray.push(element);
    console.log('victimsArray', this.victimsArray);
  }

  removeVictims(index) {
    this.victimsArray.splice(index, 1);
  }

  handlePerpetratorChange() {
    const element = {
      description_of_perpetrator: this.perpetrator.description_of_perpetrator,
      perpetrator_age: this.perpetrator.perpetrator_age,
      perpetrator_gender: this.perpetrator.perpetrator_gender,
      perpetrator_name: this.perpetrator.perpetrator_name,
    };
    this.perpetratorArray.push(element);
    console.log('perpetratorArray', this.perpetratorArray);
  }

  removePerpetrator(index) {
    this.perpetratorArray.splice(index, 1);
  }

  otherOption(event) {
    if (event === 'other') {
      this.otherOption1 = 'true';
    } else {
      this.otherOption1 = 'false';
    }
  }

  otherKind(event) {
    if (event === 'other') {
      this.otherKind1 = 'true';
    } else {
      this.otherKind1 = 'false';
    }
  }

  murderOption(event) {
    if (event === 'other weapons') {
      this.murderOption1 = 'true';
    } else {
      this.murderOption1 = 'false';
    }
  }

  activateLocation() {
    this.locationName1 = 'true';
    this.onHome = 'true';
  }

  activateLocation2() {
    this.locationName1 = 'true';
    this.onHome = 'true';
  }

  activateHome() {
    this.locationName1 = 'false';
    this.whatTranspired = 'false';
    this.onHome = 'false';
  }

  activatewhatTranspired() {
    this.locationName1 = 'false';
    this.whatTranspired = 'true';
    this.locationName2 = 'true';
  }


  involve_Com(res) {
    this.involves_company = res;
  }

  async ngOnInit() {
    // this.loadFiles();
  }
  async register() {
    if (
      this.new_case.type_of_violation === ''
    ) {
      this.apiService.alertMsg('Error!', 'Fill in type of violation', 'Please choose the type of violation in order to submit report');
    }
    else {
      this.new_case.collection_vp = {
        victims: this.victimsArray,
        perpetrator: this.perpetratorArray,
        company: this.companyArray,
      };

      this.new_case.media_files = {
        audios: this.audiosArray,
        videos: this.videosArray,
        images: this.imagesArray,
      };


      if (this.latitude != null && this.longitude) {
        this.new_case.latitude = this.latitude;
        this.new_case.longitude = this.longitude;
      } else {
        // this.apiService.alertMsg('Error location!', 'location not picked', 'Unable to pick location');
      }
      console.log('new_case', this.new_case);
      this.new_case.date_reported = new Date(this.new_case.date_reported);

      this.loading = true;
      this.apiService.register('reportcase/report_case/new/', this.new_case).subscribe((res) => {

        console.log(res);
        this.loading = false;
        this.router.navigateByUrl('welcome');
        this.apiService.alertMsg('Thank you!', 'incident has been reported', 'You have successfully reported an incident');
      }, (err) => {
        console.log(err);
        this.loading = false;
        if (err.status === '400') {
          this.apiService.alertMsg('Error!', 'Fill in all fields', 'Please fill in all the required fields');
        } else {
          this.apiService.alertMsg('Error!', 'Unexpected error occured, please try again', '');
        }
      });
    }
  }
}
