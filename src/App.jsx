import { useEffect, useState } from "react";
import "./App.css";
import "./assets/money.png";
import axios from "axios";

function App() {
  const api_key = import.meta.env.VITE_APP_API_KEY;
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrrency] = useState("LKR");
  const [convertAmount, setConvertAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${fromCurrency}`;
        const res = await axios.get(url);
        //console.log(res);
        setExchangeRate(res.data.conversion_rates[toCurrency])
      } catch (error) {
        console.log("Error fetching exchange rate:", error);
      }
    };
    getExchangeRate();
  },[toCurrency,fromCurrency]);

  useEffect(() => {
    if(exchangeRate !== null){
      setConvertAmount((amount * exchangeRate).toFixed(2));
    }
  },[amount, exchangeRate]);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrrency(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="box"></div>
        <div className="data">
          <h1>CURRENCY CONVERTER</h1>
          <div className="input-container">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              placeholder="1"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="fromCurrency">From Currency</label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
            >
              <option value="USD">USD - unit states dollar</option>
              <option value="AED">AED - united arab emirates dirham</option>
              <option value="AFN">AFN - afghan afghani</option>
              <option value="ALL">ALL - albanian lek</option>
              <option value="AMD">AMD - armenian dram</option>
              <option value="ANG">ANG - netherlands antillean guilder</option>
              <option value="AOA">AOA - angolan kwanza</option>
              <option value="ARS">ARS - argentine peso</option>
              <option value="AUD">AUD - australian dollar</option>
              <option value="AWG">AWG - aruban florin</option>
              <option value="AWG">AZN - azerbaijani manat</option>
              <option value="BAM">
                BAM - bosnia-herzegovina convertible mark
              </option>
              <option value="BBD">BBD - barbadian dollar</option>
              <option value="BDT">BDT - bangladeshi taka</option>
              <option value="BGN">BGN - bulgarian lev</option>
              <option value="BHD">BHD - bahraini dinar</option>
              <option value="BIF">BIF - burundian franc</option>
              <option value="BMD">BMD - bermudan dollar</option>
              <option value="BND">BND - brunei dollar</option>
              <option value="BOB">BOB - bolivian boliviano</option>
              <option value="BRL">BRL - brazilian real</option>
              <option value="BRL">BRL - brazilian real</option>
              <option value="BSD">BSD - bahamian dollar</option>
              <option value="BTC">BTC - bitcoin</option>
              <option value="BTN">BTN - bhutanese ngultrum</option>
              <option value="BWP">BWP - botswanan pula</option>
              <option value="BYN">BYN - new belarusian ruble</option>
              <option value="BYR">BYR - belarusian ruble</option>
              <option value="BZD">BZD - belize dollar</option>
              <option value="CAD">CAD - canadian dollar</option>
              <option value="CDF">CDF - congolese franc</option>
              <option value="CHF">CHF - swiss franc</option>
              <option value="CLF">CLF - chilean unit of account (uf)</option>
              <option value="CLP">CLP - chilean peso</option>
              <option value="CNY">CNY - chinese yuan</option>
              <option value="COP">COP - colombian peso</option>
              <option value="CRC">CRC - costa rican colón</option>
              <option value="CUC">CUC - cuban convertible peso</option>
              <option value="CUP">CUP - cuban peso</option>
              <option value="CVE">CVE - cape verdean escudo</option>
              <option value="CZK">CZK - czech republic koruna</option>
              <option value="DJF">DJF - djiboutian franc</option>
              <option value="DKK">DKK - danish krone</option>
              <option value="DOP">DOP - dominican peso</option>
              <option value="DZD">DZD - algerian dinar</option>
              <option value="EGP">EGP - egyptian pound</option>
              <option value="ERN">ERN - eritrean nakfa</option>
              <option value="ETB">ETB - ethiopian birr</option>
              <option value="EUR">EUR - euro</option>
              <option value="FJD">FJD - fijian dollar</option>
              <option value="FKP">FKP - falkland islands pound</option>
              <option value="GBP">GBP - british pound sterling</option>
              <option value="GEL">GEL - georgian lari</option>
              <option value="GGP">GGP - guernsey pound</option>
              <option value="GHS">GHS - ghanaian cedi</option>
              <option value="GIP">GIP - gibraltar pound</option>
              <option value="GMD">GMD - gambian dalasi</option>
              <option value="GNF">GNF - guinean franc</option>
              <option value="GTQ">GTQ - guatemalan quetzal</option>
              <option value="GYD">GYD - guyanaese dollar</option>
              <option value="HKD">HKD - hong kong dollar</option>
              <option value="HNL">HNL - honduran lempira</option>
              <option value="HRK">HRK - croatian kuna</option>
              <option value="HTG">HTG - haitian gourde</option>
              <option value="HUF">HUF - hungarian forint</option>
              <option value="IDR">IDR - indonesian rupiah</option>
              <option value="ILS">ILS - israeli new sheqel</option>
              <option value="IMP">IMP - manx pound</option>
              <option value="INR">INR - indian rupee</option>
              <option value="IQD">IQD - iraqi dinar</option>
              <option value="IRR">IRR - iranian rial</option>
              <option value="ISK">ISK - icelandic króna</option>
              <option value="JEP">JEP - jersey pound</option>
              <option value="JMD">JMD - jamaican dollar</option>
              <option value="JOD">JOD - jordanian dinar</option>
              <option value="JPY">JPY - japanese yen</option>
              <option value="KES">KES - kenyan shilling</option>
              <option value="KGS">KGS - kyrgystani som</option>
              <option value="KHR">KHR - cambodian riel</option>
              <option value="KMF">KMF - comorian franc</option>
              <option value="KPW">KPW - north korean won</option>
              <option value="KRW">KRW - south korean won</option>
              <option value="KWD">KWD - kuwaiti dinar</option>
              <option value="KYD">KYD - cayman islands dollar</option>
              <option value="KZT">KZT - kazakhstani tenge</option>
              <option value="LAK">LAK - laotian kip</option>
              <option value="LBP">LBP - lebanese pound</option>
              <option value="LKR">LKR - sri lankan rupee</option>
              <option value="LRD">LRD - liberian dollar</option>
              <option value="LSL">LSL - lesotho loti</option>
              <option value="LTL">LTL - lithuanian litas</option>
              <option value="LVL">LVL - latvian lats</option>
              <option value="LYD">LYD - libyan dinar</option>
              <option value="MAD">MAD - moroccan dirham</option>
              <option value="MDL">MDL - moldovan leu</option>
              <option value="MGA">MGA - malagasy ariary</option>
              <option value="MKD">MKD - macedonian denar</option>
              <option value="MMK">MMK - myanma kyat</option>
              <option value="MNT">MNT - mongolian tugrik</option>
              <option value="MOP">MOP - macanese pataca</option>
              <option value="MRO">MRO - mauritanian ouguiya</option>
              <option value="MUR">MUR - mauritian rupee</option>
              <option value="MVR">MVR - maldivian rufiyaa</option>
              <option value="MWK">MWK - malawian kwacha</option>
              <option value="MXN">MXN - mexican peso</option>
              <option value="MYR">MYR - malaysian ringgit</option>
              <option value="MZN">MZN - mozambican metical</option>
              <option value="NAD">NAD - namibian dollar</option>
              <option value="NGN">NGN - nigerian naira</option>
              <option value="NIO">NIO - nicaraguan córdoba</option>
              <option value="NOK">NOK - norwegian krone</option>
              <option value="NPR">NPR - nepalese rupee</option>
              <option value="NZD">NZD - new zealand dollar</option>
              <option value="OMR">OMR - omani rial</option>
              <option value="PAB">PAB - panamanian balboa</option>
              <option value="PEN">PEN - peruvian nuevo sol</option>
              <option value="PGK">PGK - papua new guinean kina</option>
              <option value="PHP">PHP - philippine peso</option>
              <option value="PKR">PKR - pakistani rupee</option>
              <option value="PLN">PLN - polish zloty</option>
              <option value="PYG">PYG - paraguayan guarani</option>
              <option value="QAR">QAR - qatari rial</option>
              <option value="RON">RON - romanian leu</option>
              <option value="RSD">RSD - serbian dinar</option>
              <option value="RUB">RUB - russian ruble</option>
              <option value="RWF">RWF - rwandan franc</option>
              <option value="SAR">SAR - saudi riyal</option>
              <option value="SBD">SBD - solomon islands dollar</option>
              <option value="SCR">SCR - seychellois rupee</option>
              <option value="SDG">SDG - sudanese pound</option>
              <option value="SEK">SEK - swedish krona</option>
              <option value="SGD">SGD - singapore dollar</option>
              <option value="SHP">SHP - saint helena pound</option>
              <option value="SLL">SLL - sierra leonean leone</option>
              <option value="SOS">SOS - somali shilling</option>
              <option value="SRD">SRD - surinamese dollar</option>
              <option value="STD">STD - são tomé and príncipe dobra</option>
              <option value="SVC">SVC - salvadoran colón</option>
              <option value="SYP">SYP - syrian pound</option>
              <option value="SZL">SZL - swazi lilangeni</option>
              <option value="THB">THB - thai baht</option>
              <option value="TJS">TJS - tajikistani somoni</option>
              <option value="TMT">TMT - turkmenistani manat</option>
              <option value="TND">TND - tunisian dinar</option>
              <option value="TOP">TOP - tongan paʻanga</option>
              <option value="TRY">TRY - turkish lira</option>
              <option value="TTD">TTD - trinidad and tobago dollar</option>
              <option value="TWD">TWD - new taiwan dollar</option>
              <option value="TZS">TZS - tanzanian shilling</option>
              <option value="UAH">UAH - ukrainian hryvnia</option>
              <option value="UGX">UGX - ugandan shilling</option>
              <option value="USD">USD - united states dollar</option>
              <option value="UYU">UYU - uruguayan peso</option>
              <option value="UZS">UZS - uzbekistan som</option>
              <option value="VEF">VEF - venezuelan bolívar fuerte</option>
              <option value="VND">VND - vietnamese dong</option>
              <option value="VUV">VUV - vanuatu vatu</option>
              <option value="WST">WST - samoan tala</option>
              <option value="XAF">XAF - cfa franc beac</option>
              <option value="XAG">XAG - silver (troy ounce)</option>
              <option value="XAU">XAU - gold (troy ounce)</option>
              <option value="XCD">XCD - east caribbean dollar</option>
              <option value="XDR">XDR - special drawing rights</option>
              <option value="XOF">XOF - cfa franc bceao</option>
              <option value="XPF">XPF - cfp franc</option>
              <option value="YER">YER - yemeni rial</option>
              <option value="ZAR">ZAR - south african rand</option>
              <option value="ZMK">ZMK - zambian kwacha (pre-2013)</option>
              <option value="ZMW">ZMW - zambian kwacha</option>
              <option value="ZWL">ZWL - zimbabwean dollar</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="toCurrency">To Currency</label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={handleToCurrencyChange}
            >
              <option value="USD">USD - unit states dollar</option>
              <option value="AED">AED - united arab emirates dirham</option>
              <option value="AFN">AFN - afghan afghani</option>
              <option value="ALL">ALL - albanian lek</option>
              <option value="AMD">AMD - armenian dram</option>
              <option value="ANG">ANG - netherlands antillean guilder</option>
              <option value="AOA">AOA - angolan kwanza</option>
              <option value="ARS">ARS - argentine peso</option>
              <option value="AUD">AUD - australian dollar</option>
              <option value="AWG">AWG - aruban florin</option>
              <option value="AWG">AZN - azerbaijani manat</option>
              <option value="BAM">
                BAM - bosnia-herzegovina convertible mark
              </option>
              <option value="BBD">BBD - barbadian dollar</option>
              <option value="BDT">BDT - bangladeshi taka</option>
              <option value="BGN">BGN - bulgarian lev</option>
              <option value="BHD">BHD - bahraini dinar</option>
              <option value="BIF">BIF - burundian franc</option>
              <option value="BMD">BMD - bermudan dollar</option>
              <option value="BND">BND - brunei dollar</option>
              <option value="BOB">BOB - bolivian boliviano</option>
              <option value="BRL">BRL - brazilian real</option>
              <option value="BRL">BRL - brazilian real</option>
              <option value="BSD">BSD - bahamian dollar</option>
              <option value="BTC">BTC - bitcoin</option>
              <option value="BTN">BTN - bhutanese ngultrum</option>
              <option value="BWP">BWP - botswanan pula</option>
              <option value="BYN">BYN - new belarusian ruble</option>
              <option value="BYR">BYR - belarusian ruble</option>
              <option value="BZD">BZD - belize dollar</option>
              <option value="CAD">CAD - canadian dollar</option>
              <option value="CDF">CDF - congolese franc</option>
              <option value="CHF">CHF - swiss franc</option>
              <option value="CLF">CLF - chilean unit of account (uf)</option>
              <option value="CLP">CLP - chilean peso</option>
              <option value="CNY">CNY - chinese yuan</option>
              <option value="COP">COP - colombian peso</option>
              <option value="CRC">CRC - costa rican colón</option>
              <option value="CUC">CUC - cuban convertible peso</option>
              <option value="CUP">CUP - cuban peso</option>
              <option value="CVE">CVE - cape verdean escudo</option>
              <option value="CZK">CZK - czech republic koruna</option>
              <option value="DJF">DJF - djiboutian franc</option>
              <option value="DKK">DKK - danish krone</option>
              <option value="DOP">DOP - dominican peso</option>
              <option value="DZD">DZD - algerian dinar</option>
              <option value="EGP">EGP - egyptian pound</option>
              <option value="ERN">ERN - eritrean nakfa</option>
              <option value="ETB">ETB - ethiopian birr</option>
              <option value="EUR">EUR - euro</option>
              <option value="FJD">FJD - fijian dollar</option>
              <option value="FKP">FKP - falkland islands pound</option>
              <option value="GBP">GBP - british pound sterling</option>
              <option value="GEL">GEL - georgian lari</option>
              <option value="GGP">GGP - guernsey pound</option>
              <option value="GHS">GHS - ghanaian cedi</option>
              <option value="GIP">GIP - gibraltar pound</option>
              <option value="GMD">GMD - gambian dalasi</option>
              <option value="GNF">GNF - guinean franc</option>
              <option value="GTQ">GTQ - guatemalan quetzal</option>
              <option value="GYD">GYD - guyanaese dollar</option>
              <option value="HKD">HKD - hong kong dollar</option>
              <option value="HNL">HNL - honduran lempira</option>
              <option value="HRK">HRK - croatian kuna</option>
              <option value="HTG">HTG - haitian gourde</option>
              <option value="HUF">HUF - hungarian forint</option>
              <option value="IDR">IDR - indonesian rupiah</option>
              <option value="ILS">ILS - israeli new sheqel</option>
              <option value="IMP">IMP - manx pound</option>
              <option value="INR">INR - indian rupee</option>
              <option value="IQD">IQD - iraqi dinar</option>
              <option value="IRR">IRR - iranian rial</option>
              <option value="ISK">ISK - icelandic króna</option>
              <option value="JEP">JEP - jersey pound</option>
              <option value="JMD">JMD - jamaican dollar</option>
              <option value="JOD">JOD - jordanian dinar</option>
              <option value="JPY">JPY - japanese yen</option>
              <option value="KES">KES - kenyan shilling</option>
              <option value="KGS">KGS - kyrgystani som</option>
              <option value="KHR">KHR - cambodian riel</option>
              <option value="KMF">KMF - comorian franc</option>
              <option value="KPW">KPW - north korean won</option>
              <option value="KRW">KRW - south korean won</option>
              <option value="KWD">KWD - kuwaiti dinar</option>
              <option value="KYD">KYD - cayman islands dollar</option>
              <option value="KZT">KZT - kazakhstani tenge</option>
              <option value="LAK">LAK - laotian kip</option>
              <option value="LBP">LBP - lebanese pound</option>
              <option value="LKR">LKR - sri lankan rupee</option>
              <option value="LRD">LRD - liberian dollar</option>
              <option value="LSL">LSL - lesotho loti</option>
              <option value="LTL">LTL - lithuanian litas</option>
              <option value="LVL">LVL - latvian lats</option>
              <option value="LYD">LYD - libyan dinar</option>
              <option value="MAD">MAD - moroccan dirham</option>
              <option value="MDL">MDL - moldovan leu</option>
              <option value="MGA">MGA - malagasy ariary</option>
              <option value="MKD">MKD - macedonian denar</option>
              <option value="MMK">MMK - myanma kyat</option>
              <option value="MNT">MNT - mongolian tugrik</option>
              <option value="MOP">MOP - macanese pataca</option>
              <option value="MRO">MRO - mauritanian ouguiya</option>
              <option value="MUR">MUR - mauritian rupee</option>
              <option value="MVR">MVR - maldivian rufiyaa</option>
              <option value="MWK">MWK - malawian kwacha</option>
              <option value="MXN">MXN - mexican peso</option>
              <option value="MYR">MYR - malaysian ringgit</option>
              <option value="MZN">MZN - mozambican metical</option>
              <option value="NAD">NAD - namibian dollar</option>
              <option value="NGN">NGN - nigerian naira</option>
              <option value="NIO">NIO - nicaraguan córdoba</option>
              <option value="NOK">NOK - norwegian krone</option>
              <option value="NPR">NPR - nepalese rupee</option>
              <option value="NZD">NZD - new zealand dollar</option>
              <option value="OMR">OMR - omani rial</option>
              <option value="PAB">PAB - panamanian balboa</option>
              <option value="PEN">PEN - peruvian nuevo sol</option>
              <option value="PGK">PGK - papua new guinean kina</option>
              <option value="PHP">PHP - philippine peso</option>
              <option value="PKR">PKR - pakistani rupee</option>
              <option value="PLN">PLN - polish zloty</option>
              <option value="PYG">PYG - paraguayan guarani</option>
              <option value="QAR">QAR - qatari rial</option>
              <option value="RON">RON - romanian leu</option>
              <option value="RSD">RSD - serbian dinar</option>
              <option value="RUB">RUB - russian ruble</option>
              <option value="RWF">RWF - rwandan franc</option>
              <option value="SAR">SAR - saudi riyal</option>
              <option value="SBD">SBD - solomon islands dollar</option>
              <option value="SCR">SCR - seychellois rupee</option>
              <option value="SDG">SDG - sudanese pound</option>
              <option value="SEK">SEK - swedish krona</option>
              <option value="SGD">SGD - singapore dollar</option>
              <option value="SHP">SHP - saint helena pound</option>
              <option value="SLL">SLL - sierra leonean leone</option>
              <option value="SOS">SOS - somali shilling</option>
              <option value="SRD">SRD - surinamese dollar</option>
              <option value="STD">STD - são tomé and príncipe dobra</option>
              <option value="SVC">SVC - salvadoran colón</option>
              <option value="SYP">SYP - syrian pound</option>
              <option value="SZL">SZL - swazi lilangeni</option>
              <option value="THB">THB - thai baht</option>
              <option value="TJS">TJS - tajikistani somoni</option>
              <option value="TMT">TMT - turkmenistani manat</option>
              <option value="TND">TND - tunisian dinar</option>
              <option value="TOP">TOP - tongan paʻanga</option>
              <option value="TRY">TRY - turkish lira</option>
              <option value="TTD">TTD - trinidad and tobago dollar</option>
              <option value="TWD">TWD - new taiwan dollar</option>
              <option value="TZS">TZS - tanzanian shilling</option>
              <option value="UAH">UAH - ukrainian hryvnia</option>
              <option value="UGX">UGX - ugandan shilling</option>
              <option value="USD">USD - united states dollar</option>
              <option value="UYU">UYU - uruguayan peso</option>
              <option value="UZS">UZS - uzbekistan som</option>
              <option value="VEF">VEF - venezuelan bolívar fuerte</option>
              <option value="VND">VND - vietnamese dong</option>
              <option value="VUV">VUV - vanuatu vatu</option>
              <option value="WST">WST - samoan tala</option>
              <option value="XAF">XAF - cfa franc beac</option>
              <option value="XAG">XAG - silver (troy ounce)</option>
              <option value="XAU">XAU - gold (troy ounce)</option>
              <option value="XCD">XCD - east caribbean dollar</option>
              <option value="XDR">XDR - special drawing rights</option>
              <option value="XOF">XOF - cfa franc bceao</option>
              <option value="XPF">XPF - cfp franc</option>
              <option value="YER">YER - yemeni rial</option>
              <option value="ZAR">ZAR - south african rand</option>
              <option value="ZMK">ZMK - zambian kwacha (pre-2013)</option>
              <option value="ZMW">ZMW - zambian kwacha</option>
              <option value="ZWL">ZWL - zimbabwean dollar</option>
            </select>
          </div>
          <div className="result">
            <p>
              {amount} {fromCurrency} is Egual to {convertAmount} {toCurrency}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
