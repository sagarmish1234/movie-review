package com.example.moviereview.controller;

import com.example.moviereview.bean.ApiResponse;
import com.example.moviereview.bean.JwtAuthenticationResponse;
import com.example.moviereview.bean.LoginRequest;
import com.example.moviereview.model.User;
import com.example.moviereview.security.jwt.JwtTokenProvider;
import com.example.moviereview.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider tokenProvider;


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return ResponseEntity.ok(new ApiResponse("User registered successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(new ApiResponse(e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        try{
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = tokenProvider.generateJwtToken(authentication);
            JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse(jwt,loginRequest.getUsername());
            return ResponseEntity.ok(jwtAuthenticationResponse);
        }catch(Exception e){
            return ResponseEntity.status(404).body(new ApiResponse(e.getMessage()));
        }

    }

}
