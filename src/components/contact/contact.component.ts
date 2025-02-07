import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutServiceService } from '../../services/about-service.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  dataService = inject(AboutServiceService);
  details = signal<any>({
    name: '',
    age: '',
    email: '',
    address: '',
    file: null,
  });

  mainData: any = signal([]);

  ngOnInit(): void {
    this.dataService.aboutService2().subscribe((res: any) => {
      this.mainData.set(res);
    });
  }

  // constructor(private dataService: AboutServiceService) {}

  onNameChange = (event: any) => {
    this.details.set({ ...this.details(), name: event.target.value });
  };

  onAgeChange = (event: any) => {
    this.details.set({ ...this.details(), age: event.target.value });
  };

  onEmailChange = (event: any) => {
    this.details.set({ ...this.details(), email: event.target.value });
  };

  onAddressChange = (event: any) => {
    this.details.set({ ...this.details(), address: event.target.value });
  };

  convertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result as string);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }

  onFileChange = (event: any) => {
    // this.details().file = event.target.file;

    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.convertImageToBase64(input.files[0])
        .then((base64) => {
          this.details.set({ ...this.details(), file: base64 });
        })
        .catch((error) => {
          console.error('Error converting image:', error);
        });
    }
  };

  onSubmitClick = () => {
    alert(
      `Submitted successfully name: ${this.details().name} , age: ${
        this.details().age
      }, email: ${this.details().email} address: ${this.details().address}`
    );
  };
}
