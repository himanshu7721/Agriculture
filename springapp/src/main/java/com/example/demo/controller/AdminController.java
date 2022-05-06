package com.example.demo.controller;


import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Customer;
import com.example.demo.model.LoanApplicantModel;
import com.example.demo.repository.Customer_repository;
import com.example.demo.service.LoanApplicantAdminService;

@RestController
@CrossOrigin(allowedHeaders = "*",origins = "*")
@RequestMapping("/admin/")
public class AdminController {
	
	@Autowired
	public Customer_repository adminRepository;
	
	@Autowired
	private LoanApplicantAdminService adminservice;
	
	//for loan details admin rest API
	@GetMapping("/getAllLoans")
	public List<Customer> approveLoan()
	{
		System.out.println("inside all approved loan");
		return (List<Customer>) adminRepository.findAll();
	}
	//for edit LOAN
	@PutMapping("/editLoan/{id}") 
	public ResponseEntity<Customer> editLoan(@PathVariable int id,@RequestBody Customer repaymentUser)
	{
		return adminservice.editLoan(id, repaymentUser);	
	}
	//for getting findById
	@GetMapping("/deleteLoan/{id}")
	public ResponseEntity<Customer> getById(@PathVariable int id)
	{
		System.out.println("Get by ID for DELETE");
		Customer admin= adminservice.getById(id);
		return ResponseEntity.ok(admin);
	}
	
	//for delete loan rest API
	@DeleteMapping("/deleteLoan/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteLoan(@PathVariable int id)
	{
		System.out.println("IN delete to DELETE");
		Customer admin= adminservice.getById(id);
		adminservice.deleteloan(admin);
		Map<String,Boolean>response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);	
	}
	//for approving the status
	
	@PutMapping("/editStatusA/{id}")
	public ResponseEntity<Customer> editstatusA(@PathVariable int id,@RequestBody Customer userObj)
	{
		System.out.println("Approved loan calling in service");
		System.out.println(id+" "+userObj);
		return adminservice.editstatusA(id, userObj);
	}
	//for rejecting the status
	@PutMapping("/editStatusR/{id}")
	public ResponseEntity<Customer> editstatusR(@PathVariable int id,@RequestBody Customer userObj)
	{
		return adminservice.editstatusR(id, userObj);
	}
	
	
	//for editing Repayment Schedule
	@PutMapping("/editRepaymentSchedule/{id}") 
	public ResponseEntity<Customer> editRepaymentSchedule(@PathVariable int id,@RequestBody Customer repaymentUser)
	{
		System.out.println("we are in EDIT REPAYMENT SCHEDULE");
		deleteRepaymentSchedule(id,repaymentUser);
		return adminservice.editRepaymentSchedule(id, repaymentUser);	
	}
	@GetMapping("/generateSchedule/{id}")
	public int calculateEmi(@PathVariable int id)
	{
		Customer admin= adminservice.getById(id);
	   return  adminservice.calculateEmi(admin);
	}
	//for delete the repayment Schedule
	@PutMapping("/deleteRepaymentSchedule/{id}")
	public ResponseEntity<Customer> deleteRepaymentSchedule(@PathVariable int id,@RequestBody Customer repaymentuser)
	{
		System.out.println("we are in DELETE REPAYMENT SCHEDULE");
		return adminservice.deleteRepaymentSchedule(id, repaymentuser);	
	}
}


