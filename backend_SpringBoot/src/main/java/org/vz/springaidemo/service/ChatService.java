package org.vz.springaidemo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class ChatService {

   @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private final WebClient webClient;

    public ChatService(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }

    public String getResponse(String prompt){
        //construct request payload
        /*
             {
              "contents": [{
                "parts":[{"text": "What is Capital of Australia"}]
                }]
             }
         */
        Map<String , Object> payload = Map.of("contents" , new Object[]{
                Map.of("parts" , new Object[]{
                        Map.of("text" , prompt)
                })
        });

        //Make API call
        String response = webClient.post()
                .uri(geminiApiUrl + geminiApiKey)
                .header("Content-Type" , "application/json")
                .bodyValue(payload)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        //return response
        return response;
    }
}
