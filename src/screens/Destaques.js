import { useEffect } from "react";
import { api, apiKey } from "../services/api-moviedb";
import { useState } from "react";
import SafeContainer from "../components/SafeContainer";
import { FlatList, View } from "react-native";
import CardFilme from "../components/CardFilme";


export default function Destaques(){
    const [resultados, setResultados] = useState([]);
    
    
    useEffect(() => {
        async function destaqueSemana(){
            try {
                const resposta = await api.get(`/trending/movie/week`, {
                    params: {
                        include_adult: false,
                        language: "pt-BR",
                        api_key: apiKey,
                      },
                });

                setResultados(resposta.data.results)
                

            } catch (error) {
                console.error("Deu ruim: " + error.message);
            }
        }

        destaqueSemana();
    }, []);

    return(
        <SafeContainer>
            { 
                <View>
                    <FlatList
                    data={resultados}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return <CardFilme filme={item} />;
                    }}
                    
                    />
            </View>
          }
        </SafeContainer>
    );

}
