package com.flexera.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flexera.entity.User;
import com.flexera.repos.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public Optional<User> findByUserId(String userId) {

		return userRepository.findByUserId(userId);
	}

}
