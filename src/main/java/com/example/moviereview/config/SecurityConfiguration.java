package com.example.moviereview.config;

import com.example.moviereview.security.jwt.AuthEntryPointJwt;
import com.example.moviereview.security.jwt.JwtAuthenticationFilter;
import com.example.moviereview.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfiguration {


    @Autowired
    UserService userService;

    @Autowired
    AuthEntryPointJwt authEntryPointJwt;

    @Autowired
    JwtAuthenticationFilter jwtAuthenticationFilter;




    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {

        return authenticationConfiguration.getAuthenticationManager();
    }


    @Bean
    protected SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .exceptionHandling()
                .authenticationEntryPoint(authEntryPointJwt)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests((authorize) -> authorize
                        .antMatchers("/api/auth/**","/api/welcome","/h2-console/**").permitAll()
                        .anyRequest()
                        .authenticated()
                );
        http.headers().frameOptions().disable();
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }


}