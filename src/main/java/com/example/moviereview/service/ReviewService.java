package com.example.moviereview.service;

import com.example.moviereview.bean.ReviewRequest;
import com.example.moviereview.model.Review;
import com.example.moviereview.model.User;
import com.example.moviereview.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    UserService userService;


    public void saveReview(ReviewRequest request){
        Review review = new Review();
        User user = userService.loadUserFromContext();
        review.setBody(request.getBody());
        review.setUser(user);
        review.setRating(request.getRating());
        review.setMovieId(request.getMovieId());

        reviewRepository.save(review);
    }

    public List<Review> getReviewsFromMovieId(Long movieId){
        List<Review> all = reviewRepository.findAll();
        List<Review> collect = all.stream().filter(review -> review.getMovieId().equals(movieId)).collect(Collectors.toList());
        return collect;
    }

}
