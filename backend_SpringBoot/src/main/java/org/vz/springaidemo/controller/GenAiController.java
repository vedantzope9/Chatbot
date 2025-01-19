package org.vz.springaidemo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.vz.springaidemo.service.ChatService;

import java.util.Map;

@RestController
public class GenAiController {

    ChatService service;

    public GenAiController(ChatService service) {
        this.service = service;
    }

    @PostMapping("/ask-ai")
    public ResponseEntity<String> getResponse(@RequestBody Map<String,String> map){
        String prompt=map.get("question");
        return ResponseEntity.ok(service.getResponse(prompt));
    }

}
