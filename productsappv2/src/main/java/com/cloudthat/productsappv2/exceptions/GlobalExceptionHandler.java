package com.cloudthat.productsappv2.exceptions;


import com.cloudthat.productsappv2.model.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    public ResponseEntity<ErrorResponse> ResourceNotFoundExceptionHandler(ResourceNotFoundException ex){

        String message = ex.getMessage();
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND,message);
        return new ResponseEntity<ErrorResponse>(errorResponse, HttpStatus.NOT_FOUND);

    }
}
