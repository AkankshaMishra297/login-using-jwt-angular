package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;


@RestController
@CrossOrigin(origins = "*")
public class AdminHomeController {
	@Autowired
	private UserRepository repository;
	@Autowired 
	private RoleRepository repo;
	
	@GetMapping("/getAllUsers")
	public List<User> findAllUsers() {
		return repository.findAll();
	}
	
	
	@GetMapping("/getRoles")
	public List<Role> getRoles() {
		return repo.findAll();
	}
	@PostMapping("/register")
	public String register(@RequestBody User user) {
		repository.save(user);
		return "user is updated";
	}
	
	

}
