package clientWS_CN;

import com.soap.ws.client.CountryInfoService;
import com.soap.ws.client.CountryInfoServiceSoapType;

public class CountryName {
	public static String countryName(String inputStr) {
		CountryInfoService service = new CountryInfoService(); //created service object
		CountryInfoServiceSoapType CISST_service = service.getCountryInfoServiceSoap(); //create SOAP object (a port of the service)
		
		String result = CISST_service.countryName(inputStr);
		return result;
	}

}