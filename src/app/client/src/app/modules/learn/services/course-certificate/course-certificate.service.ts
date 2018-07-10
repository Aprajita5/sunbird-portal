import { Injectable } from '@angular/core';
import { DataService } from '@sunbird/core';
import { ConfigService } from '@sunbird/shared';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseCertificateService extends DataService {

    /**
   * base Url for announcement api
   */
  baseUrl: string;
  /**
   * reference of config service.
   */
  public config: ConfigService;
  /**
   * reference of lerner service.
   */
  public http: HttpClient;
  /**
   * Constructor - default method of CoursePriceService class
   *
   * @param {ConfigService} config ConfigService reference
   * @param {HttpClient} http HttpClient reference
   */
  constructor(config: ConfigService, http: HttpClient) {
    super(http);
    this.config = config;
    this.baseUrl = this.config.urlConFig.URLS.CERTIFICATE_PREFIX;
  }

  downloadCertificate(data: any) {
    const option = {
      url: this.config.urlConFig.URLS.CERTIFICATE.COURSE_CERTIFICATE,
      data: {
        'request': data
      }
    };
    return this.post(option);
  }

}
