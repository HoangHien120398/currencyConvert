import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CountryPicker from 'react-native-country-picker-modal'
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker

 } from 'react-native';

 
// const ConversionTypeButton = () => {
//   return (
//     <TouchableOpacity style={styles.button}>
//       <Text>USD to VND</Text>
//     </TouchableOpacity>
//   );
// }; 
const ConversionTypeButton = ({
  fromCurrency,
  toCurrency,
  from,
  to,
  setConversionCurrencies
}) => {
  const backgroundColor =
    fromCurrency === from && toCurrency === to ? 'lightblue' : null;
  const buttonStyle = { backgroundColor: backgroundColor };

  const fromFlag = from === 'usd' ? '🇺🇸' : '🇻🇳';
  const toFlag = to === 'usd' ? '🇺🇸' : '🇻🇳';

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={() => setConversionCurrencies(from, to)}
    >
      <Text style={styles.buttonText}>
        {fromFlag} to {toFlag}
      </Text>
    </TouchableOpacity>
  );
};
export default function App() {
  const [fromCurrency, setFromCurrency] = useState("vnd");
  const [toCurrency, setToCurrency] = useState("usd");
  const [currentCurrencyValue, setFromCurrencyValue] = useState(0);
  const [convertedCurrencyValue, setConvertedValue] = useState(0);
  
  const convertCurrency = () => {
    let value;
    if (fromCurrency === 'vnd') {
      value = currentCurrencyValue / 23000;
    } else {
      value = 23000 * currentCurrencyValue;
    }
    setConvertedValue(value);
  };
  useEffect(() => {
    convertCurrency();
  });

  return (
    <View style={styles.container}>
      <Text>
        Please enter the value of the currency you want to convert
      </Text>
      <TextInput
        textAlign="center"
        autoFocus={true}
        keyboardType='number-pad'
        placeholder="100,000,000 VND"
        selectionColor="red"
        style={{
          height: 60,
          padding: 5,
          width: 300,
          fontSize: 35,
          borderWidth: 1,
          borderColor: 'lightblue'
        }}
    />

          <ConversionTypeButton
            from="vnd"
            to="usd"
            toCurrency={toCurrency}
            fromCurrency={fromCurrency}
            setConversionCurrencies={setConversionCurrencies}
          />
          <ConversionTypeButton
            from="usd"
            to="vnd"
            toCurrency={toCurrency}
            fromCurrency={fromCurrency}
            setConversionCurrencies={setConversionCurrencies}
          />
          <Text>Current currency:</Text>
          <FormattedCurrency type={fromCurrency} value={currentCurrencyValue} />
          <Text>Conversion currenecy:</Text>
          <FormattedCurrency type={toCurrency} value={convertedCurrencyValue} />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center'
  },
  textInput: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: "lightblue",
  },
  currencyText: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",
  },
});

