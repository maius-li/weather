export default class Aqi {
    loadFromJson(json) {
        this.SiteName = json.SiteName;
        this.County = json.County;
        this.AQI = json.AQI;
        this.Pollutant = json.Pollutant;
        this.Status = json.Status;
        this.SO2 = json.SO2;
        this.CO = json.CO;
        this.CO_8hr = json.CO_8hr;
        this.O3 = json.O3;
        this.O3_8hr = json.O3_8hr;
        this.PM10 = json.PM10;
        this['PM2.5'] = json['PM2.5'];
        this.NO2 = json.NO2;
        this.NOx = json.NOx;
        this.NO = json.NO;
        this.WindSpeed = json.WindSpeed;
        this.WindDirec = json.WindDirec;
        this.PublishTime = json.PublishTime;
        this['PM2.5_AVG'] = json['PM2.5_AVG'];
        this.PM10_AVG = json.PM10_AVG;
        this.SO2_AVG = json.SO2_AVG;
        this.Longitude = json.Longitude;
        this.Latitude = json.Latitude;
    }
}
