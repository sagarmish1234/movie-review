package com.example.moviereview.controller;

import com.example.moviereview.bean.ApiResponse;
import com.example.moviereview.bean.ReviewRequest;
import com.example.moviereview.model.Review;
import com.example.moviereview.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/review")
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    @PostMapping("/save")
    public ResponseEntity<?> saveReview(@Valid @RequestBody ReviewRequest request) {
        reviewService.saveReview(request);
        return ResponseEntity.ok(new ApiResponse("Review saved successfully"));
    }

    @GetMapping("/movie/{movieId}/reviews")
    public ResponseEntity<?> getMovieReviews(@PathVariable Long movieId) {
        List<Review> reviewsFromMovieId = reviewService.getReviewsFromMovieId(movieId);
        return ResponseEntity.ok(reviewsFromMovieId);
    }


}
