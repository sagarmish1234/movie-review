package com.example.moviereview.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewRequest {

    @NotNull
    private Long movieId;

    @NotBlank
    private String body;

    @NotNull
    @Min(value = 0)
    @Max(value = 5)
    private Integer rating;
}
