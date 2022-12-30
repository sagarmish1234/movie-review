package com.example.moviereview.service;

import com.example.moviereview.model.User;
import com.example.moviereview.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("No user found"));
        return user;
    }

    public UserDetails loadUserById(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        return user.get();
    }

    public void saveUser(User user) throws Exception {
        UserDetails userDetails = null;
        try {
            userDetails = loadUserByUsername(user.getEmail());
        } catch (Exception e) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            User save = userRepository.save(user);
            return;
        }
        System.out.println(userDetails);
        throw new Exception("Email already exists");

    }

    public User loadUserFromContext() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return (User) authentication.getPrincipal();
    }


}
