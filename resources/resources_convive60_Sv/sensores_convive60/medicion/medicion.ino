#include <DHT.h>
#define DHTTYPE DHT11

int pin_contaminacion = A1;
int pin_co2 = A2;
int pin_humedad_temperatura = 22;

DHT dht(pin_humedad_temperatura, DHTTYPE);

float valor_contaminacion = 0;
float valor_co2 = 0;
float valor_humedad = 0;
float valor_temperatura = 0;

void setup()
{
    Serial.begin(9600);
    dht.begin();
}

void loop()
{
    delay(2000);

    valor_contaminacion = analogRead(pin_contaminacion);
    valor_co2 = analogRead(pin_co2);

    valor_humedad = dht.readHumidity();
    valor_temperatura = dht.readTemperature();

    if (isnan(valor_humedad) || isnan(valor_temperatura) || isnan(valor_contaminacion) || isnan(valor_co2))
    {
      Serial.println("*");
    }
    else
    {
        Serial.print(valor_humedad);
        Serial.print("#");
        Serial.print(valor_temperatura);
        Serial.print("#");
        Serial.print(valor_contaminacion);
        Serial.print("#");
        Serial.print(valor_co2);
        Serial.println("");
    }
}
